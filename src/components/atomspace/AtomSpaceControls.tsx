import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, List, Network, Settings } from "lucide-react";

export function AtomSpaceControls({
  activeView,
  setActiveView,
}: {
  activeView: string;
  setActiveView: (view: string) => void;
}) {
  return (
    <div className="flex justify-between items-center mb-4">
      <Tabs value={activeView} onValueChange={setActiveView} className="w-auto">
        <TabsList>
          <TabsTrigger value="list" className="flex items-center gap-1">
            <List className="h-4 w-4" />
            List View
          </TabsTrigger>
          <TabsTrigger value="graph" className="flex items-center gap-1">
            <Network className="h-4 w-4" />
            Graph View
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-1">
            <Settings className="h-4 w-4" />
            Settings
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Button className="bg-purple-600 hover:bg-purple-700">
        <Plus className="h-4 w-4 mr-2" />
        Create Atom
      </Button>
    </div>
  );
}
