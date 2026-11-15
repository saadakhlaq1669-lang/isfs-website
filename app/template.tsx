import { ViewTransition } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition
      name="page-shell"
      enter={{
        "nav-forward": "nav-forward",
        "nav-back": "nav-back",
        default: "route-enter",
      }}
      exit={{
        "nav-forward": "nav-forward",
        "nav-back": "nav-back",
        default: "route-exit",
      }}
    >
      <div className="page-transition-shell">{children}</div>
    </ViewTransition>
  );
}
