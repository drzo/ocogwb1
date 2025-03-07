import React from "react";
import { WireframeElementData } from "./Wireframe";

interface WireframeElementProps {
  element: WireframeElementData;
  isSelected: boolean;
  onSelect: (element: WireframeElementData) => void;
  onDragStart: (e: React.MouseEvent, element: WireframeElementData) => void;
  onResizeStart: (
    e: React.MouseEvent,
    element: WireframeElementData,
    direction: string,
  ) => void;
}

export function WireframeElement({
  element,
  isSelected,
  onSelect,
  onDragStart,
  onResizeStart,
}: WireframeElementProps) {
  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(element);
    onDragStart(e, element);
  };

  const renderResizeHandles = () => {
    if (!isSelected) return null;

    const handles = [
      { position: "nw", cursor: "nwse-resize", top: -4, left: -4 },
      { position: "n", cursor: "ns-resize", top: -4, left: "calc(50% - 4px)" },
      { position: "ne", cursor: "nesw-resize", top: -4, right: -4 },
      { position: "e", cursor: "ew-resize", top: "calc(50% - 4px)", right: -4 },
      { position: "se", cursor: "nwse-resize", bottom: -4, right: -4 },
      {
        position: "s",
        cursor: "ns-resize",
        bottom: -4,
        left: "calc(50% - 4px)",
      },
      { position: "sw", cursor: "nesw-resize", bottom: -4, left: -4 },
      { position: "w", cursor: "ew-resize", top: "calc(50% - 4px)", left: -4 },
    ];

    return handles.map((handle) => (
      <div
        key={handle.position}
        className="absolute w-2 h-2 bg-purple-500 border border-white rounded-full z-10"
        style={{
          cursor: handle.cursor,
          top: handle.top,
          left: handle.left,
          right: handle.right,
          bottom: handle.bottom,
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
          onResizeStart(e, element, handle.position);
        }}
      />
    ));
  };

  const renderElementContent = () => {
    switch (element.type) {
      case "rectangle":
        return (
          <div
            className="w-full h-full"
            style={{
              backgroundColor: element.properties?.backgroundColor || "#f1f5f9",
              border: `${element.properties?.borderWidth || 1}px solid ${element.properties?.borderColor || "#94a3b8"}`,
            }}
          />
        );
      case "text":
        return (
          <div
            className="w-full h-full flex items-center"
            style={{
              fontSize: `${element.properties?.fontSize || 16}px`,
              fontWeight: element.properties?.fontWeight || "normal",
              color: element.properties?.color || "#000000",
            }}
          >
            {element.content || "Text Label"}
          </div>
        );
      case "button":
        return (
          <button
            className="w-full h-full flex items-center justify-center"
            style={{
              backgroundColor: element.properties?.backgroundColor || "#6366f1",
              color: element.properties?.color || "#ffffff",
              borderRadius: `${element.properties?.borderRadius || 4}px`,
              border: "none",
              cursor: "default",
            }}
            onClick={(e) => e.preventDefault()}
          >
            {element.content || "Button"}
          </button>
        );
      case "input":
        return (
          <div
            className="w-full h-full flex items-center px-2"
            style={{
              backgroundColor: "#ffffff",
              border: `1px solid ${element.properties?.borderColor || "#94a3b8"}`,
              borderRadius: "4px",
              color: "#64748b",
            }}
          >
            {element.content ||
              element.properties?.placeholder ||
              "Input field"}
          </div>
        );
      case "image":
        return (
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <img
              src={element.properties?.src || "https://via.placeholder.com/150"}
              alt={element.properties?.alt || "Placeholder image"}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`absolute ${isSelected ? "ring-2 ring-purple-500" : ""}`}
      style={{
        left: element.x,
        top: element.y,
        width: element.width,
        height: element.height,
        cursor: "move",
      }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(element);
      }}
      onMouseDown={handleMouseDown}
    >
      {renderElementContent()}
      {renderResizeHandles()}
    </div>
  );
}
