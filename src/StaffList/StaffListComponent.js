import React, {Component} from "react";
import {Link, Route} from 'react-router-dom'
import{Card, CardFooter,CardBody, CardTitle, CardImg, CardImgOverlay, CardHeader} from 'reactstrap';
import DetailStaff from "./DetailStaff";


class List extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedStaff: null
        }

    }

    onStaffSelected(staff){
        this.setState({selectedStaff:staff});
    }

    

    render(){
        const ds = this.props.staffs.map((staff) =>{
            return (
            <div key={staff.id} className='col-xl-2 col-md-4 col-6 mt-4 text-center'>
            
               <Card>
                <Link to={`/List/${staff.id}`}>
                <CardImg src={staff.image}/>
                <CardTitle>
                    {staff.name}
                </CardTitle>
                </Link>
               </Card>
           
            </div>
            );
        });
        return(
            <div className ='container'>
                <div className ='row'>
                    <CardHeader className="cardheader">Nhân viên</CardHeader>
                        {ds}
                    <CardFooter className="m-4">Bấm vào tên nhân viên để xem thông tin</CardFooter>
                </div>
                
            </div>

        );
    }
}


export default List;