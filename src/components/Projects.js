import React, { useState} from "react";
 
const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);
    const projectList = [ {
        id: 1,
        title: "Smart Attendance System",
        description: "Face recognition-based system using Python and OpenCV to mark and manage attendance automatically with real-time logging.",
    },{
        id: 2,
        title: "Pet Adoption Website",
        description: "The platform enables users to browse, adopt, and register pets with an easy-to-use interface. Implemented features such as user authentication, pet availability tracking, and adoption request management. Focused on improving efficiency and transparency in the adoption process.",
    },{
        id: 3,
        title: "Chat Application",
        description: "Built with React, Django and Generative AI that stores history of conversations and implemented multiple features for efficiency and transparency.",
    },];

    return (
        <section id="projects">
            <h2>My Projects</h2>
            <div className="project-list">
                {projectList.map((project) => (
                    <div key= {project.id} className= "project-card" onMouseEnter={() => setHoveredProject(project.id)} onMouseLeave={() => setHoveredProject(null)}>
                        <h3>{project.title}</h3>
                        {hoveredProject === project.id && <p>{project.description}</p>}
                        
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;