// This file defines routes for Tempo storyboards
// These routes are only included when VITE_TEMPO=true
import { ReactNode } from "react";

const routes = [
  {
    path: "/tempobook/*",
    element: (<div />) as ReactNode,
  },
];

export default routes;
