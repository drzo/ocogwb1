import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import {
  Square,
  Type,
  MousePointer,
  Image as ImageIcon,
  FormInput,
  ZoomIn,
  ZoomOut,
  Save,
  Download,
} from "lucide-react";
import { ElementType } from "./Wireframe";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface WireframeToolbarProps {
  activeTool: ElementType | null;
  setActiveTool: (tool: ElementType | null) => void;
  zoom: number;
  onZoomChange: (zoom: number) => void;
  onAddElement: (type: ElementType) => void;
}

export function WireframeToolbar({
  activeTool,
  setActiveTool,
  zoom,
  onZoomChange,
  onAddElement,
}: WireframeToolbarProps) {
  const handleToolClick = (tool: ElementType | null) => {
    if (tool === activeTool) {
      setActiveTool(null);
    } else {
      setActiveTool(tool);
      if (tool) {
        onAddElement(tool);
      }
    }
  };

  return (
    <div className="flex items-center p-2 border-b bg-muted/30">
      <TooltipProvider>
        <div className="flex items-center space-x-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={activeTool === null ? "secondary" : "ghost"}
                size="icon"
                onClick={() => handleToolClick(null)}
              >
                <MousePointer className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Select (Esc)</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <Separator orientation="vertical" className="mx-2 h-6" />

        <div className="flex items-center space-x-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={activeTool === "rectangle" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => handleToolClick("rectangle")}
              >
                <Square className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Rectangle</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={activeTool === "text" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => handleToolClick("text")}
              >
                <Type className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Text</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={activeTool === "button" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => handleToolClick("button")}
              >
                <div className="h-4 w-4 flex items-center justify-center text-xs font-bold border rounded">
                  B
                </div>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Button</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={activeTool === "input" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => handleToolClick("input")}
              >
                <FormInput className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Input Field</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant={activeTool === "image" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => handleToolClick("image")}
              >
                <ImageIcon className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Image</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <Separator orientation="vertical" className="mx-2 h-6" />

        <div className="flex items-center space-x-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onZoomChange(Math.max(25, zoom - 25))}
                disabled={zoom <= 25}
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Zoom Out</p>
            </TooltipContent>
          </Tooltip>

          <div className="w-32">
            <Slider
              value={[zoom]}
              min={25}
              max={200}
              step={25}
              onValueChange={(value) => onZoomChange(value[0])}
            />
          </div>

          <div className="w-12 text-center text-sm">{zoom}%</div>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onZoomChange(Math.min(200, zoom + 25))}
                disabled={zoom >= 200}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Zoom In</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <Separator orientation="vertical" className="mx-2 h-6" />

        <div className="flex items-center space-x-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm">
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Save Wireframe</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Export as PNG</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  );
}
