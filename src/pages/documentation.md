---
layout: ../layouts/Layout.astro
title: "Documentation"
---

**dcache** is a `REST` Web Service providing a `JSON` key-value-store.

**dcache-ui** is a web application to view and modify **dcache** data.

## REST API

### Configuration

dcache uses a PDO (PHP Data Object) database, like MYSQL, Maria DB or SQLite, to store the data. The credentials to access the database need to be configured.

The configuration can be set via the REST API. But once the configuration is set, it can't be changed later on. You need to remove the file `settings.php` from the server and start again.

The following request gets if the API can be configured and if it is already configured:

```json
GET /config
```

To sets important properties to access the PDO database post the following request:

```json showLineNumbers {7-8}
POST /config

{
  // PDO database selection for MySQL/MariaDB
  "database": "mysql:host=localhost;dbname=dcache",
  "prefix": "dc-",
  "user": "root",
  "password": ""
}
```

The values above are the defaults used for local development.  
**Important:** Never use a password-less root account in production!

### View Data

Todo
