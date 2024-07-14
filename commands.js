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