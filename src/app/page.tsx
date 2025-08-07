export default function Home() {
  return (
    <main className="min-h-screen p-8 relative text-foreground bg-background dark:bg-background">
      <section className="max-w-3xl mx-auto space-y-6 rounded-lg shadow-lg p-8 bg-card text-card-foreground">
        <h1 className="text-4xl font-bold text-primary">
          Willkommen auf meiner Seite
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          pharetra justo vel sem viverra, sed lobortis arcu gravida. Vivamus
          vitae magna efficitur, mattis ligula a, cursus purus.
        </p>

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>

        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt.
        </p>

        <button className="px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md shadow transition">
          Mehr erfahren
        </button>
      </section>
    </main>
  );
}
