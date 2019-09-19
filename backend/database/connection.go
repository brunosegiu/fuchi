package database

import (
	"fmt"
	"os"

	gorm "github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

var DB *gorm.DB = connect()

func connect() *gorm.DB {
	user := os.Getenv("POSTGRES_USER")
	password := os.Getenv("POSTGRES_PASSWORD")
	dbName := os.Getenv("POSTGRES_DB")
	dbHost := os.Getenv("POSTGRES_HOST")

	psqlInfo := fmt.Sprintf("host=%s user=%s password=%s dbname=%s sslmode=disable",
		dbHost, user, password, dbName)

	db, err := gorm.Open("postgres", psqlInfo)
	if err != nil {
		panic(err)
	}
	gorm.DefaultTableNameHandler = func(rbacDb *gorm.DB, defaultTableName string) string {
		return "fuchi_" + defaultTableName
	}
	db.LogMode(true)
	Migrate(db)

	return db
}
