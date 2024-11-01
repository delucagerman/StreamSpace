import React, { useEffect } from 'react';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const { ref, focusKey, setFocus } = useFocusable({
    focusKey: 'LAYOUT_FOCUS_KEY',
    saveLastFocusedChild: true,
    trackChildren: true,
    isFocusBoundary: true,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setFocus('LAYOUT_FOCUS_KEY');
    }, 100);

    return () => clearTimeout(timer);
  }, [setFocus]);

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="flex min-h-screen bg-gray-900 text-white">
        <Sidebar />
        <main className="flex-1 p-8 overflow-x-hidden">
          {children}
        </main>
      </div>
    </FocusContext.Provider>
  );
}

export default Layout;