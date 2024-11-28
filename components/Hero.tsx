"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Cake } from "lucide-react";
import heroImage1 from "../public/images/hero-img.jpg";
import heroImage2 from "../public/images/hero-img2.jpg";
import heroImage3 from "../public/images/hero-img3.jpg";
import { WhatsappIcon } from "@/public/icons/whatsappIcon";

interface HeroProps {
  isDarkMode: boolean;
}

interface Slide {
  image: StaticImageData;
  alt: string;
}

export function Hero({ isDarkMode }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    { image: heroImage1, alt: "Bolo decorado" },
    { image: heroImage2, alt: "Cupcakes coloridos" },
    { image: heroImage3, alt: "Mesa de doces" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative mt-16 flex flex-col md:flex-row md:max-w-[1480px] m-auto items-center justify-between px-6 py-12">
      <div className="w-full md:w-[40%] mb-8 md:mb-0 text-center md:text-left">
        <h1
          className={`text-4xl ${
            isDarkMode ? "text-gray-200" : "text-gray-800"
          } font-bold mb-4 font-script`}
        >
          Bolos, Doces e Kits para festa
        </h1>
        <p
          className={`text-xl ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          } md:text-2xl mb-6`}
        >
          Transforme seus Momentos em Doces Lembranças
        </p>
        <p
          className={`text-lg mb-8 ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Há mais de 5 anos criando experiências únicas e deliciosas para suas
          celebrações especiais.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <Link
            href="https://wa.me/5592985955434"
            className={`${
              isDarkMode
                ? "bg-pink-600 hover:bg-pink-700 text-white"
                : "bg-pink-600 hover:bg-pink-700 text-white"
            } font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-flex items-center`}
          >
            <WhatsappIcon />
            Fazer Pedido
          </Link>
          <Link
            href="#products"
            className={`${
              isDarkMode
                ? "bg-transparent border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-gray-900"
                : "bg-transparent border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white"
            } font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-flex items-center`}
          >
            <Cake className="w-6 h-6 mr-2" />
            Ver Produtos
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-64 md:h-[500px] relative">
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide.image}
            alt={slide.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-cover rounded-lg transition-opacity duration-500 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
