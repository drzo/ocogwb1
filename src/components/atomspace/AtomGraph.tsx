import { useEffect, useRef } from "react";

export function AtomGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background grid
    drawGrid(ctx, canvas.width, canvas.height);

    // Draw sample nodes and connections
    drawSampleGraph(ctx, canvas.width, canvas.height);
  }, []);

  const drawGrid = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
  ) => {
    ctx.strokeStyle = "rgba(200, 200, 200, 0.2)";
    ctx.lineWidth = 1;

    const gridSize = 20;

    // Draw vertical lines
    for (let x = 0; x <= width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Draw horizontal lines
    for (let y = 0; y <= height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  };

  const drawSampleGraph = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
  ) => {
    // Define node positions
    const nodes = [
      {
        x: width * 0.5,
        y: height * 0.3,
        radius: 25,
        color: "rgba(147, 51, 234, 0.7)",
        label: "ConceptNode",
      },
      {
        x: width * 0.3,
        y: height * 0.5,
        radius: 20,
        color: "rgba(79, 70, 229, 0.7)",
        label: "PredicateNode",
      },
      {
        x: width * 0.7,
        y: height * 0.5,
        radius: 20,
        color: "rgba(79, 70, 229, 0.7)",
        label: "PredicateNode",
      },
      {
        x: width * 0.4,
        y: height * 0.7,
        radius: 18,
        color: "rgba(236, 72, 153, 0.7)",
        label: "ListLink",
      },
      {
        x: width * 0.6,
        y: height * 0.7,
        radius: 18,
        color: "rgba(236, 72, 153, 0.7)",
        label: "EvaluationLink",
      },
    ];

    // Define connections
    const connections = [
      { from: 0, to: 1 },
      { from: 0, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 3, to: 4 },
    ];

    // Draw connections first (so they appear behind nodes)
    ctx.strokeStyle = "rgba(100, 100, 100, 0.5)";
    ctx.lineWidth = 2;

    connections.forEach((conn) => {
      const fromNode = nodes[conn.from];
      const toNode = nodes[conn.to];

      ctx.beginPath();
      ctx.moveTo(fromNode.x, fromNode.y);
      ctx.lineTo(toNode.x, toNode.y);
      ctx.stroke();
    });

    // Draw nodes
    nodes.forEach((node) => {
      // Draw circle
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = node.color;
      ctx.fill();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw label
      ctx.fillStyle = "white";
      ctx.font = "10px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(node.label, node.x, node.y);
    });
  };

  return (
    <div className="w-full h-full relative border rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-900">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: "block" }}
      />
    </div>
  );
}
