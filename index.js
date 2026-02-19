/**
 * 🎓 PROMISES TEACHING DEMO
 * This file is structured as a live-coding demonstration for students.
 */

console.log("🚀 Lesson Started: Understanding the Asynchronous World\n");

// --- STAGE 1: The Synchronous Problem ---
// Explain that JS normally runs top-to-bottom.
console.log("1. Customer orders a burger.");
// simulate a 2-second block (Wait, we can't actually 'sleep' easily in JS without blocking everything,
// which is why we need Promises!)

// --- STAGE 2: Creating the Promise (The Buzzer) ---
const cookBurger = (isOutOfStock = false) => {
  return new Promise((resolve, reject) => {
    console.log("...Chef is cooking the burger (Working in background)...");

    setTimeout(() => {
      if (!isOutOfStock) {
        resolve("🍔 Fresh Juicy Burger");
      } else {
        reject("❌ SORRY: We ran out of ingredients!");
      }
    }, 2000);
  });
};

// --- STAGE 3: Consuming with Async/Await (The Modern Way) ---
// This is what you should teach first as it's the most readable.
async function restaurantVisit() {
  console.log("2. Customer takes the 'Buzzer' and finds a seat.");

  try {
    // 'await' tells the function to pause until the Promise settles.
    const burger = await cookBurger();
    console.log(`3. Buzzer goes off! Received: ${burger}`);
  } catch (error) {
    console.log(`3. Buzzer flashes red! Error: ${error}`);
  }
}

// --- STAGE 4: The Event Loop Challenge ---
// This part helps students understand execution order.
function eventLoopDemo() {
  console.log("\n--- EVENT LOOP CHALLENGE ---");

  console.log("A: I am normal code (Queue: Empty)");

  setTimeout(() => {
    console.log("C: I am a Macrotask (setTimeout) - I run LAST");
  }, 0);

  Promise.resolve().then(() => {
    console.log(
      "B: I am a Microtask (Promise) - I run AFTER normal code but BEFORE timers",
    );
  });

  console.log("D: I am also normal code (Runs immediately)");
}

// Run the demo
restaurantVisit().then(() => {
  eventLoopDemo();
});
