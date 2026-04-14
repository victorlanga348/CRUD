import express from "express";

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

//create
app.post("/users", async (req, res) => {
  const { name, idade } = req.body;
  const user = await prisma.user.create({
    data: {
      name,
      idade,
    },
  });
  res.json(user);
});

//read
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

//read by id
app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.json(user);
});

//update
app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, idade } = req.body;
  const user = await prisma.user.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      idade,
    },
  });
  res.json(user);
});

//delete
app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(user);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

