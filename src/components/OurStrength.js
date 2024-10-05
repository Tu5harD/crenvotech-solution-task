// import React from "react";
// import Image from "next/image";
// const StrengthItem = ({ icon, title, description }) => (
//   <div className="bg-transparent border border-yellow-400 p-6 rounded-sm text-center">
//     <div className="flex justify-center">
//       <Image
//         src={icon}
//         alt={icon}
//         className="w-16 h-16 py-2"
//         width={500}
//         height={500}

//       />{" "}
//     </div>
//     <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
//     <p className="text-gray-400 text-sm font-medium">{description}</p>
//   </div>
// );

// const OurStrength = () => {
//   const strengths = [
//     {
//       icon: "/assets/features-icon-1.png",
//       title: "Hygienic Food",
//       description: "Lorem ipsum is simply dummy printing and typesetting.",
//     },
//     {
//       icon: "/assets/features-icon-2.png",
//       title: "Fresh Environment",
//       description: "Lorem ipsum is simply dummy printing and typesetting.",
//     },
//     {
//       icon: "/assets/features-icon-3.png",
//       title: "Skilled Chefs",
//       description: "Lorem ipsum is simply dummy printing and typesetting.",
//     },
//     {
//       icon: "/assets/features-icon-4.png",
//       title: "Event & Party",
//       description: "Lorem ipsum is simply dummy printing and typesetting.",
//     },
//   ];

//   return (
//     <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <p className="text-yellow-500 text-base font-semibold tracking-wider uppercase mb-2">
//             WHY CHOOSE US
//           </p>
//           <div className="flex justify-center">
//             <Image
//               src="/assets/separator.svg"
//               alt="separator"
//               className="w-28 h-10"
//               width={500}
//               height={500}
//             />
//           </div>

//           <h2 className="text-white text-4xl font-serif font-semibold">
//             Our Strength
//           </h2>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {strengths.map((strength, index) => (
//             <StrengthItem key={index} {...strength} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurStrength;
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const StrengthItem = ({ icon, title, description }) => (
  <motion.div
    className="bg-transparent border border-yellow-400 p-6 rounded-sm text-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex justify-center">
      <Image
        src={icon}
        alt={title}
        className="w-16 h-16 py-2"
        width={64}
        height={64}
      />
    </div>
    <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm font-medium">{description}</p>
  </motion.div>
);

const OurStrength = () => {
  const strengths = [
    {
      icon: "/assets/features-icon-1.png",
      title: "Hygienic Food",
      description: "Lorem ipsum is simply dummy printing and typesetting.",
    },
    {
      icon: "/assets/features-icon-2.png",
      title: "Fresh Environment",
      description: "Lorem ipsum is simply dummy printing and typesetting.",
    },
    {
      icon: "/assets/features-icon-3.png",
      title: "Skilled Chefs",
      description: "Lorem ipsum is simply dummy printing and typesetting.",
    },
    {
      icon: "/assets/features-icon-4.png",
      title: "Event & Party",
      description: "Lorem ipsum is simply dummy printing and typesetting.",
    },
  ];

  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-yellow-500 text-base font-semibold tracking-wider uppercase mb-2">
            WHY CHOOSE US
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
          <h2 className="text-white text-4xl font-serif font-semibold">
            Our Strength
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, index) => (
            <StrengthItem key={index} {...strength} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStrength;
