// components/Header.tsx
import { LayoutGrid } from "./LayoutGrid";
import { LogoMark } from "./LogoMark";

type HeaderProps = {
  projectOpen?: boolean;
  onCloseProject?: () => void;
};

export function Header({ projectOpen = false, onCloseProject }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#111111] backdrop-blur-sm">
      {/* MOBILE */}
      <div className="md:hidden h-20 border-b border-neutral-800 px-5">
        <div className="h-full flex items-center gap-4 min-w-0">
          {/* Logo (link) + Name (static) */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/"
              aria-label="Home"
              className="inline-flex items-center text-neutral-100 transition-colors hover:[color:var(--accent)] focus-visible:[color:var(--accent)] focus-visible:outline-none"
            >
              <LogoMark className="h-6 w-6 text-current" />
            </a>


            <span className="text-sm font-semibold text-neutral-200 tracking-tight">
              John Tuttle
            </span>
          </div>

          {/* Role */}
          <div className="text-sm font-semibold text-neutral-300 whitespace-nowrap">
            Product Designer
          </div>

          {/* Spacer / Close */}
          <div className="ml-auto flex items-center">
            {projectOpen ? (
              <button
                type="button"
                onClick={onCloseProject}
                aria-label="Close project"
                className="
                  inline-flex h-10 w-10 items-center justify-center rounded
                  text-neutral-200
                  transition-colors
                  hover:[color:var(--accent)] hover:[background-color:var(--accent-bg)]
                  focus-visible:[color:var(--accent)] focus-visible:[background-color:var(--accent-bg)]
                  focus-visible:outline-none
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 1 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 0 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 0 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            ) : (
              <div className="h-10 w-10" aria-hidden="true" />
            )}
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <LayoutGrid
        mdCols={6}
        className="hidden md:grid items-center h-20 text-sm border-b border-neutral-800"
      >
        {/* Cols 1–3: Logo (link) + Name (static) */}
        <div className="md:col-span-3 flex h-full items-center gap-3">
          <a
            href="/"
            aria-label="Home"
            className="inline-flex items-center text-neutral-100 transition-colors hover:[color:var(--accent)] focus-visible:[color:var(--accent)] focus-visible:outline-none"
          >
            <LogoMark className="h-6 w-6 text-current" />
          </a>


          <span className="text-sm font-semibold text-neutral-200 tracking-tight">
            John Tuttle
          </span>
        </div>

        {/* Col 4: Role */}
        <div className="md:col-span-1 flex h-full items-center font-semibold text-neutral-300">
          Product Designer
        </div>

        {/* Col 5: Location */}
        <div className="md:col-span-1 flex h-full items-center font-semibold text-neutral-300">
          Seattle, WA
        </div>

        {/* Col 6: Close */}
        <div className="md:col-span-1 flex h-full items-center justify-end">
          {projectOpen ? (
            <button
              type="button"
              onClick={onCloseProject}
              aria-label="Close project"
              className="
                inline-flex h-10 w-10 items-center justify-center rounded
                text-neutral-200
                transition-colors
                hover:[color:var(--accent)] hover:[background-color:var(--accent-bg)]
                focus-visible:[color:var(--accent)] focus-visible:[background-color:var(--accent-bg)]
                focus-visible:outline-none
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 1 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 0 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 0 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          ) : (
            <div className="h-10 w-10" aria-hidden="true" />
          )}
        </div>
      </LayoutGrid>
    </header>
  );
}
