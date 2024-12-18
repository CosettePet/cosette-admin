import Image from 'next/image';

export default function Home() {
  return (
    <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <ol className="list-inside list-decimal text-center font-[family-name:var(--font-geist-mono)] text-sm sm:text-left">
        <li className="mb-2">
          Get started by editing{' '}
          <code className="rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]">
            app/page.tsx
          </code>
          .
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Image
          className="dark:invert"
          src="/vercel.svg"
          alt="Vercel logomark"
          width={20}
          height={20}
        />
        Deploy now
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read our docs
        </a>
      </div>
    </main>
  );
}
