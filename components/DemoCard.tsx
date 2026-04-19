import Image from "next/image";
import type { Demo } from "@/lib/demos";

type DemoCardProps = {
  demo: Demo;
};

export function DemoCard({ demo }: DemoCardProps) {
  return (
    <a
      href={demo.href}
      className="protoCard"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="protoLive mono">↗ Live Demo</span>
      <Image
        className="protoImg"
        src={demo.coverSrc}
        alt=""
        width={800}
        height={450}
        sizes="(max-width: 700px) 100vw, 50vw"
      />
      {demo.tag ? <span className="protoTag mono">{demo.tag}</span> : null}
      <p className="protoTitle">{demo.title}</p>
      <p className="protoNote mono">{demo.buildNote}</p>
    </a>
  );
}
