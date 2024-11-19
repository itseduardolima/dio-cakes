"use client";

import { useMemo } from "react";
import Image from "next/image";
import { Star, Cake } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import testimonial1Image from "../public/images/avatar1.jpg";
import testimonial2Image from "../public/images/avatar2.jpg";
import testimonial3Image from "../public/images/avatar3.jpg";

interface TestimonialsProps {
  isDarkMode: boolean;
}

interface Testimonial {
  name: string;
  text: string;
  image: any;
}

export const Testimonials = ({ isDarkMode }: TestimonialsProps) => {
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

  const testimonials: Testimonial[] = useMemo(
    () => [
      {
        name: "Maria Silva",
        text: "O bolo estava simplesmente divino! Todos os convidados adoraram. A apresentação foi impecável e o sabor superou todas as expectativas.",
        image: testimonial1Image,
      },
      {
        name: "Paula Santos",
        text: "O kit festa superou nossas expectativas. Tudo estava perfeito! Os doces eram variados e deliciosos, e o bolo foi o centro das atenções.",
        image: testimonial2Image,
      },
      {
        name: "Ana Oliveira",
        text: "Os brigadeiros são de outro mundo. Vou pedir sempre! Cada sabor é uma experiência única. Recomendo a todos os amantes de doces.",
        image: testimonial3Image,
      },
    ],
    []
  );

  return (
    <motion.section
      id="testimonials"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className={`py-20 ${isDarkMode ? "bg-gray-900" : "bg-pink-50"}`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-16 text-center ${
            isDarkMode ? "text-pink-400" : "text-pink-600"
          } font-script`}
        >
          O que Nossos Clientes Dizem
        </h2>
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl relative overflow-hidden`}
            >
              <div className="flex items-center mb-6 relative z-10">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4 border-2 border-pink-300"
                />
                <div>
                  <p
                    className={`font-bold text-lg ${
                      isDarkMode ? "text-pink-400" : "text-pink-600"
                    }`}
                  >
                    {testimonial.name}
                  </p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 w-5 h-5" />
                    ))}
                  </div>
                </div>
              </div>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                } italic relative z-10 text-base leading-relaxed`}
              >
                {testimonial.text}
              </p>
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 opacity-10">
                <Cake
                  className={`${
                    isDarkMode ? "text-pink-400" : "text-pink-300"
                  } w-32 h-32`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
