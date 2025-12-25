import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
  index: number;
  totalItems: number;
  onSeeMore: () => void;
}

const ProductCard = ({ product, index, totalItems, onSeeMore }: ProductCardProps) => {
  // Calculate styles based on position
  const getCardStyles = () => {
    // Position 0: Leaving card (huge, blurred, left side)
    if (index === 0) {
      return {
        transform: 'translateX(-80%) scale(1.4)',
        filter: 'blur(12px)',
        opacity: 0.3,
        zIndex: 1,
        left: '15%',
      };
    }
    
    // Position 1: Active card (front and center)
    if (index === 1) {
      return {
        transform: 'translateX(-50%) scale(1)',
        filter: 'blur(0px)',
        opacity: 1,
        zIndex: 20,
        left: '50%',
      };
    }
    
    // Position 2+: Cards going into depth (right side)
    const depthIndex = index - 1;
    const baseOffset = 65; // Starting position percentage
    const offsetIncrement = 12; // How much each card shifts right
    const scaleDecrement = 0.15; // How much each card shrinks
    const blurIncrement = 4; // Blur increase per depth level
    const opacityDecrement = 0.2;
    
    return {
      transform: `translateX(-50%) scale(${Math.max(0.4, 1 - (depthIndex * scaleDecrement))})`,
      filter: `blur(${Math.min(depthIndex * blurIncrement, 16)}px)`,
      opacity: Math.max(0, 1 - (depthIndex * opacityDecrement)),
      zIndex: 20 - depthIndex,
      left: `${Math.min(baseOffset + (depthIndex * offsetIncrement), 95)}%`,
    };
  };

  const styles = getCardStyles();

  // Only show full content for active card (index 1)
  const isActive = index === 1;

  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-out"
      style={{
        ...styles,
        willChange: 'transform, filter, opacity',
      }}
    >
      <div className="glass-card-strong rounded-3xl p-6 md:p-8 w-[280px] md:w-[380px] flex flex-col items-center">
        {/* Product Image */}
        <div className="relative w-full h-[180px] md:h-[240px] mb-6 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-full max-h-full object-contain drop-shadow-2xl animate-float"
            style={{ animationDelay: `${index * 0.2}s` }}
          />
        </div>

        {/* Product Info */}
        <div className="text-center space-y-3 w-full">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
            {product.topic}
          </span>
          
          <h3 className="text-lg md:text-xl font-semibold text-foreground leading-tight">
            {product.title}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.shortDescription}
          </p>

          {isActive && (
            <div className="pt-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Button 
                onClick={onSeeMore}
                className="w-full bg-gradient-to-r from-gradient-red to-gradient-blue text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                See More
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
