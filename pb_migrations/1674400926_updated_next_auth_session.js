migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0fbhwxgna5jb0k1")

  // remove
  collection.schema.removeField("8bwckxpy")

  // remove
  collection.schema.removeField("adjbaipu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wbexoizh",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m3ojeccf",
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
  const collection = dao.findCollectionByNameOrId("0fbhwxgna5jb0k1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8bwckxpy",
    "name": "expires",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

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

  // remove
  collection.schema.removeField("wbexoizh")

  // remove
  collection.schema.removeField("m3ojeccf")

  return dao.saveCollection(collection)
})
