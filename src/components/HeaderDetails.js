import React, { Component } from "react";
import { Container } from "./Container";
import { Stars } from "./Stars";
import '../css/HeaderDetails.css';
import {IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { calcTime, calcVote, convertMoney } from "../utils/helpers";

class HeaderDetails extends Component {
    render() {
        const imgSrc = `${IMAGE_BASE_URL}/${POSTER_SIZE}${this.props.imgSrc}`;
        return (
             <div className="headerDetails">
                 <div className="badge-decoration">{this.props.status}</div>
                 <div className="headerDetails--poster">
                     <img className="headerDetails--poster__img" src={imgSrc} alt="poster"/>
                 </div>
                 <div className="headerDetails--container">
                     <h3 className="headerDetails--container__title">{this.props.mTitle}</h3>
                     <p className="headerDetails--container__desc">{this.props.mDesc}</p>
                     <div className="headerDetails--info">
                         <Container iconName="clock" content={calcTime(this.props.runtime)} />
                         <Stars fakeArray1={calcVote(this.props.vote)[0]} fakeArray2={calcVote(this.props.vote)[1]} />
                         <Container iconName="money" content={convertMoney(this.props.revenue)} />
                    </div> 

                 </div>

             </div>
        )
    }
}

export { HeaderDetails }