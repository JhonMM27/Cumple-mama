// Archivo principal: App.tsx

import { useState, useEffect } from "react"
import Header from "./components/Header"
import MessageModal from "./components/MessageModal"
import LetterModal from "./components/LetterModal"
import MusicButton from "./components/MusicButton"
import Fireworks from "./components/Fireworks"
import FloatingHearts from "./components/FloatingHear"
import MemoriesGallery from "./components/MemoriesGallery"
import MessagesWall from "./components/MessagesWall"
import SpecialLetter from "./components/SpecialLetter"
import SurpriseSection from "./components/SurpriseSection"
import Footer from "./components/Footer"
import { photos, messages } from "./data"

import "./App.css"

export default function App() {
  const [showMessageModal, setShowMessageModal] = useState<boolean>(false)
  const [currentPhoto, setCurrentPhoto] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [showFireworks, setShowFireworks] = useState<boolean>(false)
  const [showLetterModal, setShowLetterModal] = useState<boolean>(false)

  useEffect(() => {
    const photoTimer = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length)
    }, 4000)

    return () => clearInterval(photoTimer)
  }, [])

  const triggerFireworks = () => {
    setShowFireworks(true)
    setTimeout(() => setShowFireworks(false), 4000)
  }

  const shareMessage = () => {
    if (navigator.share) {
      navigator.share({
        title: "¡Feliz Cumpleaños, Mamá!",
        text: "Celebrando el cumpleaños de la mejor mamá del mundo",
        url: window.location.href,
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-rose-100 relative overflow-hidden">
      <MusicButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <FloatingHearts />
      {showFireworks && <Fireworks />}

      <Header setShowMessageModal={setShowMessageModal} />

      <MessageModal
        show={showMessageModal}
        setShow={setShowMessageModal}
      />

      <LetterModal
        show={showLetterModal}
        setShow={setShowLetterModal}
        triggerFireworks={triggerFireworks}
      />

      <main className="container mx-auto px-4 py-12 space-y-20">
        <MemoriesGallery
          photos={photos}
          currentPhoto={currentPhoto}
          setCurrentPhoto={setCurrentPhoto}
        />

        <MessagesWall messages={messages} />

        <SpecialLetter setShowLetterModal={setShowLetterModal} />

        <SurpriseSection
          triggerFireworks={triggerFireworks}
          shareMessage={shareMessage}
        />
      </main>

      <Footer />
    </div>
  )
}
