package larp.db.steamclone;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
public class UserController {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/api/users")
    public ResponseEntity<List<User>> getUsers() {
        String sql = "SELECT * FROM Users";
        List<User> users = jdbcTemplate.query(sql, (rs, rowNum) -> new User(
            rs.getString("username"),
            rs.getString("realName"),
            rs.getString("emailAddress")
        ));
        return ResponseEntity.ok(users);
    }

    @PostMapping("/api/users")
    public ResponseEntity<String> createUser(@RequestBody User user) {
        String sql = "INSERT INTO Users (username, realName, emailAddress) VALUES (?, ?, ?)";
        jdbcTemplate.update(sql, user.getUsername(), user.getRealName(), user.getEmailAddress());
        return ResponseEntity.ok("User created with username: " + user.getUsername());
    }

    @GetMapping("/api/users/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username) {
        String sql = "SELECT * FROM Users WHERE username = ?";
        User user = jdbcTemplate.queryForObject(sql, (rs, rowNum) -> new User(
            rs.getString("username"),
            rs.getString("realName"),
            rs.getString("emailAddress")
        ), username);
        return ResponseEntity.ok(user);
    }

    @DeleteMapping("/api/users/{username}")
    public ResponseEntity<String> deleteUser(@PathVariable String username) {
        String sql = "DELETE FROM Users WHERE username = ?";
        jdbcTemplate.update(sql, username);
        return ResponseEntity.ok("User deleted with username: " + username);
    }
}
