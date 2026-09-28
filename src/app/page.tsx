const appointments = [
  {
    time: "14:00",
    patient: "João Silva",
    detail: "Consulta de rotina",
    status: "Agendado",
    statusClass: "status-scheduled",
  },
  {
    time: "15:30",
    patient: "Maria Souza",
    detail: "Retorno pós-operatório",
    status: "Confirmado",
    statusClass: "status-confirmed",
  },
  {
    time: "17:00",
    patient: "Thor",
    detail: "Vacinação anual",
    status: "Aguardando",
    statusClass: "status-waiting",
  },
];

const quickActions = [
  { label: "Novo atendimento", href: "/atendimentos", icon: "+" },
  { label: "Cadastrar paciente", href: "/pacientes", icon: "→" },
  { label: "Ver financeiro", href: "/financeiro", icon: "↗" },
];

export default function Home() {
  return (
    <main className="home-shell">
      <section className="home-hero" aria-labelledby="welcome-title">
        <div>
          <p className="eyebrow">Visão geral da clínica</p>
          <h1 id="welcome-title">Olá, Fulano!</h1>
          <p className="hero-description">
            Um resumo simples para você começar o dia com tudo sob controle.
          </p>
        </div>
        <time className="today" dateTime="2025-03-08">
          Sábado, 8 de março
        </time>
      </section>

      <section className="summary-grid" aria-label="Resumo do dia">
        <article className="summary-card summary-card-primary">
          <span className="summary-label">Atendimentos hoje</span>
          <strong>08</strong>
          <span className="summary-note">3 já confirmados</span>
        </article>
        <article className="summary-card">
          <span className="summary-label">Pacientes ativos</span>
          <strong>124</strong>
          <span className="summary-note">+6 este mês</span>
        </article>
        <article className="summary-card">
          <span className="summary-label">Receita no mês</span>
          <strong>R$ 8.420</strong>
          <span className="summary-note">12% acima do mês passado</span>
        </article>
      </section>

      <div className="dashboard-grid">
        <section className="panel appointments-panel" aria-labelledby="appointments-title">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Agenda</p>
              <h2 id="appointments-title">Próximos atendimentos</h2>
            </div>
            <a className="text-link" href="/atendimentos">
              Ver agenda
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <ul className="appointment-list">
            {appointments.map((appointment) => (
              <li className="appointment-item" key={`${appointment.time}-${appointment.patient}`}>
                <time className="appointment-time" dateTime={`2025-03-08T${appointment.time}`}>
                  {appointment.time}
                </time>
                <div className="appointment-info">
                  <strong>{appointment.patient}</strong>
                  <span>{appointment.detail}</span>
                </div>
                <span className={`status ${appointment.statusClass}`}>
                  {appointment.status}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <aside className="panel actions-panel" aria-labelledby="actions-title">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Atalhos</p>
              <h2 id="actions-title">Ações rápidas</h2>
            </div>
          </div>
          <nav aria-label="Ações rápidas">
            <ul className="action-list">
              {quickActions.map((action) => (
                <li key={action.href}>
                  <a className="action-link" href={action.href}>
                    <span className="action-icon" aria-hidden="true">
                      {action.icon}
                    </span>
                    <span>{action.label}</span>
                    <span className="action-arrow" aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>

      <section className="notice" aria-labelledby="notice-title">
        <span className="notice-icon" aria-hidden="true">i</span>
        <div>
          <h2 id="notice-title">Lembrete do dia</h2>
          <p>Há 2 prontuários aguardando atualização após o atendimento.</p>
        </div>
        <a className="text-link" href="/pacientes">
          Revisar agora
          <span aria-hidden="true">→</span>
        </a>
      </section>
    </main>
  );
}
