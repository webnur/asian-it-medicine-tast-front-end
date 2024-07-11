export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export interface IProduct {
  id: string;
  productName: string;
  description: string;
  price: number;
  image?: string;
  medicineType: string;
  quantity: number;
  categoryId: string;
  companyName: string;
  options: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface IProductCategory {
  id: string;
  categoryName: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IOrder {
  id: string;
  orderNumber: string;
  userId: string;
  totalPrice: number;
  orderDate: Date;
  status: string;
  shippingAddress: string;
  billingAddress: string;
  createdAt: Date;
  updatedAt: Date;
  products: IOrderProduct[];
}

export interface IOrderProduct {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
  product: IProduct[];
}
