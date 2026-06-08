<div align="center">

# 🎮 Simon Says

### A browser-based memory game built with vanilla JavaScript

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[🕹️ Play Live Demo](#-demo) · [🐛 Report Bug](../../issues) · [✨ Request Feature](../../issues)

</div>

---

## 📖 Overview

**Simon Says** is a faithful recreation of the classic electronic memory game, built entirely with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies. Players must observe and reproduce an ever-growing sequence of color flashes, with each level adding a new step to challenge memory and focus.

This project demonstrates core frontend engineering principles: DOM manipulation, event-driven architecture, asynchronous sequencing with `setTimeout`/`Promise`, audio synthesis via the Web Audio API, and clean separation of game logic from the UI layer. It was built with a focus on code clarity, responsiveness, and a polished user experience.

---

## 🚀 Demo

> 🔗 **[Live Demo — GitHub Pages](https://yourusername.github.io/simon-says/)**


## ✨ Features

- 🟢 **Interactive Start Button** — Clean entry point that initializes and resets game state
- 🎲 **Random Sequence Generation** — Cryptographically unpredictable color order each game
- ✅ **Real-time Input Validation** — Instant feedback on correct and incorrect moves
- 📈 **Level Progression System** — Sequence grows by one with each successful round
- 🏆 **High Score Tracking** — Persists your personal best across sessions via `localStorage`
- 🔊 **Sound Effects** — Unique tones for start, click, level-up, and wrong-answer events
- 💡 **Visual Flash Animations** — Smooth, responsive button highlight animations
- 💀 **Game Over Screen** — Clear failure state with your final score displayed
- 🔄 **Play Again Functionality** — Instant restart without a full page reload
- 📱 **Responsive Design** — Playable on desktop, tablet, and mobile viewports

---

## 🗂️ Project Structure

```
Simon-Says-Game/
├── simon.html
├── simon.css
├── simon.js
├── README.md
└── sounds/

---

## ⚙️ Installation & Setup

No build tools or package managers required.

**Clone and open:**

```bash
git clone 
cd simon-says
```

Then open `index.html` directly in your browser, or serve it locally for the best experience:

```bash
# Python 3
python -m http.server 8080

# Node.js (npx)
npx serve .
```

Navigate to `http://localhost:8080` and press **Start** to play.

---

## 🕹️ How to Play

1. Press the **Start** button to begin.
2. Watch the board — one button will flash and play a tone.
3. Click that button to repeat the sequence.
4. Each round, a new color is added to the end of the sequence.
5. Repeat the full sequence without mistakes to advance.
6. One wrong move ends the game — your score and high score are displayed.
7. Press **Play Again** to restart immediately.

> **Tip:** Focus on the rhythm, not just the colors. The audio cues are just as useful as the visuals.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic game board structure |
| **CSS3** | Grid layout, keyframe animations, CSS custom properties |
| **Vanilla JavaScript (ES6+)** | Game engine, async sequencing, DOM events, Web Audio API |
| **Web Audio API** | Procedural sound synthesis (no external audio files) |
| **localStorage** | Client-side high score persistence |

---

## 🧠 Learning Outcomes

Building this project deepened my understanding of several practical frontend concepts:

- **Async flow control** — Chaining `setTimeout` calls and wrapping them in `Promises` to animate sequences without blocking user input at the wrong time.
- **State machine thinking** — Managing distinct game states (`idle`, `displaying`, `awaiting-input`, `game-over`) to prevent illegal interactions (e.g., clicking during the computer's turn).
- **Web Audio API** — Generating tones programmatically using `OscillatorNode` and `GainNode` rather than relying on audio files, keeping the project dependency-free.
- **Event delegation** — Attaching a single listener to a parent container instead of four individual button listeners for cleaner, more scalable code.
- **CSS animation timing** — Coordinating JavaScript-driven class toggles with CSS `transition` durations to keep visual feedback snappy and consistent.
- **localStorage patterns** — Reading, writing, and defaulting stored values safely for a persistent high score across sessions.

---

## 🔭 Future Improvements

- [ ] **Difficulty modes** — Adjustable sequence speed (Easy / Medium / Hard / Impossible)
- [ ] **Endless mode** — No level cap; compete for the global high score
- [ ] **Leaderboard** — Back-end or Firebase integration for cross-user score tracking
- [ ] **Accessibility** — Full keyboard navigation and ARIA live regions for screen readers
- [ ] **Haptic feedback** — `navigator.vibrate()` support for mobile players
- [ ] **Theme switcher** — Dark/light mode and alternate color palettes
- [ ] **PWA support** — Service worker and manifest for offline play and home-screen install

---

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- Portfolio: [yourwebsite.com](https://yourwebsite.com)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please keep PRs focused — one feature or fix per PR makes reviews faster.

---

## 📄 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for details.

---

<div align="center">

Made with ☕ and vanilla JavaScript &nbsp;·&nbsp; Give it a ⭐ if you enjoyed it!

</div>
