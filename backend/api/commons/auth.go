package commons

import (
    "context"
    "io"
    "net/http"

    database "api/database"
    models "api/models"
    googleVerifier "github.com/futurenda/google-auth-id-token-verifier"
)

const CLIENT_ID string = "503139838940-69vbq5581jf5mqak4ivmfg5v4rui9d7s.apps.googleusercontent.com"

func validateToken(idToken string) (*models.User, error) {
    verifier := googleVerifier.Verifier{}
    err := verifier.VerifyIDToken(idToken, []string{
        CLIENT_ID,
    })
    if err == nil {
        claimSet, err := googleVerifier.Decode(idToken)
        if err != nil {
            return nil, err
        }
        return database.CreateUser(claimSet.Name, &claimSet.Email, &claimSet.Sub, &claimSet.Picture)
    }
    return nil, err
}

func WithAuth(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
        idToken := req.Header.Get("Authorization")
        user, err := validateToken(idToken)
        if err != nil {
            // Report Unauthorized
            w.Header().Add("Content-Type", "application/json")
            w.WriteHeader(http.StatusUnauthorized)
            io.WriteString(w, `{"error":"invalid_key"}`)
            return
        } else {
            ctx := context.WithValue(req.Context(), "user", user)
            req = req.WithContext(ctx)
            next.ServeHTTP(w, req)
        }
    })
}
