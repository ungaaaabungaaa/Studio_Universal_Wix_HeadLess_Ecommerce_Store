import React from 'react';

const ShippingReturn = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Shipping & Return Policy</h1>
        
        <div className="space-y-6">
          {/* Shipping Info */}
          <div className=" p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">1. What are your shipping methods?</h2>
            <p className="mt-2">We offer various shipping methods to accommodate your needs, including standard, expedited, and express shipping options. During checkout, you&apos;ll be able to choose your preferred shipping method based on your location and urgency.</p>
          </div>

          {/* Shipping Time */}
          <div className=" p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">2. How long will my order take to arrive?</h2>
            <p className="mt-2">Shipping times vary depending on the delivery location and the shipping method you select. Generally, orders within the US take 3-7 business days, while international orders may take 7-14 business days. Please note that delivery times may be longer during peak seasons or due to unforeseen circumstances.</p>
          </div>

          {/* Shipping Charges */}
          <div className=" p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">3. How much does shipping cost?</h2>
            <p className="mt-2">Shipping costs are calculated at checkout based on the weight of your order, your shipping address, and the selected shipping method. We also offer free standard shipping on orders over $100 within the United States.</p>
          </div>

          {/* Order Tracking */}
          <div className=" p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">4. How can I track my order?</h2>
            <p className="mt-2">Once your order has been shipped, we will send you a tracking number via email. You can use this number to track your package through the carrier&apos;s website and monitor its progress. If you haven&apos;t received a tracking number, please contact us at <a href="mailto:contact@braindstudio.com">contact@braindstudio.com</a>.</p>
          </div>

          {/* Returns */}
          <div className=" p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">5. What is your return policy?</h2>
            <p className="mt-2">We accept returns within 30 days of delivery. Items must be unworn, unused, and in their original packaging. To initiate a return, please contact us at <a href="mailto:returns@braindstudio.com">returns@braindstudio.com</a> with your order number and reason for the return. We&apos;ll provide you with instructions on how to return your items.</p>
          </div>

          {/* Return Shipping */}
          <div className=" p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">6. Who pays for return shipping?</h2>
            <p className="mt-2">Return shipping costs are the responsibility of the customer, unless the return is due to a mistake on our part (e.g., wrong item, damaged goods). If you receive an incorrect or damaged item, please contact us immediately, and we will arrange for a return label at no cost to you.</p>
          </div>

          {/* Refunds */}
          <div className=" p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">7. How long does it take to process a refund?</h2>
            <p className="mt-2">Once we receive your returned item, we will inspect it and process your refund within 5-7 business days. The refund will be issued to the original payment method. Please note that it may take a few additional days for the refund to appear on your statement, depending on your bank or payment provider.</p>
          </div>

          {/* Exchanges */}
          <div className=" p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">8. Can I exchange an item?</h2>
            <p className="mt-2">We currently do not offer direct exchanges. If you wish to exchange an item for a different size or color, please return the original item and place a new order for the item you&apos;d like to receive. If you need help with the return process, our customer service team is happy to assist you.</p>
          </div>

          {/* International Returns */}
          <div className=" p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">9. Can I return international orders?</h2>
            <p className="mt-2">Yes, we accept returns on international orders as long as they meet the criteria listed in our return policy. Please note that international customers are responsible for return shipping costs. Contact our support team for specific return instructions if you&apos;re located outside of the US.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingReturn;
