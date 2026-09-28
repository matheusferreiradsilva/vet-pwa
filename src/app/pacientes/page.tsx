import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <header>
            <h1 className="text-3xl font-bold text-slate-800">
              Olá, Fulano!
            </h1>
            <p className="text-slate-500 mt-1">
              Confira o resumo das suas atividades para o dia de hoje.
            </p>
          </header>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <section className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-800 mb-4 pb-2 border-b">
              Pacientes de Hoje
            </h2>

            {/* Lista mockada de pacientes */}
            <ul className="space-y-3">
              <li className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium text-slate-700">João Silva</p>
                  <p className="text-xs text-slate-500">14:00 - Consulta de rotina</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full">
                  Agendado
                </span>
              </li>

              <li className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                <div>
                  <p className="font-medium text-slate-700">Maria Souza</p>
                  <p className="text-xs text-slate-500">15:30 - Retorno</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-green-100 text-green-700 rounded-full">
                  Confirmado
                </span>
              </li>
            </ul>
          </section>

        </div>
      </main>
    </div>
  );
}
