import TodoList from "./components/TodoList";

const DATA = [
  { name: "Task 1", id: 23456789 },
  { name: "Task 2", id: 23456789456789 },
  { name: "Task 3", id: 23456789234564323456 },
];

function App() {
  return (
    <>
      <TodoList data={DATA} />
    </>
  );
}

export default App;
