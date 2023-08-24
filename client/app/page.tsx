import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const handleClick = () => {
    console.log(styles);
  };

  return (
    <main>
      <div>
        <button>Click</button>
      </div>
    </main>
  );
}
