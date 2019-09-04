package database

import (
	"api/models"

	sq "github.com/Masterminds/squirrel"
)

const TABLE_NAME string = "fuchi_user"

func (conn *DBConnection) LoadUser(id string) (*models.User, error) {
	psql := sq.StatementBuilder.PlaceholderFormat(sq.Dollar)
	rawQuery, args, err := psql.Select("id, nickname").From(TABLE_NAME).Where(sq.Eq{"id": id}).ToSql()
	row := conn.DB.QueryRow(rawQuery, args...)
	if err != nil {
		panic(err)
		return nil, err
	} else {
		var id string
		var nickname string
		row.Scan(&id, &nickname)
		user := models.User{IDField: id, NicknameField: nickname}
		return &user, nil
	}
}
