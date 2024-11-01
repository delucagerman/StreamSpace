import { X } from 'lucide-react';

interface ContentItem {
  id: number;
  title: string;
  image: string;
}

interface ContentDetailProps {
  item: ContentItem;
  onClose: () => void;
}

function ContentDetail({ item, onClose }: ContentDetailProps) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-8 z-50">
      <div className="bg-gray-800 rounded-lg max-w-2xl w-full p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-64 object-cover rounded-lg mb-4" 
        />
        <p className="text-gray-300">
          Descripción detallada del contenido...
        </p>
      </div>
    </div>
  );
}

export default ContentDetail; 