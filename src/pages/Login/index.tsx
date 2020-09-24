import { Button, Card, Col, Form, Input, Row } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  const { push } = useHistory();

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col span={12}>
        <Card title="Login">
          <Form>
            <Form.Item>
              <Input placeholder="email" />
            </Form.Item>
            <Form.Item>
              <Input.Password placeholder="password" />
            </Form.Item>
            <Button onClick={() => push("/home")} type="primary" block>
              Entrar
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
