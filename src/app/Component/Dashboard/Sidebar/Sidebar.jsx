'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useAppSelector } from '../../../../redux/hooks';
import { selectCurrentUser } from '../../../../redux/features/auth/authSlice';

// Define user and contractor routes
const userItems = [
  { label: 'Profile', href: '/myProfile' },
  { label: 'Password', href: '/password' },
  { label: 'Notification', href: '/notification' },
  { label: 'Referal', href: '/referal' },
  { label: 'Billing Info', href: '/billing' },
  { label: 'Project Status', href: '/status' },
  { label: 'Account Balance', href: '/accountBalance' },
  { label: 'Transactions', href: '/transactions' },
  { label: 'Ask a Pro', href: '/askAPro' }, 
  { label: 'VIP Member', href: '/pricing' }, 
  { label: 'Delete Account', href: '/delete' }, 
];

const contractorItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Your Service", href: "/yourServices" },
  { label: "Profile", href: "/constractorProfile" },
  { label: "Notification", href: "/notification" },
  { label: "Refferal", href: "/referal" },
  { label: "Document Verification", href: "/documentVerification" },
  { label: "Project Management", href: "/projectManagement" },
  { label: "Billings", href: "/billings" },
  { label: "VIP Contractor", href: "/vipContractor" },
   { label: 'Ask a Pro', href: '/askAPro' }, 
  { label: "Delete Account", href: "/delete" },
];

const Sidebar = () => {
  const pathname = usePathname();
 const user = useAppSelector(selectCurrentUser);
//  console.log("logged user---->",user);
  const role = user.role

  const items = role === 'contractor' ? contractorItems : userItems;

  return (
    <aside className="w-full pb-4 rounded-md">
      <nav className="flex flex-col space-y-1">
        {items.map((item) => {
          const isYourServiceActive =
            item.href === '/yourServices' &&
            (pathname === '/yourServices' || pathname === '/createService');

          const isDocumentVerificationActive =
            item.href === '/documentVerification' &&
            (pathname === '/documentVerification' || pathname === '/doneVerification');
   const isQuoteActive =item.href === '/projectManagement' && (pathname === '/projectManagement' || pathname === '/sendQuote')
          const isStatusActive =
            item.href === '/status' && pathname.startsWith('/status');
          const isProjectDetailsActive =
            item.href === '/projectManagement'  && pathname.startsWith('/projectManagement') ;
  

          const isActive =
            isYourServiceActive ||
            isDocumentVerificationActive ||
            isStatusActive ||
            isProjectDetailsActive ||
            isQuoteActive ||
            pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'text-sm font-bold px-3 py-3 rounded-md transition-colors',
                isActive
                  ? 'bg-blue-100 text-blue-600 border-l-2 border-blue-600'
                  : 'text-gray-800 hover:bg-gray-100'
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

export default Sidebar;
