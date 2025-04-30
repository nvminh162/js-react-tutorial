import { Button, Container, Form } from "react-bootstrap";

const FormAddNew = () => {

  return (
    <>
      <br />
      <Container>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" disabled={isCreating} onClick={handleCreate}>
            Create
          </Button>
        </Form>
      </Container>
      <hr />
    </>
  );
};

export default FormAddNew;
