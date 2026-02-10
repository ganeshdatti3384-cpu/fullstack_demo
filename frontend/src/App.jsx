import { useEffect, useState } from 'react';


export default function App() {
const [users, setUsers] = useState([]);
const [name, setName] = useState('');


useEffect(() => {
fetch('/api/users').then(res => res.json()).then(setUsers);
}, []);

const addUser = async () => {
await fetch('/api/users', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ name })
});
setName('');
};


return (
<div style={{ padding: 20 }}>
<h1>Users</h1>
<input value={name} onChange={e => setName(e.target.value)} />
<button onClick={addUser}>Add</button>
<ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
</div>
);
}