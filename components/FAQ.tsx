"use client";

import { useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FAQProps {
  openFaq: number | null;
  toggleFaq: (index: number) => void;
  isDarkMode: boolean;
}

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ  = ({ openFaq, toggleFaq, isDarkMode }: FAQProps) => {
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

  const faqs: FAQItem[] = useMemo(
    () => [
      {
        question: "Qual o tempo de antecedência para fazer pedidos?",
        answer:
          "Recomendamos fazer o pedido com pelo menos 7 dias de antecedência para garantir disponibilidade.",
      },
      {
        question: "Você faz entregas?",
        answer:
          "Sim, fazemos entregas em toda a cidade. O valor da entrega varia conforme a região.",
      },
      {
        question: "Como funciona o pagamento?",
        answer:
          "Aceitamos apenas pagamento via PIX. É necessário um depósito de 50% do valor total no momento do pedido, e os 50% restantes devem ser pagos na entrega ou retirada do produto.",
      },
    ],
    []
  );

  return (
    <motion.section
      id="faq"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className={`py-20 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-16 text-center ${
            isDarkMode ? "text-pink-400" : "text-pink-600"
          } font-script`}
        >
          Perguntas Frequentes
        </h2>
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="space-y-6 max-w-3xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`${
                isDarkMode ? "bg-gray-700" : "bg-pink-50"
              } rounded-2xl shadow-lg overflow-hidden transition-all duration-300`}
            >
              <button
                className={`flex justify-between items-center w-full p-6 text-left font-bold ${
                  isDarkMode
                    ? "text-pink-400 hover:bg-gray-600"
                    : "text-pink-600 hover:bg-pink-100"
                } transition-colors duration-300`}
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0 }}
                    id={`faq-answer-${index}`}
                    className={`p-6 ${
                      isDarkMode
                        ? "bg-gray-800 border-t border-gray-600"
                        : "bg-white border-t border-pink-100"
                    }`}
                  >
                    <p
                      className={`${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
