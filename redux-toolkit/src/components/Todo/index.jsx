import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import todoListSlice from '../TodoList/todoListSlice';
import PropTypes from 'prop-types';

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ id, name, priority, completed }) {
  const [checked, setChecked] = useState(completed);
  const dispatch = useDispatch();

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todoListSlice.actions.toggleTodoStatus(id));
  };

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  );
}

Todo.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  priority: PropTypes.oneOf(['High', 'Medium', 'Low']),
  completed: PropTypes.bool,
};