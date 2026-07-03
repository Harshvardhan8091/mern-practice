async function getUserData() {
  try {
    // 1. Initiate the network request
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    
    // 2. Check if the HTTP status code is ok (200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // 3. Parse the stream data into JSON format
    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    // 4. Catch and handle network or structural errors
    console.error('Fetch operation failed:', error);
  }
}

getUserData();