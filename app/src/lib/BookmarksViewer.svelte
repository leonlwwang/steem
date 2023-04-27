<script>
    export let username;
    let bookmarked_games = [];
    let recommended_games = [];
    
    export async function getBookmarks(event) {
        if (event != null) event.preventDefault();
        
        console.log("Getting bookmarks for user", username);

        if (!username) {
            console.error('Username is required');
            bookmarked_games = [];
            recommended_games = [];
            return;
        }

        const response = await fetch(`/api/bookmarks/${username}`);

        bookmarked_games = await response.json();

        console.log(bookmarked_games);

        // also get recommendations 
        getBookmarksRecommendations();
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

        // now update view
        getBookmarks();
    }

    async function removeBookmarkGame(gameName) {
        console.log("Removing bookmarked game", gameName, "for user", username);
  
        if (!username) {
            console.error('Username is required');
            return;
        }

        const formData = new FormData();
        formData.append('username', username);
        formData.append('gameName', gameName);

        const response = await fetch('/api/bookmarks/removeBookmarkedGame', {
            method: 'POST',
            body: formData
        });

        console.log("Remove bookmark response ", response);

        // now update bookmarks view
        getBookmarks();
    }

    async function getBookmarksRecommendations() {
        console.log("Getting bookmark recommendations for user", username);

        if (!username) {
            console.error('Username is required');
            return;
        }

        const response = await fetch(`/api/bookmarks/recommendations/${username}`);

        recommended_games = await response.json();

        console.log(recommended_games);
    }

  </script>
  
  <h3><p>Bookmarked games</p></h3>

  <form on:submit={getBookmarks}>
    <button type="submit">View Bookmarks</button>
  </form>

  {#if bookmarked_games.length > 0}
    <p style="color:darkgray">{bookmarked_games.length} bookmarks.</p>
    {#each bookmarked_games as game}
      <img src={game.image} alt={game.gameName} />
      <p style="font-size: 0.9rem;"><b>{game.gameName}</b></p>
      <p style="font-size: 0.9rem;"> Metacritic score: {game.metacriticScore} </p>
      <p style="font-size: 0.9rem;"> {game.shortDescription} </p>
      <p style="font-size: 0.9rem;"> Original price: {game.initialPrice} </p>
      {#if game.initialPrice != game.finalPrice}
        <p style="font-size: 0.9rem;"> <b>ON SALE!</b> Discount price: {game.finalPrice} </p>
      {/if}
      <div style="display: flex;">
        <button on:click={() => removeBookmarkGame(game.gameName)} id="btn_remove_bookmark" class="btn btn-primary" style="margin-right: 0.5rem;">
          Remove Bookmark
        </button>
      </div>
    {/each}
  {:else}
    <p style="color:darkgray">No results found.</p>
  {/if}
  
  <h3><p>Recommendations based on bookmarks</p></h3>
  
  {#if recommended_games.length > 0}
    <p style="color:darkgray">{recommended_games.length} recommendations.</p>
    {#each recommended_games as game}
      <img src={game.image} alt={game.gameName} />
      <p style="font-size: 0.9rem;"><b>{game.gameName}</b></p>
      <p style="font-size: 0.9rem;"> Metacritic score: {game.metacriticScore} </p>
      <p style="font-size: 0.9rem;"> {game.shortDescription} </p>
      <p style="font-size: 0.9rem;"> Original price: {game.initialPrice} </p>
      {#if game.initialPrice != game.finalPrice}
        <p style="font-size: 0.9rem;"> <b>ON SALE!</b> Discount price: {game.finalPrice} </p>
      {/if}
      <div style="display: flex;">
        <button on:click={() => bookmarkGame(game.gameName)} id="btn_add_bookmark" class="btn btn-primary" style="margin-right: 0.5rem;">
            Add Bookmark
        </button>
      </div>
    {/each}
  {:else}
    <p style="color:darkgray">No recommendations found.</p>
  {/if}