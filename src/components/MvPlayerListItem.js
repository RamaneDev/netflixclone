import React from "react";
import '../css/MvPlayerListItem.css'

const MvPlayerListItem = (props) => {
const activeClass = props.active ? 'mvPlayerListItem active' : 'mvPlayerListItem'
  return (
      <>
        <div className={activeClass}>
            <div className="mvPlayerListItem--number">{props.number}</div>
            <div className="mvPlayerListItem--title">{props.title}</div>
            <div className="mvPlayerListItem--time">{props.duration}</div>
        </div>
        <div className="mvPlayerListItem--divider"></div>
      </>
  )

}

export { MvPlayerListItem }