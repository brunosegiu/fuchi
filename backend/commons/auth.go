package commons

import (
	"golang.org/x/crypto/bcrypt"
)

func GetToken(id string) (string, error) {
	bytes := []byte(id)
	hash, err := bcrypt.GenerateFromPassword(bytes, bcrypt.MinCost)
	if err != nil {
		return "", err
	}
	return string(hash), nil
}
