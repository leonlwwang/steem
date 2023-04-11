package larp.db.steamclone;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.ui.Model;

@RestController
public class GamesController {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/api/games")
    public ResponseEntity<List<Map<String, Object>>> getGames() {
        String sql = "SELECT * FROM Games";
        return ResponseEntity.ok(jdbcTemplate.queryForList(sql));
    }

    @PostMapping("/api/games/search")
    public ResponseEntity<List<Map<String, Object>>> searchGames(@RequestParam String search, Model model) {
        String sql = "SELECT * FROM Games WHERE gameName LIKE '%" + search + "%'";
        List<Map<String, Object>> games = jdbcTemplate.queryForList(sql);
        model.addAttribute("games", games);
        return ResponseEntity.ok(games);
    }

    @PostMapping("/api/games/query1")
    public ResponseEntity<List<Map<String, Object>>> searchQuery1(Model model) {
        String sql = "SELECT * FROM Games g JOIN GameGenre ge ON g.gameName = ge.gameName WHERE website = (SELECT website FROM Games WHERE gameName = 'Bonanza Bros') AND g.steamSpyNumPlayers >= 10000 AND g.initialPrice < 10";
        List<Map<String, Object>> games = jdbcTemplate.queryForList(sql);
        model.addAttribute("games", games);
        return ResponseEntity.ok(games);
    }

    @PostMapping("/api/games/query2")
    public ResponseEntity<List<Map<String, Object>>> searchQuery2(Model model) {
        String sql = "SELECT * FROM Games g JOIN Configurations c ON g.configurationID = c.configurationID WHERE c.minRequirementPC = (SELECT c2.minRequirementPC FROM Games g2 JOIN Configurations c2 ON g2.configurationID = c2.configurationID WHERE g2.gameName = 'Counter-Strike') ORDER BY g.gameName";
        List<Map<String, Object>> games = jdbcTemplate.queryForList(sql);
        model.addAttribute("games", games);
        return ResponseEntity.ok(games);
    }
}
