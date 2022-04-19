import { render, screen } from "@testing-library/react";
import Login from "../pages/login";
import { Provider } from "react-redux";
import store from "../store";

test("should render login button properly", () => {
  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );

  const loginButton = screen.getByTestId("login-test", {
    name: /login/i,
  });

  expect(loginButton).toBeVisible();
});
