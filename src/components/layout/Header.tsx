import { Button } from "@/components/ui/button";
import { ExternalLink, GitBranch, Download, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b bg-background shadow-sm">
      <h1 className="text-xl font-bold text-purple-700">OpenCog Workbench</h1>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          className="text-purple-500 hover:bg-purple-100 hover:text-purple-700"
        >
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-purple-500 hover:bg-purple-100 hover:text-purple-700"
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          Connect
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-purple-500 hover:bg-purple-100 hover:text-purple-700"
        >
          <GitBranch className="h-4 w-4 mr-2" />
          Deploy
        </Button>
        <Button
          variant="outline"
          size="sm"
          asChild
          className="text-purple-500 hover:bg-purple-100 hover:text-purple-700"
        >
          <Link to="/help">
            <HelpCircle className="h-4 w-4 mr-2" />
            Help
          </Link>
        </Button>
      </div>
    </header>
  );
}
