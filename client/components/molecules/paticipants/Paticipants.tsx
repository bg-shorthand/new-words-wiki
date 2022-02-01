import Heading from '@atoms/heading/Heading';
import Article from '@containers/article/Article';
import generateTierImage from 'modules/generateTierImage';
import Image from 'next/image';

interface PaticipantsProps {
  paticipants: { nickname: string; score: number }[];
}

const Paticipants = ({ paticipants }: PaticipantsProps) => {
  return (
    <Article>
      <Heading level={1}>
        <i aria-hidden className="fas fa-user-tag"></i> 참여자
      </Heading>
      <ul>
        {paticipants
          ? paticipants.map(({ nickname, score }) => {
              return (
                <li key={nickname}>
                  {nickname} <Image src={generateTierImage(score)} width={12} height={12} />
                </li>
              );
            })
          : null}
      </ul>
    </Article>
  );
};

export default Paticipants;
