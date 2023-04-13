<script>
    export let username;
    let newUsername = null;
    $: changeSuccess = 0;
  
    async function handleSubmit(event) {
      event.preventDefault();
  
      newUsername = event.target.username.value.trim();
  
      if (!newUsername) {
        console.error('New username is required');
        return;
      }
  
      const response = await fetch(`/api/users/${username}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUsername)
      });
  
      if (response.ok) {
        changeSuccess = 1;
        console.log(`Username updated to ${newUsername}`);
        username = newUsername;
      } else {
        changeSuccess = -1;
        console.error('Failed to update username');
      }
    }
</script>

<form on:submit={handleSubmit}>
  <div>
    <label for="username">update username:</label>
    <input type="text" id="username" name="username" bind:value={newUsername} required>
  </div>
  <button type="submit">Update</button>
</form>

{#if changeSuccess == 1}
  <p style="font-size: 0.8rem">Username successfully changed to <em>{username}</em>.</p>
{:else if changeSuccess == -1}
  <p style="color: #BB342F; font-size: 0.7rem"><em>You need to log in to change your username.</em></p>
{/if}

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
  