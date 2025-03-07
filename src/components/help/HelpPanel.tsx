import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Book, FileText, Code, ExternalLink } from "lucide-react";

export interface HelpSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function HelpSection({
  title,
  description,
  children,
}: HelpSectionProps) {
  return (
    <Card className="mb-6">
      <CardHeader className="pb-3">
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

export interface FaqItemProps {
  question: string;
  answer: React.ReactNode;
}

export function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <AccordionItem value={question.replace(/\s+/g, "-").toLowerCase()}>
      <AccordionTrigger className="text-left">{question}</AccordionTrigger>
      <AccordionContent className="text-muted-foreground">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}

export interface HelpPanelProps {
  defaultTab?: string;
}

export function HelpPanel({ defaultTab = "overview" }: HelpPanelProps) {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex items-center mb-6">
        <HelpCircle className="h-6 w-6 mr-2 text-purple-600" />
        <h1 className="text-2xl font-bold">OpenCog Workbench Help</h1>
      </div>

      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="overview" className="flex items-center gap-1">
            <Book className="h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="tutorials" className="flex items-center gap-1">
            <FileText className="h-4 w-4" />
            Tutorials
          </TabsTrigger>
          <TabsTrigger value="faq" className="flex items-center gap-1">
            <HelpCircle className="h-4 w-4" />
            FAQ
          </TabsTrigger>
          <TabsTrigger value="api" className="flex items-center gap-1">
            <Code className="h-4 w-4" />
            API Reference
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <HelpSection
            title="Welcome to OpenCog Workbench"
            description="A modern interface for interacting with OpenCog's cognitive architecture"
          >
            <div className="space-y-4">
              <p>
                OpenCog Workbench provides a user-friendly interface to interact
                with the OpenCog cognitive architecture. This tool allows you to
                visualize, create, and manipulate atoms in the AtomSpace, run
                inference using various reasoning engines, and manage attention
                allocation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">AtomSpace</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Visualize and manipulate the hypergraph of atoms that
                      forms the foundation of OpenCog's knowledge
                      representation.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">PLN</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Use Probabilistic Logic Networks for uncertain inference
                      and reasoning over the AtomSpace.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">URE</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Configure and run the Unified Rule Engine to perform
                      various forms of inference.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Attention</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Manage attention allocation to focus computational
                      resources on relevant parts of the AtomSpace.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-center mt-4">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <FileText className="h-4 w-4 mr-2" />
                  Read Documentation
                </Button>
              </div>
            </div>
          </HelpSection>
        </TabsContent>

        <TabsContent value="tutorials">
          <HelpSection
            title="Getting Started Tutorials"
            description="Step-by-step guides to help you get started with OpenCog Workbench"
          >
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <span className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">
                        1
                      </span>
                      Introduction to AtomSpace
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Learn the basics of AtomSpace, including how to create,
                      visualize, and query atoms.
                    </p>
                    <div className="flex items-center text-sm text-purple-600 dark:text-purple-400">
                      <FileText className="h-3.5 w-3.5 mr-1" />
                      <span>10 min read</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <span className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">
                        2
                      </span>
                      Working with PLN
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Understand how to use Probabilistic Logic Networks for
                      reasoning and inference.
                    </p>
                    <div className="flex items-center text-sm text-purple-600 dark:text-purple-400">
                      <FileText className="h-3.5 w-3.5 mr-1" />
                      <span>15 min read</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <span className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm">
                        3
                      </span>
                      Configuring the URE
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Learn how to configure and use the Unified Rule Engine for
                      custom inference.
                    </p>
                    <div className="flex items-center text-sm text-purple-600 dark:text-purple-400">
                      <FileText className="h-3.5 w-3.5 mr-1" />
                      <span>12 min read</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </HelpSection>
        </TabsContent>

        <TabsContent value="faq">
          <HelpSection
            title="Frequently Asked Questions"
            description="Common questions and answers about OpenCog Workbench"
          >
            <Accordion type="single" collapsible className="w-full">
              <FaqItem
                question="What is OpenCog?"
                answer={
                  <p>
                    OpenCog is an open-source artificial intelligence framework
                    designed for general intelligence. It provides a flexible
                    and extensible architecture for integrating different
                    cognitive processes and representing knowledge in a unified
                    system.
                  </p>
                }
              />
              <FaqItem
                question="What is the AtomSpace?"
                answer={
                  <p>
                    The AtomSpace is OpenCog's knowledge representation store.
                    It's a hypergraph database designed to store, manipulate and
                    traverse complex knowledge structures. Atoms are the basic
                    units in the AtomSpace, representing both nodes (concepts)
                    and links (relationships).
                  </p>
                }
              />
              <FaqItem
                question="How do I connect to a remote OpenCog instance?"
                answer={
                  <div>
                    <p className="mb-2">
                      To connect to a remote OpenCog instance, use the Connect
                      button in the header and enter the connection details
                      (host, port, and authentication if required).
                    </p>
                    <p>
                      Make sure the OpenCog server has the appropriate network
                      interfaces enabled and that any firewalls allow the
                      connection.
                    </p>
                  </div>
                }
              />
              <FaqItem
                question="What is PLN and how does it work?"
                answer={
                  <p>
                    Probabilistic Logic Networks (PLN) is a framework for
                    uncertain inference. It extends traditional logical
                    inference to handle uncertainty and probabilities, allowing
                    for reasoning over the knowledge stored in the AtomSpace
                    with truth values that represent confidence and strength of
                    beliefs.
                  </p>
                }
              />
              <FaqItem
                question="How can I visualize complex atom structures?"
                answer={
                  <p>
                    The AtomSpace tab provides visualization tools for viewing
                    atoms and their relationships. You can use the Graph View to
                    see a visual representation of atoms and their connections.
                    For complex structures, you can filter by atom type, adjust
                    the visualization settings, or use pattern matching to find
                    specific substructures.
                  </p>
                }
              />
            </Accordion>
          </HelpSection>
        </TabsContent>

        <TabsContent value="api">
          <HelpSection
            title="API Reference"
            description="Documentation for programmatic interaction with OpenCog"
          >
            <div className="space-y-4">
              <p>
                OpenCog provides several APIs for programmatic interaction. The
                Workbench interfaces with these APIs to provide a graphical user
                interface.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Code className="h-4 w-4 mr-2" />
                      AtomSpace API
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Core API for creating, querying, and manipulating atoms in
                      the AtomSpace.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="h-3.5 w-3.5 mr-1" />
                      View Documentation
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Code className="h-4 w-4 mr-2" />
                      Pattern Matcher API
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      API for defining and executing pattern matching queries on
                      the AtomSpace.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="h-3.5 w-3.5 mr-1" />
                      View Documentation
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Code className="h-4 w-4 mr-2" />
                      PLN API
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      API for configuring and running PLN inference on the
                      AtomSpace.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="h-3.5 w-3.5 mr-1" />
                      View Documentation
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <Code className="h-4 w-4 mr-2" />
                      URE API
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      API for configuring and running the Unified Rule Engine.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="h-3.5 w-3.5 mr-1" />
                      View Documentation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </HelpSection>
        </TabsContent>
      </Tabs>
    </div>
  );
}
