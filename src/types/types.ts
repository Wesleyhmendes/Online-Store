export type ProductType = {
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
