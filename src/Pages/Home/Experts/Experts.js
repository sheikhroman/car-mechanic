import React from 'react';
import Expert from '../Expert/Expert';

const experts = [
    {
        img: 'https://i.ibb.co/GdjhkQ6/mechanic-3.jpg',
        name: 'Tom Cruse',
        expertize: '-Engine Expert-'
    },
    {
        img: 'https://i.ibb.co/wYvZtNW/mechanic-2.jpg',
        name: 'John Anderson',
        expertize: '-Polish Expert-'
    },
    {
        img: 'https://i.ibb.co/6HZpygk/mechanic-1.jpg',
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert-'
    },
    {
        img: 'https://i.ibb.co/QJrZdVR/mechanic-4.jpg',
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expert-'
    },
]

const Experts = () => {
    return (
        <div className="container mt-5 " id="experts">
            <h2 className="text-primary">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;