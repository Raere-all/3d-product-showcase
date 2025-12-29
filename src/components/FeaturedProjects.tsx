import smartGuardSentinel from "@/assets/smart-guard-sentinel.png";
import cosmicEcho from "@/assets/cosmic-echo-project.jpg";
import voiceExpenseTracker from "@/assets/voice-expense-tracker.png";
import emergencyCampusBot from "@/assets/emergency-campus-bot.png";
import freeFallDetection from "@/assets/free-fall-detection.png";

interface Project {
  id: number;
  title: string;
  category: string;
  members: string[];
  mentor: string;
  image: string;
  hasRoundedImage?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Smart Guard Sentinel",
    category: "House Safety",
    members: ["Pushparaj Patil", "Samruddhi Dabade", "Kajal Sharma", "Ishika"],
    mentor: "Shaoor Ahmad",
    image: smartGuardSentinel,
  },
  {
    id: 2,
    title: "CosmicEcho",
    category: "Innovation",
    members: ["Anvay Ghare", "Pranit Dhande"],
    mentor: "Purrva Bothra",
    image: cosmicEcho,
    hasRoundedImage: true,
  },
  {
    id: 3,
    title: "Smart Airbag Jacket for Construction Worker Safety",
    category: "Safety Systems",
    members: ["Yadnesh Gunjalpatil", "Dikshant Patil", "Onkar Ekatpure", "Bhakti Nemane"],
    mentor: "Mansi Laddha",
    image: freeFallDetection,
  },
  {
    id: 4,
    title: "Expense Tracker Agent",
    category: "AI & Automation",
    members: ["Dhruv Agrawal", "Shivam Gaikwad"],
    mentor: "Purrva Bothra",
    image: voiceExpenseTracker,
    hasRoundedImage: true,
  },
  {
    id: 5,
    title: "Emergency Campus Bot",
    category: "Campus Safety",
    members: ["Deepraj Patil", "Yash Patil", "Tarun Sayal", "Aadarsh Bansode"],
    mentor: "Samarth Malpathak",
    image: emergencyCampusBot,
  },
];

const CurlyArrow = ({ flip = false }: { flip?: boolean }) => (
  <div className="arrow-container" style={{ transform: flip ? 'scaleX(-1)' : 'none' }}>
    <svg className="doodle-arrow" viewBox="0 0 200 80" preserveAspectRatio="none">
      <path d="M10,40 C30,20 50,60 80,35 S120,50 150,40 S170,30 180,40 M165,25 Q175,35 180,40 Q175,45 165,55" />
    </svg>
  </div>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="project-card">
    <h2>{project.category}</h2>
    <h1>{project.title}</h1>
    <div className="divider" />
    <div className="member-list">
      <h3>Team Members</h3>
      <ul>
        {project.members.map((member, idx) => (
          <li key={idx}>{member}</li>
        ))}
      </ul>
    </div>
    <div className="mentor">
      <h3>Mentor</h3>
      <p>{project.mentor}</p>
    </div>
  </div>
);

const ProjectImage = ({ project }: { project: Project }) => (
  <div className="project-image">
    <img 
      src={project.image} 
      alt={project.title} 
      className={`robot-img ${project.hasRoundedImage ? 'rounded-image' : ''}`} 
    />
  </div>
);

const FeaturedProjects = () => {
  return (
    <section className="featured-projects-section">
      <div className="featured-projects-header">
        <h2 className="section-title">Team Details</h2>
        <p className="section-subtitle">Meet the brilliant minds behind our innovations</p>
      </div>
      
      <div className="projectmemberdetails">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div key={project.id} className="project-item">
              {isEven ? (
                <>
                  <ProjectImage project={project} />
                  <CurlyArrow />
                  <ProjectCard project={project} />
                </>
              ) : (
                <>
                  <ProjectCard project={project} />
                  <CurlyArrow flip />
                  <ProjectImage project={project} />
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProjects;
