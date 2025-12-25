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
      
      <main className="relative w-full h-screen bg-background overflow-hidden">
        {/* Animated Gradient Background */}
        <GradientBlob />
        
        {/* Product Slider */}
        <ProductSlider />
      </main>
    </>
  );
};

export default Index;
