import React from 'react';

const Expert = ({ expert }) => {
    const {name, img, expertize} = expert
    return (
        <div className="col-lg-4 col-md-6 col-12">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4 className="text-danger">{expertize}</h4>
        </div>
    );
};

export default Expert;