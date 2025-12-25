const GradientBlob = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Main gradient blob */}
      <div 
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] animate-blob-rotate"
        style={{
          background: 'linear-gradient(135deg, hsl(350 90% 60% / 0.4), hsl(220 90% 60% / 0.4))',
          filter: 'blur(120px)',
          borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
        }}
      />
      
      {/* Secondary smaller blob */}
      <div 
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] animate-blob-rotate"
        style={{
          background: 'linear-gradient(225deg, hsl(220 90% 65% / 0.3), hsl(280 80% 60% / 0.2))',
          filter: 'blur(100px)',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          animationDelay: '-5s',
          animationDuration: '25s',
        }}
      />
    </div>
  );
};

export default GradientBlob;
