import React, { useState } from "react";
import * as tf from "@tensorflow/tfjs";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Đăng ký Chart.js
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

const API_KEY = "1cabc342b94a9cb8add0a5a91563125e"; // ⚠️ API key của bạn

// Hàm AI dự đoán kWh từ số giờ nắng
const predictSolar = async (sunHours: number) => {
  const xs = tf.tensor1d([3, 4, 5, 6, 7, 8, 9]);
  const ys = tf.tensor1d([2, 3.2, 4.1, 5.5, 6.7, 7.5, 9]);

  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
  model.compile({ optimizer: "sgd", loss: "meanSquaredError" });

  await model.fit(xs, ys, { epochs: 200, verbose: 0 });

  const pred = model.predict(tf.tensor2d([sunHours], [1, 1])) as tf.Tensor;
  const result = await pred.data();
  return result[0].toFixed(2);
};

export default function Dashboard() {
  const [city, setCity] = useState("Hanoi");
  const [hours, setHours] = useState<number | null>(null);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      // proxy cho giờ nắng: nếu trời nhiều mây thì giờ nắng thấp
      const cloud = data.clouds?.all || 50; // %
      const estimatedHours = Math.max(3, 9 - cloud / 15); // đơn giản hóa

      setHours(estimatedHours);

      const result = await predictSolar(estimatedHours);
      setPrediction(result);
    } catch (err) {
      alert("Không lấy được dữ liệu thời tiết. Kiểm tra API key hoặc tên thành phố!");
    } finally {
      setLoading(false);
    }
  };

  const chartData = {
    labels: ["3h", "4h", "5h", "6h", "7h", "8h", "9h"],
    datasets: [
      {
        label: "Sản lượng mẫu (kWh)",
        data: [2, 3.2, 4.1, 5.5, 6.7, 7.5, 9],
        borderColor: "rgba(34,197,94,1)",
        backgroundColor: "rgba(34,197,94,0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-green-700">📊 Solar Dashboard</h1>
      <p>AI dự đoán sản lượng điện mặt trời dựa trên dữ liệu thời tiết thực tế.</p>

      {/* Input */}
      <div className="flex space-x-4 items-center">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Nhập thành phố (VD: Hanoi)"
          className="border rounded px-3 py-2 w-64"
        />
        <button
          onClick={fetchWeather}
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? "Đang tải..." : "Dự đoán"}
        </button>
      </div>

      {/* Kết quả */}
      {prediction && hours && (
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-green-700">Kết quả</h2>
          <p>
            Ở <b>{city}</b>, hôm nay có khoảng <b>{hours.toFixed(1)} giờ nắng</b>.{" "}
            AI dự đoán sản lượng: <b>{prediction} kWh</b>
          </p>
        </div>
      )}

      {/* Chart */}
      <div className="bg-white p-4 shadow-md rounded-lg">
        <Line data={chartData} />
      </div>
    </div>
  );
}
