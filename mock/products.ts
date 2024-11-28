import { Cake, Cookie, Gift } from "lucide-react";
import { StaticImageData } from "next/image";

import boloVasco from "../public/images/bolo-vasco.jpeg";
import boloMonstros from "../public/images/bolo-mostros.jpeg";
import boloRosa from "../public/images/bolo-rosa.jpeg";
import ovoPascoa1 from "../public/images/ovo-pasco1.jpeg";
import ovoPascoa2 from "../public/images/ovo-pascoa2.jpeg";
import ovoPascoa3 from "../public/images/ovo-pascoa3.jpeg";
import trufas from "../public/images/trufas.jpeg";
import doces1 from "../public/images/doces1.jpeg";
import doces2 from "../public/images/doces2.jpeg";
import cestaPascoa from "../public/images/cesta-pascoa.jpeg";
import bolo8 from "../public/images/bolo8.jpeg";
import bolo7 from "../public/images/bolo7.jpeg";
import bolo3 from "../public/images/bolo3.jpeg";
import bolo4 from "../public/images/bolo4.jpeg";
import bolo2 from "../public/images/bolo2.jpeg";
import bolo1 from "../public/images/bolo1.jpeg";
import bolo6 from "../public/images/bolo6.jpeg";

import cestaPascoa2 from "../public/images/cesta-pascoa2.jpg";
import doces3 from "../public/images/doces3.jpeg";
import boloAzul from "../public/images/bolo-azul.jpg";
import cestaPascoa5 from "../public/images/cesta-pascoa5.jpeg";
import cestaPascoa3 from "../public/images/cesta-pasco3.jpeg";
import cestaPascoa4 from "../public/images/cesta-pasco4.jpeg";

export interface Product {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  image: StaticImageData;
  category: string;
}

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Bolo do Vasco",
    description:
      "Bolo temático do Vasco da Gama decorado com o escudo do time, chuteira e bola de futebol. Personalizado com o nome Guilherme e número 13. Base em preto e branco com a cruz de malta em destaque.",
    icon: Cake,
    image: boloVasco,
    category: "bolos",
  },
  {
    id: "2",
    name: "Bolo Monstros SA",
    description:
      "Bolo temático inspirado em Monstros SA com três andares. Topo amarelo com olho característico, meio em pelúcia turquesa, e base prateada com portas coloridas. Personalizado com o nome Helena Grabrielle.",
    icon: Cake,
    image: boloMonstros,
    category: "bolos",
  },
  {
    id: "3",
    name: "Bolo Arco-íris",
    description:
      "Bolo comemorativo de 1 mês da Maria Luz, decorado em rosa com tema arco-íris. Topo personalizado com nuvens sorridentes e corações, acabamento em chantilly rosa.",
    icon: Cake,
    image: boloRosa,
    category: "bolos",
  },
  {
    id: "4",
    name: "Ovo de Páscoa Gourmet",
    description:
      "Ovo de Páscoa artesanal decorado com morangos frescos e trufas de chocolate. Apresentado em caixa amarela elegante com colher personalizada.",
    icon: Gift,
    image: ovoPascoa1,
    category: "doces",
  },
  {
    id: "5",
    name: "Ovo de Páscoa Crocante",
    description:
      "Ovo de Páscoa com cobertura branca e drizzle de chocolate ao leite. Decorado com pedaços de chocolate e acabamento texturizado.",
    icon: Gift,
    image: ovoPascoa2,
    category: "doces",
  },
  {
    id: "6",
    name: "Ovo de Páscoa Personalizado",
    description:
      'Ovo de Páscoa especial decorado com letras de chocolate formando "TE AMO". Base em chocolate ao leite com acabamento artesanal.',
    icon: Gift,
    image: ovoPascoa3,
    category: "doces",
  },
  {
    id: "7",
    name: "Trufas Douradas",
    description:
      "Trufas de chocolate premium com acabamento dourado, apresentadas em forminhas vermelhas em formato de flor. Perfeitas para ocasiões especiais.",
    icon: Cookie,
    image: trufas,
    category: "doces",
  },
  {
    id: "8",
    name: "Cesta de Páscoa Luxo",
    description:
      "Cesta de Páscoa completa com pelúcias (urso e coelho), ovo de chocolate artesanal em caixa amarela e decorações temáticas.",
    icon: Gift,
    image: cestaPascoa,
    category: "kits",
  },
  {
    id: "9",
    name: "Doces Finos Sortidos",
    description:
      "Seleção de doces finos incluindo trufas com granulados, doces com coco e brigadeiros gourmet. Apresentação em forminhas elegantes.",
    icon: Cookie,
    image: doces1,
    category: "doces",
  },
  {
    id: "10",
    name: "Mini Tortinhas e Copinhos",
    description:
      "Conjunto de mini tortinhas de chocolate com chantilly e bombons em copinho. Decorados com granulados e confeitos especiais.",
    icon: Cookie,
    image: doces2,
    category: "doces",
  },
  {
    id: "11",
    name: "Bolo do Flamengo",
    description:
      "Bolo temático do Flamengo com nome no topo, personagem infantil e mascote do time, decorado com gramado de glacê verde. Corpo em vermelho e preto com o escudo do Flamengo no centro. Fundo e base seguem o padrão vermelho e preto, reforçando o tema.",
    icon: Cake,
    image: bolo8,
    category: "bolos",
  },
  {
    id: "12",
    name: "Bolo da Ladybug",
    description:
      "Bolo inspirado na personagem Ladybug, com cobertura branca, nome em destaque, decorado com joaninhas e flores vermelhas. No topo, torre Eiffel, número e a Ladybug como centro da composição. Base branca com brilho discreto.",
    icon: Cake,
    image: bolo7,
    category: "bolos",
  },
  {
    id: "13",
    name: "Bolo com tema de Princesa",
    description:
      "Bolo com tema da Princesa Aurora (Bela Adormecida), decorado em tons de rosa com cobertura texturizada e detalhes brilhantes. Nome do topo, castelo rosa, Aurora e as três fadas madrinhas (Flora, Fauna e Primavera). Na base, plaquinha em forma de flor com 1 Mês destacando a comemoração.",
    icon: Cake,
    image: bolo3,
    category: "bolos",
  },
  {
    id: "14",
    name: "Bolo decorado com cobertura dourada cintilante",
    description:
      "Detalhes texturizados e pérolas comestíveis. No topo, arranjo floral com rosas vermelhas e pequenos ramos verdes, criando um visual sofisticado e elegante.",
    icon: Cake,
    image: bolo4,
    category: "bolos",
  },
  {
    id: "15",
    name: "Bolo de Aniversário Metalizado",
    description:
      "Bolo de dois andares. Cobertura superior em degradê de rosé gold para branco, decorado com rosas naturais. Base com raspas de chocolate e seção central transparente iluminada com LED exibindo o número 52 em dourado.",
    icon: Cake,
    image: bolo2,
    category: "bolos",
  },
  {
    id: "16",
    name: "Bolo com flores em tons de rosa e dourado",
    description:
      "Bolo de dois andares com textura ondulada em tom champanhe. Decorado com flores em tons de rosa e dourado, folhagens e topo personalizado. Acabamento refinado com rosas artesanais.",
    icon: Cake,
    image: bolo1,
    category: "bolos",
  },
  {
    id: "17",
    name: "Bolo Jardim Encantado Isabella",
    description:
      "Bolo temático infantil com degradê de amarelo para lilás. Decorado com toppers de passarinhos, casinhas, árvores e flores. Detalhe especial de cerca branca e base com babados. Personalizado para Isabella, 8 anos, com tema jardim encantado.",
    icon: Cake,
    image: bolo6,
    category: "bolos",
  },
  {
    id: "19",
    name: "Kit Feliz Páscoa Premium",
    description:
      "Cesta de Páscoa luxuosa com balão personalizado, urso de pelúcia com cachecol, coelho branco e chocolates artesanais em embalagem especial. Decoração temática completa.",
    icon: Gift,
    image: cestaPascoa5,
    category: "kits",
  },
  {
    id: "20",
    name: "Caixa de Trufas Personalizadas",
    description:
      "Conjunto de trufas artesanais com decoração em chocolate ao leite e branco, apresentadas em caixa vermelha com letras personalizadas e coelho de chocolate.",
    icon: Cookie,
    image: doces3,
    category: "doces",
  },
  {
    id: "21",
    name: "Cesta de Páscoa Deluxe",
    description:
      "Cesta decorativa com urso de pelúcia bege, coelho branco e ovo de Páscoa especial em caixa amarela. Apresentação elegante com decoração temática.",
    icon: Gift,
    image: cestaPascoa2,
    category: "kits",
  },
  {
    id: "22",
    name: "Cesta Páscoa Chocolate Premium",
    description:
      "Cesta especial com pelúcias temáticas e ovo de Páscoa decorado com chocolate branco e ao leite, apresentado em caixa premium com colher personalizada.",
    icon: Gift,
    image: cestaPascoa3,
    category: "kits",
  },
  {
    id: "23",
    name: "Cesta Páscoa Família",
    description:
      "Conjunto completo de Páscoa com urso e coelho de pelúcia, ovo de chocolate artesanal decorado e embalagem presenteável em cesta tradicional.",
    icon: Gift,
    image: cestaPascoa4,
    category: "kits",
  },
];
