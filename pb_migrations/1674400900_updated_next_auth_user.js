migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qhn8ngzgaw4k3x1")

  // remove
  collection.schema.removeField("gtjm3xag")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nxc3x9wf",
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
  const collection = dao.findCollectionByNameOrId("qhn8ngzgaw4k3x1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gtjm3xag",
    "name": "emailVerified",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("nxc3x9wf")

  return dao.saveCollection(collection)
})
