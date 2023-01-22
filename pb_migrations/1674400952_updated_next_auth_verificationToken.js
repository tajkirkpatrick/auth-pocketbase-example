migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b1muh5lapcicift")

  // remove
  collection.schema.removeField("t1halyno")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nq9obpau",
    "name": "expires",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b1muh5lapcicift")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t1halyno",
    "name": "expires",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("nq9obpau")

  return dao.saveCollection(collection)
})
