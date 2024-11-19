import { Cake } from 'lucide-react'
import bolo8 from '../public/images/bolo8.jpeg'
import bolo7 from '../public/images/bolo7.jpeg'
import bolo3 from '../public/images/bolo3.jpeg'
import bolo4 from '../public/images/bolo4.jpeg'
import bolo2 from '../public/images/bolo2.jpeg'
import bolo1 from '../public/images/bolo1.jpeg'
import bolo6 from '../public/images/bolo6.jpeg'
import { StaticImageData } from 'next/image'

export interface Product {
  id: string
  name: string
  description: string
  icon: React.ElementType
  image: StaticImageData
  category: string
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Bolo do flamengo',
    description: 'Bolo temático do Flamengo com nome no topo, personagem infantil e mascote do time, decorado com gramado de glacê verde. Corpo em vermelho e preto com o escudo do Flamengo no centro. Fundo e base seguem o padrão vermelho e preto, reforçando o tema.',
    icon: Cake,
    image: bolo8,
    category: 'bolos',
  },
  {
    id: '2',
    name: 'Bolo da Ladybug',
    description: 'Bolo inspirado na personagem Ladybug, com cobertura branca, nome em destaque, decorado com joaninhas e flores vermelhas. No topo, torre Eiffel, número e a Ladybug como centro da composição. Base branca com brilho discreto.',
    icon: Cake,
    image: bolo7,
    category: 'bolos',
  },
  {
    id: '3',
    name: 'Bolo com tema de Princesa',
    description: 'Bolo com tema da Princesa Aurora (Bela Adormecida), decorado em tons de rosa com cobertura texturizada e detalhes brilhantes. Nome do topo, castelo rosa, Aurora e as três fadas madrinhas (Flora, Fauna e Primavera). Na base, plaquinha em forma de flor com 1 Mês destacando a comemoração.',
    icon: Cake,
    image: bolo3,
    category: 'bolos',
  },
  {
    id: '4',
    name: 'Bolo decorado com cobertura dourada cintilante',
    description: 'Detalhes texturizados e pérolas comestíveis. No topo, arranjo floral com rosas vermelhas e pequenos ramos verdes, criando um visual sofisticado e elegante.',
    icon: Cake,
    image: bolo4,
    category: 'bolos',
  },
  {
    id: '5',
    name: 'Bolo de Aniversário Metalizado',
    description: 'Bolo de dois andares. Cobertura superior em degradê de rosé gold para branco, decorado com rosas naturais. Base com raspas de chocolate e seção central transparente iluminada com LED exibindo o número 52 em dourado.',
    icon: Cake,
    image: bolo2,
    category: 'bolos',
  },
  {
    id: '6',
    name: 'Bolo com flores em tons de rosa e dourado',
    description: 'Bolo de dois andares com textura ondulada em tom champanhe. Decorado com flores em tons de rosa e dourado, folhagens e topo personalizado. Acabamento refinado com rosas artesanais.',
    icon: Cake,
    image: bolo1,
    category: 'bolos',
  },
  {
    id: '7',
    name: 'Bolo Jardim Encantado Isabella',
    description: 'Bolo temático infantil com degradê de amarelo para lilás. Decorado com toppers de passarinhos, casinhas, árvores e flores. Detalhe especial de cerca branca e base com babados. Personalizado para Isabella, 8 anos, com tema jardim encantado.',
    icon: Cake,
    image: bolo6,
    category: 'bolos',
  },
]