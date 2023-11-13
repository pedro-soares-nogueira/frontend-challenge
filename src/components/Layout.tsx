import { FileProvider } from "@/context";
import { ReactElement } from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout(): ReactElement {
  return (
    <>
      <nav className="py-4 px-6 bg-white">
        <header className="container w-full m-auto flex items-center justify-between">
          <h2 className="font-bold text-2xl">Pedro Soares</h2>
          <ul className="flex justify-end items-center gap-4">
            <li className="list-none">
              <NavLink to="/" className="no-underline">
                {({ isActive }) => (
                  <div
                    className={`py-2 px-4 rounded-lg ${
                      isActive && "bg-gray-200"
                    } hover:bg-slate-300 transition-all`}
                  >
                    <span
                      className={
                        isActive
                          ? "font-semibold text-gray-700"
                          : "text-slate-700"
                      }
                    >
                      File List
                    </span>
                  </div>
                )}
              </NavLink>
            </li>
            <NavLink to="/upload" className="no-underline">
              {({ isActive }) => (
                <div
                  className={`py-2 px-4 rounded-lg ${
                    isActive && "bg-gray-200"
                  } hover:bg-slate-300 transition-all`}
                >
                  <span
                    className={
                      isActive
                        ? "font-semibold text-gray-700"
                        : "text-slate-700"
                    }
                  >
                    Upload
                  </span>
                </div>
              )}
            </NavLink>
          </ul>
        </header>
      </nav>

      <main className="p-6 flex flex-col gap-8 container w-full m-auto ">
        <FileProvider>
          <Outlet />
        </FileProvider>
      </main>
    </>
  );
}

export { Layout };
