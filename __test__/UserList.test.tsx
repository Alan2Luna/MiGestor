
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { UserList } from "../src/components/UserList";
import { mockUsersData } from "./mocks/UsersMock";
import { Wrapper } from "./utils/Wrapper";

describe("UserList component", () => {
  it("should display the full list of users with their names", async () => {
    render(<UserList users={mockUsersData}/>, { wrapper: Wrapper });

    const username1 = `${mockUsersData[0].first_name} ${mockUsersData[0].last_name}`;
    const username2 = `${mockUsersData[1].first_name} ${mockUsersData[1].last_name}`;

    const user1 = screen.getByText(username1);
    const user2 = screen.getByText(username2);

    expect(user1).toBeInTheDocument();
    expect(user2).toBeInTheDocument();
  });

  it("should display the empty list message when users array is empty.", async() => {
    render(<UserList users={[]}/>);

    const text = screen.getByText("No hay usuarios registrados en este momento.")

    expect(text).toBeInTheDocument();
  })

    it("should display the empty list message when users prop is undefined", async() => {
    render(<UserList users={undefined}/>);

    const text = screen.getByText("No hay usuarios registrados en este momento.")

    expect(text).toBeInTheDocument();
  })
});