"use client"

import { motion } from "framer-motion"

const funcionalidades = [
  {
    title: "Centralização Inteligente",
    description:
      "Todas as informações acadêmicas reunidas em um único sistema integrado e organizado.",
  },
  {
    title: "Automação Acadêmica",
    description:
      "Reduza tarefas manuais com processos automatizados e geração rápida de relatórios.",
  },
  {
    title: "Acesso Multiusuário",
    description:
      "Perfis personalizados para professores, coordenação e secretaria.",
  },
  {
    title: "Relatórios Estratégicos",
    description:
      "Indicadores e dados que auxiliam na tomada de decisões pedagógicas.",
  },
  {
    title: "Segurança e Controle",
    description:
      "Permissões de acesso, rastreamento de ações e proteção de dados.",
  },
  {
    title: "Interface Intuitiva",
    description:
      "Design moderno pensado para facilitar o uso no dia a dia escolar.",
  },
]

export default function Funcionalidades() {
  return (
    <section
      id="funcionalidades"
      className="flex flex-col justify-center bg-white px-6 md:px-16 py-20"
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Funcionalidades que Transformam a Gestão Escolar
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
            O Acadex vai além do controle acadêmico. Ele oferece uma experiência
            moderna, organizada e estratégica para instituições de ensino.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {funcionalidades.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition duration-300 bg-gray-50"
            >
              <h3 className="text-xl font-semibold text-blue-600">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}