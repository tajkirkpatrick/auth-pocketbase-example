migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8ted0hg5i0qxjoz")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8ted0hg5i0qxjoz")

  collection.createRule = null

  return dao.saveCollection(collection)
})
