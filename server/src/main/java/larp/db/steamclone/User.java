package larp.db.steamclone;

public class User {
    private String username;
    private String realName;
    private String emailAddress;

    public User(String username, String realName, String emailAddress) {
        this.username = username;
        this.realName = realName;
        this.emailAddress = emailAddress;
    }

    public String getUsername() {
        return username;
    }

    public String getRealName() {
        return realName;
    }

    public String getEmailAddress() {
        return emailAddress;
    }
}
