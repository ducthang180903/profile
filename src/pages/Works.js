import React, { useState } from "react";

import "../pagescss/Works.css";
// import imgmyworks from "../img/imgmyworks.jpg";
import { motion } from "framer-motion";
import { projects } from "../data/projectsData"; 
import ProjectModal from "../components/ProjectModal";


const Works = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [ProjectContentComponent, setProjectContentComponent] = useState(null);

  const openModal = async (project) => {
    const { default: ContentComponent } = await import(
         `../data/projectsContent/${project.contentFile}.js`
    );
    setProjectContentComponent(() => ContentComponent);
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
    setProjectContentComponent(null);
  };

  return (
    <div className="myworks">
    <h1 className="textmyworks">DỰ ÁN CỦA TÔI</h1>
    <div className="blokmyworks">
      {projects.map((item, index) => (
        <motion.div
          key={index}
          className="blokmyworks1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.7 }}
        >
          <img className="imgmyworks" src={item.image} alt={item.title} />
          <div className="overlay">
            <div className="overlay-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button className="btn-view" onClick={() => openModal(item)}>
                Xem Chi Tiết
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {selectedProject && ProjectContentComponent && (
      <ProjectModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        project={selectedProject}
        ContentComponent={ProjectContentComponent}
      />
    )}
  </div>
  );
};

export default Works;
