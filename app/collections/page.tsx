"use client"

import  { useState } from 'react'
import Image from 'next/image'

function Page() {
     const [searchQuery, setSearchQuery] = useState('');
     const products = [
    { id: 1, name: 'Blue Shirt', price: '$99', image: 'p1.png' },
    { id: 2, name: 'Pink Jacket', price: '$70', image: 'p2.png' },
    { id: 3, name: 'Black Jogger', price: '$100', image: 'p3.png' },
    { id: 4, name: 'White Plain T-Shirt', price: '$33', image: 'P4.png' },
    { id: 5, name: 'Goal T-Shirt', price: '$45', image: 'p5.png' }
  ];
   

  const handleClear = () => {
    setSearchQuery('');
  };

  const handleSearch = (e:any) => {
    e.preventDefault();
    console.log('Search:', searchQuery);
  };

  return (
    <>
    <div className="min-h-screen bg-white">
      {/* HEADER */}
 <div className="w-full bg-gray-50 px-6 py-4">
      <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
        <div className="relative flex items-center">
          {/* SEARCH INPUT */}
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-3 rounded-full border-2 border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-700 transition-colors text-base"
          />

          {/* SEARCH ICON */}
          <button
            type="submit"
            className="absolute right-12 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* CLEAR BUTTON (X) */}
          {searchQuery && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-4 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </form>
    </div>
      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-12">
          {/* FILTERS SIDEBAR */}
          <aside className="w-72 flex-shrink-0">
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              {/* CATEGORIES */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wider">CATEGORIES</h3>
                <div className="space-y-4">
                  {['Men', 'Women', 'kids'].map((cat) => (
                    <label key={cat} className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border-2 border-gray-300 rounded cursor-pointer accent-gray-800"
                      />
                      <span className="ml-3 text-gray-700 text-sm capitalize group-hover:text-gray-900">
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* DIVIDER */}
              <div className="border-t border-gray-200 my-6"></div>

              {/* TYPE */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-4 tracking-wider">TYPE</h3>
                <div className="space-y-4">
                  {['Topwear', 'Bottomwear', 'Winterwear'].map((type) => (
                    <label key={type} className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border-2 border-gray-300 rounded cursor-pointer accent-gray-800"
                      />
                      <span className="ml-3 text-gray-700 text-sm group-hover:text-gray-900">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* PRODUCTS SECTION */}
          
          <div className="flex-1">
            <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-light tracking-wide text-gray-800">
            <span className="text-gray-400">ALL</span>
            <span className="mx-4">COLLECTIONS</span> —
          </h1>
        </div>
            {/* SORT DROPDOWN */}
            <div className="flex justify-end mb-8">
              <select className="px-5 py-2 border-2 border-gray-300 bg-white text-gray-700 text-sm font-medium rounded cursor-pointer hover:border-gray-400 focus:outline-none focus:border-gray-800">
                <option>Sort by: Relevant</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  {/* PRODUCT IMAGE */}
                  <div className="h-96 bg-gray-100 overflow-hidden rounded-lg mb-4 flex items-center justify-center relative">
                    <Image
                      src={`/${product.image}`}
                      alt={product.name}
                      fill
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* PRODUCT INFO */}
                  <div>
                    <h3 className="text-gray-800 text-base mb-2 line-clamp-2 group-hover:text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-gray-700 font-semibold text-base">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  
    </>
  )
}

export default Page