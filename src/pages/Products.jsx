import { useState } from 'react'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      id: 1,
      name: "Modern Chandelier",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500",
      category: "Lighting"
    },
    {
      id: 2,
      name: "Ceramic Vase Set",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500",
      category: "Decor"
    },
    {
      id: 3,
      name: "Wooden Utensil Set",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500",
      category: "Kitchen"
    },
    {
      id: 4,
      name: "Modern Coffee Table",
      price: 399.99,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500",
      category: "Furniture"
    }
  ]

  const categories = ['all', 'Lighting', 'Decor', 'Kitchen', 'Furniture']

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
      
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex space-x-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="mt-2 text-lg font-bold text-gray-900">${product.price}</p>
              <button className="mt-4 w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products 