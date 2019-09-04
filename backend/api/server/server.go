package main

import (
	"api"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/graph-gophers/graphql-go"
	"github.com/graph-gophers/graphql-go/relay"
)

func loadFile(path string) []byte {
	content, _ := ioutil.ReadFile(path)
	return content
}

func main() {
	rawSchema := string(loadFile("schema.graphql"))

	opts := []graphql.SchemaOpt{graphql.UseFieldResolvers(), graphql.MaxParallelism(20)}
	schema := graphql.MustParseSchema(rawSchema, &api.Resolver{}, opts...)

	webpage := loadFile("explorer.html")
	http.Handle("/explorer", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Write(webpage)
	}))
	http.Handle("/query", &relay.Handler{Schema: schema})

	log.Fatal(http.ListenAndServe(":1313", nil))
}
