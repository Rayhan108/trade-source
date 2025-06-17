"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const items = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Your Service", href: "/yourServices" },
  { label: "Profile", href: "/profile" },
  { label: "Notification", href: "/notification" },
  { label: "Refferal", href: "/refferal" },
  { label: "License Verification", href: "/licenseVerification" },
  { label: "Project Management", href: "/projectManagement" },
  { label: "Billings", href: "/billings" },

  { label: "Delete Account", href: "/delete" },
];

const ContractorSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-[100%] pb-4 rounded-md">
        
      <nav className="flex flex-col space-y-1">
        {items.map((item) => {
          // Special case: highlight /status and dynamic /status/*
          const isStatusActive =
            item.href === "/status" && pathname.startsWith("/status");

          const isActive = pathname === item.href || isStatusActive;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "text-sm font-bold px-3 py-3 rounded-md transition-colors",
                isActive
                  ? "bg-blue-100 text-blue-600 border-l-2 border-blue-600"
                  : "text-gray-800 hover:bg-gray-100"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
 
export default ContractorSidebar;
