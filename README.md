<div align="center">

# 🎮 Simon Says

### A browser-based memory game built with vanilla JavaScript

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)


[🕹️ Play Live Demo](https://simon-says-game-k7zd.vercel.app/) · [🐛 Report Bug](../../issues) · [✨ Request Feature](../../issues)

</div>

---

## 📖 Overview

**Simon Says** is a faithful recreation of the classic electronic memory game, built entirely with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies. Players must observe and reproduce an ever-growing sequence of color flashes, with each level adding a new step to challenge memory and focus.

This project demonstrates core frontend engineering principles: DOM manipulation, event-driven architecture, asynchronous sequencing with `setTimeout`/`Promise`, audio synthesis via the Web Audio API, and clean separation of game logic from the UI layer. It was built with a focus on code clarity, responsiveness, and a polished user experience.

---

## 🚀 Demo

> 🔗 **[Live Demo -](https://simon-says-game-k7zd.vercel.app/)**


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
├── index.html
├── simon.css
├── simon.js
├── README.md
└── sounds/


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
- HTML5
- CSS3
- JavaScript (ES6)
- DOM Manipulation
- Event Handling
- Audio Effects using HTML Audio API
---

## 🧠 Learning Outcomes

Building this project strengthened my understanding of core frontend development concepts:

* DOM Manipulation — Dynamically updating game content, scores, and UI elements using JavaScript.
* Event Handling — Managing user interactions through button clicks and game controls.
* Game Logic Design — Implementing sequence generation, user input tracking, and answer validation.
* State Management — Controlling game flow using variables such as level, game sequence, user sequence, and game status.
* CSS Animations — Creating visual feedback through button flash effects and game-over animations.
* Audio Integration — Enhancing user experience with sound effects using the HTML Audio API.
* Array Operations — Using arrays to store, compare, and validate game sequences.
* Randomization Techniques — Generating unpredictable color sequences for each level.
* Debugging and Problem Solving — Identifying and fixing gameplay, animation, and synchronization issues during development.


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

**Kanhaiya Sahani**
- GitHub: [@Kanhaiya1729](https://github.com/Kanhaiya1729)
- LinkedIn: [kanhaiya sahani](https://www.linkedin.com/in/kanhaiya-sahani-11487b275/overlay/contact-info)
- Portfolio: [kanhaiya](my-portfolio-chi-teal-68.vercel.app)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please keep PRs focused — one feature or fix per PR makes reviews faster.

<div align="center">

Made with ☕ and vanilla JavaScript &nbsp;·&nbsp; Give it a ⭐ if you enjoyed it!

</div>
