'use client';

import { Moon, Sun } from 'lucide-react';

export default function DetailControls() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = nextTheme;
    window.localStorage.setItem('atlas-theme', nextTheme);
  };

  return <button type="button" className="atlas-detail-theme" onClick={toggleTheme} aria-label="Đổi giao diện sáng tối"><Sun size={14} /><Moon size={14} /></button>;
}
