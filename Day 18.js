// Day 18: APIs

//1. Fetch JSON Data
//js
fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data));


//2. Handle errors
//js
fetch('https://api.example.com/data')
  .then(res => {
    if (!res.ok) throw new Error('Network Error');
    return res.json();
  })
  .catch(err => console.error(err));


//3. Async/Await syntax

async function getData() {
  try {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}


//4. Display results in HTML
async function showUsers() {
  const res = await fetch('https://api.example.com/users');
  const users = await res.json();
  document.body.innerHTML = users.map(u => `<p>${u.name}</p>`).join('');
}
showUsers();


//*5. Create a loader while fetching*
//js
async function fetchData() {
  document.body.innerHTML = 'Loading...';
  const res = await fetch('https://api.example.com/info');
  const data = await res.json();
  document.body.innerHTML = <pre>${JSON.stringify(data, null, 2)}</pre>;
}

//Let me know if you want more days or want this as a PDF or tweet thread.