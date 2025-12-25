import { Helmet } from "react-helmet-async";
import GradientBlob from "@/components/GradientBlob";
import ProductSlider from "@/components/ProductSlider";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>3D Product Showcase | Premium Tech Products</title>
        <meta name="description" content="Explore our innovative tech products with an immersive 3D showcase experience. From fall detection systems to autonomous vehicles." />
      </Helmet>
      
      <main className="relative min-h-screen bg-background overflow-hidden">
        {/* Animated Gradient Background */}
        <GradientBlob />
        
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 z-40 p-6 md:p-8">
          <nav className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="glass-card-strong px-4 py-2 rounded-full">
              <span className="text-lg font-semibold bg-gradient-to-r from-gradient-red to-gradient-blue bg-clip-text text-transparent">
                TechVault
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-6 glass-card-strong px-6 py-2 rounded-full">
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Products
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </nav>
        </header>

        {/* Main Slider */}
        <ProductSlider />
        
        {/* Footer Hint */}
        <footer className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <p className="text-xs text-muted-foreground/50">
            Use arrows to navigate
          </p>
        </footer>
      </main>
    </>
  );
};

export default Index;
