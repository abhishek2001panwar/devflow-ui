'use client';
import { useState } from 'react';

export default function DashboardPage() {
  const [code, setCode] = useState('');

  const handleSubmit = async () => {
    await fetch('/api/templates', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    });
    alert('Submitted successfully!');
    setCode('');
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Submit Your UI Component</h1>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-64 border rounded p-4"
        placeholder="// Paste your code here"
      />
      <button onClick={handleSubmit} className="mt-4 bg-black text-white px-4 py-2 rounded">
        Submit
      </button>
    </div>
  );
}
