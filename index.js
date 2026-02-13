console.log("\n--- PART 1: Event Loop Mechanics ---");
console.log("1. Script Start (Synchronous)");

// A 'macrotask' (e.g., setTimeout, setInterval)
setTimeout(() => {
  console.log("5. setTimeout (Macrotask) - Runs after Microtasks");
  
  // Start Part 2 only after Part 1 is seemingly done
  runAsyncAwaitDemo();
}, 0);

// A Promise creates a 'microtask'
Promise.resolve()
  .then(() => {
    console.log("3. Promise 1 (Microtask) - Runs immediately after Sync code");
  })
  .then(() => {
    console.log("4. Promise 2 (chained Microtask) - Still runs before Macrotasks");
  });

console.log("2. Script End (Synchronous)");

/**
 * --- PART 2: Async / Await ---
 * 
 * async/await is syntactic sugar for Promises.
 * It strictly enforces formatting that looks synchronous, but is non-blocking.
 */
const runAsyncAwaitDemo = async () => {
    console.log("\n--- PART 2: Async / Await Example ---");
    
    console.log("1. [Async] Function started");

    try {
        // 'await' pauses the execution of this FUNCTION (puts it in Microtask queue),
        // but lets the rest of the JS engine continue.
        const user = await getUser(1); 
        console.log(`2. [Async] Got User: ${user.name}`);

        const posts = await getPosts(user.id);
        console.log(`3. [Async] Got ${posts.length} Post(s) for ${user.name}`);
        
        console.log("4. [Async] Function finished");
    } catch (error) {
        console.error("Error:", error);
    }
};

// Simulating API calls with Promises
function getUser(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: id, name: "Derek" });
        }, 500);
    });
}

function getPosts() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(["Post 1", "Post 2"]);
        }, 500);
    });
}
