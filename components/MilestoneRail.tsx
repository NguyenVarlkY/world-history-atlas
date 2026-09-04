'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { MAJOR_MILESTONES } from '@/data/milestones';
import type { Locale } from '@/data/history';

export default function MilestoneRail({ locale }: { locale: Locale }) {
  return <section className="atlas-milestone-section container-port" id="milestones"><div className="atlas-section-heading"><div><p className="atlas-eyebrow">02 / {locale === 'vi' ? '20 MỐC LỚN' : '20 MAJOR MILESTONES'}</p><h2>{locale === 'vi' ? 'Những điểm ngoặt.' : 'The turning points.'}</h2></div><span className="atlas-library-count">20 / 20</span></div><div className="atlas-milestone-rail">{MAJOR_MILESTONES.map(milestone => <Link href={`/events/${Math.min(milestone.id, 50)}`} className="atlas-milestone" key={milestone.id}><span>{milestone.year < 0 ? `${Math.abs(milestone.year).toLocaleString()} TCN` : milestone.year}</span><h3>{milestone.title[locale]}</h3><p>{milestone.description[locale]}</p><small>{milestone.period[locale]}</small><ArrowRight size={15} /></Link>)}</div></section>;
}
