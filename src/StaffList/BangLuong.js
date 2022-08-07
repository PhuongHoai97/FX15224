import React from "react";
import{Card, CardFooter,CardBody, CardTitle, CardImg, CardImgOverlay, CardHeader} from 'reactstrap';


function BangLuong (props){
    const BL = props.staffs.map((staff)=>{
        var a = (parseFloat(staff.salaryScale) * 3000000 + parseFloat(staff.salaryScale) * 200000).toFixed(0);
        return(
            <div key={staff.id} className="col-xl-4 col-md-5 col-12 mt-2 mb-2">
                <Card>
                    <CardHeader className="cardheader">{staff.name}</CardHeader>
                    <CardBody>
                        <p>Mã nhân viên: {staff.id}</p>
                        <p>Hệ số lương: {staff.salaryScale}</p>
                        <p>Số ngày làm thêm: {staff.overTime}</p>
                    </CardBody>
                    <CardFooter>Lương: {a}</CardFooter>
                </Card>
            </div>

        );
    })
    return(
    <div className="container">
        <div className="row">
            {BL}
        </div>
    </div>
    );
}

export default BangLuong;