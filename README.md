# Home searcher

This project's aim is to provide a searcher of homes in the Spanish territory.




## Endpoints server

| HTTP Method | URI path                | Description      |      Protected |
| :---         |   :---:                |          ---:    |           ---: |
| GET          | /                      | Render index page and search   |          |
| POST         | /                      | Handle index page and search   |          |
| GET          | /registro              | Render register page   |    |
| POST         | /registro              | Handle register page   |    |
| GET          | /login                 | Login page                          |    |
| POST         | /login                 | Handle login   |    |
| GET          | /venta-viviendas       | Render search result of homes for sale  |    |
| GET          | /alquiler-viviendas    | Render search result of homes for rent    |    |
| GET          | /venta-viviendas/:ciudad    | Render search result of homes for sale  |    |
| GET          | /alquiler-viviendas/:ciudad    | Render search result of homes for rent    |    |
| GET          | /inmueble/:id    | Render search result of one home by id   |    |
| GET          | /vivienda/crear  | Render create page form   |  Yes  |
| POST         | /vivienda/crear    | Handle create page form   |  Yes  |
| GET          | /:vivienda_id/editar   | Render  edit page form   | Yes   |
| POST         | /:vivienda_id/editar    | Handle edit page form   |  Yes  |
| POST         | /:vivienda_id/borrar   | Handle delete button   |  Yes  |
| GET          | /usuarios  | List of all registered users   | Yes   |
| POST         | /usuarios  | Handle of all registered users   | Yes   |
| GET          | /vivienda/contacto   | Render contact form   |    |
| POST         | /vivienda/contacto    | Handle contact form   |    |
| GET          |/usuarios/:usuario_id/favoritos   | List of user's favorite homes   |  Yes  |
| POST         |/usuarios/:usuario_id/favoritos   | Handle user's favorite homes   |  Yes  |
| GET          | /sobre-nosotros   | Render about us page   |    |

## Server .env variables needed

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
### Client .env variables needed

REACT_APP_API_URL=http://localhost:5005/api

<!-- #### Endpoints client

| HTTP Method | URI path                | Description      |    
| :---         |   :---:                |          ---:    |        
| POST         | /api/auth/signup       | A new user is registered to the database. |
| POST         | /api/auth/login        | The user can access their account if registered. | 
| GET          | /api/auth/logout       | Ends session. |
| POST         | /api/auth/is-logged-in | Verifies if a user is logged in. |
| GET          | /api/users/            | Shows all users but to the admins. |
| DELETE       | /api/users/:id         | 	Deletes user. |
| PUT          | /api/users/edit/:infoToUpdate | Updates the user's info. |
| GET          | /api/users/:id  |  Brings data from a specific user. | -->