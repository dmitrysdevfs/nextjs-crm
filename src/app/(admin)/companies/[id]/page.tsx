import Header from '@/app/components/header';
import { notFound } from 'next/navigation';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const idNum = Number.parseInt(id);
  if (Number.isNaN(idNum)) {
    notFound();
  }

  return (
    <>
      <Header>Companies ({id})</Header>
    </>
  );
}
