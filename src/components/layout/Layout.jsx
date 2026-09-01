import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export function Layout() {
    return (
        <>
            <div className="min-h-screen bg-background flex flex-col">
                <NavBar />
                <main className="flex-1 p-8">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}