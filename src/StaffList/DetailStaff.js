import React from "react";
import dateFormat from 'dateformat'; 
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

function RenderStaff({staff}){
    return (
        <div className="container row">
            <div className="col-xl-3 col-md-4 col-12 mt-1 mb-5">
                <img width="100%" src = {staff.image}></img>
            </div>
            <div className="col-xl-9 col-md-8 col-12 mt-1 mb-5">
                <h3>{staff.name}</h3>
                <p>Ngày sinh: {dateFormat(staff.doB,"dd/mm/yyyy")}</p>
                <p>Ngày vào công ty: {dateFormat(staff.startDate,"dd/mm/yyyy")}</p>
                <p>Phòng ban: {staff.department.name}</p>
                <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
                <p>Số ngày đã làm thêm: {staff.overTime}</p>
            </div>
        </div>
    );
}

function DetailStaff(props){
    if(props.staff != null){
        return(
            <div>
                <Breadcrumb className="m-4">
                <BreadcrumbItem><Link to='/List'>Nhân viên</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                </Breadcrumb>
                <RenderStaff staff={props.staff}/>
            </div>
        );
    }
    else {
        return(
            <div></div>
        );
    }
}

export default DetailStaff;