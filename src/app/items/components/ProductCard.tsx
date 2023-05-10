import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./productcard.module.scss";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  hasFreeShipping: boolean;
  detailsLink: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  hasFreeShipping,
  detailsLink,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageColumn}>
        <Image src={image} alt={name} width={150} height={150} />
      </div>
      <div className={styles.infoColumn}>
        <Link href={detailsLink}>
          <span>
            <h2>{name}</h2>
          </span>
        </Link>
        <p>${price}</p>
        {hasFreeShipping && (
          <p className={styles.freeShipping}>Entrega gratis</p>
        )}
      </div>
      <div className={styles.actionColumn}>
        <Link href={detailsLink}>
          <span>Ver detalles</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
