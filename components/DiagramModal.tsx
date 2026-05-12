"use client";

import Image from "next/image";

type DiagramModalProps = {
  title: string;
  projectTitle: string;
  diagramUrl: string;
  onClose: () => void;
};

export function DiagramModal({
  title,
  projectTitle,
  diagramUrl,
  onClose,
}: DiagramModalProps) {
  return (
    <>
      <div className="modalOverlay" onClick={onClose} />
      <div className="modalContent">
        <button className="modalClose" onClick={onClose}>
          ✕
        </button>
        <h2 className="modalTitle">{title}</h2>
        <div className="modalImageContainer">
          <Image
            src={diagramUrl}
            alt={`${projectTitle} ${title.toLowerCase()}`}
            width={800}
            height={600}
          />
        </div>
      </div>
    </>
  );
}
