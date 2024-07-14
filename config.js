const config = {
  ascii: [
    "████████╗ ███████╗ ██████╗  ███╗   ███╗",
    "╚══██╔══╝ ██╔════╝ ██╔══██╗ ████╗ ████║",
    "   ██║    █████╗   ██████╔╝ ██╔████╔██║",
    "   ██║    ██╔══╝   ██╔══██╗ ██║╚██╔╝██║",
    "   ██║    ███████╗ ██║  ██║ ██║ ╚═╝ ██║",
    "   ╚═╝    ╚══════╝ ╚═╝  ╚═╝ ╚═╝     ╚═╝"
  ],
  title: "R2C Terminal",
  username: "rebel",
  hostname: "r2c.world",
  password: "rebelswithacause",
  repoLink: "https://github.com/hassanzouhar/terminal_cv",
  social: {
    email: "your@email.com",
    github: "yourgithub",
    linkedin: "you"
  },
  aboutGreeting: "Hi there. Welcome to the R2C Project Directory.",
  projects: [
    ["Lorem ipsum", "Vue.js reactivity in Go.", "https://github.com/hassanzouhar/terminal_cv"],
    ["R2C Terminal", "Terminal styled website.", "https://github.com/hassanzouhar/terminal_cv"]
  ],
  colors: {
    background: "#1c1c1c",       // Darker background
    foreground: "#d4d4d4",       // Light grey text for better readability
    banner: "#ffcc00",           // Bright yellow for the banner
    border: {
      visible: true,
      color: "#444444"           // Subtle grey border
    },
    prompt: {
      default: "#d4d4d4",        // Match the foreground color
      user: "#00ff00",           // Bright green for the user
      host: "#00bfff",           // Sky blue for the host
      input: "#ff69b4"           // Pink for the input
    },
    link: {
      text: "#00bfff",           // Sky blue for links
      highlightColor: "#ff69b4", // Pink for link highlight background
      highlightText: "#1c1c1c"   // Match background for contrast
    },
    commands: {
      textColor: "#ffcc00"       // Bright yellow for commands text
    }
  }
};
