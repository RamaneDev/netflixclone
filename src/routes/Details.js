import React, {Component} from "react";
import { act } from "react-dom/test-utils";
import { ActorList, HeaderDetails, Spinner } from "../components";

const actors = [
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
]

class Details extends Component {
    render() {
        return (
            <div className="app">
                {this.props.loading?
                (
                    <Spinner />
                ): (
                    <>
                    <HeaderDetails 
                      mTitle={"Batman"}
                      mDesc={"voici la description du film batman"}
                      imgSrc={'./images/Fast_large.jpg'}
                      runtime={'2h30'}
                      revenue={'$11548'}
                      status={'Released'}
                      vote={''}
                    />
                    
                    <ActorList actors={actors} />
                    </>
                )}
            </div>
        )
    }
}

export { Details }