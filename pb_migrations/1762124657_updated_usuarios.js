/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1320738795")

  // update collection data
  unmarshal({
    "listRule": "@request.method != \"\"",
    "updateRule": "@request.auth.id = id",
    "viewRule": "@request.method != \"\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1320738795")

  // update collection data
  unmarshal({
    "listRule": "@request.method = \"POST\"",
    "updateRule": null,
    "viewRule": null
  }, collection)

  return app.save(collection)
})
