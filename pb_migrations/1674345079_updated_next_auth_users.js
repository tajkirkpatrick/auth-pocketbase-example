migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("phabfede1df4ins")

  // remove
  collection.schema.removeField("zsmzzihw")

  // remove
  collection.schema.removeField("6vipztb1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4ogg1hhi",
    "name": "email",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("phabfede1df4ins")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zsmzzihw",
    "name": "email",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

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

  // remove
  collection.schema.removeField("4ogg1hhi")

  // remove
  collection.schema.removeField("n82chpcw")

  return dao.saveCollection(collection)
})
