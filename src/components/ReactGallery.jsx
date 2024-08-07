import { useEffect, useState } from "react"
import './ReactGallery.css';

const imagesArray = [
  'gallery1',
  'gallery2',
  'gallery3',
  'gallery4',
  'gallery5',
  'gallery6',
  'gallery7',
  'gallery8',
]

export default function ReactGallery() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [currentImage, setCurrentImage] = useState('')

  const showFullscreen = (src) => {
    setIsFullscreen(true)
    setCurrentImage(`${src}.avif`)
    console.log('source: ', src)
  }

  const onClose = () => {
    setIsFullscreen(false)
    setCurrentImage('')
  }

  return (
    <section className="container">
      { !isFullscreen &&
        imagesArray.map((image, index) => (
          <img key={index} onClick={() => showFullscreen(image)} className={`gallery`} src={`${image}.avif`}/>
        ))
      }
      { 
        isFullscreen &&
        <div className="fullScreen">
          <img
            className="fullImage" 
            src={currentImage}/>
            <button
              className="closeButton" 
              onClick={() => onClose()}
            ><img src="close.svg"/></button>
        </div>
        }
    </section>
  )
}