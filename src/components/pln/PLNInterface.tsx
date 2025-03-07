import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  FileText,
  Settings,
  Database,
  List,
  BarChart,
} from "lucide-react";

export function PLNInterface() {
  const [inferenceResults, setInferenceResults] = useState<string[]>([]);

  const handleRunInference = () => {
    // Simulate inference results
    const newResults = [
      "Inference 1: Confidence 0.85, Strength 0.92",
      "Inference 2: Confidence 0.76, Strength 0.88",
      "Inference 3: Confidence 0.64, Strength 0.71",
    ];
    setInferenceResults(newResults);
  };

  return (
    <div className="flex flex-col h-full">
      <Tabs defaultValue="inference" className="flex-1 flex flex-col">
        <div className="border-b">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="inference" className="flex items-center gap-1">
              <Play className="h-4 w-4" />
              Inference
            </TabsTrigger>
            <TabsTrigger value="rules" className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              Rules
            </TabsTrigger>
            <TabsTrigger value="knowledge" className="flex items-center gap-1">
              <Database className="h-4 w-4" />
              Knowledge Base
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-1">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="inference" className="flex-1 p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Inference Query</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Textarea
                    placeholder="Enter your PLN query here..."
                    className="min-h-[150px]"
                    defaultValue="(Inheritance human mammal)
(Inheritance mammal animal)
(deduction Inheritance human animal ?tv)"
                  />
                </div>
                <Button
                  className="bg-purple-600 hover:bg-purple-700 w-full"
                  onClick={handleRunInference}
                >
                  <Play className="h-4 w-4 mr-2" />
                  Run Inference
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Results</CardTitle>
              </CardHeader>
              <CardContent>
                {inferenceResults.length > 0 ? (
                  <div className="space-y-2">
                    {inferenceResults.map((result, index) => (
                      <div
                        key={index}
                        className="p-2 border rounded-md bg-muted/30"
                      >
                        <p className="text-sm">{result}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-[150px] border rounded-md bg-muted/30">
                    <p className="text-muted-foreground">
                      Run an inference to see results
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Inference Chain Visualization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] border rounded-md bg-muted/30 flex items-center justify-center">
                {inferenceResults.length > 0 ? (
                  <div className="p-4 w-full">
                    <div className="flex justify-between items-center mb-8">
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center border-2 border-purple-500">
                          <span className="text-sm font-medium">human</span>
                        </div>
                        <Badge className="mt-2">ConceptNode</Badge>
                      </div>

                      <div className="flex-1 border-t-2 border-dashed border-gray-400 mx-4 relative">
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-card px-2">
                          <Badge variant="outline">Inheritance</Badge>
                        </div>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center border-2 border-blue-500">
                          <span className="text-sm font-medium">mammal</span>
                        </div>
                        <Badge className="mt-2">ConceptNode</Badge>
                      </div>

                      <div className="flex-1 border-t-2 border-dashed border-gray-400 mx-4 relative">
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-card px-2">
                          <Badge variant="outline">Inheritance</Badge>
                        </div>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center border-2 border-green-500">
                          <span className="text-sm font-medium">animal</span>
                        </div>
                        <Badge className="mt-2">ConceptNode</Badge>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="border-2 border-purple-500 rounded-md p-3 bg-purple-100/50 dark:bg-purple-900/10">
                        <div className="flex items-center gap-2">
                          <BarChart className="h-4 w-4 text-purple-600" />
                          <span className="font-medium">Deduction Rule</span>
                        </div>
                        <div className="text-xs mt-1">
                          <span className="font-medium">TV:</span> (0.85, 0.92)
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground">
                    Inference visualization will appear here
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rules" className="flex-1 p-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">
                Available Inference Rules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    name: "Deduction",
                    description:
                      "If A is a type of B, and B is a type of C, then A is a type of C",
                  },
                  {
                    name: "Induction",
                    description:
                      "If A and B share a common property C, they may share other properties",
                  },
                  {
                    name: "Abduction",
                    description:
                      "If A is a type of C, and B is a type of C, then A might be related to B",
                  },
                  {
                    name: "Modus Ponens",
                    description:
                      "If A implies B, and A is true, then B is true",
                  },
                  {
                    name: "Modus Tollens",
                    description:
                      "If A implies B, and B is false, then A is false",
                  },
                  {
                    name: "Conditional",
                    description:
                      "Forms an implication relationship between two statements",
                  },
                ].map((rule, index) => (
                  <div key={index} className="border rounded-md p-3 bg-card">
                    <h3 className="font-medium text-sm">{rule.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {rule.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="knowledge" className="flex-1 p-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Knowledge Base</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex mb-4">
                <Input
                  placeholder="Search knowledge base..."
                  className="mr-2"
                />
                <Button variant="outline" size="icon">
                  <List className="h-4 w-4" />
                </Button>
              </div>

              <div className="border rounded-md">
                <div className="p-3 border-b bg-muted/30 flex justify-between items-center">
                  <span className="font-medium text-sm">Statements</span>
                  <Badge variant="outline">42 items</Badge>
                </div>
                <div className="p-2 max-h-[400px] overflow-y-auto">
                  {[
                    "(Inheritance human mammal) <0.98, 0.94>",
                    "(Inheritance mammal animal) <0.99, 0.96>",
                    "(Inheritance cat mammal) <0.97, 0.93>",
                    "(Inheritance dog mammal) <0.98, 0.95>",
                    "(Inheritance bird animal) <0.99, 0.97>",
                    "(Inheritance penguin bird) <0.98, 0.94>",
                    "(Inheritance robin bird) <0.97, 0.93>",
                    "(Inheritance salmon fish) <0.99, 0.96>",
                    "(Inheritance fish animal) <0.99, 0.97>",
                    "(Inheritance plant livingThing) <0.99, 0.98>",
                    "(Inheritance animal livingThing) <0.99, 0.98>",
                    "(Similarity cat dog) <0.75, 0.85>",
                  ].map((statement, index) => (
                    <div
                      key={index}
                      className="p-2 border-b last:border-0 text-sm font-mono"
                    >
                      {statement}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="flex-1 p-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">PLN Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">
                      Inference Control
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-sm">Maximum Steps</label>
                        <Input
                          type="number"
                          defaultValue="100"
                          className="w-24"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <label className="text-sm">Confidence Threshold</label>
                        <Input
                          type="number"
                          defaultValue="0.3"
                          step="0.1"
                          min="0"
                          max="1"
                          className="w-24"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <label className="text-sm">Strength Threshold</label>
                        <Input
                          type="number"
                          defaultValue="0.3"
                          step="0.1"
                          min="0"
                          max="1"
                          className="w-24"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2">Rule Selection</h3>
                    <div className="space-y-2 border rounded-md p-3">
                      {[
                        "Deduction",
                        "Induction",
                        "Abduction",
                        "Modus Ponens",
                        "Modus Tollens",
                        "Conditional",
                      ].map((rule, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`rule-${index}`}
                            defaultChecked
                            className="mr-2"
                          />
                          <label htmlFor={`rule-${index}`} className="text-sm">
                            {rule}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">
                      Truth Value Formulas
                    </h3>
                    <div className="space-y-2">
                      <div>
                        <label className="text-sm">Deduction</label>
                        <Input
                          defaultValue="sAB * sBC"
                          className="font-mono text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-sm">Abduction</label>
                        <Input
                          defaultValue="sAC * sBC"
                          className="font-mono text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-sm">Induction</label>
                        <Input
                          defaultValue="sAB * sAC"
                          className="font-mono text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2">
                      Advanced Options
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="use-attention"
                          className="mr-2"
                        />
                        <label htmlFor="use-attention" className="text-sm">
                          Use Attention Allocation
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="use-ure" className="mr-2" />
                        <label htmlFor="use-ure" className="text-sm">
                          Use Unified Rule Engine
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="log-inference"
                          defaultChecked
                          className="mr-2"
                        />
                        <label htmlFor="log-inference" className="text-sm">
                          Log Inference Steps
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
