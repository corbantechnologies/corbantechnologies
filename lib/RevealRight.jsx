import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

RevealRight.propTypes = {
  children: PropTypes.node.isRequired,
};

function RevealRight({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default RevealRight;
