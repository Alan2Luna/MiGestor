import { describe, expect, it, vi } from "vitest";
import { EditForm } from "../src/components/EditForm";
import { render, screen } from "@testing-library/react";
import { Wrapper } from "./utils/Wrapper";
import userEvent from "@testing-library/user-event";

vi.mock("react-router", async (importOriginal) => {
  const actual = await importOriginal<any>();
  return {
    ...actual,
    useParams: vi.fn(() => ({ id: "2" })),
  };
});

vi.mock("../src/services/index", async(importOriginal) => {
  const actual = await importOriginal<typeof import('../src/services/index')>();
  const mockUpdateUserFn = vi.fn(() => Promise.resolve());

  return {
    ...actual,
    updateUser: mockUpdateUserFn,
  }
});

export const mockUpdateUserFn = (vi.mocked(await import("../src/services/index")) as any).updateUser;

describe("EditForm component", () => {
  it("", async () => {
    const userMock = {
      first_name: "Alan",
      last_name: "Luna",
      email: "alan@gmail.com",
    }

    render(<EditForm />, { wrapper: Wrapper });

    const inputFirstName = screen.getByLabelText("Nombre");
    const inputLastName =  screen.getByLabelText("Apellido");
    const inputEmail = screen.getByLabelText("Email");
    const btnSubmit = screen.getByRole("button", {
      name: "Guardar Cambios"
    })

    await userEvent.type(inputFirstName, userMock.first_name);
    await userEvent.type(inputLastName, userMock.last_name);
    await userEvent.type(inputEmail, userMock.email);
    await userEvent.click(btnSubmit);

    expect(mockUpdateUserFn).toHaveBeenCalled();
    expect(mockUpdateUserFn).toHaveBeenCalledWith(2, userMock);
  })
})