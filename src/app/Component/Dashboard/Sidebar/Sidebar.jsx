'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const items = [
  { label: 'Profile', href: '/myProfile'},
  { label: 'Password', href: '/password'},
  { label: 'Notifications', href: '/notifications'},
  { label: 'Referral', href: '/referral'},
  { label: 'Billing Info', href: '/billing'},
  { label: 'Project Status', href: '/status'},
  { label: 'Account Balance', href: '/balance'},
  { label: 'Transactions', href: '/transactions'},
  { label: 'Delete Account', href: '/delete'},
];
const Sidebar = () => {
  const pathname = usePathname();
    return (
 <aside className="w-64 bg-gray-50 py-4 px-2 rounded-md border border-gray-200">
      <nav className="flex flex-col space-y-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              'text-sm font-medium px-3 py-2 rounded-md transition-colors',
              pathname === item.href
                ? 'bg-blue-100 text-blue-600 border-l-2 border-blue-600'
                : 'text-gray-800 hover:bg-gray-100'
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
    );
};

export default Sidebar;