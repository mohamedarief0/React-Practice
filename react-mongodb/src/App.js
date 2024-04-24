// Frontend code 
// Filename - App.js
// Filename - App.js

import { useState } from 'react'
function App() {
	// const [name, setName] = useState("");
	// const [email, setEmail] = useState("");
	// const handleOnSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('http://localhost:3000/register', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ name, email })
  //     });
  //     const data = await response.json();
  //     console.log(data); // Log the response from the server
  //     if (data.success) {
  //       alert('Data saved successfully');
  //       setName('');
  //       setEmail('');
  //     } else {
  //       alert('Failed to save data');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('An error occurred while submitting the form');
  //   }
  // };
  
	return (
		<>
			{/* <h1>This is React WebApp </h1> */}
			{/* <form action="">
				<input type="text" placeholder="name"
				value={name} onChange={(e) => setName(e.target.value)} />
				<input type="email" placeholder="email"
				value={email} onChange={(e) => setEmail(e.target.value)} />
				<button type="submit"
				onClick={handleOnSubmit}>submit</button>
			</form> */}

		</>
	);
}

export default App;
