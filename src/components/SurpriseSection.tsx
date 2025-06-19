// components/SurpriseSection.tsx
import { Button } from "./ui/button"
import { Share2, Sparkles } from "lucide-react"

interface Props {
  triggerFireworks: () => void
  shareMessage: () => void
}

export default function SurpriseSection({ triggerFireworks, shareMessage }: Props) {
  return (
    <section className="text-center animate-fade-in-up flex flex-col items-center justify-center py-10">
      <div className="flex flex-col items-center space-y-3">
        <Button
          onClick={triggerFireworks}
          className=" cursor-pointer bg-gradient-to-r from-rose-300 to-rose-400 hover:from-rose-400 hover:to-rose-500 text-white px-10 py-4 text-lg rounded-full shadow-2xl transform hover:scale-110 transition-all duration-500 animate-rainbow"
        >
          <Sparkles className="mr-3 animate-spin" size={22} />
          ¡Sorpresa Especial!
        </Button>

        <Button
          onClick={shareMessage}
          variant="outline"
          className="cursor-pointer mt-2 border-rose-200 text-rose-500 hover:bg-rose-50 px-7 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          <Share2 className="mr-2" size={18} />
          Compartir Amor
        </Button>
      </div>
    </section>
  )
}
