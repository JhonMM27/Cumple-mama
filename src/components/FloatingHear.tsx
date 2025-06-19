// components/FloatingHearts.tsx
import { Heart } from "lucide-react"

export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <Heart
          key={i}
          className="absolute text-rose-200 animate-float opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
          }}
          size={15 + Math.random() * 25}
        />
      ))}
    </div>
  )
}