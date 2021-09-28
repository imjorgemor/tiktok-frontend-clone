import React, { useRef, useState } from 'react'
import Footer from '../Footer/Footer';
import OpenTiktok from '../OpenTiktok/OpenTiktok';
import Sidebar from '../Sidebar/Sidebar';
import "./video.css"


const Video = ({url, username, caption, hashtags, song, likes, comments, shares}) => {

    const [playing, setPlaying] = useState(false);

    const videoRef = useRef(null);

    const onVideoTap = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };


    return (
        <div className="video">
            <video
                className="video-player"
                loop
                ref={videoRef}
                onClick={onVideoTap}
                src={url}
                >
            </video>

            {/* video footer */}
            <div className="footer">
                <Footer
                    username={username}
                    caption={caption}
                    hashtags={hashtags}
                    song={song}
                />
            </div>

            {/* video sidebar */}
            <div className="sidebar">
                <Sidebar
                    likes={likes}
                    comments={comments}
                    shares={shares}
                />
            </div>

            <div className="navbar">

                <OpenTiktok />

                <div className="menu">
                    <p>menu</p>
                </div>
            </div>
        </div>
    )
}

export default Video
