import { PLNInterface } from "@/components/pln/PLNInterface";

export default function PLN() {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">
        Probabilistic Logic Networks
      </h2>
      <div className="border rounded-lg bg-card h-[calc(100vh-180px)] overflow-hidden">
        <PLNInterface />
      </div>
    </div>
  );
}
