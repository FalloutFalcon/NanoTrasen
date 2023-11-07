export default function EmployeeDetailPage({ params }: { params: { slug: string } }) {
  return <main>
    <h3>{params.slug}</h3>
    <h2>Faction Affilation</h2>
    <p>Nantrason</p>
    <h2>Title</h2>
    <p>CEO of Nanotrason</p>
    <p>latin or something</p></main>
}