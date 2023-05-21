package larp.db.steamclone;

import org.jooq.*;
/*
import org.jooq.Record;
import org.jooq.impl.DSL;
*/
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;
import java.util.Map;

import static larp.db.steamclone.generated.Tables.*;

@RestController
public class BookmarkController {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private DSLContext dslContext;

    @GetMapping("/api/bookmarks/{username}")
    public ResponseEntity<List<Map<String, Object>>> getBookmarks(@PathVariable String username) {
        List<Map<String, Object>> bookmarks = dslContext.select()
                .from(GAMES)
                .where(GAMES.GAMENAME.in(dslContext.select(BOOKMARKS.GAMENAME).from(BOOKMARKS).where(BOOKMARKS.USERNAME.eq(username))))
                .fetchMaps();
        return ResponseEntity.ok(bookmarks);
    }

    @PostMapping("/api/bookmarks/bookmarkGame")
    public ResponseEntity<String> addBookmark(@RequestParam String username, @RequestParam String gameName) {
        dslContext.insertInto(BOOKMARKS)
                .set(BOOKMARKS.USERNAME, username)
                .set(BOOKMARKS.GAMENAME, gameName)
                .execute();
        return ResponseEntity.ok("Bookmarked " + gameName + " for " + username);
    }

    @PostMapping("/api/bookmarks/removeBookmarkedGame")
    public ResponseEntity<String> removeBookmark(@RequestParam String username, @RequestParam String gameName) {
        dslContext.deleteFrom(BOOKMARKS)
                .where(BOOKMARKS.USERNAME.eq(username).and(BOOKMARKS.GAMENAME.eq(gameName)))
                .execute();
        return ResponseEntity.ok("Bookmark " + gameName + " deleted for " + username);
    }

    @GetMapping("/api/bookmarks/recommendations/{username}")
    public ResponseEntity<List<Map<String, Object>>> getRecommendations(@PathVariable String username) {
        String sql = "SELECT * "  + 
                    "FROM Games ga1 " +
                    "WHERE 		ga1.gameName IN (SELECT ga2.gameName " +
                                                " FROM Games ga2 NATURAL JOIN GameCategory gc1 NATURAL JOIN GameGenre ge1 " +
                                                "WHERE gc1.gameCategory IN (SELECT gc2.gameCategory " +
                                                                    "FROM Bookmarks NATURAL JOIN GameCategory gc2 " +
                                                                    "WHERE username='" + username + "') " +
                                                    "AND ge1.gameGenre IN (SELECT ge2.gameGenre " +
                                                                    "FROM Bookmarks NATURAL JOIN GameGenre ge2 " +
                                                                    "WHERE username='" + username + "')) " +
                            "AND ga1.website IN (SELECT ga3.website " +
                                                "FROM Bookmarks NATURAL JOIN Games ga3 " +
                                                "WHERE username='" + username + "') " +
                            "AND ga1.gameName NOT IN (SELECT b.gameName " +
                                                    "FROM Bookmarks b " +
                                                    "WHERE username='" + username + "') " +
                    "LIMIT 10";
        return ResponseEntity.ok(jdbcTemplate.queryForList(sql));
    }

    /*
    @GetMapping("/api/bookmarks/recommendations/{username}")
    public ResponseEntity<Result<Record>> getRecommendations(@PathVariable String username) {
        Result<Record> result = dslContext.select()
                .from(GAMES)
                .where(GAMES.GAMENAME.in(
                        DSL.select(GAMES.GAMENAME)
                                .from(GAMES)
                                .naturalJoin(GAMECATEGORY)
                                .naturalJoin(GAMEGENRE)
                                .where(GAMECATEGORY.GAMECATEGORY.in(
                                        DSL.select(GAMECATEGORY.GAMECATEGORY)
                                                .from(BOOKMARKS)
                                                .naturalJoin(GAMECATEGORY)
                                                .where(BOOKMARKS.USERNAME.eq(username))
                                ))
                                .and(GAMEGENRE.GAMEGENRE.in(
                                        DSL.select(GAMEGENRE.GAMEGENRE)
                                                .from(BOOKMARKS)
                                                .naturalJoin(GAMEGENRE)
                                                .where(BOOKMARKS.USERNAME.eq(username))
                                ))
                        )
                )
                .and(GAMES.WEBSITE.in(
                        DSL.select(GAMES.WEBSITE)
                                .from(BOOKMARKS)
                                .naturalJoin(GAMES)
                                .where(BOOKMARKS.USERNAME.eq(username))
                ))
                .and(GAMES.GAMENAME.notIn(
                        DSL.select(BOOKMARKS.GAMENAME)
                                .from(BOOKMARKS)
                                .where(BOOKMARKS.USERNAME.eq(username))
                ))
                .limit(10)
                .fetch();

        return ResponseEntity.ok(result);
    }
    */

}
