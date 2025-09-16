import React from "react"

export default function ProductCard({ product, onClick }) {
  return (
    <div
      className="border rounded-lg shadow hover:shadow-lg cursor-pointer transition p-4 flex flex-col"
      onClick={() => onClick(product)}
    >
      <img src={product.image} alt={product.name} className="rounded-md mb-4 object-cover h-40 w-full" />
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.specs}</p>
      <p className="mt-auto font-bold text-indigo-600">Rp {product.price.toLocaleString()}</p>
    </div>
  )
}
