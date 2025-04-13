import { AiFillGoogleCircle } from "react-icons/ai";
import { Button, Card } from "../../lib/ui";

export default function DocsPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <Card
        companyName=""
        companyLogo={<AiFillGoogleCircle />}
        jobTitle="Graphic Designer"
        jobTags={["Full-time", "Flexible schedule"]}
        salary="$150 - 220k"
        location="Mountain View, CA"
        accentColor="#10b981"
        primaryActionLabel="Apply now"
      />
      <div className="flex gap-4 mt-4 flex-wrap">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="gradient">Gradient</Button>
        <Button variant="primary" iconPosition="left" icon={<span>🚀</span>}>
          With Icon
        </Button>
      </div>

      {/* Rest of the code remains the same */}
    </div>
  );
}
