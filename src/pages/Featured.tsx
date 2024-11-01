import { useState } from 'react';
import {
  useFocusable,
  FocusContext,
} from '@noriginmedia/norigin-spatial-navigation';
import clsx from 'clsx';
import ContentDetail from '../components/ContentDetail';

interface GridItem {
  id: number;
  title: string;
  image: string;
}

// Una sola lista con 8 elementos (2 filas de 4)
const gridItems: GridItem[] = [
  // Primera fila
  {
    id: 1,
    title: 'Inception',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'The Dark Knight',
    image: 'https://images.unsplash.com/photo-1485163819542-13adeb5e0068?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Interstellar',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Dune',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80',
  },
  // Segunda fila
  {
    id: 5,
    title: 'Stranger Things',
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Breaking Bad',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    title: 'The Mandalorian',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    title: 'Game of Thrones',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
  },
];

function Featured() {
  const [selectedItem, setSelectedItem] = useState<GridItem | null>(null);
  
  const { ref: pageRef, focusKey: pageFocusKey } = useFocusable({
    focusKey: 'FEATURED_FOCUS_KEY',
  });

  const handleItemClick = (item: GridItem) => {
    setSelectedItem(item);
  };

  const renderGridItem = (item: GridItem) => {
    const { ref, focused } = useFocusable({
      focusable: true,
      onEnterPress: () => {
        handleItemClick(item);
        return true;
      },
    });

    return (
      <div
        key={item.id}
        ref={ref}
        role="button"
        tabIndex={0}
        onClick={() => handleItemClick(item)}
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
        <h1 className="text-4xl font-bold">Featured Content</h1>
        
        {/* Una única grilla con 2 filas de 4 elementos */}
        <div className="grid grid-cols-4 gap-6 auto-rows-max">
          {gridItems.map((item) => (
            <div key={item.id}>
              {renderGridItem(item)}
            </div>
          ))}
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
