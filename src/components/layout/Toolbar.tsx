import { Button } from "@/components/ui/button";
import { Eye, Plus, Search } from "lucide-react";

export function Toolbar() {
  return (
    <div className="border-b bg-muted/30 p-2">
      <div className="container mx-auto flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="hover:bg-purple-100 hover:text-purple-900 dark:hover:bg-purple-900/20 dark:hover:text-purple-300"
        >
          <Eye className="h-4 w-4 mr-2" />
          Visualize
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="hover:bg-purple-100 hover:text-purple-900 dark:hover:bg-purple-900/20 dark:hover:text-purple-300"
        >
          <Plus className="h-4 w-4 mr-2" />
          Create
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="hover:bg-purple-100 hover:text-purple-900 dark:hover:bg-purple-900/20 dark:hover:text-purple-300"
        >
          <Search className="h-4 w-4 mr-2" />
          Pattern Match
        </Button>
      </div>
    </div>
  );
}
