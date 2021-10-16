import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    //const {service} =props
    const {id, name, price, description, img} = service
    return (
        <div className="service pb-3">
            <img style={{width:"95%",borderRadius:"20px"}} src={img} alt="" />
            <h2>{name}</h2>
            <h4>{price}</h4>
            <h5 className="p-5">{description}</h5>
            <Link to={`/booking/${id}`}>
            <button className="bt btn-warning">Book {name.toLowerCase()}</button>
            </Link>
            </div>
    );
};

export default Service;