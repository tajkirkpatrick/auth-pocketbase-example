migrate((db) => {
  const collection = new Collection({
    "id": "m3ip1obqn9nm6qs",
    "created": "2023-01-22 01:30:19.470Z",
    "updated": "2023-01-22 01:30:19.470Z",
    "name": "next_auth_verificationToken",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "htrjf9fo",
        "name": "identifier",
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
        "id": "sgdgnndm",
        "name": "token",
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
        "id": "5iwbwajf",
        "name": "expires",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
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
  const collection = dao.findCollectionByNameOrId("m3ip1obqn9nm6qs");

  return dao.deleteCollection(collection);
})
