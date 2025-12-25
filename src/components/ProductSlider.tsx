import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products, Product } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";

const ProductSlider = () => {
  const [items, setItems] = useState<Product[]>([...products]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setItems(prev => {
        const newItems = [...prev];
        const first = newItems.shift()!;
        newItems.push(first);
        return newItems;
      });
      setIsTransitioning(false);
    }, 50);
  }, [isTransitioning]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setItems(prev => {
        const newItems = [...prev];
        const last = newItems.pop()!;
        newItems.unshift(last);
        return newItems;
      });
      setIsTransitioning(false);
    }, 50);
  }, [isTransitioning]);

  const handleSeeMore = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(null);
  };

  if (selectedProduct) {
    return <ProductDetail product={selectedProduct} onBack={handleBack} />;
  }

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden px-4 md:px-8 pb-20">
      {/* Slider Container */}
      <div className="relative w-full max-w-7xl h-[450px] md:h-[550px] flex items-center">
        {items.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            totalItems={items.length}
            onSeeMore={() => handleSeeMore(product)}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 glass-card-strong w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-foreground hover:scale-110 transition-all duration-300 hover:shadow-glow-blue"
        aria-label="Previous product"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 glass-card-strong w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-foreground hover:scale-110 transition-all duration-300 hover:shadow-glow-red"
        aria-label="Next product"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Page Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {products.map((p, i) => {
          const activeIndex = items.findIndex(item => item.id === items[1]?.id);
          const isActive = products.findIndex(prod => prod.id === items[1]?.id) === i;
          return (
            <div
              key={p.id}
              className={`h-2 rounded-full transition-all duration-300 ${
                isActive ? 'bg-primary w-8' : 'bg-muted-foreground/30 w-2'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductSlider;
