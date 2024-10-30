import React, { useState } from 'react';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';

function Settings() {
  const [isRTL, setIsRTL] = useState(false);
  const { ref: pageRef, focusKey: pageFocusKey } = useFocusable({
    focusKey: 'SETTINGS_FOCUS_KEY'
  });

  const { ref: toggleRef, focused } = useFocusable({
    onEnterPress: () => setIsRTL(!isRTL)
  });

  return (
    <FocusContext.Provider value={pageFocusKey}>
      <div ref={pageRef} className="space-y-8">
        <h1 className="text-4xl font-bold mb-8">Settings</h1>
        
        <div className="max-w-2xl">
          <div
            ref={toggleRef}
            className={`p-4 rounded-lg cursor-pointer ${
              focused ? 'bg-blue-600' : 'bg-gray-800'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg">Text Direction</span>
              <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span>{isRTL ? 'RTL' : 'LTR'}</span>
                <div className={`w-12 h-6 rounded-full relative ${isRTL ? 'bg-blue-500' : 'bg-gray-600'}`}>
                  <div
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform
                      ${isRTL ? 'right-1' : 'left-1'}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FocusContext.Provider>
  );
}

export default Settings;