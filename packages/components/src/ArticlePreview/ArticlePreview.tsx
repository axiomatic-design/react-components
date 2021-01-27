import React from 'react';
import { Box, Flex, Heading, Text, Image, Badge, Link, BoxProps } from '../';

interface ArticlePreviewProps extends BoxProps {
  title: string;
  authorName: string;
  authorImage?: string;
  tags: string[];
  digest: string;
}

function ArticlePreview({
  title,
  authorName,
  authorImage,
  tags,
  digest,
}: ArticlePreviewProps): JSX.Element {
  return (
    <Box marginBottom={3}>
      <Heading ax={{ marginBottom: 1 }}>{title}</Heading>
      <Flex alignItems="center" marginBottom={2}>
        {authorImage && (
          <Image
            src={authorImage}
            ax={{
              width: 32,
              height: 32,
              borderRadius: 'pill',
              objectFit: 'contain',
              marginRight: 2,
              backgroundColor: 'imagePlaceholder',
            }}
            alt={`Photo of ${authorName}`}
          />
        )}
        <Text
          ax={{
            fontSize: 1,
            color: 'byline',
            lineHeight: 1,
            marginBottom: 0,
            marginRight: 3,
          }}
        >
          {authorName}
        </Text>
        {tags.map((tag) => (
          <Badge key={tag} ax={{ marginRight: 1 }}>
            {tag}
          </Badge>
        ))}
      </Flex>
      <Text>{digest}</Text>
      <Text>
        <Link href="#" ax={{ fontWeight: 'bold', textDecoration: 'none' }}>
          Read more
        </Link>
      </Text>
    </Box>
  );
}

export { ArticlePreview, ArticlePreviewProps };
