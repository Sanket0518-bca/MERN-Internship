"use strict";

const runButton = document.getElementById("runButton");
const runStatus = document.getElementById("runStatus");

function logTask(message) {
    console.log(message);
}

function showError(element, message) {
    element.textContent = message;
    element.className = "error";
}

// TASK 1: Nested setTimeout
function fakeAPICall() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User data received ✅");
        }, 2000);
    });
}

async function runTask1() {
    const apiStatus = document.getElementById("apiStatus");
    const processingStatus = document.getElementById("processingStatus");

    apiStatus.textContent = "Calling API...";
    processingStatus.textContent = "Waiting...";

    logTask("1. Running Task 1: setTimeout");

    const result = await fakeAPICall();
    apiStatus.textContent = result;
    logTask("Task 1 - API: " + result);

    processingStatus.textContent = "Processing Data... ⚙️";

    await new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });

    processingStatus.textContent = "Done 🚀";
    logTask("Task 1 - Processing complete 🚀");
}


// TASK 2: Promise .then() and .catch()
function runTask2() {
    const result = document.getElementById("promiseResult");

    result.className = "";
    result.textContent = "Fetching data...";

    logTask("2. Running Task 2: Promise");

    const simulateFetch = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully ✅");
        }, 1000);
    });

    return simulateFetch
        .then((message) => {
            result.textContent = message;
            result.className = "success";
            logTask("Task 2 - " + message);
        })
        .catch((error) => {
            showError(result, error.message);
            console.error("Task 2 Error:", error);
        });
}


// TASK 3: Async/Await with JSONPlaceholder
async function runTask3() {
    const output = document.getElementById("postsResult");
    output.className = "posts-list";
    output.textContent = "Fetching 5 posts...";

    logTask("3. Running Task 3: Fetch posts");

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );

        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }

        const posts = await response.json();
        output.replaceChildren();

        posts.forEach((post, index) => {
            const item = document.createElement("div");
            item.className = "post-item";

            const number = document.createElement("span");
            number.className = "post-number";
            number.textContent = `Post #${index + 1}:`;

            const title = document.createElement("p");
            title.textContent = post.title;

            item.append(number, title);
            output.appendChild(item);

            logTask(`Post #${index + 1}: ${post.title}`);
        });

        logTask("Task 3 completed: 5 posts loaded");

    } catch (error) {
        showError(output, "Unable to load posts: " + error.message);
        console.error("Task 3 Error:", error);
    }
}


// TASK 4: Open-Meteo Weather API
async function runTask4() {
    const output = document.getElementById("weatherResult");
    output.className = "weather-result";
    output.textContent = "Fetching live weather...";

    logTask("4. Running Task 4: Weather API");

    // New Delhi coordinates, as shown in the reference screenshot
    const latitude = 28.61;
    const longitude = 77.23;

    const url =
        "https://api.open-meteo.com/v1/forecast" +
        `?latitude=${latitude}&longitude=${longitude}` +
        "&current=temperature_2m,wind_speed_10m";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("HTTP error: " + response.status);
        }

        const data = await response.json();
        const current = data.current;
        const units = data.current_units;

        output.replaceChildren();

        const heading = document.createElement("h3");
        heading.textContent = "New Delhi, India";

        const grid = document.createElement("div");
        grid.className = "weather-grid";

        const weatherValues = [
            {
                label: "Temperature",
                value: `${current.temperature_2m} ${units.temperature_2m}`
            },
            {
                label: "Wind Speed",
                value: `${current.wind_speed_10m} ${units.wind_speed_10m}`
            }
        ];

        weatherValues.forEach((weather) => {
            const card = document.createElement("div");
            card.className = "weather-item";

            const label = document.createElement("span");
            label.textContent = weather.label;

            const value = document.createElement("strong");
            value.textContent = weather.value;

            card.append(label, value);
            grid.appendChild(card);
        });

        output.append(heading, grid);

        logTask("Task 4 - Weather data:");
        logTask(current);

    } catch (error) {
        showError(
            output,
            "Weather load nahi hua. Internet check karke dobara try karo. Details: " +
            error.message
        );
        console.error("Task 4 Error:", error);
    }
}


// RUN ALL TASKS
runButton.addEventListener("click", async () => {
    runButton.disabled = true;
    runStatus.textContent = "Tasks are running...";

    console.clear();
    logTask("===== WEEK 2 - DAY 3: ALL TASKS =====");

    // Start each task; API tasks run independently.
    const taskPromises = [
        runTask1(),
        runTask2(),
        runTask3(),
        runTask4()
    ];

    try {
        await Promise.allSettled(taskPromises);
        runStatus.textContent =
            "All tasks finished. Check each result and the Console.";
        logTask("===== ALL TASKS FINISHED =====");
    } finally {
        runButton.disabled = false;
    }
});
