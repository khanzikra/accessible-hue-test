import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Accessibility Colour Lab — Test every colour" },
      { name: "description", content: "Private, local WCAG contrast checker with live preview and colour-blindness simulation." },
      { property: "og:title", content: "Accessibility Colour Lab" },
      { property: "og:description", content: "Design for everyone. Test every colour." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// The competition app is a single self-contained HTML file (public/colour-lab.html).
function Index() {
  return (
    <iframe
      src="/colour-lab.html"
      title="Accessibility Colour Lab"
      className="block h-screen w-full border-0"
    />
  );
}
