import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { NavigationTabs } from "./Tabs";
import { Toolbar } from "./Toolbar";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <NavigationTabs />
      <Toolbar />
      <main className="flex-1 p-4 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
