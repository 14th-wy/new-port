import Container from 'react-bootstrap/esm/Container';
import '../style/Home.css';
import { BsLinkedin, BsGithub, BsBoxArrowInRight } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";

export default function Home() {
    return (
        <div className='myHome'>
            <Container>
                <h1 className='name'>I'm Wahyu Dani Saputra</h1>
                <p>
                    Full Stack Developer, UI/UX and Mobile Enthusiast, ReactJS. PHP Engineer
                </p>
                <div className='icons'>
                    <a className='icon'>
                    <BsLinkedin/>
                    </a>
                    <a className='icon'>
                    <BsGithub/>
                    </a>
                    <a className='icon'>
                    <BiMailSend/>
                    </a>
                </div>
                <div className='more'>
                    <a type="button">
                    <a className='iconmore'>
                            more about me.
                    </a>
                    </a>
                </div>
            </Container>
        </div>
    )
}