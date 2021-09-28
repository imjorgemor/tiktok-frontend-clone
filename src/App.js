import React, { useState, useEffect } from 'react';
import Video from './components/Video/Video';
import db from "./firebase.js"
import { collection, getDocs } from 'firebase/firestore/lite';
import './App.css';



function App() {

    const [videos, setVideos] = useState([])

    const getVideos = async (db) =>  {
        const videosCol = collection(db, 'videos');
        const videoSnapshot = await getDocs(videosCol);
        const videoList = videoSnapshot.docs.map(doc => doc.data());
        console.log(videoList);
        setVideos(videoList);
    }

    useEffect(() => {
        getVideos(db);
    }, [])


    return (

        <div className="app">

            <div className="app-videos">

                {
                    videos.map(({ url, username, caption, hashtags, song, likes, comments, shares }) => (
                        <Video
                            url={url}

                            username={username}
                            caption={caption}
                            hashtags={hashtags}
                            song={song}

                            likes={likes}
                            comments={comments}
                            shares={shares}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default App;
