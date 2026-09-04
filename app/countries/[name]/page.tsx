import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Globe2, History, MapPin } from 'lucide-react';
import { HISTORY_EVENTS } from '@/data/history';

type Props = { params: Promise<{ name: string }> };

const COUNTRY_CONTEXT: Record<string, { vi: string; en: string }> = {
  Egypt: { vi: 'Ai Cập là một trong những trung tâm văn minh lâu đời nhất bên sông Nile, nổi bật với nhà nước tập quyền, chữ tượng hình và kiến trúc monumental.', en: 'Egypt was one of the oldest centers of civilization along the Nile, known for centralized rule, hieroglyphs and monumental architecture.' },
  China: { vi: 'Lịch sử Trung Hoa được định hình bởi các triều đại, hệ thống quan liêu, chữ viết và những mạng lưới trao đổi nối Đông Á với thế giới.', en: 'Chinese history was shaped by dynasties, bureaucracy, writing and networks connecting East Asia with the wider world.' },
  India: { vi: 'Lịch sử Ấn Độ là dòng chảy đa dạng của các đô thị, tôn giáo, đế chế và truyền thống tri thức trải dài qua tiểu lục địa.', en: 'Indian history is a diverse stream of cities, religions, empires and intellectual traditions across the subcontinent.' },
  Greece: { vi: 'Hy Lạp cổ đại để lại ảnh hưởng sâu rộng trong triết học, chính trị, nghệ thuật và khoa học của thế giới Địa Trung Hải.', en: 'Ancient Greece had a lasting influence on philosophy, politics, art and science across the Mediterranean world.' },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;
  const country = decodeURIComponent(name);
  return { title: `${country} | Atlas lịch sử thế giới`, description: `Lịch sử, sự kiện và nền văn minh của ${country}.` };
}

export default async function CountryPage({ params }: Props) {
  const { name } = await params;
  const country = decodeURIComponent(name);
  const context = COUNTRY_CONTEXT[country] ?? { vi: `Khám phá lịch sử của ${country} qua các sự kiện, vùng văn hóa và mạng lưới đã định hình quốc gia này.`, en: `Explore the history of ${country} through the events, cultures and networks that shaped the country.` };
  const events = HISTORY_EVENTS.filter(event => `${event.title.en} ${event.region.en} ${event.title.vi} ${event.region.vi}`.toLowerCase().includes(country.toLowerCase())).slice(0, 12);
  return <main className="atlas-detail-page"><header className="atlas-detail-header"><Link href="/" className="atlas-detail-logo"><Globe2 size={18} /> ATLAS / 01</Link><span>COUNTRY HISTORY / LỊCH SỬ QUỐC GIA</span><Link href="/" className="atlas-detail-back"><ArrowLeft size={15} /> ATLAS</Link></header><article className="atlas-detail-shell"><Link href="/" className="atlas-detail-return"><ArrowLeft size={15} /> Quay lại bản đồ / Back to map</Link><div className="atlas-detail-kicker"><span>COUNTRY PROFILE</span><span>{country.toUpperCase()}</span></div><div className="atlas-detail-heading"><div><p className="atlas-eyebrow"><MapPin size={12} /> HỒ SƠ QUỐC GIA / COUNTRY PROFILE</p><h1>{country}</h1><h2>Lịch sử qua không gian và thời gian</h2></div><div className="atlas-detail-index"><History size={28} /></div></div><p className="atlas-detail-lead">{context.vi}</p><p className="atlas-detail-lead english">{context.en}</p><div className="atlas-detail-columns"><section><div className="atlas-detail-label">LỊCH SỬ / HISTORY</div><h3>Một dòng chảy nhiều lớp</h3><p>Lịch sử của {country} không phải là một đường thẳng duy nhất. Nó được tạo nên bởi sự giao thoa giữa địa lý, ngôn ngữ, kinh tế, quyền lực và đời sống của nhiều cộng đồng.</p><p>The history of {country} is not a single straight line. It was shaped by the interaction of geography, language, economies, power and the lives of many communities.</p></section><section><div className="atlas-detail-label">ATLAS INDEX</div><h3>{events.length} sự kiện liên quan</h3><p>Các mốc dưới đây được lấy từ kho dữ liệu Atlas và sẽ được mở rộng khi hệ thống lịch sử quốc gia được bổ sung.</p><p>These milestones come from the Atlas dataset and will grow as the country history collection expands.</p></section></div><section className="atlas-country-events"><div className="atlas-detail-label">DÒNG THỜI GIAN / TIMELINE</div><div className="atlas-country-event-list">{events.length ? events.map(event => <Link href={`/events/${event.id}`} className="atlas-country-event" key={event.id}><span>{event.year}</span><div><strong>{event.title.vi}</strong><small>{event.title.en}</small></div><ArrowRight size={15} /></Link>) : <p className="atlas-empty">Chưa có sự kiện được gắn trực tiếp với quốc gia này.</p>}</div></section></article><footer className="atlas-detail-footer"><span>ATLAS / WORLD HISTORY</span><span>COUNTRY ARCHIVE</span><Link href="/">VỀ BẢN ĐỒ <ArrowRight size={14} /></Link></footer></main>;
}
