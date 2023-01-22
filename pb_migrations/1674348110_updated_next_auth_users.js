migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("phabfede1df4ins")

  // remove
  collection.schema.removeField("n82chpcw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fdrz2zx8",
    "name": "emailVerified",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("phabfede1df4ins")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n82chpcw",
    "name": "emailVerified",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("fdrz2zx8")

  return dao.saveCollection(collection)
})
