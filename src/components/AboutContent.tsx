import React from "react"
import { motion } from "framer-motion"
import {
  fadeIn,
  fromLeftToRight,
  fromRightToLeft,
} from "../utils/animations/variants"
import { Line } from "../assets/styles/aboutStyles"

const AboutContent = () => {
  return (
    <>
      <motion.p variants={fadeIn}>
        W czerwcu tego roku zdobyłem tytuł magistra na kierunku Systemy
        Informatyczne w Bezpieczeństwie na Akademii Marynarki Wojennej w Gdyni.
        Podstawy programowania poznałem na studiach jednak zainteresowałem się
        tym tematem bardziej dopiero w połowie 2019 roku. Na początku
        spróbowałem Pythona, jednak po krótkim czasie przeniosłem się w świat
        front-endu.
      </motion.p>

      <Line variants={fromRightToLeft} />

      <motion.p variants={fadeIn}>
        Okazało się to strzałem w przysłowiową dziesiątkę. Front-end wciągnął
        mnie od początku. Po poznaniu HTML i CSS postanowiłem wreszcie dokładnie
        poznać JavaScript. Po poznaniu solidnych podstaw z JS zrobiłem pare
        projektów, aby utrwalić wiedzę i stanąłem przed wyborem frameworka. Moim
        pierwszym wyborem było Vue, jednak po poznaniu jego podstaw spróbowałem
        Reacta, który notabene jest biblioteką z wielkimi możliwościami, a nie
        pełnoprawnym frameworkiem. Od razu przypadł mi do gustu. Po poznaniu
        podstaw postanowiłem połączyć naukę Reacta z TypeScriptem i wykorzystać
        w pełni możliwości typowania, które niesamowicie ułatwiają chociażby
        unikanie błędów w kodzie.
      </motion.p>

      <Line variants={fromLeftToRight} />

      <motion.p variants={fadeIn}>
        Po poznaniu Reacta przyszła kolej na rozwiązania back-endowe. Znając juz
        JS postawiłem na Node.js ucząc się go jednocześnie z bazą danych
        MongoDb. Dzięki temu moje strony mogły zyskać kolejne funkcjonalności.
      </motion.p>

      <Line variants={fromRightToLeft} />

      <motion.p variants={fadeIn}>
        Ostatnimi czasy postanowiłem pójść o krok dalej i nauczyć się Gatsby.js.
        Na razie opanowałem jego podstawy i ciągle szlifuję umiejętności jednak
        w planach mam poznanie również Next.js. W międzyczasie poznałem wiele
        bibliotek, które ułatwiają pracę developerów i pozwalają wprowadzić
        strony na wyższy poziom.
      </motion.p>
    </>
  )
}

export default AboutContent
