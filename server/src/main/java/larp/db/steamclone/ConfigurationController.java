package larp.db.steamclone;

import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import static larp.db.steamclone.generated.Tables.CONFIGURATIONS;

@RestController
public class ConfigurationController {
    @Autowired
    private DSLContext dslContext;

    @GetMapping("/api/config")
    public ResponseEntity<?> getConfigurations() {
        return ResponseEntity.ok(dslContext.selectFrom(CONFIGURATIONS).fetch());
    }
}
