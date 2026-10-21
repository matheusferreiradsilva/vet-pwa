# Vet PWA

O Vet PWA é uma aplicação web progressiva para auxiliar veterinários que
realizam atendimentos domiciliares.

O objetivo do projeto é centralizar a rotina do veterinário em um único lugar,
permitindo organizar:

- pacientes e seus tutores;
- agenda de atendimentos;
- prontuários e informações clínicas;
- endereços para visitas domiciliares;
- controle financeiro dos atendimentos.

O projeto está sendo desenvolvido com Next.js, React, TypeScript e Tailwind
CSS. O Supabase será utilizado como backend, fornecendo autenticação,
persistência dos dados e controle de acesso.

## Status do projeto

A interface inicial está em desenvolvimento. Algumas telas ainda utilizam
dados de exemplo enquanto a integração com o Supabase é construída.

## Executando localmente

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts disponíveis

```bash
npm run dev    # inicia o ambiente de desenvolvimento
npm run build  # gera a versão de produção
npm run start  # inicia a versão de produção
```

## Estrutura inicial

As principais áreas da aplicação são:

- `/` — visão geral da rotina do veterinário;
- `/pacientes` — cadastro e gerenciamento de pacientes;
- `/atendimentos` — agenda e registros de atendimentos;
- `/financeiro` — acompanhamento financeiro.
