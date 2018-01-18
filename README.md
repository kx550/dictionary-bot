# dictionary-bot
[![stability](https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square)](https://nodejs.org/api/documentation.html#documentation_stability_index)

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

Hastily hacked together Twitter bot based on [a tweet by Jürg
Lehni](https://twitter.com/juerglehni/status/951081101975580673).

## Setup

```bash
git clone https://github.com/kx550/dictionary-bot.git
cd dictionary-bot
npm install
```

Enter your Twitter API credentials in `config.example.js` and change it's name
to `config.js`.

```bash
npm start
```

## Notes

At the moment this only works for macOS and the user's english dictionary file.
