import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import clsx from 'clsx';

interface ContentItem {
  id: number;
  title: string;
  image: string;
}

interface ContentGridProps {
  title: string;
  items: ContentItem[];
}

function ContentGrid({ title, items }: ContentGridProps) {
  const { ref, focused } = useFocusable();

  return (
    <div
      ref={ref}
      className={clsx('space-y-4 p-4 rounded-lg', focused && 'bg-gray-800/50')}
    >
      <h2 className="text-2xl font-semibold">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className={clsx(
              'relative group cursor-pointer rounded-lg overflow-hidden',
              'focus:outline-none focus:ring-2 focus:ring-blue-500'
            )}
            tabIndex={0}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
              <h3 className="text-lg font-medium text-white text-center">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentGrid;
