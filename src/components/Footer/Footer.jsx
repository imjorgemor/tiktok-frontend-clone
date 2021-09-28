import React from 'react'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

import "./footer.css"

const Footer = ({ username, caption, song, hashtags }) => {
    return (

        <div className="tiktok-bottom">

            <div className="bottom-section">

                <div className="bottom-left">
                    <a href="#!">@{username}</a>
                    <p>{caption}
                        <a href="·!"> {hashtags}</a>
                    </p>

                    <div className="music-box">
                        <div className="music-icon">
                            <p><span>
                                <MusicNoteIcon
                                    fontSize="smaller"

                                /></span></p>
                        </div>
                        <div className="music-song">
                            <p>{song}</p>
                        </div>
                    </div>
                </div>

                <div className="bottom-album">
                    <img
                        className="footer-record"
                        src="https://static.thenounproject.com/png/934821-200.png"
                        alt=""
                    />
                </div>

            </div>
        </div>
    )
}

export default Footer
