import "./Projects.css";
const Projects = ({ Projects_change }) => {
  return (
    <div id="projects" className={`projects_container ${Projects_change}`}>
      <div className="Projects">
        <div className="Project_img">
          <img src="bankist.png" alt="bankist" />
        </div>
      </div>
    </div>
  );
};
export default Projects;
