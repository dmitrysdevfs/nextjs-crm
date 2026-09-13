import React from 'react';
import Header from '@/app/components/header';
import DownloadCsvButton from '@/app/components/download-csv-button';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard</Header>
      <div className="flex items-center justify-end px-10 pt-7">
        <DownloadCsvButton />
      </div>
    </>
  );
}