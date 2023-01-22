migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("h8mn87lgns47gsb");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "h8mn87lgns47gsb",
    "created": "2023-01-18 18:07:51.050Z",
    "updated": "2023-01-21 23:35:30.678Z",
    "name": "nominations",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ofq6gjpr",
        "name": "company_name",
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
    "createRule": "",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
