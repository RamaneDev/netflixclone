import React from "react";
import FontAwesome from "react-fontawesome";

const Stars = props => {
    const renderStars1 = () => {
        return props.fakeArray1.map((element, i) => {
            return (
                <FontAwesome
                key={i}
                className="stars"
                name="star"
                size="3x" />
            )
        })
    }

    const renderStars2 = () => {
        return props.fakeArray2.map((element, i) => {
            return (
                <FontAwesome
                key={i}
                className="stars"
                name="star-0"
                size="3x" />
            )
        })
    }

    return (
        <div className="stars">
            {renderStars1()}
            {renderStars2()}
        </div>
    )
}

export { Stars }