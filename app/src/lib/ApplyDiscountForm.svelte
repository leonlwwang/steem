<!-- ApplyDiscountForm.svelte -->
<script>
  import { createEventDispatcher } from 'svelte';
  import axios from 'axios';
  
  const dispatch = createEventDispatcher();
  let genre = '';
  let discountRate = 0;

  async function applyDiscount() {
    try {
      const response = await axios.post('/api/games/apply-discount', null, { 
        params: { genre, discountRate },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
      dispatch('applyDiscount', { genre, discountRate });
      alert(response.data);
    } catch (error) {
      console.error('Error applying discount:', error);
      alert('Error applying discount. Please try again.');
    }
  }
</script>

<!-- Rest of the component remains the same -->

<div>
  <h2>Apply Discount</h2>
  <form on:submit|preventDefault={applyDiscount}>
    <label for="genre">Genre:</label>
    <select id="genre" bind:value={genre} required>
      <option value="">Select genre</option>
      <option value="NonGame">NonGame</option>
      <option value="Indie">Indie</option>
      <option value="Action">Action</option>
      <option value="Adventure">Adventure</option>
      <option value="Casual">Casual</option>
      <option value="Strategy">Strategy</option>
      <option value="RPG">RPG</option>
      <option value="Simulation">Simulation</option>
      <option value="Early Access">Early Access</option>
      <option value="Free to Play">Free to Play</option>
      <option value="Sports">Sports</option>
      <option value="Racing">Racing</option>
      <option value="Massively Multiplayer">Massively Multiplayer</option>
    </select>
    

    <label for="discountRate">Discount Rate:</label>
    <div class="discount-slider">
      <input
        type="range"
        id="discountSlider"
        min="0"
        max="1"
        step="0.01"
        bind:value={discountRate}
      />
      <input
        type="number"
        id="discountRate"
        min="0"
        max="1"
        step="0.01"
        bind:value={discountRate}
        required
      />
    </div>
    <button type="submit">Apply Discount</button>
  </form>
</div>


