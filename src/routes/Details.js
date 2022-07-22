import React, { useState } from "react";
import { ActorList, HeaderDetails, Spinner } from "../components";



function Details() {
    const[state, setState] = useState({
        loading:false,
        actors:[
            {
                name:"mesri batman"
            },
            {
                name:"omar khatab "
            },
            {
                name:"bruce lai"
            },
            {
                name:"kody cactus"
            }
        ],
        mTitle: 'Batman',
        mDesc:'Voici la description du film batman',
        imgSrc:'./images/Fast_large.jpg',
        revenue:'$12545',
        runtime:'2h30',
        status:'Released',
        vote:''
    });
    
    const {loading, mTitle, mDesc, actors, imgSrc, revenue, runtime, status, vote } = state;

    return (
        <div className="app">
                {loading?
                (
                    <Spinner />
                ): (
                    <>
                    <HeaderDetails 
                      mTitle={mTitle}
                      mDesc={mDesc}
                      imgSrc={imgSrc}
                      runtime={runtime}
                      revenue={revenue}
                      status={status}
                      vote={vote}
                    />
                    
                    <ActorList actors={actors} />
                    </>
                )}
            </div>
    )
}

export { Details }