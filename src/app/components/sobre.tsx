"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="flex flex-col justify-center px-6 md:px-16 py-20 bg-gray-50"
    >
      {/*  Título + Imagem */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            O SISTEMA DE GESTÃO ESCOLAR
            <span className="block text-purple-700">
              MAIS COMPLETO E SIMPLIFICADO
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            O Acadex foi desenvolvido para transformar a gestão acadêmica,
            oferecendo controle total sobre notas, frequência, relatórios e
            desempenho escolar em uma plataforma moderna e intuitiva.
          </p>
        </motion.div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/img/dashboard-preview.jpg"
            alt="Preview do sistema Acadex"
            width={500}
            height={400}
            className="rounded-xl shadow-xl"
          />
        </motion.div>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto mt-20 grid md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <Image
            src="/img/analytics.png"
            alt="Gestão de desempenho"
            width={60}
            height={60}
          />

          <h3 className="text-xl font-semibold mt-4 text-purple-700">
            Gestão de Desempenho
          </h3>

          <p className="mt-3 text-gray-600">
            Acompanhe notas, evolução e rendimento dos alunos com relatórios
            detalhados e indicadores estratégicos.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <Image
            src="/img/attendance.png"
            alt="Controle de frequência"
            width={60}
            height={60}
          />

          <h3 className="text-xl font-semibold mt-4 text-purple-700">
            Controle de Frequência
          </h3>

          <p className="mt-3 text-gray-600">
            Registro rápido e automatizado de presença, com geração de
            relatórios e acompanhamento em tempo real.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <Image
            src="/img/report.png"
            alt="Relatórios inteligentes"
            width={60}
            height={60}
          />

          <h3 className="text-xl font-semibold mt-4 text-purple-700">
            Relatórios Inteligentes
          </h3>

          <p className="mt-3 text-gray-600">
            Gere boletins, históricos e relatórios acadêmicos completos com
            poucos cliques.
          </p>
        </motion.div>

      </div>
    </section>
  )
}