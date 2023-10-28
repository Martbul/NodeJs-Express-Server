const Furniture = require('../models/Furniture')

exports.getAll = () => Furniture.find()

exports.create = (furnitureData) => {
   Furniture.create(furnitureData)
}

exports.getOne = (furnitureId) => Furniture.findById(furnitureId)

exports.update = (furnitureId, furnitureData) =>
   Furniture.findByIdAndUpdate(furnitureId, furnitureData);
  
exports.delete = (furnitureId) => Furniture.findByIdAndDelete(furnitureId)