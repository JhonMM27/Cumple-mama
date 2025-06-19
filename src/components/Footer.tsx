// components/Footer.tsx
import { Heart, Sparkles, Star } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-rose-100 to-rose-200 py-12 mt-20 animate-fade-in">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6 animate-float">
          <Heart className="text-rose-300 animate-heartbeat" size={32} />
          <Star className="text-rose-400 animate-twinkle" size={32} />
          <Sparkles className="text-rose-500 animate-spin-slow" size={32} />
          <Heart className="text-rose-300 animate-heartbeat" size={32} />
        </div>
        <p className="text-rose-500 font-medium text-xl mb-2">Hecho con mucho amor por JhonMM ❤️</p>
        <p className="text-rose-400 text-lg">Para la mamá más especial del mundo</p>
      </div>
    </footer>
  )
}
