/* import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dashboard from "./Dashboard";

test("simulate click using userEvent", async () => {
  render(<Dashboard />);
  const button = screen.getByText("Click Me");

  userEvent.click(button);

  await waitFor(() => {
    expect(button.textContent).toBe("Hello");
  });
});
 */
