import { useLocation, useNavigate } from 'react-router-dom';
import {
  useFocusable,
  FocusContext,
} from '@noriginmedia/norigin-spatial-navigation';
import { Home, Film, Tv, Star, Settings } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Film, label: 'Movies', path: '/movies' },
  { icon: Tv, label: 'Series', path: '/series' },
  { icon: Star, label: 'Featured', path: '/featured' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

function NavItem({
  icon: Icon,
  label,
  path,
  isActive,
}: (typeof navItems)[0] & { isActive: boolean }) {
  const navigate = useNavigate();
  const { ref, focused } = useFocusable({
    focusable: true,
    onEnterPress: () => navigate(path),
  });

  return (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      onClick={() => navigate(path)}
      className={clsx(
        'flex items-center gap-3 p-4 rounded-lg cursor-pointer',
        'transition-all duration-200',
        isActive && 'bg-blue-600/50',
        focused && 'bg-blue-600 scale-105',
        !focused && !isActive && 'hover:bg-gray-700'
      )}
    >
      <Icon
        className={clsx(
          'w-5 h-5',
          isActive || focused ? 'text-blue-400' : 'text-gray-400'
        )}
      />
      <span
        className={clsx(
          'font-medium',
          isActive || focused ? 'text-white' : 'text-gray-300'
        )}
      >
        {label}
      </span>
    </div>
  );
}

function Sidebar() {
  const location = useLocation();
  const { ref: sidebarRef, focusKey: sidebarFocusKey } = useFocusable({
    focusable: true,
    saveLastFocusedChild: true,
    trackChildren: true,
    preferredChildFocusKey: undefined,
    isFocusBoundary: true,
  });

  return (
    <FocusContext.Provider value={sidebarFocusKey}>
      <nav
        ref={sidebarRef}
        className="w-72 bg-gray-800/50 backdrop-blur-sm p-6 border-r border-gray-700/50"
      >
        <div className="flex items-center gap-3 mb-8">
          <Film className="w-8 h-8 text-blue-500" />
          <h1 className="text-xl font-bold">StreamSpace</h1>
        </div>

        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavItem {...item} isActive={location.pathname === item.path} />
            </li>
          ))}
        </ul>
      </nav>
    </FocusContext.Provider>
  );
}

export default Sidebar;
