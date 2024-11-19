'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { mockProducts } from '@/mock/products'

interface ProductsProps {
  isDarkMode: boolean
}

export function Products({ isDarkMode }: ProductsProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = useMemo(() => {
    return mockProducts.filter(
      (product) =>
        (filter === 'all' || product.category === filter) &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [filter, searchTerm])

  return (
    <motion.section
      id="products"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-pink-50'}`}
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-16 text-center ${
            isDarkMode ? 'text-pink-400' : 'text-pink-600'
          } font-script`}
        >
          Nossos Produtos
        </h2>
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full ${
                filter === 'all'
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter('bolos')}
              className={`px-4 py-2 rounded-full ${
                filter === 'bolos'
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              Bolos
            </button>
            <button
              onClick={() => setFilter('cupcakes')}
              className={`px-4 py-2 rounded-full ${
                filter === 'cupcakes'
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              Cupcakes
            </button>
            <button
              onClick={() => setFilter('kits')}
              className={`px-4 py-2 rounded-full ${
                filter === 'kits'
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              Kits
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full border-2 border-gray-300 focus:outline-none focus:border-pink-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={fadeInUp}
              whileHover={{
                scale: 1.03,
                boxShadow:
                  '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
              whileTap={{ scale: 0.98 }}
              className={`${
                isDarkMode ? 'bg-gray-700' : 'bg-white'
              } rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 flex flex-col justify-between`}
            >
              <div className="px-6 pt-6">
                <div className="flex items-center justify-between">
                  <h3
                    className={`font-bold text-2xl mb-3 w-[80%] ${
                      isDarkMode ? 'text-pink-400' : 'text-pink-600'
                    } font-script`}
                  >
                    {product.name}
                  </h3>
                  <product.icon
                    className={`w-10 h-10 ${
                      isDarkMode ? 'text-pink-400' : 'text-pink-500'
                    }`}
                  />
                </div>
                <p
                  className={`${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  } text-base mb-6`}
                >
                  {product.description}
                </p>
              </div>
              <div className="relative w-full mb-6 h-80">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}