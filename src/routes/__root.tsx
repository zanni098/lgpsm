import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { ErrorScreen } from "@/components/site/error-screen";
import appCss from "../styles.css?url";
import { reportHiggsfieldError } from "../lib/higgsfield-error-reporting";
import appMetaJson from "../app-meta.json";

declare const __HF_DESIGN_INSPECTOR__: boolean;

const DEFAULT_TITLE = "LGPSM";
const DEFAULT_DESCRIPTION = "The Modern Renaissance, the portfolio of Asad Jehan Zeb.";
type AppMeta = { og_title?: string | null; og_description?: string | null; og_image_url?: string | null; favicon_url?: string | null; og_video_url?: string | null; marketplace_cover_url?: string | null; };
const appMeta = appMetaJson as AppMeta;
const APP_HOST_ZONES = ["higgsfield.app", "higgsfield-dev.app"];
function toOwnAssetUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  if (value.startsWith("/")) return value;
  try { const u = new URL(value); const isAppHost = APP_HOST_ZONES.some((zone) => u.hostname === zone || u.hostname.endsWith(`.${zone}`)); if (isAppHost) return u.pathname + u.search; return value; } catch { return value; }
}
function buildHead(meta: AppMeta) {
  const title = meta.og_title ?? DEFAULT_TITLE;
  const description = meta.og_description ?? DEFAULT_DESCRIPTION;
  const ogImage = toOwnAssetUrl(meta.og_image_url);
  const favicon = toOwnAssetUrl(meta.favicon_url);
  const ogVideo = toOwnAssetUrl(meta.og_video_url);
  return {
    meta: [
      { charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" },
      { name: "twitter:card", content: ogImage ? "summary_large_image" : "summary" },
      ...(ogImage ? [{ property: "og:image", content: ogImage }, { name: "twitter:image", content: ogImage }] : []),
      ...(ogVideo ? [{ property: "og:video", content: ogVideo }] : []),
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" }, { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap" },
      { rel: "stylesheet", href: appCss }, ...(favicon ? [{ rel: "icon", href: favicon }] : []),
    ],
  };
}
function NotFoundComponent() { return <ErrorScreen />; }
function ErrorComponent({ error }: { error: Error }) {
  console.error(error);
  useEffect(() => { reportHiggsfieldError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return <ErrorScreen />;
}
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => buildHead(appMeta), shellComponent: RootShell, component: RootComponent, notFoundComponent: NotFoundComponent, errorComponent: ErrorComponent,
});
function RootShell({ children }: { children: ReactNode }) {
  return (<html lang="en" data-theme="default-light" style={{ colorScheme: "light" }}><head><HeadContent /></head><body className="app-body">{children}<Scripts /></body></html>);
}
function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useEffect(() => {
    if (!__HF_DESIGN_INSPECTOR__) return;
    void import("../module/design-inspector/runtime").then(({ installHiggsfieldDesignInspector }) => { installHiggsfieldDesignInspector(); }).catch((error) => { reportHiggsfieldError(error instanceof Error ? error : new Error("failed"), { boundary: "design_inspector" }); });
  }, []);
  return <QueryClientProvider client={queryClient}><Outlet /></QueryClientProvider>;
}