# 🎨 Accessibility Colour Lab

**Make the web more readable, inclusive, and accessible for everyone.**

Accessibility Colour Lab is a web-based tool designed to help developers and UI/UX designers choose accessible colour combinations. It checks colour contrast against WCAG guidelines and helps users understand how their designs may appear to people with different types of colour vision deficiency.

🌐 **Live Demo:** https://accessible-hue-test.lovable.app

---

## ✨ Features

- 🎨 **Colour Palette Editor** — Enter HEX colour codes or select colours using colour pickers.
- 📊 **WCAG Contrast Matrix** — Compare colour pairs and view their contrast ratios.
- ✅ **AA and AAA Compliance** — Check contrast requirements for normal and large text.
- 🖥️ **Live UI Preview** — Preview headings, paragraphs, and buttons with selected colours.
- 👁️ **Colour-Blindness Simulation** — Simulate protanopia, deuteranopia, and tritanopia.
- 🔄 **Instant Updates** — Refresh contrast results and previews when colours change.
- 💡 **Contrast Improvement Suggestions** — Help identify alternative colours that meet AA contrast requirements.
- 📋 **CSS Export** — Export palette colours as reusable CSS variables.
- 🌈 **Palette Generator** — Generate colour palettes from a base colour.

*Note: Features may vary depending on the functionality implemented in the current version.*

---

## 🎯 Problem Statement

Poor colour contrast can make websites difficult to read, especially for people with low vision or colour vision deficiencies.

Designers may choose visually appealing colours without realising that the combinations are difficult for some users to distinguish.

Accessibility Colour Lab helps address this problem by providing contrast analysis, visual previews, and colour-vision simulations during the design process.

## 💡 Our Solution

The tool enables users to:

1. Create or customise a colour palette.
2. Check contrast ratios between colour pairs.
3. Identify combinations that pass or fail accessibility thresholds.
4. Preview selected colours in a sample interface.
5. Explore simulated colour-vision differences.
6. Improve and reuse colour palettes in web projects.

## 📐 Understanding WCAG Contrast

The Web Content Accessibility Guidelines (WCAG) define contrast requirements to help make text readable.

| Text type | WCAG AA | WCAG AAA |
|---|---:|---:|
| Normal text | 4.5:1 | 7:1 |
| Large text | 3:1 | 4.5:1 |

The contrast ratio ranges from **1:1 to 21:1**. Black text on a white background has a ratio of 21:1.

The WCAG contrast calculation uses relative luminance, including gamma correction, to calculate the ratio between two colours.

## 🛠️ Technologies

The project may use the following technologies, depending on the implementation:

- HTML5
- CSS3
- JavaScript
- React and Vite, if included in the project
- SVG colour matrix filters for colour-vision simulation
- Git and GitHub for version control

## 🚀 Getting Started

### Option 1: Use the live demo

Visit: https://accessible-hue-test.lovable.app

### Option 2: Run locally

1. Clone this repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Open the project folder:

   ```bash
   cd YOUR_PROJECT_FOLDER
   ```

3. Install dependencies if the project contains a `package.json`:

   ```bash
   npm install
   ```

4. Start the development server if the project uses Vite:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal.

*If the project is plain HTML, CSS, and JavaScript, open `index.html` in your browser instead. Follow the actual scripts and instructions in your repository.*

## 🧪 Testing and Validation

Important checks for this project include:

- Black on white produces a contrast ratio of 21:1.
- White on white produces a ratio of 1:1.
- Normal-text AA requires a ratio of at least 4.5:1.
- Large-text AA requires a ratio of at least 3:1.
- Contrast results update after palette changes.
- Colour-vision simulations work for all supported modes.
- The interface remains readable and usable with a keyboard.

## 🌍 Who Can Benefit?

- Web developers
- UI/UX designers
- Students and educators
- Accessibility testers
- Teams building inclusive digital experiences

## 🔮 Future Improvements

- More accessible palette recommendations.
- Additional accessibility checks.
- Improved keyboard and screen-reader support.
- Palette sharing and download options.
- Automated accessibility reports.

## 🏆 Project Purpose

Accessibility Colour Lab was developed as a project to explore how web technology and AI-assisted development can help solve real-world accessibility challenges.

Our mission is to encourage better colour choices and make digital experiences more inclusive.

## 🤝 Contributing

Suggestions and improvements are welcome. You can fork the repository, make changes, and submit a pull request.

## 📄 License

A license has not yet been specified. Add an appropriate open-source license if you intend to allow others to reuse or modify the code.

---

**Built with the goal of making the web more accessible, one colour at a time.** 💜
