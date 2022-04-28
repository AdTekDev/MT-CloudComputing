package main

import (
	"log"
	"fmt"
	"net/http"
	"os"
)

func homeHandle(w http.ResponseWriter, r *http.Request) {
    w.Write([]byte("Home page"))
}

func aboutHandle(w http.ResponseWriter, r *http.Request) {
    w.Write([]byte("About page"))
}


func main() {
	port := os.Getenv("PORT")

	if port == "" {
		log.Println("$PORT must be set")
		port = "80"
	}

	http.HandleFunc("/", homeHandle)
    http.HandleFunc("/about", aboutHandle)

    fmt.Println("Server listenning on port " + port + " ...")
    fmt.Println(http.ListenAndServe(":"+port, nil))
}
