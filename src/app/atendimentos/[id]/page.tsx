import { notFound } from "next/navigation";
import { ConsultationWorkspace } from "@/components/ConsultationWorkspace";
import { appointments, patients } from "@/lib/mock-data";

export default async function ConsultationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const appointment = appointments.find((item) => item.id === id);
  const patient = appointment ? patients.find((item) => item.id === appointment.patientId) : undefined;
  if (!patient) notFound();
  return <ConsultationWorkspace patient={patient} />;
}
