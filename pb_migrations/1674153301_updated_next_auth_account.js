migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yjyfrfgfy5e1f5p")

  // remove
  collection.schema.removeField("qmalmg6r")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yjyfrfgfy5e1f5p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qmalmg6r",
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
  collection.schema.removeField("syl2tvec")

  return dao.saveCollection(collection)
})
