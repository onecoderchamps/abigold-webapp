import { DollarSignIcon, Globe, Group, GroupIcon, History, Home, HomeIcon, LucideGroup, MenuSquare, Notebook, PersonStanding, TerminalSquare, Underline, User } from 'lucide-react';
import Sidebar from './sidebar';
import NavBar from './header';

const sidebarMenu = [
  {
    title: 'Dashboard',
    path: '/admin',
    icon: <HomeIcon width={20} className="stroke-primary" />,
  },
  {
    title: 'Gold Database',
    path: '/admin/golddata',
    icon: <Notebook width={20} className="stroke-primary" />,
    disabled: false,
  },
  // {
  //   title: 'Transactions',
  //   path: '/admin/transactions',
  //   icon: <DollarSignIcon width={20} className="stroke-primary" />,
  //   disabled: false,
  // },
  {
    title: 'Member Management',
    path: '/admin/member',
    icon: <GroupIcon width={20} className="stroke-primary" />,
    disabled: false,
  },
  // {
  //   title: 'Website Setting',
  //   icon: <Underline width={20} className="stroke-primary" />,
  //   disabled: true,
  //   menuChild: [
  //     {
  //       title: 'Beranda',
  //       path: '/admin/website/beranda',
  //       icon: <MenuSquare width={15} />,
  //     },
  //     {
  //       title: 'Produk',
  //       path: '/admin/website/produk',
  //       icon: <MenuSquare width={15} />,
  //     },
  //     {
  //       title: 'Tentang Kami',
  //       path: '/admin/website/about',
  //       icon: <MenuSquare width={15} />,
  //     },
  //   ],
  // },
  // {
  //   title: 'Account',
  //   path: '/admin/account',
  //   icon: <User className="stroke-primary" />,
  // },
];

export default function AdminLayout({ children }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="min-h-dvh flex flex-col">
          <NavBar title={"Dashboard"} />
          <main className="flex flex-grow px-3 pt-3 pb-6">{children}</main>
        </div>
      </div>
      <Sidebar menus={sidebarMenu} />
    </div>
  );
}
