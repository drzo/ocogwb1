import React, { useState } from "react";
import { WireframeToolbar } from "./WireframeToolbar";
import { WireframeCanvas } from "./WireframeCanvas";
import { WireframeProperties } from "./WireframeProperties";
import { WireframeElement } from "./WireframeElement";

export type ElementType = "rectangle" | "text" | "button" | "input" | "image";

export interface WireframeElementData {
  id: string;
  type: ElementType;
  x: number;
  y: number;
  width: number;
  height: number;
  content?: string;
  properties?: Record<string, any>;
}

export interface WireframeProps {
  initialElements?: WireframeElementData[];
}

export function Wireframe({ initialElements = [] }: WireframeProps) {
  const [elements, setElements] =
    useState<WireframeElementData[]>(initialElements);
  const [selectedElement, setSelectedElement] =
    useState<WireframeElementData | null>(null);
  const [activeTool, setActiveTool] = useState<ElementType | null>(null);
  const [zoom, setZoom] = useState<number>(100);

  const handleAddElement = (type: ElementType) => {
    const newElement: WireframeElementData = {
      id: `element-${Date.now()}`,
      type,
      x: 100,
      y: 100,
      width: type === "text" ? 200 : 150,
      height: type === "text" ? 40 : 100,
      content: getDefaultContent(type),
      properties: getDefaultProperties(type),
    };

    setElements([...elements, newElement]);
    setSelectedElement(newElement);
  };

  const getDefaultContent = (type: ElementType): string => {
    switch (type) {
      case "text":
        return "Text Label";
      case "button":
        return "Button";
      case "input":
        return "";
      default:
        return "";
    }
  };

  const getDefaultProperties = (type: ElementType): Record<string, any> => {
    switch (type) {
      case "rectangle":
        return {
          backgroundColor: "#f1f5f9",
          borderColor: "#94a3b8",
          borderWidth: 1,
        };
      case "text":
        return { fontSize: 16, fontWeight: "normal", color: "#000000" };
      case "button":
        return {
          backgroundColor: "#6366f1",
          color: "#ffffff",
          borderRadius: 4,
        };
      case "input":
        return {
          placeholder: "Input field",
          borderColor: "#94a3b8",
          borderWidth: 1,
        };
      case "image":
        return {
          src: "https://via.placeholder.com/150",
          alt: "Placeholder image",
        };
      default:
        return {};
    }
  };

  const handleSelectElement = (element: WireframeElementData | null) => {
    setSelectedElement(element);
  };

  const handleUpdateElement = (updatedElement: WireframeElementData) => {
    setElements(
      elements.map((el) => (el.id === updatedElement.id ? updatedElement : el)),
    );
    setSelectedElement(updatedElement);
  };

  const handleDeleteElement = (id: string) => {
    setElements(elements.filter((el) => el.id !== id));
    if (selectedElement?.id === id) {
      setSelectedElement(null);
    }
  };

  const handleDuplicateElement = (element: WireframeElementData) => {
    const newElement = {
      ...element,
      id: `element-${Date.now()}`,
      x: element.x + 20,
      y: element.y + 20,
    };
    setElements([...elements, newElement]);
    setSelectedElement(newElement);
  };

  const handleZoomChange = (newZoom: number) => {
    setZoom(newZoom);
  };

  return (
    <div className="flex flex-col h-full bg-background">
      <WireframeToolbar
        activeTool={activeTool}
        setActiveTool={setActiveTool}
        zoom={zoom}
        onZoomChange={handleZoomChange}
        onAddElement={handleAddElement}
      />
      <div className="flex flex-1 overflow-hidden">
        <WireframeCanvas
          elements={elements}
          selectedElement={selectedElement}
          onSelectElement={handleSelectElement}
          onUpdateElement={handleUpdateElement}
          zoom={zoom}
          activeTool={activeTool}
          setActiveTool={setActiveTool}
        />
        <WireframeProperties
          selectedElement={selectedElement}
          onUpdateElement={handleUpdateElement}
          onDeleteElement={handleDeleteElement}
          onDuplicateElement={handleDuplicateElement}
        />
      </div>
    </div>
  );
}
