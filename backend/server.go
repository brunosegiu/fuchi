package main

import (
	"api"
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/handler"
)

const defaultPort = "8080"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	// Main Endpoint
	http.Handle("/query", handler.GraphQL(api.NewExecutableSchema(api.Config{Resolvers: &api.Resolver{}})))
	// Static content Handler
	http.Handle("/", http.FileServer(http.Dir("./static")))
	// Playground
	http.Handle("/graphql-explorer", handler.Playground("GraphQL", "/query"))

	log.Fatal(http.ListenAndServe(":"+port, nil))
}
