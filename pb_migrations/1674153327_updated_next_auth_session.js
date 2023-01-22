migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8ted0hg5i0qxjoz")

  // remove
  collection.schema.removeField("a5hqqtnf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r6vzlavu",
    "name": "userId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": null,
      "collectionId": "phabfede1df4ins",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8ted0hg5i0qxjoz")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("r6vzlavu")

  return dao.saveCollection(collection)
})
