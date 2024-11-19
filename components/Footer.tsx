"use client";

import Link from "next/link";
import { Instagram, Cake } from "lucide-react";
import { WhatsappIcon } from "@/public/icons/whatsappIcon";

interface FooterProps {
  isDarkMode: boolean;
}

export const Footer = ({ isDarkMode }: FooterProps) => {
  return (
    <footer
      className={`${
        isDarkMode ? "bg-gray-900 text-gray-300" : "bg-pink-800 text-white"
      } py-16`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center md:justify-start">
              <Cake className="w-8 h-8 mr-2" />
              <span className="font-script">Dio Cakes</span>
            </h3>
            <p
              className={`${
                isDarkMode ? "text-gray-400" : "text-pink-200"
              } mb-6 text-base`}
            >
              Transformando momentos em doces lembranças
            </p>
            <p
              className={`${
                isDarkMode ? "text-gray-400" : "text-pink-200"
              } mb-6 text-base`}
            >
              Manaus - AM
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <Link
                href="https://wa.me/5592985955434"
                target="_blank"
                className={`${
                  isDarkMode ? "hover:text-pink-400" : "hover:text-pink-300"
                } transition duration-300`}
              >
                <WhatsappIcon />
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/diomarad/"
                className={`${
                  isDarkMode ? "hover:text-pink-400" : "hover:text-pink-300"
                } transition duration-300`}
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                "Home",
                "Sobre",
                "Produtos",
                "Vantagens",
                "Como Funciona",
                "Depoimentos",
                "FAQ",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className={`${
                      isDarkMode ? "hover:text-pink-400" : "hover:text-pink-300"
                    } transition duration-300 text-base`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-4">Horário de Atendimento</h4>
            <p className="mb-2 text-base">Segunda a Sexta: 9h às 18h</p>
            <p className="mb-2 text-base">Sábado: 9h às 14h</p>
            <p className="mb-4 text-base">Domingo: Fechado</p>
            <p
              className={`${
                isDarkMode ? "text-pink-400" : "text-pink-300"
              } font-semibold`}
            >
              Encomendas com 48h de antecedência
            </p>
          </div>
        </div>
        <div
          className={`mt-12 pt-8 border-t ${
            isDarkMode ? "border-gray-700" : "border-pink-700"
          } text-center`}
        >
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Dio Cakes Confeitaria. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
