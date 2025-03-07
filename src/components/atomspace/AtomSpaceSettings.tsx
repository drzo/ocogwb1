import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function AtomSpaceSettings() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Visualization Settings</CardTitle>
          <CardDescription>
            Configure how atoms are displayed in the graph view
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="node-size">Node Size</Label>
              <span className="text-sm text-muted-foreground">Medium</span>
            </div>
            <Slider id="node-size" defaultValue={[50]} max={100} step={1} />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="edge-thickness">Edge Thickness</Label>
              <span className="text-sm text-muted-foreground">2px</span>
            </div>
            <Slider
              id="edge-thickness"
              defaultValue={[40]}
              max={100}
              step={1}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="show-labels">Show Node Labels</Label>
            <Switch id="show-labels" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="show-truth-values">Show Truth Values</Label>
            <Switch id="show-truth-values" defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Display Options</CardTitle>
          <CardDescription>Configure general display settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="layout-algorithm">Layout Algorithm</Label>
            <Select defaultValue="force">
              <SelectTrigger id="layout-algorithm">
                <SelectValue placeholder="Select layout algorithm" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="force">Force-Directed</SelectItem>
                <SelectItem value="circular">Circular</SelectItem>
                <SelectItem value="hierarchical">Hierarchical</SelectItem>
                <SelectItem value="grid">Grid</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="color-scheme">Color Scheme</Label>
            <Select defaultValue="type">
              <SelectTrigger id="color-scheme">
                <SelectValue placeholder="Select color scheme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="type">By Atom Type</SelectItem>
                <SelectItem value="strength">
                  By Truth Value Strength
                </SelectItem>
                <SelectItem value="confidence">
                  By Truth Value Confidence
                </SelectItem>
                <SelectItem value="links">By Number of Links</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="dark-mode">Dark Mode</Label>
            <Switch id="dark-mode" defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="animations">Enable Animations</Label>
            <Switch id="animations" defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
