import React, { useState } from 'react';

const ZodiacForm = ({ onZodiacFound }) => {
  const [birthDate, setBirthDate] = useState('');
  const [zodiacSign, setZodiacSign] = useState('');

  const zodiacSigns = [
    { sign: 'Bélier', start: [3, 21], end: [4, 19], angle: 0 },
    { sign: 'Taureau', start: [4, 20], end: [5, 20], angle: 30 },
    { sign: 'Gémeaux', start: [5, 21], end: [6, 20], angle: 60 },
    { sign: 'Cancer', start: [6, 21], end: [7, 22], angle: 90 },
    { sign: 'Lion', start: [7, 23], end: [8, 22], angle: 120 },
    { sign: 'Vierge', start: [8, 23], end: [9, 22], angle: 150 },
    { sign: 'Balance', start: [9, 23], end: [10, 22], angle: 180 },
    { sign: 'Scorpion', start: [10, 23], end: [11, 21], angle: 210 },
    { sign: 'Sagittaire', start: [11, 22], end: [12, 21], angle: 240 },
    { sign: 'Capricorne', start: [12, 22], end: [1, 19], angle: 270 },
    { sign: 'Verseau', start: [1, 20], end: [2, 18], angle: 300 },
    { sign: 'Poissons', start: [2, 19], end: [3, 20], angle: 330 },
  ];

  const handleDateChange = (event) => {
    setBirthDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const date = new Date(birthDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;

    const sign = zodiacSigns.find(sign => {
      const [startMonth, startDay] = sign.start;
      const [endMonth, endDay] = sign.end;

      if (startMonth === endMonth) {
        return month === startMonth && day >= startDay && day <= endDay;
      } else {
        return (month === startMonth && day >= startDay) || (month === endMonth && day <= endDay) || (month > startMonth && month < endMonth);
      }
    });

    setZodiacSign(sign ? sign.sign : 'Invalid date');
    onZodiacFound(sign ? sign.angle : null);
  };

  return (
    <div className="card my-4">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="birthDate">Date de naissance:</label>
            <input type="date" className="form-control" id="birthDate" value={birthDate} onChange={handleDateChange} required />
          </div>
          <button type="submit" className="btn btn-primary">Trouver le signe astrologique</button>
        </form>
        {zodiacSign && <p className="mt-3">Votre signe astrologique est : {zodiacSign}</p>}
      </div>
    </div>
  );
};

export default ZodiacForm;