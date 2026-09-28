export type Patient = {
  id: string;
  petName: string;
  species: string;
  breed: string;
  sex: string;
  neutered: string;
  age: string;
  weight: string;
  status: string;
  tutorName: string;
  tutorPhone: string;
  tutorEmail: string;
  tutorAddress: string;
  tutorCpf: string;
  complaint: string;
  alerts: string[];
  allergies: string;
};

export const patients: Patient[] = [
  {
    id: "thor",
    petName: "Thor",
    species: "Cão",
    breed: "Golden Retriever",
    sex: "Macho",
    neutered: "Castrado",
    age: "5 anos",
    weight: "31,5 kg",
    status: "Em acompanhamento",
    tutorName: "Carlos Silva",
    tutorPhone: "(11) 99999-8888",
    tutorEmail: "carlos.silva@email.com",
    tutorAddress: "Rua das Flores, 123, Apto 42",
    tutorCpf: "123.456.789-00",
    complaint: "Pet prostrado desde ontem, sacudindo a cabeça e raspando a orelha esquerda no chão.",
    alerts: ["Cardiopatia"],
    allergies: "Dipirona e frango. Sopro cardíaco grau III/VI, em uso contínuo de Enalapril.",
  },
  {
    id: "luna",
    petName: "Luna",
    species: "Gato",
    breed: "SRD",
    sex: "Fêmea",
    neutered: "Castrada",
    age: "3 anos",
    weight: "4,8 kg",
    status: "Acompanhamento",
    tutorName: "Maria Souza",
    tutorPhone: "(11) 98888-7777",
    tutorEmail: "",
    tutorAddress: "",
    tutorCpf: "",
    complaint: "Retorno pós-operatório.",
    alerts: [],
    allergies: "Nenhuma alergia registrada.",
  },
];

export const appointments = [
  { id: "appointment-1", time: "14:00", patientId: "thor", detail: "Consulta de rotina", status: "Agendado" },
  { id: "appointment-2", time: "15:30", patientId: "luna", detail: "Retorno pós-operatório", status: "Confirmado" },
  { id: "appointment-3", time: "17:00", patientId: "thor", detail: "Vacinação anual", status: "Aguardando" },
];
