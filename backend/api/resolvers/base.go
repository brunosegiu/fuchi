package resolvers

import database "api/database"

type Resolver struct {
	DB database.DBConnection
}
