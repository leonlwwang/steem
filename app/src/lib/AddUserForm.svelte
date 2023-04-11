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
      username:
      <input type="text" bind:value={username} required />
    </label>
    <label>
      name:
      <input type="text" bind:value={realName} required />
    </label>
    <label>
      email:
      <input type="email" bind:value={emailAddress} required />
    </label>
    <button type="submit">Sign Up</button>
  </form>

  <style scoped>
    form {
      display: flex;
      flex-direction: column;
      align-items: left;
    }

    label {
      display: block;
      margin-bottom: 1rem;
    }

    button {
      max-width: 11rem;
    }
  </style>