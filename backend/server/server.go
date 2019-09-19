package main

import (
	"context"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/go-http-utils/logger"
	graphql "github.com/graph-gophers/graphql-go"
	"github.com/graph-gophers/graphql-go/relay"
	"github.com/rs/cors"

	database "api/database"
	resolvers "api/resolvers"
)

func loadFile(path string) []byte {
	content, _ := ioutil.ReadFile(path)
	return content
}

func Authorize(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		token := req.Header.Get("Authorization")
		if token != "" {
			user, _ := database.LoadUserWithToken(token)
			ctx := context.WithValue(req.Context(), "user", user)
			req = req.WithContext(ctx)
		}
		next.ServeHTTP(w, req)
	})
}

func main() {
	rawSchema := string(loadFile("schema/schema.graphql"))

	opts := []graphql.SchemaOpt{graphql.UseFieldResolvers(), graphql.MaxParallelism(20), graphql.UseFieldResolvers()}
	schema := graphql.MustParseSchema(rawSchema, &resolvers.Resolver{}, opts...)

	mux := http.NewServeMux()
	mux.Handle("/query", Authorize(&relay.Handler{Schema: schema}))
	c := cors.New(cors.Options{
		AllowedHeaders: []string{"Accept", "Content-Type", "Content-Length", "Accept-Encoding", "X-CSRF-Token", "Authorization"},
	})
	handler := c.Handler(mux)

	log.Fatal(http.ListenAndServe(":1313", logger.Handler(handler, os.Stdout, logger.DevLoggerType)))
}
