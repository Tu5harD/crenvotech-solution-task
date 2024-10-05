import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const MenuItem = ({ name, price, description, image, tag }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="p-6 flex flex-col sm:flex-row items-center">
        <div className="w-32 h-32 relative mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <span className="text-yellow-500 font-semibold font-serif">
              ${price.toFixed(2)}
            </span>
          </div>
          <p className="text-gray-300 text-sm font-normal mb-2">
            {description}
          </p>
          {tag && (
            <span className="bg-yellow-500 text-black text-xs font-semibold px-2 py-1 rounded-sm">
              {tag}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Menu = () => {
  const menuItems = [
    {
      name: "Greek Salad",
      price: 25.5,
      description:
        "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
      image: "/assets/menu-1.png",
      tag: "SEASONAL",
    },
    {
      name: "Butternut Pumpkin",
      price: 10.0,
      description:
        "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.",
      image: "/assets/menu-2.png",
    },
    {
      name: "Olivas Rellenas",
      price: 25.0,
      description:
        "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
      image: "/assets/menu-3.png",
    },
    {
      name: "Lasagne",
      price: 40.0,
      description:
        "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
      image: "/assets/menu-4.png",
    },
    {
      name: "Tokusen Wagyu",
      price: 39.0,
      description:
        "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
      image: "/assets/menu-5.png",
      tag: "NEW",
    },
    {
      name: "Opu Fish",
      price: 49.0,
      description:
        "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
      image: "/assets/menu-6.png",
    },
  ];

  return (
    <div className="bg-[url('/assets/footer-bg.jpg')] bg-scroll bg-cover py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-yellow-500 text-sm font-semibold tracking-wider uppercase">
            SPECIAL SELECTION
          </span>
          <div className="flex justify-center">
            <Image
              src="/assets/separator.svg"
              alt="separator"
              width={112}
              height={40}
              className="pt-4"
            />
          </div>
          <h1 className="text-white text-4xl font-serif font-semibold mt-2">
            Delicious Menu
          </h1>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
        <motion.p
          className="text-center text-gray-400 text-base font-semibold mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          During winter daily from
          <span className="text-yellow-400"> 7:00 pm</span> to{" "}
          <span className="text-yellow-400"> 9:00 pm</span>
        </motion.p>
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/page/menu" passHref>
            <motion.button
              className="border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-black text-base font-semibold py-2 px-4 rounded transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              VIEW ALL MENU
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
