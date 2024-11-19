"use client";

import {  useCallback, useMemo } from "react";

import {
  Cake,
  Menu,
  X,
  Moon,
  Sun,

} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";


interface NavigationProps {
  activeSection: string
  mobileMenuOpen: boolean
  toggleMobileMenu: () => void
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export const Navigation = ({
  activeSection,
  mobileMenuOpen,
  toggleMobileMenu,
  isDarkMode,
  toggleDarkMode,
} : NavigationProps) => {
  const { scrollY } = useScroll()
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    [
      "rgba(255, 255, 255, 0)",
      isDarkMode ? "rgb(31, 41, 55)" : "rgb(255, 255, 255)",
    ]
  )
  const navTextColor = useTransform(
    scrollY,
    [0, 100],
    [
      isDarkMode ? "#ecb0cb" : "rgba(31, 41, 55, 0.9)",
      "#eb91ba",
    ]
  )

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault()
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    },
    []
  )

  const navItems = useMemo(
    () => [
      { id: "home", label: "Início" },
      { id: "about", label: "Sobre" },
      { id: "products", label: "Produtos" },
      { id: "advantages", label: "Vantagens" },
      { id: "how-it-works", label: "Como Funciona" },
      { id: "testimonials", label: "Depoimentos" },
      { id: "faq", label: "FAQ" },
    ],
    []
  )

  return (
    <>
      <motion.nav
        style={{ backgroundColor: navBackground }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-colors duration-300"
      >
        <div className="container mx-auto flex justify-between items-center">
          <motion.a
            href="#home"
            style={{ color: navTextColor }}
            className="text-2xl font-bold flex items-center"
            onClick={(e) => handleNavClick(e, "home")}
          >
            <Cake className="w-5 h-5 mr-2 text-pink-400" />
            <span className="font-script text-2xl sm:text-3xl">
              Dio Cakes
            </span>
          </motion.a>
          <motion.ul
            style={{ color: navTextColor }}
            className="hidden md:flex space-x-6"
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`${
                    activeSection === item.id ? "font-bold" : ""
                  } hover:text-pink-400 transition-colors duration-300`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="text-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-full p-1"
              aria-label={
                isDarkMode ? "Mudar para modo claro" : "Mudar para modo escuro"
              }
            >
              {isDarkMode ? (
                <Sun className="w-6 h-6" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </button>
            <button
              className="md:hidden text-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-full p-1"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-x-0 top-16 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg z-40 md:hidden`}
          >
            <ul className="py-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`block px-4 py-2 ${
                      isDarkMode
                        ? "text-white hover:bg-gray-700"
                        : "text-pink-600 hover:bg-pink-100"
                    }`}
                    onClick={(e) => {
                      handleNavClick(e, item.id)
                      toggleMobileMenu()
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}