<script>
  import ChangeUsernameForm from './ChangeUsernameForm.svelte';

  $: loggedIn = 0;
  $: usr = null;

  function handleSubmit(event) {
    event.preventDefault();

    const username = event.target.username.value.trim();

    if (!username) {
      console.error('Username is required');
      return;
    }

    fetch(`/api/users/${username}`)
      .then(response => {
        if (response.ok) {
          console.log(`User ${username} found`);
          loggedIn = 1;
          usr = username;
        } else {
          loggedIn = -1;
          console.error(`User ${username} not found`);
        }
      })
      .catch(error => console.error(error));
  }

  function logout() {
    loggedIn = 0;
    usr = null;
  }
</script>
  
  <form on:submit={handleSubmit}>
    <div>
        <label for="username">username:</label>
        <input type="text" id="username" name="username" required />
    </div>
  
    {#if loggedIn == 0 || loggedIn == -1}
      <button type="submit">Log In </button>
    {:else}
      <button on:click={logout}>Log Out</button>
    {/if}
  </form>

  {#if loggedIn == 1}
    <p>✅ Logged in as <em>{usr}</em></p>
  {:else if loggedIn == -1}
    <p style="color: #BB342F; font-size: 0.75rem"><em>Username does not exist.</em></p>
  {/if}

  <h2>Change Username</h2>
  <ChangeUsernameForm username={usr} />
  
  <style scoped>
    form {
      display: flex;
      flex-direction: column;
      align-items: left;
    }

    label {
      display: inline-block;
      margin-bottom: 1rem;
    }

    button {
      max-width: 11rem;
    }

    input {
      display: inline-block;
      width: 200px;
    }       
  </style>
