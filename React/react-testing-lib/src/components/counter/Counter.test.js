import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./index";

describe("Counter Tests", () => {
  let counter, increaseBtn, decreaseBtn;

  beforeEach(() => {
    render(<Counter />);
    increaseBtn = screen.getByText("Increase");
    decreaseBtn = screen.getByText("Decrease");
    counter = screen.getByText("0");
  });

  beforeAll(() => console.log("Before all tests, this one starts"));

  afterEach(() => console.log("This one starts, after each tests"));

  afterAll(() => console.log("After all tests, this one starts"));

  test("increase btn", () => {
    fireEvent.click(increaseBtn);
    expect(counter.textContent).toBe("1");
  });

  test("decrease btn", () => {
    fireEvent.click(decreaseBtn);
    expect(counter.textContent).toBe("-1");
  });
});
