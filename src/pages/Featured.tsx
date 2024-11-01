import {
  useFocusable,
  FocusContext,
} from '@noriginmedia/norigin-spatial-navigation';
import { useState } from 'react';
import ContentDetail from '../components/ContentDetail';
import clsx from 'clsx';

interface GridItem {
  id: number;
  title: string;
  image: string;
}

const gridItems: GridItem[] = [
  {
    id: 1,
    title: 'Featured Title 1',
    image:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 1,
    title: 'Featured Title 1',
    image:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 1,
    title: 'Featured Title 1',
    image:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 1,
    title: 'Featured Title 1',
    image:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 1,
    title: 'Featured Title 1',
    image:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 1,
    title: 'Featured Title 1',
    image:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
  },
  // Add more items as needed
];

function Featured() {
  const [selectedItem, setSelectedItem] = useState<GridItem | null>(null);
  const { ref: pageRef, focusKey: pageFocusKey } = useFocusable({
    focusKey: 'FEATURED_FOCUS_KEY',
  });

  const renderGridItem = (item: GridItem) => {
    const { ref, focused } = useFocusable({
      focusable: true,
      onEnterPress: () => setSelectedItem(item),
    });

    return (
      <div
        key={item.id}
        ref={ref}
        className={clsx(
          'relative rounded-lg overflow-hidden cursor-pointer',
          'transition-transform duration-150',
          focused ? 'ring-2 ring-blue-500 scale-105' : ''
        )}
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover"
        />
        <div
          className={clsx(
            'absolute inset-0 bg-black/60 flex items-center justify-center p-4',
            focused ? 'opacity-100' : 'opacity-0 hover:opacity-100'
          )}
        >
          <h3 className="text-lg font-medium text-white text-center">
            {item.title}
          </h3>
        </div>
      </div>
    );
  };

  return (
    <FocusContext.Provider value={pageFocusKey}>
      <div ref={pageRef} className="space-y-8">
        <h1 className="text-4xl font-bold mb-8">Featured Content</h1>
        <div className="grid grid-cols-4 gap-6">
          {gridItems.map(renderGridItem)}
        </div>
        
        {selectedItem && (
          <ContentDetail 
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </div>
    </FocusContext.Provider>
  );
}

export default Featured;
