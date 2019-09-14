package database

import (
	"api/models"
	"strings"

	sq "github.com/Masterminds/squirrel"
	guuid "github.com/google/uuid"
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

func getSplit(data map[string]*string) ([]string, []*string) {
	keys := make([]string, 0, len(data))
	values := make([]*string, 0, len(data))
	for key, value := range data {
		keys = append(keys, key)
		values = append(values, value)
	}
	return keys, values
}

func toInterface(slice []*string) []interface{} {
	s := make([]interface{}, len(slice))
	for i, v := range slice {
		s[i] = v
	}
	return s
}

func (conn *DBConnection) CreateUser(nickname string, email *string, externalId *string, imageURL *string) (*models.User, error) {
	var id string = guuid.New().String()
	data := map[string]*string{
		"id":         &id,
		"nickname":   &nickname,
		"email":      email,
		"externalid": externalId,
		"imageurl":   imageURL,
	}
	names, values := getSplit(data)
	columns := strings.Join(names, ", ")
	query := conn.Builder.Insert(TABLE_NAME).Columns(columns)
	query = query.Values(toInterface(values)...)
	queryStr, args, _ := query.ToSql()
	conn.DB.Query(queryStr, args...)
	user := models.User{ID_: id, Nickname_: nickname, Email_: email, ExternalID_: externalId}
	return &user, nil
}
