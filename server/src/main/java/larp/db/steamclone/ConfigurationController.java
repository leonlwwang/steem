package larp.db.steamclone;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ConfigurationController {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/config")
    public ResponseEntity<List<Map<String, Object>>> getGames() {
        String sql = "SELECT * FROM Configurations";
        return ResponseEntity.ok(jdbcTemplate.queryForList(sql));
    }
}
