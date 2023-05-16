import "./styles/globals.scss";

import styles from "./styles/layout.module.scss";
import SearchBar from "./components/search-bar/SearchBar";
import Image from "next/image";
import logoMeli from "../../public/meli.png";
import { Nunito_Sans } from "next/font/google";

export const metadata = {
  title: "🔥 Hot Sale 2023 | Mercado Libre Argentina",
  description:
    "El Hot Sale llegó a Mercado Libre. Encontrá las mejores Ofertas en Celulares, Zapatillas, Electro y más.",
};

const nunitoSans = Nunito_Sans({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunitoSans.className}>
      <body className={styles.layout}>
        <header className={styles.appBar}>
          <div>
            <Image src={logoMeli} alt="Logo Mercad Libre" />
            <SearchBar placeholder="Encuentra tus productos favoritos" />
          </div>
        </header>
        <main className={styles.mainContent}>{children}</main>
      </body>
    </html>
  );
}
