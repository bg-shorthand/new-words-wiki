import Content from '@containers/content/Content';
import { wordApi } from 'api/word';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import style from './SideMenu.module.scss';

const SideMenu = () => {
  const [topWords, setTopWords] = useState<string[]>([]);
  const [recentWords, setRecentWords] = useState<string[]>([]);
  const [topUsers, setTopUsers] = useState<string[]>([]);

  useEffect(() => {
    const getSideMenuData = async () => {
      const { data } = await wordApi.getSideMenuData();
      const { topWords, recentWords, topUsers } = data.data;
      setTopWords(topWords);
      setRecentWords(recentWords);
      setTopUsers(topUsers);
    };
    getSideMenuData();
  }, []);

  return topWords.length ? (
    <section className={style.container}>
      <Content>
        <article>
          <h1>인기 신조어</h1>
          <ul>
            {topWords.map((word, i) => {
              return (
                <li>
                  <Link href={'/words/' + word}>{i + 1 + ': ' + word}</Link>
                </li>
              );
            })}
          </ul>
        </article>
      </Content>
      <Content>
        <article>
          <h1>최근 등록</h1>
          <ul>
            {recentWords.map((word) => {
              return (
                <li>
                  <Link href={'/words/' + word}>{word}</Link>
                </li>
              );
            })}
          </ul>
        </article>
      </Content>
      <Content>
        <article>
          <h1>사용자 랭킹</h1>
          <ul>
            {topUsers.map((user, i) => {
              return <li>{i + 1 + ': ' + user}</li>;
            })}
          </ul>
        </article>
      </Content>
    </section>
  ) : null;
};

export default SideMenu;
