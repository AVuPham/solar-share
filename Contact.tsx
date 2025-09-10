import React, { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true) }

  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-bold text-sky-600 mb-4">Liên hệ</h1>
      {!sent ? (
        <form onSubmit={submit} className="space-y-3">
          <input className="w-full border rounded p-2" placeholder="Tên" value={name} onChange={e=>setName(e.target.value)} />
          <input className="w-full border rounded p-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <textarea className="w-full border rounded p-2" placeholder="Nội dung" value={message} onChange={e=>setMessage(e.target.value)} />
          <button className="bg-sky-600 text-white px-4 py-2 rounded">Gửi</button>
        </form>
      ) : (
        <div className="text-green-600">Cảm ơn! Chúng tôi đã nhận thông tin.</div>
      )}
    </div>
  )
}
