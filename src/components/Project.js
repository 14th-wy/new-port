import '../style/Project.css';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/esm/Container'
import {Link} from 'react-router-dom';

export default function Project() {
    return (
        <motion.div className='myProject'
        initial={{opacity : 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 2}}
        >
            <Container>
            <h1>PROJECT ME.</h1>
            {/* <p>
            Improve memory & productivity using the skills of the world's top performers and learning strategies proven by research.
            </p> */}
            <p>
            We continue learning everyday.
            </p>
            {/* <a type="button">
            <Link to='/project' className='iconmore'>
                    more about me.
            </Link>
            </a> */}
            </Container>
        </motion.div>
    )
}