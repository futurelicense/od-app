import React, { useState } from 'react';
import { SearchIcon, FilterIcon, ChevronDownIcon, StarIcon, MapPinIcon, TagIcon, ShoppingBagIcon, ArrowRightIcon, TruckIcon, CheckCircleIcon, GridIcon, ShieldCheckIcon, UserIcon, GlobeIcon } from 'lucide-react';
import { KioskCard } from './KioskCard';
import { StorefrontView } from '../Kiosk/StorefrontView';
export const MarketplaceSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedKiosk, setSelectedKiosk] = useState<any>(null);
  const categories = [{
    id: 'all',
    name: 'All Kiosks'
  }, {
    id: 'electronics',
    name: 'Electronics'
  }, {
    id: 'fashion',
    name: 'Fashion'
  }, {
    id: 'food',
    name: 'Food & Groceries'
  }, {
    id: 'health',
    name: 'Health & Beauty'
  }, {
    id: 'home',
    name: 'Home & Kitchen'
  }];
  // Sample kiosk data
  const kiosks = [{
    id: 1,
    name: 'TechHub',
    description: 'Your one-stop shop for all electronics and gadgets',
    rating: 4.8,
    reviewCount: 124,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    categories: ['electronics'],
    location: 'Lekki, Lagos',
    badges: ['Featured', 'Top Rated'],
    deliveryTime: '1-2 days',
    productCount: 156
  }, {
    id: 2,
    name: 'Fashion Forward',
    description: 'Trendy clothing and accessories for men and women',
    rating: 4.5,
    reviewCount: 98,
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    categories: ['fashion'],
    location: 'Ikeja, Lagos',
    badges: ['New'],
    deliveryTime: '2-3 days',
    productCount: 230
  }, {
    id: 3,
    name: 'Organic Grocery',
    description: 'Fresh organic produce and healthy food items',
    rating: 4.7,
    reviewCount: 156,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    categories: ['food'],
    location: 'Victoria Island, Lagos',
    badges: ['Organic'],
    deliveryTime: 'Same Day',
    productCount: 89
  }, {
    id: 4,
    name: 'Beauty Haven',
    description: 'Premium skincare, makeup and beauty products',
    rating: 4.6,
    reviewCount: 112,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    categories: ['health'],
    location: 'Ikoyi, Lagos',
    badges: ['Premium'],
    deliveryTime: '1-3 days',
    productCount: 178
  }, {
    id: 5,
    name: 'Home Essentials',
    description: 'Everything you need for your home and kitchen',
    rating: 4.4,
    reviewCount: 87,
    image: 'https://images.unsplash.com/photo-1556911220-bda9f7f7597e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    categories: ['home'],
    location: 'Ajah, Lagos',
    badges: [],
    deliveryTime: '2-4 days',
    productCount: 210
  }, {
    id: 6,
    name: 'Gadget World',
    description: 'Latest smartphones, laptops and electronic accessories',
    rating: 4.7,
    reviewCount: 143,
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    categories: ['electronics'],
    location: 'Maryland, Lagos',
    badges: ['Hot Deals'],
    deliveryTime: '1-2 days',
    productCount: 132
  }, {
    id: 7,
    name: 'Urban Style',
    description: 'Contemporary fashion for the modern urban lifestyle',
    rating: 4.3,
    reviewCount: 76,
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    categories: ['fashion'],
    location: 'Surulere, Lagos',
    badges: [],
    deliveryTime: '2-3 days',
    productCount: 185
  }, {
    id: 8,
    name: 'Kitchen Delights',
    description: 'Cookware, appliances and kitchen tools for every chef',
    rating: 4.5,
    reviewCount: 92,
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    categories: ['home'],
    location: 'Yaba, Lagos',
    badges: ['Best Seller'],
    deliveryTime: '2-4 days',
    productCount: 124
  }];
  // Filter kiosks based on active category and search query
  const filteredKiosks = kiosks.filter(kiosk => {
    // Filter by category
    const categoryMatch = activeCategory === 'all' || kiosk.categories.includes(activeCategory);
    // Filter by search query
    const searchMatch = searchQuery === '' || kiosk.name.toLowerCase().includes(searchQuery.toLowerCase()) || kiosk.description.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });
  // Handler for clicking on a kiosk
  const handleKioskSelect = kiosk => {
    setSelectedKiosk(kiosk);
  };
  // Handler to go back to marketplace
  const handleBackToMarketplace = () => {
    setSelectedKiosk(null);
  };
  // If a kiosk is selected, show its storefront
  if (selectedKiosk) {
    return <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">
            {selectedKiosk.name}
          </h1>
          <button onClick={handleBackToMarketplace} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center">
            <ArrowRightIcon className="w-4 h-4 mr-2 transform rotate-180" />
            Back to Marketplace
          </button>
        </div>
        <StorefrontView kioskData={selectedKiosk} />
      </div>;
  }
  return <div className="space-y-6">
      {/* Marketplace Header with Orange Theme */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white">
              OyaDrop Marketplace
            </h1>
            <p className="text-white text-opacity-90 mt-1">
              Discover and shop from thousands of vendors in one place
            </p>
          </div>
          <div className="hidden md:block">
            <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80" alt="Marketplace" className="h-20 w-20 rounded-full border-4 border-white shadow-md" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input type="text" placeholder="Search for kiosks, products, or services..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 shadow-md" />
            <SearchIcon className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
          </div>
          <button onClick={() => setShowFilters(!showFilters)} className="bg-white text-orange-600 px-4 py-3 rounded-lg flex items-center justify-center shadow-md hover:bg-orange-50">
            <FilterIcon className="w-5 h-5 mr-2" />
            Filters
            <ChevronDownIcon className={`w-4 h-4 ml-1 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
      {/* Filter panel */}
      {showFilters && <div className="bg-white rounded-lg shadow-lg p-5 border border-orange-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400" value={activeCategory} onChange={e => setActiveCategory(e.target.value)}>
                {categories.map(category => <option key={category.id} value={category.id}>
                    {category.name}
                  </option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400">
                <option>All Locations</option>
                <option>Lekki</option>
                <option>Ikeja</option>
                <option>Victoria Island</option>
                <option>Yaba</option>
                <option>Surulere</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400">
                <option>Featured</option>
                <option>Highest Rated</option>
                <option>Most Popular</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <label className="inline-flex items-center px-3 py-2 bg-orange-50 rounded-full text-sm border border-orange-100">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 mr-2" />
              Free Delivery
            </label>
            <label className="inline-flex items-center px-3 py-2 bg-orange-50 rounded-full text-sm border border-orange-100">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 mr-2" />
              Same Day Delivery
            </label>
            <label className="inline-flex items-center px-3 py-2 bg-orange-50 rounded-full text-sm border border-orange-100">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 mr-2" />
              Top Rated
            </label>
            <label className="inline-flex items-center px-3 py-2 bg-orange-50 rounded-full text-sm border border-orange-100">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-orange-500 mr-2" />
              New Arrivals
            </label>
          </div>
          <div className="flex justify-end mt-5">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg mr-2">
              Reset
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
              Apply Filters
            </button>
          </div>
        </div>}
      {/* Categories tabs */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="border-b border-gray-200 overflow-x-auto bg-orange-50">
          <div className="flex px-4">
            {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`whitespace-nowrap py-4 px-4 text-sm font-medium ${activeCategory === category.id ? 'border-b-2 border-orange-500 text-orange-600 bg-white' : 'text-gray-600 hover:text-orange-500'}`}>
                {category.name}
              </button>)}
          </div>
        </div>
        {/* Featured kiosks section */}
        {activeCategory === 'all' && <div className="p-6 border-b border-gray-200 bg-gradient-to-br from-orange-50 to-amber-50">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <StarIcon className="w-5 h-5 text-orange-500 mr-2 fill-current" />
                Featured Kiosks
              </h2>
              <button className="text-orange-500 hover:text-orange-600 text-sm font-medium flex items-center">
                View All
                <ArrowRightIcon className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {kiosks.filter(kiosk => kiosk.badges.includes('Featured') || kiosk.badges.includes('Top Rated')).slice(0, 3).map(kiosk => <KioskCard key={kiosk.id} kiosk={kiosk} onViewKiosk={() => handleKioskSelect(kiosk)} onShopNow={() => handleKioskSelect(kiosk)} />)}
            </div>
          </div>}
        {/* All kiosks grid */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-5 flex items-center">
            <GridIcon className="w-5 h-5 text-orange-500 mr-2" />
            {activeCategory === 'all' ? 'All Kiosks' : `${categories.find(c => c.id === activeCategory)?.name} Kiosks`}
          </h2>
          {filteredKiosks.length === 0 ? <div className="text-center py-12 bg-orange-50 rounded-lg">
              <ShoppingBagIcon className="mx-auto h-16 w-16 text-orange-300" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                No kiosks found
              </h3>
              <p className="mt-2 text-sm text-gray-500 max-w-md mx-auto">
                Try adjusting your search or filter to find what you're looking
                for, or check back later for new kiosks.
              </p>
            </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredKiosks.map(kiosk => <KioskCard key={kiosk.id} kiosk={kiosk} onViewKiosk={() => handleKioskSelect(kiosk)} onShopNow={() => handleKioskSelect(kiosk)} />)}
            </div>}
        </div>
      </div>
      {/* Benefits section */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg p-8 shadow-lg text-white">
        <h2 className="text-xl font-bold mb-6 text-center">
          Why Shop on OyaDrop Marketplace?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white bg-opacity-10 p-5 rounded-xl backdrop-blur-sm flex flex-col items-center text-center">
            <div className="bg-white p-3 rounded-full mb-4 shadow-md">
              <TruckIcon className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="font-medium mb-2">Fast Delivery</h3>
            <p className="text-sm text-white text-opacity-90">
              Get your products delivered quickly with our reliable delivery
              network.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 p-5 rounded-xl backdrop-blur-sm flex flex-col items-center text-center">
            <div className="bg-white p-3 rounded-full mb-4 shadow-md">
              <ShieldCheckIcon className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="font-medium mb-2">Verified Sellers</h3>
            <p className="text-sm text-white text-opacity-90">
              All kiosks are verified to ensure quality products and service.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 p-5 rounded-xl backdrop-blur-sm flex flex-col items-center text-center">
            <div className="bg-white p-3 rounded-full mb-4 shadow-md">
              <TagIcon className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="font-medium mb-2">Great Deals</h3>
            <p className="text-sm text-white text-opacity-90">
              Discover exclusive offers and promotions from various kiosks.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 p-5 rounded-xl backdrop-blur-sm flex flex-col items-center text-center">
            <div className="bg-white p-3 rounded-full mb-4 shadow-md">
              <UserIcon className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="font-medium mb-2">Customer Support</h3>
            <p className="text-sm text-white text-opacity-90">
              Our team is available to help with any questions or issues.
            </p>
          </div>
        </div>
      </div>
      {/* Marketplace Stats */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Marketplace Stats</h2>
          <p className="text-gray-500">
            Growing community of vendors and shoppers
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-1">
              1,500+
            </div>
            <div className="text-sm text-gray-600">Active Kiosks</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-1">
              25,000+
            </div>
            <div className="text-sm text-gray-600">Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-1">98%</div>
            <div className="text-sm text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-1">15+</div>
            <div className="text-sm text-gray-600">Cities Covered</div>
          </div>
        </div>
      </div>
      {/* Join as Seller CTA */}
      <div className="bg-orange-50 rounded-lg p-6 border border-orange-100 shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Become a Seller on OyaDrop Marketplace
            </h3>
            <p className="text-gray-600">
              Reach thousands of customers and grow your business with us
            </p>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium shadow-md">
            Open Your Kiosk
          </button>
        </div>
      </div>
    </div>;
};