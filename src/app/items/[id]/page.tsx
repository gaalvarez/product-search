import ProductDetail from "./components/ProductDetail";
import { ProductDetailData } from "./model";
import styles from "./page.module.scss";

async function getData(id: string): Promise<ProductDetailData> {
  const res = await fetch(`http://localhost:3000/dev/items/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}) {
  const id = params.id;

  const {
    item: { condition, description, picture, price, sold_quantity, title },
  }: ProductDetailData = await getData(id);

  return (
    <div>
      <ProductDetail
        image={picture}
        price={price.amount}
        soldQuantity={sold_quantity}
        condition={condition}
        description={description}
        title={title}
      />
    </div>
  );
}
