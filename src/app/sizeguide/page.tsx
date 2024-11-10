import React from 'react';

const SizeGuide = () => {
  return (
    <div className="bg-black text-white p-6 md:p-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8">Size Guide</h1>
        
        {/* Size Chart */}
        <div className="p-4 md:p-6 rounded-lg shadow-md mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Clothing Size Chart</h2>
          <p className="text-sm md:text-base mb-4">Our sizes are designed to fit the most common body types. Use the guide below to help you pick the perfect fit.</p>
          
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="border-b ">
                <th className="px-2 py-2 md:px-4 md:py-3 text-sm md:text-base">Size</th>
                <th className="px-2 py-2 md:px-4 md:py-3 text-sm md:text-base">Chest (inches)</th>
                <th className="px-2 py-2 md:px-4 md:py-3 text-sm md:text-base">Waist (inches)</th>
                <th className="px-2 py-2 md:px-4 md:py-3 text-sm md:text-base">Hips (inches)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { size: 'Small', chest: '34 - 36', waist: '28 - 30', hips: '34 - 36' },
                { size: 'Medium', chest: '38 - 40', waist: '32 - 34', hips: '38 - 40' },
                { size: 'Large', chest: '42 - 44', waist: '36 - 38', hips: '42 - 44' }
              ].map((row, index) => (
                <tr key={index} className="border-b ">
                  <td className="px-2 py-2 md:px-4 md:py-3 text-sm md:text-base">{row.size}</td>
                  <td className="px-2 py-2 md:px-4 md:py-3 text-sm md:text-base">{row.chest}</td>
                  <td className="px-2 py-2 md:px-4 md:py-3 text-sm md:text-base">{row.waist}</td>
                  <td className="px-2 py-2 md:px-4 md:py-3 text-sm md:text-base">{row.hips}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Color Variants */}
        <div className="p-4 md:p-6 rounded-lg shadow-md ">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">Available Colors</h2>
          <p className="text-sm md:text-base mb-4">Choose from the following color options for your clothing item.</p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {[
              { color: 'Red', bgClass: 'bg-red-500', ringClass: 'hover:ring-red-500' },
              { color: 'Blue', bgClass: 'bg-blue-500', ringClass: 'hover:ring-blue-500' },
              { color: 'Green', bgClass: 'bg-green-500', ringClass: 'hover:ring-green-500' },
              { color: 'Black', bgClass: 'bg-black', ringClass: 'hover:ring-gray-700' },
              { color: 'White', bgClass: 'bg-white', ringClass: 'hover:ring-white' },
              { color: 'Purple', bgClass: 'bg-purple-500', ringClass: 'hover:ring-purple-500' },
              { color: 'Beige', bgClass: 'bg-beige-500', ringClass: 'hover:ring-beige-500' },
              { color: 'Cream', bgClass: 'bg-cream-200', ringClass: 'hover:ring-cream-500' },
              { color: 'Nude', bgClass: 'bg-pink-100', ringClass: 'hover:ring-pink-100' },
              { color: 'Taupe', bgClass: 'bg-gray-400', ringClass: 'hover:ring-gray-400' },
              { color: 'Ivory', bgClass: 'bg-ivory', ringClass: 'hover:ring-ivory' },
              { color: 'Tan', bgClass: 'bg-yellow-200', ringClass: 'hover:ring-yellow-200' }
            ].map((item, index) => (
              <div
                key={index}
                className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-2  cursor-pointer ${item.bgClass} ${item.ringClass} hover:ring-4`}
                title={item.color}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;
