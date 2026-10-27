const singleUser = document.getElementById("singleUser");
const userGrid = document.getElementById("userGrid");
const newUserBtn = document.getElementById("newUserBtn");
const refreshBtn = document.getElementById("refreshBtn");
const statusText = document.getElementById("status");

// Task 1: Fetch and display one random user
async function loadSingleUser() {
    newUserBtn.disabled = true;
    singleUser.textContent = "Loading user...";

    try {
        const response = await fetch("https://randomuser.me/api/");

        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }

        const data = await response.json();
        const user = data.results[0];

        singleUser.innerHTML = `
            <img src="${user.picture.large}"
                 alt="Profile picture of ${user.name.first}">

            <div class="user-info">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>${user.email}</p>
            </div>
        `;
    } catch (error) {
        singleUser.textContent =
            "Unable to load user. Please try again.";
        console.error(error);
    } finally {
        newUserBtn.disabled = false;
    }
}

// Task 2 + Mini Challenge: Fetch and display 5 users
async function loadUsers() {
    refreshBtn.disabled = true;
    userGrid.innerHTML = "<p>Loading users...</p>";
    statusText.textContent = "";

    try {
        const response = await fetch(
            "https://randomuser.me/api/?results=5"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        userGrid.innerHTML = data.results.map(user => `
            <article class="user-card">
                <img
                    src="${user.picture.large}"
                    alt="Profile picture of ${user.name.first}"
                >

                <h3>${user.name.first} ${user.name.last}</h3>
                <p>${user.email}</p>
            </article>
        `).join("");

        statusText.textContent =
            `Showing ${data.results.length} random users.`;

    } catch (error) {
        userGrid.innerHTML =
            "<p>Unable to load users. Check your internet and try again.</p>";
        console.error(error);
        statusText.textContent = "Something went wrong.";
    } finally {
        refreshBtn.disabled = false;
    }
}

// Button events
newUserBtn.addEventListener("click", loadSingleUser);
refreshBtn.addEventListener("click", loadUsers);

// Load data automatically when the page opens
loadSingleUser();
loadUsers();
