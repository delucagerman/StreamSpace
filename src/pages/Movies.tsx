import {
  useFocusable,
  FocusContext,
} from '@noriginmedia/norigin-spatial-navigation';
import ContentCarousel from '../components/ContentCarousel';

const actionMovies = [
  {
    id: 1,
    title: 'Mad Max',
    image:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Terminator',
    image:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Alien',
    image:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'back to the future',
    image:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Rambo',
    image:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80',
  },
  // Add more items as needed
];

const dramaMovies = [
  {
    id: 1,
    title: 'The Godfather',
    image:
      'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80',
  },
  // Add more items as needed
];

function Movies() {
  const { ref, focusKey } = useFocusable({
    focusKey: 'MOVIES_FOCUS_KEY',
  });

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="space-y-8">
        <h1 className="text-4xl font-bold mb-8">Movies</h1>
        <ContentCarousel title="Action" items={actionMovies} />
        <ContentCarousel title="Drama" items={dramaMovies} />
      </div>
    </FocusContext.Provider>
  );
}

export default Movies;
