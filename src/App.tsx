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

      {mode === "report" ? <ReportViewer /> : <SlideViewer />}
    </div>
  )
}

