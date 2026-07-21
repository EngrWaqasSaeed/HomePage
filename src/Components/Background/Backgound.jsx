import './Background.css'
import video1 from '../../Assets/video1.mp4'
import image1 from '../../Assets/image1.png'
import image2 from '../../Assets/image2.png'
import image3 from '../../Assets/image3.png'
import pause from '../../Assets/pause_icon.png'
import play from '../../Assets/play_icon.png'
const Backgound = ({ heroCount, playStatus }) => {
  console.log(heroCount)
  if (playStatus) {
    return (
      <video
        src={video1}
        type='video/mp4'
        className='background fade-in'
        autoPlay
        loop
        muted
      ></video>
    )
  } else if (heroCount === 0) {
    return <img src={image1} className='background' alt='Image Not Found' />
  } else if (heroCount === 1) {
    return <img src={image2} className='background' alt='Image Not Found' />
  } else if (heroCount === 2) {
    return <img src={image3} className='background' alt='Image Not Found' />
  }
}

export default Backgound
