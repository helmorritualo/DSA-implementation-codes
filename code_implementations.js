export const codeImplementations = {
  array: {
    python: {
      code: `# Array Implementation
   my_array = [7, 12, 9, 4, 11]
   minVal = my_array[0]    # Step 1
   
   for i in my_array:      # Step 2
       if i < minVal:      # Step 3
           minVal = i
           
   print('Lowest value: ',minVal) # Step 4`,
      output: "Lowest value: 4",
    },
    cpp: {
      code: `// Array Implementation
   #include <iostream>
   
   int main() {
       int my_array[] = {7, 12, 9, 4, 11};
       int size = sizeof(my_array) / sizeof(my_array[0]);
       int minVal = my_array[0];
   
       for (int i = 0; i < size; i++) {
           if (my_array[i] < minVal) {
               minVal = my_array[i];
           }
       }
   
       std::cout << "Lowest value: " << minVal << std::endl;
       return 0;
   }`,
      output: "Lowest value: 4",
    },
  },

  bubblepseudocode: {
  python: {
    code: `Repeat until no swaps are made:
    For each element in the list (except the last one already sorted):
        Compare the current element with the next one.
        If they are out of order, swap them.
`,
    output: "Time Complexity: O(n²)\nSpace Complexity: O(1)"
  },
  cpp: {
    code: `Repeat until no swaps are made:
    For each element in the list (except the last one already sorted):
        Compare the current element with the next one.
        If they are out of order, swap them.
`,
    output: "Time Complexity: O(n²)\nSpace Complexity: O(1)"
  }
},

selectionpseudocode: {
  python: {
    code: `For each position in the list:
    Find the smallest element in the unsorted portion of the list.
    Swap it with the element at the current position.
`,
    output: "Time Complexity: O(n²)\nSpace Complexity: O(1)"
  },
  cpp: {
    code: `For each position in the list:
    Find the smallest element in the unsorted portion of the list.
    Swap it with the element at the current position.
`,
    output: "Time Complexity: O(n²)\nSpace Complexity: O(1)"
  }
},

insertionpseudocode: {
  python: {
    code: `For each element starting from the second:
    Save the current element.
    Compare it with elements before it.
    Shift all larger elements to the right.
    Place the current element in its correct position.
`,
    output: "Time Complexity: O(n²)\nSpace Complexity: O(1)"
  },
  cpp: {
    code: `For each element starting from the second:
    Save the current element.
    Compare it with elements before it.
    Shift all larger elements to the right.
    Place the current element in its correct position.
`,
    output: "Time Complexity: O(n²)\nSpace Complexity: O(1)"
  }
},

mergepseudocode: {
  python: {
    code: `If the list contains more than one element:
    Divide the list into two halves.
    Recursively sort each half.
    Merge the two halves into a single sorted list.
`,
    output: "Time Complexity: O(n log n)\nSpace Complexity: O(n)"
  },
  cpp: {
    code: `If the list contains more than one element:
    Divide the list into two halves.
    Recursively sort each half.
    Merge the two halves into a single sorted list.
`,
    output: "Time Complexity: O(n log n)\nSpace Complexity: O(n)"
  }
},

quickpseudocode: {
  python: {
    code: `If the list has more than one element:
    Choose a pivot.
    Partition the list into two parts:
        One with elements less than or equal to the pivot.
        One with elements greater than the pivot.
    Recursively sort each part.
Combine the sorted parts.
`,
    output: "Time Complexity: O(n log n) average, O(n²) worst\nSpace Complexity: O(log n)"
  },
  cpp: {
    code: `If the list has more than one element:
    Choose a pivot.
    Partition the list into two parts:
        One with elements less than or equal to the pivot.
        One with elements greater than the pivot.
    Recursively sort each part.
Combine the sorted parts.
`,
    output: "Time Complexity: O(n log n) average, O(n²) worst\nSpace Complexity: O(log n)"
  }
},

  bubble: {
    python: {
      code: `my_array = [7, 3, 9, 12, 11]
   
   n = len(my_array)
   for i in range(n-1):
       swapped = False
       for j in range(n-i-1):
           if my_array[j] > my_array[j+1]:
               my_array[j], my_array[j+1] = my_array[j+1], my_array[j]
               swapped = True
       if not swapped:
           break
   
   print("Sorted array:", my_array)`,
      output: "Sorted array: [3, 7, 9, 11, 12]",
    },
    cpp: {
      code: `#include <iostream>
   
   int main() {
       int my_array[] = {7, 3, 9, 12, 11};
       int n = sizeof(my_array) / sizeof(my_array[0]);
   
       for (int i = 0; i < n - 1; i++) {
           bool swapped = false;
           for (int j = 0; j < n - i - 1; j++) {
               if (my_array[j] > my_array[j + 1]) {
                   int temp = my_array[j];
                   my_array[j] = my_array[j + 1];
                   my_array[j + 1] = temp;
                   swapped = true;
               }
           }
           if (!swapped) break;
       }
   
       std::cout << "Sorted array: ";
       for (int i = 0; i < n; i++) {
           std::cout << my_array[i] << " ";
       }
       std::cout << std::endl;
       return 0;
   }`,
      output: "Sorted array: 3 7 9 11 12",
    },
  },

  selection: {
    python: {
      code: `my_array = [64, 34, 25, 12, 22, 11, 90, 5]
   
   n = len(my_array)
   for i in range(n):
       min_index = i
       for j in range(i+1, n):
           if my_array[j] < my_array[min_index]:
               min_index = j   
       my_array[i], my_array[min_index] = my_array[min_index], my_array[i]
   
   print("Sorted array:", my_array)`,
      output: "Sorted array: [5, 11, 12, 22, 25, 34, 64, 90]",
    },
    cpp: {
      code: `#include <iostream>
   
   int main() {
       int my_array[] = {64, 34, 25, 12, 22, 11, 90, 5};
       int n = sizeof(my_array) / sizeof(my_array[0]);
   
       for (int i = 0; i < n - 1; i++) {
           int min_index = i;
           for (int j = i + 1; j < n; j++) {
               if (my_array[j] < my_array[min_index]) {
                   min_index = j;
               }
           }
           if (min_index != i) {
               int temp = my_array[i];
               my_array[i] = my_array[min_index];
               my_array[min_index] = temp;
           }
       }
   
       std::cout << "Sorted array: ";
       for (int i = 0; i < n; i++) {
           std::cout << my_array[i] << " ";
       }
       std::cout << std::endl;
       return 0;
   }`,
      output: "Sorted array: 5 11 12 22 25 34 64 90",
    },
  },

  insertion: {
    python: {
      code: `my_array = [64, 34, 25, 12, 22, 11, 90, 5]
   
   n = len(my_array)
   for i in range(1,n):
       insert_index = i
       current_value = my_array[i]
       for j in range(i-1, -1, -1):
           if my_array[j] > current_value:
               my_array[j+1] = my_array[j]
               insert_index = j
           else:
               break
       my_array[insert_index] = current_value
   
   print("Sorted array:", my_array)`,
      output: "Sorted array: [5, 11, 12, 22, 25, 34, 64, 90]",
    },
    cpp: {
      code: `#include <iostream>
   
   int main() {
       int my_array[] = {64, 34, 25, 12, 22, 11, 90, 5};
       int n = sizeof(my_array) / sizeof(my_array[0]);
   
       for (int i = 1; i < n; i++) {
           int insert_index = i;
           int current_value = my_array[i];
   
           for (int j = i - 1; j >= 0; j--) {
               if (my_array[j] > current_value) {
                   my_array[j + 1] = my_array[j];
                   insert_index = j;
               } else {
                   break;
               }
           }
           my_array[insert_index] = current_value;
       }
   
       std::cout << "Sorted array: ";
       for (int i = 0; i < n; i++) {
           std::cout << my_array[i] << " ";
       }
       std::cout << std::endl;
       return 0;
   }`,
      output: "Sorted array: 5 11 12 22 25 34 64 90",
    },
  },

  merge: {
    python: {
      code: `def mergeSort(arr):
       if len(arr) <= 1:
           return arr
   
       mid = len(arr) // 2
       leftHalf = arr[:mid]
       rightHalf = arr[mid:]
   
       sortedLeft = mergeSort(leftHalf)
       sortedRight = mergeSort(rightHalf)
   
       return merge(sortedLeft, sortedRight)
   
   def merge(left, right):
       result = []
       i = j = 0
   
       while i < len(left) and j < len(right):
           if left[i] < right[j]:
               result.append(left[i])
               i += 1
           else:
               result.append(right[j])
               j += 1
   
       result.extend(left[i:])
       result.extend(right[j:])
   
       return result
   
   unsortedArr = [3, 7, 6, -10, 15, 23.5, 55, -13]
   sortedArr = mergeSort(unsortedArr)
   print("Sorted array:", sortedArr)`,
      output: "Sorted array: [-13, -10, 3, 6, 7, 15, 23.5, 55]",
    },
    cpp: {
      code: `#include <iostream>
   
   void merge(double arr[], int left, int mid, int right) {
       int n1 = mid - left + 1;
       int n2 = right - mid;
   
       double* L = new double[n1];
       double* R = new double[n2];
   
       for (int i = 0; i < n1; i++)
           L[i] = arr[left + i];
       for (int j = 0; j < n2; j++)
           R[j] = arr[mid + 1 + j];
   
       int i = 0, j = 0, k = left;
   
       while (i < n1 && j < n2) {
           if (L[i] <= R[j]) {
               arr[k] = L[i];
               i++;
           } else {
               arr[k] = R[j];
               j++;
           }
           k++;
       }
   
       while (i < n1) {
           arr[k] = L[i];
           i++;
           k++;
       }
   
       while (j < n2) {
           arr[k] = R[j];
           j++;
           k++;
       }
   
       delete[] L;
       delete[] R;
   }
   
   void mergeSort(double arr[], int left, int right) {
       if (left < right) {
           int mid = left + (right - left) / 2;
           mergeSort(arr, left, mid);
           mergeSort(arr, mid + 1, right);
           merge(arr, left, mid, right);
       }
   }
   
   int main() {
       double arr[] = {3, 7, 6, -10, 15, 23.5, 55, -13};
       int n = sizeof(arr) / sizeof(arr[0]);
   
       mergeSort(arr, 0, n - 1);
   
       std::cout << "Sorted array: ";
       for (int i = 0; i < n; i++) {
           std::cout << arr[i] << " ";
       }
       std::cout << std::endl;
   
       return 0;
   }`,
      output: "Sorted array: -13 -10 3 6 7 15 23.5 55",
    },
  },

  quick: {
    python: {
      code: `def partition(array, low, high):
       pivot = array[high]
       i = low - 1
   
       for j in range(low, high):
           if array[j] <= pivot:
               i += 1
               array[i], array[j] = array[j], array[i]
   
       array[i+1], array[high] = array[high], array[i+1]
       return i+1
   
   def quicksort(array, low=0, high=None):
       if high is None:
           high = len(array) - 1
   
       if low < high:
           pivot_index = partition(array, low, high)
           quicksort(array, low, pivot_index-1)
           quicksort(array, pivot_index+1, high)
   
   my_array = [64, 34, 25, 12, 22, 11, 90, 5]
   quicksort(my_array)
   print("Sorted array:", my_array)`,
      output: "Sorted array: [5, 11, 12, 22, 25, 34, 64, 90]",
    },
    cpp: {
      code: `#include <iostream>
   
   int partition(int array[], int low, int high) {
       int pivot = array[high];
       int i = low - 1;
   
       for (int j = low; j < high; j++) {
           if (array[j] <= pivot) {
               i++;
               int temp = array[i];
               array[i] = array[j];
               array[j] = temp;
           }
       }
   
       int temp = array[i + 1];
       array[i + 1] = array[high];
       array[high] = temp;
   
       return i + 1;
   }
   
   void quicksort(int array[], int low, int high) {
       if (low < high) {
           int pivot_index = partition(array, low, high);
           quicksort(array, low, pivot_index - 1);
           quicksort(array, pivot_index + 1, high);
       }
   }
   
   int main() {
       int my_array[] = {64, 34, 25, 12, 22, 11, 90, 5};
       int n = sizeof(my_array) / sizeof(my_array[0]);
   
       quicksort(my_array, 0, n - 1);
   
       std::cout << "Sorted array: ";
       for (int i = 0; i < n; i++) {
           std::cout << my_array[i] << " ";
       }
       std::cout << std::endl;
   
       return 0;
   }`,
      output: "Sorted array: 5 11 12 22 25 34 64 90",
    },
  },

  singly: {
    python: {
      code: `class Node:
       def __init__(self, data):
           self.data = data
           self.next = None
       
   node1 = Node(3)
   node2 = Node(5)
   node3 = Node(13)
   node4 = Node(2)
   
   node1.next = node2
   node2.next = node3
   node3.next = node4
   
   currentNode = node1
   while currentNode:
       print(currentNode.data, end=" -> ")
       currentNode = currentNode.next
   print("null")`,
      output: "3 -> 5 -> 13 -> 2 -> null",
    },
    cpp: {
      code: `#include <iostream>
   
   class Node {
   public:
       int data;
       Node* next;
   
       Node(int value) {
           data = value;
           next = nullptr;
       }
   };
   
   int main() {
       Node* node1 = new Node(3);
       Node* node2 = new Node(5);
       Node* node3 = new Node(13);
       Node* node4 = new Node(2);
   
       node1->next = node2;
       node2->next = node3;
       node3->next = node4;
   
       Node* currentNode = node1;
       while (currentNode != nullptr) {
           std::cout << currentNode->data << " -> ";
           currentNode = currentNode->next;
       }
       std::cout << "null" << std::endl;
   
       delete node1;
       delete node2;
       delete node3;
       delete node4;
   
       return 0;
   }`,
      output: "3 -> 5 -> 13 -> 2 -> null",
    },
  },

  doubly: {
    python: {
      code: `class Node:
       def __init__(self, data):
           self.data = data
           self.next = None
           self.prev = None
       
   node1 = Node(3)
   node2 = Node(5)
   node3 = Node(13)
   node4 = Node(2)
   
   node1.next = node2
   
   node2.prev = node1
   node2.next = node3
   
   node3.prev = node2
   node3.next = node4
   
   node4.prev = node3
   
   print("\nTraversing forward:")
   currentNode = node1
   while currentNode:
       print(currentNode.data, end=" -> ")
       currentNode = currentNode.next
   print("null")
   
   print("\nTraversing backward:")
   currentNode = node4
   while currentNode:
       print(currentNode.data, end=" -> ")
       currentNode = currentNode.prev
   print("null")`,
      output:
        "Traversing forward:\n3 -> 5 -> 13 -> 2 -> null\nTraversing backward:\n2 -> 13 -> 5 -> 3 -> null",
    },
    cpp: {
      code: `#include <iostream>
   
   class Node {
   public:
       int data;
       Node* next;
       Node* prev;
   
       Node(int value) {
           data = value;
           next = nullptr;
           prev = nullptr;
       }
   };
   
   int main() {
       Node* node1 = new Node(3);
       Node* node2 = new Node(5);
       Node* node3 = new Node(13);
       Node* node4 = new Node(2);
   
       node1->next = node2;
   
       node2->prev = node1;
       node2->next = node3;
   
       node3->prev = node2;
       node3->next = node4;
   
       node4->prev = node3;
   
       std::cout << "\nTraversing forward:" << std::endl;
       Node* currentNode = node1;
       while (currentNode != nullptr) {
           std::cout << currentNode->data << " -> ";
           currentNode = currentNode->next;
       }
       std::cout << "null" << std::endl;
   
       std::cout << "\nTraversing backward:" << std::endl;
       currentNode = node4;
       while (currentNode != nullptr) {
           std::cout << currentNode->data << " -> ";
           currentNode = currentNode->prev;
       }
       std::cout << "null" << std::endl;
   
       delete node1;
       delete node2;
       delete node3;
       delete node4;
   
       return 0;
   }`,
      output:
        "Traversing forward:\n3 -> 5 -> 13 -> 2 -> null\nTraversing backward:\n2 -> 13 -> 5 -> 3 -> null",
    },
  },

  circular: {
    python: {
      code: `class Node:
       def __init__(self, data):
           self.data = data
           self.next = None
           self.prev = None
   
   node1 = Node(3)
   node2 = Node(5)
   node3 = Node(13)
   node4 = Node(2)
   
   node1.next = node2
   node1.prev = node4
   
   node2.prev = node1
   node2.next = node3
   
   node3.prev = node2
   node3.next = node4
   
   node4.prev = node3
   node4.next = node1
   
   print("\nTraversing forward:")
   currentNode = node1
   startNode = node1
   print(currentNode.data, end=" -> ")
   currentNode = currentNode.next
   
   while currentNode != startNode:
       print(currentNode.data, end=" -> ")
       currentNode = currentNode.next
   print("...")
   
   print("\nTraversing backward:")
   currentNode = node4
   startNode = node4
   print(currentNode.data, end=" -> ")
   currentNode = currentNode.prev
   
   while currentNode != startNode:
       print(currentNode.data, end=" -> ")
       currentNode = currentNode.prev
   print("...")`,
      output:
        "Traversing forward:\n3 -> 5 -> 13 -> 2 -> ...\nTraversing backward:\n2 -> 13 -> 5 -> 3 -> ...",
    },
    cpp: {
      code: `#include <iostream>
   
   class Node {
   public:
       int data;
       Node* next;
       Node* prev;
   
       Node(int value) {
           data = value;
           next = nullptr;
           prev = nullptr;
       }
   };
   
   int main() {
       Node* node1 = new Node(3);
       Node* node2 = new Node(5);
       Node* node3 = new Node(13);
       Node* node4 = new Node(2);
   
       node1->next = node2;
       node1->prev = node4;
   
       node2->prev = node1;
       node2->next = node3;
   
       node3->prev = node2;
       node3->next = node4;
   
       node4->prev = node3;
       node4->next = node1;
   
       std::cout << "\nTraversing forward:" << std::endl;
       Node* currentNode = node1;
       Node* startNode = node1;
       
       std::cout << currentNode->data << " -> ";
       currentNode = currentNode->next;
   
       while (currentNode != startNode) {
           std::cout << currentNode->data << " -> ";
           currentNode = currentNode->next;
       }
       std::cout << "..." << std::endl;
   
       std::cout << "\nTraversing backward:" << std::endl;
       currentNode = node4;
       startNode = node4;
       
       std::cout << currentNode->data << " -> ";
       currentNode = currentNode->prev;
   
       while (currentNode != startNode) {
           std::cout << currentNode->data << " -> ";
           currentNode = currentNode->prev;
       }
       std::cout << "..." << std::endl;
   
       delete node1;
       delete node2;
       delete node3;
       delete node4;
   
       return 0;
   }`,
      output:
        "Traversing forward:\n3 -> 5 -> 13 -> 2 -> ...\nTraversing backward:\n2 -> 13 -> 5 -> 3 -> ...",
    },
  },

  queue: {
    python: {
      code: `class Queue:
       def __init__(self):
           self.queue = []
       
       def enqueue(self, element):
           self.queue.append(element)
       
       def dequeue(self):
           if self.isEmpty():
               return "Queue is empty"
           return self.queue.pop(0)
       
       def peek(self):
           if self.isEmpty():
               return "Queue is empty"
           return self.queue[0]
       
       def isEmpty(self):
           return len(self.queue) == 0
       
       def size(self):
           return len(self.queue)
   
   myQueue = Queue()
   
   myQueue.enqueue('A')
   myQueue.enqueue('B')
   myQueue.enqueue('C')
   print("Queue:", myQueue.queue)
   
   print("Dequeue:", myQueue.dequeue())
   print("Peek:", myQueue.peek())
   print("isEmpty:", myQueue.isEmpty())
   print("Size:", myQueue.size())`,
      output:
        "Queue: ['A', 'B', 'C']\nDequeue: A\nPeek: B\nisEmpty: False\nSize: 2",
    },
    cpp: {
      code: `#include <iostream>
   #include <deque>
   #include <string>
   
   class Queue {
   private:
       std::deque<std::string> queue;
       
   public:
       void enqueue(const std::string& element) {
           queue.push_back(element);
       }
   
       std::string dequeue() {
           if (isEmpty()) {
               return "Queue is empty";
           }
           std::string front = queue.front();
           queue.pop_front();
           return front;
       }
   
       std::string peek() {
           if (isEmpty()) {
               return "Queue is empty";
           }
           return queue.front();
       }
   
       bool isEmpty() {
           return queue.empty();
       }
   
       int size() {
           return queue.size();
       }
   
       void printQueue() {
           std::cout << "Queue: ";
           for (const auto& element : queue) {
               std::cout << element << " ";
           }
           std::cout << std::endl;
       }
   };
   
   int main() {
       Queue myQueue;
   
       myQueue.enqueue("A");
       myQueue.enqueue("B");
       myQueue.enqueue("C");
   
       myQueue.printQueue();
   
       std::cout << "Dequeue: " << myQueue.dequeue() << std::endl;
       std::cout << "Peek: " << myQueue.peek() << std::endl;
       std::cout << "isEmpty: " << (myQueue.isEmpty() ? "true" : "false") << std::endl;
       std::cout << "Size: " << myQueue.size() << std::endl;
   
       return 0;
   }`,
      output: "Queue: A B C\nDequeue: A\nPeek: B\nisEmpty: false\nSize: 2",
    },
  },

  inorder: {
    python: {
      code: `class Node:
       def __init__(self, data):
           self.data = data
           self.left = None
           self.right = None
   
   def inOrderTraversal(node):
       if node is None:
           return
       inOrderTraversal(node.left)
       print(node.data, end=", ")
       inOrderTraversal(node.right)
   
   root = Node(1)
   root.left = Node(2)
   root.right = Node(3)
   root.left.left = Node(4)
   root.left.right = Node(5)
   root.right.left = Node(6)
   root.right.right = Node(7)
   
   print("In-order traversal:", end=" ")
   inOrderTraversal(root)`,
      output: "In-order traversal: 4, 2, 5, 1, 6, 3, 7",
    },
    cpp: {
      code: `#include <iostream>
   
   class Node {
   public:
       int data;
       Node* left;
       Node* right;
   
       Node(int value) {
           data = value;
           left = nullptr;
           right = nullptr;
       }
   };
   
   void inOrderTraversal(Node* node) {
       if (node == nullptr) {
           return;
       }
       inOrderTraversal(node->left);
       std::cout << node->data << ", ";
       inOrderTraversal(node->right);
   }
   
   int main() {
       Node* root = new Node(1);
       root->left = new Node(2);
       root->right = new Node(3);
       root->left->left = new Node(4);
       root->left->right = new Node(5);
       root->right->left = new Node(6);
       root->right->right = new Node(7);
   
       std::cout << "In-order traversal: ";
       inOrderTraversal(root);
       std::cout << std::endl;
   
       delete root->left->left;
       delete root->left->right;
       delete root->right->left;
       delete root->right->right;
       delete root->left;
       delete root->right;
       delete root;
   
       return 0;
   }`,
      output: "In-order traversal: 4, 2, 5, 1, 6, 3, 7",
    },
  },

  preorder: {
    python: {
      code: `class Node:
       def __init__(self, data):
           self.data = data
           self.left = None
           self.right = None
   
   def preOrderTraversal(node):
       if node is None:
           return
       print(node.data, end=", ")
       preOrderTraversal(node.left)
       preOrderTraversal(node.right)
   
   root = Node(1)
   root.left = Node(2)
   root.right = Node(3)
   root.left.left = Node(4)
   root.left.right = Node(5)
   root.right.left = Node(6)
   root.right.right = Node(7)
   
   print("Pre-order traversal:", end=" ")
   preOrderTraversal(root)`,
      output: "Pre-order traversal: 1, 2, 4, 5, 3, 6, 7",
    },
    cpp: {
      code: `#include <iostream>
   
   class Node {
   public:
       int data;
       Node* left;
       Node* right;
   
       Node(int value) {
           data = value;
           left = nullptr;
           right = nullptr;
       }
   };
   
   void preOrderTraversal(Node* node) {
       if (node == nullptr) {
           return;
       }
       std::cout << node->data << ", ";
       preOrderTraversal(node->left);
       preOrderTraversal(node->right);
   }
   
   int main() {
       Node* root = new Node(1);
       root->left = new Node(2);
       root->right = new Node(3);
       root->left->left = new Node(4);
       root->left->right = new Node(5);
       root->right->left = new Node(6);
       root->right->right = new Node(7);
   
       std::cout << "Pre-order traversal: ";
       preOrderTraversal(root);
       std::cout << std::endl;
   
       delete root->left->left;
       delete root->left->right;
       delete root->right->left;
       delete root->right->right;
       delete root->left;
       delete root->right;
       delete root;
   
       return 0;
   }`,
      output: "Pre-order traversal: 1, 2, 4, 5, 3, 6, 7",
    },
  },

  postorder: {
    python: {
      code: `class Node:
       def __init__(self, data):
           self.data = data
           self.left = None
           self.right = None
   
   def postOrderTraversal(node):
       if node is None:
           return
       postOrderTraversal(node.left)
       postOrderTraversal(node.right)
       print(node.data, end=", ")
   
   root = Node(1)
   root.left = Node(2)
   root.right = Node(3)
   root.left.left = Node(4)
   root.left.right = Node(5)
   root.right.left = Node(6)
   root.right.right = Node(7)
   
   print("Post-order traversal:", end=" ")
   postOrderTraversal(root)`,
      output: "Post-order traversal: 4, 5, 2, 6, 7, 3, 1",
    },
    cpp: {
      code: `#include <iostream>
   
   class Node {
   public:
       int data;
       Node* left;
       Node* right;
   
       Node(int value) {
           data = value;
           left = nullptr;
           right = nullptr;
       }
   };
   
   void postOrderTraversal(Node* node) {
       if (node == nullptr) {
           return;
       }
       postOrderTraversal(node->left);
       postOrderTraversal(node->right);
       std::cout << node->data << ", ";
   }
   
   int main() {
       Node* root = new Node(1);
       root->left = new Node(2);
       root->right = new Node(3);
       root->left->left = new Node(4);
       root->left->right = new Node(5);
       root->right->left = new Node(6);
       root->right->right = new Node(7);
   
       std::cout << "Post-order traversal: ";
       postOrderTraversal(root);
       std::cout << std::endl;
   
       delete root->left->left;
       delete root->left->right;
       delete root->right->left;
       delete root->right->right;
       delete root->left;
       delete root->right;
       delete root;
   
       return 0;
   }`,
      output: "Post-order traversal: 4, 5, 2, 6, 7, 3, 1",
    },
  },
};
