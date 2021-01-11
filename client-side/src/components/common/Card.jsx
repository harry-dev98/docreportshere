import React from 'react';
import './Card.css';

const Card = ({item})=>(
    <div className="card">
        <button 
            className="cardBtn" 
            title={item.title}
            aria-label={item.title}
            aria-haspopup={item.haspopup||false}
            onClick={item.onclick}
        >{item.label}</button>
    </div>
);

export default ({list})=>(
    <div className="container">
        {list.map((item, index)=>(
            <Card key={index} item={item} />
        ))}

    </div>
);