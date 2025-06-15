import { Link } from 'react-router-dom'

const Home = () => {
  const featuredProducts = [
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
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200"
            alt="Home decor"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Transform Your Space
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Discover beautiful home decor and lifestyle products that bring elegance and style to your living space.
          </p>
          <div className="mt-10">
            <Link
              to="/products"
              className="inline-block bg-white px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 hover:bg-gray-100"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
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

      {/* Categories Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Lighting', 'Decor', 'Kitchen', 'Furniture'].map((category) => (
              <div
                key={category}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900">{category}</h3>
                <Link
                  to={`/products?category=${category.toLowerCase()}`}
                  className="mt-4 inline-block text-gray-600 hover:text-gray-900"
                >
                  View All →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home 