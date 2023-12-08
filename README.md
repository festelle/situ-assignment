# Situ

En este proyecto se encuentra la solución al problema entregado. Es posible:

* Ver y filtrar profesionales de la salud.
* Crear, iniciar y administar cuenta (esto se hizo usando el servicio [clerk](https://clerk.com/)).
* Registrarse como profesional y administrar la disponibilidad (los datos se guardan usando la base de datos [mongodb](https://www.mongodb.com/)).

## Ver proyecto en vivo
El proyecto se puede revisar en [este link](https://situ-assignment-zasc.vercel.app/)

## Correr el servidor localmente

Para poder correr el proyecto localmente, es necesario tener:
* node versión 18
* llaves pública y secreta de Clerk
* URI para conectarse a mongodb

Estos últimos datos debe estar presente en un archivo llamado .env ubicado en la raíz. El archivo debe seguir la estructura:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<llave pública Clerk>
CLERK_SECRET_KEY=<llave secreta Clerk>

MONGODB_URI=<URI mongodb>
```

Después, se debe instalar las dependencias necesarias. El proyecto usa npm, por lo que se debe correr el comando:
```
npm install
```

Una vez hecho todo lo anterior, se puede correr el servidor local con el comando:

```
npm run dev
```
## Esquema Base de datos

En mongodb se crea una colección llamada "professionals" que almacena la información de todos los proesionales. Los documentos de esta colección sigue la estructura:

```
{
  _id: ObjectId
  userId: string
  firstName: string
  lastName: string
  specialization: string
  availability: string[]
}
```