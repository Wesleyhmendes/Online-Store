export type ProductType = {
  variations_data: any;
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  available_quantity: number;
  sold_quantity: number;
  condition: string;
};
export type GetCategory = {
  id: string,
  name: string,
};

export type SelectedCategoryType = {
  id: string,
  isChecked: boolean,
};

export type CartType = {
  quantity: number,
  totalPrice: number,
} & ProductType;

export type KeepInfoType = {
  name: string,
  email: string,
  cpf: string,
  telefone: string,
  cep: string,
  address: string,
  complement: string,
  number: string,
  city: string,
  payment: string,
};
