import { notFound } from "next/navigation";
import { PatientWorkspace } from "@/components/PatientWorkspace";
import { patients } from "@/lib/mock-data";

export default async function PatientPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const patient = patients.find((item) => item.id === id);
  if (!patient) notFound();
  return <PatientWorkspace patient={patient} />;
}
