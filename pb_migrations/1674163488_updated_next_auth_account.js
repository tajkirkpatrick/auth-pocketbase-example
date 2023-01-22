migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yjyfrfgfy5e1f5p")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "syl2tvec",
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
  const collection = dao.findCollectionByNameOrId("yjyfrfgfy5e1f5p")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "syl2tvec",
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
