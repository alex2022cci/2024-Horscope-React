import React from 'react';

const ZodiacList = () => {
  const zodiacSigns = [
    { sign: 'Belier', start: 80, end: 109 },
    { sign: 'Taureau', start: 110, end: 140 },
    { sign: 'Gemeaux', start: 141, end: 171 },
    { sign: 'Cancer', start: 172, end: 202 },
    { sign: 'Lion', start: 203, end: 233 },
    { sign: 'Vierge', start: 234, end: 265 },
    { sign: 'Balance', start: 266, end: 295 },
    { sign: 'Scorpion', start: 296, end: 325 },
    { sign: 'Sagittaire', start: 326, end: 355 },
    { sign: 'Capricorne', start: 356, end: 19 },
    { sign: 'Verseau', start: 20, end: 49 },
    { sign: 'Poissons', start: 50, end: 79 }
  ];

  return (
    <div>
      <h1 className='text-warning text-center'>Signes Astrologiques</h1>
      
      <ul className='list-group'>
        {zodiacSigns.map((sign, index) => (
          <li key={index} className='list-group-item list-group-item-action list-group-item-info'>
            {sign.sign}: {sign.start} - {sign.end}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ZodiacList;
