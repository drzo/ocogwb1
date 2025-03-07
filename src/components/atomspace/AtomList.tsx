import { AtomCard, AtomProps } from "./AtomCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

const sampleAtoms: AtomProps[] = [
  {
    id: "a1b2c3",
    type: "ConceptNode",
    name: "Person",
    truthValue: { strength: 0.9, confidence: 0.8 },
    outgoingLinks: 5,
    incomingLinks: 2,
  },
  {
    id: "d4e5f6",
    type: "PredicateNode",
    name: "IsA",
    truthValue: { strength: 1.0, confidence: 0.95 },
    outgoingLinks: 0,
    incomingLinks: 8,
  },
  {
    id: "g7h8i9",
    type: "ConceptNode",
    name: "Human",
    truthValue: { strength: 0.85, confidence: 0.75 },
    outgoingLinks: 3,
    incomingLinks: 4,
  },
  {
    id: "j1k2l3",
    type: "EvaluationLink",
    name: "Evaluation",
    outgoingLinks: 2,
    incomingLinks: 0,
  },
  {
    id: "m4n5o6",
    type: "ListLink",
    name: "List",
    outgoingLinks: 3,
    incomingLinks: 1,
  },
];

export function AtomList() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search atoms..." className="pl-8" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[140px]">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="concept">ConceptNode</SelectItem>
            <SelectItem value="predicate">PredicateNode</SelectItem>
            <SelectItem value="evaluation">EvaluationLink</SelectItem>
            <SelectItem value="list">ListLink</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 overflow-y-auto pb-4">
        {sampleAtoms.map((atom) => (
          <AtomCard key={atom.id} atom={atom} />
        ))}
      </div>
    </div>
  );
}
