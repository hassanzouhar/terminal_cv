const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');
const prompt = document.getElementById('prompt');

let historyIndex = 0;
let tempInput = "";
const HISTORY = [];

// Apply colors from config
document.body.style.backgroundColor = config.colors.background;
document.body.style.color = config.colors.foreground;
terminalInput.style.color = config.colors.prompt.input;

if (config.colors.border.visible) {
    document.getElementById('terminal').style.border = `2px solid ${config.colors.border.color}`;
}

document.getElementById('user').textContent = config.username;
document.getElementById('user').style.color = config.colors.prompt.user;
document.getElementById('host').textContent = config.hostname;
document.getElementById('host').style.color = config.colors.prompt.host;

// Initialize the terminal
function initTerminal() {
    displayBanner();
    terminalInput.addEventListener('keydown', handleInput);
    window.addEventListener('click', () => {
        terminalInput.focus();
    });
}

// Display welcome banner
function displayBanner() {
    const banner = `
<pre style="color: ${config.colors.banner}">
${config.ascii.join('\n')}
</pre>
<p>${config.title}</p>
<div>Welcome to the Terminal CV! Type <span class="command highlight">'help'</span> to see available commands.</div>
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
        const output = processCommand(input);
        appendToTerminal(output);
    }
    
    terminalInput.value = '';
    scrollToBottom();
}

// Commands
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
        clearTerminal();
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
${createExpandableSection(
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
${createExpandableSection(
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
`,

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

// Create expandable sections for experience and projects
function createExpandableSection(title, content) {
    return `
<div class="expandable">
  <span class="subheading">${title}</span>
  <div class="expanded-content" style="display: none;">${content}</div>
</div>
`;
}

// Initialize the terminal when the page loads
window.addEventListener('load', initTerminal);
