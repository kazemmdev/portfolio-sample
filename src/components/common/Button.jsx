import { motion } from "framer-motion";

function Button({ label, link }) {
  const buttonVariant = {
    beforeHover: {},
    onHover: { scaleX: 0.75, scaleY: 0.4 },
  };

  return (
    <motion.a
      href={link}
      className="action-btn"
      whileHover="onHover"
      whileTap={{ scale: 0.94 }}
      target="_blank"
    >
      {label}
      <motion.div variants={buttonVariant} className="action-btn-shadow" />
    </motion.a>
  );
}

export default Button;
