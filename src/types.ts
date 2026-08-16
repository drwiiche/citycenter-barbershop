export interface ServiceItem {
  id: string;
  name: string;
  category: 'barber' | 'beard' | 'combo' | 'salon' | 'specialty';
  price: string;
  duration: string;
  description: string;
  image?: string;
  icon?: string;
  popular?: boolean;
  tag?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  content: string;
  verified: boolean;
  avatar: string;
}

export interface BarberItem {
  id: string;
  name: string;
  title: string;
  experience: string;
  image: string;
  specialty: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BusinessHours {
  day: string;
  hours: string;
  isOpenToday: boolean;
}

