# Homie searcher
This project’s aim is to provide a searcher of homes for rent all over the world.
# Server

## Endpoints

| Method   | Auth               | Route                             |   Description  |
| :---     |   :---:            |          ---:                     |           ---: |
| POST     |  Public            | ‘/signup’                         |  Mandar datos Registro                                |
| POST     |  Public            | ‘/login’                          |  Mandar datos de inicio de sesion|
| GET      |  Is authenticated  | ‘/logout’                         |  Cerrar sesion|
| GET      |  Is authenticated  | ‘/account:id’                     |  Obtener datos de cuenta de usuario logueado|
| PATCH    |  Is authenticated  | ‘/account/:id/edit’               |  Mandar datos para editar cuenta de usuario logueado|
| GET      |  Public            | ‘/living-places?city=Madrid’      |  Obtener listado de viviendas|
| POST     |  Is authenticated  | ‘/living-places/create’           |  Mandar datos para crear vivienda|
| GET      |  Public            | ‘/living-places/:id’              |  Obtener datos de detalle vivienda|
| PATCH    |  Is Owner          | ‘/living-places/:id/edit’         |  Mandar datos para editar vivienda|
| DELETE   |  Is Owner          | ‘/living-places/:id’              |  Borrar de la base de datos una vivienda|
|POST      |  Public            | ‘/living-places/:id/message’      |  Formulario de contacto|

# Client

## Pages

|Page                    |        Route                          |         Components  |
| :---                   |   :---:                               |            ---:         |
|HomePage.jsx            |      ‘/’                              |  Navigation, Carousel, HomeFilter, CityCard, Card, Footer|
|LivingPlaces.jsx        |      ‘/living-places/?city=Madrid’    |  Navigation, Homefilter, Card, Footer|
|LivingPlaceDetail       |      ‘/living-places/:_id’             |  Navigation, Carousel, Tabs, FormContact|
|Login.jsx               |      ‘/login’                         |  Navigation, FormLogin|
|Signup.jsx              |      ‘/signup’                        |  Navigation, FormSignup|
|Profile.jsx             |      ‘/profile’                       |  Navigation, MenuProfile, FormProfile|
|ProfileLivingPlaces.jsx |      ‘/profile/living-places’         |  Navigation, ManuProfile, TableLivingPlaces|
|ProfileMessages.jsx     |      ‘/profile/messages’              |  Navigation, MenuProfile, TableMessages|

## Server .env variables needed
```
ORIGIN=http://localhost:3000
PORT=5005
DB_REMOTE
SESS_SECRET
CLOUDINARY_NAME
CLOUDINARY_KEY
CLOUDINARY_SECRET
NODEMAILER_NAME
NODEMAILER_KEY
NODEMAILER_SECRET
```
### Client .env variables needed

```
REACT_APP_API_URL=http://localhost:5005/api
```
