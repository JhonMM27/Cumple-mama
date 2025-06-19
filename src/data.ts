// data.ts

export const messages = [
  {
    name: "Darlin",
    message: `
      Feliz cumpleaños, mami. Hoy celebro tu vida, tu amor y todo lo que eres.
      Tu amor me ha sostenido en cada etapa, y ahora, como abuela, te has convertido en un nuevo milagro para nuestras vidas.
      Verte amar a mi hijo con esa ternura infinita es uno de los regalos más hermosos que la vida me ha dado.
      Que el universo te devuelva cada gesto, cada cuidado, cada sonrisa que has sembrado en nosotros.
      Te amo profundamente, y siempre te voy a honrar. 💛
    `.trim(),
    image:
      "img/Darlin.png",
  },
  {
    name: "Naty",
    message:
      `Mami, en este día tan especial celebramos la vida, deseando siempre la mayor felicidad del mundo, que dios nos siga brindando más años juntos de celebración entre tú y todos tus hijos, eres la persona más importante en mi vida y quiero siempre lo mejor para ti, papito desde el cielo siempre velará por ti y por la familia, que cada día sea un recordatorio de todo lo que vivieron juntos mami, feliz cumpleaños mami, feliz vida, te amo con todo mi corazón 🥰`.trim(),
    image:
      "img/Naty.jpg",
  },
  {
    name: "Alonso",
    message:
      `Mamá, feliz cumpleaños.Aunque a veces no te lo diga tanto como debería, quiero que sepas que te admiro profundamente. Gracias por estar ahí siempre, por tus consejos, tu paciencia, y por enseñarme con el ejemplo a ser una buena persona. Tu fuerza y tu amor me inspiran todos los días. Eres mi héroe silenciosa, la que siempre da todo sin pedir nada a cambio.
      Hoy celebro tu vida con todo mi corazón. Gracias por ser mi mamá. Te quiero más de lo que las palabras pueden decir 🥰.`.trim(),
    image:
      "img/Alonso.jpg",
  },
  {
    name: "Antonella",
    message:
      `Feliz cumple, mamita linda.
      Eres la persona más especial en mi vida. Eres mi mejor amiga, mi guía y mi abrazo favorito. Gracias por escucharme cuando estoy triste, por reír conmigo en los momentos lindos y por estar siempre que te necesito.
      Espero que este día esté lleno de todo el amor y la alegría que tú me das cada día. Te amo con todo mi corazón y quiero que sepas que siempre voy a estar orgullosa de ser tu hija 🥰.`.trim(),
    image:
      "img/Antonella.jpg",
  },
  {
    name: "Jhon",
    message:
      `Feliz cumpleaños, mamá.
      Hoy no solo celebro el día en que naciste, sino también todo lo que representas en mi vida. A medida que voy creciendo, valoro cada vez más todo lo que has hecho por mí: tus sacrificios, tu apoyo incondicional, tu forma única de amar.
      Eres mi fuerza en los días difíciles y mi alegría en los buenos. Gracias por enseñarme con amor y paciencia, por creer en mí incluso cuando yo dudaba. No hay palabras que alcancen para agradecerte, pero quiero que sepas que te amo con todo mi corazón.
      Que este nuevo año te traiga tantas bendiciones como las que tú has sembrado en mi vida. Te mereces todo lo hermoso del mundo 🥰.`.trim(),
    image:
      "img/Jhon.jpg",
  },
]

export const photos = [
  "img/Carrucel_01.jpg",
  "img/Carrucel_02.jpg",
  "img/Carrucel_03.jpg",
  "img/Carrucel_04.jpg",
  "img/Carrucel_05.jpg",
  "img/Carrucel_06.jpg",
  "img/Carrucel_07.jpg",
  "img/Carrucel_08.jpg",
  "img/Carrucel_09.jpg",
  "img/Carrucel_10.jpg",
  "img/Carrucel_11.jpg",
]

export type Message = typeof messages[number];
