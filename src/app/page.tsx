import { ButtonLink } from '@/components/Button';
import ContentPanel from '@/components/ContentPanel';
import PageLayout from '@/components/PageLayout';
import PageTitle from '@/components/PageTitle';
import ThumbsUpImage from '@/components/ThumbsUpImage';

export default function Home() {
  return (
    <PageLayout withBackground>
      <ThumbsUpImage />
      <ContentPanel>
        <PageTitle>
          Who wants to be <br className="not-visible-md" /> a millionaire?
        </PageTitle>
        <ButtonLink href="/game">Start</ButtonLink>
      </ContentPanel>
    </PageLayout>
  );
}
