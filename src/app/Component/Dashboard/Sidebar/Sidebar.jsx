'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const items = [
  { label: 'Profile', href: '/myProfile' },
  { label: 'Password', href: '/settings/password' },
  { label: 'Notifications', href: '/settings/notifications' },
  { label: 'Referral', href: '/settings/referral' },
  { label: 'Billing Info', href: '/settings/billing' },
  { label: 'Project Status', href: '/settings/status' },
  { label: 'Account Balance', href: '/settings/balance' },
  { label: 'Transactions', href: '/settings/transactions' },
  { label: 'Delete Account', href: '/settings/delete' },
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