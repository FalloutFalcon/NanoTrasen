export default function EmployeeDetailPage({ params }: { params: { slug: string } }) {
  return <div>Employee Name: {params.slug}</div>
}