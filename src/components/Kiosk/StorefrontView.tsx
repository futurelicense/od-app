import React, { useState } from 'react';
import { SearchIcon, ShoppingCartIcon, UserIcon, HeartIcon, ChevronDownIcon, MenuIcon, StarIcon, XIcon, PlusIcon, MinusIcon, TrashIcon, CreditCardIcon, CheckIcon, ArrowRightIcon, ArrowLeftIcon, MailIcon, LockIcon, BarChartIcon, PackageIcon, TagIcon, TruckIcon, ShieldCheckIcon, ClockIcon, InfoIcon, PhoneIcon, CalendarIcon, MapPinIcon } from 'lucide-react';
// Add kioskData prop to customize the storefront based on selected kiosk
interface StorefrontViewProps {
  kioskData?: {
    id: number;
    name: string;
    description: string;
    rating: number;
    reviewCount: number;
    image: string;
    categories: string[];
    location: string;
    badges: string[];
    deliveryTime: string;
    productCount: number;
  };
}
export const StorefrontView = ({
  kioskData
}: StorefrontViewProps) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);
  const [showAccountCreation, setShowAccountCreation] = useState(false);
  const [guestEmail, setGuestEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [accountCreated, setAccountCreated] = useState(false);
  const [activeView, setActiveView] = useState('products');
  // Use kiosk name from props if available
  const kioskName = kioskData ? kioskData.name : 'OyaDrop Kiosk';
  const kioskDescription = kioskData ? kioskData.description : 'Your one-stop shop for electronics, fashion, and accessories.';
  const kioskLocation = kioskData ? kioskData.location : 'Lekki, Lagos';
  const kioskRating = kioskData ? kioskData.rating : 4.5;
  const kioskReviewCount = kioskData ? kioskData.reviewCount : 120;
  const kioskImage = kioskData?.image || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80';
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
    numericPrice: 15000,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    badge: 'New',
    category: 'electronics'
  }, {
    id: 2,
    name: 'Smart Watch',
    price: '₦25,000',
    numericPrice: 25000,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    badge: 'Bestseller',
    category: 'electronics'
  }, {
    id: 3,
    name: 'Leather Wallet',
    price: '₦8,500',
    numericPrice: 8500,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'accessories'
  }, {
    id: 4,
    name: 'Phone Case',
    price: '₦3,500',
    numericPrice: 3500,
    rating: 4.0,
    image: 'https://images.unsplash.com/photo-1601593346740-925612772163?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'accessories'
  }];
  const products = [...featuredProducts, {
    id: 5,
    name: 'Bluetooth Speaker',
    price: '₦18,000',
    numericPrice: 18000,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    badge: 'Sale',
    category: 'electronics'
  }, {
    id: 6,
    name: 'Backpack',
    price: '₦12,000',
    numericPrice: 12000,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'fashion'
  }, {
    id: 7,
    name: 'Fitness Tracker',
    price: '₦9,500',
    numericPrice: 9500,
    rating: 4.1,
    image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'electronics'
  }, {
    id: 8,
    name: 'Sunglasses',
    price: '₦7,200',
    numericPrice: 7200,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'fashion'
  }];
  // Filter products based on active category
  const filteredProducts = products.filter(product => activeCategory === 'all' || product.category === activeCategory);
  // Cart functions
  const addToCart = (product: Product) => {
    const existingItem = cartItems.find(item => item.product.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => item.product.id === product.id ? {
        ...item,
        quantity: item.quantity + 1
      } : item));
    } else {
      setCartItems([...cartItems, {
        product,
        quantity: 1
      }]);
    }
  };
  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter(item => item.product.id !== productId));
  };
  const updateCartItemQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => item.product.id === productId ? {
      ...item,
      quantity: newQuantity
    } : item));
  };
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.product.numericPrice * item.quantity, 0);
  };
  // Wishlist functions
  const toggleWishlist = (product: Product) => {
    const isInWishlist = wishlistItems.some(item => item.id === product.id);
    if (isInWishlist) {
      setWishlistItems(wishlistItems.filter(item => item.id !== product.id));
    } else {
      setWishlistItems([...wishlistItems, product]);
    }
  };
  const isInWishlist = (productId: number) => {
    return wishlistItems.some(item => item.id === productId);
  };
  // Shop now function
  const handleShopNow = () => {
    const productsSection = document.getElementById('all-products');
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  // Checkout functions
  const startCheckout = () => {
    if (cartItems.length > 0) {
      setShowCart(false);
      setShowCheckout(true);
      setCheckoutStep(1);
    }
  };
  const completeOrder = () => {
    setOrderComplete(true);
    // Store guest email if provided during checkout
    const checkoutEmail = document.getElementById('checkout-email') as HTMLInputElement;
    if (checkoutEmail && checkoutEmail.value) {
      setGuestEmail(checkoutEmail.value);
    }
    setCartItems([]);
  };
  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call an API to create the account
    setAccountCreated(true);
    setShowAccountCreation(false);
  };
  const closeModals = () => {
    setShowCart(false);
    setShowAccount(false);
    setShowWishlist(false);
    if (orderComplete) {
      setShowCheckout(false);
      setOrderComplete(false);
      setShowAccountCreation(false);
      setAccountCreated(false);
      setCheckoutStep(1);
    }
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
              <h1 className="text-2xl font-bold">{kioskName}</h1>
            </div>
            <div className="hidden md:flex flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <input type="text" placeholder="Search for products..." className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
                <SearchIcon className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button onClick={() => setShowAccount(true)} className="hidden md:flex items-center text-white hover:text-indigo-200">
                <UserIcon className="w-5 h-5 mr-1" />
                <span>Account</span>
              </button>
              <button onClick={() => setShowWishlist(true)} className="hidden md:flex items-center text-white hover:text-indigo-200">
                <HeartIcon className="w-5 h-5 mr-1" />
                <span>Wishlist</span>
                {wishlistItems.length > 0 && <span className="ml-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistItems.length}
                  </span>}
              </button>
              <button onClick={() => setShowCart(true)} className="flex items-center text-white hover:text-indigo-200 relative">
                <ShoppingCartIcon className="w-5 h-5 mr-1" />
                <span className="hidden md:inline">Cart</span>
                {getTotalItems() > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
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
      {/* Store Navigation */}
      <div className="bg-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex space-x-6 py-3 overflow-x-auto">
            <button onClick={() => setActiveView('products')} className={`whitespace-nowrap ${activeView === 'products' ? 'font-semibold border-b-2 border-white' : 'hover:text-indigo-200'}`}>
              Shop
            </button>
            <button onClick={() => setActiveView('about')} className={`whitespace-nowrap ${activeView === 'about' ? 'font-semibold border-b-2 border-white' : 'hover:text-indigo-200'}`}>
              About Us
            </button>
            <button onClick={() => setActiveView('reviews')} className={`whitespace-nowrap ${activeView === 'reviews' ? 'font-semibold border-b-2 border-white' : 'hover:text-indigo-200'}`}>
              Reviews
            </button>
            <button onClick={() => setActiveView('contact')} className={`whitespace-nowrap ${activeView === 'contact' ? 'font-semibold border-b-2 border-white' : 'hover:text-indigo-200'}`}>
              Contact
            </button>
            <button onClick={() => setActiveView('policies')} className={`whitespace-nowrap ${activeView === 'policies' ? 'font-semibold border-b-2 border-white' : 'hover:text-indigo-200'}`}>
              Policies
            </button>
          </div>
        </div>
      </div>
      {activeView === 'products' && <>
          {/* Store Banner */}
          <div className="relative">
            <div className="h-64 bg-gradient-to-r from-indigo-500 to-purple-600 overflow-hidden">
              <img src={kioskImage} alt={kioskName} className="w-full h-full object-cover opacity-30" />
            </div>
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 text-white">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    Welcome to {kioskName}
                  </h2>
                  <p className="text-lg text-white text-opacity-90 mb-6">
                    {kioskDescription}
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-1 font-medium">{kioskRating}</span>
                      <span className="ml-1 text-sm text-white text-opacity-80">
                        ({kioskReviewCount} reviews)
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="w-5 h-5" />
                      <span className="ml-1">{kioskLocation}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Store Quick Stats */}
          <div className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-wrap justify-between">
                <div className="flex items-center mr-6 mb-2 md:mb-0">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <PackageIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="ml-2 text-sm">
                    <span className="font-medium">{products.length}</span>{' '}
                    Products
                  </span>
                </div>
                <div className="flex items-center mr-6 mb-2 md:mb-0">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <TruckIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="ml-2 text-sm">
                    <span className="font-medium">Free</span> Delivery
                  </span>
                </div>
                <div className="flex items-center mr-6 mb-2 md:mb-0">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <ShieldCheckIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="ml-2 text-sm">
                    <span className="font-medium">Secure</span> Payments
                  </span>
                </div>
                <div className="flex items-center mb-2 md:mb-0">
                  <div className="bg-indigo-100 p-2 rounded-full">
                    <ClockIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="ml-2 text-sm">
                    <span className="font-medium">24/7</span> Support
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Categories */}
          <div className="bg-gray-50 py-4 border-b border-gray-200">
            <div className="container mx-auto px-4">
              <div className="flex space-x-6 overflow-x-auto">
                {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`whitespace-nowrap px-4 py-2 rounded-full ${activeCategory === category.id ? 'bg-indigo-600 text-white font-medium' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                    {category.name}
                  </button>)}
              </div>
            </div>
          </div>
          {/* Featured Products */}
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                Featured Products
              </h2>
              <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                View All
                <ChevronDownIcon className="w-4 h-4 ml-1 transform rotate-270" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredProducts.map(product => <ProductCard key={product.id} product={product} onAddToCart={() => addToCart(product)} onToggleWishlist={() => toggleWishlist(product)} isInWishlist={isInWishlist(product.id)} />)}
            </div>
          </div>
          {/* All Products */}
          <div id="all-products" className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                {activeCategory === 'all' ? 'All Products' : `${categories.find(c => c.id === activeCategory)?.name}`}
              </h2>
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
              {filteredProducts.map(product => <ProductCard key={product.id} product={product} onAddToCart={() => addToCart(product)} onToggleWishlist={() => toggleWishlist(product)} isInWishlist={isInWishlist(product.id)} />)}
            </div>
          </div>
        </>}
      {activeView === 'about' && <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              About {kioskName}
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Our Story
              </h3>
              <p className="text-gray-600 mb-4">
                {kioskName} was founded in 2020 with a simple mission: to
                provide high-quality products at affordable prices. What started
                as a small online store has grown into one of the most trusted
                retailers in Nigeria.
              </p>
              <p className="text-gray-600">
                We pride ourselves on our commitment to customer satisfaction,
                product quality, and excellent service. Our team works
                tirelessly to source the best products and deliver them to your
                doorstep with care and efficiency.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-indigo-50 rounded-lg p-5 text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TagIcon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="font-medium text-gray-800 mb-2">
                  Quality Products
                </h3>
                <p className="text-gray-600 text-sm">
                  We carefully select every product in our inventory to ensure
                  the highest quality.
                </p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-5 text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TruckIcon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="font-medium text-gray-800 mb-2">
                  Fast Delivery
                </h3>
                <p className="text-gray-600 text-sm">
                  We partner with reliable logistics companies to ensure timely
                  delivery of your orders.
                </p>
              </div>
              <div className="bg-indigo-50 rounded-lg p-5 text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserIcon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="font-medium text-gray-800 mb-2">
                  Customer Service
                </h3>
                <p className="text-gray-600 text-sm">
                  Our dedicated support team is always ready to assist you with
                  any questions or concerns.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Our Team
              </h3>
              <p className="text-gray-600 mb-6">
                Behind {kioskName} is a team of passionate individuals dedicated
                to providing you with the best shopping experience. From our
                product curators to our customer service representatives,
                everyone plays a crucial role in making your shopping journey
                smooth and enjoyable.
              </p>
              <div className="flex justify-center">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium">
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </div>}
      {activeView === 'reviews' && <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Customer Reviews
              </h2>
              <div className="flex items-center">
                <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-1 font-medium">{kioskRating}</span>
                <span className="ml-1 text-sm text-gray-500">
                  ({kioskReviewCount} reviews)
                </span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map(star => <StarIcon key={star} className={`w-8 h-8 ${star <= Math.round(kioskRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />)}
                    </div>
                    <span className="ml-2 text-2xl font-bold">
                      {kioskRating}
                    </span>
                    <span className="ml-1 text-gray-500">out of 5</span>
                  </div>
                  <p className="text-gray-500 mt-1">
                    {kioskReviewCount} customer ratings
                  </p>
                </div>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium">
                  Write a Review
                </button>
              </div>
              <div className="space-y-6">
                {[{
              name: 'John D.',
              date: '2 weeks ago',
              rating: 5,
              comment: 'Excellent service and product quality. The delivery was faster than expected, and the packaging was secure. Will definitely order again!'
            }, {
              name: 'Sarah M.',
              date: '1 month ago',
              rating: 4,
              comment: "Good products and reasonable prices. The only reason I'm not giving 5 stars is because the delivery took a bit longer than expected."
            }, {
              name: 'Michael T.',
              date: '2 months ago',
              rating: 5,
              comment: "I've ordered multiple times from this store, and they never disappoint. Great customer service and product selection."
            }].map((review, index) => <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium text-gray-800">
                          {review.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {review.date}
                        </div>
                      </div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map(star => <StarIcon key={star} className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />)}
                      </div>
                    </div>
                    <p className="mt-2 text-gray-600">{review.comment}</p>
                  </div>)}
              </div>
              <div className="mt-6 text-center">
                <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Load More Reviews
                </button>
              </div>
            </div>
          </div>
        </div>}
      {activeView === 'contact' && <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Us
            </h2>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 bg-indigo-600 text-white">
                  <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                  <p className="mb-6 text-indigo-100">
                    Have a question or feedback? We'd love to hear from you. Our
                    team is ready to assist you.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPinIcon className="w-6 h-6 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Address</h4>
                        <p className="text-indigo-100">{kioskLocation}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <PhoneIcon className="w-6 h-6 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <p className="text-indigo-100">+234 800 123 4567</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MailIcon className="w-6 h-6 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <p className="text-indigo-100">
                          contact@{kioskName.toLowerCase().replace(/\s+/g, '')}
                          .com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CalendarIcon className="w-6 h-6 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Business Hours</h4>
                        <p className="text-indigo-100">Mon-Fri: 9am - 6pm</p>
                        <p className="text-indigo-100">Sat-Sun: 10am - 4pm</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Send a Message
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea rows={4} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                    </div>
                    <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium w-full">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>}
      {activeView === 'policies' && <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Store Policies
            </h2>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="border-b border-gray-200">
                <button className="w-full px-6 py-4 text-left flex items-center justify-between">
                  <span className="font-medium text-gray-800">
                    Shipping Policy
                  </span>
                  <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600 mb-2">
                    We offer standard shipping (2-4 business days) and express
                    shipping (1-2 business days) options.
                  </p>
                  <p className="text-gray-600">
                    Free shipping is available for orders above ₦20,000. For
                    orders below this amount, shipping fees start at ₦1,500,
                    depending on your location and the delivery option selected.
                  </p>
                </div>
              </div>
              <div className="border-b border-gray-200">
                <button className="w-full px-6 py-4 text-left flex items-center justify-between">
                  <span className="font-medium text-gray-800">
                    Return & Refund Policy
                  </span>
                  <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600 mb-2">
                    We accept returns within 7 days of delivery if the product
                    is unused, in its original packaging, and in the same
                    condition you received it.
                  </p>
                  <p className="text-gray-600">
                    Refunds will be processed within 5-7 business days after we
                    receive and inspect the returned item.
                  </p>
                </div>
              </div>
              <div className="border-b border-gray-200">
                <button className="w-full px-6 py-4 text-left flex items-center justify-between">
                  <span className="font-medium text-gray-800">
                    Payment Methods
                  </span>
                  <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    We accept various payment methods, including credit/debit
                    cards, bank transfers, and OyaDrop Wallet. All transactions
                    are secure and encrypted to ensure your payment information
                    is protected.
                  </p>
                </div>
              </div>
              <div>
                <button className="w-full px-6 py-4 text-left flex items-center justify-between">
                  <span className="font-medium text-gray-800">
                    Privacy Policy
                  </span>
                  <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    We respect your privacy and are committed to protecting your
                    personal information. We collect only necessary information
                    to process your orders and improve your shopping experience.
                    We do not share your information with third parties without
                    your consent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>}
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
              <h3 className="text-lg font-semibold mb-4">{kioskName}</h3>
              <p className="text-gray-400 mb-4">
                {kioskDescription} Fast delivery guaranteed!
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.504.207 1.857.344.467.182.8.398 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.023-.047 1.351-.058 3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
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
                <li>{kioskLocation}</li>
                <li>Phone: +234 800 123 4567</li>
                <li>
                  Email: contact@{kioskName.toLowerCase().replace(/\s+/g, '')}
                  .com
                </li>
                <li>Mon-Fri: 9am - 6pm</li>
                <li>Sat-Sun: 10am - 4pm</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2023 {kioskName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* Cart Sidebar */}
      {showCart && <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={closeModals}></div>
          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <div className="relative w-screen max-w-md">
              <div className="h-full flex flex-col bg-white shadow-xl overflow-y-auto">
                <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                      Shopping Cart
                    </h2>
                    <button type="button" className="text-gray-400 hover:text-gray-500" onClick={closeModals}>
                      <XIcon className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="mt-8">
                    {cartItems.length === 0 ? <div className="text-center py-12">
                        <ShoppingCartIcon className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-lg font-medium text-gray-900">
                          Your cart is empty
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Start adding items to your cart to see them here.
                        </p>
                        <div className="mt-6">
                          <button onClick={closeModals} className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                            Continue Shopping
                          </button>
                        </div>
                      </div> : <div className="flow-root">
                        <ul className="-my-6 divide-y divide-gray-200">
                          {cartItems.map(item => <li key={item.product.id} className="py-6 flex">
                              <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                              </div>
                              <div className="ml-4 flex-1 flex flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>{item.product.name}</h3>
                                    <p className="ml-4">{item.product.price}</p>
                                  </div>
                                </div>
                                <div className="flex-1 flex items-end justify-between text-sm">
                                  <div className="flex items-center">
                                    <button onClick={() => updateCartItemQuantity(item.product.id, item.quantity - 1)} className="text-gray-500 hover:text-gray-700 p-1">
                                      <MinusIcon className="h-4 w-4" />
                                    </button>
                                    <span className="mx-2 text-gray-700">
                                      {item.quantity}
                                    </span>
                                    <button onClick={() => updateCartItemQuantity(item.product.id, item.quantity + 1)} className="text-gray-500 hover:text-gray-700 p-1">
                                      <PlusIcon className="h-4 w-4" />
                                    </button>
                                  </div>
                                  <button type="button" onClick={() => removeFromCart(item.product.id)} className="font-medium text-indigo-600 hover:text-indigo-500">
                                    <TrashIcon className="h-5 w-5" />
                                  </button>
                                </div>
                              </div>
                            </li>)}
                        </ul>
                      </div>}
                  </div>
                </div>
                {cartItems.length > 0 && <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>₦{getSubtotal().toLocaleString()}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                      <button onClick={startCheckout} className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                        Checkout
                      </button>
                    </div>
                    <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                      <p>
                        or{' '}
                        <button type="button" className="text-indigo-600 font-medium hover:text-indigo-500" onClick={closeModals}>
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>}
              </div>
            </div>
          </div>
        </div>}
      {/* Account Modal */}
      {showAccount && <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={closeModals}></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                    <UserIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Account Login
                    </h3>
                    <div className="mt-4">
                      <form className="space-y-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                          </label>
                          <input type="email" name="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="you@example.com" />
                        </div>
                        <div>
                          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                          </label>
                          <input type="password" name="password" id="password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="••••••••" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                              Remember me
                            </label>
                          </div>
                          <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                              Forgot your password?
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
                  Sign in
                </button>
                <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm" onClick={closeModals}>
                  Cancel
                </button>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>}
      {/* Wishlist Sidebar */}
      {showWishlist && <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={closeModals}></div>
          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <div className="relative w-screen max-w-md">
              <div className="h-full flex flex-col bg-white shadow-xl overflow-y-auto">
                <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                      Wishlist
                    </h2>
                    <button type="button" className="text-gray-400 hover:text-gray-500" onClick={closeModals}>
                      <XIcon className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="mt-8">
                    {wishlistItems.length === 0 ? <div className="text-center py-12">
                        <HeartIcon className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-2 text-lg font-medium text-gray-900">
                          Your wishlist is empty
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Save items you like to your wishlist.
                        </p>
                        <div className="mt-6">
                          <button onClick={closeModals} className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                            Continue Shopping
                          </button>
                        </div>
                      </div> : <div className="flow-root">
                        <ul className="-my-6 divide-y divide-gray-200">
                          {wishlistItems.map(product => <li key={product.id} className="py-6 flex">
                              <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                              </div>
                              <div className="ml-4 flex-1 flex flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>{product.name}</h3>
                                    <p className="ml-4">{product.price}</p>
                                  </div>
                                  <div className="mt-1 flex items-center">
                                    {[...Array(5)].map((_, i) => <StarIcon key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />)}
                                    <span className="text-xs text-gray-500 ml-1">
                                      {product.rating}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex-1 flex items-end justify-between text-sm">
                                  <div className="flex space-x-2">
                                    <button onClick={() => addToCart(product)} className="font-medium text-indigo-600 hover:text-indigo-500">
                                      Add to Cart
                                    </button>
                                  </div>
                                  <button type="button" onClick={() => toggleWishlist(product)} className="font-medium text-red-600 hover:text-red-500">
                                    <TrashIcon className="h-5 w-5" />
                                  </button>
                                </div>
                              </div>
                            </li>)}
                        </ul>
                      </div>}
                  </div>
                </div>
                {wishlistItems.length > 0 && <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="mt-6 flex justify-center">
                      <button onClick={closeModals} className="flex items-center text-indigo-600 hover:text-indigo-500">
                        Continue Shopping
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>}
              </div>
            </div>
          </div>
        </div>}
      {/* Checkout Modal */}
      {showCheckout && <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={orderComplete ? closeModals : undefined}></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
              {orderComplete ? <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  {accountCreated ? <div className="text-center py-6">
                      <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                        <CheckIcon className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="mt-4 text-xl font-medium text-gray-900">
                        Account Created!
                      </h3>
                      <p className="mt-2 text-gray-600">
                        Your account has been created successfully. You can now
                        use your email and password to sign in for future
                        purchases.
                      </p>
                      <div className="mt-6">
                        <button onClick={closeModals} className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                          Continue Shopping
                        </button>
                      </div>
                    </div> : showAccountCreation ? <div className="py-6">
                      <h3 className="text-xl font-medium text-gray-900 text-center mb-4">
                        Create Your Account
                      </h3>
                      <p className="text-gray-600 text-center mb-6">
                        Save your information for faster checkout next time.
                      </p>
                      <form onSubmit={handleCreateAccount} className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                          </label>
                          <div className="relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <MailIcon className="h-5 w-5 text-gray-400" />
                            </div>
                            <input type="email" value={guestEmail} onChange={e => setGuestEmail(e.target.value)} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com" required />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                          </label>
                          <div className="relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <LockIcon className="h-5 w-5 text-gray-400" />
                            </div>
                            <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" placeholder="Create a password" required minLength={6} />
                          </div>
                        </div>
                        <div className="flex items-center">
                          <input id="marketing-consent" name="marketing-consent" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                          <label htmlFor="marketing-consent" className="ml-2 block text-sm text-gray-900">
                            I want to receive exclusive offers and promotions
                          </label>
                        </div>
                        <div className="flex space-x-3">
                          <button type="submit" className="flex-1 bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none">
                            Create Account
                          </button>
                          <button type="button" onClick={() => setShowAccountCreation(false)} className="flex-1 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                            No Thanks
                          </button>
                        </div>
                      </form>
                    </div> : <div className="text-center py-6">
                      <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                        <CheckIcon className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="mt-4 text-xl font-medium text-gray-900">
                        Order Successful!
                      </h3>
                      <p className="mt-2 text-gray-600">
                        Thank you for your purchase. Your order has been placed
                        successfully.
                      </p>
                      <p className="mt-1 text-gray-600">
                        Order #OD-{Math.floor(100000 + Math.random() * 900000)}
                      </p>
                      <div className="mt-6 space-y-4">
                        <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 max-w-md mx-auto">
                          <h4 className="font-medium text-indigo-800 mb-2">
                            Create an account for faster checkout
                          </h4>
                          <p className="text-indigo-700 text-sm mb-3">
                            Save your information for next time and track your
                            orders easily.
                          </p>
                          <button onClick={() => setShowAccountCreation(true)} className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-indigo-700">
                            Create Account
                          </button>
                        </div>
                        <button onClick={closeModals} className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                          Continue Shopping
                        </button>
                      </div>
                    </div>}
                </div> : <>
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Checkout
                        </h3>
                        <div className="mt-2">
                          <div className="mb-4 border-b border-gray-200">
                            <nav className="flex -mb-px">
                              <button className={`${checkoutStep === 1 ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>
                                1. Shipping
                              </button>
                              <button className={`${checkoutStep === 2 ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ml-8`}>
                                2. Payment
                              </button>
                              <button className={`${checkoutStep === 3 ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ml-8`}>
                                3. Review
                              </button>
                            </nav>
                          </div>
                          {checkoutStep === 1 && <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700">
                                    First Name
                                  </label>
                                  <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700">
                                    Last Name
                                  </label>
                                  <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700">
                                  Address
                                </label>
                                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700">
                                    City
                                  </label>
                                  <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700">
                                    State
                                  </label>
                                  <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option>Lagos</option>
                                    <option>Abuja</option>
                                    <option>Rivers</option>
                                    <option>Kano</option>
                                    <option>Oyo</option>
                                  </select>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700">
                                    Phone
                                  </label>
                                  <input type="tel" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700">
                                    Email
                                  </label>
                                  <input id="checkout-email" type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700">
                                  Delivery Method
                                </label>
                                <div className="mt-2 space-y-2">
                                  <div className="flex items-center">
                                    <input id="standard" name="delivery" type="radio" defaultChecked className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                                    <label htmlFor="standard" className="ml-3 block text-sm font-medium text-gray-700">
                                      Standard Delivery (2-3 days) - ₦1,500
                                    </label>
                                  </div>
                                  <div className="flex items-center">
                                    <input id="express" name="delivery" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                                    <label htmlFor="express" className="ml-3 block text-sm font-medium text-gray-700">
                                      Express Delivery (Next day) - ₦3,000
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>}
                          {checkoutStep === 2 && <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700">
                                  Payment Method
                                </label>
                                <div className="mt-2 space-y-2">
                                  <div className="flex items-center">
                                    <input id="card" name="payment" type="radio" defaultChecked className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                                    <label htmlFor="card" className="ml-3 block text-sm font-medium text-gray-700">
                                      Credit/Debit Card
                                    </label>
                                  </div>
                                  <div className="flex items-center">
                                    <input id="transfer" name="payment" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                                    <label htmlFor="transfer" className="ml-3 block text-sm font-medium text-gray-700">
                                      Bank Transfer
                                    </label>
                                  </div>
                                  <div className="flex items-center">
                                    <input id="wallet" name="payment" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                                    <label htmlFor="wallet" className="ml-3 block text-sm font-medium text-gray-700">
                                      OyaDrop Wallet
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="p-4 border border-gray-200 rounded-md">
                                <div className="flex items-center mb-4">
                                  <CreditCardIcon className="h-6 w-6 text-gray-400 mr-2" />
                                  <h4 className="text-sm font-medium text-gray-900">
                                    Card Details
                                  </h4>
                                </div>
                                <div className="space-y-3">
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                      Card Number
                                    </label>
                                    <input type="text" placeholder="1234 5678 9012 3456" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                  </div>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <label className="block text-sm font-medium text-gray-700">
                                        Expiry Date
                                      </label>
                                      <input type="text" placeholder="MM/YY" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                    </div>
                                    <div>
                                      <label className="block text-sm font-medium text-gray-700">
                                        CVV
                                      </label>
                                      <input type="text" placeholder="123" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                    </div>
                                  </div>
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                      Name on Card
                                    </label>
                                    <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                  </div>
                                </div>
                              </div>
                            </div>}
                          {checkoutStep === 3 && <div className="space-y-4">
                              <h4 className="font-medium text-gray-900">
                                Order Summary
                              </h4>
                              <div className="border border-gray-200 rounded-md overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200">
                                  <thead className="bg-gray-50">
                                    <tr>
                                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Product
                                      </th>
                                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Quantity
                                      </th>
                                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Price
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody className="bg-white divide-y divide-gray-200">
                                    {cartItems.map(item => <tr key={item.product.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                          {item.product.name}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                                          {item.quantity}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                                          ₦
                                          {(item.product.numericPrice * item.quantity).toLocaleString()}
                                        </td>
                                      </tr>)}
                                  </tbody>
                                </table>
                              </div>
                              <div className="bg-gray-50 p-4 rounded-md">
                                <div className="flex justify-between text-sm mb-2">
                                  <span className="text-gray-600">
                                    Subtotal
                                  </span>
                                  <span className="font-medium text-gray-900">
                                    ₦{getSubtotal().toLocaleString()}
                                  </span>
                                </div>
                                <div className="flex justify-between text-sm mb-2">
                                  <span className="text-gray-600">
                                    Shipping
                                  </span>
                                  <span className="font-medium text-gray-900">
                                    ₦1,500
                                  </span>
                                </div>
                                <div className="flex justify-between text-sm mb-2">
                                  <span className="text-gray-600">Tax</span>
                                  <span className="font-medium text-gray-900">
                                    ₦
                                    {Math.round(getSubtotal() * 0.075).toLocaleString()}
                                  </span>
                                </div>
                                <div className="border-t border-gray-200 my-2 pt-2 flex justify-between">
                                  <span className="font-medium text-gray-900">
                                    Total
                                  </span>
                                  <span className="font-bold text-gray-900">
                                    ₦
                                    {(getSubtotal() + 1500 + Math.round(getSubtotal() * 0.075)).toLocaleString()}
                                  </span>
                                </div>
                              </div>
                              <div className="p-4 border border-gray-200 rounded-md bg-gray-50">
                                <h4 className="text-sm font-medium text-gray-900 mb-2">
                                  Shipping Address
                                </h4>
                                <p className="text-sm text-gray-600">
                                  John Doe
                                  <br />
                                  15 Admiralty Way
                                  <br />
                                  Lekki Phase 1, Lagos
                                  <br />
                                  +234 800 123 4567
                                </p>
                              </div>
                              <div className="p-4 border border-gray-200 rounded-md bg-gray-50">
                                <h4 className="text-sm font-medium text-gray-900 mb-2">
                                  Payment Method
                                </h4>
                                <p className="text-sm text-gray-600 flex items-center">
                                  <CreditCardIcon className="h-4 w-4 mr-2 text-gray-400" />
                                  Visa ending in 4242
                                </p>
                              </div>
                            </div>}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    {checkoutStep < 3 ? <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setCheckoutStep(checkoutStep + 1)}>
                        Continue
                      </button> : <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm" onClick={completeOrder}>
                        Place Order
                      </button>}
                    {checkoutStep > 1 && <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm" onClick={() => setCheckoutStep(checkoutStep - 1)}>
                        <ArrowLeftIcon className="h-4 w-4 mr-1" />
                        Back
                      </button>}
                    <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm" onClick={closeModals}>
                      Cancel
                    </button>
                  </div>
                </>}
            </div>
          </div>
        </div>}
    </div>;
};
interface Product {
  id: number;
  name: string;
  price: string;
  numericPrice: number;
  rating: number;
  image: string;
  badge?: string;
  category?: string;
}
interface CartItem {
  product: Product;
  quantity: number;
}
interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
  onToggleWishlist: () => void;
  isInWishlist: boolean;
}
const ProductCard = ({
  product,
  onAddToCart,
  onToggleWishlist,
  isInWishlist
}: ProductCardProps) => {
  return <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-200 border border-gray-200">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        {product.badge && <span className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-full ${product.badge === 'New' ? 'bg-green-500 text-white' : product.badge === 'Sale' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-white'}`}>
            {product.badge}
          </span>}
        <button onClick={onToggleWishlist} className="absolute top-2 left-2 p-1.5 bg-white rounded-full text-gray-600 hover:text-red-500 shadow-sm">
          <HeartIcon className={`w-5 h-5 ${isInWishlist ? 'text-red-500 fill-current' : ''}`} />
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
          <button onClick={onAddToCart} className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full shadow-sm">
            <ShoppingCartIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>;
};