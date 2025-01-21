import { render, screen } from "@testing-library/react";
import { Button } from "../components/button/Button";
import { test, expect } from "vitest";

test("should render button", () => {
    render(<Button label={""} />);
    const btnElm: HTMLButtonElement = screen.getByRole("button");
    expect(btnElm).toBeInTheDocument();
});

test('demo', () => {
  expect(true).toBe(true)
})
