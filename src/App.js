import "./App.css";
import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  VStack,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      animate={{ opacity: 1, y: "10%" }}
      transition={{ delay: 0.3, duration: 0.8 }}
      initial={{ opacity: 0 }}
    >
      <VStack>
        <Flex justifyContent={"center"} alignItems={"center"} mt="13%">
          <Heading
            sx={{
              fontSize: "6rem",
            }}
          >
            Parth Gupta
          </Heading>
        </Flex>
        <HStack
          className="notshow"
          position="initial"
          spacing="2rem"
          height="5rem"
          width={"100%"}
          justifyContent={"center"}
          color="white"
        >
          <Box boxSize="5rem">
            <Link href="https://twitter.com/ParthGupta2002" isExternal>
              <IconButton
                icon={<BsTwitter />}
                isRound="true"
                p={"revert"}
                sx={{ fontSize: "3rem", boxSize: "4rem" }}
                variant="outline"
                borderColor={"white"}
                _hover={{ boxSize: "4.5rem" }}
                color="white"
              ></IconButton>
            </Link>
          </Box>

          <Box boxSize="5rem">
            <Link href="https://github.com/ParthGupta-28" isExternal>
              <IconButton
                icon={<BsGithub />}
                isRound="true"
                p={"revert"}
                sx={{
                  fontSize: "3rem",
                  boxSize: "4rem",
                }}
                variant="outline"
                borderColor={"white"}
                _hover={{ boxSize: "4.5rem" }}
                color="white"
              ></IconButton>
            </Link>
          </Box>

          <Box boxSize="5rem">
            <Link href="https://www.linkedin.com/in/parthgupta2809" isExternal>
              <IconButton
                icon={<BsLinkedin />}
                isRound="true"
                p={"revert"}
                sx={{ fontSize: "2.5rem", boxSize: "4rem" }}
                variant="outline"
                borderColor={"white"}
                _hover={{ boxSize: "4.5rem" }}
                color="white"
              ></IconButton>
            </Link>
          </Box>

          <Box boxSize="5rem">
            <Link href="mailto: pg6272695@gmail.com" isExternal>
              <IconButton
                icon={<GrMail />}
                isRound="true"
                p={"revert"}
                sx={{ fontSize: "3rem", boxSize: "4rem" }}
                variant="outline"
                borderColor={"white"}
                _hover={{ boxSize: "4.5rem" }}
                color="white"
              ></IconButton>
            </Link>
          </Box>
        </HStack>
      </VStack>
    </motion.div>
  );
}

export default App;
