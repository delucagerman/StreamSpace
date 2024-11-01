import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import ContentCarousel from '../components/ContentCarousel';

const trendingItems = [
  {
    id: 1,
    title: "Inception",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "The Dark Knight",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Interstellar",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Dune",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Blade Runner 2049",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80"
  }
];

const popularItems = [
  {
    id: 6,
    title: "The Matrix",
    image: "https://images.unsplash.com/photo-1485163819542-13adeb5e0068?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Avatar",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "The Avengers",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Star Wars",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    title: "Jurassic Park",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80"
  }
];

function Home() {
  const { ref, focusKey } = useFocusable({
    focusKey: 'HOME_FOCUS_KEY',
    saveLastFocusedChild: true,
    trackChildren: true,
    isFocusBoundary: true,
  });

  return (
    <FocusContext.Provider value={focusKey}>
      <div ref={ref} className="space-y-12">
        <h1 className="text-4xl font-bold">Welcome Back</h1>
        <ContentCarousel title="Trending Now" items={trendingItems} />
        <ContentCarousel title="Popular" items={popularItems} />
      </div>
    </FocusContext.Provider>
  );
}

export default Home;