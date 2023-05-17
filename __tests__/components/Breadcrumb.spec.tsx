import React from "react";
import { render, screen } from "@testing-library/react";
import Breadcrumb from "@/app/components/breadcrumb/Breadcrumb";

describe("Breadcrumb", () => {
  it("renders the correct number of links", () => {
    const crumbs = [
      { label: "Inicio", href: "/" },
      { label: "Categoría", href: "/categoria" },
      { label: "Producto", href: "/producto" },
    ];

    render(<Breadcrumb crumbs={crumbs} />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(crumbs.length);
  });

  it("renders the correct labels and hrefs", () => {
    const crumbs = [
      { label: "Inicio", href: "/" },
      { label: "Categoría", href: "/categoria" },
      { label: "Producto", href: "/producto" },
    ];

    render(<Breadcrumb crumbs={crumbs} />);

    crumbs.forEach((crumb) => {
      const link = screen.getByText(crumb.label);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", crumb.href);
    });
  });

  it("renders chevrons between links", () => {
    const crumbs = [
      { label: "Inicio", href: "/" },
      { label: "Categoría", href: "/categoria" },
      { label: "Producto", href: "/producto" },
    ];

    render(<Breadcrumb crumbs={crumbs} />);

    const chevrons = screen.getAllByTestId("chevron");
    expect(chevrons).toHaveLength(crumbs.length - 1);
  });
});
