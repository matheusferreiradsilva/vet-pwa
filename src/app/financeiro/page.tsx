"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const initialMovements = [
  { description: "Consulta · Thor", date: "Hoje, 14:00", received: 180, cost: 35 },
  { description: "Retorno · Luna", date: "Ontem, 15:30", received: 120, cost: 0 },
  { description: "Vacinação · Thor", date: "05 mar, 09:20", received: 95, cost: 22 },
];

export default function Financeiro() {
  const [movements, setMovements] = useState(initialMovements);
  const [description, setDescription] = useState("");
  const [received, setReceived] = useState("");
  const [cost, setCost] = useState("");
  const totalReceived = movements.reduce((total, movement) => total + movement.received, 0);
  const totalCosts = movements.reduce((total, movement) => total + movement.cost, 0);

  function addMovement(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!description || !received) return;
    setMovements([{ description, date: "Agora", received: Number(received), cost: Number(cost || 0) }, ...movements]);
    setDescription("");
    setReceived("");
    setCost("");
  }

  const money = (value: number) => `R$ ${value.toFixed(2).replace(".", ",")}`;

  return (
    <main className="mx-auto w-[calc(100%-2rem)] max-w-[1180px] flex-1 py-10 sm:w-[calc(100%-2.5rem)] sm:py-14">
      <section className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><h1 className="text-[clamp(2rem,5vw,3.4rem)] font-bold leading-none tracking-[-0.06em] text-emerald-950">Financeiro</h1><p className="mt-3 max-w-xl text-base leading-7 text-slate-500">Acompanhe o que entrou, os gastos com medicamentos e o resultado de cada atendimento.</p></div><Link href="/atendimentos" className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-700 px-4 text-sm font-bold text-white hover:bg-emerald-800">Ver atendimentos</Link></section>
      <section className="mt-8 grid gap-4 sm:grid-cols-3" aria-label="Resumo financeiro"><article className="rounded-2xl border border-emerald-700 bg-emerald-700 p-5 text-white"><span className="text-sm font-semibold text-emerald-100">Total recebido</span><strong className="mt-4 block text-3xl font-bold tracking-[-0.06em]">{money(totalReceived)}</strong><span className="mt-2 block text-xs text-emerald-100">Neste período</span></article><article className="rounded-2xl border border-slate-200 bg-white p-5"><span className="text-sm font-semibold text-slate-600">Gastos registrados</span><strong className="mt-4 block text-3xl font-bold tracking-[-0.06em] text-emerald-950">{money(totalCosts)}</strong><span className="mt-2 block text-xs text-slate-500">Medicamentos e insumos</span></article><article className="rounded-2xl border border-slate-200 bg-white p-5"><span className="text-sm font-semibold text-slate-600">Resultado líquido</span><strong className="mt-4 block text-3xl font-bold tracking-[-0.06em] text-emerald-950">{money(totalReceived - totalCosts)}</strong><span className="mt-2 block text-xs text-slate-500">Recebimentos menos gastos</span></article></section>
      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)]">
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white" aria-labelledby="movements-title"><div className="border-b border-slate-200 px-5 py-4 sm:px-6"><h2 id="movements-title" className="text-lg font-bold text-emerald-950">Movimentações</h2><p className="mt-1 text-xs text-slate-500">Registros adicionados nesta sessão</p></div><ul className="divide-y divide-slate-200">{movements.map((movement, index) => <li key={`${movement.description}-${index}`} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 sm:px-6"><div><strong className="block text-sm text-slate-800">{movement.description}</strong><span className="mt-1 block text-xs text-slate-500">{movement.date} · gasto {money(movement.cost)}</span></div><strong className="text-sm text-emerald-950">{money(movement.received)}</strong></li>)}</ul></section>
        <aside className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"><h2 className="text-lg font-bold text-emerald-950">Novo lançamento</h2><p className="mt-2 text-sm leading-6 text-slate-500">Adicione recebimentos e gastos que não vieram de um atendimento.</p><form onSubmit={addMovement} className="mt-5 space-y-4"><label className="text-sm font-semibold text-slate-700">Descrição<input required className="form-input" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Ex.: consulta Thor" /></label><label className="text-sm font-semibold text-slate-700">Valor recebido<input required inputMode="decimal" className="form-input" value={received} onChange={(event) => setReceived(event.target.value)} placeholder="0,00" /></label><label className="text-sm font-semibold text-slate-700">Gastos<input inputMode="decimal" className="form-input" value={cost} onChange={(event) => setCost(event.target.value)} placeholder="0,00" /></label><button className="w-full rounded-xl bg-emerald-700 px-4 py-3 text-sm font-bold text-white hover:bg-emerald-800">Adicionar lançamento</button></form></aside>
      </div>
    </main>
  );
}
