import React from 'react'
import ReactPlayer from 'react-player'
import '../css/VideoPlayer.css'

const VideoPlayer = (props) => {
    
    const handleEnded = () => {
        console.log('VIDEO ENDED !')
    }

    // const videoUrl ="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    // const imageSrc = "./images/Fast_large.jpg"
    return (
        <div className='videoPlayer'>
            <ReactPlayer
               url={props.videoUrl}
               controls={true}
               playing={false}
               width="100%"
               height="100%"
               style={{position: "absolute", top: "0", left: "0" }}
               light= {props.imageUrl}
               onEnded={handleEnded}
             />
        </div>
    )
}

export { VideoPlayer }