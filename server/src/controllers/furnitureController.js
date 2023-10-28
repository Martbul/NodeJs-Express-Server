const router = require("express").Router();
const furnitureService = require("../services/furnitureService");
router.get("/", async (req, res) => {
  try {
    const furnitures = await furnitureService.getAll();
    res.json(furnitures);
  } catch (message) {
    res.status(400).json({ message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { description, img, make, material, model, price, year } = req.body;
    await furnitureService.create({
      description,
      img,
      make,
      material,
      model,
      price,
       year,
      _ownerId:req.user._id
    });
     res.status(201).end()
  } catch (message) {
    res.status(400).json({ message });
  }
});

module.exports = router;
