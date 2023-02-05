import { motion } from "framer-motion";

function ProjectBox({ project }) {
  const imageVariants = {
    beforeHover: {},
    onHover: { scale: 1.2 },
  };
  const textVariants = {
    beforeHover: { x: -10 },
    onHover: { x: 0 },
  };

  return (
    <motion.div
      initial="beforeHover"
      whileHover="onHover"
      className="flex-1 overflow-hidden mt-4 w-full cursor-pointer"
    >
      <div className="relative overflow-hidden h-[240px] w-full rounded-xl">
        <motion.div
          variants={imageVariants}
          className="absolute w-full h-full inset-0 bg-cover bg-center "
          style={{ backgroundImage: "url('" + project.image + "')" }}
          transition={{ ease: "easeOut" }}
        />
      </div>
      <motion.h4
        variants={textVariants}
        className="flex items-start gap-2 text-lg text-slate-800 leading-6 pt-2"
      >
        <svg width="10" height="30" viewBox="0 -9 3 24">
          <path
            d="M0 0L3 3L0 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>
        </svg>
        {project.title}
      </motion.h4>
    </motion.div>
  );
}

export default ProjectBox;
