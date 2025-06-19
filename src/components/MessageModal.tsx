// components/MessageModal.tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"

interface Props {
  show: boolean
  setShow: (value: boolean) => void
}

export default function MessageModal({ show, setShow }: Props) {
  return (
    <Dialog open={show} onOpenChange={setShow}>
      
      <DialogContent  className="max-w-4xl bg-gradient-to-br from-rose-50 to-rose-100 border-rose-200 shadow-2xl animate-modal-appear">
        <DialogHeader>
          <DialogTitle className="text-4xl font-bold text-center text-rose-500 mb-6 font-serif animate-fade-in">
            💕 Un Mensaje Especial Para Ti 💕
          </DialogTitle>
        </DialogHeader>
        <div className="p-6 text-center animate-slide-up-delayed">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed animate-fade-in-delayed">
              Querida mamá, en este día tan especial quiero decirte lo mucho que significas para mí. Eres la luz que ilumina nuestro hogar, la fuerza que nos sostiene y el amor incondicional que nos guía cada día. Tu sonrisa es nuestro refugio, tus abrazos nuestro consuelo, y tu sabiduría nuestro tesoro más preciado.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed animate-fade-in-delayed-2">
              Gracias por ser la mamá más maravillosa del mundo, por tu paciencia infinita, por tus cuidados constantes y por amarnos sin condiciones. Que este nuevo año de vida esté lleno de alegría, salud y todos tus sueños hechos realidad.
            </p>
            <div className="text-3xl font-bold text-rose-500 font-serif animate-heartbeat-slow">
              ¡Te amamos con todo nuestro corazón! ❤️
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
