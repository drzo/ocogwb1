import { Wireframe } from "@/components/wireframe/Wireframe";

export default function WireframePage() {
  return (
    <div className="container mx-auto h-[calc(100vh-180px)]">
      <h2 className="text-2xl font-semibold mb-4">Wireframe Designer</h2>
      <div className="border rounded-lg bg-card h-full overflow-hidden">
        <Wireframe />
      </div>
    </div>
  );
}
