package larp.db.steamclone;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GenreController {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/genre")
    public ResponseEntity<List<Map<String, Object>>> getGames() {
        String sql = "SELECT * FROM Genre";
        return ResponseEntity.ok(jdbcTemplate.queryForList(sql));
    }
}

