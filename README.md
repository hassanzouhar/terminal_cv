# Terminal CV

Terminal CV is a retro-styled terminal emulator for displaying an interactive resume. It combines HTML, CSS, and JavaScript to create a unique way to showcase your professional information.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
- [Configuration](#configuration)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Features
- Interactive terminal-style CV
- Customizable commands and themes
- Lightweight and responsive design
- Easy to configure and extend

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/hassanzouhar/terminal_cv.git
    ```
2. **Navigate to the project directory**:
    ```sh
    cd terminal_cv
    ```
3. **Open `index.html` in your browser**:
    Simply open the `index.html` file in your preferred browser to see the terminal CV in action.

## Usage
- The terminal CV can be used as a personal webpage to showcase your resume in an interactive format.
- You can navigate through different sections using terminal-like commands.

## Commands
- `help` - Show available commands
- `clear` - Clear the terminal
- `about` - Display information about me
- `skills` - List my technical skills
- `experience` - Show my work experience
- `education` - Display my educational background
- `projects` - List my notable projects
- `contact` - Show my contact information

## Configuration

The configuration of the terminal CV can be customized through the `config.js` file. Here is a brief overview:

### config.js
```javascript
const config = {
  ascii: [
    "██████╗       ████████╗ ███████╗ ██████╗  ███╗   ███╗",
    "██╔══██╗      ╚══██╔══╝ ██╔════╝ ██╔══██╗ ████╗ ████║",
    "██████╔╝  ╔══╗   ██║    █████╗   ██████╔╝ ██╔████╔██║",
    "██╔══██╗  ╚██╝   ██║    ██╔══╝   ██╔══██╗ ██║╚██╔╝██║",
    "██║  ██║         ██║    ███████╗ ██║  ██║ ██║ ╚═╝ ██║",
    "╚═╝  ╚═╝         ╚═╝    ╚══════╝ ╚═╝  ╚═╝ ╚═╝     ╚═╝"
  ],
  title: "This is R-Term, a retro styled terminal emulator built on HTML/JS/CSS.",
  username: "rebel",
  hostname: "r2c.world",
  repoLink: "https://github.com/hassanzouhar/terminal_cv",
  social: {
    email: "hassan.zouhar@proton.me",
    github: "https://github.com/hassanzouhar",
    linkedin: "https://linkedin.com/hassanzouhar"
  },
  aboutGreeting: "Hi there. Welcome to the R2C Project Directory.",
  projects: [
    ["Lorem ipsum", "Doomsday Machine Club", "https://github.com/hassanzouhar/terminal_cv"],
    ["R2C Terminal", "Terminal Directory", "https://github.com/hassanzouhar/terminal_cv"]
  ],
  colors: {
    background: "#1c1c1c",
    foreground: "#d4d4d4",
    banner: "#ffcc00",
    border: {
      visible: true,
      color: "#444444"
    },
    prompt: {
      default: "#d4d4d4",
      user: "#00ff00",
      host: "#00bfff",
      input: "#ff69b4"
    },
    link: {
      text: "#00bfff",
      highlightColor: "#ff69b4",
      highlightText: "#1c1c1c"
    },
    commands: {
      textColor: "#ffcc00"
    }
  }
};
```

## Customization

### HTML
The main HTML structure is defined in `index.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Terminal CV - An interactive resume in terminal style">
    <meta name="keywords" content="resume, CV, terminal, interactive, developer">
    <meta property="og:title" content="Terminal CV">
    <meta property="og:description" content="An interactive resume in terminal style">
    <title>Terminal CV</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;300;400;600&family=Pixelify+Sans&family=VT323&display=swap" rel="stylesheet">
</head>
<body>
    <div id="terminal">
        <div id="terminal-output"></div>
        <div id="input-line">
            <span id="prompt">
                <span id="user"></span>
                <span id="at">@</span>
                <span id="host"></span>
                <span id="colon">:</span>
                <span id="path">~</span>
                <span id="dollar">$</span>
            </span>
            <input type="text" id="terminal-input" autofocus>
        </div>
    </div>
    <script src="config.js"></script>
    <script src="terminal.js"></script>
</body>
</html>
```

### JavaScript
The logic for handling terminal commands and interactions is in `commands.js` and `terminal.js`:
#### commands.js
```javascript
const commands = {
    help: () => `
<span class="heading">Available commands:</span>
  <span class="subheading">help</span>        - Show this help message
  <span class="subheading">clear</span>       - Clear the terminal
  <span class="subheading">about</span>       - Display information about me
  <span class="subheading">skills</span>      - List my technical skills
  <span class="subheading">experience</span>  - Show my work experience
  <span class="subheading">education</span>   - Display my educational background
  <span class="subheading">projects</span>    - List my notable projects
  <span class="subheading">contact</span>     - Show my contact information
`,

    clear: () => {
        window.terminalUtils.clearTerminal();
        return '';
    },

    about: () => `
<span class="heading">About Me:</span>
<span class="subheading">Name:</span> <span class="detail">${cvData.name}</span>
<span class="subheading">Title:</span> <span class="detail">${cvData.title}</span>
<span class="subheading">Summary:</span> <span class="detail">${cvData.summary}</span>
`,

    skills: () => `
<span class="heading">Technical Skills:</span>
${cvData.skills.map(skill => `<span class="detail">• ${skill}</span>`).join('\n')}
`,

    experience: () => `
<span class="heading">Work Experience:</span>
${cvData.experience.map(job => `
${window.terminalUtils.createExpandableSection(
    `${job.position} at ${job.company}`,
    `<span class="subheading">Duration:</span> <span class="detail">${job.duration}</span>
<span class="subheading">Responsibilities:</span>
${job.responsibilities.map(resp => `<span class="detail">• ${resp}</span>`).join('\n')}`
)}
`).join('\n')}
`,

    education: () => `
<span class="heading">Education:</span>
${cvData.education.map(edu => `
<span class="subheading">Institution:</span> <span class="detail">${edu.institution}</span>
<span class="subheading">Degree:</span> <span class="detail">${edu.degree}</span>
<span class="subheading">Year:</span> <span class="detail">${edu.year}</span>
`).join('\n')}
`,

    projects: () => `
<span class="heading">Notable Projects:</span>
${cvData.projects.map(project => `
${window.terminalUtils.createExpandableSection(
    project.name,
    `<span class="subheading">Description:</span> <span class="detail">${project.description}</span>
<span class="subheading">Technologies:</span> <span class="detail">${project.technologies.join(', ')}</span>`
)}
`).join('\n')}
`,

    contact: () => `
<span class="heading">Contact Information:</span>
<span class="subheading">• Email:</span> <span class="detail">${cvData.contact.email}</span>
<span class="subheading">• Phone:</span> <span class="detail">${cvData.contact.phone}</span>
<span class="subheading">• LinkedIn:</span> <span class="detail">${cvData.contact.linkedin}</span>
<span class="subheading">• GitHub:</span> <span class="detail">${cvData.contact.github}</span>
`

,

    // Easter egg command
    sudo: () => "<span class='detail'>Nice try, but you don't have root access here! 😉</span>",

    // Default handler for unknown commands
    default: (command) => `<span class='detail'>Command not found: ${command}. Type 'help' for available commands.</span>`
};

// Function to process commands
function processCommand(input) {
    const [command, ...args] = input.toLowerCase().trim().split(' ');
    
    if (commands.hasOwnProperty(command)) {
        return commands[command](args);
    } else {
        return commands.default(command);
    }
}

// Make processCommand available globally
window.processCommand = processCommand;
```

#### terminal.js
```javascript
const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');
const prompt = document.getElementById('prompt');

let historyIndex = 0;
let tempInput = "";
const HISTORY = [];

// Apply colors from config
applyColors(config.colors);

function applyColors(colors) {
    document.body.style.backgroundColor = colors.background;
    document.body.style.color = colors.foreground;
    terminalInput.style.color = colors.prompt.input;

    if (colors.border.visible) {
        document.getElementById('terminal').style.border = `2px solid ${colors.border.color}`;
    }

    document.getElementById('user').textContent = config.username;
    document.getElementById('user').style.color = colors.prompt.user;
    document.getElementById('host').textContent = config.hostname;
    document.getElementById('host').style.color = colors.prompt.host;
}

// Initialize the terminal
function initTerminal() {
    displayBanner();
    terminalInput.addEventListener('keydown', handleInput);
    window.addEventListener('click', () => terminalInput.focus());
}

// Display welcome banner
function displayBanner() {
    const banner = `
<pre style="color: ${config.colors.banner}">
${config.ascii.join('\n')}
</pre>
<p>${config.title}</p>
<div>Type <span class="command highlight">'help'</span> to see available commands.</div>
`;
    appendToTerminal(banner);
}

// Handle user input
function handleInput(e) {
    switch(e.key) {
        case 'Enter':
            e.preventDefault();
            processInput();
            break;
        case 'ArrowUp':
            e.preventDefault();
            navigateHistory('up');
            break;
        case 'ArrowDown':
            e.preventDefault();
            navigateHistory('down');
            break;
        case 'Tab':
            e.preventDefault();
            autocomplete();
            break;
    }
}

// Process the entered input
function processInput() {
    const input = terminalInput.value.trim();
    const commandLineDiv = document.createElement('div');
    commandLineDiv.className = 'command-line';
    commandLineDiv.innerHTML = `<span class="prompt">${prompt.innerHTML}</span> <span class="command" style="color: ${config.colors.commands.textColor}">${input}</span>`;
    terminalOutput.appendChild(commandLineDiv);
    
    if (input !== '') {
        HISTORY.push(input);
        historyIndex = HISTORY.length;
        const output = window.processCommand(input); // Ensure processCommand is called correctly
        appendToTerminal(output);
    }
    
    terminalInput.value = '';
    scrollToBottom();
}

// Utility functions
function appendToTerminal(text) {
    const output = document.createElement('div');
    output.innerHTML = text;
    output.style.whiteSpace = 'pre-wrap';
    terminalOutput.appendChild(output);
}

function clearTerminal() {
    terminalOutput.innerHTML = '';
    displayBanner();
}

function scrollToBottom() {
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

// Initialize the terminal when the page loads
window.addEventListener('load', initTerminal);
```

### CSS
The styles for the terminal CV are defined in `styles.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;300;400;600&family=Pixelify+Sans&family=VT323&display=swap');

:root {
  --background: #1c1c1c;
  --foreground: #d4d4d4;
  --prompt: #00ff00;
  --input: #ff69b4;
  --link: #00bfff;
  --highlight: #ffcc00;
  --border-color: #444444;
}

html, body {
  height: 100%;
  font-size: 16px;
  margin: 0;
  padding: 0;
  font-family: 'IBM Plex Mono', monospace;
  background: var(--background);
  color: var(--foreground);
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}

#terminal {
  width: 90%;
  max-width: 800px;
  height: 80%;
  background: rgba(0, 0, 0, 0.85);
  border: 2px solid var(--border-color);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

#terminal-output {
  flex-grow: 1;
  padding: 10px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 14px;
  line-height: 1.5;
}

#terminal-output::-webkit-scrollbar {
  display: none;
}

#input-line {
  display: flex;
  align-items: center;
  padding: 10px;
  background: var(--background);
  border-top: 2px solid var(--border-color);
}

#terminal-input {
  font-family: 'IBM Plex Mono', monospace;
  padding: 0;
  margin: 0;
  border: none;
  resize: none;
  outline: none;
  font-size: 16px;
  background-color: transparent;
  flex-grow: 1;
  color: var(--input);
}

a {
  color: var(--link);
  text-decoration: none;
}

a:hover {
  color: var(--highlight);
}

.command-line {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: 10px;
}

.command-line .prompt {
  flex-shrink: 0;
  margin-right: 5px;
  white-space: nowrap;
  color: var(--prompt);
}

.command-line .command {
  word-break: break-all;
}

.highlight {
  color: var(--highlight);
  font-weight: 600;
}

@media (max-width: 600px) {
  body {
    font-size: 10px;
  }
  
  #terminal-input {
    font-size: 10px;
  }
  
  #terminal-output p, #terminal-output div {
    line-height: 14px;
  }
  
  pre {
    line-height: 12px !important;
    font-size: 9px;
  }
}
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or suggestions.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.