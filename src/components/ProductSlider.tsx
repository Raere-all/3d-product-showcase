import { useState, useRef } from "react";
import { products } from "@/data/products";
import "@/styles/slider.css";

const ProductSlider = () => {
  const [showDetail, setShowDetail] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (listRef.current) {
      const items = listRef.current.querySelectorAll('.item');
      if (items.length > 0) {
        listRef.current.appendChild(items[0]);
      }
    }
  };

  const handlePrev = () => {
    if (listRef.current) {
      const items = listRef.current.querySelectorAll('.item');
      if (items.length > 0) {
        listRef.current.prepend(items[items.length - 1]);
      }
    }
  };

  const handleSeeMore = () => {
    setShowDetail(true);
  };

  const handleBack = () => {
    setShowDetail(false);
  };

  return (
    <>
      <header className="slider-header">
        <div className="logo">TechVault</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <div className={`carousel ${showDetail ? 'showDetail' : ''}`}>
        <div className="list" ref={listRef}>
          {products.map((product) => (
            <div className="item" key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className="introduce">
                <div className="title">DESIGN SLIDER</div>
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
                  {product.specifications.map((spec, index) => (
                    <div key={index}>
                      <p>{spec.label}</p>
                      <p>{spec.value}</p>
                    </div>
                  ))}
                </div>
                <div className="checkout">
                  <button>ADD TO CART</button>
                  <button>CHECKOUT</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button id="prev" onClick={handlePrev}>&lt;</button>
          <button id="next" onClick={handleNext}>&gt;</button>
          <button id="back" onClick={handleBack}>See All ↗</button>
        </div>
      </div>
    </>
  );
};

export default ProductSlider;
