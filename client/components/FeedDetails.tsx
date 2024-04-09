import React from "react";
import "./FeedDetails.css";

const FeedDetail = ({brand, feed_title, starts_on, banner_text, ad_1_image, ad_2_image}) => {
    return (
        <div className="feedDetail-container">
            <div className="feedDetail">
                <div className="logo-header">
                    <img className="logo-avatar" src={`${brand.logo}`} />
                </div>
                <h2>{feed_title}</h2>
                <div>{starts_on}</div>
                <p>{banner_text}</p>
                <img src={`${ad_1_image}`}/>
                <img src={`${ad_2_image}`}/>
            </div>
        </div>
    )
}

export default FeedDetail;