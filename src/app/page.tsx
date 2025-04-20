'use client'
import { Button } from "devflow-ui/src";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
   <Button
        name="Button"
        onClick={() => alert("Button clicked!")}
        type="button"
        disabled={false}
        className="bg-blue-500 text-white"
        variant="primary"
      />
   
    </div>
  );
}
