migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yjyfrfgfy5e1f5p")

  // remove
  collection.schema.removeField("8y0tcgye")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yjyfrfgfy5e1f5p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8y0tcgye",
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

  // remove
  collection.schema.removeField("qmalmg6r")

  return dao.saveCollection(collection)
})
