# Pokémon Facts API

This is a simple API that serves random Pokémon facts.

## Features

- Get a random Pokémon fact
- Get a specific number of random facts
- Get a fact by ID

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Start the server with `npm start`

## Documentation

The API documentation is available [here](https://abishekvenkat.github.io/pokemonfactsapi/).

#### Query Parameters

- `count` (optional): Number of random facts to retrieve (default: 1)
- `id` (optional): ID of a specific fact to retrieve
- `gen` (optional): Generation of Pokémon to filter facts (1-3)

## Usage Examples

- Get a random fact: `GET https://pokefacts.vercel.app/`
- Get multiple random facts: `GET https://pokefacts.vercel.app/?count=3`
- Get a fact by ID: `GET https://pokefacts.vercel.app/?id=5`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
