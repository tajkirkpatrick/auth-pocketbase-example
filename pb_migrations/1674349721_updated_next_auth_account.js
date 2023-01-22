migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yjyfrfgfy5e1f5p")

  // remove
  collection.schema.removeField("jqsncwam")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yjyfrfgfy5e1f5p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jqsncwam",
    "name": "expires_at",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // remove
  collection.schema.removeField("5guft4ul")

  return dao.saveCollection(collection)
})
