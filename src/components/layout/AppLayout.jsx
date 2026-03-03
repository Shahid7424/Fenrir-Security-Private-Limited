import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-200 dark:bg-[#121212]">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 max-w-[1300px] mx-auto">{children}</main>
      </div>
    </div>
  );
}

export default AppLayout;
