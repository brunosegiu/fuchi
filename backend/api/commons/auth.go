package commons

import (
	googleAuthIDTokenVerifier "github.com/futurenda/google-auth-id-token-verifier"
)

const CLIENT_ID string = "503139838940-69vbq5581jf5mqak4ivmfg5v4rui9d7s.apps.googleusercontent.com"

func IsValidToken(idToken *string) bool {
	if idToken == nil {
		return false
	}
	verifier := googleAuthIDTokenVerifier.Verifier{}
	err := verifier.VerifyIDToken(*idToken, []string{
		CLIENT_ID,
	})
	return err == nil
}
