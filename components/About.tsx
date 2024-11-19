"use client";

import Image from "next/image";
import { Cake } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import aboutImage from "../public/images/logo.png";

interface AboutProps {
  isDarkMode: boolean;
}

export const About = ({ isDarkMode }: AboutProps) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className={`py-20 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white"}`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-16 text-center ${
            isDarkMode ? "text-pink-400" : "text-pink-600"
          } font-script`}
        >
          Minha História
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative w-72 h-72 sm:w-96 sm:h-96"
          >
            <Image
              src={aboutImage}
              alt="Confeiteira"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-xl z-10 relative"
            />
            <div
              className={`absolute inset-0 ${
                isDarkMode ? "bg-pink-400" : "bg-pink-200"
              } rounded-full transform rotate-6 scale-105`}
            />
            <div
              className={`absolute -bottom-4 -right-4 ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } p-4 rounded-full shadow-lg`}
            >
              <Cake
                className={`w-12 h-12 ${
                  isDarkMode ? "text-pink-400" : "text-pink-500"
                }`}
              />
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            className="max-w-lg"
          >
            <p
              className={`text-lg sm:text-xl ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              } mb-6 leading-relaxed`}
            >
              Há 5 anos, transformo minha paixão por confeitaria em momentos
              doces para suas celebrações. Cada bolo é feito com amor e
              dedicação, garantindo que sua festa seja única e deliciosa.
            </p>
            <p
              className={`text-lg sm:text-xl ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              } leading-relaxed`}
            >
              Minha missão é criar não apenas sobremesas, mas memórias que
              durarão para sempre. Com ingredientes de alta qualidade e técnicas
              aprimoradas, trazemos o melhor da confeitaria para o seu evento.
            </p>
            <div className="mt-8 flex items-center">
              <div
                className={`w-16 h-1 ${
                  isDarkMode ? "bg-pink-400" : "bg-pink-500"
                } mr-4`}
              ></div>
              <p
                className={`${
                  isDarkMode ? "text-pink-400" : "text-pink-600"
                } font-semibold`}
              >
                Diomara
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
