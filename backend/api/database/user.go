package database

import (
	"api/models"

	sq "github.com/Masterminds/squirrel"
)

const TABLE_NAME string = "fuchi_user"

func (conn *DBConnection) LoadUser(id string) (*models.User, error) {
	rawQuery, args, err := conn.Builder.Select("id, nickname").From(TABLE_NAME).Where(sq.Eq{"id": id}).ToSql()
	row := conn.DB.QueryRow(rawQuery, args...)
	if err != nil {
		panic(err)
	} else {
		user := models.User{}
		row.Scan(&user.ID_, &user.Nickname_)
		return &user, nil
	}
}

func (conn *DBConnection) CreateUser(id string, nickname string) (*models.User, error) {
	rawQuery, args, err := conn.Builder.Insert(TABLE_NAME).Columns("id, nickname").Values("id", id).Values("nickname", nickname).ToSql()
	conn.DB.Query(rawQuery, args...)
	if err != nil {
		panic(err)
	} else {
		user := models.User{ID_: id, Nickname_: nickname}
		return &user, nil
	}
}
