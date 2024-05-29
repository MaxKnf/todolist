// Importation du modèle Task
import Task from "@models/tasks";
import { connectToDB } from "@utils/database"; // Importation de la fonction pour se connecter à la base de données

import { NextResponse } from "next/server"; // Importation de NextResponse pour les réponses HTTP

// Définition de la fonction POST pour gérer les requêtes POST
export const POST = async (request: Request) => {
  const { task } = await request.json(); // Extraction des données JSON de la requête
  try {
    await connectToDB(); // Connexion à la base de données

    const newTask = new Task({ task }); // Création d'une nouvelle instance de Task avec les données reçues

    await newTask.save(); // Sauvegarde de la nouvelle tâche dans la base de données

    return NextResponse.json(newTask, { status: 201 }); // Retourne la nouvelle tâche avec le statut 201 (créé)
  } catch (error) {
    console.log(error); // Log l'erreur en cas d'échec
    return new NextResponse("failed to create new task", { status: 500 }); // Retourne une réponse d'erreur avec le statut 500 (erreur serveur)
  }
};
