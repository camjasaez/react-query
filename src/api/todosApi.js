import axios from 'axios';

const todosApi = axios.create({
  baseURL: 'http://localhost:3500',
});

export const getTodos = async () => {
  const response = await todosApi.get('/todos');
  return response.data;
};

export const createTodo = (todo) => {
  return todosApi.post('/todos', todo);
};
export const updateTodo = async (todo) => {
  return todosApi.patch(`/todos/${todo.id}`, todo);
};
export const deleteTodo = async ({ id }) => {
  return todosApi.delete(`/todos/${id}`, id);
};

export default todosApi;
