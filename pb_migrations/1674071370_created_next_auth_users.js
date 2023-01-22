migrate((db) => {
  const collection = new Collection({
    "id": "phabfede1df4ins",
    "created": "2023-01-18 19:49:30.219Z",
    "updated": "2023-01-18 19:49:30.219Z",
    "name": "next_auth_users",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sqq2jrrw",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "pqhltwmb",
        "name": "image",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "zsmzzihw",
        "name": "email",
        "type": "email",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "p2gdio0v",
        "name": "email_verified",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("phabfede1df4ins");

  return dao.deleteCollection(collection);
})
