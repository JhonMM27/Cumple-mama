// components/Header.tsx
import { Cake, Gift, Heart } from "lucide-react"
import { Button } from "./ui/button"

interface HeaderProps {
  setShowMessageModal: (show: boolean) => void
}

export default function Header({ setShowMessageModal }: HeaderProps) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-rose-100 via-rose-200 to-rose-100 py-20 h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=600&fit=crop')] bg-cover bg-center opacity-10"></div>

      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow opacity-20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {i % 3 === 0 ? (
              <Cake size={30} className="text-rose-300" />
            ) : i % 3 === 1 ? (
              <Gift size={25} className="text-rose-400" />
            ) : (
              <Heart size={20} className="text-rose-500" />
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-3 mb-6 animate-bounce-gentle">
          <Cake className="text-rose-400 animate-wiggle" size={50} />
          <Gift className="text-rose-500 animate-wiggle" size={45} />
          <Heart className="text-rose-300 animate-pulse" size={40} />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-rose-400 via-rose-500 to-rose-400 bg-clip-text text-transparent mb-6 font-serif animate-slide-down">
          ¡Feliz Cumpleaños,
        </h1>
        <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-rose-400 via-rose-500 to-rose-400 bg-clip-text text-transparent mb-8 font-serif animate-slide-up">
          Mamá!
        </h2>

        <Button
          onClick={() => setShowMessageModal(true)}
          className=" cursor-pointer bg-gradient-to-r from-rose-300 to-rose-400 hover:from-rose-400 hover:to-rose-500 text-white px-10 py-5 text-xl rounded-full shadow-2xl transform hover:scale-110 transition-all duration-500 animate-pulse-gentle"
        >
          <Heart className="mr-3 animate-heartbeat" size={24} />
          Ver Mensaje Especial
        </Button>
      </div>
    </header>
  )
}
