import { Card, Radio } from "antd";
import React, { Component } from "react";
import { Collapse } from "antd";


import { Form, Input, Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      isTeacher: true,
      form:undefined,
      requiredMark:undefined,
      
      testname:'',
      numberOfQuestions:0,
      q:'',a:'',b:'',c:'',d:'',ans:'',
      
    questions:[],

      test :{
         
    }
};
/*
 name:'',
          nq:0,
          qs : []
        
{
    question:'',
    optionsname:{
        a:'',
        b:'',
        c:'',
        d:'',
    },
    answer:'a'
},
{
    questionname:'',
    options:{
        a:'',
        b:'',
        c:'',
        d:'',
    },
    answer:'a'
}*/
    this.onCollapseChange = this.onCollapseChange.bind(this);
  }
   onRequiredTypeChange = ({ requiredMarkValue }) => {
    this.setState({requiredMark:requiredMarkValue});
  };
  onCollapseChange(e) {
    console.log(e);
  }
  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  render() {
      const radioStyle = {
          display: "block",
          height: "30px",
          lineHeight: "30px",
        };
    let { value, isTeacher, form, requiredMark,q,a,b,c,d,ans,questions,numberOfQuestions,testname,test } = this.state;
    //console.log(test)
    
    const text = "heiaio";
    if (isTeacher) {
      return (
        <div>
          <Collapse
            defaultActiveKey={["1"]} /*onChange={()=>{onCollapseChange()}}*/
          >
            <Panel header="Create a New Test" key="1">
              <p>
                
              <Form
      /*form={form}*/
      layout="vertical"
      initialValues={{ requiredMarkValue: requiredMark }}
      /*onValuesChange={onRequiredTypeChange}*/
      requiredMark={requiredMark}
    >{/*
      <Form.Item label="Required Mark" name="requiredMarkValue">
        <Radio.Group>
          <Radio.Button value="optional">Optional</Radio.Button>
          <Radio.Button value>Required</Radio.Button>
          <Radio.Button value={false}>Hidden</Radio.Button>
        </Radio.Group>
      </Form.Item>*/}
      <Form.Item label="Name Of The Test" required tooltip="This is a required field">
        <Input placeholder="Name Of The Test" value={testname} onChange={(e)=>{this.setState({testname:e.target.value})}}/>

      </Form.Item>
        <Card style={{width:"50%"}}>
            <Form.Item label="Question" required tooltip="This is a required field">
                <Input placeholder="Enter the question" value={q} onChange={(e)=>{this.setState({q:e.target.value})}} />
            </Form.Item>
            <Form.Item label="Option A" required tooltip="This is a required field">
                <Input placeholder="Enter Option A" value={a} onChange={(e)=>{this.setState({a:e.target.value})}} />
            </Form.Item>
            <Form.Item label="Option B" required tooltip="This is a required field">
                <Input placeholder="Enter Option B" value={b} onChange={(e)=>{this.setState({b:e.target.value})}} />
            </Form.Item>
            <Form.Item label="Option C" required tooltip="This is a required field">
                <Input placeholder="Enter Option C" value={c} onChange={(e)=>{this.setState({c:e.target.value})}} />
            </Form.Item>
            <Form.Item label="Option D" required tooltip="This is a required field">
                <Input placeholder="Enter Option D" value={d} onChange={(e)=>{this.setState({d:e.target.value})}} />
            </Form.Item>
            <Form.Item
                label="Answer for the Question"
                required
                tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                >
                <Input placeholder="Enter A or B or C or D" value={ans} onChange={(e)=>{this.setState({ans:e.target.value})}} />
            </Form.Item>
            <Form.Item>
                <Button type="secondary" onClick={()=>{
                    const obj = {
                        questionname:q,
                        options:{
                            a:a,
                            b:b,
                            c:c,
                            d:d,
                        },
                        answer:ans

                    }
                    questions.push(obj)
                    numberOfQuestions+=1
                    this.setState({questions:questions,numberOfQuestions},()=>{console.log(questions)});
                }}>Next Question</Button>
            </Form.Item>
          </Card>
      <Form.Item style={{paddingTop:"10px"}}>
        <Button 
            type="primary"
            onClick={()=>{
                const testobj = {
                    name:testname,
                    nq:numberOfQuestions,
                    qs:questions
                };
                this.setState({test:testobj},()=>{});
            }}
        >Create Test</Button>
      </Form.Item>
    </Form>


              </p>
            </Panel>
            <Panel header="Show Existng Tests" key="2">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>
      );
    } else {
      return (
        <div>
          <Collapse
            defaultActiveKey={["1"]} /*onChange={()=>{onCollapseChange()}}*/
          >
            <Panel header="Show New Unattended Tests" key="1">
              <p>{text}</p>
            </Panel>
            <Panel header="Show Results of Attended Tests" key="2">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>
      );
    }
    return (
      <div>
        <Card title={"What is this?"}>
          <Radio.Group name="radiogroup" onChange={this.onChange}>
            <Radio value={1} style={radioStyle}>
              A
            </Radio>
            <Radio value={2} style={radioStyle}>
              B
            </Radio>
            <Radio value={3} style={radioStyle}>
              C
            </Radio>
            <Radio value={4} style={radioStyle}>
              D
            </Radio>
          </Radio.Group>
        </Card>
      </div>
    );
  }
}

export default Test;
