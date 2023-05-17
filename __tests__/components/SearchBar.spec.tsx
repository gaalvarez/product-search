import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";
import SearchBar from "@/app/components/search-bar/SearchBar";
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("SearchBar", () => {
  it("renders the input field with correct placeholder", () => {
    const placeholderText = "Buscar productos";
    render(<SearchBar placeholder={placeholderText} />);

    const input = screen.getByPlaceholderText(placeholderText);
    expect(input).toBeInTheDocument();
  });

  it("updates the input field value when typing", () => {
    const placeholderText = "Buscar productos";
    render(<SearchBar placeholder={placeholderText} />);

    const input: HTMLInputElement =
      screen.getByPlaceholderText(placeholderText);
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });

  it("clears the input field value when clear icon is clicked", async () => {
    const placeholderText = "Buscar productos";
    render(<SearchBar placeholder={placeholderText} />);

    const input: HTMLInputElement =
      screen.getByPlaceholderText(placeholderText);
    fireEvent.change(input, { target: { value: "test" } });

    const clearIcon = await screen.findByTestId("clear-action");
    fireEvent.click(clearIcon);
    expect(input.value).toBe("");
  });

  it("calls router.push with correct query when the form is submitted", () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });

    const placeholderText = "Buscar productos";
    render(<SearchBar placeholder={placeholderText} />);

    const input = screen.getByPlaceholderText(placeholderText);
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.submit(input);

    expect(pushMock).toHaveBeenCalledWith("/items?q=test");
  });
});
