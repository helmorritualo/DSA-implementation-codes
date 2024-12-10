// Global variables
let array = [];
let linkedList = [];
let stack = [];
let queue = [];
let animationSpeed = 100;
let isAnimating = false;
let currentTab = "array";

// Generate random array based on screen width
const generateArray = () => {
  const screenWidth = window.innerWidth;
  let arraySize;

  if (screenWidth <= 480) {
    arraySize = 20; // For mobile devices
  } else if (screenWidth <= 768) {
    arraySize = 25; // For tablets
  } else {
    arraySize = 25; // For desktop
  }

  array = Array.from(
    { length: arraySize },
    () => Math.floor(Math.random() * 200) + 10
  );
  displayArray();
};

window.addEventListener("resize", () => {
  generateArray();
});

// Display array as bars
const displayArray = () => {
  const container = document.getElementById("array-view");
  container.innerHTML = "";
  array.forEach((value) => {
    const bar = document.createElement("div");
    bar.className = "array-bar";
    bar.style.height = `${value}px`;
    container.appendChild(bar);
  });
};

// bubble sort algorithms animation 
const bubbleSort = async () => {
  const n = array.length;
  const bars = document.getElementsByClassName("array-bar");

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (!isAnimating) return;

      bars[j].classList.add("comparing");
      bars[j + 1].classList.add("comparing");

      await new Promise((resolve) => setTimeout(resolve, animationSpeed));

      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        bars[j].style.height = `${array[j]}px`;
        bars[j + 1].style.height = `${array[j + 1]}px`;
      }

      bars[j].classList.remove("comparing");
      bars[j + 1].classList.remove("comparing");
    }
    bars[n - 1 - i].classList.add("sorted");
  }
  bars[0].classList.add("sorted");
};

// selection sort algorithms animation
const selectionSort = async () => {
  const n = array.length;
  const bars = document.getElementsByClassName("array-bar");

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    bars[i].classList.add("comparing");

    for (let j = i + 1; j < n; j++) {
      if (!isAnimating) return;

      bars[j].classList.add("comparing");
      await new Promise((resolve) => setTimeout(resolve, animationSpeed));

      if (array[j] < array[minIdx]) {
        bars[minIdx].classList.remove("comparing");
        minIdx = j;
        bars[minIdx].classList.add("comparing");
      }

      bars[j].classList.remove("comparing");
    }

    if (minIdx !== i) {
      [array[i], array[minIdx]] = [array[minIdx], array[i]];
      bars[i].style.height = `${array[i]}px`;
      bars[minIdx].style.height = `${array[minIdx]}px`;
    }

    bars[i].classList.remove("comparing");
    bars[i].classList.add("sorted");
  }
  bars[n - 1].classList.add("sorted");
};

// insertion sort algorithms animation
const insertionSort = async () => {
  const n = array.length;
  const bars = document.getElementsByClassName("array-bar");

  for (let i = 1; i < n; i++) {
    const key = array[i];
    let j = i - 1;
    bars[i].classList.add("comparing");

    await new Promise((resolve) => setTimeout(resolve, animationSpeed));

    while (j >= 0 && array[j] > key) {
      if (!isAnimating) return;

      array[j + 1] = array[j];
      bars[j + 1].style.height = `${array[j]}px`;
      bars[j].classList.add("comparing");

      await new Promise((resolve) => setTimeout(resolve, animationSpeed));

      bars[j].classList.remove("comparing");
      j--;
    }

    array[j + 1] = key;
    bars[j + 1].style.height = `${key}px`;
    bars[i].classList.remove("comparing");
    bars[j + 1].classList.add("sorted");
  }
};

// merget sort algorithms animation
const mergeSort = async () => {
  const bars = document.getElementsByClassName("array-bar");

  async function merge(left, mid, right) {
    const n1 = mid - left + 1;
    const n2 = right - mid;
    const L = array.slice(left, mid + 1);
    const R = array.slice(mid + 1, right + 1);

    let i = 0,
      j = 0,
      k = left;

    while (i < n1 && j < n2) {
      if (!isAnimating) return;

      bars[left + i].classList.add("comparing");
      bars[mid + 1 + j].classList.add("comparing");

      await new Promise((resolve) => setTimeout(resolve, animationSpeed));

      if (L[i] <= R[j]) {
        array[k] = L[i];
        bars[k].style.height = `${L[i]}px`;
        i++;
      } else {
        array[k] = R[j];
        bars[k].style.height = `${R[j]}px`;
        j++;
      }

      bars[k].classList.add("sorted");
      k++;
    }

    while (i < n1) {
      array[k] = L[i];
      bars[k].style.height = `${L[i]}px`;
      bars[k].classList.add("sorted");
      i++;
      k++;
    }

    while (j < n2) {
      array[k] = R[j];
      bars[k].style.height = `${R[j]}px`;
      bars[k].classList.add("sorted");
      j++;
      k++;
    }
  }

  const mergeSortHelper = async (left, right) => {
    if (left < right) {
      const mid = Math.floor((left + right) / 2);
      await mergeSortHelper(left, mid);
      await mergeSortHelper(mid + 1, right);
      await merge(left, mid, right);
    }
  };

  await mergeSortHelper(0, array.length - 1);
};

// QuickSort algorithms animation
const quickSort = async () => {
  const bars = document.getElementsByClassName("array-bar");

  async function partition(low, high) {
    const pivot = array[high];
    let i = low - 1;

    bars[high].classList.add("comparing");

    for (let j = low; j < high; j++) {
      if (!isAnimating) return;

      bars[j].classList.add("comparing");
      await new Promise((resolve) => setTimeout(resolve, animationSpeed));

      if (array[j] <= pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
        bars[i].style.height = `${array[i]}px`;
        bars[j].style.height = `${array[j]}px`;
      }

      bars[j].classList.remove("comparing");
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    bars[i + 1].style.height = `${array[i + 1]}px`;
    bars[high].style.height = `${array[high]}px`;
    bars[high].classList.remove("comparing");

    return i + 1;
  }

  const quickSortHelper = async (low, high) => {
    if (low < high) {
      const pi = await partition(low, high);
      await quickSortHelper(low, pi - 1);
      await quickSortHelper(pi + 1, high);
    }
  };

  await quickSortHelper(0, array.length - 1);
};

// Linked List Operations
const displayLinkedList = () => {
  const container = document.getElementById("linkedlist-view");
  container.innerHTML = "";

  linkedList.forEach((value) => {
    const node = document.createElement("div");
    node.className = "node";
    node.textContent = value;
    container.appendChild(node);
  });
};

const insertAtStart = (value) => {
  linkedList.unshift(value);
  displayLinkedList();
};

const insertAtEnd = (value) => {
  linkedList.push(value);
  displayLinkedList();
};

const deleteFromStart = () => {
  if (linkedList.length > 0) {
    linkedList.shift();
    displayLinkedList();
  }
};

const deleteFromEnd = () => {
  if (linkedList.length > 0) {
    linkedList.pop();
    displayLinkedList();
  }
};

// Stack Operations
const displayStack = () => {
  const container = document.getElementById("stack-view");
  container.innerHTML = "";

  stack.forEach((value) => {
    const element = document.createElement("div");
    element.className = "stack-element";
    element.textContent = value;
    container.appendChild(element);
  });
};

const push = (value) => {
  if (stack.length < 10) {
    stack.push(value);
    displayStack();
  }
};
const pop = () => {
  if (stack.length > 0) {
    stack.pop();
    displayStack();
  }
};

// Queue Operations
const displayQueue = () => {
  const container = document.getElementById("queue-view");
  container.innerHTML = "";

  queue.forEach((value) => {
    const element = document.createElement("div");
    element.className = "queue-element";
    element.textContent = value;
    container.appendChild(element);
  });
};

const enqueue = (value) => {
  if (queue.length < 10) {
    queue.push(value);
    displayQueue();
  }
};

const dequeue = () => {
  if (queue.length > 0) {
    queue.shift();
    displayQueue();
  }
};

const addEventListeners = () => {
  // Speed control
  document
    .getElementById("speedRange")
    .addEventListener("input", updateSpeedFromRange);

  // Array controls
  document
    .getElementById("generateBtn")
    .addEventListener("click", generateArray);
  document
    .getElementById("playBtn")
    .addEventListener("click", startVisualization);
  document
    .getElementById("resetBtn")
    .addEventListener("click", resetVisualization);

  // Linked List controls
  document.getElementById("llInsertStart").addEventListener("click", () => {
    const value = parseInt(document.getElementById("llValue").value);
    if (!isNaN(value)) insertAtStart(value);
  });
  document.getElementById("llInsertEnd").addEventListener("click", () => {
    const value = parseInt(document.getElementById("llValue").value);
    if (!isNaN(value)) insertAtEnd(value);
  });
  document
    .getElementById("llDeleteStart")
    .addEventListener("click", deleteFromStart);
  document
    .getElementById("llDeleteEnd")
    .addEventListener("click", deleteFromEnd);

  // Stack controls
  document.getElementById("pushBtn").addEventListener("click", () => {
    const value = parseInt(document.getElementById("stackValue").value);
    if (!isNaN(value)) push(value);
  });
  document.getElementById("popBtn").addEventListener("click", pop);

  // Queue controls
  document.getElementById("enqueueBtn").addEventListener("click", () => {
    const value = parseInt(document.getElementById("queueValue").value);
    if (!isNaN(value)) enqueue(value);
  });
  document.getElementById("dequeueBtn").addEventListener("click", dequeue);

  // Tab switching
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => switchTab(tab.dataset.tab));
  });
};

// funtion to handle the animation speed
const updateSpeedFromRange = () => {
  animationSpeed = 210 - parseInt(document.getElementById("speedRange").value);
};

// funtion to handle the sort alogithms based on the user selected in the dropdown button
const startVisualization = () => {
  if (isAnimating) return;
  isAnimating = true;
  const algorithm = document.getElementById("algorithmSelect").value;

  switch (algorithm) {
    case "bubble":
      bubbleSort();
      break;
    case "selection":
      selectionSort();
      break;
    case "insertion":
      insertionSort();
      break;
    case "merge":
      mergeSort();
      break;
    case "quick":
      quickSort();
      break;
  }
};

// function to reset the sorting animation
const resetVisualization = () => {
  isAnimating = false;
  generateArray();
};

// function to handle the swtiching of the tab
const switchTab = (tab) => {
  document.querySelectorAll(".tab").forEach((t) => {
    t.classList.remove("active");
    if (t.dataset.tab === tab) t.classList.add("active");
  });

  const tabs = ["array", "linkedlist", "stack", "queue", "tree"];
  tabs.forEach((view) => {
    document.getElementById(`${view}-view`).style.display = "none";
    const controls = document.getElementById(`${view}-controls`);
    if (controls) controls.style.display = "none";
  });

  // Show selected view and controls
  document.getElementById(`${tab}-view`).style.display = "flex";
  const selectedControls = document.getElementById(`${tab}-controls`);
  if (selectedControls) selectedControls.style.display = "flex";

  currentTab = tab;
};

const init = () => {
  generateArray();
  addEventListeners();
  updateSpeedFromRange();
};

init();
