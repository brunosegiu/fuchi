package database

import (
	gorm "github.com/jinzhu/gorm"

	models "api/models"
)

func Migrate(db *gorm.DB) {
	if (!db.HasTable(&models.User{})) {
		db.CreateTable(&models.User{})
	}
	db.DB().Query("CREATE EXTENSION fuzzystrmatch")
}
