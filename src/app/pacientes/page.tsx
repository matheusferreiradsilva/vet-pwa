import Link from "next/link";

const patients = [
  { id: "thor", patient: "Thor", tutor: "Carlos Silva", pet: "Cão · Golden Retriever", lastVisit: "Hoje, 14:00", status: "Em atendimento", tone: "bg-amber-100 text-amber-900" },
  { id: "luna", patient: "Luna", tutor: "Maria Souza", pet: "Gato · SRD", lastVisit: "Ontem, 15:30", status: "Acompanhamento", tone: "bg-emerald-100 text-emerald-900" },
  { id: "thor", patient: "Thor", tutor: "Carlos Silva", pet: "Cão · Golden Retriever", lastVisit: "05 mar, 09:20", status: "Retorno em 7 dias", tone: "bg-blue-100 text-blue-900" },
  { id: "luna", patient: "Luna", tutor: "Maria Souza", pet: "Gato · SRD", lastVisit: "28 fev, 11:10", status: "Prontuário atualizado", tone: "bg-slate-100 text-slate-700" },
];

export default function Pacientes() {
  return (
    <main className="mx-auto w-[calc(100%-2rem)] max-w-[1180px] flex-1 py-10 sm:w-[calc(100%-2.5rem)] sm:py-14">
      <section className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div><h1 className="text-[clamp(2rem,5vw,3.4rem)] font-bold leading-none tracking-[-0.06em] text-emerald-950">Pacientes</h1><p className="mt-3 max-w-xl text-base leading-7 text-slate-500">Encontre rapidamente o histórico, o tutor e as próximas etapas de cada paciente.</p></div>
        <Link href="/pacientes/novo" className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 text-sm font-bold text-white shadow-sm hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"><span className="text-lg leading-none" aria-hidden="true">+</span> Novo cadastro rápido</Link>
      </section>
      <section className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto_auto]" aria-label="Resumo de pacientes">
        <label className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-400"><span aria-hidden="true">⌕</span><span className="sr-only">Buscar paciente</span><input className="w-full bg-transparent text-slate-700 outline-none placeholder:text-slate-400" placeholder="Buscar por paciente ou tutor" /></label>
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 text-sm"><strong className="text-xl tracking-[-0.04em] text-emerald-950">124</strong><span className="text-slate-500">ativos</span></div>
        <Link href="/atendimentos" className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-emerald-800 hover:border-emerald-200 hover:bg-emerald-50">Ver atendimentos →</Link>
      </section>
      <section className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white" aria-labelledby="patient-list-title">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-5 py-4 sm:px-6"><div><h2 id="patient-list-title" className="text-lg font-bold tracking-[-0.03em] text-emerald-950">Sua base de pacientes</h2><p className="mt-1 text-xs text-slate-500">Atualizado agora · ordenado por atividade recente</p></div><button className="rounded-lg px-3 py-2 text-xs font-bold text-slate-500 hover:bg-slate-50 hover:text-emerald-900">Filtrar <span aria-hidden="true">⌄</span></button></div>
        <ul className="divide-y divide-slate-200">{patients.map((patient) => <li key={`${patient.id}-${patient.lastVisit}`} className="grid gap-4 px-5 py-4 transition-colors hover:bg-slate-50 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_auto] sm:items-center sm:px-6"><div className="flex min-w-0 items-center gap-3"><span className="grid size-10 shrink-0 place-items-center rounded-full border border-emerald-100 bg-white text-sm font-bold text-emerald-800">{patient.patient.slice(0, 2).toUpperCase()}</span><div className="min-w-0"><strong className="block truncate text-sm text-slate-800">{patient.patient}</strong><span className="block truncate text-xs text-slate-500">{patient.pet} · Tutor: {patient.tutor}</span></div></div><div className="text-xs text-slate-500 sm:border-l sm:border-slate-200 sm:pl-4"><span className="block text-[0.65rem] font-bold uppercase tracking-[0.08em] text-slate-400">Última movimentação</span><span className="mt-1 block font-semibold text-slate-700">{patient.lastVisit}</span></div><div className="flex items-center justify-between gap-3 sm:justify-end"><span className={`rounded-full px-2.5 py-1 text-[0.7rem] font-bold ${patient.tone}`}>{patient.status}</span><Link href={`/pacientes/${patient.id}`} className="text-xs font-bold text-emerald-700 hover:text-emerald-950">Abrir →</Link></div></li>)}</ul>
      </section>
    </main>
  );
}
