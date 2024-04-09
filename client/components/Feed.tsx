import React, { useState } from "react";
import "./Feed.css";
import { Skeleton } from "@mui/material";
import FeedDemo from "./FeedDemo";

const FeedComponent = (props) => {
    const {brand, feed_title, banner_image} = props;
    const [loading, setLoading] = useState(true);
    const [demoMode, setDemoMode] = useState(false);
    
    return (
        <>  
            {loading ? (
                <div className="feed-container">
                    <Skeleton variant="rectangular" width="100%" height="100%"/>
                </div>
            ) : null}
            <div className="feed-container" style={{display: `${loading ? "none" : "block"}`}}>
                <div className="feed-header">
                    <img className="brand-logo" src={`${brand.logo}`}/>
                    <span className="brand-name">{brand.name}</span>
                    <span className="feed-link"><a href="#">Join this brief</a></span>
                </div>
                <div className="feed-content">
                    <img 
                        className="banner-image" 
                        src={`${banner_image}`}
                        onLoad={() => setLoading(false)}
                        onClick={() => setDemoMode(true)}
                    />
                    <span className="feed-title">{feed_title}</span>
                </div>
            </div>
            
            {demoMode ? <FeedDemo {...props} close={() => setDemoMode(false)}/> : null}
        </>
    )
}

export default FeedComponent;