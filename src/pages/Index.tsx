import { Helmet } from "react-helmet-async";
import GradientBlob from "@/components/GradientBlob";
import ProductSlider from "@/components/ProductSlider";
import FeaturedProjects from "@/components/FeaturedProjects";
import "@/styles/featured-projects.css";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>3D Product Showcase | Premium Tech Products</title>
        <meta name="description" content="Explore our innovative tech products with an immersive 3D showcase experience. From fall detection systems to autonomous vehicles." />
      </Helmet>
      
      <div className="relative w-full">
        {/* Animated Gradient Background - fixed behind everything */}
        <div className="fixed inset-0 z-0">
          <GradientBlob />
        </div>
        
        {/* Main Content */}
        <main className="relative z-10">
          <ProductSlider />
          <FeaturedProjects />
        </main>
      </div>
    </>
  );
};

export default Index;
