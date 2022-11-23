import Container from 'react-bootstrap/esm/Container';
import '../style/Home.css';
import { BsLinkedin, BsGithub, BsBoxArrowInRight } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <motion.div className='myHome'
            initial={{opacity : 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 2}}
        >
            <Container>
                <h1 className='name'>I'm Wahyu Dani Saputra</h1>
                <p>
                    Full Stack Developer, UI/UX and Mobile Enthusiast, ReactJS. PHP Engineer
                </p>
                <div className='icons'>
                    <motion.a   
                        whileHover={{
                        scale: 1.5,
                        transition: { duration: 0.5 },
                        }}
                        whileTap={{ scale: 0.9 }} className='icon'>
                    <BsLinkedin/>
                    </motion.a>
                    <motion.a   
                        whileHover={{
                        scale: 1.5,
                        transition: { duration: 0.5 },
                        }}
                        whileTap={{ scale: 0.9 }} className='icon'>
                    <BsGithub/>
                    </motion.a>
                    <motion.a   
                        whileHover={{
                        scale: 1.5,
                        transition: { duration: 0.5 },
                        }}
                        whileTap={{ scale: 0.9 }} className='icon'>
                    <BiMailSend/>
                    </motion.a>
                </div>
                <div className='more'>
                    <a type="button">
                    <Link to='/about' className='iconmore'>
                            more about me.
                    </Link>
                    </a>
                </div>
            </Container>
        </motion.div>
    )
}