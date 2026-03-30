'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SignUp:', { name, email, password });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        
        {/* TITLE */}
        <h1 className="text-4xl font-light text-center text-gray-900 mb-12 tracking-wide">
          Sign Up <span className="text-gray-400">—</span>
        </h1>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* NAME INPUT */}
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 border-2 border-gray-400 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors"
          />

          {/* EMAIL INPUT */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border-2 border-gray-400 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors"
          />

          {/* PASSWORD INPUT */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 border-2 border-gray-400 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 transition-colors"
          />

          {/* LINKS */}
          <div className="flex justify-between text-sm">
            <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
              Forgot your password?
            </a>
            <Link href="/login" className="text-gray-700 hover:text-gray-900 transition-colors">
              Login Here
            </Link>
          </div>

          {/* SIGN UP BUTTON */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="px-12 py-3 bg-black text-white font-semibold hover:bg-gray-900 transition-colors duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}