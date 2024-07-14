# R2C Terminal

R2C Terminal is an interactive web-based terminal that serves as a dynamic and stylish resume. It uses modern web technologies to create a terminal-like interface where users can explore your resume, projects, and contact information through various commands.

## Features

- **Interactive Terminal Interface:** Navigate through your resume using terminal commands.
- **Dynamic Content:** Update your resume details easily with the provided configuration.
- **Stylish Design:** Dark theme with vibrant accent colors for an eye-catching look.
- **Expandable Sections:** Expand and collapse sections to view detailed information.

## Demo

Check out the live demo of R2C Terminal [here](https://github.com/hassanzouhar/terminal_cv).

## Installation

To set up R2C Terminal on your local machine, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/hassanzouhar/terminal_cv.git
    cd terminal_cv
    ```

2. **Open the project:**

    Open `index.html` in your favorite web browser.

## Configuration

Customize your R2C Terminal by editing the `config.js` file. Here are the configurable options:

### ASCII Art and Title

```javascript
const config = {
  ascii: [
    "██████╗ ██████╗  ██████╗     ████████╗███████╗██████╗ ███╗   ███╗",
    "██╔══██╗██╔══██╗██╔═══██╗    ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║",
    "██████╔╝██████╔╝██║   ██║       ██║   █████╗  ██████╔╝██╔████╔██║",
    "██╔═══╝ ██╔═══╝ ██║   ██║       ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║",
    "██║     ██║     ╚██████╔╝       ██║   ███████╗██║  ██║██║ ╚═╝ ██║",
    "╚═╝     ╚═╝      ╚═════╝        ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝"
  ],
  title: "R2C Terminal",
  username: "visitor",
  hostname: "r2c",
  password: "050823",
  repoLink: "https://github.com/hassanzouhar/terminal_cv",
  social: {
    email: "your@email.com",
    github: "yourgithub",
    linkedin: "you"
  },
  aboutGreeting: "Hi stranger. Welcome to R2C Terminal.",
  projects: [
    ["GofeR", "Vue.js reactivity in Go.", "https://github.com/nasan016/gofer"],
    ["R2C Terminal", "Terminal styled website.", "https://github.com/hassanzouhar/terminal_cv"]
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

## Usage

### Available Commands

- **help:** Show the help message.
- **clear:** Clear the terminal.
- **about:** Display information about me.
- **skills:** List my technical skills.
- **experience:** Show my work experience.
- **education:** Display my educational background.
- **projects:** List my notable projects.
- **contact:** Show my contact information.

### Example Commands

Type `help` in the terminal to see all available commands:

```sh
$ help
Available commands:
  help        - Show this help message
  clear       - Clear the terminal
  about       - Display information about me
  skills      - List my technical skills
  experience  - Show my work experience
  education   - Display my educational background
  projects    - List my notable projects
  contact     - Show my contact information
```

## Customization

You can customize the colors, ASCII art, and content by modifying the `config.js` file. Adjust the `colors` section to fit your preferred theme and style.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or inquiries, please reach out via [email](mailto:your@email.com).
```

