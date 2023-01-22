migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8ted0hg5i0qxjoz")

  // remove
  collection.schema.removeField("r6vzlavu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "brqqwxg2",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8ted0hg5i0qxjoz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r6vzlavu",
    "name": "userId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "phabfede1df4ins",
      "cascadeDelete": false
    }
  }))

  // remove
  collection.schema.removeField("brqqwxg2")

  return dao.saveCollection(collection)
})
