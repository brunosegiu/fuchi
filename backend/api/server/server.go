package main

import (
	commons "api/commons"
	resolvers "api/resolvers"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/go-http-utils/logger"
	graphql "github.com/graph-gophers/graphql-go"
	"github.com/graph-gophers/graphql-go/relay"
	"github.com/rs/cors"
)

func loadFile(path string) []byte {
	content, _ := ioutil.ReadFile(path)
	return content
}

func main() {
	rawSchema := string(loadFile("schema/schema.graphql"))

	opts := []graphql.SchemaOpt{graphql.UseFieldResolvers(), graphql.MaxParallelism(20), graphql.UseFieldResolvers()}
	schema := graphql.MustParseSchema(rawSchema, &resolvers.Resolver{}, opts...)

	webpage := loadFile("assets/explorer.html")

	mux := http.NewServeMux()
	mux.Handle("/explorer", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Write(webpage)
	}))
	mux.Handle("/query", commons.WithAuth(&relay.Handler{Schema: schema}))

	handler := cors.Default().Handler(mux)
	log.Fatal(http.ListenAndServe(":1313", logger.Handler(handler, os.Stdout, logger.DevLoggerType)))
}
