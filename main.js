import { codeImplementations } from './code_implementations.js';

let currentCategory = "array";
let currentLanguage = "python";

// Dark mode toggle
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  html.setAttribute("data-theme", newTheme);

  const icon = themeToggle.querySelector("i");
  icon.className = newTheme === "light" ? "fas fa-sun" : "fas fa-moon";

  localStorage.setItem("theme", newTheme);
});

document.addEventListener("DOMContentLoaded", () => {
  const sidebarItems = document.querySelectorAll(".sidebar li");
  const dropdowns = document.querySelectorAll(".has-submenu .dropdown-toggle");
  const langButtons = document.querySelectorAll(".lang-btn");
  const playButton = document.getElementById("playButton");

  const savedTheme = localStorage.getItem("theme") || "light";
  html.setAttribute("data-theme", savedTheme);
  const icon = themeToggle.querySelector("i");
  icon.className = savedTheme === "light" ? "fas fa-sun" : "fas fa-moon";

  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.querySelector(".sidebar");

  // Create overlay element
  const overlay = document.createElement("div");
  overlay.className = "sidebar-overlay";
  document.body.appendChild(overlay);

  function toggleSidebar() {
    sidebar.classList.toggle("show");
    overlay.classList.toggle("show");
  }

  sidebarToggle.addEventListener("click", toggleSidebar);

  // Close sidebar when clicking overlay
  overlay.addEventListener("click", toggleSidebar);

  // Close sidebar when window is resized above mobile breakpoint
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      sidebar.classList.remove("show");
      overlay.classList.remove("show");
    }
  });

  handleSidebarMenuClick();

  // Handle submenu items
  sidebarItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (item.parentElement.classList.contains("submenu")) {
        e.stopPropagation();
        sidebarItems.forEach((i) => {
          if (i.parentElement.classList.contains("submenu")) {
            i.classList.remove("active");
          }
        });
        item.classList.add("active");
        currentCategory = item.dataset.category;
        item.closest(".has-submenu").classList.add("active");
        updateCodeDisplay();
      } else if (!item.classList.contains("has-submenu")) {
        sidebarItems.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
        currentCategory = item.dataset.category;
        closeAllDropdowns();
        updateCodeDisplay();
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".sidebar")) {
      closeAllDropdowns();
    }
  });

  // Handle dropdown toggles
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", function (e) {
      e.stopPropagation();
      const parent = this.parentElement;

      // Close other dropdowns but not current one
      const otherDropdowns = document.querySelectorAll(".has-submenu");
      otherDropdowns.forEach((dropdown) => {
        if (dropdown !== parent) {
          dropdown.classList.remove("active");
        }
      });

      parent.classList.toggle("active");
    });
  });

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      langButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentLanguage = btn.dataset.lang;
      updateCodeDisplay();
    });
  });

  playButton.addEventListener("click", async () => {
    const outputDisplay = document.getElementById("outputDisplay");

    try {
      outputDisplay.textContent = "Running...";

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const output =
        codeImplementations[currentCategory][currentLanguage].output;
      outputDisplay.textContent = output;
    } catch (error) {
      console.error("Error displaying output:", error);
      outputDisplay.textContent = `Error: ${error.message}`;
    }
  });
});

const DROPDOWN_CONFIG = {
  selector: ".has-submenu",
  activeClass: "active",
};

const handleSidebarMenuClick = () => {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".sidebar-overlay");
  const menuItems = sidebar.querySelectorAll("li");

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove("show");
        overlay.classList.remove("show");
      }
    });
  });
};

const closeAllDropdowns = () => {
  try {
    const dropdowns = document.querySelectorAll(DROPDOWN_CONFIG.selector);
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove(DROPDOWN_CONFIG.activeClass);
    });
  } catch (error) {
    console.error("Error closing dropdowns:", error.message);
  }
};

const updateCodeDisplay = () => {
  const codeDisplay = document.getElementById("codeDisplay");
  const outputDisplay = document.getElementById("outputDisplay");

  // Get current implementation
  const currentImpl = codeImplementations[currentCategory][currentLanguage];

  // Update code display
  codeDisplay.textContent = currentImpl.code;
  codeDisplay.className = "";

  if (currentLanguage === "cpp") {
    codeDisplay.classList.add("language-cpp");
  } else {
    codeDisplay.classList.add("language-python");
  }

  const activeDropdowns = Array.from(
    document.querySelectorAll(".has-submenu.active")
  );

  Prism.highlightElement(codeDisplay);

  activeDropdowns.forEach((dropdown) => {
    dropdown.classList.add("active");
  });

  outputDisplay.textContent = "";
};

const executeCode = async (language) => {
  try {
    return codeImplementations[currentCategory][language].output;
  } catch (error) {
    console.error("Execution error:", error);
    throw new Error(`Failed to get output: ${error.message}`);
  }
};

updateCodeDisplay();
