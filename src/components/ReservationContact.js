"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ReservationContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    persons: "4 Person",
    date: "",
    time: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      alert("Reservation submitted successfully!");
      setFormData({
        name: "",
        phone: "",
        persons: "4 Person",
        date: "",
        time: "",
        message: "",
      });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div
      id="contact"
      className="bg-[url('/assets/testimonial-bg.jpg')] text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-black p-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-serif font-semibold text-center mb-4">
            Online Reservation
          </h2>
          <p className="text-gray-400 text-base text-center mb-6">
            Booking request{" "}
            <span className="text-yellow-400">+88-123-123456</span> or fill out
            the order form
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <select
                name="persons"
                value={formData.persons}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                <option>4 Person</option>
                <option>2 Person</option>
                <option>3 Person</option>
                <option>5 Person</option>
              </select>
              <div>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                {errors.date && (
                  <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                )}
              </div>
              <div>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                {errors.time && (
                  <p className="text-red-500 text-sm mt-1">{errors.time}</p>
                )}
              </div>
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
            <motion.button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-sm hover:bg-yellow-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              BOOK A TABLE
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Us */}
        <motion.div
          className="bg-[url('/assets/form-pattern.png')] p-8 text-center rounded-sm"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-serif font-semibold mb-8">Contact Us</h2>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2">Booking Request</h3>
              <p className="text-yellow-500 text-2xl font-bold">
                +88-123-123456
              </p>
              <div className="flex justify-center">
                <Image
                  src="/assets/separator.svg"
                  alt="separator"
                  className="w-28 h-10"
                  width={112}
                  height={40}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-400">
                Restaurant St, Delicious City, London 9578, UK
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-2">Lunch Time</h3>
              <p className="text-gray-400">
                Monday to Sunday
                <br />
                11.00 am - 2.30pm
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2">Dinner Time</h3>
              <p className="text-gray-400">
                Monday to Sunday
                <br />
                05.00 pm - 10.00pm
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReservationContact;
