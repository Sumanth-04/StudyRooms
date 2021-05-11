import React,{Component} from 'react';
import { Button, Card,Input  } from 'antd';
import {createRoomApi} from '../../src/api/LoginApi'

class CreateRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name : '',
        userMail:props.userMail,
    };
  }
  handleChangeName = async (event) => {
    const name = event.target.value;
    this.setState({ name });
  };

  handleSubmit = async () => {
    const { name, userMail } = this.state;
    const payload = {name, userMail };

    await createRoomApi.createRoom(payload)
      .then((res) => {
        window.alert(`Class created successfully`);
        this.setState({
          name:'',
          },()=>{console.log("Hurray!")});
      })
      .catch((error) => {
        window.alert(`Please Enter Valid Data`);
      });
      await createRoomApi.createBRooms(payload)
      .then((res ) => {
        
      }).catch((error)=>{
        window.alert('server error')
      });
  };
  render() {
    const {name, teacherName, description} = this.state;
    return (
      <div style={{textAlign:"center"}}>
          {//<h1>Create a Room Here </h1>
          }
          
          <Button type='secondary' style={{'margin':'15px'}}
            onClick={()=>{this.props.history.push('/dashboard');}}> Back</Button>
          <Card title="Create a Room"  style={{ left:'40%',textAlign:'center' ,width: 300 }}>
            <Input placeholder="Name of the room" value={name} onChange={(e)=>{this.handleChangeName(e)}} style={{marginTop:'10px'}} />
            
            <Button type='primary' onClick={()=>{console.log("Clicked Create");this.handleSubmit()}} style={{marginTop:'10px'}}> Create </Button>
          </Card>
       </div>
    );
  }
}

export default CreateRoom;
