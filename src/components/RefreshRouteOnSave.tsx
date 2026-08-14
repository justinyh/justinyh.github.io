'use client'
import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react'
import { useRouter } from 'next/navigation.js'
import React from 'react'
import config from "@payload-config"

const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production';

export const RefreshRouteOnSave: React.FC = () => {
  const router = useRouter()

  return (
    <PayloadLivePreview
      refresh={() => router.refresh()}
      serverURL={`https://${isProduction 
    ? process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL 
    : process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}`}
    />
  )
}