'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          重建新家
        </Link>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <ul className={`${isOpen ? 'block' : 'hidden'} md:flex space-y-2 md:space-y-0 md:space-x-6 absolute md:static top-full left-0 right-0 bg-white md:bg-transparent p-4 md:p-0`}>
          <li>
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              首頁
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              部落格
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              關於
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              聯絡
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
