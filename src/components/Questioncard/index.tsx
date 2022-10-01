import { Box, Heading, Flex } from "@chakra-ui/react";
import { QuestionCardProps } from "@/interface/index";
import AppButton from "@/components/button";

const Questioncard: React.FC<QuestionCardProps> = ({
  questions,
  callback,
  category,
  totalQuestions,
  questionNumber,
}) => {
  return (
    <>
      <Box bg="white" w="100%">
        <Box mb={6} fontSize="md" fontWeight="bold" textTransform="uppercase">
          Your progress: {questionNumber}/{totalQuestions}
        </Box>
        <Box>{category}</Box>
        <Heading>
          <Box>{questions}</Box>
        </Heading>
        <Flex direction="column">
          <Box w="100%" mb={4}>
            <AppButton
              colorScheme="purple"
              variant="outline"
              value="True"
              width="full"
              onClick={callback}
            />
          </Box>

          <Box w="100%" mb={4}>
            <AppButton
              colorScheme="purple"
              variant="outline"
              onClick={callback}
              value="False"
              width="full"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Questioncard;
