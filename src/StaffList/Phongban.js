import React from "react";
import{Card, CardFooter,CardBody, CardTitle, CardImg, CardImgOverlay, CardHeader} from 'reactstrap';


function Phongban (props){
    const PB = props.departments.map((department)=>{
        return(
            <div key={department.id} className="col-xl-4 col-md-5 col-12 mt-5 mb-5">
                <Card>
                    <CardHeader className="cardheader">{department.name}</CardHeader>
                    <CardBody>Số lượng nhân viên: {department.numberOfStaff}</CardBody>
                </Card>
            </div>

        );
    })
    return(
    <div className="container hight">
        <div className="row">
            {PB}
        </div>
    </div>
    );
}

export default Phongban;