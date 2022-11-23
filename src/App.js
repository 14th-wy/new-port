import Navigation from './components/Navigation';
import Routed from './components/Routed';
import { motion } from 'framer-motion';


function App() {
  return (
    <div>
      <div>
        <Navigation/>
        <Routed/>
      </div>
    </div>
  );
}

export default App;
