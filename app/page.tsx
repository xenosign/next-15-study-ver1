import Link from 'next/link';

export default function Home() {
  console.log('서버 콘솔 확인 용, 실행 중');
  return (
    <main>
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <Link href="/about">About Us as Link</Link>
      <br />
      <a href="/about">About Us as Anchor</a>
    </main>
  );
}
