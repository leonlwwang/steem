<script>
    export let username;
    let bookmarked_games = [];
    
    export async function getBookmarks(event) {
        if (event != null) event.preventDefault();
        
        console.log("Getting bookmarks for user", username);

        if (!username) {
            console.error('Username is required');
            return;
        }

        const response = await fetch(`/api/bookmarks/${username}`);

        bookmarked_games = await response.json();

        console.log(bookmarked_games);
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
  </script>
  
  <p>Bookmarked games</p>

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
      <div style="display: flex;">
        <button on:click={() => removeBookmarkGame(game.gameName)} id="btn_remove_bookmark" class="btn btn-primary" style="margin-right: 0.5rem;">
          Remove Bookmark
        </button>
      </div>
    {/each}
  {:else}
    <p style="color:darkgray">No results found.</p>
  {/if}
  