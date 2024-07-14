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
  repoLink: "https://github.com/nasan016/r2c",
  social: {
    email: "your@email.com",
    github: "yourgithub",
    linkedin: "you"
  },
  aboutGreeting: "Hi stranger. Welcome to R2C Terminal.",
  projects: [
    ["GofeR", "Vue.js reactivity in Go.", "https://github.com/nasan016/gofer"],
    ["R2C Terminal", "Terminal styled website.", "https://github.com/nasan016/r2c"]
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
