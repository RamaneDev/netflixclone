import React, {Component} from "react";
import { act } from "react-dom/test-utils";
import { ActorList, HeaderDetails, Spinner } from "../components";


class Details extends Component {
    state = {
        loading:true,
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
    }
    render() {
        const {loading, mTitle, mDesc, actors, imgSrc, revenue, runtime, status, vote } = this.state;
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
}

export { Details }