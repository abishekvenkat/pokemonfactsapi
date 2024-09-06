const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const facts = require('./pokemonFacts.json');
const generations = require('./pokemonGenerations.json');

const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  const count = parseInt(req.query.count) || 1;
  const id = parseInt(req.query.id);
  const gen = parseInt(req.query.gen);

  let selectedFacts;

  if (id !== undefined && !isNaN(id) && id >= 0 && id < facts.length) {
    selectedFacts = [facts[id]];
  } else {
    selectedFacts = getRandomFacts(count, gen);
  }

  res.json({ data: selectedFacts });
});

function getRandomFacts(count, gen) {
  let filteredFacts = facts;
  
  if (gen === undefined || isNaN(gen)) {
    gen = Math.floor(Math.random() * 3) + 1; // Random number between 1 and 3
  }

  filteredFacts = facts.filter(fact => {
    const pokemonNames = Object.keys(generations);
    return pokemonNames.some(name => {
      return fact.includes(name) && generations[name] === gen;
    });
  });

  const shuffled = filteredFacts.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Pokémon Facts API listening at http://localhost:${port}`);
});