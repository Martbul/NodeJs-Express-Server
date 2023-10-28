const Furniture = require('../models/Furniture')

exports.getAll = () => Furniture.find()

exports.create = (furnitureData) => {
   Furniture.create(furnitureData)
}