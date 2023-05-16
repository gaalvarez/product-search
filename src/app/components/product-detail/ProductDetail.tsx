import styles from "./productDetail.module.scss";

interface ProductDetailProps {
  image: string;
  title: string;
  condition: string;
  soldQuantity: number;
  amount: string;
  decimals: string;
  description: string;
}

enum Condition {
  NEW = "new",
  USED = "used",
  NOT_SPECIFIED = "not_specified",
}

const ConditionSpanish = {
  [Condition.NEW]: "Nuevo",
  [Condition.USED]: "Usado",
  [Condition.NOT_SPECIFIED]: "No especificado",
};

const ProductDetail: React.FC<ProductDetailProps> = ({
  image,
  title,
  condition,
  soldQuantity,
  amount,
  decimals,
  description,
}) => {
  return (
    <div className={styles.productDetail}>
      <div className={styles.row}>
        <div className={styles.imageColumn}>
          <img src={image} alt={title} className={styles.productImage} />
        </div>
        <div className={styles.detailsColumn}>
          <div>
            <span>{ConditionSpanish[condition as Condition]} - </span>
            <span>{soldQuantity} vendidos</span>
          </div>
          <h1 className={styles.productTitle}>{title}</h1>
          <h2 className={styles.productPrice}>
            ${amount} <sup>{decimals !== "0" ? decimals : "00"}</sup>
          </h2>
          <button className={styles.buyButton}>Comprar</button>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.descriptionWrapper}>
          <h3>Descripción del producto</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
