const Car = require("../models/Car");

const carController = {
  index: async (req, res) => {
    try {
      const cars = await Car.findAll();
      res.status(200).json({ data: cars });
    } catch (error) {
      res.status(400).json({ message: "Erro ao listar carros." });
    }
  },
  store: async (req, res) => {
    const { name, marca, year_manufacture, description } = req.body;
    try {
      await Car.create({
        name,
        marca,
        year_manufacture,
        description,
      });
      res.status(200).json({ message: "Carro criado com sucesso." });
    } catch (error) {
      res.status(400).json({ message: "Erro ao cadastrar carros." });
    }
  },
  show: async (req, res) => {
    const { id } = req.params;
    try {
      const car = await Car.findByPk(id);
      if (!car) throw Error("USER_NOT_FOUND");
      res.status(200).json({ data: car });
    } catch (error) {
      if (error.message === "USER_NOT_FOUND") {
        res.status(400).json({ message: "Carro não encontrado." });
      } else {
        res.status(400).json({ message: "Erro ao buscar carro" });
      }
    }
  },
  update: async (req, res) => {
    const { name, marca, year_manufacture, description } = req.body;
    const { id } = req.params;
    try {
      await Car.update(
        {
          name,
          marca,
          year_manufacture,
          description,
          updated_at: new Date(),
        },
        {
          where: {
            id,
          },
        }
      );
      res.status(200).json({ message: "Carro atualizado com sucesso." });
    } catch (error) {
      res.status(400).json({ message: "Erro ao atualizar carro." });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      await Car.destroy({ where: { id } });
      res.status(200).json({ message: "Carro deletado com sucesso." });
    } catch (error) {
      res.status(400).json({ message: "Erro ao deletar carro" });
    }
  },
};

module.exports = carController;
