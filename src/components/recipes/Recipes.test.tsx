import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Recipes from "./Recipes";

describe("Recipes Component", () => {
  test("renders logo as link", async () => {
    render(<Recipes />, { wrapper: BrowserRouter });

  });
});