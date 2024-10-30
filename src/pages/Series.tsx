import React from 'react';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import ContentCarousel from '../components/ContentCarousel';

const popularSeries = [
  {
    id: 1,
    title: "Breaking Bad",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80"
  },
  // Add more items as needed
];

const newReleases = [
  {
    id: 1,
    title: "The Crown",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80"
  },
  // Add more items as needed
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