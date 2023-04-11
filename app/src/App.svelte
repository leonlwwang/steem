<script>
  import SearchBar from './lib/SearchBar.svelte'
  import AddUserForm from './lib/AddUserForm.svelte';
  import { onMount } from 'svelte';

  let users = [];

  onMount(async () => {
    const response = await fetch('/api/users');
    users = await response.json();
  });

  function handleAddUser(event) {
    fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event.detail)
    })
      .then(response => response.text())
      .then(message => {
        console.log(message);
        getUsers();
      })
      .catch(error => console.error(error));
  }

  function deleteUser(username) {
    if (confirm('Are you sure you want to delete this user?')) {
      fetch('/api/users/' + username, { method: 'DELETE' })
        .then(response => {
          if (response.ok) {
            users = users.filter(user => user.username !== username);
          } else {
            console.error('Failed to delete user');
          }
        })
        .catch(error => console.error(error));
    }
  }

  function getUsers() {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => {
        users = data;
      })
      .catch(error => console.error(error));
  }

  getUsers();
</script>

<main>
  <h1>Steam Clone</h1>

  <div class="card">
    <h2>Registration</h2>
    <AddUserForm on:submit={handleAddUser} />
  </div>

  <div class="card">
    <h2>Users</h2>
    {#if users.length > 0}
      <ul>
        {#each users as user}
          <li>{user.username} {user.realName} ({user.emailAddress}) <button on:click={() => deleteUser(user.username)}>🗑️</button></li>
        {/each}
      </ul>
    {:else}
      <p>No users found.</p>
    {/if}
  </div>
 
  <div class="card">
    <h2>Search</h2>
    <SearchBar />
  </div>
</main>
