import {render,screen,fieldEvent} from "@testing-library/react"
import TodoList from "../components/AddTodoForm"
describe ("checking the todo-list component",()=>{
    test("check if todo list are available",()=>{
        render(<TodoList/>)
        const todoList = screen.getByText("come on whats in your mind")
        expect(todoList).toBeInTheDocument()
      })
})
