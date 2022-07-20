import React from "react";

const ActorList = (props) => {

    const renderActor = () => {
         return props.actors.map((actor, i) => {
             const imgSrc = './images/Fast_small.jpg';
             return (
                 <Actor
                    key={i}
                    imgSrc={imgSrc}
                    name={actor.name}
                 />
             )
         })
    }
    return (
        <div className="actorList">
           <h3 className="actorList--title">ACTEURS</h3>
           <div className="actorList--grid">{renderActor()}</div>
        </div>
    )
}

export { ActorList }