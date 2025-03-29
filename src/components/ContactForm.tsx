import React, { FormEvent, useState } from 'react';

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

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

      let result;
      try {
        result = await res.json();
      } catch (parseError) {
        console.error('Response parse error:', parseError);
        throw new Error('サーバーからの応答が不正です。');
      }
      
      if (!res.ok) {
        throw new Error(result.error || '送信に失敗しました。');
      }

      alert(result.message || '送信完了しました！');
      form.reset();
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : '送信に失敗しました。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      <input
        name="name"
        placeholder="お名前"
        required
        className="w-full p-2 border rounded"
        disabled={isSubmitting}
      />
      <input
        name="email"
        type="email"
        placeholder="メールアドレス"
        required
        className="w-full p-2 border rounded"
        disabled={isSubmitting}
      />
      <textarea
        name="message"
        placeholder="メッセージ"
        required
        className="w-full p-2 border rounded h-32"
        disabled={isSubmitting}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        disabled={isSubmitting}
      >
        {isSubmitting ? '送信中...' : '送信'}
      </button>
    </form>
  );
}; 