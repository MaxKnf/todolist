import React from "react";
import { Flex, Alert, AlertIcon } from "@chakra-ui/react";

export const NoTask = () => {
  return (
    <Flex>
      <Alert status="warning">
        <AlertIcon /> Aucune tâche pour le moment
      </Alert>
    </Flex>
  );
};

export default NoTask;
