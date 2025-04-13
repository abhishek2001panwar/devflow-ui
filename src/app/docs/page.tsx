import { Button, Card } from '../../lib/ui';

export default function DocsPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Devflow UI Docs</h1>

      <Card title="Install the Library" description="Run this to get started:">
        <pre className="bg-gray-100 p-3 rounded mt-2">npm install devflow-ui</pre>
      </Card>

      <Card title="Example Usage">
        <Button>Primary</Button>
        <Button variant="secondary" className="ml-4">Secondary</Button>
      </Card>
    </div>
  );
}
