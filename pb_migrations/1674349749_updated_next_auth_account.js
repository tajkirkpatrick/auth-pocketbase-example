migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yjyfrfgfy5e1f5p")

  // remove
  collection.schema.removeField("5guft4ul")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ju0cpzs1",
    "name": "expires_in",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yjyfrfgfy5e1f5p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5guft4ul",
    "name": "expires_in",
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
  collection.schema.removeField("ju0cpzs1")

  return dao.saveCollection(collection)
})
