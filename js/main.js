import {
  codeImplementations,
  algorithmComplexities,
} from "./code_implementations.js";

let currentCategory = "linear";
let currentLanguage = "python";

// Dark mode toggle
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

window.postMessage({ type: "theme", theme: "dark" }, "*");

themeToggle.addEventListener("click", () => {
  const currentTheme = html.setAttribute(
    "data-theme",
    html.getAttribute("data-theme") === "light" ? "dark" : "light"
  );
  localStorage.setItem("theme", currentTheme);

  themeToggle.querySelector("i").className =
    html.getAttribute("data-theme") === "light" ? "fas fa-sun" : "fas fa-moon";

  localStorage.setItem("themeToggled", "true");
});

document.addEventListener("DOMContentLoaded", () => {
  const sidebarItems = document.querySelectorAll(".sidebar li");
  const dropdowns = document.querySelectorAll(".has-submenu .dropdown-toggle");
  const langButtons = document.querySelectorAll(".lang-btn");
  const playButton = document.getElementById("playButton");

  // Set theme
  const savedTheme = localStorage.getItem("theme") || "light";
  html.setAttribute("data-theme", savedTheme);
  const icon = themeToggle.querySelector("i");
  icon.className = savedTheme === "light" ? "fas fa-sun" : "fas fa-moon";

  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.querySelector(".sidebar");

  const visualizerButton = document.getElementById("visualizerButton");
  const contentArea = document.querySelector(".content");
  const visualizationContainer = document.querySelector(
    ".visualization-container"
  );

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
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      sidebar.classList.remove("show");
      overlay.classList.remove("show");
    }
  });

  handleSidebarMenuClick();

  //handle the copy clip board
  document.querySelector(".copy-btn").addEventListener("click", async () => {
    const codeDisplay = document.getElementById("codeDisplay");
    const copyBtn = document.querySelector(".copy-btn");

    try {
      await navigator.clipboard.writeText(codeDisplay.textContent);

      // Visual feedback
      copyBtn.classList.add("success");
      const originalIcon = copyBtn.innerHTML;
      copyBtn.innerHTML = '<i class="fas fa-check"></i>';

      // Reset after 2 seconds
      setTimeout(() => {
        copyBtn.classList.remove("success");
        copyBtn.innerHTML = originalIcon;
      }, 1000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  });

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

      if (item.id !== "visualizerButton") {
        item.addEventListener("click", () => {
          contentArea.style.display = "block";
          visualizationContainer.style.display = "none";
          visualizerButton.classList.remove("active");
        });
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

  visualizerButton.addEventListener("click", () => {
    // Hide content area
    contentArea.style.display = "none";

    // Show visualization container
    visualizationContainer.style.display = "block";

    // Update active state in sidebar
    sidebarItems.forEach((item) => item.classList.remove("active"));
    visualizerButton.classList.add("active");

    // Close sidebar on mobile after clicking
    if (window.innerWidth <= 768) {
      sidebar.classList.remove("show");
      overlay.classList.remove("show");
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
  const timeComplexity = document.getElementById("timeComplexity");
  const spaceComplexity = document.getElementById("spaceComplexity");
  const algorithmTitle = document.getElementById("algorithmTitle");
  const algoDescription = document.getElementById("algorithmDescription");

  const titleMap = {
    linear: [
      "Linear Search: Second Largest Element in an Array",
      "- This program finds the second-largest element in an array by first sorting the array in non-decreasing order and then scanning from the second-to-last element to find the first value that is different from the largest. If no second-largest element exists, it returns -1.",
      "fa-code",
    ],
    binary: [
      "Binary Search: Count 1’s in a sorted binary array",
      "- This program counts the number of 1's in a boolean array that is assumed to be sorted in non-increasing order (i.e., all 1's are before any 0's). It uses a binary search approach to efficiently find the last occurrence of 1 and calculates how many 1's are in the array. If no 1's are found, it returns 0.",
      "fa-code",
    ],
    bubbleSample: [
      "Bubble Sort: Sorting Grade Ranks",
      "- This program sorts a list of grades in descending order using the Bubble Sort algorithm, where the highest grade is ranked 1, the second-highest ranked 2, and so on. It first prints the original list of grades and then displays the sorted grades along with their corresponding ranks. The sorting process ensures that the grades are arranged from the highest to the lowest, making it suitable for ranking purposes.",
      "fa-sort",
    ],

    binaryTwo: [
      "Binary Search: Find Minimun",
      "- This program finds the minimum value in an array using the Binary Search algorithm. It repeatedly divides the array in half and compares the middle element with the target value. If the target value is found, it returns the index of the target value. If the target value is not found, it returns the index of the element that is greater than the target value. The algorithm continues to divide the array in half until the target value is found or the array is empty.",
      "fa-sort",
    ],

    twoSum: [
      "Two Sum: Finding Two Numbers that Add Up to a Target",
      "- The Two Sum II problem involves finding two numbers in a sorted array that add up to a given target value. The goal is to return the 1-indexed positions of the two numbers whose sum equals the target. Since the array is sorted in ascending order, the problem can be efficiently solved using the two-pointer technique. One pointer starts at the beginning of the array, and the other starts at the end.",
      "fa-code",
    ],

    traversalArray: [
      "Array Traversal",
      "- Array traversal involves visiting all the elements of the array once.",
      "fa-grip",
    ],
    insertionArray: [
      "Insertion in Array",
      "- We can insert one or multiple elements at any position in the array.",
      "fa-grip",
    ],
    searchingArray: [
      "Searching in Array",
      "- We can traverse over an array and search for an element.",
      "fa-grip",
    ],

    deletingArray: [
      "Deletion in Array",
      "- We can delete an element at any index in an array.",
      "fa-grip",
    ],

    bubble: [
      "Bubble Sort",
      "- Bubble Sort is an algorithm that sorts an array from the lowest value to the highest value.",
      "fa-sort",
    ],
    selection: [
      "Selection Sort",
      "- The Selection Sort algorithm finds the lowest value in an array and moves it to the front of the array.",
      "fa-sort",
    ],
    insertion: [
      "Insertion Sort",
      "- The Insertion Sort algorithm uses one part of the array to hold the sorted values, and the other part of the array to hold values that are not sorted yet.",
      "fa-sort",
    ],
    merge: [
      "Merge Sort",
      "- The Merge Sort algorithm is a divide-and-conquer algorithm that sorts an array by first breaking it down into smaller arrays, and then building the array back together the correct way so that it is sorted.",
      "fa-sort",
    ],
    quick: [
      "Quick Sort",
      "- The Quicksort algorithm takes an array of values, chooses one of the values as the 'pivot' element, and moves the other values so that lower values are on the left of the pivot element, and higher values are on the right of it.",
      "fa-sort",
    ],
    singly: [
      "Singly Linked List",
      "- Linked List is a linear data structure, in which elements are not stored at a contiguous location, rather they are linked using pointers. Linked List forms a series of connected nodes, where each node stores the data and the address of the next node.",
      "fa-link",
    ],
    doubly: [
      "Doubly Linked List",
      "- Inserting a new node in a doubly linked list is very similar to inserting new node in linked list. There is a little extra work required to maintain the link of the previous node. In this article, we will learn about different ways to insert a node in a doubly linked list.",
      "fa-link",
    ],
    circular: [
      "Circular Linked List",
      "- A circular linked list is a special type of linked list where all the nodes are connected to form a circle. Unlike a regular linked list, which ends with a node pointing to NULL, the last node in a circular linked list points back to the first node. This means that you can keep traversing the list without ever reaching a NULL value.",
      "fa-link",
    ],
    infix: [
      "Infix Expression",
      "- Infix Expression is an expression where the operator is placed between the operands. For example, 2 + 3 is an infix expression.",
      "fa-layer-group",
    ],
    prefix: [
      "Prefix Expression",
      "- Prefix Expression is an expression where the operator is placed before the operands. For example, + 2 3 is a prefix expression.",
      "fa-layer-group",
    ],
    postfix: [
      "Postfix Expression",
      "- Postfix Expression is an expression where the operator is placed after the operands. For example, 2 3 + is a postfix expression.",
      "fa-layer-group",
    ],
    queue: [
      "Queue Implementation",
      "-  Queue is a linear data structure that follows a particular order in which the operations are performed for storing data. The order is First In First Out (FIFO).",
      "fa-bars-progress",
    ],
    inorder: [
      "Inorder Traversal",
      "- In-order Traversal does a recursive In-order Traversal of the left subtree, visits the root node, and finally, does a recursive In-order Traversal of the right subtree. This traversal is mainly used for Binary Search Trees where it returns values in ascending order.",
      "fa-sitemap",
    ],
    preorder: [
      "Preorder Traversal",
      "- Pre-order Traversal is done by visiting the root node first, then recursively do a pre-order traversal of the left subtree, followed by a recursive pre-order traversal of the right subtree. It's used for creating a copy of the tree, prefix notation of an expression tree, etc.",
      "fa-sitemap",
    ],
    postorder: [
      "Postorder Traversal",
      "- Post-order Traversal works by recursively doing a Post-order Traversal of the left subtree and the right subtree, followed by a visit to the root node. It is used for deleting a tree, post-fix notation of an expression tree, etc.",
      "fa-sitemap",
    ],
  };

  const [title, decription, icon] = titleMap[currentCategory] || [
    "DSA Implementation",
    "- This is a general implementation of a data structure.",
    "fa-code",
  ];
  algorithmTitle.innerHTML = `<i class="fas ${icon}"></i> ${title}`;
  algoDescription.innerHTML = decription;

  // Get current implementation
  const currentImpl = codeImplementations[currentCategory][currentLanguage];

  // Update code display
  codeDisplay.textContent = currentImpl.code;
  codeDisplay.className = "";

  if (currentLanguage === "cpp") {
    codeDisplay.classList.add("language-cpp");
  } else if (currentLanguage === "pseudocode") {
    codeDisplay.className = "language-pseudocode";
    codeDisplay.classList.add("language-pseudocode");
  } else {
    codeDisplay.classList.add("language-python");
  }
  // Update complexity information
  const complexity = algorithmComplexities[currentCategory] || {
    time: "-",
    space: "-",
  };
  timeComplexity.textContent = complexity.time;
  spaceComplexity.textContent = complexity.space;

  Prism.highlightElement(codeDisplay);

  const activeDropdowns = Array.from(
    document.querySelectorAll(".has-submenu.active")
  );
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
