import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-4 px-4 sm:px-6 lg:px-8">
      <div className="text-center text-white text-sm">
        © {new Date().getFullYear()} Grilli. All Rights Reserved | Crafted by
        codewithTush
      </div>
    </footer>
  );
};

export default Footer;
