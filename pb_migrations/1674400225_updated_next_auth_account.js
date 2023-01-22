migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kmvbgt47p7bndel")

  // remove
  collection.schema.removeField("m3zu6rgq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0te0r3kc",
    "name": "userId",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "qhn8ngzgaw4k3x1",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kmvbgt47p7bndel")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m3zu6rgq",
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
  collection.schema.removeField("0te0r3kc")

  return dao.saveCollection(collection)
})
