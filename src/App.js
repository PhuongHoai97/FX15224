import logo from './logo.svg';
import { Route,Routes, useParams} from 'react-router-dom';
import List from './StaffList/StaffListComponent';
import Header from './StaffList/HeaderComponent';
import Footer from './StaffList/FooterComponent';
import { DEPARTMENTS, STAFFS } from './shared/staffs';
import { Component } from 'react';
import './App.css';
import Phongban from './StaffList/Phongban';
import BangLuong from './StaffList/BangLuong';
import DetailStaff from './StaffList/DetailStaff';

class App extends Component {
  constructor(props){
    super(props)
    this.state={staffs : STAFFS,
    departments :DEPARTMENTS};
  }
  render(){
    
    const Homepage = () => {
      return(
        <List staffs = {this.state.staffs}/>
      );
    }
    const StaffWithID = () => {
      const params = useParams();
      return(
        <DetailStaff staff={this.state.staffs.filter((staff) => staff.id === parseInt(params.staffID,10))[0]}/>

      );
    }
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/List' element={<List staffs = {this.state.staffs}/>}/>
        <Route exact path ='/List/:staffID' element={<StaffWithID/>}/>
        <Route path='/PB' element={<Phongban departments = {this.state.departments}/>}/>
        <Route path='/BL' element={<BangLuong staffs = {this.state.staffs}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}
}

export default App;
