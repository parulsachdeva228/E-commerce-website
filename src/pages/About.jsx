const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About HomeDecor</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your destination for beautiful home decor and lifestyle products that transform spaces into sanctuaries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600">
            Founded in 2024, HomeDecor was born from a passion for creating beautiful living spaces. 
            We believe that everyone deserves to live in a home that reflects their personality and brings them joy.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            We're dedicated to curating the finest selection of home decor items, from elegant lighting 
            to stylish furniture, helping you create the home of your dreams.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Products</h3>
            <p className="text-gray-600">
              We carefully select each item to ensure the highest quality and durability.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Shipping</h3>
            <p className="text-gray-600">
              Quick and reliable delivery to your doorstep, wherever you are.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Support</h3>
            <p className="text-gray-600">
              Our dedicated team is always here to help you with any questions.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-4">
          Have questions? We'd love to hear from you.
        </p>
        <div className="space-y-2">
          <p className="text-gray-600">Email: info@homedecor.com</p>
          <p className="text-gray-600">Phone: (123) 456-7890</p>
          <p className="text-gray-600">Address: 123 Home Street, Decor City, DC 12345</p>
        </div>
      </div>
    </div>
  )
}

export default About 