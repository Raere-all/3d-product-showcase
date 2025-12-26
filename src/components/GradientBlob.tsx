const GradientBlob = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Main gradient blob - Neon Pink to Plasma Blue */}
      <div 
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] animate-blob-rotate"
        style={{
          background: 'linear-gradient(135deg, hsl(320 100% 60% / 0.25), hsl(217 91% 60% / 0.3), hsl(185 100% 50% / 0.2))',
          filter: 'blur(120px)',
          borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
        }}
      />
      
      {/* Secondary accent blob - Electric Purple to Teal */}
      <div 
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] animate-blob-rotate"
        style={{
          background: 'linear-gradient(225deg, hsl(270 80% 60% / 0.2), hsl(185 100% 50% / 0.15))',
          filter: 'blur(100px)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          animationDelay: '-5s',
          animationDuration: '25s',
        }}
      />

      {/* Third blob - Deep red glow */}
      <div 
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] animate-blob-rotate"
        style={{
          background: 'linear-gradient(180deg, hsl(350 100% 50% / 0.15), hsl(320 100% 60% / 0.1))',
          filter: 'blur(80px)',
          borderRadius: '50% 60% 40% 70% / 40% 60% 50% 60%',
          animationDelay: '-10s',
          animationDuration: '30s',
        }}
      />
    </div>
  );
};

export default GradientBlob;
