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
        const output = processCommand(input);
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
