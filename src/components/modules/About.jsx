import { motion } from "framer-motion";
import USER from "../../mock/about.json";

function About() {
  return (
    <div className="py-8">
      <div className="flex gap-10 items-center flex-col md:flex-row">
        <motion.img
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ amount: 1, once: true }}
          transition={{ type: "spring", duration: 0.6 }}
          src="/image/selfie.png"
          className="w-48 min-w-48 h-48  rounded-full"
        />
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 1, once: true }}
          transition={{ ease: "easeOut", duration: 0.6 }}
        >
          <h3 className="text-3xl py-3 leading-snug text-center md:text-left">
            A little story about me
          </h3>
          <p className="text-xl text-slate-700 leading-snug text-center md:text-left">
            {USER.bio}
          </p>
        </motion.div>
      </div>
      
    </div>
  );
}

export default About;
