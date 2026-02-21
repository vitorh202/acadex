"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const modulos = [
  {
    title: "Responsável",
    image: "/img/modulos/responsavelicon.png",
    gallery: [
      {
        image: "/img/modulos/responsavel.png",
        caption: "Tela de visualização de responsável",
      },
      {
        image: "/img/modulos/responsavel-1.png",
        caption: "Tela de Cadastro de responsável",
      },
      {
        image: "/img/modulos/responsavel-2.png",
        caption: "Edição e exclusão simplificado",
      },
      {
        image: "/img/modulos/responsavel-3.png",
        caption: "Confirmação de Exclusão",
      },
    ],
  },
  {
    title: "Aluno",
    image: "/img/modulos/alunoicon.png",
    gallery: [
      {
        image: "/img/modulos/aluno-1.png",
        caption: "Tela de visualização de alunos",
      },
      {
        image: "/img/modulos/aluno-2.png",
        caption: "Tela de Cadastro de alunos",
      },
      {
        image: "/img/modulos/aluno-3.png",
        caption: "Edição, exclusão e matrícula simplificado",
      },
      {
        image: "/img/modulos/aluno-4.png",
        caption: "Busca de turma e cadastro direto pelo cadastro do aluno",
      },
    ],
  },
  {
    title: "Professores",
    image: "/img/modulos/professoricon.png",
    gallery: [
      {
        image: "/img/modulos/professor.png",
        caption: "Tela de visualização dos professores",
      },
      {
        image: "/img/modulos/prof-1.png",
        caption: "Tela de cadastro/edição dos professores",
      },
      {
        image: "/img/modulos/prof-2.png",
        caption: "Controle de frequência",
      },
      {
        image: "/img/modulos/prof-3.png",
        caption: "Lançamento de notas por Turma/Matéria",
      },
    ],
  },
  {
    title: "Gestão Acadêmica",
    image: "/img/modulos/gestao.png",
    gallery: [
      {
        image: "/img/modulos/gestao-1.png",
        caption: "Cadastro de turmas e disciplinas",
      },
      {
        image: "/img/modulos/gestao-2.png",
        caption: "Controle de calendário letivo",
      },
    ],
  },
  {
    title: "Financeiro",
    image: "/img/modulos/financeiro.png",
    gallery: [
      {
        image: "/img/modulos/fin-1.png",
        caption: "Gestão de mensalidades",
      },
      {
        image: "/img/modulos/fin-2.png",
        caption: "Controle de inadimplência",
      },
    ],
  },
  {
    title: "Relatórios",
    image: "/img/modulos/relatorios.png",
    gallery: [
      {
        image: "/img/modulos/rel-1.png",
        caption: "Relatórios de desempenho",
      },
      {
        image: "/img/modulos/rel-2.png",
        caption: "Exportação em PDF",
      },
    ],
  },
  {
    title: "Configurações",
    image: "/img/modulos/config.png",
    gallery: [
      {
        image: "/img/modulos/config-1.png",
        caption: "Gestão de usuários e permissões",
      },
      {
        image: "/img/modulos/config-2.png",
        caption: "Personalização da instituição",
      },
    ],
  },
]

export default function Modulos() {
  const [selected, setSelected] = useState<any>(null)
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)

  return (
    <section
      id="modulos"
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 py-20 bg-gray-50"
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
            Módulos do Sistema
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
            Conheça todas as áreas que compõem o Acadex e tornam a gestão
            escolar completa.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {modulos.map((modulo, index) => (
            <motion.div
              key={modulo.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelected(modulo)}
              className="cursor-pointer bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition"
            >
              <Image
                src={modulo.image}
                alt={modulo.title}
                width={80}
                height={80}
                className="mx-auto"
              />

              <h3 className="mt-4 text-xl font-semibold text-purple-600">
                {modulo.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl max-w-4xl w-full p-8 overflow-y-auto max-h-[80vh]"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selected.title}
                </h3>
                <button
                  onClick={() => setSelected(null)}
                  className="text-gray-500 hover:text-red-500 text-xl"
                >
                  ✕
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {selected.gallery.map((item: any, i: number) => (
                  <div key={i}>
                    <Image
                        src={item.image}
                        alt=""
                        width={500}
                        height={300}
                        onClick={() => setFullscreenImage(item.image)}
                        className="rounded-lg shadow-md cursor-zoom-in hover:scale-105 transition duration-300"
                    />
                    <p className="mt-2 text-orange-600 text-sm">
                      {item.caption}
                    </p>
                  </div>
                ))}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    <AnimatePresence>
        {fullscreenImage && (
            <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-[60] p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreenImage(null)}
            >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-6xl w-full"
            >
                <button
                onClick={() => setFullscreenImage(null)}
                className="absolute -top-12 right-0 text-white text-3xl hover:text-red-400 transition"
                >
                ✕
                </button>

                <Image
                src={fullscreenImage}
                alt="Visualização ampliada"
                width={1200}
                height={800}
                className="rounded-xl shadow-2xl w-full h-auto"
                />
            </motion.div>
            </motion.div>
        )}
    </AnimatePresence>

    </section>

  )
}