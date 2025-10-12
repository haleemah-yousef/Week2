
// promise example - user login

function loginUser(username) {
  console.log("Logging in...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success =true; 
      if (success) {
        resolve({ id: 1, name: username, status: "Logged in" });
      } else {
        reject("Invalid username or password!");
      }
    }, 2000);
  });
}

loginUser("Haleemah")
  .then(user => console.log("Login successful:", user))
  .catch(error => console.error("Login failed:", error))
  .finally(() => console.log("Login attempt finished.\n"));

// async/await example - user login
  async function handleLogin() {
  console.log("Logging in with async/await...");

  try {
    const user = await loginUser("Haleemah");
    console.log("Login successful:", user);
  } catch (error) {
    console.error("Login failed:", error);
  } finally {
    console.log("Login attempt finished.\n");
  }
}

handleLogin();
