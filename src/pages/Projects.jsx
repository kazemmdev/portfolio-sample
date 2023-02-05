import { motion } from "framer-motion";
import BlobsPlayground from "../components/aimations/BlobsPlayground";
import ProjectBox from "../components/common/ProjectBox";
import PROJECTS from "../mock/projects.json";

function Projects() {
  return (
    <BlobsPlayground>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="mt-24 mb-10"
      >
        <h2 className="text-6xl pb-4">My Projects</h2>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.6, dely: 0.4 }}
        className="w-full flex gap-6 flex-col pb-40"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.slice(0, 2).map((item) => (
            <ProjectBox key={item.id} project={item} />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-6 md:flex-row flex-col">
          {PROJECTS.slice(2,-1).map((item) => (
            <ProjectBox key={item.id} project={item} />
          ))}
        </div>
      </motion.div>
    </BlobsPlayground>
  );
}

export default Projects;
