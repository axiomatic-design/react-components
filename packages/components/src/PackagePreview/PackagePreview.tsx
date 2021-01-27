import React from 'react';
import { SubHeading, Text, Box, Flex, Icon, Button } from '../';

interface PackagePreviewProps {
  name: string;
  description: string;
  stars: number;
  version: string;
  repoLink: string;
  docsLink: string;
}

function PackagePreview({
  name,
  description,
  stars,
  version,
  repoLink,
  docsLink,
}: PackagePreviewProps): JSX.Element {
  return (
    <Box marginBottom={3}>
      <Flex>
        <SubHeading sx={{ marginRight: 'auto' }}>{name}</SubHeading>
        <Text
          sx={{
            fontWeight: 'bold',
            fontSize: 1,
            alignItems: 'center',
            margin: 0,
          }}
        >
          <Icon name="star" size="16px" /> {stars}
        </Text>
        <Text
          sx={{
            fontWeight: 'bold',
            fontSize: 1,
            alignItems: 'center',
            margin: 0,
            marginLeft: 3,
          }}
        >
          <Icon name="git-pull-request" size="16px" /> {version}
        </Text>
      </Flex>
      <Text sx={{ marginBottom: 3 }}>{description}</Text>
      <Flex>
        <Button
          variant="outline"
          label="Documentation"
          sx={{ marginRight: 1 }}
        />
        <Button variant="outline" icon="github" label="GitHub" />
      </Flex>
    </Box>
  );
}

export { PackagePreview, PackagePreviewProps };
