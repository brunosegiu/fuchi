package main

import (
	resolvers "api/resolvers"
	database "api/database"
	"io/ioutil"
	"log"
	"net/http"
	"os"

	"github.com/go-http-utils/logger"
	"github.com/graph-gophers/graphql-go"
	"github.com/graph-gophers/graphql-go/relay"
)

func loadFile(path string) []byte {
	content, _ := ioutil.ReadFile(path)
	return content
}

func main() {
	rawSchema := string(loadFile("schema/schema.graphql"))

	conn := database.Connect()

	opts := []graphql.SchemaOpt{graphql.UseFieldResolvers(), graphql.MaxParallelism(20)}
	schema := graphql.MustParseSchema(rawSchema, &resolvers.Resolver{DB: conn}, opts...)

	webpage := loadFile("assets/explorer.html")

	mux := http.NewServeMux()

	mux.Handle("/explorer", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Write(webpage)
	}))
	mux.Handle("/query", &relay.Handler{Schema: schema})

	log.Fatal(http.ListenAndServe(":1313", logger.Handler(mux, os.Stdout, logger.DevLoggerType)))
}
