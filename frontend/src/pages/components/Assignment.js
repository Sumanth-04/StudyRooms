import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, Button } from "antd";

import { Input } from "antd";

const { TextArea } = Input;

export class Asssignment extends Component {
  constructor() {
    super();
    this.state = {
      assignment: "",
    };
  }
  static propTypes = {};

  render() {
    const { assignment } = this.state;

    return (
      <div>
        <Row>
          <Col span={8}>
            <Card>
              <Card title="Create New Assignment">
                <TextArea
                  rows={6}
                  value={assignment}
                  onChange={(e) => {
                    this.setState({ assignment: e.target.value });
                  }}
                />
                <Button
                  type="primary"
                  style={{ marginTop: "10px" }}
                  onClick={() => {}}
                >
                  Assign
                </Button>
              </Card>
            </Card>
          </Col>
          <Col span={16}>
            <Card>
              <Card title="Created Assignments">Ok</Card>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Asssignment;
