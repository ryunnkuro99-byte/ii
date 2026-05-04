import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  // The Luke Bypass launcher is a pure static site living in /public.
  // Redirect to the static index.html so it loads in this preview AND
  // works identically when deployed to GitHub Pages / Vercel.
  if (typeof window !== "undefined") {
    window.location.replace("/index.html");
  }
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0c", color: "#f5f6f8", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "system-ui" }}>
      Loading Luke Bypass…
    </div>
  );
}
