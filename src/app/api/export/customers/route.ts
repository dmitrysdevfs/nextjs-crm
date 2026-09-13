import { NextRequest, NextResponse } from 'next/server';
import { Company } from '@/lib/api';

const PROJECT_TOKEN = process.env.NEXT_PUBLIC_PROJECT_TOKEN;

export async function GET(request: NextRequest) {
  const sourceUrl = request.nextUrl.searchParams.get('sourceUrl');
  const endpoint =
    sourceUrl || `https://${PROJECT_TOKEN}.mockapi.io/api/v1/companies`;

  const response = await fetch(endpoint);
  if (!response.ok) {
    return new NextResponse('Failed to fetch customers', { status: 502 });
  }

  const companies = (await response.json()) as Company[];

  const headers = ['ID', 'Title', 'Category', 'Country', 'Status', 'Joined Date'].join(',');
  const rows = companies.map((c) =>
    [
      `"${c.id}"`,
      `"${(c.title || '').replace(/"/g, '""')}"`,
      `"${(c.categoryTitle || '').replace(/"/g, '""')}"`,
      `"${(c.countryTitle || '').replace(/"/g, '""')}"`,
      `"${c.status || ''}"`,
      `"${c.joinedDate || ''}"`,
    ].join(','),
  );

  const csvContent = [headers, ...rows].join('\n');

  return new NextResponse(csvContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="customers.csv"',
    },
  });
}
