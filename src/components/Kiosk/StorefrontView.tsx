import React, { useState } from 'react';
import { SearchIcon, ShoppingCartIcon, UserIcon, HeartIcon, ChevronDownIcon, MenuIcon, StarIcon } from 'lucide-react';
export const StorefrontView = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cartCount, setCartCount] = useState(0);
  const categories = [{
    id: 'all',
    name: 'All Products'
  }, {
    id: 'electronics',
    name: 'Electronics'
  }, {
    id: 'fashion',
    name: 'Fashion'
  }, {
    id: 'accessories',
    name: 'Accessories'
  }, {
    id: 'home-kitchen',
    name: 'Home & Kitchen'
  }, {
    id: 'beauty',
    name: 'Beauty'
  }];
  const featuredProducts = [{
    id: 1,
    name: 'Wireless Earbuds',
    price: '₦15,000',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    badge: 'New'
  }, {
    id: 2,
    name: 'Smart Watch',
    price: '₦25,000',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    badge: 'Bestseller'
  }, {
    id: 3,
    name: 'Leather Wallet',
    price: '₦8,500',
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }, {
    id: 4,
    name: 'Phone Case',
    price: '₦3,500',
    rating: 4.0,
    image: 'https://images.unsplash.com/photo-1601593346740-925612772163?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }];
  const products = [...featuredProducts, {
    id: 5,
    name: 'Bluetooth Speaker',
    price: '₦18,000',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    badge: 'Sale'
  }, {
    id: 6,
    name: 'Backpack',
    price: '₦12,000',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }, {
    id: 7,
    name: 'Fitness Tracker',
    price: '₦9,500',
    rating: 4.1,
    image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }, {
    id: 8,
    name: 'Sunglasses',
    price: '₦7,200',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }];
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };
  return <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-indigo-600 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button className="md:hidden mr-3">
                <MenuIcon className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-bold">OyaDrop Kiosk</h1>
            </div>
            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <input type="text" placeholder="Search for products..." className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
                <SearchIcon className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hidden md:flex items-center text-white hover:text-indigo-200">
                <UserIcon className="w-5 h-5 mr-1" />
                <span>Account</span>
              </button>
              <button className="hidden md:flex items-center text-white hover:text-indigo-200">
                <HeartIcon className="w-5 h-5 mr-1" />
                <span>Wishlist</span>
              </button>
              <button className="flex items-center text-white hover:text-indigo-200 relative">
                <ShoppingCartIcon className="w-5 h-5 mr-1" />
                <span className="hidden md:inline">Cart</span>
                {cartCount > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>}
              </button>
            </div>
          </div>
          <div className="mt-4 md:hidden relative">
            <input type="text" placeholder="Search for products..." className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
            <SearchIcon className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
          </div>
        </div>
      </header>
      {/* Categories */}
      <div className="bg-indigo-700 text-white overflow-x-auto">
        <div className="container mx-auto px-4">
          <div className="flex space-x-6 py-3">
            {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`whitespace-nowrap ${activeCategory === category.id ? 'font-semibold border-b-2 border-white' : 'hover:text-indigo-200'}`}>
                {category.name}
              </button>)}
          </div>
        </div>
      </div>
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-12 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Summer Sale Up to 50% Off
            </h2>
            <p className="text-indigo-100 mb-6">
              Discover amazing deals on our best-selling products. Limited time
              offer!
            </p>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-100 transition duration-200">
              Shop Now
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Summer Sale" className="rounded-lg shadow-lg max-w-xs md:max-w-sm" />
          </div>
        </div>
      </div>
      {/* Featured Products */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Featured Products
          </h2>
          <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
            View All
            <ChevronDownIcon className="w-4 h-4 ml-1 transform rotate-270" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => <ProductCard key={product.id} product={product} onAddToCart={addToCart} />)}
        </div>
      </div>
      {/* Categories Highlight */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.filter(cat => cat.id !== 'all').map(category => <div key={category.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-200">
                  <div className="h-32 bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-600 font-medium">
                      {category.name}
                    </span>
                  </div>
                  <div className="p-4">
                    <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                      Browse
                    </button>
                  </div>
                </div>)}
          </div>
        </div>
      </div>
      {/* All Products */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">All Products</h2>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">Sort by:</span>
            <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
              <option>Best Selling</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => <ProductCard key={product.id} product={product} onAddToCart={addToCart} />)}
        </div>
        <div className="mt-8 flex justify-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold">
            Load More Products
          </button>
        </div>
      </div>
      {/* Newsletter */}
      <div className="bg-indigo-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Stay updated with our latest products and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center max-w-lg mx-auto">
            <input type="email" placeholder="Your email address" className="px-4 py-3 rounded-lg sm:rounded-r-none mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full" />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg sm:rounded-l-none font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">OyaDrop Kiosk</h3>
              <p className="text-gray-400 mb-4">
                Your one-stop shop for electronics, fashion, and accessories.
                Fast delivery guaranteed!
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Deals
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Returns & Refunds
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>15 Admiralty Way, Lekki Phase 1, Lagos</li>
                <li>Phone: +234 800 123 4567</li>
                <li>Email: kiosk@oyadrop.com</li>
                <li>Mon-Fri: 9am - 6pm</li>
                <li>Sat-Sun: 10am - 4pm</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2023 OyaDrop Kiosk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};
interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: string;
    rating: number;
    image: string;
    badge?: string;
  };
  onAddToCart: () => void;
}
const ProductCard = ({
  product,
  onAddToCart
}: ProductCardProps) => {
  return <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-200">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        {product.badge && <span className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-full ${product.badge === 'New' ? 'bg-green-500 text-white' : product.badge === 'Sale' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-white'}`}>
            {product.badge}
          </span>}
        <button className="absolute top-2 left-2 p-1.5 bg-white rounded-full text-gray-600 hover:text-red-500">
          <HeartIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-800 mb-1">{product.name}</h3>
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => <StarIcon key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current fill-none'}`} />)}
          </div>
          <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-gray-800">{product.price}</span>
          <button onClick={onAddToCart} className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full">
            <ShoppingCartIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>;
};