// src/app/page.tsx
import ExampleComponent from '../components/ExampleComponent';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto">
        <ExampleComponent />
      </div>
    </main>
  );
}