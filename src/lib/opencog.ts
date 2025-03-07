import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/supabase";

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// OpenCog API integration
export interface Atom {
  id: string;
  type: string;
  name: string;
  value?: any;
  outgoing?: string[];
  incoming?: string[];
  truthValue?: {
    confidence: number;
    strength: number;
  };
  attentionValue?: {
    STI: number; // Short-Term Importance
    LTI: number; // Long-Term Importance
    VLTI: boolean; // Very Long-Term Importance
  };
  metadata?: Record<string, any>;
}

export interface AtomQuery {
  type?: string;
  name?: string;
  outgoing?: string[];
  limit?: number;
  offset?: number;
}

export interface PLNRule {
  id: string;
  name: string;
  description: string;
  formula: string;
  enabled: boolean;
}

export interface InferenceResult {
  id: string;
  atoms: Atom[];
  truthValue: {
    confidence: number;
    strength: number;
  };
  steps: any[];
  rule: string;
  timestamp: string;
}

// Mock data for development
const mockAtoms: Atom[] = [
  {
    id: "1",
    type: "ConceptNode",
    name: "human",
    truthValue: { confidence: 0.9, strength: 0.95 },
    attentionValue: { STI: 10, LTI: 5, VLTI: false },
  },
  {
    id: "2",
    type: "ConceptNode",
    name: "mammal",
    truthValue: { confidence: 0.95, strength: 0.98 },
    attentionValue: { STI: 8, LTI: 7, VLTI: false },
  },
  {
    id: "3",
    type: "ConceptNode",
    name: "animal",
    truthValue: { confidence: 0.98, strength: 0.99 },
    attentionValue: { STI: 6, LTI: 9, VLTI: true },
  },
  {
    id: "4",
    type: "InheritanceLink",
    name: "",
    outgoing: ["1", "2"],
    truthValue: { confidence: 0.9, strength: 0.95 },
  },
  {
    id: "5",
    type: "InheritanceLink",
    name: "",
    outgoing: ["2", "3"],
    truthValue: { confidence: 0.95, strength: 0.98 },
  },
];

const mockRules: PLNRule[] = [
  {
    id: "1",
    name: "Deduction",
    description:
      "If A is a type of B, and B is a type of C, then A is a type of C",
    formula: "sAB * sBC",
    enabled: true,
  },
  {
    id: "2",
    name: "Induction",
    description:
      "If A and B share a common property C, they may share other properties",
    formula: "sAB * sAC",
    enabled: true,
  },
  {
    id: "3",
    name: "Abduction",
    description:
      "If A is a type of C, and B is a type of C, then A might be related to B",
    formula: "sAC * sBC",
    enabled: true,
  },
];

// OpenCog API functions
export async function getAtoms(query: AtomQuery = {}): Promise<Atom[]> {
  // In a real implementation, this would call the OpenCog API
  // For now, return mock data

  // Simulate filtering
  let filteredAtoms = [...mockAtoms];

  if (query.type) {
    filteredAtoms = filteredAtoms.filter((atom) => atom.type === query.type);
  }

  if (query.name) {
    filteredAtoms = filteredAtoms.filter((atom) =>
      atom.name.includes(query.name),
    );
  }

  // Apply pagination
  const limit = query.limit || 100;
  const offset = query.offset || 0;

  return filteredAtoms.slice(offset, offset + limit);
}

export async function getAtom(id: string): Promise<Atom | null> {
  // In a real implementation, this would call the OpenCog API
  const atom = mockAtoms.find((a) => a.id === id);
  return atom || null;
}

export async function createAtom(atom: Omit<Atom, "id">): Promise<Atom> {
  // In a real implementation, this would call the OpenCog API
  const newAtom: Atom = {
    ...atom,
    id: Math.random().toString(36).substring(2, 9),
  };

  // In a real implementation, we would add this to the database
  // mockAtoms.push(newAtom);

  return newAtom;
}

export async function getPLNRules(): Promise<PLNRule[]> {
  // In a real implementation, this would call the OpenCog API
  return mockRules;
}

export async function runInference(query: string): Promise<InferenceResult[]> {
  // In a real implementation, this would call the OpenCog API
  // For now, return mock data
  return [
    {
      id: "1",
      atoms: [mockAtoms[0], mockAtoms[2]],
      truthValue: { confidence: 0.85, strength: 0.92 },
      steps: [],
      rule: "Deduction",
      timestamp: new Date().toISOString(),
    },
    {
      id: "2",
      atoms: [mockAtoms[0], mockAtoms[2]],
      truthValue: { confidence: 0.76, strength: 0.88 },
      steps: [],
      rule: "Induction",
      timestamp: new Date().toISOString(),
    },
  ];
}

// Function to connect to a remote OpenCog instance
export async function connectToOpenCogInstance(
  url: string,
  credentials: { username: string; password: string },
) {
  // In a real implementation, this would establish a connection to a remote OpenCog instance
  console.log(`Connecting to OpenCog instance at ${url}`);

  // Simulate a successful connection
  return {
    success: true,
    message: "Connected successfully to OpenCog instance",
    instanceInfo: {
      version: "0.8.4",
      atomCount: 12345,
      url,
    },
  };
}

// Function to deploy changes to an OpenCog instance
export async function deployChanges(changes: any) {
  // In a real implementation, this would deploy changes to the OpenCog instance
  console.log("Deploying changes:", changes);

  // Simulate a successful deployment
  return {
    success: true,
    message: "Changes deployed successfully",
    timestamp: new Date().toISOString(),
  };
}
