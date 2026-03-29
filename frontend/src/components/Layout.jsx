import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
  return (
    <div className="dark min-h-screen bg-[#0e0e0e] text-[#e5e2e1] font-['Inter']">
      <Navbar />
      <main className="pt-20 pb-24 md:pb-0 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}
