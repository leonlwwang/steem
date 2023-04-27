<script>
  export let username;
  let search = "";
  let data = [];

  async function submitSearch(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('search', search);

    const response = await fetch('/api/games/search', {
      method: 'POST',
      body: formData
    });

    data = await response.json();
    console.log(data);
  }

  async function submitQuery1(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('search', search);

    const response = await fetch('/api/games/query1', {
      method: 'POST',
      body: formData
    });

    data = await response.json();
    console.log(data);
  }

  async function submitQuery2(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('search', search);

    const response = await fetch('/api/games/query2', {
      method: 'POST',
      body: formData
    });

    data = await response.json();
    console.log(data);
  }
  
  async function bookmarkGame(gameName) {
    console.log("Bookmarking", gameName);

    const formData = new FormData();
    formData.append('username', username);
    formData.append('gameName', gameName);

    const response = await fetch('/api/bookmarks/bookmarkGame', {
      method: 'POST',
      body: formData
    });
  }
</script>

<div class="btn-container">
  <form on:submit={submitSearch}>
    <div class="searchform">
      <label for="search">🔎</label>
      <input type="text" class="form-control col-lg-9" id="search" name="search" placeholder=" search for games..." bind:value={search} required>
    </div>
    <p style="font-size: 0.9rem;"><b>Specialized Query 1:</b> Return the game name, website, genre, and initial price of games that share the same website as games with similar name to the provided game name, have steam spy number of players greater than 10000 (inclusive), and have initial price less than 10 (not inclusive). </p>
    <p style="font-size: 0.9rem;"><b>Specialized Query 2:</b> Return the game name and PC minimum and recommended requirements of all games that have the same PC requirements as games with similar name to the provided game name, ordered by game name in ascending order. </p>
    <div style="display: flex;">
      <button type="submit" class="btn btn-primary" style="margin-right: 1rem;">Submit</button>
      <button on:click={submitQuery1} id="btnq1" class="btn btn-primary" style="margin-right: 0.5rem;">Query 1</button>
      <button on:click={submitQuery2} id="btnq2" class="btn btn-primary" style="margin-left: 0.5rem;">Query 2</button>
    </div>
  </form>
</div>

{#if data.length > 0}
  <p style="color:darkgray">{data.length} results found.</p>
  {#each data as game}
    <img src={game.image} alt={game.gameName} />
    <p style="font-size: 0.9rem;"><b>{game.gameName}</b></p>
    <p style="font-size: 0.9rem;"> Metacritic score: {game.metacriticScore} </p>
    <p style="font-size: 0.9rem;"> {game.shortDescription} </p>
    <p style="font-size: 0.9rem;"> Original price: {game.initialPrice} </p>
    {#if game.initialPrice != game.finalPrice}
        <p style="font-size: 0.9rem;"> <b>ON SALE!</b> Discount price: {game.finalPrice} </p>
      {/if}
    <div style="display: flex;">
      <button on:click={() => bookmarkGame(game.gameName)} id="btn_bookmark" class="btn btn-primary" style="margin-right: 0.5rem;">
        Bookmark
      </button>
    </div>
  {/each}
{:else}
  <p style="color:darkgray">No results found.</p>
{/if}
