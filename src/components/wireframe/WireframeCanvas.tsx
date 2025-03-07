import React, { useRef, useState, useEffect } from "react";
import { WireframeElement } from "./WireframeElement";
import { ElementType, WireframeElementData } from "./Wireframe";

interface WireframeCanvasProps {
  elements: WireframeElementData[];
  selectedElement: WireframeElementData | null;
  onSelectElement: (element: WireframeElementData | null) => void;
  onUpdateElement: (element: WireframeElementData) => void;
  zoom: number;
  activeTool: ElementType | null;
  setActiveTool: (tool: ElementType | null) => void;
}

export function WireframeCanvas({
  elements,
  selectedElement,
  onSelectElement,
  onUpdateElement,
  zoom,
  activeTool,
  setActiveTool,
}: WireframeCanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveTool(null);
        onSelectElement(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setActiveTool, onSelectElement]);

  const handleCanvasClick = (e: React.MouseEvent) => {
    // Only deselect if clicking directly on the canvas, not on an element
    if (e.target === canvasRef.current) {
      onSelectElement(null);
    }
  };

  const handleElementSelect = (element: WireframeElementData) => {
    onSelectElement(element);
  };

  const handleDragStart = (
    e: React.MouseEvent,
    element: WireframeElementData,
  ) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - element.x,
      y: e.clientY - element.y,
    });
    onSelectElement(element);
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (isDragging && selectedElement) {
      const scale = zoom / 100;
      const newX = (e.clientX - dragStart.x) / scale;
      const newY = (e.clientY - dragStart.y) / scale;

      onUpdateElement({
        ...selectedElement,
        x: newX,
        y: newY,
      });
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleResizeStart = (
    e: React.MouseEvent,
    element: WireframeElementData,
    direction: string,
  ) => {
    e.stopPropagation();
    setIsResizing(true);
    setResizeDirection(direction);
    setDragStart({
      x: e.clientX,
      y: e.clientY,
    });
    onSelectElement(element);
  };

  const handleResizeMove = (e: React.MouseEvent) => {
    if (isResizing && selectedElement) {
      const scale = zoom / 100;
      const deltaX = (e.clientX - dragStart.x) / scale;
      const deltaY = (e.clientY - dragStart.y) / scale;

      let newWidth = selectedElement.width;
      let newHeight = selectedElement.height;
      let newX = selectedElement.x;
      let newY = selectedElement.y;

      if (resizeDirection.includes("e")) {
        newWidth = Math.max(20, selectedElement.width + deltaX);
      }
      if (resizeDirection.includes("w")) {
        newWidth = Math.max(20, selectedElement.width - deltaX);
        newX = selectedElement.x + deltaX;
      }
      if (resizeDirection.includes("s")) {
        newHeight = Math.max(20, selectedElement.height + deltaY);
      }
      if (resizeDirection.includes("n")) {
        newHeight = Math.max(20, selectedElement.height - deltaY);
        newY = selectedElement.y + deltaY;
      }

      setDragStart({
        x: e.clientX,
        y: e.clientY,
      });

      onUpdateElement({
        ...selectedElement,
        width: newWidth,
        height: newHeight,
        x: newX,
        y: newY,
      });
    }
  };

  const handleResizeEnd = () => {
    setIsResizing(false);
    setResizeDirection("");
  };

  useEffect(() => {
    if (isDragging || isResizing) {
      const handleMouseMove = (e: MouseEvent) => {
        if (isDragging) {
          handleDragMove(e as unknown as React.MouseEvent);
        } else if (isResizing) {
          handleResizeMove(e as unknown as React.MouseEvent);
        }
      };

      const handleMouseUp = () => {
        if (isDragging) {
          handleDragEnd();
        } else if (isResizing) {
          handleResizeEnd();
        }
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, isResizing]);

  return (
    <div className="flex-1 overflow-auto bg-gray-100 dark:bg-gray-900 relative">
      <div
        ref={canvasRef}
        className="min-h-full min-w-full p-4"
        onClick={handleCanvasClick}
        style={{
          transform: `scale(${zoom / 100})`,
          transformOrigin: "0 0",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="w-[1200px] h-[800px] bg-white dark:bg-gray-800 shadow-md mx-auto relative">
          {elements.map((element) => (
            <WireframeElement
              key={element.id}
              element={element}
              isSelected={selectedElement?.id === element.id}
              onSelect={handleElementSelect}
              onDragStart={handleDragStart}
              onResizeStart={handleResizeStart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
