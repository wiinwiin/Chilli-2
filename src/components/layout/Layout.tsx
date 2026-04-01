import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollRestoration } from "react-router-dom";
 
export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[70px] md:pt-[80px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
