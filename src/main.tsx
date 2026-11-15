import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { router } from "./routes";
import { ThemeProvider } from "@/components/theme-provider";

import "./index.css";

// RouterProvider uses router to render the components that are to the screen.
// The router is created in the routes.tsx file.
// The router is passed to the RouterProvider as a prop.
// The RouterProvider will use the router to render the appropriate components based on the current URL.
// main.tsx
//    │
//    │ gives RouterProvider the router
//    ↓
// routes.tsx
//    │
//    │ decides which route matches
//    ↓
// RootLayout.tsx
//    │
//    ├── Header
//    │
//    ├── Outlet ← child route appears here
//    │
//    └── Footer
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
