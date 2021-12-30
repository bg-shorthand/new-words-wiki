import Button from '@atoms/button/Button';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <h1>
        <Link href="/">
          <a>New Words Wiki</a>
        </Link>
      </h1>
      <ul>
        <li>
          <Button>Sign-in</Button>
        </li>
        <li>
          <Button>Sign-up</Button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
