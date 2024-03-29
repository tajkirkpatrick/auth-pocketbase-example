migrate((db) => {
  const collection = new Collection({
    "id": "qhn8ngzgaw4k3x1",
    "created": "2023-01-22 14:57:23.571Z",
    "updated": "2023-01-22 14:57:23.571Z",
    "name": "next_auth_user",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jzcv4fft",
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
        "id": "1tzuoeth",
        "name": "email",
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
        "id": "gtjm3xag",
        "name": "emailVerified",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "kwsjxvn9",
        "name": "image",
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
  const collection = dao.findCollectionByNameOrId("qhn8ngzgaw4k3x1");

  return dao.deleteCollection(collection);
})
