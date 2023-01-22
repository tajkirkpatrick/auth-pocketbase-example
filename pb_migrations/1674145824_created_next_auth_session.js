migrate((db) => {
  const collection = new Collection({
    "id": "8ted0hg5i0qxjoz",
    "created": "2023-01-19 16:30:24.887Z",
    "updated": "2023-01-19 16:30:24.887Z",
    "name": "next_auth_session",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dxe7utxr",
        "name": "expires",
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
        "id": "osd5hkvl",
        "name": "sessionToken",
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
        "id": "a5hqqtnf",
        "name": "userId",
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
  const collection = dao.findCollectionByNameOrId("8ted0hg5i0qxjoz");

  return dao.deleteCollection(collection);
})
