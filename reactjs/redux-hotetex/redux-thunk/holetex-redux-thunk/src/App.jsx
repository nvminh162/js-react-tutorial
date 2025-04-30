import { Typography, Divider } from "antd";
import "@ant-design/v5-patch-for-react-19";
import "./App.css";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import { setupServer } from "./fakeAPI";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./components/TodoList/todoListSlice";

if (import.meta.env.MODE === "development") {
  setupServer();
}

const { Title } = Typography;

function App() {
  /* useEffect(() => {
    fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({
        id: 1,
        name: "Learn Python",
        completed: false,
        priority: "Medium",
      }),
    }).then((res) => {
      fetch("/api/todos")
        .then((res) => res.json())
        .then((res) => console.log(res));

      fetch("/api/updateTodo", {
        method: "POST",
        body: JSON.stringify({
          id: 1,
          name: "Learn Python",
          completed: false,
          priority: "High",
        }),
      }).then(() => {
        fetch("/api/todos")
          .then((res) => res.json())
          .then((res) => console.log(res));
      });
    });
  }, []); */

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Title style={{ textAlign: "center" }}>TODO APP with REDUX THUNK</Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
