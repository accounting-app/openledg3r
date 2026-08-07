import { SLIDE_TITLES } from "@/components/slides";

export const TOTAL_SLIDES = SLIDE_TITLES.length;

export function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export const SLIDE_SLUGS = SLIDE_TITLES.map(titleToSlug);

export function slugFromIndex(index: number): string {
  const i = ((index % TOTAL_SLIDES) + TOTAL_SLIDES) % TOTAL_SLIDES;
  return SLIDE_SLUGS[i];
}

export function slidePath(index: number): string {
  const slug = slugFromIndex(index);
  return slug === "cover" ? "/" : `/${slug}`;
}

export function slideIndexFromSlug(slug: string): number | null {
  const i = SLIDE_SLUGS.indexOf(slug);
  return i === -1 ? null : i;
}

export function slideIndexFromPath(pathname: string): number {
  const trimmed = pathname.replace(/\/$/, "") || "/";
  if (trimmed === "/") return 0;
  const slug = trimmed.replace(/^\//, "");
  return slideIndexFromSlug(slug) ?? 0;
}
