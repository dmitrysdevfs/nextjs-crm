'use client';

import { useParams, useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export default function Page() {
  const { id } = useParams() as { id: string };
  const router = useRouter();

  return (
    <PromotionFormModal companyId={id} show onClose={() => router.back()} />
  );
}
