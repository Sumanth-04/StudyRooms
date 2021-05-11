import React from "react";
import { Card,Button  } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { withRouter } from "react-router";


import OpenedRoom from "./OpenedRoom";

import { getRoomApi } from "../../api/LoginApi";

class RoomContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomObjects : [],
      show : false,
    };
    this.getData = this.getData.bind(this);
  }
  getEm =  () => {
    /*await getRoomApi.getRooms()
    .then((res)=>{
      console.log(res);
      const temp = res.data;
      console.log(temp);
      //return temp;
      this.setState({roomObjects : temp},()=>{console.log(" Boomer "+this.state.roomObjects[0].name)});
    });*/
    
  }
  getData = async () => {
    const res = await getRoomApi.getRooms({userMail:this.props.userMail})
    .then((resp)=>{
        console.log("resp")
        console.log(resp.data.results)
        this.setState({roomObjects:resp.data.results})
      }
    );
  }
  render() {
    const prevurl = this.props.match.url;
    //const prevurl = "http://localhost:3000/dashboard";
    
   const data = this.state.roomObjects;
   console.log("lasad")
   console.log(this.props)
    return (
      <div>
        <Button onClick={()=>{this.setState({show:!this.state.show});this.getData();}}>{this.state.show?"Hide":"Show"}</Button>
        {
        this.state.show ? 
        data?
        data.map((currentValue,index) => { 
          return( 
          <div>
            <Link to={`${prevurl}/${currentValue.name}`} /*desc={val.description} tchr={val.teacherName}*/ >

                <Card title={`${currentValue.name}`} style={{ width: 300 , margin:'10px' }} key={index} >
                                    <p><i>{currentValue.name}</i></p>
                                    <p>{currentValue.name}</p>
                                    <p>Card content</p>
              </Card>
            </Link>
          </div>)
        } ) :"null" : null
        }
          {/*
          {data.map((val,index)=>{
            //console.log(val.name)
             let tempName=val.name;
            return (
              <Card title={`${tempName}`} style={{ width: 300 , margin:'10px' }} key={index} >
                                    <p><i>{val.teacherName}</i></p>
                                    <p>{val.description}</p>
                                    <p>Card content</p>
              </Card>
            )
          })
        }
        
        */}

      </div>
    );
  }
}

export default  withRouter(RoomContent);
