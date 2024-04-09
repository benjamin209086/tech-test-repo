import React from "react";
import "./Media.css";

const Media = ({banner_image}) => {
    return (
        <div className="media">
            <img className="media-banner-image" src={`${banner_image}`}/>
        </div>
    )
}

export default Media;