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

    table {
        border-collapse: separate;
        border-spacing: 0 1em;
    }

    th,
    td {
        padding: 0.5em;
        text-align: left;
    }
</style>

<div class="results-container">
    <table>
        <thead>
            <tr>
                <th>Game Name</th>
                <th>Genre</th>
                <th>Release Date</th>
                <th>Old Price</th>
                <th>New Price</th>
            </tr>
        </thead>
        <tbody>
            {#each results as { gameName, gameGenre, releaseDate, old_price, new_price }}
            <tr>
                <td>{gameName}</td>
                <td>{gameGenre}</td>
                <td>{releaseDate}</td>
                <td>{old_price}</td>
                <td>{new_price}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

  