import React from "react"

export default function Cart({ cartItems, onRemove }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="fixed top-16 right-4 bg-white border rounded-lg shadow-lg p-4 w-80 max-h-[70vh] overflow-auto z-40">
      <h3 className="font-bold text-lg mb-4">Keranjang Belanja</h3>
      {cartItems.length === 0 ? (
        <p>Keranjang kosong.</p>
      ) : (
        <>
          <ul className="space-y-2">
            {cartItems.map((item, idx) => (
              <li key={idx} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">Rp {item.price.toLocaleString()}</p>
                </div>
                <button
                  onClick={() => onRemove(idx)}
                  className="text-red-500 hover:text-red-700 font-bold"
                  aria-label={`Hapus ${item.name} dari keranjang`}
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
          <p className="font-bold mt-4">Total: Rp {total.toLocaleString()}</p>
          <a
            href={`https://wa.me/6285336753049?text=${encodeURIComponent(
              `Halo Faat Marketplace, saya ingin memesan produk dengan total Rp ${total.toLocaleString()}`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="block mt-4 bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded"
          >
            Checkout via WhatsApp
          </a>
        </>
      )}
    </div>
  )
          }
