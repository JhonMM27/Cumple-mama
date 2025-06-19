// components/LetterModal.tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { Heart, Sparkles } from "lucide-react"
import { Button } from "./ui/button"

interface Props {
  show: boolean
  setShow: (value: boolean) => void
  triggerFireworks: () => void
}

export default function LetterModal({ show, setShow, triggerFireworks }: Props) {
  return (
    <Dialog open={show} onOpenChange={setShow}>
      <DialogContent
        aria-describedby="letter-modal-desc"
        className="max-w-5xl bg-gradient-to-br from-rose-50 via-white to-rose-100 border-rose-200 shadow-2xl animate-modal-appear overflow-hidden flex flex-col justify-center"
      >

        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-rose-200 via-rose-300 to-rose-200"></div>

        <DialogHeader className="relative pt-6">
          <DialogTitle className="text-5xl font-bold text-center text-rose-500 mb-8 font-serif animate-fade-in">
            💌 Mi Carta Para Ti, Mamá 💌
          </DialogTitle>
        </DialogHeader>

        <div id="letter-modal-desc" className="relative p-8 max-h-[70vh] overflow-y-auto">
          <div className="absolute top-4 right-4 opacity-20">
            <Heart size={60} className="text-rose-200 animate-float" />
          </div>
          <div className="absolute bottom-4 left-4 opacity-20">
            <Sparkles size={50} className="text-rose-300 animate-twinkle" />
          </div>

          <div className="max-w-4xl mx-auto space-y-8 text-center animate-slide-up-delayed">
            <div className="text-7xl mb-8 animate-bounce-gentle">💕</div>

            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p className="animate-fade-in-delayed font-serif text-2xl text-rose-500 mb-8">"Querida Mamá..."</p>

              <p className="animate-fade-in-delayed">
                En este día tan especial, quiero tomarme un momento para decirte todo lo que mi corazón guarda para ti. Eres mucho más que una madre; eres mi guía, mi inspiración, mi refugio seguro y mi ejemplo a seguir.
              </p>

              <p className="animate-fade-in-delayed-2">
                Cada día me sorprende tu fortaleza, tu paciencia infinita y la manera en que siempre encuentras la forma de hacernos sentir amados y protegidos. Tus abrazos son mi lugar favorito en el mundo, y tu sonrisa ilumina incluso los días más grises.
              </p>

              <p className="animate-fade-in-delayed-3">
                Gracias por todas las noches en vela cuando estaba enfermo, por celebrar mis triunfos como si fueran tuyos, por secar mis lágrimas y por creer en mí incluso cuando yo no creía en mí mismo. Gracias por enseñarme el valor del amor incondicional.
              </p>

              <p className="animate-fade-in-delayed-4">
                Hoy, en tu cumpleaños, quiero que sepas que eres mi heroína, mi primera maestra de vida y la persona que más admiro en este mundo. Que este nuevo año de vida esté lleno de alegría, salud, risas y todos los sueños que aún tienes por cumplir.
              </p>

              <div className="text-3xl font-bold text-rose-500 font-serif animate-heartbeat-slow mt-12 mb-8">
                Te amo más de lo que las palabras pueden expresar ❤️
              </div>

              <div className="text-xl text-rose-400 font-serif animate-fade-in-delayed-5">
                Con todo mi amor,
                <br />
                Jhon💕
              </div>
            </div>

            <Button
              onClick={triggerFireworks}
              className="mt-12 bg-gradient-to-r from-rose-300 to-rose-400 hover:from-rose-400 hover:to-rose-500 text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse-gentle w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto"
            >
              <Sparkles className="mr-2 animate-spin" size={20} />
              ¡Celebrar con Fuegos Artificiales!
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
