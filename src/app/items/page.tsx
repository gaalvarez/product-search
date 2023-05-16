import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ProductCard from "../components/product-card/ProductCard";
import { Category, Item, SearchResult } from "./model";
import styles from "./page.module.scss";

async function getData(search: string): Promise<SearchResult> {
  const res = await fetch(`http://localhost:3000/dev/items?q=${search}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
}) {
  const query = searchParams.q;
  if (!query) {
    throw new Error("query params is necesary");
  }
  const data: SearchResult = await getData(query);

  return (
    <div>
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
            price={item.price.amount}
            hasFreeShipping={item.free_shipping}
            detailsLink={`/items/${item.id}`}
          />
        ))}
      </div>
    </div>
  );
}
