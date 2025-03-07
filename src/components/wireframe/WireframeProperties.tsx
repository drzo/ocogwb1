import React from "react";
import { WireframeElementData } from "./Wireframe";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Trash, Copy, Move } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";

interface WireframePropertiesProps {
  selectedElement: WireframeElementData | null;
  onUpdateElement: (element: WireframeElementData) => void;
  onDeleteElement: (id: string) => void;
  onDuplicateElement: (element: WireframeElementData) => void;
}

export function WireframeProperties({
  selectedElement,
  onUpdateElement,
  onDeleteElement,
  onDuplicateElement,
}: WireframePropertiesProps) {
  if (!selectedElement) {
    return (
      <div className="w-64 border-l bg-card p-4 overflow-y-auto">
        <div className="text-sm text-muted-foreground text-center py-8">
          Select an element to edit its properties
        </div>
      </div>
    );
  }

  const handlePositionChange = (
    key: "x" | "y" | "width" | "height",
    value: number,
  ) => {
    onUpdateElement({
      ...selectedElement,
      [key]: value,
    });
  };

  const handleContentChange = (content: string) => {
    onUpdateElement({
      ...selectedElement,
      content,
    });
  };

  const handlePropertyChange = (key: string, value: any) => {
    onUpdateElement({
      ...selectedElement,
      properties: {
        ...selectedElement.properties,
        [key]: value,
      },
    });
  };

  return (
    <div className="w-64 border-l bg-card p-4 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium">
          {selectedElement.type.charAt(0).toUpperCase() +
            selectedElement.type.slice(1)}
        </h3>
        <div className="flex space-x-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDuplicateElement(selectedElement)}
            title="Duplicate"
          >
            <Copy className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDeleteElement(selectedElement.id)}
            title="Delete"
          >
            <Trash className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="layout">
        <TabsList className="w-full">
          <TabsTrigger value="layout" className="flex-1">
            Layout
          </TabsTrigger>
          <TabsTrigger value="style" className="flex-1">
            Style
          </TabsTrigger>
          <TabsTrigger value="content" className="flex-1">
            Content
          </TabsTrigger>
        </TabsList>

        <TabsContent value="layout" className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <Label htmlFor="x-position" className="text-xs">
                X Position
              </Label>
              <Input
                id="x-position"
                type="number"
                value={Math.round(selectedElement.x)}
                onChange={(e) =>
                  handlePositionChange("x", Number(e.target.value))
                }
                className="h-8"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="y-position" className="text-xs">
                Y Position
              </Label>
              <Input
                id="y-position"
                type="number"
                value={Math.round(selectedElement.y)}
                onChange={(e) =>
                  handlePositionChange("y", Number(e.target.value))
                }
                className="h-8"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <Label htmlFor="width" className="text-xs">
                Width
              </Label>
              <Input
                id="width"
                type="number"
                value={Math.round(selectedElement.width)}
                onChange={(e) =>
                  handlePositionChange("width", Number(e.target.value))
                }
                className="h-8"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="height" className="text-xs">
                Height
              </Label>
              <Input
                id="height"
                type="number"
                value={Math.round(selectedElement.height)}
                onChange={(e) =>
                  handlePositionChange("height", Number(e.target.value))
                }
                className="h-8"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="style" className="space-y-4 mt-4">
          {selectedElement.type === "rectangle" && (
            <>
              <div className="space-y-1">
                <Label htmlFor="bg-color" className="text-xs">
                  Background Color
                </Label>
                <div className="flex space-x-2">
                  <div
                    className="w-8 h-8 rounded border"
                    style={{
                      backgroundColor:
                        selectedElement.properties?.backgroundColor,
                    }}
                  />
                  <Input
                    id="bg-color"
                    type="text"
                    value={selectedElement.properties?.backgroundColor}
                    onChange={(e) =>
                      handlePropertyChange("backgroundColor", e.target.value)
                    }
                    className="flex-1 h-8"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="border-color" className="text-xs">
                  Border Color
                </Label>
                <div className="flex space-x-2">
                  <div
                    className="w-8 h-8 rounded border"
                    style={{
                      backgroundColor: selectedElement.properties?.borderColor,
                    }}
                  />
                  <Input
                    id="border-color"
                    type="text"
                    value={selectedElement.properties?.borderColor}
                    onChange={(e) =>
                      handlePropertyChange("borderColor", e.target.value)
                    }
                    className="flex-1 h-8"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="border-width" className="text-xs">
                  Border Width
                </Label>
                <div className="flex items-center space-x-2">
                  <Slider
                    id="border-width"
                    min={0}
                    max={10}
                    step={1}
                    value={[selectedElement.properties?.borderWidth || 0]}
                    onValueChange={(value) =>
                      handlePropertyChange("borderWidth", value[0])
                    }
                    className="flex-1"
                  />
                  <span className="text-xs w-6 text-center">
                    {selectedElement.properties?.borderWidth || 0}px
                  </span>
                </div>
              </div>
            </>
          )}

          {selectedElement.type === "text" && (
            <>
              <div className="space-y-1">
                <Label htmlFor="font-size" className="text-xs">
                  Font Size
                </Label>
                <div className="flex items-center space-x-2">
                  <Slider
                    id="font-size"
                    min={8}
                    max={72}
                    step={1}
                    value={[selectedElement.properties?.fontSize || 16]}
                    onValueChange={(value) =>
                      handlePropertyChange("fontSize", value[0])
                    }
                    className="flex-1"
                  />
                  <span className="text-xs w-8 text-center">
                    {selectedElement.properties?.fontSize || 16}px
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="font-weight" className="text-xs">
                  Font Weight
                </Label>
                <select
                  id="font-weight"
                  value={selectedElement.properties?.fontWeight || "normal"}
                  onChange={(e) =>
                    handlePropertyChange("fontWeight", e.target.value)
                  }
                  className="w-full h-8 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <option value="normal">Normal</option>
                  <option value="bold">Bold</option>
                  <option value="light">Light</option>
                </select>
              </div>

              <div className="space-y-1">
                <Label htmlFor="text-color" className="text-xs">
                  Text Color
                </Label>
                <div className="flex space-x-2">
                  <div
                    className="w-8 h-8 rounded border"
                    style={{
                      backgroundColor: selectedElement.properties?.color,
                    }}
                  />
                  <Input
                    id="text-color"
                    type="text"
                    value={selectedElement.properties?.color}
                    onChange={(e) =>
                      handlePropertyChange("color", e.target.value)
                    }
                    className="flex-1 h-8"
                  />
                </div>
              </div>
            </>
          )}

          {selectedElement.type === "button" && (
            <>
              <div className="space-y-1">
                <Label htmlFor="button-bg-color" className="text-xs">
                  Background Color
                </Label>
                <div className="flex space-x-2">
                  <div
                    className="w-8 h-8 rounded border"
                    style={{
                      backgroundColor:
                        selectedElement.properties?.backgroundColor,
                    }}
                  />
                  <Input
                    id="button-bg-color"
                    type="text"
                    value={selectedElement.properties?.backgroundColor}
                    onChange={(e) =>
                      handlePropertyChange("backgroundColor", e.target.value)
                    }
                    className="flex-1 h-8"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="button-text-color" className="text-xs">
                  Text Color
                </Label>
                <div className="flex space-x-2">
                  <div
                    className="w-8 h-8 rounded border"
                    style={{
                      backgroundColor: selectedElement.properties?.color,
                    }}
                  />
                  <Input
                    id="button-text-color"
                    type="text"
                    value={selectedElement.properties?.color}
                    onChange={(e) =>
                      handlePropertyChange("color", e.target.value)
                    }
                    className="flex-1 h-8"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="border-radius" className="text-xs">
                  Border Radius
                </Label>
                <div className="flex items-center space-x-2">
                  <Slider
                    id="border-radius"
                    min={0}
                    max={20}
                    step={1}
                    value={[selectedElement.properties?.borderRadius || 0]}
                    onValueChange={(value) =>
                      handlePropertyChange("borderRadius", value[0])
                    }
                    className="flex-1"
                  />
                  <span className="text-xs w-6 text-center">
                    {selectedElement.properties?.borderRadius || 0}px
                  </span>
                </div>
              </div>
            </>
          )}

          {selectedElement.type === "input" && (
            <>
              <div className="space-y-1">
                <Label htmlFor="placeholder" className="text-xs">
                  Placeholder
                </Label>
                <Input
                  id="placeholder"
                  type="text"
                  value={selectedElement.properties?.placeholder || ""}
                  onChange={(e) =>
                    handlePropertyChange("placeholder", e.target.value)
                  }
                  className="h-8"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="input-border-color" className="text-xs">
                  Border Color
                </Label>
                <div className="flex space-x-2">
                  <div
                    className="w-8 h-8 rounded border"
                    style={{
                      backgroundColor: selectedElement.properties?.borderColor,
                    }}
                  />
                  <Input
                    id="input-border-color"
                    type="text"
                    value={selectedElement.properties?.borderColor}
                    onChange={(e) =>
                      handlePropertyChange("borderColor", e.target.value)
                    }
                    className="flex-1 h-8"
                  />
                </div>
              </div>
            </>
          )}

          {selectedElement.type === "image" && (
            <>
              <div className="space-y-1">
                <Label htmlFor="image-src" className="text-xs">
                  Image URL
                </Label>
                <Input
                  id="image-src"
                  type="text"
                  value={selectedElement.properties?.src || ""}
                  onChange={(e) => handlePropertyChange("src", e.target.value)}
                  className="h-8"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="image-alt" className="text-xs">
                  Alt Text
                </Label>
                <Input
                  id="image-alt"
                  type="text"
                  value={selectedElement.properties?.alt || ""}
                  onChange={(e) => handlePropertyChange("alt", e.target.value)}
                  className="h-8"
                />
              </div>
            </>
          )}
        </TabsContent>

        <TabsContent value="content" className="space-y-4 mt-4">
          {(selectedElement.type === "text" ||
            selectedElement.type === "button") && (
            <div className="space-y-1">
              <Label htmlFor="content-text" className="text-xs">
                Text
              </Label>
              <Input
                id="content-text"
                type="text"
                value={selectedElement.content || ""}
                onChange={(e) => handleContentChange(e.target.value)}
                className="h-8"
              />
            </div>
          )}

          {selectedElement.type === "input" && (
            <div className="space-y-1">
              <Label htmlFor="input-value" className="text-xs">
                Default Value
              </Label>
              <Input
                id="input-value"
                type="text"
                value={selectedElement.content || ""}
                onChange={(e) => handleContentChange(e.target.value)}
                className="h-8"
              />
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
