migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("phabfede1df4ins")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n82chpcw",
    "name": "emailVerified",
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
  const collection = dao.findCollectionByNameOrId("phabfede1df4ins")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n82chpcw",
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

  return dao.saveCollection(collection)
})
