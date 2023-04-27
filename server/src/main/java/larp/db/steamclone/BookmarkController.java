package larp.db.steamclone;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
public class BookmarkController {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/api/bookmarks/{username}")
    public ResponseEntity<List<Map<String, Object>>> getBookmarks(@PathVariable String username) {
        String sql = "SELECT * FROM Games ga WHERE ga.gameName IN " + "(SELECT b.gameName FROM Bookmarks b WHERE username='" + username + "')";
        return ResponseEntity.ok(jdbcTemplate.queryForList(sql));
    }

    @PostMapping("/api/bookmarks/bookmarkGame")
    public ResponseEntity<String> addBookmark(@RequestParam String username, @RequestParam String gameName) {
        String sql = "INSERT INTO Bookmarks (username, gameName) VALUES (?, ?)";
        jdbcTemplate.update(sql, username, gameName);
        return ResponseEntity.ok("Bookmarked " + gameName + " for " + username);
    }

    @PostMapping("/api/bookmarks/removeBookmarkedGame")
    public ResponseEntity<String> removeBookmark(@RequestParam String username, @RequestParam String gameName) {
        String sql = "DELETE FROM Bookmarks WHERE username=? AND gameName=?";
        jdbcTemplate.update(sql, username, gameName);
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
}
