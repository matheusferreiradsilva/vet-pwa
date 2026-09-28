"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export function QuickRegistrationForm() {
  const [saved, setSaved] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaved(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 text-sm text-emerald-950">
        <strong>Cadastro em menos de um minuto.</strong>
        <p className="mt-1 text-emerald-900/75">Nome e telefone são suficientes para salvar agora. Você pode completar a ficha depois.</p>
      </div>
      <fieldset className="space-y-4">
        <legend className="text-base font-bold text-emerald-950">Contato do tutor</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-semibold text-slate-700">Nome completo *<input required name="tutorName" className="form-input" placeholder="Ex.: Carlos Silva" /></label>
          <label className="text-sm font-semibold text-slate-700">Telefone / WhatsApp *<input required name="phone" className="form-input" placeholder="(11) 99999-8888" /></label>
        </div>
        <label className="text-sm font-semibold text-slate-700">Endereço completo <input name="address" className="form-input" placeholder="Rua, número, bairro e referência" /></label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-semibold text-slate-700">E-mail <input type="email" name="email" className="form-input" placeholder="tutor@email.com" /></label>
          <label className="text-sm font-semibold text-slate-700">CPF <input name="cpf" className="form-input" placeholder="Necessário apenas para documentos" /></label>
        </div>
      </fieldset>
      <fieldset className="space-y-4 border-t border-slate-200 pt-6">
        <legend className="text-base font-bold text-emerald-950">Dados do paciente <span className="text-xs font-normal text-slate-500">(opcionais)</span></legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-semibold text-slate-700">Nome do pet <input name="petName" className="form-input" placeholder="Ex.: Thor" /></label>
          <label className="text-sm font-semibold text-slate-700">Espécie <select name="species" className="form-input"><option value="">Selecionar depois</option><option>Cão</option><option>Gato</option><option>Outro</option></select></label>
          <label className="text-sm font-semibold text-slate-700">Raça <input name="breed" className="form-input" placeholder="Ex.: Golden Retriever" /></label>
          <label className="text-sm font-semibold text-slate-700">Sexo / castração <input name="sex" className="form-input" placeholder="Ex.: Macho, castrado" /></label>
        </div>
        <label className="text-sm font-semibold text-slate-700">Queixa principal <textarea name="complaint" className="form-input min-h-28 resize-y" placeholder="O que o tutor relatou no primeiro contato?" /></label>
      </fieldset>
      {saved && <div role="status" className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900"><strong>Cadastro salvo.</strong> Os dados pendentes poderão ser completados na ficha do paciente.<div className="mt-2 flex gap-4"><Link href="/pacientes" className="font-bold underline">Ver pacientes</Link><Link href="/atendimentos" className="font-bold underline">Agendar atendimento</Link></div></div>}
      <div className="flex flex-wrap justify-end gap-3 border-t border-slate-200 pt-5"><Link href="/pacientes" className="inline-flex h-11 items-center rounded-xl px-4 text-sm font-bold text-slate-600 hover:bg-slate-50">Cancelar</Link><button type="submit" className="inline-flex h-11 items-center rounded-xl bg-emerald-700 px-5 text-sm font-bold text-white hover:bg-emerald-800">Salvar cadastro rápido</button></div>
    </form>
  );
}
