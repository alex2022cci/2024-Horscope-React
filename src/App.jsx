import ZodiacForm from './ZodiacForm'
import './ZodiacClock.css';
import { useState } from 'react';

const App = () => {
  const [angle, setAngle] = useState(null);

  const handleZodiacFound = (angle) => {
    setAngle(angle);
  };

  return (
    <div className="container">
      <h1 className="text-center">Votre signe du Zodiaque apparait grâce à React</h1>
      <ZodiacForm onZodiacFound={handleZodiacFound} />
      <ZodiacClock angle={angle} />
    </div>
  );
};

const ZodiacClock = ({ angle }) => {
  return (
    <div className="zodiac-clock mx-auto">
      <img src="/roue.png" alt="Zodiac Circle" className="zodiac-image img-fluid" />
      { <div className='center'></div>}
      {angle !== null && <div className="needle" style={{ transform: `rotate(${angle}deg)` }} />}
    </div>
  );
};

export default App;
