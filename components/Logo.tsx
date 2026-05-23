type LogoProps = {
  className?: string;
  /** Full tile with background (favicon-style) or mark only for UI chrome */
  variant?: "full" | "mark";
};

export function Logo({ className, variant = "mark" }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={variant === "mark"}
      role={variant === "full" ? "img" : undefined}
    >
      {variant === "full" && <rect width="256" height="256" fill="#03023A" />}
      <polygon fill="#FFFFFF" points="72.6,136.2 94.4,158 94.4,201.9 72.6,201.9" />
      <polygon
        fill="#DA02EB"
        points="16.1,101.4 16.1,16 101.5,16 101.5,37.8 37.9,37.8 37.9,101.4"
      />
      <polygon
        fill="#DA02EB"
        points="239.9,154.6 239.9,240 154.5,240 154.5,218.2 218.1,218.2 218.1,154.6"
      />
      <path
        fill="#FFFFFF"
        d="M172.5,201.9H147l-25.2-43.7l-12.1-21h19.6c1.9,0,3.8-0.3,5.5-0.7c8-2.1,14.1-8.8,15.5-17.1c0.2-1.1,0.3-2.3,0.3-3.4c0-0.2,0-0.5,0-0.7c-0.3-11.4-9.7-20.6-21.3-20.6H85.1L72.6,73h56.6c15.9,0,29.9,8.7,37.3,21.6c3.5,6.1,5.5,13.1,5.6,20.6c0,0.2,0,0.5,0,0.7c0,7.7-2,15-5.6,21.3c-1,1.7-2,3.3-3.2,4.8c-4.5,5.9-10.6,10.6-17.5,13.5L172.5,201.9z"
      />
    </svg>
  );
}
