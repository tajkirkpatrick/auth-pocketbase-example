migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h8mn87lgns47gsb")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h8mn87lgns47gsb")

  collection.createRule = null

  return dao.saveCollection(collection)
})
