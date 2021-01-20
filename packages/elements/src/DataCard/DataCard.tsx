import React from 'react';
import { Box, Heading, Text } from '@axiomatic/primitives';
import { Stack } from '@axiomatic/layout';

interface DataCardProps {
  title: string;
  subtitle: string;
  dataScore: number;
  dataScoreColor: string;
  dataScoreReason: string;
}

function DataCard({
  title,
  subtitle,
  dataScore,
  dataScoreColor,
  dataScoreReason,
}: DataCardProps): JSX.Element {
  return (
    <Stack
      gap={3}
      backgroundColor="grays.1"
      padding={3}
      width="400px"
      marginRight={4}
      marginBottom={4}
      sx={{
        boxShadow: 'card',
        borderRadius: 'default',
      }}
    >
      <Heading variant="eyebrow">{subtitle}</Heading>
      <Heading>{title}</Heading>
      <Text color={dataScoreColor} fontWeight="bold">
        {dataScore}/5
      </Text>
      <Box backgroundColor="blues.1" padding={3} paddingBottom={0}>
        <Text color="blues.6">{dataScoreReason}</Text>
      </Box>
    </Stack>
  );
}

export { DataCard, DataCardProps };
