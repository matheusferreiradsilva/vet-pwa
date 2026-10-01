"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import type { Patient } from "@/lib/mock-data";

export function ConsultationWorkspace({ patient }: { patient: Patient }) {
  const [reviewed, setReviewed] = useState(false);
  const [finished, setFinished] = useState(false);
  const [received, setReceived] = useState("180");
  const [medicationCost, setMedicationCost] = useState("0");

  function finishConsultation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFinished(true);
  }

  return (
    <main className="mx-auto w-[calc(100%-2rem)] max-w-[1180px] flex-1 py-8 sm:w-[calc(100%-2.5rem)] sm:py-12">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <Link href="/atendimentos" className="text-sm font-bold text-emerald-700">← Atendimentos do dia</Link>
          <p className="mt-3 text-xs font-bold uppercase tracking-[0.1em] text-emerald-700">Consulta em andamento</p>
          <h1 className="mt-1 text-3xl font-bold tracking-[-0.05em] text-emerald-950">{patient.petName}</h1>
          <p className="mt-1 text-sm text-slate-500">{patient.species} · {patient.breed} · {patient.age} · Tutor: {patient.tutorName}</p>
        </div>
        <Link href={`/pacientes/${patient.id}`} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700">Editar ficha</Link>
      </div>

      <section className="rounded-2xl border border-amber-300 bg-amber-50 p-5 sm:p-6" aria-labelledby="clinical-alerts">
        <div className="flex items-start gap-3">
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-amber-300 font-bold text-amber-950">!</span>
          <div>
            <h2 id="clinical-alerts" className="text-sm font-bold text-amber-950">Alergias e observações importantes</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {patient.alerts.map((alert) => <span key={alert} className="rounded-full bg-amber-200 px-2.5 py-1 text-xs font-bold text-amber-950">{alert}</span>)}
            </div>
            <p className="mt-2 text-sm leading-6 text-amber-900">{patient.allergies}</p>
          </div>
        </div>
      </section>

      <form onSubmit={finishConsultation} className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.75fr)]">
        <div className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <h2 className="text-lg font-bold text-emerald-950">Sinais vitais e exame físico</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <label className="text-sm font-semibold text-slate-700">Peso (kg)<input className="form-input" defaultValue="31.5" /></label>
              <label className="text-sm font-semibold text-slate-700">Temperatura<input className="form-input" defaultValue="38.8 °C" /></label>
              <label className="text-sm font-semibold text-slate-700">Frequência cardíaca<input className="form-input" defaultValue="110 bpm" /></label>
              <label className="text-sm font-semibold text-slate-700">Frequência respiratória<input className="form-input" defaultValue="24 mpm" /></label>
              <label className="text-sm font-semibold text-slate-700">Mucosas<select className="form-input"><option>Rosadas</option><option>Pálidas</option><option>Congestas</option></select></label>
              <label className="text-sm font-semibold text-slate-700">TPC<input className="form-input" defaultValue="< 2 segundos" /></label>
            </div>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <h2 className="text-lg font-bold text-emerald-950">Anotações do atendimento</h2>
            <textarea required className="form-input mt-4 min-h-48 resize-y leading-6" defaultValue="Tutor relata prostração iniciada há 24h, associada a prurido intenso em orelha esquerda e fricção da cabeça contra o solo. Nega vômito ou diarreia. Mantém apetite preservado. Ao exame físico: eritema acentuado em conduto auditivo esquerdo, edema moderado, exsudato enegrecido e ceruminoso em grande quantidade." />
            <p className="mt-2 text-xs text-slate-500">Registre aqui a anamnese, os achados e as orientações combinadas com o tutor.</p>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <h2 className="text-lg font-bold text-emerald-950">Procedimentos e observações</h2>
            <textarea className="form-input mt-4 min-h-28 resize-y" defaultValue="Limpeza otológica do conduto esquerdo e coleta de material via swab para citologia." />
          </section>
        </div>

        <aside className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <h2 className="text-lg font-bold text-emerald-950">Financeiro da consulta</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">Registre o que foi recebido e os gastos associados a este atendimento.</p>
            <div className="mt-4 space-y-4">
              <label className="text-sm font-semibold text-slate-700">Valor recebido (R$)<input inputMode="decimal" className="form-input" value={received} onChange={(event) => setReceived(event.target.value)} /></label>
              <label className="text-sm font-semibold text-slate-700">Medicamentos gastos (R$)<input inputMode="decimal" className="form-input" value={medicationCost} onChange={(event) => setMedicationCost(event.target.value)} /></label>
            </div>
            <div className="mt-5 rounded-xl bg-emerald-50 p-4"><span className="text-xs font-bold uppercase tracking-[0.08em] text-emerald-800">Resultado estimado</span><strong className="mt-1 block text-2xl tracking-[-0.04em] text-emerald-950">R$ {(Math.max(0, Number(received || 0) - Number(medicationCost || 0))).toFixed(2).replace(".", ",")}</strong></div>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <h2 className="text-lg font-bold text-emerald-950">Finalizar atendimento</h2>
            <label className="mt-4 flex items-start gap-3 text-sm leading-5 text-slate-700"><input type="checkbox" required checked={reviewed} onChange={(event) => setReviewed(event.target.checked)} className="mt-0.5 size-4 accent-emerald-700" /> Revisei as alergias, observações e anotações antes de finalizar.</label>
            <p className="mt-3 text-xs leading-5 text-slate-500">O atendimento será salvo como registro interno. O resumo pode ser impresso para consulta e validação.</p>
            <button type="submit" className="mt-4 w-full rounded-xl bg-emerald-700 px-4 py-3 text-sm font-bold text-white hover:bg-emerald-800">Salvar e finalizar</button>
            {finished && <div role="status" className="mt-3 rounded-xl bg-emerald-50 p-3 text-xs font-semibold text-emerald-900">Atendimento finalizado localmente.<button type="button" onClick={() => window.print()} className="ml-1 underline">Imprimir resumo</button></div>}
          </section>
        </aside>
      </form>
    </main>
  );
}
