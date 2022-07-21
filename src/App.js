import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import List from './StaffList/StaffListComponent';

import { STAFFS } from './shared/staffs';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state={staffs : STAFFS};
  }
  render(){
  return (
    <div className="App">
      <Navbar dark color='primary'>
      <div>
        <NavbarBrand>Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
      </div>
      </Navbar>
      <List staffs = {this.state.staffs}/>
    </div>
  );
}
}

export default App;
