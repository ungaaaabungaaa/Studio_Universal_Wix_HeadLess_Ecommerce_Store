import { VelocityScroll } from "./VelocityScroll";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <br></br>
      <br></br>
      <div className="w-full h-auto flex items-center justify-center bg-black text-white overflow-hidden">
        <VelocityScroll
          text="Sale Discounts Brands Collections"
          default_velocity={2}
          className="text-2xl sm:text-4xl font-bold text-white"
        />
      </div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-white">STUDIO UNIVERSAL</h2>
            <p className="text-sm">Elevate your style with our curated collection of modern, sustainable fashion.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="/about" className="text-sm hover:text-white transition-colors duration-200">About Us</a>
              <a href="/list?cat=all-products" className="text-sm hover:text-white transition-colors duration-200">Shop</a>
              <a href="/list?cat=collections" className="text-sm hover:text-white transition-colors duration-200">Collections</a>
              <a href="/list?cat=sustainability" className="text-sm hover:text-white transition-colors duration-200">Sustainability</a>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Customer Service</h3>
            <nav className="flex flex-col space-y-2">
              <a href="/contact" className="text-sm hover:text-white transition-colors duration-200">Contact Us</a>
              <a href="/faq" className="text-sm hover:text-white transition-colors duration-200">FAQs</a>
              <a href="/shipping" className="text-sm hover:text-white transition-colors duration-200">Shipping & Returns</a>
              <a href="/sizeguide" className="text-sm hover:text-white transition-colors duration-200">Size Guide</a>
            </nav>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} Studio Universal. All rights reserved.
          </p>
          <nav className="flex space-x-4 mt-4 sm:mt-0">
            <a href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}