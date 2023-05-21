package larp.db.steamclone;

import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import static larp.db.steamclone.generated.Tables.GENRE;

@RestController
public class GenreController {
    @Autowired
    private DSLContext dslContext;

    @GetMapping("/api/genre")
    public ResponseEntity<?> getGenres() {
        return ResponseEntity.ok(dslContext.selectFrom(GENRE).fetch());
    }
}
