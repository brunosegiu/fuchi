build: build_frontend
	docker-compose build

build_frontend:
	cd frontend/fuchi_web; npm run build
	cp -r frontend/fuchi_web/build containers/static

build_backend:
	docker-compose build

up:
	docker-compose up

exports:
	set -o allexport
	source ./containers/config/database.env
	set +o allexport
