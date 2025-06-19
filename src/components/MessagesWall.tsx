// components/MessagesWall.tsx
import { messages } from "../data"
import { Card, CardContent } from "./ui/card"
import { Heart, Star } from "lucide-react"

interface Props {
  messages: typeof messages
}

export default function MessagesWall({ messages }: Props) {
  return (
    <section className="animate-fade-in-up min-h-screen flex flex-col justify-center py-8 sm:py-12">
      <h3 className="text-3xl sm:text-5xl font-bold text-center text-rose-500 mb-8 sm:mb-12 font-serif animate-slide-in">
        💌 Muro de Felicitaciones 💌
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-4 w-full max-w-7xl mx-auto">
        {messages.map((msg, index) => (
          <Card
            key={index}
            className=" cursor-pointer bg-gradient-to-br from-white to-rose-50 border-rose-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 animate-card-appear group"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <CardContent className="p-4 sm:p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-bl from-rose-100 to-transparent rounded-bl-full opacity-50"></div>

              <div className="flex items-center mb-4 sm:mb-6">
                <div className="relative">
                  <img
                    src={msg.image || "/placeholder.svg"}
                    alt={msg.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 sm:border-3 border-rose-200 shadow-lg group-hover:scale-110 transition-transform duration-300 object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-rose-300 rounded-full flex items-center justify-center">
                    <Heart size={12} className="text-white" />
                  </div>
                </div>
                <div className="ml-3 sm:ml-4">
                  <h4 className="font-bold text-rose-500 text-base sm:text-lg">{msg.name}</h4>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-rose-300 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base italic group-hover:text-gray-800 transition-colors duration-300 break-words">
                "{msg.message}"
              </p>
              <div className="absolute bottom-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <Heart size={20} className="text-rose-200" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}