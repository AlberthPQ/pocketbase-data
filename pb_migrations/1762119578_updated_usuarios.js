/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1320738795")

  // update collection data
  unmarshal({
    "createRule": "@request.method = \"POST\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1320738795")

  // update collection data
  unmarshal({
    "createRule": null
  }, collection)

  return app.save(collection)
})
