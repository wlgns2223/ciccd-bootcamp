import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

describe("Counter Component", () => {
  test("renders with default props", () => {
    render(<Counter />);

    expect(screen.getByText("Counter")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByTestId("increment-button")).toBeInTheDocument();
    expect(screen.getByTestId("decrement-button")).toBeInTheDocument();
    expect(screen.getByTestId("reset-button")).toBeInTheDocument();
  });

  test("renders with custom props", () => {
    render(<Counter initialValue={5} title="Custom Counter" />);

    expect(screen.getByText("Custom Counter")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  test("increments counter when + button is clicked", () => {
    render(<Counter />);

    const incrementButton = screen.getByTestId("increment-button");
    fireEvent.click(incrementButton);

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("decrements counter when - button is clicked", () => {
    render(<Counter initialValue={5} />);

    const decrementButton = screen.getByTestId("decrement-button");
    fireEvent.click(decrementButton);

    expect(screen.getByText("4")).toBeInTheDocument();
  });

  test("resets counter when reset button is clicked", () => {
    render(<Counter initialValue={10} />);

    // First increment
    const incrementButton = screen.getByTestId("increment-button");
    fireEvent.click(incrementButton);
    expect(screen.getByText("11")).toBeInTheDocument();

    // Then reset
    const resetButton = screen.getByTestId("reset-button");
    fireEvent.click(resetButton);
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  test("can increment multiple times", () => {
    render(<Counter />);

    const incrementButton = screen.getByTestId("increment-button");

    fireEvent.click(incrementButton);
    expect(screen.getByText("1")).toBeInTheDocument();

    fireEvent.click(incrementButton);
    expect(screen.getByText("2")).toBeInTheDocument();

    fireEvent.click(incrementButton);
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  test("can decrement multiple times", () => {
    render(<Counter initialValue={5} />);

    const decrementButton = screen.getByTestId("decrement-button");

    fireEvent.click(decrementButton);
    expect(screen.getByText("4")).toBeInTheDocument();

    fireEvent.click(decrementButton);
    expect(screen.getByText("3")).toBeInTheDocument();

    fireEvent.click(decrementButton);
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  test("can go below zero", () => {
    render(<Counter />);

    const decrementButton = screen.getByTestId("decrement-button");
    fireEvent.click(decrementButton);

    expect(screen.getByText("-1")).toBeInTheDocument();
  });
});
