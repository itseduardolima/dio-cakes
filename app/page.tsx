"use client";

import { About } from "@/components/About";
import { Advantages } from "@/components/Advantage";
import { BackToTop } from "@/components/BackToTop";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Products } from "@/components/Products";
import { Testimonials } from "@/components/Testimonials";
import { useState, useEffect, useCallback } from "react";


export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleFaq = useCallback(
    (index: number) => {
      setOpenFaq(openFaq === index ? null : index);
    },
    [openFaq]
  );

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(!mobileMenuOpen);
  }, [mobileMenuOpen]);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "products",
        "advantages",
        "how-it-works",
        "testimonials",
        "faq",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-b from-pink-50 to-white text-gray-900"
      }`}
    >
      <Navigation
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Hero isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Products isDarkMode={isDarkMode} />
      <Advantages isDarkMode={isDarkMode} />
      <HowItWorks isDarkMode={isDarkMode} />
      <Testimonials isDarkMode={isDarkMode} />
      <FAQ openFaq={openFaq} toggleFaq={toggleFaq} isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
      <BackToTop />
    </div>
  );
}
