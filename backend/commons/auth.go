package commons

import (
	"crypto/hmac"
	"crypto/sha512"
	"encoding/hex"
	"os"
)

func GetToken(id *string) (*string, error) {
	if id == nil {
		return nil, nil
	}
	data := []byte(*id)
	key := []byte(os.Getenv("FUCHI_SECRET"))
	hash := hmac.New(sha512.New, key)
	hash.Write(data)
	token := hex.EncodeToString(hash.Sum(nil))
	return &token, nil
}
