import React from 'react';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-6">
          {/* FAQ 1 */}
          <div className="p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">1. What is Braind Studio Universal?</h2>
            <p className="mt-2">Braind Studio Universal is a clothing brand that blends modern design with timeless fashion, offering a diverse range of high-quality apparel for all occasions. We aim to create pieces that are stylish, comfortable, and reflect your individuality.</p>
          </div>

          {/* FAQ 2 */}
          <div className="p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">2. How do I place an order?</h2>
            <p className="mt-2">To place an order, simply browse our collection, select your desired items, choose your size, and click &quot;Add to Cart.&quot; Once you&apos;re ready, proceed to checkout and complete the payment. You will receive an email confirmation once your order is placed.</p>
          </div>

          {/* FAQ 3 */}
          <div className="p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">3. What sizes do you offer?</h2>
            <p className="mt-2">We offer a wide range of sizes, from XS to XXL, ensuring there&apos;s a perfect fit for everyone. Check out our size chart available on each product page for detailed measurements to help you choose the best size.</p>
          </div>

          {/* FAQ 4 */}
          <div className="p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">4. Do you offer international shipping?</h2>
            <p className="mt-2">Yes, we offer international shipping! Shipping rates and delivery times may vary depending on your location. During checkout, you&apos;ll be able to review your shipping options and select the best one for you.</p>
          </div>

          {/* FAQ 5 */}
          <div className="p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">5. Can I change or cancel my order after placing it?</h2>
            <p className="mt-2">Once an order is placed, it is processed promptly. If you need to make changes or cancel it, please contact us as soon as possible at [contact@braindstudio.com](mailto:contact@braindstudio.com), and we&apos;ll do our best to assist you before it ships.</p>
          </div>

          {/* FAQ 6 */}
          <div className="p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">6. How do I track my order?</h2>
            <p className="mt-2">Once your order ships, we will send you a tracking number via email. You can use this number to track your package through the carrier&apos;s website and monitor its delivery status.</p>
          </div>

          {/* FAQ 7 */}
          <div className="p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">7. What is your return policy?</h2>
            <p className="mt-2">We accept returns within 30 days of delivery. Items must be unworn, unused, and in their original packaging. For more information on how to initiate a return, visit our Returns page or contact our support team for assistance.</p>
          </div>

          {/* FAQ 8 */}
          <div className="p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">8. How do I care for my Braind Studio clothing?</h2>
            <p className="mt-2">To keep your Braind Studio clothing looking its best, please follow the care instructions on the product labels. Most of our items are machine washable, but for delicate fabrics, we recommend hand washing or dry cleaning for longer-lasting quality.</p>
          </div>

          {/* FAQ 9 */}
          <div className="p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">9. Do you offer gift cards?</h2>
            <p className="mt-2">Yes! We offer digital gift cards that can be used on our website for any product. You can purchase them directly from our Gift Cards page, and they will be delivered to your email for easy access.</p>
          </div>

          {/* FAQ 10 */}
          <div className="p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">10. How can I contact customer service?</h2>
            <p className="mt-2">If you have any questions or need assistance, you can reach our customer service team by emailing us at [contact@braindstudio.com](mailto:contact@braindstudio.com). We aim to respond to all inquiries within 24 hours on business days.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
