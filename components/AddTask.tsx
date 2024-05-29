import { Flex, Input, Button } from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";

import { AddTaskProps } from "@types";

const AddTask = ({ task, setTask, handleCreateTask }: AddTaskProps) => {
  return (
    <Flex pt="2rem" pl="2rem" pr="2rem" pb="2rem">
      <Input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Ajouter une tâche..."
        type="text"
        size="lg"
        style={{ background: "white" }}
      />
      <Button
        onClick={handleCreateTask}
        leftIcon={<SmallAddIcon />}
        colorScheme="twitter"
        size="lg"
      >
        Ajouter
      </Button>
    </Flex>
  );
};

export default AddTask;
