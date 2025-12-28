import { useState, useRef, useEffect, useCallback } from "react";
import { products } from "@/data/products";
import "@/styles/slider.css";
import Navbar from "./Navbar";
import ProjectsScroller from "./ProjectsScroller";

const ProductSlider = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showSlider = useCallback((type: 'next' | 'prev') => {
    if (isAnimating || !listRef.current || !carouselRef.current) return;

    setIsAnimating(true);

    // Remove previous animation classes
    carouselRef.current.classList.remove('next', 'prev');

    const items = listRef.current.querySelectorAll('.item');
    if (items.length === 0) return;

    if (type === 'next') {
      listRef.current.appendChild(items[0]);
      carouselRef.current.classList.add('next');
    } else {
      listRef.current.prepend(items[items.length - 1]);
      carouselRef.current.classList.add('prev');
    }

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Re-enable buttons after animation completes
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
  }, [isAnimating]);

  const handleNext = () => showSlider('next');
  const handlePrev = () => showSlider('prev');

  const handleSeeMore = () => {
    if (carouselRef.current) {
      carouselRef.current.classList.remove('next', 'prev');
    }
    setShowDetail(true);
  };

  const handleBack = () => {
    setShowDetail(false);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <Navbar />

      <div 
        ref={carouselRef}
        className={`carousel ${showDetail ? 'showDetail' : ''}`}
      >
        <div className="list" ref={listRef}>
          {products.map((product) => (
            <div className="item" key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className="introduce">
                <div className="title">{product.title}</div>
                <div className="topic">{product.topic}</div>
                <div className="des">{product.shortDescription}</div>
                <button className="seeMore" onClick={handleSeeMore}>
                  SEE MORE ↗
                </button>
              </div>
              <div className="detail">
                <div className="title">{product.title}</div>
                <div className="des">{product.longDescription}</div>
                <div className="specifications">
                  <div className="specifications-track">
                    {/* Duplicate specs for seamless infinite scroll */}
                    {[...product.specifications, ...product.specifications].map((spec, index) => (
                      <div key={index}>
                        <p>{spec.label}</p>
                        <p>{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button 
            id="prev" 
            onClick={handlePrev}
            disabled={isAnimating}
          >
            &lt;
          </button>
          <button 
            id="next" 
            onClick={handleNext}
            disabled={isAnimating}
          >
            &gt;
          </button>
          <button id="back" onClick={handleBack}>
            See All ↗
          </button>
        </div>
      </div>

      <ProjectsScroller />
    </>
  );
};

export default ProductSlider;
