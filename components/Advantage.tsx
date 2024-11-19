"use client";

import { useMemo } from "react";
import { Gift, Leaf, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AdvantagesProps {
  isDarkMode: boolean;
}

interface Advantage {
  title: string;
  description: string;
  icon: React.ElementType;
}

export const Advantages = ({ isDarkMode }: AdvantagesProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const advantages: Advantage[] = useMemo(
    () => [
      {
        title: "Ingredientes Frescos",
        description:
          "Usamos apenas ingredientes frescos e de alta qualidade em todos os nossos produtos.",
        icon: Leaf,
      },
      {
        title: "Personalização",
        description:
          "Oferecemos opções personalizadas para tornar seu evento ainda mais especial.",
        icon: Gift,
      },
      {
        title: "Entrega Rápida",
        description:
          "Garantimos entregas rápidas e cuidadosas para que seus doces cheguem perfeitos.",
        icon: Truck,
      },
    ],
    []
  );

  return (
    <motion.section
      id="advantages"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className={`py-20 ${
        isDarkMode ? "bg-gray-900" : "bg-gradient-to-b from-pink-100 to-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-16 text-center ${
            isDarkMode ? "text-pink-400" : "text-pink-600"
          } font-script`}
        >
          Por Que Escolher Nossos Produtos?
        </h2>
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } p-8 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
            >
              <div className="flex justify-center mb-6">
                <div
                  className={`w-20 h-20 rounded-full ${
                    isDarkMode ? "bg-pink-400" : "bg-pink-500"
                  } flex items-center justify-center`}
                >
                  <advantage.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3
                className={`text-2xl font-bold mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {advantage.title}
              </h3>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                } text-lg`}
              >
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
