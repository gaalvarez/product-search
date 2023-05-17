import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ProductCard from "../components/product-card/ProductCard";
import { Category, Item, SearchResult } from "./model";
import styles from "./page.module.scss";

import type { Metadata } from "next";

const API_URL = process.env.API_URL || "http://localhost:3001/";

async function getData(search: string): Promise<SearchResult> {
  const res = await fetch(`${API_URL}/items?q=${search}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}): Promise<Metadata> {
  const query = searchParams.q;
  if (!query) {
    throw new Error("query params is necesary");
  }
  const data: SearchResult = await getData(query);

  return {
    title: `La mejor selección de ${query} | Mercado Libre`,
    description: `Encuentra una selección increible en ${query} en nuestra tienda en línea. Mercado Libre tiene una selección de los mejores productos. ¡Haz clic ahora y encuentra el producto perfecto para ti!`,
    keywords: [
      query,
      "Compar en línea",
      "Compra online",
      "Compra seguro",
      "Meli",
      "Mercado Libre",
      ...data.categories?.map((item) => item.name),
    ],
    authors: {
      name: data.author.name + " " + data.author.lastname,
      url: "https://mercadolibre.com.ar",
    },
  };
}

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const query = searchParams.q;
  if (!query) {
    throw new Error("query params is necesary");
  }
  const data: SearchResult = await getData(query);

  return (
    <div className={styles.resultWrapper}>
      <Breadcrumb
        crumbs={(data.categories || []).map((category: Category) => ({
          label: category.name,
          href: `/category/${category.id}`,
        }))}
      />
      <div className={styles.productGrid}>
        {data.items.map((item: Item) => (
          <ProductCard
            key={item.id}
            image={item.picture}
            name={item.title}
            amount={item.price.amount?.toLocaleString("es-AR")}
            decimals={item.price.decimals?.toString()}
            hasFreeShipping={item.free_shipping}
            detailsLink={`/items/${item.id}`}
          />
        ))}
      </div>
    </div>
  );
}
