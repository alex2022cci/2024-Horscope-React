import ZodiacForm from './ZodiacForm'
import './ZodiacClock.css';
import { useState } from 'react';

const App = () => {
  const [angle, setAngle] = useState(null);

  const handleZodiacFound = (angle) => {
    setAngle(angle);
  };

  const ZodiacClock = ({ angle }) => {
    // Define the widths for each zodiac sign based on the angle
    let [largeurBelier, largeurTaureau, largeurGemeaux, largeurCancer, largeurLion, largeurVierge, largeurBalance, largeurScorpion, largeurSagittaire, largeurCapricorne, largeurVerseau, largeurPoissons] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Default width for the border
    switch (angle) {
      case 0:
        largeurBelier = 3;
        break;
      case 30:
        largeurTaureau = 3;
        break;
      case 60:
        largeurGemeaux = 3;
        break;
      case 90:
        largeurCancer = 3;
        break;
      case 120:
        largeurLion = 3;
        break;
      case 150:
        largeurVierge = 3;
        break;
      case 180:
        largeurBalance = 3;
        break;
      case 210:
        largeurScorpion = 3;
        break;
      case 240:
        largeurSagittaire = 3;
        break;
      case 270:
        largeurCapricorne = 3;
        break;
      case 300:
        largeurVerseau = 3;
        break;
      case 330:
        largeurPoissons = 3;
        break;
      default:
        break;
    }

  return (
    <div className="zodiac-clock mx-auto">
      <img src="/roue.png" alt="Zodiac Circle" className="zodiac-image img-fluid" />
      {angle !== null && <div className="needle" style={{ transform: `rotate(${angle}deg)` }} />}
      <img src="/Belier.png" alt="Belier Zodiac Sign" className="belier" style={{ border: `${largeurBelier}px solid red` }} />
      <img src="/Taureau.png" alt="Taureau Zodiac Sign" className="taureau" style={{ border: `${largeurTaureau}px solid peru` }} />
      <img src="/Gemeaux.png" alt="Gemeaux Zodiac Sign" className="gemeaux" style={{ border: `${largeurGemeaux}px solid green` }} />
      <img src="/Cancer.png" alt="Cancer Zodiac Sign" className="cancer" style={{ border: `${largeurCancer}px solid blue` }} />
      <img src="/Lion.png" alt="Lion Zodiac Sign" className="lion" style={{ border: `${largeurLion}px solid red` }} />
      <img src="/Vierge.png" alt="Vierge Zodiac Sign" className="vierge" style={{ border: `${largeurVierge}px solid peru` }} />
      <img src="/Balance.png" alt="Balance Zodiac Sign" className="balance" style={{ border: `${largeurBalance}px solid green` }}/>
      <img src="/Scorpion.png" alt="Scorpion Zodiac Sign" className="scorpion" style={{ border: `${largeurScorpion}px solid blue` }}/>
      <img src="/Sagittaire.png" alt="Sagittaire Zodiac Sign" className="sagittaire" style={{ border: `${largeurSagittaire}px solid red` }}/>
      <img src="/Capricorne.png" alt="Capricorne Zodiac Sign" className="capricorne" style={{ border: `${largeurCapricorne}px solid peru` }}/>
      <img src="/Verseau.png" alt="Verseau Zodiac Sign" className="verseau" style={{ border: `${largeurVerseau}px solid green` }}/>
      <img src="/Poissons.png" alt="Poissons Zodiac Sign" className="poissons" style={{ border: `${largeurPoissons}px solid blue` }}/>
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
