import { motion } from "framer-motion";
import BlobsPlayground from "../components/aimations/BlobsPlayground";
import TextInput from "../components/common/TextInput";
import MessageInput from "../components/common/MessageInput";
import Button from "../components/common/Button";

function Contact() {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <BlobsPlayground>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
        className="mt-24 mb-10"
      >
        <h2 className="text-6xl pb-4"> Contact me</h2>
        <p className="text-2xl font-light">
          Interested in working together or just wanna have a talk?
        </p>
      </motion.div>
      <motion.form
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.6, dely: 0.4 }}
        className="w-full flex gap-6 md:flex-row flex-col pb-40"
      >
        <div className="flex-1">
          <TextInput name="name" placeholder="Name" />
          <TextInput name="email" type="email" placeholder="Email" />
          <TextInput name="subject" placeholder="Subject" />
        </div>
        <div className="flex-1">
          <MessageInput name="message" placeholder="Say somthing here..." />
          <Button label="Send" />
        </div>
      </motion.form>
    </BlobsPlayground>
  );
}

export default Contact;
