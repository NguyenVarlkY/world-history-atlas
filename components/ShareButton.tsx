'use client';

import { Check, Share2 } from 'lucide-react';
import { useState } from 'react';

export default function ShareButton({ title }: { title: string }) {
  const [shared, setShared] = useState(false);
  const share = async () => { if (navigator.share) await navigator.share({ title, url: window.location.href }); else { await navigator.clipboard.writeText(window.location.href); setShared(true); window.setTimeout(() => setShared(false), 1800); } };
  return <button type="button" className="detail-share" onClick={share} aria-label="Chia sẻ bài viết">{shared ? <Check size={15} /> : <Share2 size={15} />}{shared ? 'Đã sao chép' : 'Chia sẻ'}</button>;
}
