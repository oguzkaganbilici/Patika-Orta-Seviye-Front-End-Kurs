import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import ToDo from "./index";

describe("ToDo test", () => {
  let button, input;

  beforeEach(() => {
    render(<ToDo />);

    button = screen.getByText("add");
    input = screen.getByLabelText("test");
  });

  test("default tasks should be rendered", () => {
    const items = screen.getAllByText(/deneme/i);
    expect(items.length).toEqual(3);
  });

  test("input and button should be add", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("check input and button for new task", () => {
    const newItem = userEvent.setup();
    newItem.type(input, "test");
    fireEvent.click(button);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
