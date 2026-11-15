import { Outlet } from "react-router-dom";
import Header from "@/components/layouts/Header/Header";
import Footer from "@/components/layouts/Footer";

function RootLayout() {
  // children will come in that outlet.
  // these will appear in every page that is wrapped in this layout.
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet /> {/* this is where the children will be rendered */}
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
