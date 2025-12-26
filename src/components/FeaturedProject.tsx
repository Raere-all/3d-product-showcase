import voiceExpenseTracker from "@/assets/voice-expense-tracker.png";

const FeaturedProject = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-void">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-neon-pink drop-shadow-[0_0_10px_rgba(255,0,128,0.8)]">
            Featured
          </span>{" "}
          <span className="text-neon-teal drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">
            Project
          </span>
        </h2>

        <div className="glass-panel rounded-2xl overflow-hidden">
          <div className="relative w-full aspect-video">
            <img
              src={voiceExpenseTracker}
              alt="AI Voice Expense Tracker"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
          </div>

          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-oxanium uppercase tracking-wider bg-neon-pink/20 text-neon-pink border border-neon-pink/30 rounded-full">
                AI Powered
              </span>
              <span className="px-3 py-1 text-xs font-oxanium uppercase tracking-wider bg-neon-teal/20 text-neon-teal border border-neon-teal/30 rounded-full">
                Voice Activated
              </span>
            </div>

            <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-4">
              AI Voice Expense Tracker
            </h3>

            <p className="font-grotesk text-lavender text-base md:text-lg leading-relaxed mb-6">
              This is a voice-activated tool designed to make tracking your finances as easy as 
              having a conversation. Instead of forcing you to use specific keywords or rigid commands, 
              it uses Google Gemini to understand natural speech. You can just say what you bought and 
              how much it cost, and the system handles the parsing, math, and categorization for you. 
              It then uses Murf.ai to confirm the action back to you with a realistic voice, making 
              the interaction feel seamless and interactive.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="glass-panel rounded-xl p-4 text-center">
                <div className="text-neon-teal font-orbitron text-xl mb-2">Google Gemini</div>
                <p className="text-electric-purple text-sm font-oxanium">Natural Language Processing</p>
              </div>
              <div className="glass-panel rounded-xl p-4 text-center">
                <div className="text-neon-pink font-orbitron text-xl mb-2">Murf.ai</div>
                <p className="text-electric-purple text-sm font-oxanium">Voice Response System</p>
              </div>
              <div className="glass-panel rounded-xl p-4 text-center">
                <div className="text-plasma-blue font-orbitron text-xl mb-2">Smart Parsing</div>
                <p className="text-electric-purple text-sm font-oxanium">Auto-categorization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
