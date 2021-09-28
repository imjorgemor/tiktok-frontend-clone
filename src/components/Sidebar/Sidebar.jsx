import React, {useState} from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import SmsRoundedIcon from '@mui/icons-material/SmsRounded';
import ScreenShareRoundedIcon from '@mui/icons-material/ScreenShareRounded';


import "./sidebar.css"
import { pink } from '@mui/material/colors';

const Sidebar = ({likes, comments, shares}) => {

    //like button
    const [liked, setLiked] = useState(false);



    return (
        <div classsName="sidebar">

            <div className="sidebar-section like">
                {
                    liked ? (
                    <FavoriteIcon
                        onClick={(e) => setLiked(false)}
                        fontSize="large"
                        sx={{ color: pink[400] }}

                    />):(
                    <FavoriteIcon
                        fontSize="large"
                        onClick={(e) => setLiked(true)}
                        />
                )}
                <p>{liked ? likes +1 : likes}</p>
            </div>

            <div className="sidebar-section comment">
                <SmsRoundedIcon
                    fontSize="large"
                />
                <p>{comments}</p>
            </div>

            <div className="sidebar-section share">
                <ScreenShareRoundedIcon
                    fontSize="large"
                />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default Sidebar
