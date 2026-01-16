import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Óleo de Motor 5W30 Sintético Premium',
    brand: 'Lubrax',
    sku: 'OIL-5W30-SYN',
    price: 89.90,
    originalPrice: 110.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgRBmwFbZJmxwQJHn5LZgEJEWC-6iBXy2kN4h2ifjnxzUZQM4qU15bcdmJ_-MRNGVWKUms08VvpkkZFrxnnqrrI8z5Qn1ssWJYGQYg2qGKk_-GOGcLKkHk-T1ZN_QL_rjoLRXfAYXkyXY6inVWoACNwBO4URYsieOk1MtFCZ16NRwGtuin-8UYr7m-yU5jVd98B46FqdrMJJqFTap9VT9ljcP1S-2sj4brNkAV2usphKn803KIYBSEsdIpuXgtMyPo3KQ38t5y9fvG',
    category: 'Óleos',
    rating: 4.8,
    reviews: 120,
    description: 'Óleo lubrificante multiviscoso 100% sintético para motores movidos a gasolina, etanol, flex e GNV. Proporciona economia de combustível e proteção excepcional contra o desgaste.',
    compatibleCars: [
      'Honda Civic 1.8/2.0 (2012-2021)',
      'Toyota Corolla 1.8/2.0 (2015-2022)',
      'Fiat Toro 1.8 (2016-2021)',
      'Jeep Renegade 1.8 (2015-2021)',
      'Chevrolet Onix 1.0 Turbo (2019-2023)'
    ],
    technicalSpecs: {
      'Viscosidade': '5W-30',
      'Tipo': 'Sintético',
      'API': 'SP',
      'ILSAC': 'GF-6A',
      'Volume': '1 Litro'
    }
  },
  {
    id: '2',
    name: 'Filtro de Óleo Fram Extra Guard',
    brand: 'Fram',
    sku: 'FLT-FRAM-XG',
    price: 45.50,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgX53D4R70NoNuLhACVuCiiJ-WiBJznv4VTCjAQyf2qLhy4t2CJA0UoHzHAFdIXFPJsVDr3PI7-6K6YAZzpNGcV2RJSuRZ7LLJo1TY7t9A_nCgWGSPTfdqN2HtMJfdWsQy1eQ9KRv6ZJwIsrzTq1Du2KNjMiLq4DnSpo0hkpkEbHfOr44wN3mFzn1Jgu9yHQJ880S6Ex6vK_0BfTOf1BRi66yW-7l1HnTS8N8oT8jbu6AhthQn_KQDXrN4TVC5UVqrYGq71nNxE5AP',
    category: 'Filtros',
    rating: 4.5,
    reviews: 85,
    description: 'Filtro de óleo de alta eficiência, retém 99% das impurezas. Ideal para uso severo e trocas estendidas.',
    compatibleCars: [
      'Volkswagen Gol 1.0/1.6 (2008-2022)',
      'Volkswagen Fox 1.0/1.6 (2010-2020)',
      'Ford Ka 1.0/1.5 (2014-2021)',
      'Ford Fiesta 1.6 (2010-2019)'
    ],
    technicalSpecs: {
      'Altura': '85mm',
      'Diâmetro Externo': '76mm',
      'Rosca': 'M20 x 1.5',
      'Válvula Antirretorno': 'Sim',
      'Válvula de Alívio': 'Sim'
    }
  },
  {
    id: '3',
    name: 'Pastilha de Freio Dianteira Cerâmica',
    brand: 'Bosch',
    sku: 'BRK-BSH-CER',
    price: 120.00,
    originalPrice: 150.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrPWdbsr2i4GBk7w24IeTeqoC71hDdPTQN5386Rva2_Mu0LLvbRl2HeopMGKd4vQOC7RVX0SqfsHfmAF2AeI1GS3N4WEsYIPll6trvpPGnti-slG3a2r-As2rU5a02H5xy336GJxVM3hPQ8R-ugqpvKSKKkzoTZa8jNF9bpGkr3N4-boz3Q_lAAXQVLKfRyoUKJRfntK2iyDkwIBUw2-sp9-vaPALP0XN-TL6sLEYVBwb2MkO63zhSBGE537QDtBg8Ez1uhLB8RM-D',
    category: 'Freios',
    rating: 4.9,
    reviews: 200,
    description: 'Pastilhas de cerâmica Bosch Blue. Menor ruído, menor poeira e maior durabilidade. Frenagem segura em todas as condições.',
    compatibleCars: [
      'Honda Fit 1.5 (2015-2021)',
      'Honda City 1.5 (2015-2021)',
      'Honda WR-V 1.5 (2017-2021)'
    ],
    technicalSpecs: {
      'Posição': 'Dianteira',
      'Material': 'Cerâmica',
      'Sistema': 'Teves',
      'Sensor de Desgaste': 'Sonoro',
      'Dimensões': '131.5 x 55.6 x 16.5 mm'
    }
  },
  {
    id: '4',
    name: 'Amortecedor Traseiro Pressurizado',
    brand: 'Monroe',
    sku: 'SP0321',
    price: 323.00,
    originalPrice: 380.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKY-Tz-IvsZeL3tIGNlq8cVn88GB875xpmtyid0IuQxgwDZI57z8WexZmCBUnEBGlckcH6yLiqLHiISVvxppISuSFaDLbp7rzAXzS3WIgRC5iSyQZa1B8lUxcJLt6GYeb_aYs6-FeCzOT4tIannfbQiLwR3BMnf1fwOKeGYE0NtgsxZKQTPkFXPaeL5a_X_A-FLW75TexJsBasxw5-do6oavD3KyB0ychxJsvqRDEsAoWu3yGJoA5rf7wlisFV-dhH9T7Ynmbcgcg0',
    category: 'Suspensão',
    rating: 4.7,
    reviews: 54,
    description: 'Amortecedor Gás Premium Oespectrum. Tecnologia avançada de valvulamento para maior estabilidade e conforto.',
    compatibleCars: [
      'Hyundai HB20 1.0/1.6 (2012-2019)',
      'Hyundai HB20S 1.0/1.6 (2013-2019)'
    ],
    technicalSpecs: {
      'Posição': 'Traseira',
      'Lado': 'Esquerdo/Direito',
      'Tipo': 'Pressurizado (Gás)',
      'Linha': 'Oespectrum',
      'Fixação': 'Olhal/Olhal'
    }
  },
  {
    id: '5',
    name: 'Bateria Moura 60Ah',
    brand: 'Moura',
    sku: 'BAT-MOU-60',
    price: 449.90,
    originalPrice: 499.90,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7WVlA7-vbWlsmzMhYClNbzg63yBX3HqyrIApCMmj-FN-3zGCrUWbCmisO3n6B8ZS0zBx01G0e5xpiXaWdmMnknC68WoNysfNniskPej4uFKwR-oGzoaj9zsZlcaLLXl6SGhROWaseOUnYf7Acud24xFOh_Fe17F1a_z2dyNnz9VoWrwRRI_yvfCdOHDIsD5DNpRVJJ0tQJyoHp7-bt7osrVWFoj0LM_6BSVU3mrVDAubQKkVBO93qJ2ElMpOjnHMKPHwmk35tSIch',
    category: 'Elétrica',
    rating: 4.9,
    reviews: 310,
    description: 'Bateria livre de manutenção com tecnologia de grade laminada, garantindo maior vida útil e melhor condutividade elétrica.',
    compatibleCars: [
      'Universal (Verificar dimensões e polaridade)',
      'Fiat Argo',
      'Volkswagen Polo',
      'Chevrolet Tracker'
    ],
    technicalSpecs: {
      'Amperagem': '60Ah',
      'CCA': '460A',
      'Tensão': '12V',
      'Polaridade': 'Direito',
      'Dimensões': '244 x 175 x 175 mm'
    }
  }
];
