import React, { useState } from "react"
import { presentationData } from "../data"
import { 
  ArrowUpRight, ArrowRight, Target, Lightbulb, PlayCircle, Star, Calendar, CheckCircle2, ChevronRight, 
  FileSpreadsheet, Network, FileText, Video, Rocket, ExternalLink, AlertTriangle, ShoppingCart, Ban, 
  RefreshCw, BarChart2, TrendingUp, DollarSign, Users, Layers, Zap, MessageSquare, ArrowDown, Activity, 
  ShieldAlert, Check, Sparkles, Filter, Database, Send, Clock, PieChart
} from "lucide-react"

const themeMap: Record<string, string> = {
  "01_capa": "bg-zinc-950 text-zinc-300 border-zinc-900",
  "02_recapitulando_jornada": "bg-zinc-200 text-zinc-900 border-zinc-300",
  "03_sumario": "bg-white text-zinc-900 border-zinc-200",
  "04_divisor_secao_1": "bg-zinc-900 text-zinc-100 border-zinc-800",
  "05_analise_social": "bg-zinc-50 text-zinc-900 border-zinc-200",
  "06_analise_site": "bg-zinc-100 text-zinc-900 border-zinc-200",
  "07_analise_meta": "bg-white text-zinc-900 border-zinc-200",
  "08_diferenciais": "bg-zinc-950 text-zinc-300 border-zinc-900",
  "08b_marketing_4ps_swot": "bg-zinc-50 text-zinc-900 border-zinc-200",
  "08c_matriz_cvba_oferta": "bg-white text-zinc-900 border-zinc-200",
  "09_divisor_secao_2": "bg-zinc-900 text-zinc-100 border-zinc-800",
  "10_benchmarking_1": "bg-zinc-50 text-zinc-900 border-zinc-200",
  "11_benchmarking_2": "bg-white text-zinc-900 border-zinc-200",
  "12_moodboard": "bg-zinc-200 text-zinc-900 border-zinc-300",
  "12b_manual_copy_identidade": "bg-zinc-50 text-zinc-900 border-zinc-200",
  "14_persona_1": "bg-zinc-900 text-zinc-300 border-zinc-800",
  "15_persona_2": "bg-zinc-950 text-zinc-300 border-zinc-900",
  "17_objetivo_smart": "bg-black text-zinc-300 border-zinc-900",
  "13_estrategia": "bg-white text-zinc-900 border-zinc-200",
  "13_estrategia_campanhas": "bg-zinc-50 text-zinc-900 border-zinc-200",
  "21_criativos": "bg-zinc-100 text-zinc-900 border-zinc-200",
  "18_drawflow_funil": "bg-zinc-900 text-zinc-100 border-zinc-800",
  "18b_drawflow_fase2_longo_prazo": "bg-zinc-900 text-zinc-100 border-zinc-800",
  "19_cronograma": "bg-white text-zinc-900 border-zinc-200",
  "20_plano_midia": "bg-zinc-50 text-zinc-900 border-zinc-200",
  "21_riscos_dependencias_proximos_passos": "bg-zinc-950 text-zinc-300 border-zinc-900"
}

// Helper to determine section background based on type
export function getSectionTheme(id: string, type: string) {
  if (themeMap[id]) return themeMap[id]
  
  if (['competitor_benchmark', 'campaign_strategy_boxes', 'marketing_4ps_swot', 'manual_copy_identidade'].includes(type)) return 'bg-zinc-100 text-zinc-900 border-zinc-200'
  if (['moodboard_identity', 'spreadsheet_placeholder', 'matriz_cvba_oferta'].includes(type)) return 'bg-white text-zinc-900 border-zinc-200'
  if (['process_timeline', 'funnel_flow_diagram', 'visual_drawflow', 'drawflow_fase2_longo_prazo'].includes(type)) return 'bg-black text-zinc-300 border-zinc-900'
  if (['smart_goal_okr', 'projecao_comercial_detalhada', 'riscos_dependencias_proximos_passos'].includes(type)) return 'bg-zinc-900 text-zinc-300 border-zinc-800'
  return 'bg-zinc-950 text-zinc-300 border-zinc-900'
}

function SectionWrapper({ children, themeClass }: { children: React.ReactNode; themeClass: string; key?: React.Key }) {
  return (
    <section className={`w-full min-h-[60vh] flex flex-col justify-center px-8 md:px-24 py-24 ${themeClass} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12">
        {children}
      </div>
    </section>
  )
}

export function RenderBlock({ slide }: { slide: any }) {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const type = slide.slide_type
  const d = slide.content_slots
  const themeClass = getSectionTheme(slide.id, type)
  const isLight = themeClass.includes('bg-white') || themeClass.includes('bg-zinc-50') || themeClass.includes('bg-zinc-100') || themeClass.includes('bg-zinc-200')

  let titleColor = isLight ? "text-zinc-900" : "text-white"
  let subtitleColor = isLight ? "text-zinc-600" : "text-zinc-400"
  let cardBg = isLight ? "bg-white border-zinc-200 shadow-sm" : "bg-zinc-900 border-zinc-800"

  if (type === 'cover') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8">
        <h3 className="text-xl md:text-2xl font-serif text-zinc-400 tracking-widest uppercase">{d.logo_agencia}</h3>
        <h1 className="text-5xl md:text-7xl font-bold text-white max-w-4xl leading-tight tracking-tight">
          {d.titulo_principal}
        </h1>
        <div className="h-px w-24 bg-red-600 my-8"></div>
        <h2 className="text-3xl md:text-4xl font-light text-zinc-300 font-serif italic">
          {d.subtitulo}
        </h2>
        <div className="pt-16 flex flex-col items-center gap-4 text-zinc-500">
          <p className="text-lg tracking-wide uppercase">{d.data_apresentacao}</p>
        </div>
      </div>
    )
  }

  if (type === 'process_timeline') {
    return (
      <div>
        <h2 className={`text-4xl font-bold ${titleColor} mb-16 text-center`}>{d.titulo}</h2>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 top-4 bottom-0 w-px bg-zinc-300 md:hidden" />
          <div className="absolute top-4 left-0 right-0 h-px bg-zinc-300 hidden md:block" />
          
          {d.etapas_timeline?.map((etapa: string, i: number) => {
            const isCurrent = etapa === d.etapa_atual_destacada
            return (
              <div key={i} className="relative z-10 flex flex-col items-center gap-4 flex-1 px-2 my-4 md:my-0">
                <div className="h-8 flex items-center justify-center">
                  <div className={`w-8 h-8 rounded-full border-4 flex items-center justify-center relative z-10 ${isCurrent ? 'border-red-600 bg-white' : 'border-zinc-300 bg-white'}`}>
                    {isCurrent && <div className="w-2 h-2 rounded-full bg-red-600" />}
                  </div>
                </div>
                <span className={`text-sm md:text-base font-medium text-center ${isCurrent ? 'text-red-600' : subtitleColor}`}>
                  {etapa}
                </span>
              </div>
            )
          })}
        </div>
        <div className="mt-20 text-center">
          {d.label_fase_rodape && (
            <p className={`inline-block px-6 py-2 rounded-full ${isLight ? 'bg-red-100 text-red-700 border-red-200' : 'bg-red-950/30 text-red-400 border-red-900/50'} mb-4`}>
              {d.label_fase_rodape}
            </p>
          )}
        </div>
      </div>
    )
  }

  if (type === 'agenda_toc') {
    return (
      <div className="flex flex-col md:flex-row gap-12 items-start max-w-5xl mx-auto w-full">
        <div className="w-full md:w-1/3 pt-4">
           <h2 className={`text-4xl font-bold ${titleColor} sticky top-32`}>{d.titulo}</h2>
        </div>
        <div className={`w-full md:w-2/3 flex flex-col gap-3 border-l ${isLight ? 'border-zinc-200' : 'border-zinc-800'} pl-8 md:pl-12`}>
          {d.itens_agenda?.map((item: string, i: number) => (
            <div key={i} className="flex gap-6 group items-center transition-colors">
              <span className="text-xl font-bold text-red-600 font-mono w-6 text-right opacity-80">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className={`text-xl font-medium ${titleColor} opacity-80 group-hover:opacity-100 transition-opacity`}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (type === 'section_divider') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
        <Target className={`w-16 h-16 text-red-600 mb-8 opacity-80`} />
        <h2 className={`text-5xl font-bold ${titleColor} max-w-3xl leading-tight`}>{d.titulo_secao}</h2>
      </div>
    )
  }

  if (type === 'diagnostic_analysis') {
    return (
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col h-full justify-center">
          <h2 className={`text-4xl font-bold ${titleColor} mb-3`}>{d.titulo_slide}</h2>
          {d.subtitulo && <p className={`text-sm md:text-base font-medium ${subtitleColor} mb-6 italic`}>{d.subtitulo}</p>}
          <div className="w-16 h-1 bg-red-600 mb-8"></div>
          
          {/* Sessão de Imagem / Print */}
          {(d.imagem_url || d.image_placeholder) && (
            <div className="flex flex-col gap-4">
              <div className={`mt-4 w-full rounded-2xl border-2 ${d.imagem_url ? (isLight ? 'border-zinc-200 shadow-xl' : 'border-zinc-800 shadow-2xl') : (isLight ? 'border-dashed border-zinc-300 bg-zinc-50' : 'border-dashed border-zinc-800 bg-zinc-900/50')} overflow-hidden flex items-center justify-center relative`}>
                 {d.imagem_url ? (
                    <img 
                      src={d.imagem_url} 
                      alt="Print da Plataforma" 
                      className="w-full h-auto object-contain cursor-pointer transition-transform hover:scale-[1.02]" 
                      style={{ maxHeight: '650px' }} 
                      onClick={() => setExpandedImage(d.imagem_url)}
                    />
                 ) : (
                    <div className="flex flex-col items-center justify-center text-center p-12 opacity-50 min-h-[250px]">
                       <Target className="w-12 h-12 mb-4" />
                       <p className="font-bold text-lg">{d.image_placeholder}</p>
                       <p className="text-sm mt-2">Área reservada para inserir a imagem</p>
                    </div>
                 )}
              </div>
              {d.imagens_secundarias && (
                <div className="flex gap-4 w-full">
                  {d.imagens_secundarias.map((imgUrl: string, idx: number) => (
                    <div key={idx} className={`flex-1 rounded-xl border-2 ${isLight ? 'border-zinc-200 shadow-md' : 'border-zinc-800 shadow-xl'} overflow-hidden cursor-pointer transition-transform hover:scale-105`} onClick={() => setExpandedImage(imgUrl)}>
                      <img src={imgUrl} alt={`Destaque ${idx + 1}`} className="w-full h-full object-cover aspect-square" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-6">
          {d.insights_estruturados ? d.insights_estruturados.map((insight: any, i: number) => {
            const isPositivo = insight.tipo === 'positivo';
            const Icon = isPositivo ? CheckCircle2 : Lightbulb;
            const iconColor = isPositivo ? 'text-emerald-500' : 'text-amber-500';
            const borderColor = isPositivo ? (isLight ? 'border-emerald-200 bg-emerald-50' : 'border-emerald-900/50 bg-emerald-950/20') : (isLight ? 'border-amber-200 bg-amber-50' : 'border-amber-900/50 bg-amber-950/20');
            
            return (
              <div key={i} className={`flex items-start gap-4 p-5 rounded-2xl border ${borderColor}`}>
                <Icon className={`w-6 h-6 shrink-0 mt-1 ${iconColor}`} />
                <div>
                   {insight.titulo && <span className={`font-bold ${iconColor} block mb-1 uppercase text-sm`}>{insight.titulo}</span>}
                   <p className={`text-[17px] leading-relaxed ${titleColor}`}>{insight.texto}</p>
                </div>
              </div>
            )
          }) : d.insights_bullets?.map((bullet: string, i: number) => (
            <div key={i} className={`flex items-start gap-4 p-6 rounded-2xl border ${cardBg}`}>
              <ArrowUpRight className="w-6 h-6 text-red-500 shrink-0 mt-1" />
              <p className={`text-lg leading-relaxed ${titleColor}`}>{bullet}</p>
            </div>
          ))}
        </div>

        {/* Modal / Lightbox */}
        {expandedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12 animate-in fade-in duration-300"
            onClick={() => setExpandedImage(null)}
          >
            <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
              <img 
                src={expandedImage} 
                alt="Fullscreen" 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300" 
              />
            </div>
          </div>
        )}
      </div>
    )
  }

  if (type === 'three_pillar_framework') {
    return (
      <div>
        <h2 className={`text-4xl font-bold ${titleColor} text-center mb-16`}>{d.titulo}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((num) => (
            <div key={num} className={`p-8 rounded-2xl border ${cardBg} flex flex-col items-center text-center group transition-colors`}>
              <div className={`w-16 h-16 rounded-2xl ${isLight ? 'bg-zinc-100 border-zinc-200' : 'bg-zinc-950 border-zinc-800'} flex items-center justify-center mb-6 shadow-inner`}>
                <span className="text-2xl font-bold text-red-600">{num}</span>
              </div>
              <h3 className={`text-2xl font-bold ${titleColor} mb-4`}>{d[`pilar_${num}_nome`]}</h3>
              <p className={`text-lg ${subtitleColor} leading-relaxed`}>{d[`pilar_${num}_texto`]}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (type === 'competitor_benchmark') {
    return (
      <div>
        <h2 className={`text-4xl font-bold ${titleColor} mb-12`}>{d.titulo}</h2>
        <div className="grid md:grid-cols-12 gap-8">
          <div className={`col-span-12 md:col-span-4 rounded-2xl border ${cardBg} p-8 flex flex-col justify-center items-center text-center`}>
            <span className="text-sm font-bold text-red-600 uppercase tracking-widest mb-4">{d.subtitulo}</span>
            <h3 className={`text-4xl md:text-5xl font-bold ${titleColor} mb-4 leading-tight`}>{d.nome_concorrente}</h3>
          </div>
          <div className={`col-span-12 md:col-span-8 flex flex-col gap-4 rounded-2xl border ${cardBg} p-8`}>
            <h4 className={`text-xl font-bold ${titleColor} mb-4 flex items-center gap-2`}>
              <Lightbulb className="text-red-500" />
              Análise Estratégica
            </h4>
            {d.insights_bullets?.map((insight: string, i: number) => (
              <div key={i} className={`flex gap-4 items-start pb-4 border-b ${isLight ? 'border-zinc-200' : 'border-zinc-800'} last:border-0 last:pb-0`}>
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                <p className={`text-lg ${subtitleColor} leading-relaxed`}>{insight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (type === 'moodboard_identity') {
    return (
      <div>
        <h2 className={`text-4xl font-bold ${titleColor} mb-16 text-center`}>{d.titulo}</h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div>
              <h4 className={`text-sm font-bold ${isLight ? 'text-zinc-500' : 'text-zinc-400'} uppercase tracking-widest mb-4`}>Tipografia Principal</h4>
              <p className={`text-5xl font-serif ${titleColor} mb-2`}>{d.tipografia_principal}</p>
              <p className={`text-2xl font-serif ${subtitleColor} italic`}>Libre Baskerville</p>
            </div>
            <div>
              <h4 className={`text-sm font-bold ${isLight ? 'text-zinc-500' : 'text-zinc-400'} uppercase tracking-widest mb-4`}>Tipografia Secundária</h4>
              <p className={`text-4xl font-sans font-bold ${titleColor} mb-2`}>{d.tipografia_secundaria}</p>
              <p className={`text-xl font-sans ${subtitleColor}`}>Google Sans / System UI</p>
            </div>
          </div>
          <div>
            <h4 className={`text-sm font-bold ${isLight ? 'text-zinc-500' : 'text-zinc-400'} uppercase tracking-widest mb-6`}>Paleta de Cores</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {d.paleta_cores?.map((cor: string, i: number) => (
                <div key={i} className="flex flex-col gap-2">
                  <div 
                    className={`w-full aspect-square rounded-2xl shadow-inner border ${isLight ? 'border-zinc-200' : 'border-zinc-800'}`}
                    style={{ backgroundColor: cor }}
                  />
                  <span className={`text-sm font-mono ${subtitleColor} text-center uppercase`}>{cor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'vertical_feature_list') {
    return (
      <div>
        <h2 className={`text-4xl font-bold ${titleColor} text-center mb-16`}>{d.titulo}</h2>
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {d.features?.map((f: any, i: number) => (
            <div key={i} className={`p-8 rounded-2xl border ${cardBg} flex flex-col md:flex-row gap-8 items-start hover:border-red-500/50 transition-colors`}>
              <div className={`w-16 h-16 shrink-0 rounded-2xl ${isLight ? 'bg-zinc-100 border-zinc-200' : 'bg-zinc-950 border-zinc-800'} flex items-center justify-center shadow-inner`}>
                <span className="text-2xl font-bold text-red-600">0{i + 1}</span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className={`text-2xl font-bold ${titleColor}`}>{f.titulo}</h3>
                <p className={`text-lg ${subtitleColor} leading-relaxed`}>{f.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  if (type === 'marketing_4ps_swot') {
    const ps = d['4ps'] || {};
    const swot = d.swot || {};

    return (
      <div className="flex flex-col gap-12 w-full max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className={`text-4xl font-bold ${titleColor} mb-3`}>{d.titulo}</h2>
          {d.subtitulo && <p className={`text-base ${subtitleColor}`}>{d.subtitulo}</p>}
        </div>

        {/* 4 Ps Grid */}
        <div>
          <h3 className={`text-xl font-bold ${titleColor} mb-6 flex items-center gap-2`}>
            <span className="w-8 h-8 rounded-lg bg-red-600 text-white font-mono font-bold flex items-center justify-center text-sm">4P</span>
            Os 4 Ps do Marketing Gabi Cardoso
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className={`p-6 rounded-2xl border ${cardBg} flex flex-col justify-between border-t-4 border-t-emerald-500 shadow-sm`}>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-2">{ps.produto?.titulo || 'Produto'}</span>
                <p className={`text-sm ${subtitleColor} leading-relaxed`}>{ps.produto?.descricao}</p>
              </div>
            </div>
            <div className={`p-6 rounded-2xl border ${cardBg} flex flex-col justify-between border-t-4 border-t-indigo-500 shadow-sm`}>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 block mb-2">{ps.preco?.titulo || 'Preço'}</span>
                <p className={`text-sm ${subtitleColor} leading-relaxed`}>{ps.preco?.descricao}</p>
              </div>
            </div>
            <div className={`p-6 rounded-2xl border ${cardBg} flex flex-col justify-between border-t-4 border-t-blue-500 shadow-sm`}>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">{ps.praca?.titulo || 'Praça'}</span>
                <p className={`text-sm ${subtitleColor} leading-relaxed`}>{ps.praca?.descricao}</p>
              </div>
            </div>
            <div className={`p-6 rounded-2xl border ${cardBg} flex flex-col justify-between border-t-4 border-t-red-500 shadow-sm`}>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 block mb-2">{ps.promocao?.titulo || 'Promoção'}</span>
                <p className={`text-sm ${subtitleColor} leading-relaxed`}>{ps.promocao?.descricao}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Análise SWOT / FOFA Grid */}
        <div>
          <h3 className={`text-xl font-bold ${titleColor} mb-6 flex items-center gap-2`}>
            <Sparkles className="w-5 h-5 text-amber-500" />
            Análise SWOT / FOFA Matriz Estratégica
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Forças */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-emerald-50/60 border-emerald-200' : 'bg-emerald-950/20 border-emerald-900/40'} flex flex-col gap-4 shadow-sm`}>
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-lg border-b pb-3 border-emerald-200 dark:border-emerald-800">
                <CheckCircle2 className="w-6 h-6" />
                <span>Forças (Strengths)</span>
              </div>
              <ul className="space-y-2.5 text-xs md:text-sm">
                {swot.forcas?.map((item: string, i: number) => (
                  <li key={i} className={`flex items-start gap-2.5 ${isLight ? 'text-zinc-800' : 'text-zinc-200'}`}>
                    <span className="text-emerald-500 font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Oportunidades */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-blue-50/60 border-blue-200' : 'bg-blue-950/20 border-blue-900/40'} flex flex-col gap-4 shadow-sm`}>
              <div className="flex items-center gap-2 text-blue-600 font-bold text-lg border-b pb-3 border-blue-200 dark:border-blue-800">
                <Rocket className="w-6 h-6" />
                <span>Oportunidades (Opportunities)</span>
              </div>
              <ul className="space-y-2.5 text-xs md:text-sm">
                {swot.oportunidades?.map((item: string, i: number) => (
                  <li key={i} className={`flex items-start gap-2.5 ${isLight ? 'text-zinc-800' : 'text-zinc-200'}`}>
                    <span className="text-blue-500 font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fraquezas */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-amber-50/60 border-amber-200' : 'bg-amber-950/20 border-amber-900/40'} flex flex-col gap-4 shadow-sm`}>
              <div className="flex items-center gap-2 text-amber-600 font-bold text-lg border-b pb-3 border-amber-200 dark:border-amber-800">
                <AlertTriangle className="w-6 h-6" />
                <span>Fraquezas (Weaknesses)</span>
              </div>
              <ul className="space-y-2.5 text-xs md:text-sm">
                {swot.fraquezas?.map((item: string, i: number) => (
                  <li key={i} className={`flex items-start gap-2.5 ${isLight ? 'text-zinc-800' : 'text-zinc-200'}`}>
                    <span className="text-amber-500 font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ameaças */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-rose-50/60 border-rose-200' : 'bg-rose-950/20 border-rose-900/40'} flex flex-col gap-4 shadow-sm`}>
              <div className="flex items-center gap-2 text-rose-600 font-bold text-lg border-b pb-3 border-rose-200 dark:border-rose-800">
                <ShieldAlert className="w-6 h-6" />
                <span>Ameaças (Threats)</span>
              </div>
              <ul className="space-y-2.5 text-xs md:text-sm">
                {swot.ameacas?.map((item: string, i: number) => (
                  <li key={i} className={`flex items-start gap-2.5 ${isLight ? 'text-zinc-800' : 'text-zinc-200'}`}>
                    <span className="text-rose-500 font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'matriz_cvba_oferta') {
    const cvba = d.cvba_itens || [];
    const kits = d.kits_oferta || [];
    const upsells = d.upsells || [];

    return (
      <div className="flex flex-col gap-12 w-full max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className={`text-4xl font-bold ${titleColor} mb-3`}>{d.titulo}</h2>
          {d.subtitulo && <p className={`text-base ${subtitleColor}`}>{d.subtitulo}</p>}
        </div>

        {/* Matriz CVBA Cards - 4 Quadrantes por Item com Fundo Claro e Alto Contraste */}
        <div>
          <h3 className={`text-xl font-bold ${titleColor} mb-6 flex items-center gap-2`}>
            <Layers className="w-5 h-5 text-red-600" />
            Matriz CVBA & Atenção (Características, Vantagens, Benefícios & Hooks)
          </h3>
          <div className="flex flex-col gap-6">
            {cvba.map((item: any, i: number) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-md flex flex-col gap-4 text-zinc-900">
                <div className="flex items-center justify-between border-b pb-3 border-zinc-200">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-red-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                      0{i + 1}
                    </span>
                    <h4 className="text-xl font-bold text-zinc-900">{item.produto}</h4>
                  </div>
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider px-3 py-1 bg-red-50 rounded-full border border-red-100">
                    Matriz 4 Quadrantes
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs md:text-sm">
                  {/* 1. Característica */}
                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between">
                    <div>
                      <span className="text-zinc-500 font-extrabold uppercase text-[10px] block mb-1">
                        1. Característica (C)
                      </span>
                      <p className="text-zinc-900 font-medium leading-relaxed">{item.caracteristica}</p>
                    </div>
                  </div>

                  {/* 2. Vantagem */}
                  <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 flex flex-col justify-between">
                    <div>
                      <span className="text-blue-700 font-extrabold uppercase text-[10px] block mb-1">
                        2. Vantagem (V)
                      </span>
                      <p className="text-zinc-900 font-medium leading-relaxed">{item.vantagem}</p>
                    </div>
                  </div>

                  {/* 3. Benefício Real */}
                  <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 flex flex-col justify-between">
                    <div>
                      <span className="text-emerald-700 font-extrabold uppercase text-[10px] block mb-1">
                        3. Benefício Real (B)
                      </span>
                      <p className="text-zinc-900 font-medium leading-relaxed">{item.beneficio}</p>
                    </div>
                  </div>

                  {/* 4. Atenção (Atração / Hook Anúncio) */}
                  <div className="p-4 rounded-xl bg-red-50/80 border border-red-200 flex flex-col justify-between">
                    <div>
                      <span className="text-red-700 font-extrabold uppercase text-[10px] block mb-1">
                        4. Atenção (Atração / Hook)
                      </span>
                      <p className="text-red-900 font-bold leading-relaxed">{item.hook_anuncio}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Matriz de Ofertas / Kits 1-4 */}
        <div>
          <h3 className={`text-xl font-bold ${titleColor} mb-6 flex items-center gap-2`}>
            <ShoppingCart className="w-5 h-5 text-indigo-500" />
            Matriz de Oferta & Kits Enxoval Coordenado
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {kits.map((kit: any, i: number) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm flex flex-col justify-between relative overflow-hidden text-zinc-900">
                {kit.badge && (
                  <span className={`absolute top-0 right-0 px-3 py-1 text-[10px] font-extrabold uppercase rounded-bl-xl text-white ${i === 3 ? 'bg-red-600' : 'bg-indigo-600'}`}>
                    {kit.badge}
                  </span>
                )}
                <div>
                  <h4 className="text-lg font-bold text-zinc-900 mb-1">{kit.nome}</h4>
                  <span className="text-2xl font-black text-emerald-600 block mb-3">{kit.preco}</span>
                  <p className="text-xs text-zinc-600 font-medium leading-relaxed mb-4 pb-3 border-b border-zinc-200">
                    <strong className="text-zinc-900">Itens:</strong> {kit.itens}
                  </p>
                </div>
                <p className="text-xs text-zinc-500 italic">
                  {kit.perfil}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Upsells & Adicionais de Tíquete (Fundo Branco Limpo com Alto Contraste) */}
        <div className="p-6 rounded-2xl bg-white border-2 border-amber-400 shadow-md flex flex-col gap-4 text-zinc-900">
          <div className="flex items-center gap-2 text-amber-800 font-bold text-base border-b pb-3 border-amber-200">
            <Zap className="w-5 h-5 text-amber-500 shrink-0" />
            <span>Adicionais de Tíquete & Alavancas de Upsell (+R$ 20 a R$ 50 por pedido)</span>
          </div>
          <div className="grid md:grid-cols-2 gap-3 text-xs md:text-sm">
            {upsells.map((up: string, i: number) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 font-medium shadow-2xs">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-white font-bold font-mono text-xs flex items-center justify-center shrink-0">
                  +
                </span>
                <span className="text-zinc-900 font-semibold">{up}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'manual_copy_identidade') {
    const arquetipos = d.arquetipos || [];
    const diretrizes = d.diretrizes_comunicacao || {};
    const formatos = d.formatos_criativos || [];

    return (
      <div className="flex flex-col gap-12 w-full max-w-6xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 text-red-600 font-bold text-xs uppercase tracking-widest mb-3">
            Guia de Comunicação & Ativos Criativos
          </span>
          <h2 className={`text-4xl font-bold ${titleColor} mb-3`}>{d.titulo}</h2>
          {d.subtitulo && <p className={`text-base ${subtitleColor}`}>{d.subtitulo}</p>}
        </div>

        {/* 1. Arquétipos & Personalidade da Marca */}
        <div>
          <h3 className={`text-xl font-bold ${titleColor} mb-6 flex items-center gap-2`}>
            <Users className="w-5 h-5 text-indigo-500" />
            1. Arquétipos de Marca & Personalidade
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {arquetipos.map((arq: any, i: number) => (
              <div key={i} className={`p-6 rounded-2xl border ${cardBg} flex flex-col justify-between shadow-sm border-t-4 ${i === 0 ? 'border-t-red-600' : 'border-t-indigo-600'}`}>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-red-600 block mb-1">{arq.papel}</span>
                  <h4 className={`text-xl font-bold ${titleColor} mb-3`}>{arq.nome}</h4>
                  <p className={`text-sm ${subtitleColor} leading-relaxed`}>{arq.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Diretrizes de Tom de Voz & Palavras a Utilizar vs Evitar */}
        <div className={`p-8 rounded-3xl border ${cardBg} shadow-xl flex flex-col gap-6`}>
          <div className="border-b pb-4 border-zinc-200 dark:border-zinc-800">
            <h3 className={`text-xl font-bold ${titleColor} mb-2`}>
              2. Tom de Voz & Diretrizes de Comunicação
            </h3>
            <p className={`text-sm ${subtitleColor} italic mb-2`}>
              <strong>Tom oficial:</strong> {diretrizes.tom_de_voz}
            </p>
            <p className={`text-xs ${titleColor} leading-relaxed`}>
              <strong>Como e onde falar:</strong> {diretrizes.como_falar}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Palavras Recomendadas */}
            <div className={`p-5 rounded-2xl border ${isLight ? 'bg-emerald-50/70 border-emerald-200' : 'bg-emerald-950/20 border-emerald-900/40'} flex flex-col gap-3`}>
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>Palavras & Expressões Recomendadas</span>
              </div>
              <ul className="space-y-2 text-xs md:text-sm">
                {diretrizes.palavras_recomendadas?.map((palavra: string, i: number) => (
                  <li key={i} className={`flex items-start gap-2 ${isLight ? 'text-zinc-800' : 'text-zinc-200'}`}>
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{palavra}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Palavras a Evitar */}
            <div className={`p-5 rounded-2xl border ${isLight ? 'bg-rose-50/70 border-rose-200' : 'bg-rose-950/20 border-rose-900/40'} flex flex-col gap-3`}>
              <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                <Ban className="w-5 h-5" />
                <span>Expressões a Evitar Absolutamente</span>
              </div>
              <ul className="space-y-2 text-xs md:text-sm">
                {diretrizes.palavras_evitar?.map((palavra: string, i: number) => (
                  <li key={i} className={`flex items-start gap-2 ${isLight ? 'text-zinc-800' : 'text-zinc-200'}`}>
                    <span className="text-rose-500 font-bold">•</span>
                    <span>{palavra}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 3. Matriz de Formatos de Criativos */}
        <div>
          <h3 className={`text-xl font-bold ${titleColor} mb-6 flex items-center gap-2`}>
            <Video className="w-5 h-5 text-red-600" />
            3. Matriz e Formatos de Criativos (Direcionamento do Ateliê)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {formatos.map((f: any, i: number) => (
              <div key={i} className={`p-5 rounded-2xl border ${cardBg} flex flex-col justify-between shadow-sm relative`}>
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-full bg-red-600/10 text-red-600 font-extrabold text-[10px] uppercase mb-3">
                    {f.funil}
                  </span>
                  <h4 className={`text-base font-bold ${titleColor} mb-2`}>{f.formato}</h4>
                  <p className={`text-xs ${subtitleColor} leading-relaxed`}>{f.foco}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'persona_profile') {
    return (
      <div className={`p-8 md:p-12 rounded-3xl border ${cardBg}`}>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${isLight ? 'bg-red-100' : 'bg-red-950/30'} text-red-500 font-bold mb-6`}>
              <Target className="w-5 h-5" /> Persona {d.numero_persona}
            </div>
            <h2 className={`text-4xl font-bold ${titleColor} mb-8 leading-tight`}>{d.nome_persona}</h2>
            <div className="flex flex-col gap-4 mb-8">
              <div className={`pb-3 border-b ${isLight ? 'border-zinc-200' : 'border-zinc-800'}`}>
                 <span className="text-zinc-500 block text-xs uppercase mb-1">Dispositivo</span>
                 <span className={`font-bold text-sm ${titleColor}`}>{d.dispositivo}</span>
              </div>
              <div className={`pb-3 border-b ${isLight ? 'border-zinc-200' : 'border-zinc-800'}`}>
                 <span className="text-zinc-500 block text-xs uppercase mb-1">Canais</span>
                 <span className={`font-bold text-sm ${titleColor}`}>{d.canais}</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className={`flex justify-between border-b ${isLight ? 'border-zinc-200' : 'border-zinc-800'} pb-2`}>
                <span className={subtitleColor}>Local</span>
                <span className={titleColor}>{d.local}</span>
              </div>
              <div className={`flex justify-between border-b ${isLight ? 'border-zinc-200' : 'border-zinc-800'} pb-2`}>
                <span className={subtitleColor}>Idade</span>
                <span className={titleColor}>{d.idade}</span>
              </div>
              <div className={`flex justify-between border-b ${isLight ? 'border-zinc-200' : 'border-zinc-800'} pb-2`}>
                <span className={subtitleColor}>Renda</span>
                <span className={titleColor}>{d.renda}</span>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 flex flex-col justify-center gap-4 divide-y divide-zinc-200 dark:divide-zinc-800">
            <div className={`py-6 border-b ${isLight ? 'border-zinc-200' : 'border-zinc-800'}`}>
              <h4 className="text-lg font-bold text-red-500 mb-4 flex items-center gap-2">Dores</h4>
              <ul className="space-y-3">
                {d.dores_bullets?.map((item: string, i: number) => (
                  <li key={i} className={`flex gap-3 text-lg ${subtitleColor} leading-relaxed`}><span className="text-red-600 mt-1.5">•</span> {item}</li>
                ))}
              </ul>
            </div>
            <div className={`py-6 border-b ${isLight ? 'border-zinc-200' : 'border-zinc-800'}`}>
              <h4 className="text-lg font-bold text-emerald-500 mb-4 flex items-center gap-2">Desejos</h4>
              <ul className="space-y-3">
                {d.desejos_bullets?.map((item: string, i: number) => (
                  <li key={i} className={`flex gap-3 text-lg ${subtitleColor} leading-relaxed`}><span className="text-emerald-600 mt-1.5">•</span> {item}</li>
                ))}
              </ul>
            </div>
            <div className="py-6">
              <h4 className="text-lg font-bold text-amber-500 mb-4 flex items-center gap-2">Objeções de Compra</h4>
              <ul className="space-y-3">
                {d.objecoes_bullets?.map((item: string, i: number) => (
                  <li key={i} className={`flex gap-3 text-lg ${subtitleColor} leading-relaxed`}><span className="text-amber-600 mt-1.5">•</span> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'smart_goal_okr') {
    return (
      <div className={`p-12 rounded-3xl border border-red-900/50 bg-gradient-to-br from-zinc-950 to-red-950/20`}>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-red-600 text-white font-bold text-sm tracking-widest uppercase mb-6">{d.fase_projeto}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">{d.titulo}</h2>
          <p className="text-xl md:text-2xl text-red-100 leading-relaxed font-serif italic">{d.objetivo_geral}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((num) => (
            <div key={num} className="bg-black/50 border border-red-900/30 p-6 rounded-2xl flex flex-col gap-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-950 flex items-center justify-center text-red-500 font-bold font-mono">KR{num}</div>
              </div>
              <p className="text-lg text-zinc-300">{d[`kr${num}_texto`]}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (type === 'riscos_dependencias_proximos_passos') {
    const riscosV4 = d.riscos_v4 || []
    const riscosCliente = d.riscos_cliente || []
    const passos = d.proximos_passos_trimestre || []

    return (
      <div className="flex flex-col gap-12 w-full max-w-6xl mx-auto py-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 text-red-500 font-bold text-xs uppercase tracking-widest mb-3">
            Governança & Co-responsabilidade de Execução
          </span>
          <h2 className={`text-4xl font-bold ${titleColor} mb-2`}>{d.titulo}</h2>
          <p className={`text-base ${subtitleColor}`}>
            {d.subtitulo}
          </p>
        </div>

        {/* 1. Matriz de Riscos & Prevenção (Grade 2x2) */}
        <div>
          <h3 className={`text-xl font-bold ${titleColor} mb-6 flex items-center gap-2`}>
            <ShieldAlert className="w-5 h-5 text-red-600" />
            1. Matriz de Riscos Críticos (Impactos & Planos de Prevenção)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(d.riscos_matriz || []).map((item: any, i: number) => {
              const borderAccent = i === 0 ? 'border-t-red-600' : (i === 1 ? 'border-t-amber-500' : (i === 2 ? 'border-t-indigo-600' : 'border-t-rose-600'));
              const badgeBg = i === 0 ? 'bg-red-600/10 text-red-600' : (i === 1 ? 'bg-amber-500/10 text-amber-600' : (i === 2 ? 'bg-indigo-600/10 text-indigo-500' : 'bg-rose-600/10 text-rose-600'));

              return (
                <div key={i} className={`p-6 rounded-3xl border ${cardBg} shadow-xl flex flex-col justify-between border-t-4 ${borderAccent} transition-all duration-300 hover:border-red-500/50`}>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b pb-3 border-zinc-200 dark:border-zinc-800">
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-xl ${badgeBg} font-mono font-bold text-xs flex items-center justify-center shrink-0`}>
                          0{i + 1}
                        </span>
                        <h4 className={`text-lg font-bold ${titleColor}`}>{item.risco}</h4>
                      </div>
                    </div>

                    <div className={`p-4 rounded-2xl border ${isLight ? 'bg-rose-50/60 border-rose-200/70' : 'bg-rose-950/20 border-rose-900/40'} flex flex-col gap-1.5`}>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5" /> Impacto na Operação
                      </span>
                      <p className={`text-xs md:text-sm leading-relaxed ${isLight ? 'text-zinc-800' : 'text-zinc-200'}`}>
                        {item.impacto}
                      </p>
                    </div>

                    <div className={`p-4 rounded-2xl border ${isLight ? 'bg-emerald-50/70 border-emerald-200/80' : 'bg-emerald-950/20 border-emerald-900/40'} flex flex-col gap-1.5`}>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Como Prevenir & Mitigar
                      </span>
                      <p className={`text-xs md:text-sm leading-relaxed ${isLight ? 'text-emerald-950' : 'text-emerald-200'}`}>
                        {item.prevencao || item.mitigacao}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Próximos Passos (Passos 1 ao 4) */}
        <div>
          <h3 className={`text-xl font-bold ${titleColor} mb-6 flex items-center gap-2`}>
            <Rocket className="w-5 h-5 text-emerald-500" />
            2. Próximos Passos & Entregas do 1º Trimestre (Novembro a Janeiro)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {passos.map((p: any, i: number) => (
              <div key={i} className={`p-6 rounded-2xl border ${cardBg} flex flex-col justify-between shadow-lg relative border-l-4 ${i === 0 ? 'border-l-red-600' : (i === 1 ? 'border-l-indigo-600' : (i === 2 ? 'border-l-blue-600' : 'border-l-emerald-600'))}`}>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-red-600/10 text-red-600 font-mono font-bold text-xs mb-3">
                    {p.passo}
                  </span>
                  <h4 className={`text-base font-bold ${titleColor} mb-2`}>{p.titulo}</h4>
                  <p className={`text-xs ${subtitleColor} leading-relaxed`}>{p.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (type === 'campaign_strategy_boxes') {
    return (
      <div>
        <h2 className={`text-4xl font-bold ${titleColor} text-center mb-16`}>{d.titulo}</h2>
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {d.boxes?.map((box: any, i: number) => (
            <div key={i} className={`flex-1 ${cardBg} border rounded-2xl p-8 flex flex-col shadow-sm hover:-translate-y-1 transition-transform`}>
              <span className="text-5xl font-bold text-red-600 mb-4">{box.percentual}</span>
              <h3 className={`text-2xl font-bold ${titleColor} mb-4`}>{box.nome}</h3>
              <p className={`text-lg ${subtitleColor} leading-relaxed`}>{box.detalhes}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (type === 'creative_workflow') {
    const icons: any = { FileText, CheckCircle2, Video, Rocket };

    return (
      <div className="flex flex-col items-center max-w-4xl mx-auto w-full">
        <h2 className={`text-4xl font-bold ${titleColor} mb-4 text-center`}>{d.titulo}</h2>
        <p className={`text-xl ${subtitleColor} mb-16 text-center`}>{d.subtitulo}</p>

        {/* Horizontal Workflow timeline */}
        <div className="flex flex-col md:flex-row items-center w-full justify-between relative mb-16 px-4">
           {/* Connecting Line */}
           <div className={`hidden md:block absolute top-8 left-12 right-12 h-1 -translate-y-1/2 rounded-full ${isLight ? 'bg-zinc-200' : 'bg-zinc-800'} z-0`} />

           {d.passos?.map((passo: any, i: number) => {
             const Icon = icons[passo.icone] || FileText;
             return (
               <div key={i} className="flex flex-col items-center text-center gap-4 group relative z-10 mb-8 md:mb-0 w-32">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border shadow-xl transition-all duration-300 group-hover:-translate-y-2 
                    ${isLight ? 'bg-white border-zinc-200 shadow-zinc-200/50' : 'bg-zinc-950 border-zinc-800 shadow-black/50'}`}>
                    <Icon className="w-7 h-7 text-red-500" />
                  </div>
                  <h4 className={`font-bold ${titleColor} leading-tight`}>{passo.titulo}</h4>
               </div>
             )
           })}
        </div>

        {/* Link / Button */}
        {d.link_exemplo && (
          <div className={`w-full mt-8 p-8 rounded-3xl border ${cardBg} flex flex-col items-center text-center gap-6 shadow-xl`}>
             <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-2">
                <FileText className="w-6 h-6 text-red-500" />
             </div>
             <h3 className={`text-2xl font-bold ${titleColor}`}>Documento de Direcionamento Exemplo:</h3>
             <a href={d.link_exemplo} target="_blank" rel="noreferrer" 
                className="group flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-red-900/20">
                Acessar Documento no Google Docs
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </a>
             <p className={subtitleColor}>Veja o exemplo prático de um roteiro e direcionamento validado em campo.</p>
          </div>
        )}
      </div>
    )
  }


const MetaAdsRaioXComponent = ({ d, isLight }: { d: any; isLight: boolean }) => {
  const [hoveredSafra, setHoveredSafra] = useState<number | null>(null);

  const safras = d.safras_mensais || [];
  const faixas = d.faixas_etarias || [];
  const ranking = d.ranking_principais_campanhas || [];
  const correcoes = d.o_que_corrigir || [];
  const concentracao = d.concentracao_verba || {};
  const genero = d.genero_dados || {};

  // Chart configuration for Safras Mensais
  const maxConversas = 36000;
  const maxCusto = 14;
  const custoMedio = d.custo_medio_conversa || 4.0;

  const svgWidth = 860;
  const svgHeight = 290;
  const paddingLeft = 55;
  const paddingRight = 65;
  const paddingTop = 35;
  const paddingBottom = 45;

  const plotWidth = svgWidth - paddingLeft - paddingRight;
  const plotHeight = svgHeight - paddingTop - paddingBottom;

  const getX = (index: number) => paddingLeft + (index + 0.5) * (plotWidth / safras.length);
  const getYConversas = (val: number) => paddingTop + plotHeight - (val / maxConversas) * plotHeight;
  const getYCusto = (val: number) => paddingTop + plotHeight - (Math.min(val, maxCusto) / maxCusto) * plotHeight;

  const yCustoMedio = getYCusto(custoMedio);

  // Line points for custo per conversa (skip months with zero)
  const validSafrasForLine = safras
    .map((s: any, i: number) => ({ ...s, index: i }))
    .filter((s: any) => s.custo > 0);

  const linePoints = validSafrasForLine
    .map((s: any) => `${getX(s.index)},${getYCusto(s.custo)}`)
    .join(" ");

  const sectionCardBg = isLight ? 'bg-white border-zinc-200' : 'bg-zinc-900/90 border-zinc-800';

  return (
    <div className="w-full flex flex-col gap-8">

      {/* 1. SAFRAS MENSAIS (CHART & BREAKDOWN) */}
      <div className={`w-full rounded-2xl border ${sectionCardBg} p-6 shadow-xl flex flex-col gap-5`}>
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4 border-zinc-200 dark:border-zinc-800">
          <div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-red-600/10 text-red-600">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className={`text-lg font-bold ${isLight ? 'text-zinc-900' : 'text-zinc-100'}`}>
                1. Safras Mensais (Jan - Out/2026)
              </h3>
            </div>
            <p className={`text-xs mt-1 ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
              Evolução mensal de conversas geradas no WhatsApp (barras) vs. oscilação do custo por conversa em R$ (linha)
            </p>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
            <div className="flex items-center gap-2">
              <div className="w-3.5 h-3.5 rounded bg-red-600 shadow-sm" />
              <span className={isLight ? 'text-zinc-700' : 'text-zinc-300'}>Conversas no WhatsApp</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-amber-500 rounded-full" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500 -ml-3.5" />
              <span className={isLight ? 'text-zinc-700' : 'text-zinc-300'}>Custo/Conversa</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 border-b-2 border-dashed border-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">Média: R$ 4,00 / conv</span>
            </div>
          </div>
        </div>

        {/* SVG Chart */}
        <div className="relative w-full overflow-x-auto">
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto min-w-[700px] font-sans">
            {/* Grid lines & Left Y-axis (Conversas) */}
            {[0, 9000, 18000, 27000, 36000].map((val) => {
              const y = getYConversas(val);
              return (
                <g key={val}>
                  <line
                    x1={paddingLeft}
                    y1={y}
                    x2={svgWidth - paddingRight}
                    y2={y}
                    stroke={isLight ? '#f1f5f9' : '#27272a'}
                    strokeWidth="1"
                  />
                  <text
                    x={paddingLeft - 10}
                    y={y + 4}
                    textAnchor="end"
                    fontSize="10"
                    fill={isLight ? '#94a3b8' : '#71717a'}
                    fontWeight="600"
                  >
                    {val >= 1000 ? `${val / 1000}k` : val}
                  </text>
                </g>
              );
            })}

            {/* Right Y-axis (Custo/Conversa em R$) */}
            {[0, 3.5, 7, 10.5, 14].map((val) => {
              const y = getYCusto(val);
              return (
                <text
                  key={val}
                  x={svgWidth - paddingRight + 10}
                  y={y + 4}
                  textAnchor="start"
                  fontSize="10"
                  fill="#f59e0b"
                  fontWeight="700"
                >
                  R${val.toFixed(1).replace('.0', '')}
                </text>
              );
            })}

            {/* Reference line for R$ 4,00 average */}
            <line
              x1={paddingLeft}
              y1={yCustoMedio}
              x2={svgWidth - paddingRight}
              y2={yCustoMedio}
              stroke="#10b981"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <text
              x={svgWidth - paddingRight - 8}
              y={yCustoMedio - 6}
              textAnchor="end"
              fontSize="10"
              fill="#10b981"
              fontWeight="bold"
            >
              Média Geral: R$ 4,00 / conversa
            </text>

            {/* Bars for Conversas */}
            {safras.map((s: any, i: number) => {
              const x = getX(i);
              const barWidth = 36;
              const barHeight = (s.conversas / maxConversas) * plotHeight;
              const y = getYConversas(s.conversas);
              const isHovered = hoveredSafra === i;

              return (
                <g
                  key={i}
                  className="cursor-pointer transition-all duration-200"
                  onMouseEnter={() => setHoveredSafra(i)}
                  onMouseLeave={() => setHoveredSafra(null)}
                >
                  <rect
                    x={x - barWidth / 2}
                    y={y}
                    width={barWidth}
                    height={Math.max(barHeight, 2)}
                    rx="6"
                    fill={s.custo > 6 ? '#f43f5e' : (s.custo > 0 && s.custo <= 3.5 ? '#10b981' : '#dc2626')}
                    opacity={isHovered ? 1 : 0.85}
                  />
                  
                  {/* Conversas label on top */}
                  {s.conversas > 0 && (
                    <text
                      x={x}
                      y={y - 6}
                      textAnchor="middle"
                      fontSize="10"
                      fontWeight="bold"
                      fill={isLight ? '#1e293b' : '#f8fafc'}
                    >
                      {s.conversas >= 1000 ? `${(s.conversas / 1000).toFixed(1)}k` : s.conversas}
                    </text>
                  )}

                  {/* Month name label */}
                  <text
                    x={x}
                    y={svgHeight - 15}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight={isHovered ? 'bold' : '600'}
                    fill={isHovered ? '#dc2626' : isLight ? '#475569' : '#a1a1aa'}
                  >
                    {s.mes}
                  </text>
                </g>
              );
            })}

            {/* Line path for Custo */}
            <polyline
              fill="none"
              stroke="#f59e0b"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={linePoints}
            />

            {/* Points & badges for Custo */}
            {validSafrasForLine.map((s: any) => {
              const x = getX(s.index);
              const y = getYCusto(s.custo);
              const isHovered = hoveredSafra === s.index;

              return (
                <g
                  key={s.index}
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredSafra(s.index)}
                  onMouseLeave={() => setHoveredSafra(null)}
                >
                  <circle
                    cx={x}
                    cy={y}
                    r={isHovered ? 7 : 4.5}
                    fill="#f59e0b"
                    stroke={isLight ? '#ffffff' : '#18181b'}
                    strokeWidth="2"
                  />

                  {/* Cost Badge */}
                  <g transform={`translate(${x}, ${y + (s.index % 2 === 0 ? -14 : 16)})`}>
                    <rect
                      x="-22"
                      y="-8"
                      width="44"
                      height="16"
                      rx="8"
                      fill={isLight ? '#fffbeb' : '#451a03'}
                      stroke="#f59e0b"
                      strokeWidth="1"
                    />
                    <text
                      x="0"
                      y="3.5"
                      textAnchor="middle"
                      fontSize="9"
                      fontWeight="800"
                      fill={isLight ? '#b45309' : '#fbbf24'}
                    >
                      R${s.custo.toFixed(2).replace('.', ',')}
                    </text>
                  </g>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Interactive Dynamic Hover or Default Safra Highlights */}
        {hoveredSafra !== null ? (
          <div className={`p-4 rounded-xl border transition-all ${isLight ? 'bg-red-50/90 border-red-200' : 'bg-red-950/30 border-red-900/50'} flex flex-col md:flex-row md:items-center justify-between gap-4`}>
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="text-xl font-black text-red-600">{safras[hoveredSafra].mes} 2026</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-red-600/10 text-red-600 font-bold">
                  {safras[hoveredSafra].campanhas} campanha{safras[hoveredSafra].campanhas === 1 ? '' : 's'} lançada{safras[hoveredSafra].campanhas === 1 ? '' : 's'}
                </span>
              </div>
              <p className={`text-xs mt-1 ${isLight ? 'text-zinc-700' : 'text-zinc-300'}`}>
                {safras[hoveredSafra].destaque}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-xs font-bold">
              <div>Investido: <span className="text-indigo-600">R$ {safras[hoveredSafra].investido.toLocaleString('pt-BR')}</span></div>
              <div>Conversas: <span className="text-red-600">{safras[hoveredSafra].conversas.toLocaleString('pt-BR')}</span></div>
              <div>Custo/Conversa: <span className="text-amber-600">{safras[hoveredSafra].custo > 0 ? `R$ ${safras[hoveredSafra].custo.toFixed(2).replace('.', ',')}` : 'Sem lançamento'}</span></div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-3 text-xs leading-relaxed">
            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900' : 'bg-emerald-950/20 border-emerald-900/40 text-emerald-300'} flex items-start gap-2.5`}>
              <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Safra Campeã (Agosto - R$ 2,89/conversa):</strong> 9.771 conversas impulsionadas pelo anúncio "VENDAS cabelo preto" (R$ 2,86) e foto simples (R$ 2,21).
              </div>
            </div>
            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-blue-50/80 border-blue-200 text-blue-900' : 'bg-blue-950/20 border-blue-900/40 text-blue-300'} flex items-start gap-2.5`}>
              <Layers className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong>Safra Pilar (Janeiro - R$ 134,5 mil investidos):</strong> Entrada de "TESTE GABI 1", campanha que gerou 32.242 conversas e segue ativa e estável há 10 meses.
              </div>
            </div>
            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-rose-50/80 border-rose-200 text-rose-900' : 'bg-rose-950/20 border-rose-900/40 text-rose-300'} flex items-start gap-2.5`}>
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <strong>Pior Safra com Verba (Junho - R$ 6,91/conversa):</strong> Linha "TESTE JULIA" queimou R$ 16,9 mil a custos abusivos (R$ 6,19 a R$ 7,24/conversa).
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 2. DEMOGRAFIA & PÚBLICOS */}
      <div className={`w-full rounded-2xl border ${sectionCardBg} p-6 shadow-xl flex flex-col gap-6`}>
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4 border-zinc-200 dark:border-zinc-800">
          <div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-red-600/10 text-red-600">
                <Users className="w-5 h-5" />
              </div>
              <h3 className={`text-lg font-bold ${isLight ? 'text-zinc-900' : 'text-zinc-100'}`}>
                2. Demografia & Públicos (Idade & Gênero)
              </h3>
            </div>
            <p className={`text-xs mt-1 ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
              Mapeamento de perfil por faixa etária e gênero para alocação de verba no Meta Ads
            </p>
          </div>
          <span className="text-xs text-red-600 font-bold px-3 py-1 bg-red-600/10 rounded-full">
            35 a 64 anos = 76% do total de conversas
          </span>
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          {/* Faixas Etárias (Left 8 cols) */}
          <div className={`md:col-span-8 p-5 rounded-2xl border ${isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-zinc-950 border-zinc-800'}`}>
            <div className="flex items-center justify-between mb-4">
              <h4 className={`text-sm font-bold ${isLight ? 'text-zinc-900' : 'text-zinc-100'} flex items-center gap-2`}>
                <Users className="w-4 h-4 text-red-600" />
                Distribuição por Faixa Etária (Volume vs. Custo/Conversa)
              </h4>
            </div>

            <div className="flex flex-col gap-3">
              {faixas.map((f: any, i: number) => {
                const isCore = f.faixa === '45-54' || f.faixa === '35-44' || f.faixa === '55-64';
                return (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className={`w-16 font-mono ${isCore ? 'text-red-600 font-bold' : (isLight ? 'text-zinc-700' : 'text-zinc-300')}`}>
                        {f.faixa} anos
                      </span>
                      <span className="text-zinc-500 font-normal">
                        {f.conversas.toLocaleString('pt-BR')} conversas ({f.pct_conversas}%)
                      </span>
                      <div className="flex items-center gap-4 text-right">
                        <span className="text-zinc-400 font-normal">CPM: R$ {f.cpm.toFixed(2).replace('.', ',')}</span>
                        <span className={`font-mono font-bold ${f.custo <= 3.8 ? 'text-emerald-600' : 'text-amber-600'}`}>
                          R$ {f.custo.toFixed(2).replace('.', ',')} / conv
                        </span>
                      </div>
                    </div>

                    {/* Bar comparison */}
                    <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-2.5 rounded-full overflow-hidden flex">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${isCore ? 'bg-red-600' : 'bg-zinc-400'}`}
                        style={{ width: `${(f.pct_conversas / 35) * 100}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-700 dark:text-amber-300 flex items-start gap-2">
              <Lightbulb className="w-4 h-4 shrink-0 mt-0.5 text-amber-500" />
              <span>
                <strong>Insight Demográfico:</strong> O público de 45 a 64 anos responde por mais de 54% das conversas (44.026 contatos). Mães maduras e avós que compram o enxoval completo de presente para netos têm tíquete médio mais alto e menos fricção com preço.
              </span>
            </div>
          </div>

          {/* Gênero Breakdown (Right 4 cols) */}
          <div className={`md:col-span-4 p-5 rounded-2xl border ${isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-zinc-950 border-zinc-800'} flex flex-col justify-between`}>
            <div>
              <h4 className={`text-sm font-bold ${isLight ? 'text-zinc-900' : 'text-zinc-100'} mb-4 flex items-center gap-2`}>
                <PieChart className="w-4 h-4 text-indigo-500" />
                Divisão de Gênero
              </h4>

              <div className="flex flex-col gap-4">
                {/* Mulheres */}
                <div className="p-3.5 rounded-xl border border-red-500/30 bg-red-500/5 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-red-600">Mulheres (95,0% da verba)</span>
                    <span className="text-red-600">76.186 conversas</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-zinc-500">
                    <span>Investido: R$ 307.209</span>
                    <span className="font-bold text-zinc-700 dark:text-zinc-300">R$ 4,03 / conv</span>
                  </div>
                </div>

                {/* Homens */}
                <div className="p-3.5 rounded-xl border border-indigo-500/30 bg-indigo-500/5 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-indigo-600">Homens (4,2% da verba)</span>
                    <span className="text-indigo-600">3.897 conversas</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-zinc-500">
                    <span>Investido: R$ 13.585</span>
                    <span className="font-bold text-emerald-600">R$ 3,49 / conv (-13%)</span>
                  </div>
                </div>

                {/* Não informado */}
                <div className="p-3 rounded-xl border border-zinc-300 dark:border-zinc-700 text-xs text-zinc-400 flex items-center justify-between">
                  <span>Não informado: 0,8%</span>
                  <span>760 conv (R$ 3,57)</span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-xs text-indigo-700 dark:text-indigo-300">
              <strong>Oportunidade Homens:</strong> Custo por conversa 13% menor (R$ 3,49). Excelente alavanca para datas sazonais (Natal, Dia dos Pais, presentes de padrinhos/tios).
            </div>
          </div>
        </div>
      </div>

      {/* 3. RANKING DAS CAMPEÃS & CONCENTRAÇÃO */}
      <div className={`w-full rounded-2xl border ${sectionCardBg} p-6 shadow-xl flex flex-col gap-6`}>
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4 border-zinc-200 dark:border-zinc-800">
          <div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-red-600/10 text-red-600">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className={`text-lg font-bold ${isLight ? 'text-zinc-900' : 'text-zinc-100'}`}>
                3. Ranking das Campeãs & Concentração de Verba
              </h3>
            </div>
            <p className={`text-xs mt-1 ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
              Análise de performance das maiores campanhas e eficiência de alocação de mídia
            </p>
          </div>
        </div>

        {/* 4 Concentration Metric Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className={`p-4 rounded-xl border ${isLight ? 'bg-red-50/60 border-red-200' : 'bg-red-950/20 border-red-900/40'} flex flex-col gap-1`}>
            <span className="text-xs uppercase tracking-wider text-red-600 font-bold">60% em 2 Campanhas</span>
            <span className="text-xl font-black text-red-600">49.595 conv</span>
            <span className="text-[11px] text-zinc-500">"TESTE GABI 1" (39%) + "vestido verde" (21%)</span>
          </div>
          <div className={`p-4 rounded-xl border ${isLight ? 'bg-indigo-50/60 border-indigo-200' : 'bg-indigo-950/20 border-indigo-900/40'} flex flex-col gap-1`}>
            <span className="text-xs uppercase tracking-wider text-indigo-600 font-bold">88% nas 7 Maiores</span>
            <span className="text-xl font-black text-indigo-600">R$ 292 mil</span>
            <span className="text-[11px] text-zinc-500">As outras 70 campanhas dividiram 12% da verba</span>
          </div>
          <div className={`p-4 rounded-xl border ${isLight ? 'bg-emerald-50/60 border-emerald-200' : 'bg-emerald-950/20 border-emerald-900/40'} flex flex-col gap-1`}>
            <span className="text-xs uppercase tracking-wider text-emerald-600 font-bold">Melhor Escala</span>
            <span className="text-xl font-black text-emerald-600">R$ 2,86 / conv</span>
            <span className="text-[11px] text-zinc-500">"VENDAS cabelo preto" (7.584 conversas em Ago)</span>
          </div>
          <div className={`p-4 rounded-xl border ${isLight ? 'bg-rose-50/60 border-rose-200' : 'bg-rose-950/20 border-rose-900/40'} flex flex-col gap-1`}>
            <span className="text-xs uppercase tracking-wider text-rose-600 font-bold">Desperdício em Testes</span>
            <span className="text-xl font-black text-rose-600">~R$ 35 mil</span>
            <span className="text-[11px] text-zinc-500">27 campanhas &gt; R$ 6/conv ou sem conversas</span>
          </div>
        </div>

        {/* Ranking Table */}
        <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
          <table className="w-full text-left text-xs font-sans">
            <thead className={`${isLight ? 'bg-zinc-100 text-zinc-700' : 'bg-zinc-950 text-zinc-300'} uppercase font-bold border-b border-zinc-200 dark:border-zinc-800`}>
              <tr>
                <th className="py-3 px-4">Campanha</th>
                <th className="py-3 px-3">Início</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3">Investido</th>
                <th className="py-3 px-3">Conversas</th>
                <th className="py-3 px-3">Custo / Conv</th>
                <th className="py-3 px-3">CTR Link</th>
                <th className="py-3 px-3">CPM</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${isLight ? 'divide-zinc-200 bg-white' : 'divide-zinc-800 bg-zinc-900/50'}`}>
              {ranking.map((c: any, i: number) => (
                <tr key={i} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                  <td className="py-3 px-4 font-bold flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-red-600/10 text-red-600 font-mono text-[10px] flex items-center justify-center font-bold">
                      0{i + 1}
                    </span>
                    <span>{c.nome}</span>
                  </td>
                  <td className="py-3 px-3 font-mono text-zinc-500">{c.inicio}</td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                      c.status === 'ativa'
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400'
                        : 'bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400'
                    }`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="py-3 px-3 font-mono font-bold">R$ {c.investido.toLocaleString('pt-BR')}</td>
                  <td className="py-3 px-3 font-mono text-red-600 font-bold">{c.conversas.toLocaleString('pt-BR')}</td>
                  <td className="py-3 px-3 font-mono font-black">
                    <span className={c.custo <= 3.0 ? 'text-emerald-600' : (c.custo > 6 ? 'text-rose-600' : 'text-amber-600')}>
                      R$ {c.custo.toFixed(2).replace('.', ',')}
                    </span>
                  </td>
                  <td className="py-3 px-3 font-mono">{c.ctr.toFixed(2)}%</td>
                  <td className="py-3 px-3 font-mono text-zinc-500">R$ {c.cpm.toFixed(2).replace('.', ',')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. 5 CORREÇÕES OBRIGATÓRIAS ANTES DE ESCALAR */}
      <div className={`w-full rounded-2xl border ${sectionCardBg} p-6 shadow-xl flex flex-col gap-6`}>
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4 border-zinc-200 dark:border-zinc-800">
          <div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-red-600/10 text-red-600">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className={`text-lg font-bold ${isLight ? 'text-zinc-900' : 'text-zinc-100'}`}>
                4. 5 Correções Obrigatórias Antes de Escalar
              </h3>
            </div>
            <p className={`text-xs mt-1 ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
              Ajustes estruturais e operacionais imediatos para sanar vazamentos de verba na conta de mídia
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {correcoes.map((cor: any, i: number) => (
            <div key={i} className={`p-4 rounded-2xl border ${isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-zinc-950 border-zinc-800'} flex flex-col justify-between shadow-sm`}>
              <div>
                <div className="w-8 h-8 rounded-xl bg-red-600 text-white font-mono font-bold text-xs flex items-center justify-center mb-3">
                  0{i + 1}
                </div>
                <h5 className={`font-bold text-sm mb-2 ${isLight ? 'text-zinc-900' : 'text-zinc-100'}`}>{cor.ponto}</h5>
                <p className={`text-xs ${isLight ? 'text-zinc-600' : 'text-zinc-400'} mb-3 leading-relaxed`}>
                  <strong className="text-rose-600">Motivo:</strong> {cor.motivo}
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-800 dark:text-emerald-300 font-medium leading-relaxed">
                <strong className="text-emerald-600 block mb-0.5">Ação V4:</strong> {cor.acao}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};


  if (type === 'visual_drawflow') {
    const campanhas = d.campanhas || [];

    return (
      <div className="flex flex-col items-center py-6 w-full overflow-x-auto">
        {/* Header */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className={`text-4xl font-bold ${titleColor}`}>{d.titulo}</h2>
            <p className={`text-base mt-2 ${subtitleColor}`}>
              {d.subtitulo || "Consolidação de 77 campanhas dispersas em 5 eixos estratégicos fixos + etiquetas no WhatsApp e CAPI fechado"}
            </p>
          </div>
        </div>
        
        <div className="min-w-[1000px] w-full flex flex-col items-center relative">
          {/* Top Node: Budget Master */}
          <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-2 border-emerald-500/80 text-white font-extrabold px-10 py-4 rounded-2xl flex items-center gap-4 shadow-2xl z-10">
            <div className="p-2.5 bg-emerald-500/20 rounded-xl">
              <DollarSign className="w-7 h-7 text-emerald-400" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">Orçamento Total Mensal Consolidado</span>
              <span className="text-2xl text-white font-black">{d.orcamento_total || "R$ 30.000 / mês (R$ 1.000 / dia)"}</span>
            </div>
            <div className="ml-4 pl-4 border-l border-zinc-800 text-left">
              <span className="text-[11px] uppercase tracking-wider text-zinc-400 block font-semibold">Objetivo da Conta</span>
              <span className="text-xs text-zinc-200 font-medium">100% Mensagens / WhatsApp com CAPI</span>
            </div>
          </div>

          {/* Vertical line from Top */}
          <div className={`h-8 w-px ${isLight ? 'bg-zinc-300' : 'bg-zinc-700'}`} />
          
          {/* Horizontal span line covering all 5 branches */}
          <div className={`w-[92%] h-px ${isLight ? 'bg-zinc-300' : 'bg-zinc-700'}`} />
          
          {/* 5 Dropdown connectors */}
          <div className="flex w-[92%] justify-between">
            {[0, 1, 2, 3, 4].map((idx) => (
              <div key={idx} className={`h-8 w-px ${isLight ? 'bg-zinc-300' : 'bg-zinc-700'} relative`}>
                <ChevronRight className={`absolute -bottom-2 -left-2.5 w-5 h-5 ${isLight ? 'text-zinc-400' : 'text-zinc-500'} rotate-90`} />
              </div>
            ))}
          </div>

          {/* 5 Consolidated Campaign Branches */}
          <div className="grid grid-cols-5 gap-3 w-full px-2 mt-2 z-10">
            {campanhas.map((camp: any, idx: number) => {
              let badgeColor = "bg-blue-600";
              let borderColor = "border-blue-500/50";
              let textColor = "text-blue-500";
              if (idx === 0) { badgeColor = "bg-red-600"; borderColor = "border-red-500/60"; textColor = "text-red-500"; }
              if (idx === 1) { badgeColor = "bg-emerald-600"; borderColor = "border-emerald-500/60"; textColor = "text-emerald-500"; }
              if (idx === 2) { badgeColor = "bg-amber-600"; borderColor = "border-amber-500/60"; textColor = "text-amber-500"; }
              if (idx === 3) { badgeColor = "bg-indigo-600"; borderColor = "border-indigo-500/60"; textColor = "text-indigo-500"; }
              if (idx === 4) { badgeColor = "bg-purple-600"; borderColor = "border-purple-500/60"; textColor = "text-purple-500"; }

              return (
                <div
                  key={camp.id || idx}
                  className={`${cardBg} p-4 rounded-2xl text-left shadow-lg border-2 ${borderColor} relative flex flex-col justify-between overflow-hidden hover:-translate-y-1 transition-transform`}
                >
                  <div className={`absolute top-0 right-0 ${badgeColor} text-white font-black text-[10px] px-2.5 py-1 rounded-bl-xl uppercase tracking-wider`}>
                    {camp.verba_pct}
                  </div>
                  <div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${textColor} block mb-1`}>
                      {camp.sub}
                    </span>
                    <h4 className={`font-bold text-sm mb-1 ${titleColor} leading-tight`}>
                      {camp.nome}
                    </h4>
                    <p className="text-base font-black text-emerald-600 mb-2">
                      {camp.verba_mes} <span className="text-[10px] font-normal text-zinc-500">/mês ({camp.verba_dia}/dia)</span>
                    </p>
                    <div className={`text-[11px] ${isLight ? 'text-zinc-600' : 'text-zinc-300'} space-y-1.5`}>
                      <p><strong>Público:</strong> {camp.publico}</p>
                      <p className="leading-snug text-zinc-500 dark:text-zinc-400"><strong>Criativos:</strong> {camp.criativos}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Convergence Paths (Lines from 5 Branches to Center Triage Node) */}
          <div className="w-full flex flex-col items-center relative pt-4">
            <div className="flex w-[92%] justify-between">
              {[0, 1, 2, 3, 4].map((idx) => (
                <div key={idx} className={`h-6 w-px ${isLight ? 'bg-zinc-300' : 'bg-zinc-700'}`} />
              ))}
            </div>
            <div className={`w-[92%] h-0.5 bg-gradient-to-r from-red-600 via-emerald-600 to-purple-600`} />
            <div className="h-6 w-px bg-red-600 relative">
              <ChevronRight className="absolute -bottom-2 -left-2.5 w-5 h-5 text-red-600 rotate-90" />
            </div>

            {/* Central Node 1: WhatsApp Business + SDR IA */}
            <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white font-bold p-5 rounded-2xl shadow-2xl shadow-red-900/30 flex items-center justify-between gap-6 mt-2 z-10 w-full max-w-3xl">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl shrink-0">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-xl font-black block mb-1">Atendimento com SDR IA + WhatsApp Business</span>
                  <span className="text-xs font-normal text-red-100 block leading-relaxed">
                    Qualificação imediata de 220 a 310 conversas/dia: bebê próprio vs. presente, menino/menina, tema e kit (Kits 1 a 4). Resposta instantânea e direcionamento para fechamento Pix.
                  </span>
                </div>
              </div>
            </div>

            {/* Connector to Kommo CRM */}
            <div className="h-8 w-px bg-emerald-500 relative">
              <ChevronRight className="absolute -bottom-2 -left-2.5 w-5 h-5 text-emerald-500 rotate-90" />
            </div>

            {/* Central Node 2: Kommo CRM Tracking & Pipeline Stages */}
            <div className={`${isLight ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-emerald-950/40 border-emerald-500/50 text-emerald-100'} border-2 p-5 rounded-2xl shadow-xl flex items-center justify-between gap-6 z-10 w-full max-w-3xl`}>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-500 text-white rounded-xl shrink-0 shadow-md">
                  <Database className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-black block text-emerald-800 dark:text-emerald-300">
                      Acompanhamento de Etapas & Gestão Comercial no Kommo CRM
                    </span>
                  </div>
                  <p className={`text-xs ${isLight ? 'text-emerald-900' : 'text-emerald-200'} leading-relaxed`}>
                    Com o acompanhamento dentro do Kommo, temos a etiquetagem automática e o controle de todas as etapas do funil para rastrear com precisão o volume de vendas e a conversão de cada fase comercial.
                  </p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[10px] uppercase font-bold text-emerald-700 dark:text-emerald-400 block">Vendas Rastreadas</span>
                <span className="text-base font-black text-emerald-600 dark:text-emerald-400">228 a 609</span>
                <span className="text-[10px] block text-zinc-500">pedidos / mês</span>
              </div>
            </div>

            {/* Connector to Final Production & Post-Sales Node */}
            <div className="h-8 w-px bg-zinc-400 relative">
              <ChevronRight className="absolute -bottom-2 -left-2.5 w-5 h-5 text-zinc-400 rotate-90" />
            </div>

            {/* Final Node: Production & Retention CRM */}
            <div className={`${isLight ? 'bg-zinc-100 border-zinc-300 text-zinc-900' : 'bg-zinc-900 border-zinc-700 text-zinc-100'} border-2 px-8 py-4 rounded-2xl flex items-center gap-4 shadow-lg max-w-2xl w-full justify-between z-10`}>
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-zinc-200 dark:bg-zinc-800 rounded-xl">
                  <RefreshCw className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <span className="text-sm font-black block">Produção, Experiência Sensorial & Retenção CRM</span>
                  <span className={`text-[11px] ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    Cheirinho Gabi Cardoso • Recompra futura & indicação de amigas gestantes
                  </span>
                </div>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-red-600 text-white font-bold shrink-0">Retenção</span>
            </div>

          </div>
        </div>
      </div>
    );
  }

  if (type === 'drawflow_fase2_longo_prazo') {
    const fases = d.fases_verticais || [];
    const inovacoes = d.inovacoes_contextualizadas || [];
    const iconMap: Record<string, any> = { Send, Users, Sparkles };

    return (
      <div className="flex flex-col gap-12 w-full max-w-6xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 text-red-500 font-bold text-xs uppercase tracking-widest mb-3">
            Planejamento Semestral de Vendas
          </span>
          <h2 className={`text-4xl font-bold ${titleColor} mb-3`}>{d.titulo}</h2>
          {d.subtitulo && <p className={`text-base ${subtitleColor}`}>{d.subtitulo}</p>}
        </div>

        {/* Vertical Roadmap / Timeline */}
        <div className="flex flex-col gap-8 relative pl-4 md:pl-8 border-l-2 border-zinc-800">
          {fases.map((f: any, i: number) => {
            const isFase2 = i === 1;
            const isFase3 = i === 2;

            return (
              <div key={i} className="relative flex flex-col gap-4 group">
                {/* Timeline Dot */}
                <div className={`absolute -left-[25px] md:-left-[41px] top-1.5 w-6 h-6 rounded-full border-4 ${isFase2 ? 'border-indigo-500 bg-black' : (isFase3 ? 'border-emerald-500 bg-black' : 'border-red-600 bg-black')}`} />

                <div className={`p-6 md:p-8 rounded-3xl border ${cardBg} shadow-xl flex flex-col gap-4 transition-all duration-300 hover:border-red-500/50`}>
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-4 border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-xl ${f.cor_badge || 'bg-red-600'} text-white font-mono font-black text-sm flex items-center justify-center shrink-0`}>
                        {f.fase_numero}
                      </span>
                      <div>
                        <h3 className={`text-xl md:text-2xl font-bold ${titleColor}`}>{f.titulo_fase}</h3>
                        <span className="text-xs text-red-500 font-bold uppercase tracking-wider">{f.periodo}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${isLight ? 'bg-zinc-100 text-zinc-800' : 'bg-zinc-800 text-zinc-200'}`}>
                      {f.foco}
                    </span>
                  </div>

                  <ul className="space-y-3 pt-2">
                    {f.topicos?.map((topico: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 text-xs md:text-sm leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className={isLight ? 'text-zinc-800' : 'text-zinc-200'}>{topico}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Innovation Cards */}
        <div>
          <h3 className={`text-xl font-bold ${titleColor} mb-6 flex items-center gap-2`}>
            <Sparkles className="w-5 h-5 text-amber-500" />
            Inovações & Alavancas Estratégicas para o Ateliê
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {inovacoes.map((inov: any, i: number) => {
              const IconComponent = iconMap[inov.icone] || Sparkles;
              return (
                <div key={i} className={`p-6 rounded-2xl border ${cardBg} flex flex-col justify-between shadow-lg hover:-translate-y-1 transition-transform`}>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 bg-red-600/10 text-red-500 rounded-xl">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className={`font-bold text-sm ${titleColor}`}>{inov.titulo}</h4>
                    </div>
                    <p className={`text-xs ${subtitleColor} leading-relaxed mb-4`}>{inov.estrategia}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-800 dark:text-emerald-300 font-medium">
                    <strong className="text-emerald-600 block mb-0.5">Impacto Projetado:</strong> {inov.impacto}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'meta_ads_analysis') {
    return (
      <div className="flex flex-col h-full gap-8">
        <div>
          <h2 className={`text-4xl font-bold ${titleColor} mb-2`}>{d.titulo}</h2>
          <p className={`text-base ${subtitleColor}`}>{d.subtitulo}</p>
        </div>
        
        {/* 6 Top Metric Cards from PDF */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <div className={`${cardBg} p-4 rounded-2xl shadow-md border-l-4 border-indigo-500 flex flex-col justify-between`}>
            <span className={`text-xs font-semibold ${subtitleColor}`}>Investimento Total</span>
            <span className="text-2xl font-black text-indigo-600">{d.investimento_total}</span>
            <span className="text-[10px] text-zinc-400">Média {d.media_mensal}</span>
          </div>

          <div className={`${cardBg} p-4 rounded-2xl shadow-md border-l-4 border-red-500 flex flex-col justify-between`}>
            <span className={`text-xs font-semibold ${subtitleColor}`}>Conversas WhatsApp</span>
            <span className="text-2xl font-black text-red-600">{d.conversas_total ? d.conversas_total.toLocaleString('pt-BR') : '80.843'}</span>
            <span className="text-[10px] text-red-500 font-semibold">Canal validado da conta</span>
          </div>

          <div className={`${cardBg} p-4 rounded-2xl shadow-md border-l-4 border-emerald-500 flex flex-col justify-between`}>
            <span className={`text-xs font-semibold ${subtitleColor}`}>Custo Médio / Conv.</span>
            <span className="text-2xl font-black text-emerald-600">R$ {d.custo_medio_conversa ? d.custo_medio_conversa.toFixed(2).replace('.', ',') : '4,00'}</span>
            <span className="text-[10px] text-emerald-600 font-semibold">Referência estável de 10m</span>
          </div>

          <div className={`${cardBg} p-4 rounded-2xl shadow-md border-l-4 border-blue-500 flex flex-col justify-between`}>
            <span className={`text-xs font-semibold ${subtitleColor}`}>Impressões / Alcance</span>
            <span className="text-xl font-black text-blue-600">{d.impressoes_total}</span>
            <span className="text-[10px] text-zinc-400">{d.alcance_total} (Freq {d.frequencia_media})</span>
          </div>

          <div className={`${cardBg} p-4 rounded-2xl shadow-md border-l-4 border-amber-500 flex flex-col justify-between`}>
            <span className={`text-xs font-semibold ${subtitleColor}`}>CTR / CPC / CPM</span>
            <span className="text-xl font-black text-amber-600">{d.ctr_link}</span>
            <span className="text-[10px] text-zinc-400">CPC R${d.cpc_medio?.toFixed(2)} | CPM R${d.cpm_medio?.toFixed(2)}</span>
          </div>

          <div className={`${cardBg} p-4 rounded-2xl shadow-md border-l-4 border-rose-600 flex flex-col justify-between bg-rose-500/5`}>
            <span className={`text-xs font-semibold text-rose-600 flex items-center gap-1`}>
              <ShieldAlert className="w-3.5 h-3.5" /> Pixel de Compras
            </span>
            <span className="text-xl font-black text-rose-600">{d.pixel_compras || "Apenas 4"}</span>
            <span className="text-[10px] text-rose-500 font-semibold">Gargalo: Pixel cego p/ WhatsApp</span>
          </div>
        </div>

        {/* Diagnóstico Banner */}
        {d.diagnostico_chave && (
          <div className={`p-4 rounded-2xl border ${isLight ? 'bg-amber-50/80 border-amber-200 text-amber-950' : 'bg-amber-950/20 border-amber-900/40 text-amber-200'} flex items-start gap-3`}>
            <div className="p-2 bg-amber-500 text-white rounded-xl shrink-0 mt-0.5">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-0.5">Diagnóstico Central do Histórico</span>
              <p className="text-xs md:text-sm leading-relaxed">{d.diagnostico_chave}</p>
            </div>
          </div>
        )}

        {/* Interactive Raio-X Component (Tabs: Safras SVG chart, Demografia, Ranking, Correções) */}
        <MetaAdsRaioXComponent d={d} isLight={isLight} />

        {/* 2 Bottom Columns: O que Funcionou vs Não Funcionou */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* O que funcionou */}
          <div className={`${isLight ? 'bg-emerald-50' : 'bg-emerald-950/20'} p-8 rounded-2xl border border-emerald-200/50 flex flex-col`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-500 rounded-xl text-white shadow-md shadow-emerald-500/20">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400">O que funcionou (Manter & Escalar)</h3>
                <p className={`text-sm ${subtitleColor}`}>Motores comprovados ao longo de 10 meses na conta</p>
              </div>
            </div>
            <ul className="flex flex-col gap-3.5">
              {d.funcionou?.map((item: string, i: number) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className={`text-sm leading-relaxed ${isLight ? 'text-zinc-700' : 'text-zinc-300'}`}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* O que nao funcionou */}
          <div className={`${isLight ? 'bg-red-50' : 'bg-red-950/20'} p-8 rounded-2xl border border-red-200/50 flex flex-col`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-500 rounded-xl text-white shadow-md shadow-red-500/20">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-700 dark:text-red-400">Gargalos a Eliminar (Não Repetir na Escala)</h3>
                <p className={`text-sm ${subtitleColor}`}>Erros que queimaram verba e travaram a operação</p>
              </div>
            </div>
            <ul className="flex flex-col gap-3.5">
              {d.nao_funcionou?.map((item: string, i: number) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  <span className={`text-sm leading-relaxed ${isLight ? 'text-zinc-700' : 'text-zinc-300'}`}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'media_projection' || type === 'projecao_comercial_detalhada') {
    const cenarios = d.cenarios || [];
    const caps = d.capacidade_operacional || [];
    const funil = d.funil_esmiucado || [];

    return (
      <div className="flex flex-col gap-12 w-full max-w-6xl mx-auto py-6">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-600/10 text-emerald-500 font-bold text-xs uppercase tracking-widest mb-3">
            Visão Consolidada de Escala & Vendas
          </span>
          <h2 className={`text-4xl font-bold ${titleColor} mb-2`}>{d.titulo}</h2>
          <p className={`text-base ${subtitleColor}`}>
            {d.subtitulo || "Integração de cenários de tráfego, capacidade operacional do ateliê e esmiuçamento do funil comercial"}
          </p>
        </div>

        {/* Top Input Parameters Bar */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`p-4 rounded-2xl border ${isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-zinc-900 border-zinc-800'} flex flex-col gap-1`}>
            <span className="text-xs uppercase font-bold text-zinc-500">Verba Mensal (R$)</span>
            <span className={`text-2xl font-black ${titleColor}`}>{d.orcamento || "R$ 30.000"}</span>
          </div>
          <div className={`p-4 rounded-2xl border ${isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-zinc-900 border-zinc-800'} flex flex-col gap-1`}>
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold text-zinc-500">Ticket Médio (R$)</span>
              <span className="text-[10px] text-amber-600 font-bold uppercase">Referência</span>
            </div>
            <span className={`text-2xl font-black ${titleColor}`}>{d.ticket_medio || "R$ 250,00"}</span>
          </div>
          <div className={`p-4 rounded-2xl border ${isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-zinc-900 border-zinc-800'} flex flex-col gap-1`}>
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold text-zinc-500">Conversas que viram Venda (%)</span>
              <span className="text-[10px] text-amber-600 font-bold uppercase">Base Média</span>
            </div>
            <span className={`text-2xl font-black ${titleColor}`}>{d.taxa_referencia || "12,0%"}</span>
          </div>
        </div>

        {/* Top Operational Metrics */}
        {caps.length > 0 && (
          <div>
            <h3 className={`text-xl font-bold ${titleColor} mb-4 flex items-center gap-2`}>
              <Activity className="w-5 h-5 text-red-600" />
              Capacidade Operacional & Atendimento
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {caps.map((c: any, i: number) => (
                <div key={i} className={`p-6 rounded-2xl border ${cardBg} flex flex-col justify-between border-l-4 border-l-red-600 shadow-xl`}>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 block mb-1">{c.métrica}</span>
                    <span className="text-3xl font-black text-red-600 block mb-2">{c.valor}</span>
                    <p className={`text-xs ${subtitleColor} leading-relaxed`}>{c.detalhe}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3 Scenarios Grid */}
        <div>
          <h3 className={`text-xl font-bold ${titleColor} mb-4 flex items-center gap-2`}>
            <BarChart2 className="w-5 h-5 text-emerald-500" />
            3 Cenários de Desempenho no Meta Ads
          </h3>
          <div className="w-full grid md:grid-cols-3 gap-6">
            {cenarios.map((cenario: any, i: number) => {
              const isRealista = cenario.nome === "Realista";
              let color = 'text-amber-500';
              let bg = isLight ? 'bg-amber-50' : 'bg-amber-950/30';
              let border = 'border-amber-300 dark:border-amber-800';
              let headerBg = 'bg-amber-500';
              
              if (i === 1 || isRealista) { 
                color = 'text-red-600'; 
                bg = isLight ? 'bg-red-50/60' : 'bg-red-950/30'; 
                border = 'border-red-600 border-2 shadow-red-900/20'; 
                headerBg = 'bg-red-600';
              }
              if (i === 2) { 
                color = 'text-emerald-500'; 
                bg = isLight ? 'bg-emerald-50' : 'bg-emerald-950/30'; 
                border = 'border-emerald-300 dark:border-emerald-800'; 
                headerBg = 'bg-emerald-600';
              }

              return (
                <div key={i} className={`${cardBg} rounded-3xl p-6 border-2 ${border} shadow-xl flex flex-col justify-between relative overflow-hidden`}>
                  <div className={`absolute top-0 inset-x-0 h-2 ${headerBg}`} />
                  
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-bold uppercase tracking-wider ${color}`}>Cenário {cenario.nome}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-black text-white ${headerBg}`}>
                        ROAS {cenario.roas}
                      </span>
                    </div>

                    <div className="mb-4">
                      <span className="text-4xl font-black block">{cenario.conversas}</span>
                      <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">conversas no mês</span>
                    </div>

                    <div className={`space-y-2.5 text-xs ${isLight ? 'text-zinc-600' : 'text-zinc-300'} mb-6 border-t border-b py-4 border-zinc-200 dark:border-zinc-800`}>
                      <div className="flex justify-between">
                        <span>Custo por conversa:</span>
                        <strong className={color}>{cenario.custo_conversa}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Conversas por dia:</span>
                        <strong className={titleColor}>{cenario.conversas_dia}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Taxa de venda:</span>
                        <strong className="text-emerald-600 font-bold">{cenario.taxa_venda}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Vendas no mês:</span>
                        <strong className="text-indigo-600 font-bold">{cenario.pedidos} vendas</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Custo por venda (CPA):</span>
                        <strong className="text-red-600 font-bold">{cenario.custo_venda || cenario.cpa}</strong>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-dashed border-zinc-200 dark:border-zinc-800">
                        <span className="font-bold text-sm">Faturamento:</span>
                        <strong className="text-base font-black text-emerald-600">{cenario.faturamento}</strong>
                      </div>
                    </div>
                  </div>

                  <div className={`${bg} p-3 rounded-xl text-center text-xs ${isLight ? 'text-zinc-700' : 'text-zinc-300'} leading-relaxed`}>
                    {cenario.descricao}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Funil Comercial Esmiuçado (Table) */}
        {funil.length > 0 && (
          <div className={`p-6 rounded-3xl border ${cardBg} shadow-2xl flex flex-col gap-6`}>
            <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4 border-zinc-200 dark:border-zinc-800">
              <div>
                <h3 className={`text-xl font-bold ${titleColor}`}>
                  Esmiuçamento do Funil Comercial Etapa por Etapa
                </h3>
                <p className={`text-xs mt-1 ${subtitleColor}`}>
                  Projeção de passagem em cada nível: Conversas → MQL (75-85%) → SQL (40-45%) → Vendas Fechadas (10,5-13,5%)
                </p>
              </div>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <table className="w-full text-left text-xs font-sans">
                <thead className={`${isLight ? 'bg-zinc-100 text-zinc-700' : 'bg-zinc-950 text-zinc-300'} uppercase font-bold border-b border-zinc-200 dark:border-zinc-800`}>
                  <tr>
                    <th className="py-3.5 px-4">Etapa do Funil Comercial</th>
                    <th className="py-3.5 px-3 text-amber-600">Conservador</th>
                    <th className="py-3.5 px-3 text-red-600">Realista (Meta)</th>
                    <th className="py-3.5 px-3 text-emerald-600">Otimista</th>
                    <th className="py-3.5 px-4">Observação / Métricas</th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${isLight ? 'divide-zinc-200 bg-white' : 'divide-zinc-800 bg-zinc-900/50'}`}>
                  {funil.map((row: any, i: number) => {
                    const isTotal = i === funil.length - 1;
                    return (
                      <tr key={i} className={`${isTotal ? 'bg-red-600/10 font-bold' : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/50'} transition-colors`}>
                        <td className={`py-3.5 px-4 ${isTotal ? 'text-red-500 font-extrabold text-sm' : titleColor}`}>
                          {row.etapa}
                        </td>
                        <td className="py-3.5 px-3 font-mono font-semibold text-amber-600">{row.conservador}</td>
                        <td className="py-3.5 px-3 font-mono font-black text-red-600">{row.realista}</td>
                        <td className="py-3.5 px-3 font-mono font-semibold text-emerald-600">{row.otimista}</td>
                        <td className={`py-3.5 px-4 text-[11px] ${subtitleColor}`}>{row.observacao}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (type === 'spreadsheet_placeholder') {
    return (
      <div>
         <div className="flex items-center gap-4 mb-12">
           <FileSpreadsheet className="w-10 h-10 text-red-600" />
           <h2 className={`text-4xl font-bold ${titleColor}`}>{d.titulo}</h2>
         </div>
         
         {d.imagem_url ? (
           <div className="w-full flex flex-col gap-6">
             <div className="w-full bg-white border border-zinc-200 rounded-xl shadow-lg overflow-hidden flex flex-col p-4">
               <img src={d.imagem_url} alt={d.titulo} className="w-full h-auto object-contain rounded-lg" />
             </div>
             {d.link_planilha && (
               <div className="w-full flex justify-center mt-4">
                 <a href={d.link_planilha} target="_blank" rel="noreferrer" 
                    className="group flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-red-900/20">
                    <FileSpreadsheet className="w-5 h-5" />
                    {d.texto_botao || `Acessar ${d.tipo_planilha}`}
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </a>
               </div>
             )}
           </div>
         ) : (
           <div className="w-full h-[500px] bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden flex flex-col relative">
             {/* Excel Header */}
             <div className="w-full h-8 bg-zinc-100 border-b border-zinc-200 flex">
                <div className="w-12 h-full border-r border-zinc-200 bg-zinc-100" />
                {['A', 'B', 'C', 'D', 'E', 'F'].map(col => (
                  <div key={col} className="flex-1 border-r border-zinc-200 flex items-center justify-center text-xs font-mono text-zinc-400 font-bold">{col}</div>
                ))}
             </div>
             {/* Excel Rows */}
             <div className="flex-1 flex flex-col">
               {[1,2,3,4,5,6,7,8,9,10].map(row => (
                 <div key={row} className="flex-1 flex border-b border-zinc-100 last:border-0">
                    <div className="w-12 h-full border-r border-zinc-200 bg-zinc-50 flex items-center justify-center text-xs font-mono text-zinc-400">{row}</div>
                    {['A', 'B', 'C', 'D', 'E', 'F'].map(col => (
                      <div key={col} className="flex-1 border-r border-zinc-100" />
                    ))}
                 </div>
               ))}
             </div>
             
             {/* Overlay overlay */}
             <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center">
                <div className="bg-white border border-zinc-200 shadow-2xl rounded-2xl p-8 max-w-md text-center flex flex-col items-center">
                  <FileSpreadsheet className="w-16 h-16 text-zinc-300 mb-6" />
                  <h3 className="text-2xl font-bold text-zinc-900 mb-3">Planilha de {d.tipo_planilha}</h3>
                  <p className="text-zinc-500 text-base leading-relaxed">
                    Este espaço está reservado para a inserção da planilha interativa de <b>{d.tipo_planilha}</b>.
                  </p>
                </div>
             </div>
           </div>
         )}
      </div>
    )
  }

  // Fallback for missing types
  return (
    <div className={`p-8 border border-red-500 ${cardBg} text-red-500`}>
      <p>⚠️ Missing renderer for slide type: {type}</p>
    </div>
  )
}

export default function ReportViewer() {
  const { slides } = presentationData

  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-red-500/30 font-sans">
      {slides.map((slide, index) => {
        const themeClass = getSectionTheme(slide.id, slide.slide_type)
        return (
          <SectionWrapper key={slide.id || index} themeClass={themeClass}>
            <RenderBlock slide={slide} />
          </SectionWrapper>
        )
      })}
    </div>
  )
}
