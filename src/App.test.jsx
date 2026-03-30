import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "./App";


// ✅ TEST 1
test("adds a new task", async () => {
  render(
    <MemoryRouter initialEntries={["/tasks"]}>
      <App />
    </MemoryRouter>
  );

  const input = await screen.findByPlaceholderText("Add a task");
  const button = await screen.findByText("Add");

  await userEvent.type(input, "Buy milk");
  await userEvent.click(button);

  expect(await screen.findByText("Buy milk")).toBeInTheDocument();
});


// ✅ TEST 2
test("deletes a task", async () => {
  render(
    <MemoryRouter initialEntries={["/tasks"]}>
      <App />
    </MemoryRouter>
  );

  const input = await screen.findByPlaceholderText("Add a task");
  const addBtn = await screen.findByText("Add");

  await userEvent.type(input, "Test task");
  await userEvent.click(addBtn);

  const deleteBtn = await screen.findByText("Delete");
  await userEvent.click(deleteBtn);

  expect(screen.queryByText("Test task")).not.toBeInTheDocument();
});


// ✅ TEST 3
test("toggles task completion", async () => {
  render(
    <MemoryRouter initialEntries={["/tasks"]}>
      <App />
    </MemoryRouter>
  );

  const input = await screen.findByPlaceholderText("Add a task");
  const addBtn = await screen.findByText("Add");

  await userEvent.type(input, "Task 1");
  await userEvent.click(addBtn);

  const task = await screen.findByText("Task 1");

  await userEvent.click(task);

  expect(task).toHaveStyle("text-decoration: line-through");
});


// ✅ TEST 4
test("filters completed tasks", async () => {
  render(
    <MemoryRouter initialEntries={["/tasks"]}>
      <App />
    </MemoryRouter>
  );

  const input = await screen.findByPlaceholderText("Add a task");
  const addBtn = await screen.findByText("Add");

  await userEvent.type(input, "Task A");
  await userEvent.click(addBtn);

  const task = await screen.findByText("Task A");

  await userEvent.click(task);

  const completedBtn = await screen.findByText("Completed");
  await userEvent.click(completedBtn);

  expect(await screen.findByText("Task A")).toBeInTheDocument();
});