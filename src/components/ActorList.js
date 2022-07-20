import React from "react";

const ActorList = (props) => {

    const renderActor = () => {

    }
    return (
        <div className="actorList">
           <h3 className="actorList--title">ACTEURS</h3>
           <div className="actorList--grid">{renderActor()}</div>
        </div>
    )
}

export { ActorList }