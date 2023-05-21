package larp.db.steamclone;

import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static larp.db.steamclone.generated.Tables.USERS;

@RestController
public class UserController {
    @Autowired
    private DSLContext dslContext;

    @GetMapping("/api/users")
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = dslContext.selectFrom(USERS)
                .fetchInto(User.class);
        return ResponseEntity.ok(users);
    }

    @PostMapping("/api/users")
    public ResponseEntity<String> createUser(@RequestBody User user) {
        dslContext.insertInto(USERS)
                .set(USERS.USERNAME, user.getUsername())
                .set(USERS.REALNAME, user.getRealName())
                .set(USERS.EMAILADDRESS, user.getEmailAddress())
                .execute();
        return ResponseEntity.ok("User created with username: " + user.getUsername());
    }

    @GetMapping("/api/users/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username) {
        User user = dslContext.selectFrom(USERS)
                .where(USERS.USERNAME.eq(username))
                .fetchOneInto(User.class);
        if (user == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(user);
        }
    }

    @PutMapping("/api/users/{username}")
    public ResponseEntity<String> updateUsername(@PathVariable String username, @RequestBody String newUsername) {
        int rowsAffected = dslContext.update(USERS)
                .set(USERS.USERNAME, newUsername.substring(1, newUsername.length() - 1))
                .where(USERS.USERNAME.eq(username))
                .execute();
        if (rowsAffected == 0) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok("Username updated from " + username + " to " + newUsername);
        }
    }

    @DeleteMapping("/api/users/{username}")
    public ResponseEntity<String> deleteUser(@PathVariable String username) {
        int rowsAffected = dslContext.deleteFrom(USERS)
                .where(USERS.USERNAME.eq(username))
                .execute();
        if (rowsAffected == 0) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok("User deleted with username: " + username);
        }
    }
}

