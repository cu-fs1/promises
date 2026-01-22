# JavaScript Promises, Async/Await, and the Event Loop

This project demonstrates how JavaScript handles asynchronous operations using the **Event Loop**, **Promises**, and **Async/Await**.

## Quick Start
Run the example code:
```bash
node index.js
```

---

## 1. The Core Concepts

JavaScript is **single-threaded**, meaning it can only do one thing at a time. To handle slow tasks (like reading files or network requests) without blocking the main thread, it uses the **Event Loop**.

### The Call Stack (Synchronous)
*   This is where your code executes line-by-line.
*   Functions are pushed onto the stack when called and popped off when they return.

### The Queues (Asynchronous)
When an async operation is encountered, it is handed off to the browser/environment. When finished, its callback is placed in a queue to wait for the Call Stack to be empty.

There are two main queues:

1.  **Microtask Queue** (High Priority)
    *   Used by: `Promises`, `queueMicrotask`, `MutationObserver`.
    *   **Rule:** The Event Loop processes *all* Microtasks before moving to the Macrotasks.

2.  **Macrotask Queue** (Low Priority)
    *   Used by: `setTimeout`, `setInterval`, `setImmediate`, I/O operations.
    *   **Rule:** Processed only after the Call Stack and Microtask Queue are empty.

---

## 2. Execution Order Example

If you look at Part 1 of `index.js`, notice the order:

1.  **Sync Code**: All standard console logs run first.
2.  **Microtasks**: All `.then()` callbacks from resolved Promises run next.
3.  **Macrotasks**: callbacks from `setTimeout` run last.

### Visual Flow
1. `console.log('Start')` -> **Call Stack** (Runs immediately)
2. `setTimeout(...)` -> **Macrotask Queue** (Waits)
3. `Promise.resolve().then(...)` -> **Microtask Queue** (Waits)
4. `console.log('End')` -> **Call Stack** (Runs immediately)
5. **Call Stack Empty?** -> Run ALL **Microtasks**.
6. **Microtasks Empty?** -> Run ONE **Macrotask**.

---

## 3. Async / Await

Introduced in ES2017, `async/await` is **syntactic sugar** built on top of Promises. It makes asynchronous code look and behave like synchronous code, making it much easier to read and maintain.

### Comparison

**Using `.then()` (The Old Way)**
```javascript
getData()
  .then(data => parseData(data))
  .then(parsed => console.log(parsed))
  .catch(err => console.error(err));
```

**Using `async/await` (The Modern Way)**
```javascript
async function doWork() {
  try {
    const data = await getData(); // Pauses here until resolved
    const parsed = await parseData(data); // Pauses here until resolved
    console.log(parsed);
  } catch (err) {
    console.error(err); // Standard try/catch handling
  }
}
```

### Key Rules
1.  **`async` keyword**: Declares that a function returns a Promise implicitly.
2.  **`await` keyword**: Can only be used inside an `async` function. It pauses the execution of that function until the Promise resolves.
3.  **Error Handling**: Instead of `.catch()`, you use standard `try/catch` blocks.
