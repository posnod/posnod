"use client";

import Button from '@/components/foundations/Button';

export function AuthButtons() {
  const handleRedirect = () => {
    window.location.href = 'https://auth.posnod.com';
  };

  return (
    <div className="flex items-center gap-3">
      <Button asChild={false} onClick={handleRedirect} variant="ghost" size="sm" radius="32">
        Masuk
      </Button>
      <Button asChild={false} onClick={handleRedirect} variant="fill" size="sm" radius="32">
        Gabung
      </Button>
    </div>
  );
}