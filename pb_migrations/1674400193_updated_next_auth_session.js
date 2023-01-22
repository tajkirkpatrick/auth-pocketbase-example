migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0fbhwxgna5jb0k1")

  // remove
  collection.schema.removeField("bysaoe92")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "adjbaipu",
    "name": "userId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "qhn8ngzgaw4k3x1",
      "cascadeDelete": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0fbhwxgna5jb0k1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bysaoe92",
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
  collection.schema.removeField("adjbaipu")

  return dao.saveCollection(collection)
})
