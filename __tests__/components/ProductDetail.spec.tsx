import React from "react";
import { render, screen } from "@testing-library/react";
import ProductDetail from "@/app/components/product-detail/ProductDetail";

describe("ProductDetail", () => {
  const productProps = {
    image: "/path/to/image.jpg",
    title: "Nombre del producto",
    condition: "new",
    soldQuantity: 100,
    amount: "1000",
    decimals: "99",
    description: "Una corta descripción del producto",
  };

  it("renders the product image with correct src and alt", () => {
    render(<ProductDetail {...productProps} />);

    const image = screen.getByRole("img");
    expect(image.getAttribute("src")).toContain(
      encodeURIComponent(productProps.image)
    );
    expect(image).toHaveAttribute("alt", productProps.title);
  });

  it("renders the product title", () => {
    render(<ProductDetail {...productProps} />);

    const title = screen.getByText(productProps.title);
    expect(title).toBeInTheDocument();
  });

  it("renders the product condition ", () => {
    render(<ProductDetail {...productProps} />);

    const conditionAndSoldQuantity = screen.getByText(`Nuevo -`);
    expect(conditionAndSoldQuantity).toBeInTheDocument();
  });

  it("renders the product sold quantity", () => {
    render(<ProductDetail {...productProps} />);

    const conditionAndSoldQuantity = screen.getByText(
      `${productProps.soldQuantity} vendidos`
    );
    expect(conditionAndSoldQuantity).toBeInTheDocument();
  });

  it("renders the product price with decimals", () => {
    render(<ProductDetail {...productProps} />);

    const price = screen.getByText(`$${productProps.amount}`);
    const decimals = screen.getByText(productProps.decimals);
    expect(price).toBeInTheDocument();
    expect(decimals).toBeInTheDocument();
  });

  it("renders the product description", () => {
    render(<ProductDetail {...productProps} />);

    const description = screen.getByText(productProps.description);
    expect(description).toBeInTheDocument();
  });
});
