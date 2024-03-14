import React from 'react'
import MyCV from "../files/ayda-sholani-cv.pdf";
import DownloadCVIcon from '../icons/DownloadCvIcon'

export default function DownloadCv() {
  return (
      <a 
        href={MyCV} 
        download="Ayda Sholani - CV.pdf"
      >
        <DownloadCVIcon />
      </a>
  )
}
