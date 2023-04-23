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
    <input type="text" id="genre" bind:value={genre} required />

    <label for="discountRate">Discount Rate:</label>
    <input type="number" id="discountRate" bind:value={discountRate} min="0" max="1" step="0.01" required />

    <button type="submit">Apply Discount</button>
  </form>
</div>


