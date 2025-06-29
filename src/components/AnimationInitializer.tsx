'use client';

import { useEffect } from 'react';
import { initializeAnimations } from '@/utils/animations';

export default function AnimationInitializer() {
  useEffect(() => {
    return initializeAnimations();
  }, []);

  return null;
}
