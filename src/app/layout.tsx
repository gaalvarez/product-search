import "./styles/globals.scss";

import styles from "./styles/layout.module.scss";
import SearchBar from "./components/search-bar/SearchBar";
import Image from "next/image";
import logoMeli from "../../public/meli.png";

export const metadata = {
  title: "🔥 Hot Sale 2023 | Mercado Libre Argentina",
  description:
    "El Hot Sale llegó a Mercado Libre. Encontrá las mejores Ofertas en Celulares, Zapatillas, Electro y más.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.layout}>
        <header className={styles.appBar}>
          <Image src={logoMeli} alt="Logo Mercad Libre" />
          <SearchBar placeholder="Encuentra tus productos favoritos" />
          <span className={styles.spanHeader}></span>
        </header>
        <main className={styles.mainContent}>{children}</main>
      </body>
    </html>
  );
}
