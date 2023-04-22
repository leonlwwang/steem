package larp.db.steamclone;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.CallableStatement;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;


@Service
public class GameService {

    @Value("${spring.datasource.url}")
    private String datasourceUrl;

    @Value("${spring.datasource.username}")
    private String datasourceUsername;

    @Value("${spring.datasource.password}")
    private String datasourcePassword;

    public void applyDiscountByGenre(String genre, double discountRate) {
        try (Connection connection = DriverManager.getConnection(datasourceUrl, datasourceUsername, datasourcePassword);
             CallableStatement stmt = connection.prepareCall("{call ApplyDiscountByGenre(?, ?)}")) {
            stmt.setString(1, genre);
            stmt.setDouble(2, discountRate);
            stmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}