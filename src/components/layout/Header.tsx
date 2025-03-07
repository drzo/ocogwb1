import { Button } from "@/components/ui/button";
import { ExternalLink, GitBranch, Download, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b bg-background">
      <h1 className="text-xl font-bold">OpenCog Workbench</h1>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">
          <ExternalLink className="h-4 w-4 mr-2" />
          Connect
        </Button>
        <Button variant="outline" size="sm">
          <GitBranch className="h-4 w-4 mr-2" />
          Deploy
        </Button>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
        <Button variant="outline" size="sm" asChild>
          <Link to="/help">
            <HelpCircle className="h-4 w-4 mr-2" />
            Help
          </Link>
        </Button>
      </div>
    </header>
  );
}
