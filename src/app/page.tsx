import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Data Fetching</h1>
      <nav>
        <ul>
          <li>
            <Link href="/client-users">Client-Side Rendering</Link>
          </li>
          <li>
            <Link href="/server-users">Server-Side Rendering</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
