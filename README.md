# PredictoBot Monorepo

> Uncover Chat Trends with AI-Powered Insights

## Table of Contents

* [PredictoBot Monorepo](#predictobot-monorepo)
  * [Table of Contents](#table-of-contents)
  * [Overview](#overview)
  * [Technologies](#technologies)
    * [Node.js and Discord.js](#nodejs-and-discordjs)
    * [Python and Flask](#python-and-flask)
    * [Machine Learning](#machine-learning)
    * [Shared Code and Data](#shared-code-and-data)
  * [Getting Started](#getting-started)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)


## Overview

PredictoBot is a bot made for the 2023 Discord DDevs Buildathon. It is designed to provide server owners, administrators
and community managers with powerful insights into their communities. With PredictoBot's machine learning capabilities,
PredictoBot can analyse chat data and predict emerging trends in the community, allowing owners to stay ahead of the
curve and foster more engaging, dynamic conversations.

## Privacy

See [PRIVACY.md](PRIVACY.md) for details on how PredictoBot handles your data.

## Technologies

### Node.js and Discord.js

- **Node.js**: PredictoBot's core is built on Node.js. It powers the bot's functionality, allowing it to interact with
  Discord servers and users.
- **Discord.js**: We use the Discord.js library to create and manage the Discord bot. It provides the necessary tools
  for connecting to Discord servers, monitoring chat activity, and responding to user commands.

### Python and Flask

- **Python**: The Python programming language is used for the bot's machine learning capabilities and the backend
  API.
- **Flask**: Flask is a lightweight web framework for Python, and it's used to create the backend API. Flask exposes
  endpoints that the Discord bot communicates with to request trend predictions and insights.

### Machine Learning
TODO

### Shared Code and Data
TODO

## Getting Started

### Hosting Predicto-Bot Yourself

1. Clone the repository
   ```shell
      git clone https://github.com/beauthebeau/predicto-bot.git
      cd predicto-bot
   ```
   
2. Install dependencies
   ```shell
      npm install
      # pip install -r requirements.txt # TODO
   ```
   
3. Run the bot
   ```shell
      npm run start
      # or, for development
      npm run dev
   ```
   
### Using the Public Bot
TODO




## Usage
TODO

## Contributing
TODO

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
