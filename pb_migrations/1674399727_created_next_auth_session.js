migrate((db) => {
  const collection = new Collection({
    "id": "0fbhwxgna5jb0k1",
    "created": "2023-01-22 15:02:07.280Z",
    "updated": "2023-01-22 15:02:07.280Z",
    "name": "next_auth_session",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8bwckxpy",
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
        "id": "fc4ddcvq",
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
        "id": "bysaoe92",
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
  const collection = dao.findCollectionByNameOrId("0fbhwxgna5jb0k1");

  return dao.deleteCollection(collection);
})
