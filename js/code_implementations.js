export const algorithmComplexities = {
  // sample implementation
  linear: {
    time: "O(n*logn)",
    space: "O(1)",
  },
  binary: {
    time: "O(n)",
    space: "O(1)",
  },
  bubbleSample: {
    time: "O(n²)",
    space: "O(1)",
  },
  binaryTwo: {
    time: "O(n)",
    space: "O(1)",
  },
  twoSum: {
    time: "O(n)",
    space: "O(1)",
  },

  // Algorithms Implementation
  bubble: {
    time: "O(n²)",
    space: "O(1)",
  },
  selection: {
    time: "O(n²)",
    space: "O(1)",
  },
  insertion: {
    time: "O(n²)",
    space: "O(1)",
  },
  merge: {
    time: "O(n log n)",
    space: "O(n)",
  },
  quick: {
    time: "O(n log n)",
    space: "O(log n)",
  },

  // Array Implementation
  traversalArray: {
    time: "O(n)",
    space: "O(1)",
  },
  insertionArray: {
    time: "O(n)",
    space: "O(1)",
  },

  searchingArray: {
    time: "O(n)",
    space: "O(1)",
  },

  deletingArray: {
    time: "O(n)",
    space: "O(1)",
  },

  // Linked Lists
  singly: {
    time: "O(n)", // For traversal
    space: "O(n)",
  },
  doubly: {
    time: "O(n)", // For traversal
    space: "O(n)",
  },
  circular: {
    time: "O(n)", // For traversal
    space: "O(n)",
  },

  // Stack operations
  infix: {
    time: "O(n)",
    space: "O(n)",
  },
  prefix: {
    time: "O(n)",
    space: "O(n)",
  },
  postfix: {
    time: "O(n)",
    space: "O(n)",
  },

  // Queue operations
  queue: {
    time: "O(1)", // For enqueue/dequeue
    space: "O(n)",
  },

  // Tree Traversals
  inorder: {
    time: "O(n)",
    space: "O(h)", // h is height of tree
  },
  preorder: {
    time: "O(n)",
    space: "O(h)", // h is height of tree
  },
  postorder: {
    time: "O(n)",
    space: "O(h)", // h is height of tree
  },
};

export const codeImplementations = {
  linear: {
    python: {
        code: `# Python program to find second largest element in an array
# using Sorting

def getSecondLargest(arr):
    n = len(arr)
    
    # Sort the array in non-decreasing order
    arr.sort()
  
    # start from second last element as last element is the largest
    for i in range(n - 2, -1, -1):
      
        # return the first element which is not equal to the 
        # largest element
        if arr[i] != arr[n - 1]:
            return arr[i]
    
    # If no second largest element was found, return -1
    return -1


arr = [12, 35, 1, 10, 34, 1]
print(getSecondLargest(arr))`,
       output: `34`
    },
    cpp: {
        code: `// C++ program to find second largest element in an array
// using Sorting

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// function to find the second largest element
int getSecondLargest(vector<int> &arr) {
    int n = arr.size();
    
    // Sort the array in non-decreasing order
    sort(arr.begin(), arr.end());
  
    // start from second last element as last element is the largest
    for (int i = n - 2; i >= 0; i--) {
      
        // return the first element which is not equal to the 
        // largest element
        if (arr[i] != arr[n - 1]) {
            return arr[i];
        }
    }
  
    // If no second largest element was found, return -1
    return -1;
}

int main() {
    vector<int> arr = { 12, 35, 1, 10, 34, 1 };
    cout<<getSecondLargest(arr);
    return 0;
}`,
       output: `34`
    },
    pseudocode: {
        code:`Define a function getSecondLargest(arr):
    Set n to the length of arr
    
    Sort the array arr in non-decreasing order
    
    For i from n-2 to 0 (starting from the second last element):
        If arr[i] is not equal to arr[n-1] (i.e., not the largest element):
            Return arr[i] (the second largest element)
    
    If no second largest element is found, return -1

Main program:
    Set arr to [12, 35, 1, 10, 34, 1]
    Display the result of calling getSecondLargest(arr)
`
    }
  },
  
  binary: {
    python: {
        code: `# Python program to count one's in a boolean array

# Returns counts of 1's in arr[low..high].  The array is
# assumed to be sorted in non-increasing order


def countOnes(arr, low, high):

    if high >= low:

        # get the middle index
        mid = low + (high-low)//2

        # check if the element at middle index is last 1
        if ((mid == high or arr[mid+1] == 0) and (arr[mid] == 1)):
            return mid+1

        # If element is not last 1, recur for right side
        if arr[mid] == 1:
            return countOnes(arr, (mid+1), high)

        # else recur for left side
        return countOnes(arr, low, mid-1)

    return 0


arr = [1, 1, 1, 1, 0, 0, 0]
print("Count of 1's in given array is", countOnes(arr, 0, len(arr)-1))
`, 
       output: `Count of 1's in given array is 4`
    },
    cpp: {
        code: `#include <iostream>
using namespace std;

/* Returns counts of 1's in arr[low..high].  The array is
   assumed to be sorted in non-increasing order */
int countOnes(bool arr[], int low, int high)
{
    if (high >= low) {
        // get the middle index
        int mid = low + (high - low) / 2;

        // check if the element at middle index is last 1
        if ((mid == high || arr[mid + 1] == 0)
            && (arr[mid] == 1))
            return mid + 1;

        // If element is not last 1, recur for right side
        if (arr[mid] == 1)
            return countOnes(arr, (mid + 1), high);

        // else recur for left side
        return countOnes(arr, low, (mid - 1));
    }
    return 0;
}

int main()
{
    bool arr[] = { 1, 1, 1, 1, 0, 0, 0 };
    int n = sizeof(arr) / sizeof(arr[0]);
    cout << "Count of 1's in given array is "
         << countOnes(arr, 0, n - 1);
    return 0;
}`,
      output: `Count of 1's in given array is 4`
    },
    pseudocode: {
        code: `Define a function countOnes(arr, low, high):
    If high is greater than or equal to low:
        Set mid to low + (high - low) // 2 (middle index)
        
        If mid is the last 1 (either it's the last element or the next element is 0) and arr[mid] is 1:
            Return mid + 1 (the count of 1's)

        If arr[mid] is 1:
            Recursively call countOnes for the right half of the array (mid+1 to high)

        Else:
            Recursively call countOnes for the left half of the array (low to mid-1)

    Return 0 (if no 1's are found)

Main program:
    Set arr to [1, 1, 1, 1, 0, 0, 0]
    Display the result of calling countOnes(arr, 0, len(arr)-1)
`
    }
  },

  bubbleSample: {
    python: {
        code: `def sort_grade(arr):
   n = len(arr)

   for i in range(n-1):
      swapped = False

      for j in range(0, n-i-1):
         if arr[j] < arr[j+1]:  
            arr[j], arr[j+1] = arr[j+1], arr[j]
            swapped = True
      if not swapped:
         break
   return arr

unsorted_grades = [87, 45, 92, 67, 55, 100, 72]
sorted_grades = sort_grade(unsorted_grades.copy())

# Print the original grades
print("Original Scores: ", unsorted_grades)

# Print the sorted grades with ranks
print("Sorted Scores with Ranks:")
for i in range(len(sorted_grades)):
   print(f"Score: {sorted_grades[i]}, Rank: {i+1}")
`,
   output: `Original Scores:  [87, 45, 92, 67, 55, 100, 72]
Sorted Scores with Ranks:
Score: 100, Rank: 1
Score: 92, Rank: 2
Score: 87, Rank: 3
Score: 72, Rank: 4
Score: 67, Rank: 5
Score: 55, Rank: 6
Score: 45, Rank: 7`
    },
    cpp: {
        code: `#include <iostream>
using namespace std;

// Function to sort the grades using Bubble Sort (Descending order)
void sort_grade(int arr[], int n) {
    for (int i = 0; i < n - 1; ++i) {
        bool swapped = false;

        for (int j = 0; j < n - i - 1; ++j) {
            if (arr[j] < arr[j + 1]) {  // Change to < for descending order
                // Swap the elements
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        // If no elements were swapped, the array is already sorted
        if (!swapped) {
            break;
        }
    }
}

int main() {
    // Unsorted array of grades
    int unsorted_grades[] = {87, 45, 92, 67, 55, 100, 72};
    int n = sizeof(unsorted_grades) / sizeof(unsorted_grades[0]);

    // Copy the unsorted array into another array for sorting
    int sorted_grades[n];
    for (int i = 0; i < n; ++i) {
        sorted_grades[i] = unsorted_grades[i];
    }

    // Sort the grades
    sort_grade(sorted_grades, n);

    // Print the original grades
    cout << "Original Scores: ";
    for (int i = 0; i < n; ++i) {
        cout << unsorted_grades[i] << " ";
    }
    cout << endl;

    // Print the sorted grades with ranks
    cout << "Sorted Scores with Ranks:" << endl;
    for (int i = 0; i < n; ++i) {
        cout << "Score: " << sorted_grades[i] << ", Rank: " << i + 1 << endl;
    }

    return 0;
}

`, 
      output: `Original Scores:  [87, 45, 92, 67, 55, 100, 72]
Sorted Scores with Ranks:
Score: 100, Rank: 1
Score: 92, Rank: 2
Score: 87, Rank: 3
Score: 72, Rank: 4
Score: 67, Rank: 5
Score: 55, Rank: 6
Score: 45, Rank: 7`
    },
    pseudocode: {
        code: `Define a function sort_grade(arr, n):
    For each element in the array from the first to the second-last:
        Set a flag "swapped" to False
        
        For each pair of adjacent elements in the unsorted part of the array:
            If the current element is greater than the next:
                Swap the two elements
                Set "swapped" to True
        
        If no elements were swapped, break the loop (array is sorted)

Main program:
    Initialize the array of unsorted grades
    Set the size of the array (n)
    
    Copy the unsorted array into another array for sorting
    
    Call the sort_grade function to sort the copied array
    
    Display the original unsorted grades
    
    Display the sorted grades with their respective ranks (rank is the index + 1)
`
    }
  },

  binaryTwo: {
    python: {
        code: `def findMin(array):

    L = 0
    R = len(array) - 1

    while L < R:
        M = (L + R) // 2

        if array[M] > array[R]:
            L = M + 1
        else:
            R = M

    return array[L]

array = [4, 5, 6, 1, 2, 3]

result = findMin(array)

print(result)`,
       output: `1`
    },
    cpp: {
        code: `#include <iostream>
#include <vector>
using namespace std;

int findMin(const vector<int>& array) {
    int L = 0;
    int R = array.size() - 1;

    while (L < R) {
        int M = (L + R) / 2;

        if (array[M] > array[R]) {
            L = M + 1;
        } else {
            R = M;
        }
    }

    return array[L];
}

int main() {
    vector<int> array = {4, 5, 6, 1, 2, 3};

    int result = findMin(array);

    cout << result << endl;

    return 0;
}
`, 
      output: `1`
    },
    pseudocode: {
        code: `Set initial array to [4, 5, 6, 1, 2, 3]
Get the length of the array

Set L to 0 (start of the array)
Set R to length of array - 1 (end of the array)

Repeat until L equals R:

    Find the middle position M as (L + R) // 2

    If the value at position M is greater than the value at position R:
        Move L to position M + 1
    Otherwise:
        Move R to position M
    Return the value at position L as the minimum value`
    }
  },

  twoSum: {
    python: {
        code: `def twoSum(nums, target):
    left, right = 0, len(nums) - 1  # Initialize two pointers
    
    while left < right:
        current_sum = nums[left] + nums[right]
        
        if current_sum == target:
            return [left + 1, right + 1]  # Return 1-indexed positions
        elif current_sum < target:
            left += 1  # Move the left pointer to the right to increase the sum
        else:
            right -= 1  # Move the right pointer to the left to decrease the sum
    
    return []  # In case no solution is found (though the problem guarantees one)

nums = [2, 7, 11, 15]
target = 9
print(twoSum(nums, target))
`, output: `[1, 2]`
    },

    cpp: {
        code: `#include <iostream>
#include <vector>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;  // Initialize two pointers
    
    while (left < right) {
        int current_sum = nums[left] + nums[right];
        
        if (current_sum == target) {
            return {left + 1, right + 1};  // Return 1-indexed positions
        } else if (current_sum < target) {
            left += 1;  // Move the left pointer to the right to increase the sum
        } else {
            right -= 1;  // Move the right pointer to the left to decrease the sum
        }
    }
    
    return {};  // In case no solution is found (though the problem guarantees one)
}

int main() {
    vector<int> nums = {2, 7, 11, 15};
    int target = 9;
    
    vector<int> result = twoSum(nums, target);
    cout << "[" << result[0] << ", " << result[1] << "]" << endl;
    return 0;
}
`,  output: `[1, 2]`
    },
    pseudocode: {
        code: `Start with sorted array nums = [2, 7, 11, 15]
Set target value as target

Get total count of numbers in nums

Initialize two pointers:
    left pointer at the start of the array (left = 0)
    right pointer at the end of the array (right = length of nums - 1)

While left pointer is less than right pointer:
    Calculate current_sum = nums[left] + nums[right]
    
    If current_sum is equal to target:
        Output the positions of the left and right pointers (left + 1, right + 1)
        End the process
    
    Else if current_sum is less than target:
        Move the left pointer to the right (left = left + 1)
    
    Else:
        Move the right pointer to the left (right = right - 1)

If no solution is found:
    Output [-1, -1]

End
`
    }
  },

  traversalArray: {
    python: {
        code: `arr = [7, 12, 9, 4, 11]

# Traversing over arr
for i in range(len(arr)):
    print(arr[i], end=" ")`,
    output: `7 12 9 4 11`,
    },
    cpp: {
        code: `#include <iostream>
using namespace std;
int main() {
    int arr[] = { 7, 12, 9, 4, 11 };
    int len = sizeof(arr) / sizeof(arr[0]);
    // Traversing over arr[]
    for (int i = 0; i < len; i++) {
        cout << arr[i] << " ";
    }
}`,
       output: `7 12 9 4 11`
    },
    pseudocode: {
        code: `Array = [7, 12, 9, 4, 11]
Loop through Array:
    Print current element`
    }
  },

  insertionArray: {
    python: {
        code: `arr = [7, 12, 9, 4, 11]
x = 10  # Element to be inserted
pos = 2  # Position to insert the element

arr.insert(pos, x)

# Print the updated list
print("Updated List:", arr)`,
      output: `Updated List: 7, 12, 10, 9, 4, 11`,
    },
    cpp: {
        code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    // Initialize a vector
    vector<int> arr = { 7, 12, 9, 4, 11 };

    // Element to be inserted
    int x = 10;

    // Position to insert the element
    int pos = 2;

    // Insert the element at the specified position
    if (pos >= 0 && pos <= arr.size()) {
        arr.insert(arr.begin() + pos, x);
    } else {
        cout << "Invalid position!" << endl;
    }

    // Print the updated vector
    cout << "Updated List: ";
    for (int val : arr) {
        cout << val << " ";
    }
    cout << endl;

    return 0;
}`, 
      output: `Updated List: 7 12 10 9 4 11`
    },
    pseudocode: {
        code: `Start with array [1, 2, 3, 4, 5]
Decide the number to insert (10) and the position to insert it (2)

Check if the position is valid:
    If position is between 0 and the size of the array:
        Move all numbers from the position to the end one step to the right
        Place the number (10) in the position
    Otherwise:
        Show a message: "Invalid position!"

Show the updated array
`
    }
  },

  searchingArray: {
    python: {
      code: `my_array = [7, 12, 9, 4, 11]
minVal = my_array[0]   

for i in my_array:    
    if i < minVal:      
        minVal = i
        
print('Lowest value: ',minVal)`,
      output: "Lowest value: 4",
    },
    cpp: {
      code: `#include <iostream>

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

    pseudocode: {
        code: `Set initial array to [7, 12, 9, 4, 11]
Set minVal to the first element of the array

For each element in the array:
    If the current element is less than minVal:
        Update minVal to the current element

Show "Lowest value: ", minVal
`
    }
  },

  deletingArray: {
    python: {
        code: `# Initialize a list
arr = [7, 12, 9, 4, 11]

# Value to delete
key = 12

# Remove the element with the specified value
# if present in the list
if key in arr:
   arr.remove(key)
else:
   print("Element Not Found")

# Output the modified list
print("Modified array: arr")`,
      output: `Modified array: 7, 9, 4, 11`,
    },
    cpp: {
        code: `#include <iostream>
#include <vector>
#include <algorithm> // For std::find
using namespace std;

int main() {
    // Initialize a vector
    vector<int> arr = {7, 12, 9, 4, 11 };

    // Value to delete
    int key = 12;

    // Search for the element in the vector
    auto it = find(arr.begin(), arr.end(), key);

    // Check if the element exists
    if (it != arr.end()) {
        // Remove the element
        arr.erase(it);
    } else {
        cout << "Element Not Found" << endl;
    }

    // Output the modified vector
    cout << "Modified array: ";
    for (int val : arr) {
        cout << val << " ";
    }
    cout << endl;

    return 0;
}`, 
      output: `Modified array: 7 9 4 11`
    },
    pseudocode: {
        code: `Start with array [7, 12, 9, 4, 11]
Set key to 12

For each position in the array:
    If current element is equal to key:
        Remove this element from the array
        Break the loop

If key was not found:
    Show message "Element Not Found"

Show the final array
`
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
    pseudocode: {
        code: `Set initial array to [7, 3, 9, 12, 11]
Get the length of array

Repeat from first position to second-to-last position:
    Set "no swaps made" as true
    
    Look at each pair of numbers from start until unordered portion:
        If left number is bigger than right number:
            Switch these two numbers
            Remember that we made a swap
    
    If we made no swaps:
        Stop here as array is sorted
        
Show the final sorted array`,
    }
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
    pseudocode: {
        code: `Start with array [64, 34, 25, 5, 22, 11, 90, 12]
Get total count of numbers

For each position from first to second-to-last:
    Mark current position as holding smallest number
    
    Look at all numbers after current position:
        If we find a smaller number:
            Remember where this smaller number is
    
    Take out the smallest number we found
    Put it into the current position we're filling

Show the final sorted array`
    }
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
    pseudocode: {
        code: `Start with array [64, 34, 25, 12, 22, 11, 90, 5]
Get total count of numbers

For each number starting from second position to last:
    Remember current number and its position
    
    Look at each number before current position, moving right to left:
        If previous number is bigger than current number:
            Shift previous number one position to right
            Note where we might insert current number
        Otherwise:
            Stop looking back
            
    Put current number into its correct position

Show the final sorted array`
    }
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
    pseudocode: {
        code: `MAIN SORTING PROCESS:
Start with array [3, 7, 6, -10, 15, 23.5, 55, -13]

Begin with sub-arrays of size 1
While sub-array size is smaller than total array length:
    Look at array in pairs of sub-arrays:
        Get left sub-array starting at current position
        Get right sub-array next to it
        Merge these two sub-arrays in order
        Put merged result back into original array
    Double the sub-array size
    
MERGING PROCESS:
To merge two sub-arrays (left and right):
    Create empty result array
    Set left pointer and right pointer to start
    
    While both sub-arrays still have numbers:
        If left number is smaller than right number:
            Add left number to result
            Move left pointer forward
        Otherwise:
            Add right number to result
            Move right pointer forward
            
    Add any remaining numbers from left sub-array
    Add any remaining numbers from right sub-array
    
    Return merged result

Show the final sorted array
`
    }
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
    pseudocode: {
        code: `MAIN SORTING PROCESS:
Start with array [64, 34, 25, 12, 22, 11, 90, 5]

To quicksort a section (from start to end):
    If section has more than one element:
        Choose rightmost element as pivot
        Partition array around pivot
        Quicksort everything before pivot
        Quicksort everything after pivot

PARTITIONING PROCESS:
To partition a section around pivot:
    Select rightmost element as pivot
    Start border at left - 1
    
    For each element from left to right (except pivot):
        If current element is smaller or equal to pivot:
            Move border one step right
            Swap current element with element at border
    
    Put pivot in its final position (after border)
    Return pivot's final position

Show the final sorted array
`
    }
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
    pseudocode: {
        code: `Define a class Node with:
    A property data to store the node's value
    A property next initialized to null to store the reference to the next node

Create a new Node with value 3 and store it in node1
Create a new Node with value 5 and store it in node2
Create a new Node with value 13 and store it in node3
Create a new Node with value 2 and store it in node4

Set node1's next to node2
Set node2's next to node3
Set node3's next to node4

Set currentNode to node1

While currentNode is not null:
    Display currentNode's data followed by " -> "
    Move currentNode to the next node

Display "null"
`
    }
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
    pseudocode: {
        code: `Define a class Node with:
    A property data to store the node's value
    A property next initialized to null to store the reference to the next node
    A property prev initialized to null to store the reference to the previous node

Create a new Node with value 3 and store it in node1
Create a new Node with value 5 and store it in node2
Create a new Node with value 13 and store it in node3
Create a new Node with value 2 and store it in node4

Set node1's next to node2

Set node2's prev to node1
Set node2's next to node3

Set node3's prev to node2
Set node3's next to node4

Set node4's prev to node3

Display "Traversing forward:"
Set currentNode to node1
While currentNode is not null:
    Display currentNode's data followed by " -> "
    Move currentNode to the next node
Display "null"

Display "Traversing backward:"
Set currentNode to node4
While currentNode is not null:
    Display currentNode's data followed by " -> "
    Move currentNode to the previous node
Display "null"
`
    }
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
    pseudocode: {
        code: `Define a class Node with:
    A property data to store the node's value
    A property next initialized to null to store the reference to the next node
    A property prev initialized to null to store the reference to the previous node

Create a new Node with value 3 and store it in node1
Create a new Node with value 5 and store it in node2
Create a new Node with value 13 and store it in node3
Create a new Node with value 2 and store it in node4

Set node1's next to node2 and prev to node4

Set node2's prev to node1 and next to node3

Set node3's prev to node2 and next to node4

Set node4's prev to node3 and next to node1

Display "Traversing forward:"
Set currentNode to node1
Set startNode to node1
Display currentNode's data followed by " -> "
Move currentNode to the next node

While currentNode is not equal to startNode:
    Display currentNode's data followed by " -> "
    Move currentNode to the next node
Display "..."

Display "Traversing backward:"
Set currentNode to node4
Set startNode to node4
Display currentNode's data followed by " -> "
Move currentNode to the previous node

While currentNode is not equal to startNode:
    Display currentNode's data followed by " -> "
    Move currentNode to the previous node
Display "..."
`
    }
  },

  // stacks implementation
  infix: {
    python: {
      code: `# Function to return precedence of operators
def prec(c):
    
    if c == '^':
        return 3
    elif c == '/' or c == '*':
        return 2
    elif c == '+' or c == '-':
        return 1
    else:
        return -1

# Function to perform infix to postfix conversion
def infixToPostfix(s):
    st = []
    result = ""

    for i in range(len(s)):
        c = s[i]

        # If the scanned character is
        # an operand, add it to the output string.
        if (c >= 'a' and c <= 'z') or (c >= 'A' and c <= 'Z') or (c >= '0' and c <= '9'):
            result += c

        # If the scanned character is an 
        # ‘(‘, push it to the stack.
        elif c == '(':
            st.append('(')

        # If the scanned character is an ‘)’,
        # pop and add to the output string from the stack 
        # until an ‘(‘ is encountered.
        elif c == ')':
            while st[-1] != '(':
                result += st.pop()
            st.pop()

        # If an operator is scanned
        else:
            while st and (prec(c) < prec(st[-1]) or prec(c) == prec(st[-1])):
                result += st.pop()
            st.append(c)
    
    # Pop all the remaining elements from the stack
    while st:
        result += st.pop()

    print(result)

exp = "a+b*(c^d-e)^(f+g*h)-i"
infixToPostfix(exp)`,
      output: `abcd^e-fgh*+^*+i-`,
    },
    cpp: {
      code: `#include <iostream>
using namespace std;

// Function to return precedence of operators
int prec(char c) {
    if (c == '^')
        return 3;
    else if (c == '/' || c == '*')
        return 2;
    else if (c == '+' || c == '-')
        return 1;
    else
        return -1;
}

// The main function to convert infix expression
// to postfix expression
void infixToPostfix(string s) {
    stack<char> st;
    string result;

    for (int i = 0; i < s.length(); i++) {
        char c = s[i];

        // If the scanned character is
        // an operand, add it to the output string.
        if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9'))
            result += c;

        // If the scanned character is an
        // ‘(‘, push it to the stack.
        else if (c == '(')
            st.push('(');

        // If the scanned character is an ‘)’,
        // pop and add to the output string from the stack
        // until an ‘(‘ is encountered.
        else if (c == ')') {
            while (st.top() != '(') {
                result += st.top();
                st.pop();
            }
            st.pop(); 
        }

        // If an operator is scanned
        else {
            while (!st.empty() && prec(c) < prec(st.top()) ||
                   !st.empty() && prec(c) == prec(st.top())) {
                result += st.top();
                st.pop();
            }
            st.push(c);
        }
    }

    // Pop all the remaining elements from the stack
    while (!st.empty()) {
        result += st.top();
        st.pop();
    }

    cout << result << endl;
}

int main() {
    string exp = "a+b*(c^d-e)^(f+g*h)-i";
    infixToPostfix(exp);
    return 0;
}`,
      output: `abcd^e-fgh*+^*+i-`,
    },
    pseudocode: {
        code: `Define a function prec(c) to determine the precedence of operators:
    If c is '^', return 3
    Else if c is '/' or '*', return 2
    Else if c is '+' or '-', return 1
    Otherwise, return -1

Define a function infixToPostfix(expression):
    Initialize an empty stack st
    Initialize an empty string result

    For each character c in the expression:
        If c is an operand (a letter or a digit):
            Append c to result
        Else if c is '(':
            Push '(' onto the stack
        Else if c is ')':
            While the top of the stack is not '(':
                Pop from the stack and append to result
            Pop the '(' from the stack
        Else (c is an operator):
            While the stack is not empty and the precedence of c is less than or equal to the precedence of the operator at the top of the stack:
                Pop from the stack and append to result
            Push c onto the stack
    
    While the stack is not empty:
        Pop from the stack and append to result

    Display result

Set exp to "a+b*(c^d-e)^(f+g*h)-i"
Call infixToPostfix(exp)
`
    }
  },

  prefix: {
    python: {
      code: `# Python Program to convert prefix to Infix
def prefixToInfix(prefix):
    stack = []
    
    # read prefix in reverse order
    i = len(prefix) - 1
    while i >= 0:
        if not isOperator(prefix[i]):
            
            # symbol is operand
            stack.append(prefix[i])
            i -= 1
        else:
          
            # symbol is operator
            str = "(" + stack.pop() + prefix[i] + stack.pop() + ")"
            stack.append(str)
            i -= 1
    
    return stack.pop()

def isOperator(c):
    if c == "*" or c == "+" or c == "-" or c == "/" or c == "^" or c == "(" or c == ")":
        return True
    else:
        return False

# Driver code
if __name__=="__main__":
    str = "*-A/BC-/AKL"
    print(prefixToInfix(str))`,
      output: `Infix : ((A-(B/C))*((A/K)-L))`,
    },
    cpp: {
      code: `#include <iostream>
#include <stack>
using namespace std;

// function to check if character is operator or not
bool isOperator(char x) {
  switch (x) {
  case '+':
  case '-':
  case '/':
  case '*':
  case '^':
  case '%':
    return true;
  }
  return false;
}

// Convert prefix to Infix expression
string preToInfix(string pre_exp) {
  stack<string> s;

  // length of expression
  int length = pre_exp.size();

  // reading from right to left
  for (int i = length - 1; i >= 0; i--) {

    // check if symbol is operator
    if (isOperator(pre_exp[i])) {

      // pop two operands from stack
      string op1 = s.top();   s.pop();
      string op2 = s.top();   s.pop();

      // concat the operands and operator
      string temp = "(" + op1 + pre_exp[i] + op2 + ")";

      // Push string temp back to stack
      s.push(temp);
    }

    // if symbol is an operand
    else {

      // push the operand to the stack
      s.push(string(1, pre_exp[i]));
    }
  }

  // Stack now contains the Infix expression
  return s.top();
}

// Driver Code
int main() {
  string pre_exp = "*-A/BC-/AKL";
  cout << "Infix : " << preToInfix(pre_exp);
  return 0;
}`,
      output: `Infix : ((A-(B/C))*((A/K)-L))
`,
    },
    pseudocode: {
        code: `Define a function prefixToInfix(prefix):
    Initialize an empty stack

    Set i to the index of the last character in prefix
    While i is greater than or equal to 0:
        If prefix[i] is not an operator:
            Push prefix[i] onto the stack
            Decrease i by 1
        Else (prefix[i] is an operator):
            Pop the top two elements from the stack
            Combine them into a string in the format "(operand1 operator operand2)"
            Push the resulting string back onto the stack
            Decrease i by 1

    Return the final element from the stack

Define a function isOperator(c):
    If c is one of "*", "+", "-", "/", "^", "(", or ")", return True
    Otherwise, return False

Main program:
    Set prefix expression to "*-A/BC-/AKL"
    Display the result of calling prefixToInfix(prefix expression)
`
    }
  },

  postfix: {
    python: {
      code: `#Input
s = "*-A/BC-/AKL"
 
# Stack for storing operands
stack = []
 
operators = set(['+', '-', '*', '/', '^'])
 
# Reversing the order
s = s[::-1]
 
# iterating through individual tokens
for i in s:
 
    # if token is operator
    if i in operators:
 
        # pop 2 elements from stack
        a = stack.pop()
        b = stack.pop()
 
        # concatenate them as operand1 +
        # operand2 + operator
        temp = a+b+i
        stack.append(temp)
 
    # else if operand
    else:
        stack.append(i)
 
# printing final output
print(*stack)`,
      output: `Postfix : ABC/-AK/L-*`,
    },
    cpp: {
      code: `// CPP Program to convert prefix to postfix
#include <iostream>
#include <stack>
using namespace std;
 
// function to check if character is operator or not
bool isOperator(char x)
{
    switch (x) {
    case '+':
    case '-':
    case '/':
    case '*':
        return true;
    }
    return false;
}
 
// Convert prefix to Postfix expression
string preToPost(string pre_exp)
{
 
    stack<string> s;
    // length of expression
    int length = pre_exp.size();
 
    // reading from right to left
    for (int i = length - 1; i >= 0; i--) 
    {
        // check if symbol is operator
        if (isOperator(pre_exp[i]))
        {
            // pop two operands from stack
            string op1 = s.top();
            s.pop();
            string op2 = s.top();
            s.pop();
 
            // concat the operands and operator
            string temp = op1 + op2 + pre_exp[i];
 
            // Push string temp back to stack
            s.push(temp);
        }
 
        // if symbol is an operand
        else {
 
            // push the operand to the stack
            s.push(string(1, pre_exp[i]));
        }
    }
 
    // stack contains only the Postfix expression
    return s.top();
}
 
// Driver Code
int main()
{
    string pre_exp = "*-A/BC-/AKL";
    cout << "Postfix : " << preToPost(pre_exp);
    return 0;
}`,
      output: `Postfix : ABC/-AK/L-*`,
    },
    pseudocode: {
        code: `Input: Set s to "*-A/BC-/AKL"

Initialize an empty stack for storing operands

Define a set of operators: { '+', '-', '*', '/', '^' }

Reverse the order of s

For each character i in the reversed s:
    If i is an operator:
        Pop two elements from the stack (a and b)
        Concatenate a, b, and i in the format "a + b + i"
        Push the resulting string back onto the stack
    Else (i is an operand):
        Push i onto the stack

Display the final element in the stack
`
    }
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
    pseudocode: {
        code: `Define a class Queue with:
    A constructor to initialize an empty list called queue
    
    A method enqueue(element) to:
        Add the element to the end of the queue
    
    A method dequeue() to:
        If the queue is empty:
            Return "Queue is empty"
        Otherwise:
            Remove and return the first element of the queue
    
    A method peek() to:
        If the queue is empty:
            Return "Queue is empty"
        Otherwise:
            Return the first element of the queue
    
    A method isEmpty() to:
        Return True if the queue has no elements, otherwise False
    
    A method size() to:
        Return the number of elements in the queue

Create a new Queue instance and store it in myQueue

Call enqueue('A') on myQueue
Call enqueue('B') on myQueue
Call enqueue('C') on myQueue
Display "Queue:" followed by the contents of myQueue.queue

Display "Dequeue:" followed by the result of calling dequeue() on myQueue
Display "Peek:" followed by the result of calling peek() on myQueue
Display "isEmpty:" followed by the result of calling isEmpty() on myQueue
Display "Size:" followed by the result of calling size() on myQueue
`
    }
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
    pseudocode: {
        code: `Define a class Node with:
    A constructor to initialize:
        data to store the node's value
        left to store the left child, initialized to null
        right to store the right child, initialized to null
    
    A method inOrderTraversal(node) to perform in-order traversal:
        If node is null, return
        Recursively call inOrderTraversal(node.left)
        Display node.data followed by ", "
        Recursively call inOrderTraversal(node.right)

Create the root node with data 1
Set root's left child to a new Node with data 2
Set root's right child to a new Node with data 3
Set root.left's left child to a new Node with data 4
Set root.left's right child to a new Node with data 5
Set root.right's left child to a new Node with data 6
Set root.right's right child to a new Node with data 7

Display "In-order traversal: " (without a newline)
Call inOrderTraversal(root)
`
    }
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
    pseudocode: {
        code: `Define a class Node with:
    A constructor to initialize:
        data to store the node's value
        left to store the left child, initialized to null
        right to store the right child, initialized to null
    
    A method preOrderTraversal(node) to perform pre-order traversal:
        If node is null, return
        Display node.data followed by ", "
        Recursively call preOrderTraversal(node.left)
        Recursively call preOrderTraversal(node.right)

Create the root node with data 1
Set root's left child to a new Node with data 2
Set root's right child to a new Node with data 3
Set root.left's left child to a new Node with data 4
Set root.left's right child to a new Node with data 5
Set root.right's left child to a new Node with data 6
Set root.right's right child to a new Node with data 7

Display "Pre-order traversal: " (without a newline)
Call preOrderTraversal(root)
`
    }
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
    pseudocode: {
        code: `Define a class Node with:
    A constructor to initialize:
        data to store the node's value
        left to store the left child, initialized to null
        right to store the right child, initialized to null
    
    A method postOrderTraversal(node) to perform post-order traversal:
        If node is null, return
        Recursively call postOrderTraversal(node.left)
        Recursively call postOrderTraversal(node.right)
        Display node.data followed by ", "

Create the root node with data 1
Set root's left child to a new Node with data 2
Set root's right child to a new Node with data 3
Set root.left's left child to a new Node with data 4
Set root.left's right child to a new Node with data 5
Set root.right's left child to a new Node with data 6
Set root.right's right child to a new Node with data 7

Display "Post-order traversal: " (without a newline)
Call postOrderTraversal(root)
`
    }
  },
};
