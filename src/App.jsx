import React, { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ProductCard from "./components/ProductCard"
import ProductDetailModal from "./components/ProductDetailModal"
import Cart from "./components/Cart"
import MusicPlayer from "./components/MusicPlayer"
import products from "./data/products"

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems([...cartItems, product])
    alert(`${product.name} berhasil ditambahkan ke keranjang!`)
  }

  const removeFromCart = (index) => {
    const newCart = [...cartItems]
    newCart.splice(index, 1)
    setCartItems(newCart)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto p-4">
        {/* Hero Section */}
        <section className="text-center my-8">
          <h2 className="text-4xl font-extrabold mb-4 text-indigo-700">Selamat Datang di Faat Marketplace</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Marketplace terpercaya untuk panel Pterodactyl, VPS Digital Ocean, layanan sosial media, dan nomor virtual WhatsApp.
          </p>
        </section>

        {/* Produk */}
        <section id="products" className="my-8">
          <h3 className="text-2xl font-bold mb-6">Produk Kami</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} onClick={setSelectedProduct} />
                <button
                  onClick={() => addToCart(product)}
                  className="mt-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded"
                >
                  Tambah ke Keranjang
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Tentang */}
        <section id="about" className="my-12 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Tentang Faat Marketplace</h3>
          <p className="text-gray-700">
            Faat Marketplace menyediakan berbagai layanan digital seperti panel Pterodactyl untuk bot WhatsApp, VPS Digital Ocean dengan berbagai spesifikasi, layanan sosial media untuk meningkatkan engagement, dan nomor virtual WhatsApp dari berbagai negara. Kami berkomitmen memberikan produk berkualitas dengan pelayanan terbaik.
          </p>
        </section>

        {/* Kontak */}
        <section id="contact" className="my-12 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Hubungi Kami</h3>
          <p className="mb-2">
            WhatsApp Utama:{" "}
            <a href="https://wa.me/6285336753049" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
              +62 853-3675-3049
            </a>
          </p>
          <p>
            WhatsApp Cadangan:{" "}
            <a href="https://wa.me/6281324574566" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
              +62 813-2457-4566
            </a>
          </p>
        </section>
      </main>

      <Footer />

      {/* Modal Detail Produk */}
      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

      {/* Keranjang */}
      <Cart cartItems={cartItems} onRemove={removeFromCart} />

      {/* Musik Background */}
      <MusicPlayer />
    </div>
  )
        }
