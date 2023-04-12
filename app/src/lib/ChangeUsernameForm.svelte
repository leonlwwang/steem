<script>
    export let username;
    let newUsername = null;
  
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
        console.log(`Username updated to ${newUsername}`);
        username = newUsername;
      } else {
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
  