import type { ReactNode } from "react";

type SlideShellProps = {
  className: string;
  title: string;
  children: ReactNode;
  /** Optional layer before the pad (e.g. moss-bg) */
  decor?: ReactNode;
};

export function SlideShell({
  className,
  title,
  children,
  decor,
}: SlideShellProps) {
  return (
    <section className={className} data-title={title}>
      {decor}
      <div className="pad">{children}</div>
    </section>
  );
}
