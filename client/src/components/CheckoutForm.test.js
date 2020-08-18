import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "../components/CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const wrapper = render(<CheckoutForm />);
  const element = wrapper.queryByText(/Checkout Form/i);
  expect(element).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
  const { getByTestId } = render(<CheckoutForm />);
  const button = getByTestId(/button/i);
  const successMsg = getByTestId(/successMessage/i);
  fireEvent.clickwr(button);
  expect(successMsg).toBeInTheDocument();
  expect(successMsg).toBeVisible();
});
