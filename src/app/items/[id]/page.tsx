import { Metadata } from "next";
import ProductDetail from "../../components/product-detail/ProductDetail";
import { ProductDetailData } from "./model";

const API_URL = process.env.API_URL || "http://localhost:3001/";

async function getData(id: string): Promise<ProductDetailData> {
  const res = await fetch(`${API_URL}/items/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const data: ProductDetailData = await getData(params.id);

  return {
    title: `${data.item.title} | Mercado Libre`,
    description: data.item.description,
    keywords: [
      data.item.title,
      "Compar en línea",
      "Compra online",
      "Compra seguro",
      "Meli",
      "Mercado Libre",
      data.item.free_shipping ? "Entrega gratis" : "Entrega a domicilio",
    ],
    authors: {
      name: data.author.name + " " + data.author.lastname,
      url: "https://mercadolibre.com.ar",
    },
    twitter: {
      title: data.item.title,
      description: data.item.description,
      images: data.item.picture,
      site: "mercadolibre.com.ar",
    },
    openGraph: {
      title: data.item.title,
      description: data.item.description,
      images: data.item.picture,
      type: "article",
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const {
    item: { condition, description, picture, price, sold_quantity, title },
  }: ProductDetailData = await getData(id);

  return (
    <div>
      <ProductDetail
        image={picture}
        amount={price.amount?.toLocaleString("es-AR")}
        decimals={price.decimals?.toString() || "00"}
        soldQuantity={sold_quantity}
        condition={condition}
        description={description}
        title={title}
      />
    </div>
  );
}
