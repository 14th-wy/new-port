import '../style/About.css';
import { motion } from 'framer-motion';

export default function about() {
    return (
        <motion.div className='myAbout'
        initial={{opacity : 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 2}}
        >
            <h1>ABOUT HAHAHAHA</h1>
        </motion.div>
    )
}