import Link from "next/link";
import { QuickRegistrationForm } from "@/components/QuickRegistrationForm";

export default function NovoPaciente() {
  return <main className="mx-auto w-[calc(100%-2rem)] max-w-[820px] flex-1 py-8 sm:w-[calc(100%-2.5rem)] sm:py-12"><div className="mb-6"><Link href="/pacientes" className="text-sm font-bold text-emerald-700">← Pacientes</Link><h1 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-emerald-950">Novo cadastro rápido</h1><p className="mt-2 text-sm leading-6 text-slate-500">Registre o tutor agora e complete as informações do paciente quando estiver no momento certo.</p></div><section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"><QuickRegistrationForm /></section></main>;
}
