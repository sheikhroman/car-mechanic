import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h2>Booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;