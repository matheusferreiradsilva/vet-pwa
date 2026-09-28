const appointments = [
  {
    time: "14:00",
    patient: "João Silva",
    detail: "Consulta de rotina",
    status: "Agendado",
    statusClass: "bg-blue-100 text-blue-800",
  },
  {
    time: "15:30",
    patient: "Maria Souza",
    detail: "Retorno pós-operatório",
    status: "Confirmado",
    statusClass: "bg-emerald-100 text-emerald-800",
  },
  {
    time: "17:00",
    patient: "Thor",
    detail: "Vacinação anual",
    status: "Aguardando",
    statusClass: "bg-amber-100 text-amber-800",
  },
];

const quickActions = [
  { label: "Novo atendimento", href: "/atendimentos", icon: "+" },
  { label: "Cadastrar paciente", href: "/pacientes", icon: "→" },
  { label: "Ver financeiro", href: "/financeiro", icon: "↗" },
];

export default function Home() {
  return (
    <main className="mx-auto w-[calc(100%-2rem)] max-w-[1180px] flex-1 py-10 sm:w-[calc(100%-2.5rem)] sm:py-14">
      <section
        className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start"
        aria-labelledby="welcome-title"
      >
        <div>
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.12em] text-emerald-700">
            Visão geral da clínica
          </p>
          <h1
            id="welcome-title"
            className="mb-2 text-[clamp(2rem,5vw,3.4rem)] font-bold leading-none tracking-[-0.06em] text-emerald-950"
          >
            Olá, Fulano!
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            Um resumo simples para você começar o dia com tudo sob controle.
          </p>
        </div>
        <time
          className="text-sm text-slate-500 sm:pt-4"
          dateTime="2025-03-08"
        >
          Sábado, 8 de março
        </time>
      </section>

      <section
        className="mt-8 grid gap-4 sm:mt-11 sm:grid-cols-3"
        aria-label="Resumo do dia"
      >
        <article className="flex min-h-32 flex-col justify-between rounded-2xl border border-emerald-700 bg-emerald-700 p-5 text-white">
          <span className="text-sm font-semibold">Atendimentos hoje</span>
          <strong className="text-4xl font-bold tracking-[-0.06em]">08</strong>
          <span className="text-sm text-emerald-100">3 já confirmados</span>
        </article>
        <article className="flex min-h-32 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5">
          <span className="text-sm font-semibold text-slate-700">Pacientes ativos</span>
          <strong className="text-4xl font-bold tracking-[-0.06em] text-emerald-950">124</strong>
          <span className="text-sm text-slate-500">+6 este mês</span>
        </article>
        <article className="flex min-h-32 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5">
          <span className="text-sm font-semibold text-slate-700">Receita no mês</span>
          <strong className="text-4xl font-bold tracking-[-0.06em] text-emerald-950">R$ 8.420</strong>
          <span className="text-sm text-slate-500">12% acima do mês passado</span>
        </article>
      </section>

      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1.55fr)_minmax(280px,0.85fr)]">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6" aria-labelledby="appointments-title">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.12em] text-emerald-700">
                Agenda
              </p>
              <h2 id="appointments-title" className="text-xl font-bold tracking-[-0.03em] text-emerald-950">
                Próximos atendimentos
              </h2>
            </div>
            <a
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              href="/atendimentos"
            >
              Ver agenda <span aria-hidden="true">→</span>
            </a>
          </div>

          <ul>
            {appointments.map((appointment) => (
              <li
                className="grid grid-cols-[3.3rem_minmax(0,1fr)] items-center gap-3 border-t border-slate-200 py-4 sm:grid-cols-[4rem_minmax(0,1fr)_auto] sm:gap-4"
                key={`${appointment.time}-${appointment.patient}`}
              >
                <time
                  className="text-sm font-bold text-emerald-700"
                  dateTime={`2025-03-08T${appointment.time}`}
                >
                  {appointment.time}
                </time>
                <div className="flex min-w-0 flex-col gap-1">
                  <strong className="text-sm text-slate-800">{appointment.patient}</strong>
                  <span className="truncate text-xs text-slate-500">{appointment.detail}</span>
                </div>
                <span
                  className={`col-start-2 justify-self-start rounded-full px-2 py-1 text-[0.7rem] font-bold sm:col-auto ${appointment.statusClass}`}
                >
                  {appointment.status}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <aside className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6" aria-labelledby="actions-title">
          <div className="mb-5">
            <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.12em] text-emerald-700">
              Atalhos
            </p>
            <h2 id="actions-title" className="text-xl font-bold tracking-[-0.03em] text-emerald-950">
              Ações rápidas
            </h2>
          </div>
          <nav aria-label="Ações rápidas">
            <ul className="grid gap-2.5">
              {quickActions.map((action) => (
                <li key={action.href}>
                  <a
                    className="grid grid-cols-[2rem_minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-transparent p-2.5 text-sm font-semibold text-emerald-950 hover:border-slate-200 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                    href={action.href}
                  >
                    <span className="grid size-8 place-items-center rounded-lg bg-emerald-50 text-xl text-emerald-700" aria-hidden="true">
                      {action.icon}
                    </span>
                    <span>{action.label}</span>
                    <span className="text-slate-500" aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>

      <section
        className="mt-4 flex flex-wrap items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:items-center sm:p-5"
        aria-labelledby="notice-title"
      >
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-amber-400 font-extrabold text-white" aria-hidden="true">
          i
        </span>
        <div className="flex-1">
          <h2 id="notice-title" className="mb-1 text-sm font-bold text-amber-950">
            Lembrete do dia
          </h2>
          <p className="mb-0 text-xs text-amber-900/70">
            Há 2 prontuários aguardando atualização após o atendimento.
          </p>
        </div>
        <a
          className="ml-10 inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 sm:ml-0"
          href="/pacientes"
        >
          Revisar agora <span aria-hidden="true">→</span>
        </a>
      </section>
    </main>
  );
}
