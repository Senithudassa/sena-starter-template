// @ts-check
export default function ErrorTestPage() {
  console.log("Valid log");
  console.logg("Invalid log - should show error");
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Error Test Page</h1>
      <p>Check editor for error highlighting on console.logg</p>
    </div>
  );
}
