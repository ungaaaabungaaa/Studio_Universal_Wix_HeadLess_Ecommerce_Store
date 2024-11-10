'use client'
import { motion } from "framer-motion";


export default function AboutUsEnhanced() {
  return (
    <div className="min-h-screen h-full bg-black text-white flex flex-col justify-center items-center p-4 md:p-8">
      <main className="max-w-4xl w-full space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Studio Universal
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl"
        >
          Elevate your style with our curated collection of modern, sustainable fashion.
        </motion.p>
        <div className="space-y-6 text-gray-300">
          <p>
            At Studio Universal, we believe that fashion should be a perfect blend of style, comfort, and
            responsibility. Our journey began with a simple idea: to create clothing that not only looks good but
            also feels good - both on your skin and in your conscience.
          </p>
          <p>
            We carefully source eco-friendly materials and partner with ethical manufacturers to bring you a
            collection that's as kind to the planet as it is to your wardrobe. From timeless basics to statement
            pieces, each item in our store is designed to last, reducing waste and promoting a more sustainable
            approach to fashion.
          </p>
          <p>
            Join us in our mission to make the world a little more stylish and a lot more sustainable, one garment
            at a time.
          </p>
        </div>
        
      </main>
     
    </div>
  );
}
