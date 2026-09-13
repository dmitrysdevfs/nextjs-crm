'use client';

import React from 'react';
import Button from '@/app/components/button';

export default function DownloadCsvButton() {
  const handleDownload = () => {
    window.location.href = '/api/export/customers';
  };

  return <Button onClick={handleDownload}>Download CSV</Button>;
}
