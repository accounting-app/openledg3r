import type { ReactNode } from "react";
import type { RichPart } from "@/lib/pitch-types";

export function RichText({
  parts,
}: {
  parts: readonly RichPart[];
}): ReactNode {
  return parts.map((part, i) =>
    typeof part === "string" ? part : <em key={i}>{part.em}</em>
  );
}
