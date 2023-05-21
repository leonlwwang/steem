/*
 * This file is generated by jOOQ.
 */
package larp.db.steamclone.generated.tables;


import java.math.BigDecimal;
import java.util.Arrays;
import java.util.List;
import java.util.function.Function;

import larp.db.steamclone.generated.Indexes;
import larp.db.steamclone.generated.Keys;
import larp.db.steamclone.generated.Steamclone;
import larp.db.steamclone.generated.tables.records.GamesRecord;

import org.jooq.Field;
import org.jooq.ForeignKey;
import org.jooq.Function17;
import org.jooq.Index;
import org.jooq.Name;
import org.jooq.Record;
import org.jooq.Records;
import org.jooq.Row17;
import org.jooq.Schema;
import org.jooq.SelectField;
import org.jooq.Table;
import org.jooq.TableField;
import org.jooq.TableOptions;
import org.jooq.UniqueKey;
import org.jooq.impl.DSL;
import org.jooq.impl.SQLDataType;
import org.jooq.impl.TableImpl;


/**
 * This class is generated by jOOQ.
 */
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class Games extends TableImpl<GamesRecord> {

    private static final long serialVersionUID = 1L;

    /**
     * The reference instance of <code>steamclone.Games</code>
     */
    public static final Games GAMES = new Games();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<GamesRecord> getRecordType() {
        return GamesRecord.class;
    }

    /**
     * The column <code>steamclone.Games.gameName</code>.
     */
    public final TableField<GamesRecord, String> GAMENAME = createField(DSL.name("gameName"), SQLDataType.VARCHAR(255).nullable(false), this, "");

    /**
     * The column <code>steamclone.Games.releaseDate</code>.
     */
    public final TableField<GamesRecord, String> RELEASEDATE = createField(DSL.name("releaseDate"), SQLDataType.VARCHAR(255).nullable(false), this, "");

    /**
     * The column <code>steamclone.Games.requiredAge</code>.
     */
    public final TableField<GamesRecord, Integer> REQUIREDAGE = createField(DSL.name("requiredAge"), SQLDataType.INTEGER.nullable(false), this, "");

    /**
     * The column <code>steamclone.Games.metacriticScore</code>.
     */
    public final TableField<GamesRecord, BigDecimal> METACRITICSCORE = createField(DSL.name("metacriticScore"), SQLDataType.DECIMAL(10, 4).nullable(false), this, "");

    /**
     * The column <code>steamclone.Games.steamSpyNumOwners</code>.
     */
    public final TableField<GamesRecord, Integer> STEAMSPYNUMOWNERS = createField(DSL.name("steamSpyNumOwners"), SQLDataType.INTEGER.nullable(false), this, "");

    /**
     * The column <code>steamclone.Games.steamSpyNumPlayers</code>.
     */
    public final TableField<GamesRecord, Integer> STEAMSPYNUMPLAYERS = createField(DSL.name("steamSpyNumPlayers"), SQLDataType.INTEGER.nullable(false), this, "");

    /**
     * The column <code>steamclone.Games.website</code>.
     */
    public final TableField<GamesRecord, String> WEBSITE = createField(DSL.name("website"), SQLDataType.VARCHAR(255).nullable(false), this, "");

    /**
     * The column <code>steamclone.Games.shortDescription</code>.
     */
    public final TableField<GamesRecord, String> SHORTDESCRIPTION = createField(DSL.name("shortDescription"), SQLDataType.VARCHAR(2051).nullable(false), this, "");

    /**
     * The column <code>steamclone.Games.detailedDescription</code>.
     */
    public final TableField<GamesRecord, String> DETAILEDDESCRIPTION = createField(DSL.name("detailedDescription"), SQLDataType.CLOB.nullable(false), this, "");

    /**
     * The column <code>steamclone.Games.configurationID</code>.
     */
    public final TableField<GamesRecord, Integer> CONFIGURATIONID = createField(DSL.name("configurationID"), SQLDataType.INTEGER.nullable(false), this, "");

    /**
     * The column <code>steamclone.Games.supportEmail</code>.
     */
    public final TableField<GamesRecord, String> SUPPORTEMAIL = createField(DSL.name("supportEmail"), SQLDataType.VARCHAR(255).nullable(false), this, "");

    /**
     * The column <code>steamclone.Games.supportURL</code>.
     */
    public final TableField<GamesRecord, String> SUPPORTURL = createField(DSL.name("supportURL"), SQLDataType.VARCHAR(255).nullable(false), this, "");

    /**
     * The column <code>steamclone.Games.currencyPrice</code>.
     */
    public final TableField<GamesRecord, String> CURRENCYPRICE = createField(DSL.name("currencyPrice"), SQLDataType.VARCHAR(20).nullable(false), this, "");

    /**
     * The column <code>steamclone.Games.initialPrice</code>.
     */
    public final TableField<GamesRecord, BigDecimal> INITIALPRICE = createField(DSL.name("initialPrice"), SQLDataType.DECIMAL(10, 4).nullable(false), this, "");

    /**
     * The column <code>steamclone.Games.finalPrice</code>.
     */
    public final TableField<GamesRecord, BigDecimal> FINALPRICE = createField(DSL.name("finalPrice"), SQLDataType.DECIMAL(10, 4).nullable(false), this, "");

    /**
     * The column <code>steamclone.Games.supportedLanguages</code>.
     */
    public final TableField<GamesRecord, String> SUPPORTEDLANGUAGES = createField(DSL.name("supportedLanguages"), SQLDataType.VARCHAR(307).nullable(false), this, "");

    /**
     * The column <code>steamclone.Games.image</code>.
     */
    public final TableField<GamesRecord, String> IMAGE = createField(DSL.name("image"), SQLDataType.VARCHAR(255).nullable(false), this, "");

    private Games(Name alias, Table<GamesRecord> aliased) {
        this(alias, aliased, null);
    }

    private Games(Name alias, Table<GamesRecord> aliased, Field<?>[] parameters) {
        super(alias, null, aliased, parameters, DSL.comment(""), TableOptions.table());
    }

    /**
     * Create an aliased <code>steamclone.Games</code> table reference
     */
    public Games(String alias) {
        this(DSL.name(alias), GAMES);
    }

    /**
     * Create an aliased <code>steamclone.Games</code> table reference
     */
    public Games(Name alias) {
        this(alias, GAMES);
    }

    /**
     * Create a <code>steamclone.Games</code> table reference
     */
    public Games() {
        this(DSL.name("Games"), null);
    }

    public <O extends Record> Games(Table<O> child, ForeignKey<O, GamesRecord> key) {
        super(child, key, GAMES);
    }

    @Override
    public Schema getSchema() {
        return aliased() ? null : Steamclone.STEAMCLONE;
    }

    @Override
    public List<Index> getIndexes() {
        return Arrays.asList(Indexes.GAMES_CONFIGURATIONID);
    }

    @Override
    public UniqueKey<GamesRecord> getPrimaryKey() {
        return Keys.KEY_GAMES_PRIMARY;
    }

    @Override
    public List<ForeignKey<GamesRecord, ?>> getReferences() {
        return Arrays.asList(Keys.GAMES_IBFK_1);
    }

    private transient Configurations _configurations;

    /**
     * Get the implicit join path to the <code>steamclone.Configurations</code>
     * table.
     */
    public Configurations configurations() {
        if (_configurations == null)
            _configurations = new Configurations(this, Keys.GAMES_IBFK_1);

        return _configurations;
    }

    @Override
    public Games as(String alias) {
        return new Games(DSL.name(alias), this);
    }

    @Override
    public Games as(Name alias) {
        return new Games(alias, this);
    }

    @Override
    public Games as(Table<?> alias) {
        return new Games(alias.getQualifiedName(), this);
    }

    /**
     * Rename this table
     */
    @Override
    public Games rename(String name) {
        return new Games(DSL.name(name), null);
    }

    /**
     * Rename this table
     */
    @Override
    public Games rename(Name name) {
        return new Games(name, null);
    }

    /**
     * Rename this table
     */
    @Override
    public Games rename(Table<?> name) {
        return new Games(name.getQualifiedName(), null);
    }

    // -------------------------------------------------------------------------
    // Row17 type methods
    // -------------------------------------------------------------------------

    @Override
    public Row17<String, String, Integer, BigDecimal, Integer, Integer, String, String, String, Integer, String, String, String, BigDecimal, BigDecimal, String, String> fieldsRow() {
        return (Row17) super.fieldsRow();
    }

    /**
     * Convenience mapping calling {@link SelectField#convertFrom(Function)}.
     */
    public <U> SelectField<U> mapping(Function17<? super String, ? super String, ? super Integer, ? super BigDecimal, ? super Integer, ? super Integer, ? super String, ? super String, ? super String, ? super Integer, ? super String, ? super String, ? super String, ? super BigDecimal, ? super BigDecimal, ? super String, ? super String, ? extends U> from) {
        return convertFrom(Records.mapping(from));
    }

    /**
     * Convenience mapping calling {@link SelectField#convertFrom(Class,
     * Function)}.
     */
    public <U> SelectField<U> mapping(Class<U> toType, Function17<? super String, ? super String, ? super Integer, ? super BigDecimal, ? super Integer, ? super Integer, ? super String, ? super String, ? super String, ? super Integer, ? super String, ? super String, ? super String, ? super BigDecimal, ? super BigDecimal, ? super String, ? super String, ? extends U> from) {
        return convertFrom(toType, Records.mapping(from));
    }
}