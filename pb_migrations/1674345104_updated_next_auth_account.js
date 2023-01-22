migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yjyfrfgfy5e1f5p")

  // remove
  collection.schema.removeField("syl2tvec")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xkvz8hts",
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
  const collection = dao.findCollectionByNameOrId("yjyfrfgfy5e1f5p")

  // add
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

  // remove
  collection.schema.removeField("xkvz8hts")

  return dao.saveCollection(collection)
})
