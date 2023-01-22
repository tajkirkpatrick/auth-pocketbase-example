migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8ted0hg5i0qxjoz")

  // update
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8ted0hg5i0qxjoz")

  // update
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
})
