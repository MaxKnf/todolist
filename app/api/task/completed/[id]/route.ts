import Task from "@models/tasks";
import { connectToDB } from "@utils/database";

import { NextResponse } from "next/server";
import { IDeleteTaskRequestParam } from "@/types";

export const PATCH = async (
  request: Request,
  { params }: IDeleteTaskRequestParam
) => {
  try {
    await connectToDB();
    const existingTask = await Task.findById(params.id);
    if (!existingTask) {
      return new NextResponse("Task not found", { status: 404 });
    }
    existingTask.completed = !existingTask.completed;
    await existingTask.save();
    return NextResponse.json("Task completed successfully", { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Failed to update task", { status: 500 });
  }
};
