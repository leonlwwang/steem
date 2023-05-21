package larp.db.steamclone;

import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import static larp.db.steamclone.generated.Tables.*;

@RestController
public class GamesController {
    @Autowired
    private DSLContext dslContext;

    @GetMapping("/api/games")
    public ResponseEntity<List<Map<String, Object>>> getGames() {
        return ResponseEntity.ok(dslContext.select().from(GAMES).fetch().intoMaps());
    }

    @PostMapping("/api/games/search")
    public ResponseEntity<List<Map<String, Object>>> searchGames(@RequestParam String search, Model model) {
        return ResponseEntity.ok(dslContext.select().from(GAMES).where(GAMES.GAMENAME.like("%" + search + "%")).fetch().intoMaps());
    }

    @PostMapping("/api/games/query1")
    public ResponseEntity<List<Map<String, Object>>> searchQuery1(@RequestParam String search, Model model) {
        return ResponseEntity.ok(dslContext.select()
                .from(GAMES)
                .join(GAMEGENRE).on(GAMES.GAMENAME.eq(GAMEGENRE.GAMENAME))
                .where(GAMES.WEBSITE.eq(dslContext.select(GAMES.WEBSITE).from(GAMES).where(GAMES.GAMENAME.like("%" + search + "%")).limit(1)))
                .and(GAMES.STEAMSPYNUMPLAYERS.greaterOrEqual(10000))
                .and(GAMES.INITIALPRICE.lessThan(BigDecimal.valueOf(10)))
                .fetch().intoMaps());
    }
    
    @PostMapping("/api/games/query2")
    public ResponseEntity<List<Map<String, Object>>> searchQuery2(@RequestParam String search, Model model) {
        return ResponseEntity.ok(dslContext.select().from(GAMES)
                .join(CONFIGURATIONS).on(GAMES.CONFIGURATIONID.eq(CONFIGURATIONS.CONFIGURATIONID))
                .where(CONFIGURATIONS.MINREQUIREMENTPC.eq(
                        dslContext.select(CONFIGURATIONS.MINREQUIREMENTPC).from(GAMES)
                                .join(CONFIGURATIONS).on(GAMES.CONFIGURATIONID.eq(CONFIGURATIONS.CONFIGURATIONID))
                                .where(GAMES.GAMENAME.like("%" + search + "%")).limit(1)
                ))
                .orderBy(GAMES.GAMENAME)
                .fetch().intoMaps());
    }

    @PostMapping("/api/games/apply-discount")
    public ResponseEntity<List<Map<String, Object>>> applyDiscount(
            @RequestParam(required = false) String genre,
            @RequestParam(required = false) String releaseDate,
            @RequestParam(required = false) String gameName,
            @RequestParam BigDecimal discountRate) {
        try {
            List<Map<String, Object>> result = dslContext
                    .resultQuery("{call ApplyDiscountByCriteria(?, ?, ?, ?)}", genre, releaseDate, gameName, discountRate)
                    .fetch().intoMaps();
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Collections.emptyList());
        }
    }
}
