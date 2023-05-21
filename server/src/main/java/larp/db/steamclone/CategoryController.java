package larp.db.steamclone;

import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import static larp.db.steamclone.generated.Tables.CATEGORY;;

@RestController
public class CategoryController {
    @Autowired
    private DSLContext dslContext;

    @GetMapping("/api/category")
    public ResponseEntity<?> getCategories() {
        return ResponseEntity.ok(dslContext.selectFrom(CATEGORY).fetch());
    }
}

