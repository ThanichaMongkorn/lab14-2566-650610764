"use client";
import { Container, Group, Text, Title, Pagination } from "@mantine/core";
import { Rating } from "@mantine/core";
import { Textarea } from "@mantine/core";
import { Button } from "@mantine/core";
import { Divider } from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating defaultValue={0} size="lg" />
      <Textarea
        placeholder="Do you enjoy eating?"
        label="Your review"
        mt="xs"
        minRows={3}
      />
      <Button color="orange" mt="xs">
        Submit Review
      </Button>

      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} fractions={2} readOnly />
      </Group>
      <Text c="dimmed" align="center">
        Best pizza in this world. I give you X score.
      </Text>

      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} fractions={2} readOnly />
      </Group>
      <Text c="dimmed" align="center">
        My favourite part is pepperoni
      </Text>

      <Pagination total={20} color="orange" position="center" mt="md" />

      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Thanicha Mongkorn 650610764
      </Text>
    </Container>
  );
}
