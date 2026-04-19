import { demos } from "@/lib/demos";
import { DemoCard } from "./DemoCard";

export function DemoSection() {
  return (
    <div className="protoSection" id="prototypes">
      <div className="protoInner">
        <p className="sectionLabel mono">AI Prototypes / Demos</p>
        <div className="protoGrid">
          {demos.map((d) => (
            <DemoCard key={d.slug} demo={d} />
          ))}
        </div>
      </div>
    </div>
  );
}
