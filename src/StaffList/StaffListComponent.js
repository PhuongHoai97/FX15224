import React, {Component} from "react";
import{Card, CardFooter,CardBody, CardTitle} from 'reactstrap';
import dateFormat from 'dateformat'; 

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

    renderStaff(staff){
        if(staff != null){
            return (
                <Card className="col-3">
                    <CardTitle>{staff.name}</CardTitle>
                    <CardBody>
                        <p>Ngày sinh: {dateFormat(staff.doB,"dd/mm/yyyy")}</p>
                        <p>Ngày vào công ty: {dateFormat(staff.startDate,"dd/mm/yyyy")}</p>
                        <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                        <p>Số ngày đã làm thêm: {staff.overTime}</p>
                    </CardBody>
                </Card>
            );
        } else {
            return ( <div></div>);
        }
    }

    render(){
        const ds = this.props.staffs.map((staff) =>{
            return (
            <div key={staff.id} className='col-xl-3 col-md-4 m-1'>
               <Card onClick={()=>this.onStaffSelected(staff)}>
                <CardBody>
                    {staff.name}
                </CardBody>
               </Card>
            </div>
            );
        });
        return(
            <div className ='container'>
                <div className ='row'>
                        {ds}
            <CardFooter className="m-1">Bấm vào tên nhân viên để xem thông tin</CardFooter>
                </div>
                <div className ='row'>
                    {this.renderStaff(this.state.selectedStaff)}
                </div>
            </div>

        );
    }
}


export default List;