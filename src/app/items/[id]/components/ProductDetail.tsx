import styles from "./product-detail.module.scss";

interface ProductDetailProps {
  image: string;
  title: string;
  condition: string;
  soldQuantity: number;
  price: number;
  description: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({
  image,
  title,
  condition,
  soldQuantity,
  price,
  description,
}) => {
  return (
    <div className={styles.productDetail}>
      <div className={styles.row}>
        <div className={styles.column}>
          <img src={image} alt={title} className={styles.productImage} />
        </div>
        <div className={styles.column}>
          <div>
            <span>{condition} - </span>
            <span>{soldQuantity} vendidos</span>
          </div>
          <h2 className={styles.productTitle}>{title}</h2>
          <h1 className={styles.productPrice}>${price}</h1>
          <button className={styles.buyButton}>Comprar</button>
        </div>
      </div>
      <div className={styles.row}>
        <h3>Descripción del producto</h3>
        <p className={styles.productDescription}>{description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
