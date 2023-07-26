import { motion } from 'framer-motion';

const TechBadge = ({ name }) => {
    return (
        <motion.div
            className="border border-primary dark:border-primaryDark rounded-full px-3 py-1 m-1 text-sm font-semibold text-dark dark:text-light inline-block cursor-default hover:bg-exotic hover:text-light"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.2 }}
        >
            {name}
        </motion.div>
    );
};

export default TechBadge;