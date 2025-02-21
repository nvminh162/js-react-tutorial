import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Input, Button, Select, Tag, Space } from "antd";
import { v4 as uid4 } from "uuid";

import Todo from "../Todo";
import { addTodo } from "../../redux/actions";
import { todosRemainingSelector } from "../../redux/selectors";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const todoList = useSelector(todosRemainingSelector);

  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    dispatch(
      addTodo({
        id: uid4(),
        name: todoName,
        completed: false,
        priority: priority,
      })
    );
    setTodoName("");
    setPriority("Medium");
  };

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            prioriry={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Space.Compact style={{ display: "flex" }}>
          <Input value={todoName} onChange={handleInputChange} />
          <Select value={priority} onChange={handlePriorityChange}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  );
}
