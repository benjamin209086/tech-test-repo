import React, { useState, useEffect, useRef } from "react";
import { Feed } from "../types/feed";
import FeedComponent from "./Feed";
import "./FeedList.css";

const FeedList = () => {
    const [page, setPage] = useState(1);
    const [feeds, setFeeds] = useState<Feed[]>([]);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
            if (scrollTop + clientHeight >= scrollHeight) {
                setPage(prev => ++prev)

            }
        };
        containerRef.current.addEventListener('scroll', handleScroll);

        return () => {
            containerRef.current.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const  fetchFeeds = async () => {
            const response = await fetch(`http://localhost:4000/feeds/${page}`);
            const fetchedFeeds: Feed[] = await response.json();
            
            if (page === 1) {
                setFeeds(fetchedFeeds);
            } else {
                setFeeds(prev => [...prev, ...fetchedFeeds]);
            }
        }
        fetchFeeds();
    }, [page])

    return(
        <div className="feedlist-container" ref={containerRef}>
            <div className="feedlist">
                {feeds.map((feed, index) => (
                    <FeedComponent key={index} {...feed}/>
                ))}
            </div>
        </div>
    )
}

export default FeedList;