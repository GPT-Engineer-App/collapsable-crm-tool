import React, { useState } from "react";
import { Box, Flex, Heading, Text, Button, Collapse, VStack, Table, Thead, Tbody, Tr, Th, Td, Avatar } from "@chakra-ui/react";
import { FaBars, FaUser, FaBuilding, FaTasks } from "react-icons/fa";

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const customers = [
    { id: 1, name: "John Doe", email: "john@example.com", company: "ABC Inc." },
    { id: 2, name: "Jane Smith", email: "jane@example.com", company: "XYZ Corp." },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", company: "123 Ltd." },
  ];

  return (
    <Flex>
      <Box as="aside" width={isSidebarOpen ? "200px" : "60px"} bg="gray.100" minHeight="100vh" transition="width 0.3s">
        <Flex justify="space-between" align="center" p={4} borderBottomWidth={1} borderBottomColor="gray.200">
          <Heading size="md">CRM</Heading>
          <Button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <FaBars />
          </Button>
        </Flex>
        <Collapse in={isSidebarOpen} animateOpacity>
          <VStack spacing={4} align="stretch" p={4}>
            <Button leftIcon={<FaUser />}>Customers</Button>
            <Button leftIcon={<FaBuilding />}>Companies</Button>
            <Button leftIcon={<FaTasks />}>Tasks</Button>
          </VStack>
        </Collapse>
      </Box>
      <Box flex={1} p={8}>
        <Heading size="xl" mb={8}>
          Customers
        </Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Company</Th>
            </Tr>
          </Thead>
          <Tbody>
            {customers.map((customer) => (
              <Tr key={customer.id}>
                <Td>
                  <Flex align="center">
                    <Avatar name={customer.name} mr={4} />
                    <Text>{customer.name}</Text>
                  </Flex>
                </Td>
                <Td>{customer.email}</Td>
                <Td>{customer.company}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export default Index;
