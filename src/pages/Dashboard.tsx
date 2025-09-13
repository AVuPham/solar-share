import React, { useState } from "react";
import * as tf from "@tensorflow/tfjs";
import { Line } from "react-chartjs-2";

// Hàm AI đơn giản dự đoán sản lượng theo giờ nắng
const predictSolar = async (sunHours: number) => {
  // Dữ liệu training giả định (số giờ nắng → kWh sản lượng)
  const xs = tf.tensor1d([3, 4, 5, 6, 7, 8, 9]);
  const ys = tf.tensor1d([2, 3.2, 4.1, 5.5, 6.7, 7.5, 9]);

  // Model Linear Regression y = ax + b
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
  model.compile({ optimizer: "sgd", loss: "meanSquaredError" });

  // Train nhanh
  await model.fit(xs, ys, { epochs: 200, verbose: 0 });

  // Dự đoán
  const pred = model.predict(tf.tensor2d([sunHours], [1, 1])) as tf.Tensor;
  const result = await pred.data();
  return result[0].toFixed(2); // kWh
};

export default function Dashboard() {
  const [hours, setHours] = useState(6);
  const [prediction, setPrediction] = useState<string | null>(null);

  const handlePredict = async () => {
    const result = await predictSolar(hours);
    setPrediction(result);
  };

  // Chart data (mẫu)
  const chartData = {
    labels: ["3h", "4h", "5h", "6h", "7h", "8h", "9h"],
    datasets: [
      {
        label: "Sản lượng mẫu (kWh)",
        data: [2, 3.2, 4.1, 5.5, 6.7, 7.5, 9],
        borderColor: "rgba(34,197,94,1)", // xanh lá
        fill: false,
      },
    ],
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-green-700">📊 Solar Dashboard</h1>
      <p>
        Dự đoán sản lượng điện mặt trời theo số giờ nắng trung bình trong ngày.
      </p>

      {/* Input */}
      <div className="flex space-x-4 items-center">
        <label className="font-semibold">Số giờ nắng hôm nay:</label>
        <input
          type="number"
          value={hours}
          min={3}
          max={9}
          onChange={(e) => setHours(parseInt(e.target.value))}
          className="border rounded px-3 py-1 w-24"
        />
        <button
          onClick={handlePredict}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Dự đoán
        </button>
      </div>

      {/* Kết quả */}
      {prediction && (
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-xl font-semibold text-green-700">Kết quả</h2>
          <p>
            Với <b>{hours} giờ nắng</b>, hệ thống dự đoán sản lượng điện:{" "}
            <b>{prediction} kWh</b>
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
