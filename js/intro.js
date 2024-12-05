const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;
const cursorLight = document.getElementById("cursor-light");
const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");

const storedTheme = localStorage.getItem("theme");
if (storedTheme === "dark") {
  body.classList.add("dark-mode");
} else {
  body.classList.remove("dark-mode");
}

const changeHeaderBackground = () => {
  if (window.scrollY > 0) {
    header.style.backgroundColor = "var(--secondary-color)";
    header.style.boxShadow = `0px 10px 10px -10px ${
      body.classList.contains("dark-mode") ? "#f5f5f5" : "rgba(33, 35, 38, 0.1)"
    }`;
    header.style.transition =
      "background-color 0.3s ease, box-shadow 0.3s ease";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "none";
  }
};

window.addEventListener("scroll", changeHeaderBackground);

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  updateDarkModeIcon();
});

window.addEventListener("storage", (e) => {
  if (e.key === "themeToggled" && e.newValue === "true") {
    const theme = storedTheme === "dark" ? "dark" : "light";
    body.setAttribute("dark-mode", theme);
    localStorage.removeItem("themeToggled");
  }
});

const updateDarkModeIcon = () => {
  const icon = body.classList.contains("dark-mode") ? "🌓" : "☀️";
  darkModeToggle.innerHTML = icon;

  darkModeToggle.classList.add("toggle-animation");
  setTimeout(() => {
    darkModeToggle.classList.remove("toggle-animation");
  }, 500);

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

// animation for dark mode toggle
const toggleAnimation = document.createElement("style");
toggleAnimation.textContent = `
                              .toggle-animation {
                                   animation: toggleScale 0.3s ease;
                              }

                              @keyframes toggleScale {
                                   0% { transform: scale(1); }
                                   50% { transform: scale(0.9); }
                                   100% { transform: scale(1); }
                              }
                              `;
document.head.appendChild(toggleAnimation);

// light cursor effect in the darkmode
document.addEventListener("mousemove", (e) => {
  if (body.classList.contains("dark-mode")) {
    cursorLight.style.background = `
      radial-gradient(
        circle at center,
        rgba(255, 255, 255, 0.30) 0%,
        rgba(255, 255, 255, 0.20) 20%,
        rgba(255, 255, 255, 0.10) 40%,
        rgba(255, 255, 255, 0) 60%
      )
    `;
    cursorLight.style.transform = `translate(${e.clientX - 200}px, ${
      e.clientY - 200
    }px)`;
    cursorLight.style.opacity = "1";
  } else {
    cursorLight.style.opacity = "0";
  }
});

window.addEventListener("load", () => {
  if (body.classList.contains("dark-mode")) {
    cursorLight.style.opacity = "1";
  } else {
    cursorLight.style.opacity = "0";
  }
});

// Animate elements on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".hero h1, .hero p, .cta-button, .about h2, .about p"
  );
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight * 0.8) {
      element.style.animation = "fadeInUp 1s ease forwards";
    }
  });
};

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

//fadeInUp animation
const style = document.createElement("style");
style.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
document.head.appendChild(style);

const createFloatingShapes = () => {
  const shapes = document.createElement("div");
  shapes.className = "shapes";
  const heroSection = document.querySelector(".hero");
  heroSection.appendChild(shapes);

  const dsaElements = [
    // Data Structures
    "[]",
    "{}",
    "()",
    "<>",

    // Arrows & Pointers
    "→",
    "←",
    "↔",
    "⇒",
    "⇐",
    "⇔",
    "↑",
    "↓",

    // Programming Symbols
    "⚡",
    "&&",
    "||",
    "!=",
    "==",
    "+=",
    "++",
    "--",
    "//",

    // Math & Logic
    "∞",
    "≥",
    "≤",
    "≈",
    "≠",
    "∑",
    "∏",
    "∈",
    "∉",
    "∀",
    "∃",

    // Data Structure Symbols
    "⟲",
    "⎔",
    "⋈",
    "≡",
    "⫘",
    "⟁",
    "△",
    "□",

    // Programming Terms
    "if",
    "for",
    "var",
    "let",
    "int",
    "str",

    // Binary & Numbers
    "01",
    "10",
    "0x",
    "2n",

    // Keywords
    "def",
    "fun",
    "val",
    "new",

    // Operators
    "=>",
    "->",
    "::",
    "...",

    // Common Programming Elements
    "API",
    "SQL",
    "DOM",
    "CSS",

    // Data Types
    "<T>",
    "int",
    "str",
    "bool",

    // Common Methods
    ".map",
    ".pop",
    ".push",

    // Programming Concepts
    "OOP",
    "MVC",
    "CLI",

    // Version Control
    "git",
    "dev",
    "main",

    // Common Symbols
    "#",
    "@",
    "$",
    "_",

    // Data Structure Terms
    "node",
    "root",
    "leaf",
    "edge",

    // Algorithm Terms
    "sort",
    "loop",
    "heap",
    "tree",
  ];
  for (let i = 0; i < 90; i++) {
    const shape = document.createElement("div");
    shape.className = "shape";

    const element = dsaElements[Math.floor(Math.random() * dsaElements.length)];
    shape.textContent = element;

    // Random size between 28px and 56px
    const size = Math.random() * 28 + 28;
    shape.style.fontSize = `${size}px`;

    // Initial random position
    shape.style.left = `${Math.random() * 80 + 10}%`;
    shape.style.top = `${Math.random() * 80 + 10}%`;

    // Custom animation properties
    const duration = Math.random() * 20 + 20; // 20-40s
    const delay = Math.random() * -20;
    const direction = Math.random() > 0.5 ? "normal" : "reverse";

    // Random movement distances
    const moveX = (Math.random() - 0.5) * 100; // -50px to 50px
    const moveY = (Math.random() - 0.5) * 100; // -50px to 50px

    // Set custom properties for movement
    shape.style.setProperty("--move-x", `${moveX}px`);
    shape.style.setProperty("--move-y", `${moveY}px`);

    // Apply animations
    shape.style.animation = `
         float ${duration}s ${direction} infinite ${delay}s ease-in-out,
         rotate ${duration * 1.5}s linear infinite ${delay}s
     `;

    shapes.appendChild(shape);

    // Hover effects
    shape.addEventListener("mouseover", () => {
      shape.style.transform = "scale(1.2)";
      shape.style.color = "var(--accent-color)";
    });

    shape.addEventListener("mouseout", () => {
      shape.style.transform = "scale(1)";
      shape.style.color = "";
    });
  }
};

// function to make shapes react to mouse movement
const addMouseInteraction = () => {
  const shapes = document.querySelectorAll(".shape");
  const hero = document.querySelector(".hero");

  hero.addEventListener("mousemove", (e) => {
    const { left, top } = hero.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    shapes.forEach((shape) => {
      const shapeX = shape.offsetLeft + shape.offsetWidth / 2;
      const shapeY = shape.offsetTop + shape.offsetHeight / 2;

      const deltaX = mouseX - shapeX;
      const deltaY = mouseY - shapeY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < 200) {
        const angle = Math.atan2(deltaY, deltaX);
        const force = (200 - distance) / 200;

        const currentTransform = shape.style.getPropertyValue("transform");
        shape.style.transform = `${currentTransform} translate(${
          -force * Math.cos(angle) * 50
        }px, ${-force * Math.sin(angle) * 50}px)`;
      }
    });
  });

  hero.addEventListener("mouseleave", () => {
    shapes.forEach((shape) => {
      shape.style.transform = "";
    });
  });
};

window.addEventListener("load", () => {
  createFloatingShapes();
  addMouseInteraction();
});

// Back to Top Button functionality
const backToTopButton = document.getElementById("backToTop");

// Show/hide button based on scroll position
window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 100
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Scroll to top when button is clicked
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
