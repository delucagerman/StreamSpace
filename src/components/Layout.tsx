import React, { useEffect } from 'react';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const { ref, focusKey, setFocus } = useFocusable({
    focusKey: 'LAYOUT_FOCUS_KEY'
  });

  // Set initial focus to the sidebar when the component mounts
  useEffect(() => {
    setFocus('LAYOUT_FOCUS_KEY');
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