import { render, screen } from "@testing-library/react";
import { Button } from "../components/button/Button";
import { test, expect } from "vitest";
import { Primary, Warning } from "@/components/button/Button.stories";

test("should render button", () => {
  const label = "Click me";
  render(<Button label={label} />);
  const btnElm: HTMLButtonElement = screen.getByRole("button");
  expect(btnElm).toBeInTheDocument();
  expect(btnElm).toHaveTextContent(label);
});

test("should render primary button", () => {
  render(<Button {...Primary.args} />);
  const btnElm: HTMLButtonElement = screen.getByRole("button");
  expect(btnElm).toHaveClass("storybook-button--primary");
});

test("should render warning button", () => {
  render(<Button {...Warning.args} />);
  const btnElm: HTMLButtonElement = screen.getByRole("button");
  expect(btnElm).toHaveStyle("background-color: #a20303");
});
