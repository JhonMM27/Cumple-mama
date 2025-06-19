// components/SpecialLetter.tsx
import { Heart, Sparkles } from "lucide-react"
import { Card, CardContent } from "./ui/card"

interface Props {
  setShowLetterModal: (show: boolean) => void
}

export default function SpecialLetter({ setShowLetterModal }: Props) {
  return (
    <section className="animate-fade-in-up text-center h-screen flex flex-col justify-center">
      <h3 className="text-5xl font-bold text-rose-500 mb-12 font-serif animate-slide-in">
        💌 Una Carta Especial Para Ti 💌
      </h3>

      <div className="max-w-2xl mx-auto">
        <Card
          onClick={() => setShowLetterModal(true)}
          className="relative bg-gradient-to-br from-rose-50 via-white to-rose-100 border-2 border-rose-200 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-105 hover:-rotate-1 cursor-pointer group animate-letter-float overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-200 via-rose-300 to-rose-200"></div>
          <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
            <Heart size={40} className="text-rose-300 animate-heartbeat" />
          </div>
          <div className="absolute bottom-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
            <Sparkles size={35} className="text-rose-400 animate-twinkle" />
          </div>

          <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <Heart size={24} className="text-white animate-pulse" />
          </div>

          <CardContent className="p-12 pt-20">
            <div className="text-center space-y-6">
              <div className="text-6xl mb-6 animate-bounce-gentle">💕</div>

              <h4 className="text-3xl font-bold text-rose-500 font-serif group-hover:text-rose-600 transition-colors duration-300">
                Para la Mamá Más Especial
              </h4>

              <p className="text-xl text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                Una carta llena de amor, recuerdos y agradecimiento especialmente escrita para ti...
              </p>

              <div className="flex justify-center space-x-2 mt-8">
                <div className="w-3 h-3 bg-rose-200 rounded-full animate-pulse"></div>
                <div
                  className="w-3 h-3 bg-rose-300 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-rose-200 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>

              <div className="text-rose-400 font-medium group-hover:text-rose-500 transition-colors duration-300 animate-fade-in-out">
                Haz clic para abrir la carta ✨
              </div>
            </div>
          </CardContent>

          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-rose-200 opacity-50"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-rose-200 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-rose-200 opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-rose-200 opacity-50"></div>
        </Card>
      </div>
    </section>
  )
}
