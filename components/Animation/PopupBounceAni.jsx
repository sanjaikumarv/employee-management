import { motion } from "framer-motion";
import { ANIMATE } from ".";

const dropDown = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    y: 100,
    transition: {
      duration: 0.5,
      type: "spring",
      dumping: 25,
      siffness: 100,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.5,
      type: "spring",
      dumping: 25,
      siffness: 100,
    },
  },
};
function PopupBounceAni({ children }) {
  if (!ANIMATE) {
    return children;
  }
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={dropDown}
      className='z-20 fixed inset-0'>
      {children}
    </motion.div>
  );
}

export default PopupBounceAni;
