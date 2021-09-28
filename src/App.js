import React, { useState, useEffect } from 'react';
import Video from './components/Video/Video';
import db from "./firebase.js"
import './App.css';

function App() {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        //
        db.collection('videos').onSnapshot( (snapshot) =>
            setVideos(snapshot.docs.map((doc) => doc.data()))
            )
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
