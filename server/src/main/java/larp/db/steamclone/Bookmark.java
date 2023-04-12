package larp.db.steamclone;

public class Bookmark {
    private String username;
    private String gameName;

    public Bookmark(String username, String gameName) {
        this.username = username;
        this.gameName = gameName;
    }

    public String getUsername() {
        return username;
    }

    public String getGameName() {
        return gameName;
    }
}
