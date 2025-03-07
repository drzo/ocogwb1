export default function AtomSpace() {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4">AtomSpace Explorer</h2>
      <div className="p-6 border rounded-lg bg-card">
        <p className="text-muted-foreground">
          AtomSpace visualization and manipulation interface.
        </p>
        <div className="h-64 flex items-center justify-center border rounded-lg mt-4 bg-muted/30">
          <p className="text-muted-foreground">
            AtomSpace visualization will appear here
          </p>
        </div>
      </div>
    </div>
  );
}
