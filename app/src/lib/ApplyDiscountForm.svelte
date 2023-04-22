<script>
    import { onMount } from 'svelte';
    let genre = '';
    let discountRate = 0;
  
    async function applyDiscount() {
      const response = await fetch('/api/games/apply-discount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ genre, discountRate }),
      });
  
      if (response.ok) {
        alert('Discount applied successfully.');
      } else {
        alert('Error applying discount.');
      }
    }
  </script>
  
  <div>
    <label for="genre">Genre:</label>
    <select id="genre" bind:value={genre}>
      <option value="">Select a genre</option>
      <option value="GenreIsNonGame">Non-Game</option>
      <option value="GenreIsIndie">Indie</option>
      <option value="GenreIsAction">Action</option>
      <option value="GenreIsAdventure">Adventure</option>
      <option value="GenreIsCasual">Casual</option>
      <option value="GenreIsStrategy">Strategy</option>
      <option value="GenreIsRPG">RPG</option>
      <option value="GenreIsSimulation">Simulation</option>
      <option value="GenreIsEarlyAccess">Early Access</option>
      <option value="GenreIsFreeToPlay">Free to Play</option>
      <option value="GenreIsSports">Sports</option>
      <option value="GenreIsRacing">Racing</option>
      <option value="GenreIsMassivelyMultiplayer">Massively Multiplayer</option>
    </select>
  </div>
  <div>
    <label for="discountRate">Discount Rate:</label>
    <input type="number" id="discountRate" bind:value={discountRate} step="0.01" />
  </div>
  <button on:click={applyDiscount}>Apply Discount</button>