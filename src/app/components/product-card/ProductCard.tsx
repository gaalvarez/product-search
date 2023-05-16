import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./productCard.module.scss";

interface ProductCardProps {
  image: string;
  name: string;
  amount: string;
  decimals: string;
  hasFreeShipping: boolean;
  detailsLink: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  amount,
  decimals,
  hasFreeShipping,
  detailsLink,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageColumn}>
        <Link href={detailsLink}>
          <Image src={image} alt={name} width={150} height={150} />
        </Link>
      </div>
      <div className={styles.infoColumn}>
        <Link href={detailsLink}>
          <span>
            <h2>{name}</h2>
          </span>
        </Link>
        <p>
          ${amount} <sup>{decimals !== "0" ? decimals : null}</sup>
        </p>
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
