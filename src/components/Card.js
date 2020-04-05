import React from 'react';

const Card = ({ name, email, id}) => {
  

    return (
        <div className="tc bg-white dib br3 pa3 ma3 grow bw2 shadow-5">
            <img alt ='robots' src = {`https://robohash.org/${id}${name}ildar?200x200`}></img> 
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;