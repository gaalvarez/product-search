import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCard from "@/app/components/product-card/ProductCard";

describe("ProductCard", () => {
  const productProps = {
    image: "/path/to/image.jpg",
    name: "Nombre del producto",
    amount: "1000",
    decimals: "99",
    hasFreeShipping: true,
    detailsLink: "/product/1",
  };

  it("renders the product image with correct src and alt", () => {
    render(<ProductCard {...productProps} />);

    const image = screen.getByRole("img");
    expect(image.getAttribute("src")).toContain(
      encodeURIComponent(productProps.image)
    );
    expect(image).toHaveAttribute("alt", productProps.name);
  });

  it("renders the product name", () => {
    render(<ProductCard {...productProps} />);

    const name = screen.getByText(productProps.name);
    expect(name).toBeInTheDocument();
  });

  it("renders the product price with decimals", () => {
    render(<ProductCard {...productProps} />);

    const price = screen.getByText(`$${productProps.amount}`);
    const decimals = screen.getByText(productProps.decimals);
    expect(price).toBeInTheDocument();
    expect(decimals).toBeInTheDocument();
  });

  it("renders 'Entrega gratis' when hasFreeShipping is true", () => {
    render(<ProductCard {...productProps} />);

    const freeShipping = screen.getByText("Entrega gratis");
    expect(freeShipping).toBeInTheDocument();
  });

  it("does not render 'Entrega gratis' when hasFreeShipping is false", () => {
    render(<ProductCard {...productProps} hasFreeShipping={false} />);

    const freeShipping = screen.queryByText("Entrega gratis");
    expect(freeShipping).not.toBeInTheDocument();
  });

  it("renders the correct product details link", () => {
    render(<ProductCard {...productProps} />);

    const links = screen.getAllByTestId("detail-link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("href", productProps.detailsLink);
    });
  });
});
