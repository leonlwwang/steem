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
import larp.db.steamclone.generated.tables.records.BookmarksRecord;

import org.jooq.Field;
import org.jooq.ForeignKey;
import org.jooq.Function3;
import org.jooq.Index;
import org.jooq.Name;
import org.jooq.Record;
import org.jooq.Records;
import org.jooq.Row3;
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
public class Bookmarks extends TableImpl<BookmarksRecord> {

    private static final long serialVersionUID = 1L;

    /**
     * The reference instance of <code>steamclone.Bookmarks</code>
     */
    public static final Bookmarks BOOKMARKS = new Bookmarks();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<BookmarksRecord> getRecordType() {
        return BookmarksRecord.class;
    }

    /**
     * The column <code>steamclone.Bookmarks.username</code>.
     */
    public final TableField<BookmarksRecord, String> USERNAME = createField(DSL.name("username"), SQLDataType.VARCHAR(255).nullable(false), this, "");

    /**
     * The column <code>steamclone.Bookmarks.gameName</code>.
     */
    public final TableField<BookmarksRecord, String> GAMENAME = createField(DSL.name("gameName"), SQLDataType.VARCHAR(255).nullable(false), this, "");

    /**
     * The column <code>steamclone.Bookmarks.minPriceEver</code>.
     */
    public final TableField<BookmarksRecord, BigDecimal> MINPRICEEVER = createField(DSL.name("minPriceEver"), SQLDataType.DECIMAL(10, 4).nullable(false), this, "");

    private Bookmarks(Name alias, Table<BookmarksRecord> aliased) {
        this(alias, aliased, null);
    }

    private Bookmarks(Name alias, Table<BookmarksRecord> aliased, Field<?>[] parameters) {
        super(alias, null, aliased, parameters, DSL.comment(""), TableOptions.table());
    }

    /**
     * Create an aliased <code>steamclone.Bookmarks</code> table reference
     */
    public Bookmarks(String alias) {
        this(DSL.name(alias), BOOKMARKS);
    }

    /**
     * Create an aliased <code>steamclone.Bookmarks</code> table reference
     */
    public Bookmarks(Name alias) {
        this(alias, BOOKMARKS);
    }

    /**
     * Create a <code>steamclone.Bookmarks</code> table reference
     */
    public Bookmarks() {
        this(DSL.name("Bookmarks"), null);
    }

    public <O extends Record> Bookmarks(Table<O> child, ForeignKey<O, BookmarksRecord> key) {
        super(child, key, BOOKMARKS);
    }

    @Override
    public Schema getSchema() {
        return aliased() ? null : Steamclone.STEAMCLONE;
    }

    @Override
    public List<Index> getIndexes() {
        return Arrays.asList(Indexes.BOOKMARKS_GAMENAME);
    }

    @Override
    public UniqueKey<BookmarksRecord> getPrimaryKey() {
        return Keys.KEY_BOOKMARKS_PRIMARY;
    }

    @Override
    public List<ForeignKey<BookmarksRecord, ?>> getReferences() {
        return Arrays.asList(Keys.BOOKMARKS_IBFK_2, Keys.BOOKMARKS_IBFK_1);
    }

    private transient Users _users;
    private transient Games _games;

    /**
     * Get the implicit join path to the <code>steamclone.Users</code> table.
     */
    public Users users() {
        if (_users == null)
            _users = new Users(this, Keys.BOOKMARKS_IBFK_2);

        return _users;
    }

    /**
     * Get the implicit join path to the <code>steamclone.Games</code> table.
     */
    public Games games() {
        if (_games == null)
            _games = new Games(this, Keys.BOOKMARKS_IBFK_1);

        return _games;
    }

    @Override
    public Bookmarks as(String alias) {
        return new Bookmarks(DSL.name(alias), this);
    }

    @Override
    public Bookmarks as(Name alias) {
        return new Bookmarks(alias, this);
    }

    @Override
    public Bookmarks as(Table<?> alias) {
        return new Bookmarks(alias.getQualifiedName(), this);
    }

    /**
     * Rename this table
     */
    @Override
    public Bookmarks rename(String name) {
        return new Bookmarks(DSL.name(name), null);
    }

    /**
     * Rename this table
     */
    @Override
    public Bookmarks rename(Name name) {
        return new Bookmarks(name, null);
    }

    /**
     * Rename this table
     */
    @Override
    public Bookmarks rename(Table<?> name) {
        return new Bookmarks(name.getQualifiedName(), null);
    }

    // -------------------------------------------------------------------------
    // Row3 type methods
    // -------------------------------------------------------------------------

    @Override
    public Row3<String, String, BigDecimal> fieldsRow() {
        return (Row3) super.fieldsRow();
    }

    /**
     * Convenience mapping calling {@link SelectField#convertFrom(Function)}.
     */
    public <U> SelectField<U> mapping(Function3<? super String, ? super String, ? super BigDecimal, ? extends U> from) {
        return convertFrom(Records.mapping(from));
    }

    /**
     * Convenience mapping calling {@link SelectField#convertFrom(Class,
     * Function)}.
     */
    public <U> SelectField<U> mapping(Class<U> toType, Function3<? super String, ? super String, ? super BigDecimal, ? extends U> from) {
        return convertFrom(toType, Records.mapping(from));
    }
}
