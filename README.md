# TIKTOK CLONE

Front-end application clone of the TikTok social media for educational purposes developed with React js. Probably the most accurate tiktok clone on all Github.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [React components](#React-components)
* [App preview](#app-preview)
* [Future developments](#future-developments)

## General info
This project is simple tiktok clone. Swipe up/ down to play live streamed videos.
	
## Technologies
Project is created with:
* React js
* Material UI for icons
* Firebase as an API storage server
	
## Setup
To run this project, install it locally using npm:

```
$ npm install
$ npm start
```

## Features
### Scroll and Snap CSS
To imitate the social media trend on scrolling through different posts I used the scroll-snap-type css feature to scroll and snap the scrolling into the following post.

### useRef react hook
When tapping in each video to play and pause useRef links the video shown in screen with the video functions and post features as giving a like to the video.

### css responsive design good practices
Using relative withs and max-widths css properties together with FLEXBOX allowed this project to be responsive from mobile to tablet (max-width: 768px) without using media queries.

### Performance practices
The fonts have been also uploaded to the project (instead of using a CDN link) to improve performance of the project.

## React components
```
Video
Sidebar
Footer
OpenTiktok links
```

## App preview
### Responsive design
![Responsive](https://github.com/IMGEORGEMOR/tiktok-frontend-clone/blob/main/src/assets/responsive.gif)

### Scroll'n snapping
![Scrollnsnap](https://github.com/IMGEORGEMOR/tiktok-frontend-clone/blob/main/src/assets/scrollandsnap.gif)

## Future developments
* Add welcome page
* Add tiktok loading
* Add navbar with home and personal profile.
* Change videos for personal content about app development ;)

