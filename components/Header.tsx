import { Flex, Heading, Text, Input, Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Flex p="2rem" direction="column" alignItems="center">
        <Heading as="h1" size="4xl" noOfLines={1} className="tasklist-title">
          Tasklist.io
        </Heading>
        <Text mt="1rem" className="tasklist-slogan">
          Créer vos taches à accomplir dans la journée, dans le mois, dans
          l'année ou dans le siècle!
        </Text>
      </Flex>
    </>
  );
};

export default Header;
