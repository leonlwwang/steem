/*
 * This file is generated by jOOQ.
 */
package larp.db.steamclone.generated;


import larp.db.steamclone.generated.tables.Bookmarks;
import larp.db.steamclone.generated.tables.Category;
import larp.db.steamclone.generated.tables.Configurations;
import larp.db.steamclone.generated.tables.Gamecategory;
import larp.db.steamclone.generated.tables.Gamegenre;
import larp.db.steamclone.generated.tables.Games;
import larp.db.steamclone.generated.tables.Genre;
import larp.db.steamclone.generated.tables.Users;
import larp.db.steamclone.generated.tables.records.BookmarksRecord;
import larp.db.steamclone.generated.tables.records.CategoryRecord;
import larp.db.steamclone.generated.tables.records.ConfigurationsRecord;
import larp.db.steamclone.generated.tables.records.GamecategoryRecord;
import larp.db.steamclone.generated.tables.records.GamegenreRecord;
import larp.db.steamclone.generated.tables.records.GamesRecord;
import larp.db.steamclone.generated.tables.records.GenreRecord;
import larp.db.steamclone.generated.tables.records.UsersRecord;

import org.jooq.ForeignKey;
import org.jooq.TableField;
import org.jooq.UniqueKey;
import org.jooq.impl.DSL;
import org.jooq.impl.Internal;


/**
 * A class modelling foreign key relationships and constraints of tables in
 * steamclone.
 */
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class Keys {

    // -------------------------------------------------------------------------
    // UNIQUE and PRIMARY KEY definitions
    // -------------------------------------------------------------------------

    public static final UniqueKey<BookmarksRecord> KEY_BOOKMARKS_PRIMARY = Internal.createUniqueKey(Bookmarks.BOOKMARKS, DSL.name("KEY_Bookmarks_PRIMARY"), new TableField[] { Bookmarks.BOOKMARKS.USERNAME, Bookmarks.BOOKMARKS.GAMENAME }, true);
    public static final UniqueKey<CategoryRecord> KEY_CATEGORY_PRIMARY = Internal.createUniqueKey(Category.CATEGORY, DSL.name("KEY_Category_PRIMARY"), new TableField[] { Category.CATEGORY.TYPE }, true);
    public static final UniqueKey<ConfigurationsRecord> KEY_CONFIGURATIONS_PRIMARY = Internal.createUniqueKey(Configurations.CONFIGURATIONS, DSL.name("KEY_Configurations_PRIMARY"), new TableField[] { Configurations.CONFIGURATIONS.CONFIGURATIONID }, true);
    public static final UniqueKey<GamecategoryRecord> KEY_GAMECATEGORY_PRIMARY = Internal.createUniqueKey(Gamecategory.GAMECATEGORY, DSL.name("KEY_GameCategory_PRIMARY"), new TableField[] { Gamecategory.GAMECATEGORY.GAMENAME, Gamecategory.GAMECATEGORY.GAMECATEGORY_ }, true);
    public static final UniqueKey<GamegenreRecord> KEY_GAMEGENRE_PRIMARY = Internal.createUniqueKey(Gamegenre.GAMEGENRE, DSL.name("KEY_GameGenre_PRIMARY"), new TableField[] { Gamegenre.GAMEGENRE.GAMENAME, Gamegenre.GAMEGENRE.GAMEGENRE_ }, true);
    public static final UniqueKey<GamesRecord> KEY_GAMES_PRIMARY = Internal.createUniqueKey(Games.GAMES, DSL.name("KEY_Games_PRIMARY"), new TableField[] { Games.GAMES.GAMENAME }, true);
    public static final UniqueKey<GenreRecord> KEY_GENRE_PRIMARY = Internal.createUniqueKey(Genre.GENRE, DSL.name("KEY_Genre_PRIMARY"), new TableField[] { Genre.GENRE.TYPE }, true);
    public static final UniqueKey<UsersRecord> KEY_USERS_PRIMARY = Internal.createUniqueKey(Users.USERS, DSL.name("KEY_Users_PRIMARY"), new TableField[] { Users.USERS.USERNAME }, true);

    // -------------------------------------------------------------------------
    // FOREIGN KEY definitions
    // -------------------------------------------------------------------------

    public static final ForeignKey<BookmarksRecord, GamesRecord> BOOKMARKS_IBFK_1 = Internal.createForeignKey(Bookmarks.BOOKMARKS, DSL.name("Bookmarks_ibfk_1"), new TableField[] { Bookmarks.BOOKMARKS.GAMENAME }, Keys.KEY_GAMES_PRIMARY, new TableField[] { Games.GAMES.GAMENAME }, true);
    public static final ForeignKey<BookmarksRecord, UsersRecord> BOOKMARKS_IBFK_2 = Internal.createForeignKey(Bookmarks.BOOKMARKS, DSL.name("Bookmarks_ibfk_2"), new TableField[] { Bookmarks.BOOKMARKS.USERNAME }, Keys.KEY_USERS_PRIMARY, new TableField[] { Users.USERS.USERNAME }, true);
    public static final ForeignKey<GamecategoryRecord, GamesRecord> GAMECATEGORY_IBFK_1 = Internal.createForeignKey(Gamecategory.GAMECATEGORY, DSL.name("GameCategory_ibfk_1"), new TableField[] { Gamecategory.GAMECATEGORY.GAMENAME }, Keys.KEY_GAMES_PRIMARY, new TableField[] { Games.GAMES.GAMENAME }, true);
    public static final ForeignKey<GamecategoryRecord, CategoryRecord> GAMECATEGORY_IBFK_2 = Internal.createForeignKey(Gamecategory.GAMECATEGORY, DSL.name("GameCategory_ibfk_2"), new TableField[] { Gamecategory.GAMECATEGORY.GAMECATEGORY_ }, Keys.KEY_CATEGORY_PRIMARY, new TableField[] { Category.CATEGORY.TYPE }, true);
    public static final ForeignKey<GamegenreRecord, GamesRecord> GAMEGENRE_IBFK_1 = Internal.createForeignKey(Gamegenre.GAMEGENRE, DSL.name("GameGenre_ibfk_1"), new TableField[] { Gamegenre.GAMEGENRE.GAMENAME }, Keys.KEY_GAMES_PRIMARY, new TableField[] { Games.GAMES.GAMENAME }, true);
    public static final ForeignKey<GamegenreRecord, GenreRecord> GAMEGENRE_IBFK_2 = Internal.createForeignKey(Gamegenre.GAMEGENRE, DSL.name("GameGenre_ibfk_2"), new TableField[] { Gamegenre.GAMEGENRE.GAMEGENRE_ }, Keys.KEY_GENRE_PRIMARY, new TableField[] { Genre.GENRE.TYPE }, true);
    public static final ForeignKey<GamesRecord, ConfigurationsRecord> GAMES_IBFK_1 = Internal.createForeignKey(Games.GAMES, DSL.name("Games_ibfk_1"), new TableField[] { Games.GAMES.CONFIGURATIONID }, Keys.KEY_CONFIGURATIONS_PRIMARY, new TableField[] { Configurations.CONFIGURATIONS.CONFIGURATIONID }, true);
}