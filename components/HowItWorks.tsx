"use client";

import { useMemo } from "react";
import { ShoppingCart, Phone, Home } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface HowItWorksProps {
  isDarkMode: boolean;
}

interface Step {
  title: string;
  description: string;
  icon: React.ElementType;
}

export const HowItWorks = ({ isDarkMode }: HowItWorksProps) => {
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

  const steps: Step[] = useMemo(
    () => [
      {
        title: "Escolha seus produtos",
        description:
          "Navegue pelo nosso catálogo e escolha seus itens favoritos.",
        icon: ShoppingCart,
      },
      {
        title: "Faça seu pedido",
        description:
          "Entre em contato conosco via WhatsApp para finalizar seu pedido.",
        icon: Phone,
      },
      {
        title: "Receba ou Retire",
        description: "Opte por receber em casa ou retirar em nossa loja.",
        icon: Home,
      },
    ],
    []
  );

  return (
    <motion.section
      id="how-it-works"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className={`py-20 ${isDarkMode ? "bg-gray-800" : "bg-pink-50"}`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-16 text-center ${
            isDarkMode ? "text-pink-400" : "text-pink-600"
          } font-script`}
        >
          Como Funciona?
        </h2>
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`${
                isDarkMode ? "bg-gray-700" : "bg-white"
              } p-8 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
            >
              <div className="flex justify-center mb-6">
                <div
                  className={`w-20 h-20 rounded-full ${
                    isDarkMode ? "bg-pink-400" : "bg-pink-500"
                  } flex items-center justify-center`}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3
                className={`text-2xl font-bold mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                } text-lg`}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
