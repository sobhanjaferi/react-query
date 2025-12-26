export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Irating;
}

interface Irating {
  rate: number;
  coutn: number;
}
