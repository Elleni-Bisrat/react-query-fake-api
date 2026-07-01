export interface Order {
  id: string;
  userId: string;
//   products: Product[];
  total: number;
  status: 'pending' | 'shipped' | 'delivered';
}