// src/App.jsx
import { useState } from 'react'


const App = () => {

  const [team, setTeam] = useState([])

  const [money, setMoney] = useState(100)

  const [zombieFighters, setZombieFighters] = useState([
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ]
  )
  
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)


  const handleAddFighter = (newFighter) => {
    console.log(money)
    console.log(newFighter.price)
    if(money > newFighter.price) {
      setTeam([...team, newFighter])
      setMoney(money - newFighter.price)
      setTotalStrength(totalStrength + newFighter.strength)
      setTotalAgility(totalAgility + newFighter.agility)
    } else {
      alert('Not enough money')
    }
  }

  const handleRemoveFighter = (index) => {
    const fighterToRemove = team[index];
    setTeam((prevTeam) => prevTeam.filter((_, idx) => idx !== index));
    setMoney((prevMoney) => prevMoney + fighterToRemove.price);
    setTotalStrength((prevStrength) => prevStrength - fighterToRemove.strength);
    setTotalAgility((prevAgility) => prevAgility - fighterToRemove.agility);
  }


  return (
    <>
    <div>
      <h2>Money: {money}</h2>
      <h2>Total Team Strength: {totalStrength}</h2>
      <h2>Total team Agility: {totalAgility}</h2>
    </div>
    <div>
      <h1>Team:</h1>
        {team.map((member, idx) => (
          <div className='fighterCard'>
            <ul key={idx}>
                <img src={member.img} alt={member.name} />
                <h3>{member.name}</h3>
                <li>Price: {member.price}</li>
                <li>Strength: {member.strength}</li>
                <li>Agility: {member.agility}</li>
                <button onClick={() => handleRemoveFighter(idx)}>Remove Fighter from Team</button>

            </ul>
          </div>
      ))}
    </div>
    <div>
      <h2>Zombie Fighters:</h2>
      {zombieFighters.map((fighter, idx) => (
          <ul key={idx}>
            <img src={fighter.img} alt={fighter.name} />
            <h3>{fighter.name}</h3>
            <li>Price: {fighter.price}</li>
            <li>Strength: {fighter.strength}</li>
            <li>Agility: {fighter.agility}</li>
            <button onClick={() => handleAddFighter(fighter)}>Add Fighter to Team</button>
          </ul>
        ))}

    </div>
    </>
  );
}

export default App
