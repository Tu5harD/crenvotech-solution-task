import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const ProductDetailsModal = ({ product, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gray-800 w-full max-w-2xl p-6 rounded-lg m-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <Image
            src={product.img || "/api/placeholder/800/400"}
            alt={product.name}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-5 py-3 rounded-full hover:bg-opacity-70 transition-all"
          >
            ×
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <span className="text-xl font-serif font-bold text-yellow-400">
              ${product.price}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-500">⦿ AVAILABLE</span>
            <span className="text-gray-400">|</span>
            <span className="flex items-center">{product.rate} ⭐️</span>
          </div>
          <p className="text-gray-300 leading-relaxed">{product.dsc}</p>
          <div className="space-y-2">
            <h3 className="font-semibold">Ingredients:</h3>
            <p className="text-gray-400">
              {product.ingredients ||
                "Fresh, quality ingredients carefully selected by our chefs"}
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Preparation Time:</h3>
            <p className="text-gray-400">
              {product.prepTime || "15-20 minutes"}
            </p>
          </div>
          <motion.button
            className="w-full bg-yellow-500 text-black py-3 rounded-sm font-semibold mt-4 hover:bg-yellow-400 transition-colors"
            onClick={() => {
              addToCart(product);
              onClose();
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Add to Cart - ${product.price}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductDetailsModal;
