import PageLayout from '@/components/PageLayout';
import ThumbsUpImage from '@/components/ThumbsUpImage';
import ContentPanel from '@/components/ContentPanel';
import Text from '@/components/Text';
import { ButtonLink } from '@/components/Button';
import Prize from './components/Prize';

export default function GameOver() {
  return (
    <PageLayout>
      <ThumbsUpImage />
      <ContentPanel>
        <div>
          <Text variant="secondary">Total score:</Text>
          <Prize />
        </div>
        <ButtonLink href="/game">Try Again</ButtonLink>
      </ContentPanel>
    </PageLayout>
  );
}
