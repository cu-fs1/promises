# 🎓 Teaching Promises: A Lesson Plan

This repository is designed to help you teach JavaScript Promises and Asynchronous programming to students. It uses a "Restaurant Buzzer" analogy to bridge the gap between abstract code and real-world logic.

---

## 📋 Table of Contents

1. [The Analogy: The Restaurant Buzzer](#1-the-analogy)
2. [The Three States](#2-the-three-states)
3. [The Syntax Evolution](#3-the-syntax-evolution)
4. [The Event Loop (Advanced)](#4-the-event-loop)
5. [Classroom Exercises](#5-classroom-exercises)

---

## 1. The Analogy: The Restaurant Buzzer 🍔

**The Problem (Sync):** Standing at the counter waiting for a burger. You can't sit down, and the cashier can't help others. (Blocking).

**The Solution (Async):**

- You order.
- You get a **Buzzer** (The Promise).
- You go sit down (Non-blocking).
- When it's ready, the buzzer goes off (**Resolved**).
- If they are out of meat, it flashes red (**Rejected**).

---

## 2. The Three States

Explain that a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.

| State         | Description                                    |
| :------------ | :--------------------------------------------- |
| **Pending**   | Initial state, neither fulfilled nor rejected. |
| **Fulfilled** | The operation completed successfully.          |
| **Rejected**  | The operation failed.                          |

---

## 3. The Syntax Evolution

### A. Constructing a Promise

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Some work that takes time...
  if (success) resolve(data);
  else reject(error);
});
```

### B. Consuming: Then/Catch vs Async/Await

**Then/Catch (The Blueprint):**

```javascript
getData()
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
```

**Async/Await (The Modern Standard):**

```javascript
async function handleData() {
  try {
    const res = await getData();
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}
```

---

## 4. The Event Loop 🔄

Teach students that JavaScript handles tasks in order of priority:

1. **Call Stack**: Normal code (runs first).
2. **Microtasks**: Promises (runs second).
3. **Macrotasks**: `setTimeout`, `setInterval` (runs last).

---

## 5. Classroom Exercises

1. **The ATM**: Create a promise that resolves if balance > withdrawal amount, and rejects if not.
2. **The Traffic Light**: Chain three promises (Green -> Yellow -> Red) using `setTimeout`.
3. **The Race**: Use `Promise.all` to see who "wins" between three parallel network requests (simulated).

---

## 🚀 Getting Started

Run the demo code:

```bash
node index.js
```
