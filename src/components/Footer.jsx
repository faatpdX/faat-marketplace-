import React from "react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 p-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
        <div>
          <h2 className="font-bold text-lg mb-2">Faat Marketplace</h2>
          <p>Marketplace terpercaya untuk panel, VPS, dan layanan sosial media.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <h3 className="font-semibold mb-2">Kontak WhatsApp</h3>
          <ul>
            <li>
              <a href="https://wa.me/6285336753049" target="_blank" rel="noreferrer" className="hover:underline">
                WA Utama: +62 853-3675-3049
              </a>
            </li>
            <li>
              <a href="https://wa.me/6281324574566" target="_blank" rel="noreferrer" className="hover:underline">
                WA Cadangan: +62 813-2457-4566
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Faat Marketplace. All rights reserved.
      </div>
    </footer>
  )
}
