import React, { FormEvent } from 'react';

export const ContactForm: React.FC = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      const res = await fetch('/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await res.json();
      alert(result.success ? '送信完了しました！' : '送信に失敗しました。');
    } catch (error) {
      console.error('Error:', error);
      alert('送信に失敗しました。');
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="お名前"
        required
        className="w-full p-2 border rounded"
      />
      <input
        name="email"
        type="email"
        placeholder="メールアドレス"
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        name="message"
        placeholder="メッセージ"
        required
        className="w-full p-2 border rounded h-32"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        送信
      </button>
    </form>
  );
}; 