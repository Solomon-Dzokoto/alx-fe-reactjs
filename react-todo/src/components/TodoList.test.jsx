import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';

const TodoApp = () => (
  <>
    <AddTodoForm />
    <TodoList />
  </>
);

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('can toggle todo completion', () => {
    render(<TodoList />);
    const todoCheckbox = screen.getByTestId('todo-1');
    const todoText = screen.getByText('Learn React');
    
    fireEvent.click(todoCheckbox);
    expect(todoText).toHaveClass('line-through');
  });

  test('can delete a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getByTestId('delete-1');
    fireEvent.click(deleteButton);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});

describe('AddTodoForm Component', () => {
  test('can add a new todo', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo');
    const submitButton = screen.getByText('Add Todo');
    
    fireEvent.change(input, { target: { value: 'New Todo Item' } });
    fireEvent.click(submitButton);
    
    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
  });

  test('does not add empty todos', () => {
    render(<TodoList />);
    
    const todoCountBefore = screen.getAllByRole('listitem').length;
    const submitButton = screen.getByText('Add Todo');
    
    fireEvent.click(submitButton);
    
    const todoCountAfter = screen.getAllByRole('listitem').length;
    expect(todoCountAfter).toBe(todoCountBefore);
  });
});