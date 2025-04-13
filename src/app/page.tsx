import { AiFillGoogleCircle } from "react-icons/ai";
import { Card, Button } from "../lib/ui";
import { FiSend } from "react-icons/fi";

export default function Home() {
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
      <Button variant="gradient" size="md" icon={<FiSend />}>
        Hello
      </Button>
    </div>
  );
}
