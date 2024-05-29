// Importation des outils Mongoose
import { Schema, model, models } from "mongoose";

// Importation de l'interface ITask pour le typage TypeScript
import { ITask } from "@/types";

// Définition du schéma pour les tâches
const taskSchema = new Schema<ITask>({
  task: {
    type: String, // Champ de type chaîne de caractères
    required: [true, "Task is required"], // Champ obligatoire avec message d'erreur personnalisé
  },
  completed: {
    type: Boolean, // Champ de type booléen
    default: false, // Valeur par défaut : false
  },
});

// Création ou récupération du modèle Task
const Task = models.Task || model<ITask>("Task", taskSchema);

export default Task; // Exportation du modèle Task
