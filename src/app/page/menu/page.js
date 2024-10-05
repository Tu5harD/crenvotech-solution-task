"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/menu");
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
    return { products: [] };
  }
};

const Page = () => {
  const menuItem = [
    {
      id: "the-gramercy-tavern-burger-4-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Gramercy Tavern",
      dsc: "The Gramercy Tavern Burger - 4 Pack",
      price: 99,
      rate: 5,
      country: "New York, NY",
    },
    {
      id: "shake-shack-shackburger-8-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134862/shake-shack-shackburger-8-pack.973a5e26836ea86d7e86a327becea2b0.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Shake Shack",
      dsc: "Shake Shack ShackBurger® – 8 Pack",
      price: 49,
      rate: 5,
      country: "New York, NY",
    },
    {
      id: "gotts-cheeseburger-kit-for-4",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132933/gotts-complete-cheeseburger-kit-for-4.7bdc74104b193427b3fe6eae39e05b5e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Gott's Roadside",
      dsc: "Gott's Complete Cheeseburger Kit for 4",
      price: 99,
      rate: 5,
      country: "St. Helena, CA",
    },

    {
      id: "shake-shack-shackburger-16-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134022/shake-shack-shackburger-16-pack.316f8b09144db65931ea29e34869287a.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Shake Shack",
      dsc: "Shake Shack Shackburger® – 16 Pack",
      price: 89,
      rate: 4,
      country: "New York, NY",
    },
    {
      id: "wagyu-burger-patties-12-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/107019/wagyu-burger-patties-12-pack.6116f4cd648dee20651f99e21e7d758b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Westholme Wagyu",
      dsc: "Wagyu Burger Patties - 12 Pack",
      price: 129,
      rate: 5,
      country: "Queensland, Australia",
    },

    {
      id: "burger-bomb-kit-for-6",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133829/burger-bomb-kit-for-6.b0430200cfc153c1c15c7997236a6152.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Old Homestead Steakhouse",
      dsc: "Burger Bomb Kit for 6",
      price: 129,
      rate: 5,
      country: "New York, NY",
    },
    {
      id: "double-stack-burger-kit-for-4",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/122768/handf-double-stack-burger-kit-for-4.4ee9f54b1d6087e9996335f07c13e5cd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Holeman & Finch",
      dsc: "Double Stack Burger Kit for 4",
      price: 79,
      rate: 4,
      country: "Atlanta, GA",
    },
    {
      id: "goldbelly-burger-bash-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66179/the-burger-bash-package.bd9d12d031865940bbe5faf15f1a62f8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Pat LaFrieda Meats",
      dsc: 'Goldbelly "Burger Bash" Pack',
      price: 109,
      rate: 5,
      country: "North Bergen, NJ",
    },
    {
      id: "burger-au-poivre-kit-4-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103477/burger-au-poivre-kit-4-pack.3ca0e39b02db753304cd185638dad518.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Raoul's",
      dsc: "Burger Au Poivre Kit - 4 Pack",
      price: 99,
      rate: 4,
      country: "New York, NY",
    },
    {
      id: "goldbelly-burger-blend-4-lbs",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96214/goldbelly-burger-blend-1-lb.13a21b66edf7173a59c75c3a6d2f981b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Flannery Beef",
      dsc: "Goldbelly Burger Blend - 4 lbs.",
      price: 79,
      rate: 5,
      country: "San Rafael, CA",
    },
    {
      id: "gotts-complete-cheeseburger-kit-for-8",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133967/gotts-complete-cheeseburger-kit-for-8.092aa049d00286fa1733d720decc782e.jpeg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Gott's Roadside",
      dsc: "Gott's Complete Cheeseburger Kit for 8",
      price: 149,
      rate: 4,
      country: "St. Helena, CA",
    },
    {
      id: "gramercy-tavern-burger-kielbasa-combo",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/135126/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-47.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Gramercy Tavern",
      dsc: "Gramercy Tavern Burger + Kielbasa Combo",
      price: 149,
      rate: 4,
      country: "New York, NY",
    },
    {
      id: "classic-juicy-lucy-burgers-sweet-potato-puffs-4-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/114296/classic-juicy-lucy-burgers-sweet-potato-puffs-4-pack.b726cfe63b6e1584a4e3c01db24f97d2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "5-8 Club",
      dsc: "Classic Juicy Lucy Burgers + Sweet Potato Puffs - 4 Pack",
      price: 99,
      rate: 5,
      country: "Minneapolis, MN",
    },
    {
      id: "juicy-lucy-burger-kit-5-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132203/juicy-lucy-burger-kit-5-pack.2902a0c8549449529e87f902f425f9ae.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Whitmans",
      dsc: "Juicy Lucy Burger Kit - 5 Pack",
      price: 79,
      rate: 5,
      country: "New York, NY",
    },
    {
      id: "blue-aged-cheddar-jalapeno-burgers-6-pack",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124204/blue-aged-cheddar-jalapeno-burgers-6-pack.a8e79d575c4a6883a0a4daed6a18b635.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      name: "Old Homestead Steakhouse",
      dsc: "Blue Aged Cheddar Jalapeno Burgers - 6 Pack",
      price: 139,
      rate: 4,
      country: "New York, NY",
    },
  ];

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getTopics();
      setProducts(data.products || []);
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const displayItems = products.length > 0 ? products : menuItem;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white p-4 md:p-6 lg:p-8 relative">
        <motion.div
          className="flex justify-end mb-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            className="bg-yellow-500 text-black px-4 py-2 rounded-sm hover:bg-yellow-400 transition-colors"
            onClick={() => setIsCartOpen(true)}
          >
            Cart ({getTotalItems()})
          </button>
        </motion.div>

        <motion.div
          className="text-center mb-12"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex justify-center">
            <Image
              src="/assets/separator.svg"
              alt="separator"
              className="w-28 h-10"
              width={500}
              height={500}
            />
          </div>
          <h1 className="text-white text-4xl font-serif font-semibold mt-2">
            Delicious Menu
          </h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {displayItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-gray-800 rounded-lg p-4 relative hover:shadow-xl transition-shadow"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                width={500}
                height={500}
                src={item.img || "/api/placeholder/500/500"}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between">
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <span className="text-sm font-semibold text-green-500">
                  ⦿ AVAILABLE
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-4">{item.dsc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-serif font-bold">
                  ${item.price}
                </span>
                <span className="text-sm font-semibold">
                  Rating: {item.rate} ⭐️
                </span>
                <motion.button
                  className="border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black text-base font-semibold py-2 px-4 rounded transition duration-300"
                  onClick={() => addToCart(item)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ADD TO CART
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {isCartOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-800 w-full max-w-md p-6 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
              {cart.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <>
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      className="flex justify-between items-center mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-400">
                          ${item.price} x {item.quantity}
                        </p>
                      </div>
                      <button
                        className="text-red-500 hover:text-red-400 transition-colors"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </motion.div>
                  ))}
                  <motion.div
                    className="mt-4 pt-4 border-t border-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-xl font-semibold">
                      Total: ${getTotalPrice().toFixed(2)}
                    </p>
                  </motion.div>
                </>
              )}
              <motion.button
                className="mt-6 w-full bg-yellow-500 text-black py-2 rounded hover:bg-yellow-400 transition-colors"
                onClick={() => setIsCartOpen(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Close Cart
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Page;
