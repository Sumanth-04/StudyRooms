import React from 'react';
import { withRouter } from "react-router";
import { Link,  } from 'react-router-dom';
import { Button } from "antd";
import { Tabs, Radio,Card } from 'antd';


import Test from './Test';
import Mates from './Mates';
import Notes from './Notes';
import Assignment from './Assignment';

const { TabPane } = Tabs;

class OpenedRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount(){

    }
    render() { 
        const {id,desc} = this.props.match.params;
        console.log(this.props.match)
        return ( 
            <div>
                <div style={{margin:'2%'}}>
                    <Link to='/dashboard'><Button type='primary'> Back To Home</Button></Link>
                </div>
                <Card title={<div><div><h1 style={{ textAlign:'center' }}>{/*`Welcome to : ${id} room `*/id}</h1></div><div style={{ textAlign: 'center' }}>Ok</div></div>} style={{margin:'2%'}}>
                <Tabs defaultActiveKey="1" type="card" centered={true} size={'large'}>
                    <TabPane tab="Work" key="0">
                        Content of card tab 1
                    </TabPane>
                    <TabPane tab="Assignment" key="1">
                        <Assignment />
                    </TabPane>
                    <TabPane tab="Notes" key="2">
                        <Notes />
                    </TabPane>
                    <TabPane tab="Chat" key="3">
                        Content of card tab 2
                    </TabPane>
                    <TabPane tab="Mates" key="4">
                        <Mates />
                    </TabPane>
                    <TabPane tab="Tests" key="5">
                        <Card hoverable>
                            Tests for {id}
                        </Card>
                        <Card>
                            <Test />
                        </Card>
                    </TabPane>
                </Tabs>
                </Card>
            </div> 
        );
    }
}
 
export default withRouter(OpenedRoom) ;