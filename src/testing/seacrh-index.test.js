import { render, screen } from "@testing-library/react";
import Search from "../Component/Search/index";
import { Provider } from "react-redux";
import store from "../store";

test("should show searchbar", () => {
  render(
    <Provider store={store}>
      <Search />
    </Provider>
  );
  expect(screen.getByTestId("search-bar-form")).toBeInTheDocument();
});
