// components/MusicButton.tsx
import { useRef, useEffect } from "react"
import { Button } from "./ui/button"
import { Volume2, VolumeX } from "lucide-react"

interface MusicButtonProps {
  isPlaying: boolean
  setIsPlaying: (playing: boolean) => void
}

export default function MusicButton({ isPlaying, setIsPlaying }: MusicButtonProps) {
  const audioRef = useRef<HTMLAudioElement>(null)

  // Al cargar la página, la música empieza automáticamente y se repite infinitamente
  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.loop = true // Asegura que la música sea cíclica
      // Intentar reproducir automáticamente al cargar
      audio.volume = 1
      audio.play().then(() => {
        setIsPlaying(true)
      }).catch(() => {
        // Algunos navegadores requieren interacción del usuario para reproducir audio
        setIsPlaying(false)
      })
    }
    // No hay cleanup necesario porque el audio es global y cíclico
    // eslint-disable-next-line
  }, [])

  // Cuando el usuario silencia o activa el sonido
  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      if (isPlaying) {
        audio.muted = false
        audio.play().catch(() => {})
      } else {
        audio.muted = true
      }
    }
  }, [isPlaying])

  // El botón solo silencia o activa el sonido, no pausa ni reinicia la música
  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/img/audio/Cancion.mp3"
        loop
        autoPlay
        style={{ display: "none" }}
      />
      <Button
        onClick={handleClick}
        className={`fixed top-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 ${
          isPlaying
            ? "bg-gradient-to-r from-rose-400 to-rose-500 animate-pulse"
            : "bg-gradient-to-r from-rose-300 to-rose-400"
        }`}
        aria-label={isPlaying ? "Silenciar música" : "Activar música"}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </Button>
    </>
  )
}
