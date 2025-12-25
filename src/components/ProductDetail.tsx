import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart, Heart } from "lucide-react";

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

const ProductDetail = ({ product, onBack }: ProductDetailProps) => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-8 py-12">
      <div className="w-full max-w-6xl">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-6 left-6 md:top-8 md:left-8 z-30 glass-card-strong px-4 py-2 rounded-full flex items-center gap-2 text-foreground hover:scale-105 transition-all duration-300 animate-fade-in-up"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">See All</span>
        </button>

        {/* Main Content */}
        <div className="glass-card-strong rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Image */}
            <div 
              className="relative bg-gradient-to-br from-muted/50 to-transparent p-8 md:p-12 flex items-center justify-center min-h-[300px] md:min-h-[500px] animate-scale-in"
            >
              <img
                src={product.image}
                alt={product.title}
                className="max-w-full max-h-[280px] md:max-h-[400px] object-contain drop-shadow-2xl animate-float"
              />
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-gradient-red/20 to-transparent rounded-full blur-xl" />
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-gradient-to-tr from-gradient-blue/20 to-transparent rounded-full blur-xl" />
            </div>

            {/* Right Side - Details */}
            <div className="p-6 md:p-10 flex flex-col justify-center space-y-6">
              {/* Topic Badge */}
              <div 
                className="animate-fade-in-up"
                style={{ animationDelay: '0.1s' }}
              >
                <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full">
                  {product.topic}
                </span>
              </div>

              {/* Title */}
              <h1 
                className="text-2xl md:text-4xl font-bold text-foreground leading-tight animate-fade-in-up"
                style={{ animationDelay: '0.2s' }}
              >
                {product.title}
              </h1>

              {/* Long Description - 4 lines */}
              <p 
                className="text-muted-foreground leading-relaxed animate-fade-in-up line-clamp-4"
                style={{ animationDelay: '0.3s' }}
              >
                {product.longDescription}
              </p>

              {/* Specifications Grid */}
              <div 
                className="grid grid-cols-2 gap-3 animate-fade-in-up"
                style={{ animationDelay: '0.4s' }}
              >
                {product.specifications.map((spec, i) => (
                  <div 
                    key={spec.label} 
                    className="bg-muted/50 rounded-xl p-3 animate-slide-in-right"
                    style={{ animationDelay: `${0.4 + i * 0.05}s` }}
                  >
                    <p className="text-xs text-muted-foreground mb-1">{spec.label}</p>
                    <p className="text-sm font-semibold text-foreground">{spec.value}</p>
                  </div>
                ))}
              </div>

              {/* Price & Actions */}
              <div 
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 border-t border-border animate-fade-in-up"
                style={{ animationDelay: '0.6s' }}
              >
                {product.price && (
                  <div className="text-3xl font-bold text-foreground">
                    {product.price}
                  </div>
                )}
                
                <div className="flex gap-3 w-full sm:w-auto sm:ml-auto">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="flex-1 sm:flex-none border-border hover:bg-muted"
                  >
                    <Heart className="w-5 h-5" />
                  </Button>
                  <Button 
                    size="lg"
                    className="flex-1 sm:flex-none bg-gradient-to-r from-gradient-red to-gradient-blue text-primary-foreground font-semibold hover:opacity-90 transition-opacity gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
