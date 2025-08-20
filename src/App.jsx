import ZodiacForm from './ZodiacForm'
import './ZodiacClock.css';
import { useState } from 'react';

const App = () => {
  const [angle, setAngle] = useState(null);

  const handleZodiacFound = (angle) => {
    setAngle(angle);
  };

  const ZodiacClock = ({ angle }) => {
  return (
    <div className="zodiac-clock mx-auto">
      <img src="/roue.png" alt="Zodiac Circle" className="zodiac-image img-fluid" />
      { <div className='center'></div>}
      {angle !== null && <div className="needle" style={{ transform: `rotate(${angle}deg)` }} />}
      <img src="/Belier.png" alt="Belier Zodiac Sign" className="belier" />
      <img src="/Taureau.png" alt="Taureau Zodiac Sign" className="taureau" />
      <img src="/Gemeaux.png" alt="Gemeaux Zodiac Sign" className="gemeaux" />
      <img src="/Cancer.png" alt="Cancer Zodiac Sign" className="cancer" />
      <img src="/Lion.png" alt="Lion Zodiac Sign" className="lion" />
      <img src="/Vierge.png" alt="Vierge Zodiac Sign" className="vierge" />
      <img src="/Balance.png" alt="Balance Zodiac Sign" className="balance" />
      <img src="/Scorpion.png" alt="Scorpion Zodiac Sign" className="scorpion" />
      <img src="/Sagittaire.png" alt="Sagittaire Zodiac Sign" className="sagittaire" />
      <img src="/Capricorne.png" alt="Capricorne Zodiac Sign" className="capricorne" />
      <img src="/Verseau.png" alt="Verseau Zodiac Sign" className="verseau" />
      <img src="/Poissons.png" alt="Poissons Zodiac Sign" className="poissons" />
    </div>
  );
};

  return (
    <div className="container">
      <div className="parallax">
        <h1 className="text-center">Votre signe du Zodiaque apparait grâce à React</h1>
        
        <ZodiacClock angle={angle} />
        <ZodiacForm onZodiacFound={handleZodiacFound} />
      </div>
    </div>
  );
};



export default App;
