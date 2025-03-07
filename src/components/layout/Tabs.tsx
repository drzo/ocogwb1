import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocation, Link } from "react-router-dom";

const tabs = [
  { id: "atomspace", label: "AtomSpace" },
  { id: "pln", label: "PLN" },
  { id: "ure", label: "URE" },
  { id: "attention", label: "Attention" },
  { id: "spacetime", label: "Spacetime" },
  { id: "asmoses", label: "ASMoses" },
  { id: "wireframe", label: "Wireframe" },
  { id: "help", label: "Help" },
];

export function NavigationTabs() {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1] || "atomspace";

  return (
    <div className="border-b bg-background">
      <div className="container mx-auto">
        <Tabs defaultValue={currentPath} className="w-full" value={currentPath}>
          <TabsList className="w-full justify-start">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-900 dark:data-[state=active]:bg-purple-900/20 dark:data-[state=active]:text-purple-300"
                asChild
              >
                <Link to={`/${tab.id}`}>{tab.label}</Link>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
