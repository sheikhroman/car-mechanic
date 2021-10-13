import React from 'react';
import './Service.css'
const Service = ({service}) => {
    //const {service} =props
    const {name, price, description, img} =service
    return (
        <div className="service">
            <img style={{width:"95%",borderRadius:"20px"}} src={img} alt="" />
            <h2>{name}</h2>
            <h4>{price}</h4>
            <h5 className="p-5">{description}</h5>
        </div>
    );
};

export default Service;