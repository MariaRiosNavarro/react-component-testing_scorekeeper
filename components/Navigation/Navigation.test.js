import { render, screen, userEvent } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);
  const linkPlay = screen.getByRole("link", { name: "Play" });
  const linkHistory = screen.getByRole("link", { name: "History" });
  expect(linkPlay).toBeInTheDocument();
  expect(linkHistory).toBeInTheDocument();
  userEvent.click(linkPlay);
  userEvent.click(linkHistory);
});
