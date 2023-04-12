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
      <p style="display: inline; padding-right: 1em;">username:</p>
      <input type="text" bind:value={username} required />
    </label>
    <label>
      <p style="display: inline; padding-right: 1em;">name:</p>
      <input type="text" bind:value={realName} required />
    </label>
    <label>
      <p style="display: inline; padding-right: 1em;">email:</p>
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

    input {
      display: inline-block;
      width: 200px;
    }

    label {
      padding-right: 1em;
      display: block;
      margin-bottom: 1rem;
    }

    button {
      max-width: 11rem;
    }
  </style>