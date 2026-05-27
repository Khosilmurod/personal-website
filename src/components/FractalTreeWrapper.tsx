'use client'

import dynamic from 'next/dynamic'

const FractalTree = dynamic(
  () => import('./FractalTree').then((m) => m.FractalTree),
  { ssr: false }
)

export function FractalTreeWrapper() {
  return <FractalTree />
}
