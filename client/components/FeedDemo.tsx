import React, { useState } from "react";
import { Button } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CloseIcon from '@mui/icons-material/Close';
import Media from "./Media";
import CommentList from "./CommentList";
import FeedDetail from "./FeedDetails";
import "./FeedDemo.css";

const FeedDemo = (props) => {
    const {brand, briefref, banner_image, close} = props;
    const [toggle, setToggle] = useState(true)

    return (
        <div className="feed-demo-container">
            <div className="left-panel">
                <div className="closer">
                    <Button variant="contained" onClick={ close }>
                        <CloseIcon />
                    </Button>
                </div> 
                {toggle ? <Media banner_image={banner_image}/> : <FeedDetail {...props}/>}
                <div className="control-group">
                    <Button variant="contained" disabled={toggle} onClick={ () => setToggle(true) } >
                        <ArrowUpwardIcon />
                    </Button>
                    <Button variant="contained" disabled={!toggle} onClick={ () => setToggle(false) }>
                        <ArrowDownwardIcon />
                    </Button>
                </div>
            </div>
            <div className="right-panel">
                <CommentList brand={brand} briefref={briefref}/>
            </div>
        </div>
    )
}

export default FeedDemo;