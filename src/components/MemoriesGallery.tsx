// components/MemoriesGallery.tsx

import { ChevronLeft, ChevronRight } from "lucide-react"

interface Props {
  photos: string[]
  currentPhoto: number
  setCurrentPhoto: (index: number) => void
}

export default function MemoriesGallery({ photos, currentPhoto, setCurrentPhoto }: Props) {
  // Funciones para navegar entre las fotos
  const prevPhoto = () => {
    setCurrentPhoto((currentPhoto - 1 + photos.length) % photos.length)
  }

  const nextPhoto = () => {
    setCurrentPhoto((currentPhoto + 1) % photos.length)
  }

  return (
    <section className="animate-fade-in-up min-h-[60vh] flex flex-col justify-center items-center px-2 py-8 sm:py-12">
      <h3 className="text-3xl sm:text-5xl font-bold text-center text-rose-500 mb-6 sm:mb-12 font-serif animate-slide-in">
        ✨ Momentos Especiales ✨
      </h3>
      <div className="relative w-full max-w-[98vw] sm:max-w-4xl md:max-w-5xl mx-auto flex flex-col items-center">
        <div
          className="rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 animate-photo-appear flex items-center justify-center bg-white relative"
          style={{
            width: "100%",
            maxWidth: "900px",
            height: "70vw",
            maxHeight: "600px",
            minHeight: "260px",
            margin: "0 auto",
            padding: "0 0 2rem 0"
          }}
        >
          {/* Flecha Izquierda */}
          <button
            onClick={prevPhoto}
            aria-label="Foto anterior"
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-rose-100 rounded-full p-1 sm:p-2 shadow-lg transition-all duration-300 border border-rose-200 cursor-pointer"
            style={{ outline: "none" }}
          >
            <ChevronLeft size={28} className="text-rose-400 sm:w-8 sm:h-8 w-6 h-6" />
          </button>
          {/* Imagen centrada y ajustada */}
          <img
            src={photos[currentPhoto] || "/placeholder.svg"}
            alt={`Foto ${currentPhoto + 1}`}
            className="transition-all duration-1000 hover:brightness-110"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
              borderRadius: "1.5rem",
              background: "#fff",
              maxWidth: "100%",
              maxHeight: "100%",
              display: "block"
            }}
          />
          {/* Flecha Derecha */}
          <button
            onClick={nextPhoto}
            aria-label="Foto siguiente"
            className=" cursor-pointer absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-rose-100 rounded-full p-1 sm:p-2 shadow-lg transition-all duration-300 border border-rose-200" 
            style={{ outline: "none" }}
          >
            <ChevronRight size={28} className="text-rose-400 sm:w-8 sm:h-8 w-6 h-6" />
          </button>
        </div>
        {/* Indicadores de carrusel */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPhoto(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-500 transform hover:scale-125 border-2 cursor-pointer ${
                index === currentPhoto
                  ? "bg-rose-400 border-rose-500 scale-125 sm:scale-150 animate-pulse"
                  : "bg-rose-200 border-rose-200 hover:bg-rose-300"
              }`}
              aria-label={`Ir a la foto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}