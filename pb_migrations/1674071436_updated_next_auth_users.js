migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("phabfede1df4ins")

  // remove
  collection.schema.removeField("p2gdio0v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6vipztb1",
    "name": "email_verified",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("phabfede1df4ins")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p2gdio0v",
    "name": "email_verified",
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
  collection.schema.removeField("6vipztb1")

  return dao.saveCollection(collection)
})
