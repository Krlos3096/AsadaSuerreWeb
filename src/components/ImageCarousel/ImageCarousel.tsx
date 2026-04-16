import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Box, BoxProps, Typography } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export interface CarouselSlideData {
  image: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

export interface ImageCarouselProps {
  images: string[] | CarouselSlideData[];
  autoPlay?: boolean;
  interval?: number;
  sx?: BoxProps['sx'];
  collapsed?: boolean;
}

const defaultSx = {
  height: { xs: '75vh', md: '80vh' },
};

const collapsedSx = {
  height: '100px',
};

export default function ImageCarousel({ images, autoPlay = true, interval = 4000, sx, collapsed = false }: ImageCarouselProps) {
  if (images.length === 0) {
    return (
      <Box sx={{ backgroundColor: 'grey.100', display: 'flex', alignItems: 'center', justifyContent: 'center', ...sx }}>
        No images available
      </Box>
    );
  }

  // Normalize images to CarouselSlideData format
  const normalizedSlides: CarouselSlideData[] = images.map((item) => {
    if (typeof item === 'string') {
      return { image: item };
    }
    return item;
  });

  const baseSx = collapsed ? collapsedSx : defaultSx;
  const mergedSx = { 
    ...baseSx, 
    ...sx, 
    width: '100%',
    transition: 'height 0.8s cubic-bezier(0.4, 0, 0.2, 1), width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    willChange: 'height',
    overflow: 'hidden', // Prevent content overflow during transition
  };

  return (
    <Box sx={mergedSx}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={autoPlay && !collapsed ? {
          delay: interval,
          disableOnInteraction: false,
        } : false}
        navigation
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        style={{
          width: '100%',
          height: '80vh',
        }}
        loop={normalizedSlides.length > 1}
      >
        {normalizedSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
              {/* Fixed image container to prevent resizing */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    willChange: 'transform', // Hardware acceleration
                    backfaceVisibility: 'hidden', // Prevent flickering
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                />
              </Box>
              {/* Text Overlay - Hidden when collapsed */}
              {!collapsed && (slide.title || slide.subtitle || slide.description) && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '100%',
                    paddingTop: '25%',
                    textAlign: 'center',
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    zIndex: 2,
                  }}
                >
                  {slide.title && (
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 'bold',
                        mb: 1,
                        fontSize: { xs: '1.5rem', md: '2.5rem' },
                      }}
                    >
                      {slide.title}
                    </Typography>
                  )}
                  {slide.subtitle && (
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 1,
                        fontSize: { xs: '1rem', md: '1.25rem' },
                        opacity: 0.9,
                      }}
                    >
                      {slide.subtitle}
                    </Typography>
                  )}
                  {slide.description && (
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '0.875rem', md: '1rem' },
                        opacity: 0.8,
                        lineHeight: 1.4,
                      }}
                    >
                      {slide.description}
                    </Typography>
                  )}
                </Box>
              )}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
