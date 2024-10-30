import { useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {
  useFocusable,
  FocusContext,
} from '@noriginmedia/norigin-spatial-navigation';
import clsx from 'clsx';
import 'swiper/css';
import 'swiper/css/navigation';

interface ContentItem {
  id: number;
  title: string;
  image: string;
}

interface ContentCarouselProps {
  title: string;
  items: ContentItem[];
}

function ContentCarousel({ title, items }: ContentCarouselProps) {
  const { ref: carouselRef, focusKey: carouselFocusKey } = useFocusable({
    focusable: true,
    saveLastFocusedChild: true,
    trackChildren: true,
    preferredChildFocusKey: null,
  });

  const renderItem = useCallback((item: ContentItem) => {
    const { ref, focused } = useFocusable({
      focusable: true,
      onEnterPress: () => {
        console.log('Selected:', item.title);
      },
    });

    return (
      <div
        ref={ref}
        className={clsx(
          'relative group cursor-pointer rounded-lg overflow-hidden',
          'transition-all duration-200',
          focused ? 'ring-4 ring-blue-500 scale-110 z-10' : 'scale-100'
        )}
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-cover"
        />
        <div
          className={clsx(
            'absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent',
            'flex items-end p-4',
            'opacity-0 group-hover:opacity-100 transition-opacity',
            focused && 'opacity-100'
          )}
        >
          <h3 className="text-lg font-medium text-white">{item.title}</h3>
        </div>
      </div>
    );
  }, []);

  return (
    <FocusContext.Provider value={carouselFocusKey}>
      <div ref={carouselRef} className="space-y-4">
        <h2 className="text-2xl font-semibold px-4">{title}</h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4.5}
          navigation
          className="!overflow-visible"
          breakpoints={{
            320: { slidesPerView: 1.5 },
            640: { slidesPerView: 2.5 },
            768: { slidesPerView: 3.5 },
            1024: { slidesPerView: 4.5 },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>{renderItem(item)}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </FocusContext.Provider>
  );
}

export default ContentCarousel;
