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
    <section className="reactGalleryContainer">
      <h1 className="reactGalleryTitle">Galería de fotos</h1>
      <div className="reactGalleryImages">
        { !isFullscreen &&
          imagesArray.map((image, index) => (
            <img key={index} onClick={() => showFullscreen(image)} className="reactGalleryGallery" src={`${image}.avif`}/>
          ))
        }
        { 
          isFullscreen &&
          <div className="reactGalleryFullScreen">
            <img
              className="reactGalleryFullImage" 
              src={currentImage}/>
              <button
                className="reactGalleryCloseButton" 
                onClick={() => onClose()}
              ><img src="close.svg"/></button>
          </div>
          }
      </div>
    </section>
  )
}