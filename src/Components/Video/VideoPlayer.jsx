import './VideoPlayer.css';
import umt  from '../../assets/UOT.mp4';
import { useRef } from 'react';

const VideoPlayer = ({videoplay,setVideoPlay}) => {

  const  player = useRef(null)

  const closePlayer = (e)=>{
    if (e.target === player.current){
      setVideoPlay(false);
    }

  }
  return (
    <div className={`videoplayer ${videoplay ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <video src={umt} type='video/mp4' autoPlay controls  muted></video>
      
    </div>
  )
}

export default VideoPlayer