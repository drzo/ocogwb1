import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Link } from "lucide-react";

export interface AtomProps {
  id: string;
  type: string;
  name: string;
  truthValue?: {
    strength: number;
    confidence: number;
  };
  outgoingLinks?: number;
  incomingLinks?: number;
}

export function AtomCard({ atom }: { atom: AtomProps }) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{atom.name}</CardTitle>
            <CardDescription className="text-xs mt-1">
              ID: {atom.id}
            </CardDescription>
          </div>
          <Badge
            variant="outline"
            className="bg-purple-100/50 text-purple-900 dark:bg-purple-900/20 dark:text-purple-300"
          >
            {atom.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        {atom.truthValue && (
          <div className="grid grid-cols-2 gap-2 text-sm mb-2">
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Strength</span>
              <span className="font-medium">
                {atom.truthValue.strength.toFixed(2)}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground">Confidence</span>
              <span className="font-medium">
                {atom.truthValue.confidence.toFixed(2)}
              </span>
            </div>
          </div>
        )}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Outgoing</span>
            <span className="font-medium">{atom.outgoingLinks || 0}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">Incoming</span>
            <span className="font-medium">{atom.incomingLinks || 0}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <div className="flex gap-2 w-full">
          <Button variant="ghost" size="sm" className="flex-1 h-8">
            <Edit className="h-3.5 w-3.5 mr-1" />
            Edit
          </Button>
          <Button variant="ghost" size="sm" className="flex-1 h-8">
            <Link className="h-3.5 w-3.5 mr-1" />
            Links
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex-1 h-8 text-destructive hover:text-destructive"
          >
            <Trash2 className="h-3.5 w-3.5 mr-1" />
            Delete
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
