import React, { Component } from "react";
import PropTypes from "prop-types";

import { Row, Col, Card, Button } from "antd";


import { Input } from 'antd';

const { TextArea } = Input;

class Notes extends Component {
  constructor() {
    super();
    this.state = {
        note:''
    };
  }
  static propTypes = {};

  render() {
    const { note,} = this.state;

    return (
      <div>
        <Row>
          <Col span={8}>
            <Card>
              <Card title="Create New Notes">
                <TextArea
                  rows={6}
                  value={note}
                  onChange={(e) => {
                    this.setState({ note: e.target.value });
                  }}
                />
                <Button
                  type="primary"
                  style={{ marginTop: "10px" }}
                  onClick={() => {}}
                >
                  Share Notes
                </Button>
              </Card>
            </Card>
          </Col>
          <Col span={16}>
            <Card>
              <Card title="Already Shared Notes">Ok</Card>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Notes;
