import { Card, Flex, Button, Text } from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { TaskProps } from "@types";

const Task = ({
  individualTask,
  handleCompleteTask,
  handleDeleteTask,
}: TaskProps) => {
  return (
    <Card m="2rem" p="0.5rem" variant="outline">
      <Flex alignItems="center">
        {individualTask.completed ? (
          <Text flexGrow={1} as="del">
            {individualTask.task}
          </Text>
        ) : (
          <Text flexGrow={1}>{individualTask.task}</Text>
        )}

        <Flex>
          {individualTask.completed ? (
            <Button isDisabled colorScheme="whatsapp" ml="1rem">
              <CheckIcon />
            </Button>
          ) : (
            <Button
              onClick={() => handleCompleteTask(individualTask._id)}
              colorScheme="whatsapp"
              ml="1rem"
            >
              <CheckIcon />
            </Button>
          )}

          <Button
            onClick={() => handleDeleteTask(individualTask._id)}
            colorScheme="red"
            ml="1rem"
          >
            <DeleteIcon />
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Task;
