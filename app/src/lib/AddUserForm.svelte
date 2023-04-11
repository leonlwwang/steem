<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
  
    let username = '';
    let realName = '';
    let emailAddress = '';
  
    function handleSubmit(event) {
      event.preventDefault();
      const user = { username, realName, emailAddress };
      dispatch('submit', user);
    }
  </script>
  
  <form on:submit={handleSubmit}>
    <label>
      username
      <input type="text" bind:value={username} required />
    </label>
    <label>
      name
      <input type="text" bind:value={realName} required />
    </label>
    <label>
      email address
      <input type="email" bind:value={emailAddress} required />
    </label>
    <button type="submit">Add User</button>
  </form>
  