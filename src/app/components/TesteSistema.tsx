"use client"

import { motion } from "framer-motion"

export default function TesteSistema() {
  return (
    <section
      id="teste"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 px-6 md:px-16 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-white max-w-4xl"
      >
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Teste o Acadex
        </h2>

        <p className="mt-8 text-lg md:text-xl text-blue-100">
          O sistema está atualmente em fase de desenvolvimento e aprimoramento.
          Estamos trabalhando para entregar uma experiência completa, moderna
          e intuitiva para a gestão escolar.
        </p>

        <div className="mt-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
          <p className="text-base md:text-lg">
            🚀 Em breve disponibilizaremos uma versão demonstrativa para que
            você possa explorar todas as funcionalidades do Acadex.
          </p>

          <p className="mt-4 text-sm text-blue-200">
            Fique atento para atualizações.
          </p>
        </div>
      </motion.div>
    </section>
  )
}