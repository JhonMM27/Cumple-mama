// components/Fireworks.tsx
import { Heart, Sparkles, Star } from "lucide-react"

export default function Fireworks() {
  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-firework"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        >
          {i % 3 === 0 ? (
            <Sparkles className="text-rose-300 animate-spin" size={20 + Math.random() * 15} />
          ) : i % 3 === 1 ? (
            <Heart className="text-rose-400 animate-bounce" size={15 + Math.random() * 10} />
          ) : (
            <Star className="text-rose-500 animate-pulse" size={18 + Math.random() * 12} />
          )}
        </div>
      ))}
    </div>
  )
}
