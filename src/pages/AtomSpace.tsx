import { useState } from "react";
import { AtomList } from "@/components/atomspace/AtomList";
import { AtomGraph } from "@/components/atomspace/AtomGraph";
import { AtomSpaceControls } from "@/components/atomspace/AtomSpaceControls";
import { AtomSpaceSettings } from "@/components/atomspace/AtomSpaceSettings";

export default function AtomSpace() {
  const [activeView, setActiveView] = useState("list");

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">AtomSpace Explorer</h2>

      <AtomSpaceControls
        activeView={activeView}
        setActiveView={setActiveView}
      />

      <div className="border rounded-lg bg-card p-6 h-[calc(100vh-220px)]">
        {activeView === "list" && <AtomList />}
        {activeView === "graph" && <AtomGraph />}
        {activeView === "settings" && <AtomSpaceSettings />}
      </div>
    </div>
  );
}
