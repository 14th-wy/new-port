import Home from './Home';
import About from './About';
import {Routes, Route, useLocation} from 'react-router-dom';


export default function Routed(){
    const location = useLocation();

    return (
    <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
    )
}