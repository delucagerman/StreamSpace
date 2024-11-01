import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import ContentCarousel from '../components/ContentCarousel';

const popularSeries = [
  {
    id: 1,
    title: "Breaking Bad",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Breaking Bad",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Breaking Bad",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Breaking Bad",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Breaking Bad",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Breaking Bad",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Breaking Bad",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Breaking Bad",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Breaking Bad",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    title: "Breaking Bad",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    title: "Breaking Bad",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80"
  },
];

const newReleases = [
  {
    id: 1,
    title: "The Crown",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "The Crown",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "The Crown",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "The Crown",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "The Crown",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "The Crown",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "The Crown",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "The Crown",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "The Crown",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    title: "The Crown",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    title: "The Crown",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    title: "The Crown",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80"
  },
];

function Series() {
  const { ref, focusKey } = useFocusable({
    focusKey: 'SERIES_FOCUS_KEY'
  });

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="space-y-8">
        <h1 className="text-4xl font-bold mb-8">TV Series</h1>
        <ContentCarousel title="Popular Series" items={popularSeries} />
        <ContentCarousel title="New Releases" items={newReleases} />
      </div>
    </FocusContext.Provider>
  );
}

export default Series;