import React from "react"

export default function ProductDetailModal({ product, onClose }) {
  if (!product) return null

  const waLink = `https://wa.me/6285336753049?text=Halo%20Faat%20Marketplace,%20saya%20ingin%20memesan%20produk%20${encodeURIComponent(product.name)}`

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-xl"
          aria-label="Close modal"
        >
          &times;
        </button>
        <img src={product.image} alt={product.name} className="rounded-md mb-4 w-full h-48 object-cover" />
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="font-semibold mb-4">Harga: Rp {product.price.toLocaleString()}</p>
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded inline-block"
        >
          Pesan via WhatsApp
        </a>
      </div>
    </div>
  )
}
