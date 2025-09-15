import React from "react"
export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 flex justify-between items-center shadow-lg sticky top-0 z-50">
      <h1 className="text-2xl font-bold">Faat Marketplace</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#products" className="hover:underline">Produk</a></li>
          <li><a href="#about" className="hover:underline">Tentang</a></li>
          <li><a href="#contact" className="hover:underline">Kontak</a></li>
        </ul>
      </nav>
    </header>
  )
}
