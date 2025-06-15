import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-gray-800">
                HomeDecor
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link to="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
              <Link to="/cart" className="text-gray-600 hover:text-gray-900">Cart</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-300">Your one-stop shop for beautiful home decor and lifestyle products.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/products" className="text-gray-300 hover:text-white">Products</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-300">Email: info@homedecor.com</p>
              <p className="text-gray-300">Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-300">
            <p>&copy; 2024 HomeDecor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout 