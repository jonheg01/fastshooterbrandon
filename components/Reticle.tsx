export function Reticle({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "reticle"}
      viewBox="0 0 32 32"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="16"
        cy="16"
        r="10.5"
        fill="none"
        stroke="#c8102e"
        strokeWidth="1"
      />
      <line x1="16" y1="0" x2="16" y2="9" stroke="#c8102e" strokeWidth="1" />
      <line x1="16" y1="23" x2="16" y2="32" stroke="#c8102e" strokeWidth="1" />
      <line x1="0" y1="16" x2="9" y2="16" stroke="#c8102e" strokeWidth="1" />
      <line x1="23" y1="16" x2="32" y2="16" stroke="#c8102e" strokeWidth="1" />
      <circle cx="16" cy="16" r="1.4" fill="#e2263f" />
    </svg>
  );
}

export function ReticleDivider() {
  return (
    <div className="reticle-divider">
      <Reticle />
    </div>
  );
}
