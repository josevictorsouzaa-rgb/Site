
export interface Product {
  id: string;
  name: string;
  brand: string;
  sku: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description?: string;
  compatibleCars?: string[];
  rating?: number;
  reviews?: number;
  technicalSpecs?: Record<string, string>;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  status: 'Pendente' | 'Processando' | 'Enviado' | 'Entregue' | 'Cancelado';
  total: number;
  items: CartItem[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  companyName: string;
  cnpj: string;
  status: 'pending' | 'active' | 'blocked';
  role: 'user' | 'admin';
  createdAt: string;
}