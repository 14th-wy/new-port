import '../style/About.css';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/esm/Container';
import { BsFillCalendar2WeekFill, BsGithub, BsFillEmojiSmileFill } from "react-icons/bs";
import { FaReact } from 'react-icons/fa';
import { DiCodeigniter } from "react-icons/di";
import { AiTwotoneHeart } from 'react-icons/ai';
import {Link} from 'react-router-dom';

export default function about() {
    return (
        <motion.div className='myAbout'
        initial={{opacity : 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 2}}
        >
            <Container>
            <h1>ABOUT ME.</h1>
                <ul>
                    <li>
                        <a className='aFirst' target='_blank' href='https://github.com/14th-wy'>Engineering <small><BsGithub/></small></a>
                        <a className='aSecond' target='_blank' href='https://github.com/14th-wy'>View Github</a>
                        <p className='textPharagraph'>
                        When it comes to business, first impressions matter, and good website design is the key to capitalizing on them. An excellent site is not judged solely on its looks, but on its functionality and usability as well. My experience as a programmer allows me to come up with intelligent solutions to technical challenges, while at the same time designing sleek and visually appealing websites. Aside from having extensive knowledge of recognized technical standards, I am conversant with modern building practices.
                        </p>
                    </li>
                    <li>
                        <a className='aFirst'>Learning to Learn <small><BsFillEmojiSmileFill/></small></a>
                        <a className='aSecond'><small><BsFillCalendar2WeekFill/></small> Currently</a>
                        <p className='textPharagraph'>
                        Improve memory & productivity using the skills of the world's top performers and learning strategies proven by research.
                        </p>
                    </li>
                    <li>
                        <a className='aFirst'>Learning Something Great Everyday <small><AiTwotoneHeart/></small></a>
                        <a className='aSecond'><small><BsFillCalendar2WeekFill/></small> Currently</a>
                        <p className='textPharagraph'>
                        We continue learning everyday.
                        </p>
                    </li>
                </ul>

            <h3 className='h3'>My Skills</h3>
                <ul>
                    <li>
                        <a className='aFirst' href='https://codeigniter.com/' target='_blank'>
                            CodeIgniter3 <small><DiCodeigniter/></small>
                        </a>
                        <a className='aSecond'><small><BsFillCalendar2WeekFill/></small> Nov 2021 - Apr 2022 </a>
                        <p className='textPharagraph'>
                            I have on experience build an web application based on framework called CodeIgniter3, this an framework PHP which so much populer on PHP Developer, and this framework using MVC Consept.
                            I'm using this framework on my internship program with PT. Denso Manufacturing Indonesia when i'm still studying on my campus.
                        </p>
                    </li>
                    <li>
                        <a className='aFirst' href='https://codeigniter.com/' target='_blank'>
                            CodeIgniter4 <small><DiCodeigniter/></small>
                        </a>
                        <a className='aSecond'><small><BsFillCalendar2WeekFill/></small> 2022 </a>
                        <p className='textPharagraph'>
                            I have on experience build an web application based on framework called CodeIgniter4, this also framework PHP which so much populer on PHP Developer, and this framework using MVC Consept.
                            I'm using this framework on my freelance project.
                        </p>
                    </li>
                    <li>
                        <a className='aFirst' href='https://reactjs.org/' target='_blank'>
                            ReactJS <small><FaReact/></small>
                        </a>
                        <a className='aSecond'><small><BsFillCalendar2WeekFill/></small> Currently </a>
                        <p className='textPharagraph'>
                            Learning something great new, i'm now on my way to learn ReactJS. An library to make powerfull website with Javascripts, such an beautiful technology. I'm in love with this, and i'm will not stop on this technology. Just keep it up. fyi, this portfolio website come from with ReactJS
                        </p>
                    </li>
                </ul>
            <a type="button">
            <Link to='/project' className='iconmore'>
                    continue to project.
            </Link>
            </a>
            </Container>
        </motion.div>
    )
}