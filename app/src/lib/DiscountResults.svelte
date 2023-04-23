<!-- DiscountResults.svelte -->
<script>
    export let results = [];
  </script>
  
  <style>
    .results-container {
      max-height: 400px; 
      overflow-y: scroll;
      border: 1px solid #ccc;
      padding: 1rem;
    }
  </style>
  
  <div class="results-container">
    <table>
      <thead>
        <tr>
          <th>Game Name</th>
          <th>Old Price</th>
          <th>New Price</th>
        </tr>
      </thead>
      <tbody>
        {#each results as { gameName, old_price, new_price }}
        <tr>
          <td>{gameName}</td>
          <td>{old_price}</td>
          <td>{new_price}</td>
        </tr>
        {/each}
      </tbody>
    </table>
  </div>
  
  