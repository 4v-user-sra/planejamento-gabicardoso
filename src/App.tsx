/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import ReportViewer from "./components/ReportViewer"
import { SlideViewer } from "./components/SlideViewer"
import { Layout, Presentation } from "lucide-react"

export default function App() {
  const [mode, setMode] = useState<"report" | "slides">("report")

  return (
    <div className="relative min-h-screen bg-zinc-950">
      {/* Floating View Switcher */}
      <aside aria-label="Visualização" className="fixed top-4 right-4 z-50 flex items-center bg-zinc-900/90 backdrop-blur-md border border-zinc-800 p-1 rounded-xl shadow-2xl">
        <button
          onClick={() => setMode("report")}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            mode === "report"
              ? "bg-red-600 text-white shadow-sm"
              : "text-zinc-400 hover:text-white"
          }`}
          title="Visão Executiva Completa"
        >
          <Layout className="w-3.5 h-3.5" />
          <span>Relatório Estratégico</span>
        </button>
        <button
          onClick={() => setMode("slides")}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            mode === "slides"
              ? "bg-red-600 text-white shadow-sm"
              : "text-zinc-400 hover:text-white"
          }`}
          title="Apresentação de Slides 16:9"
        >
          <Presentation className="w-3.5 h-3.5" />
          <span>Modo Slides (16:9)</span>
        </button>
      </aside>

      {mode === "report" ? <ReportViewer /> : <SlideViewer />}
    </div>
  )
}

