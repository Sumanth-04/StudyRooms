import React,{Component} from 'react';
import {Card,Button } from 'antd';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username : this.props.username,
        userMail : props.userMail,
        isTeacher : props.isTeacher,  
        fullname :props.fullname
    };
  }
  componentDidMount(){
    console.log("Profile page props are "+this.props)
  }
  render() {
      const {username,fullname, userMail} = this.state;
    return (
      <div>
        <div  style={{marginLeft:'40%',paddingTop:'50px'}} >
          <Button type='secondary' style={{'margin':'15px'}}
            onClick={()=>{this.props.history.push('/dashboard');}}> Back</Button>
          <Card style={{margin:'50px'}} title="User Profile" extra={<a href="#">Edit</a>} style={{ width: 300 }}>
            <h3>UserName is {username} </h3>
            <h3>You Mail ID is  {userMail}</h3>
            <h3>Fullname is {fullname} </h3>
            <h3>Change Password</h3>

          </Card>
        </div>
      </div>
    );
  }
}

export default Profile;
