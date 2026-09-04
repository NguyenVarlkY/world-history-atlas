import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, CalendarDays, Globe2, Layers3 } from 'lucide-react';
import { HISTORY_EVENTS } from '@/data/history';
import DetailVisual from '@/components/DetailVisual';
import ReadingProgress from '@/components/ReadingProgress';
import ShareButton from '@/components/ShareButton';

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return HISTORY_EVENTS.map(event => ({ id: String(event.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const event = HISTORY_EVENTS.find(item => item.id === Number(id));
  if (!event) return { title: 'Không tìm thấy | Atlas' };
  return {
    title: `${event.title.vi} | Atlas lịch sử thế giới`,
    description: event.summary.vi,
    alternates: { canonical: `/events/${event.id}` },
    keywords: event.keywords,
    openGraph: { title: event.title.vi, description: event.summary.vi, type: 'article' },
  };
}

export default async function EventPage({ params }: Props) {
  const { id } = await params;
  const event = HISTORY_EVENTS.find(item => item.id === Number(id));
  if (!event) return <main className="atlas-detail-page"><div className="atlas-detail-shell"><p className="atlas-eyebrow">404 / NOT FOUND</p><h1>Không tìm thấy sự kiện</h1><Link className="atlas-detail-back" href="/">Quay lại Atlas <ArrowRight size={15} /></Link></div></main>;

  const related = HISTORY_EVENTS.filter(item => item.category.vi === event.category.vi && item.id !== event.id).slice(0, 3);
  const imageByTitle: Record<string, string> = { 'Kim tự tháp Giza': 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg', 'Đế chế La Mã': 'https://upload.wikimedia.org/wikipedia/commons/d/de/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg', 'Angkor Wat': 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Angkor_Wat.jpg', 'Taj Mahal': 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Taj_Mahal_in_March_2004.jpg', 'Con người lên Mặt Trăng': 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1400&q=85' };
  const image = imageByTitle[event.title.vi] ?? (event.category.vi === 'Kiến trúc' ? 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1400&q=85' : event.category.vi === 'Đế chế' ? 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1400&q=85' : event.category.vi === 'Công nghệ' ? 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85' : 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=85');
  return <main className="atlas-detail-page"><ReadingProgress />
    <header className="atlas-detail-header"><Link href="/" className="atlas-detail-logo"><Globe2 size={18} /> ATLAS / 01</Link><span>LỊCH SỬ THẾ GIỚI / WORLD HISTORY</span><Link href="/#explore" className="atlas-detail-back"><ArrowLeft size={15} /> THƯ VIỆN</Link></header>
    <article className="atlas-detail-shell">
      <Link href="/#explore" className="atlas-detail-return"><ArrowLeft size={15} /> Quay lại thư viện / Back to library</Link>
      <div className="atlas-detail-kicker"><span>{event.year}</span><span>{event.category.vi} / {event.category.en}</span>{event.status === 'draft' && <span className="atlas-draft-label">DRAFT / BIÊN TẬP</span>}</div>
      <DetailVisual category={`${event.category.vi} ${event.category.en}`} title={event.title.vi} image={image} />
      <div className="atlas-detail-heading"><div><p className="atlas-eyebrow">{event.region.vi} / {event.region.en}</p><h1>{event.title.vi}</h1><h2>{event.title.en}</h2></div><div className="atlas-detail-index">{String(event.id).padStart(2, '0')}<small>/ {HISTORY_EVENTS.length}</small></div></div>
      <p className="atlas-detail-lead">{event.summary.vi}</p><p className="atlas-detail-lead english">{event.summary.en}</p><ShareButton title={event.title.vi} />
      <div className="atlas-detail-columns"><section><div className="atlas-detail-label"><BookOpen size={15} /> BỐI CẢNH / CONTEXT</div><h3>Một thế giới đang thay đổi</h3><p>{event.context.vi}</p><p>{event.context.en}</p></section><section><div className="atlas-detail-label"><Layers3 size={15} /> TẠI SAO QUAN TRỌNG / WHY IT MATTERS</div><h3>Ảnh hưởng vượt qua thời đại</h3><p>{event.impact.vi}</p><p>{event.impact.en}</p></section></div>
      <section className="atlas-detail-deep"><div className="atlas-detail-label">DÒNG THỜI GIAN / TIMELINE</div><div className="atlas-deep-line"><div><span>01</span><strong>Điều kiện hình thành</strong><p>Địa lý, nhu cầu xã hội và công nghệ của thời kỳ này tạo nền tảng cho sự kiện.</p></div><div><span>02</span><strong>Dấu mốc chính</strong><p>{event.summary.vi} / {event.summary.en}</p></div><div><span>03</span><strong>Ảnh hưởng về sau</strong><p>Những thay đổi từ sự kiện tiếp tục được kế thừa và tranh luận qua nhiều thế hệ.</p></div></div></section>
      <section className="atlas-detail-context"><div><div className="atlas-detail-label">NHÂN VẬT & LỰC LƯỢNG / ACTORS</div><h3>Con người đứng sau dấu mốc</h3><p>{event.editorial?.actors.vi ?? `Nhà lãnh đạo, cộng đồng, học giả, thương nhân và những người bình thường đều góp phần tạo nên ${event.title.vi.toLowerCase()}.`}</p><p>{event.editorial?.actors.en ?? `Leaders, communities, scholars, merchants and ordinary people all shaped ${event.title.en.toLowerCase()}.`}</p></div><div><div className="atlas-detail-label">NGUYÊN NHÂN & HỆ QUẢ / CAUSES & EFFECTS</div><h3>Một thay đổi tạo ra nhiều thay đổi</h3><p>{event.editorial?.causes.vi ?? 'Để hiểu sự kiện, cần nhìn cả nguyên nhân trước đó và hệ quả sau đó.'}</p><p>{event.editorial?.causes.en ?? 'Understanding this event means looking at both its causes and consequences.'}</p><p className="atlas-detail-secondary">{event.editorial?.consequences.vi ?? 'Những thay đổi từ sự kiện tiếp tục được kế thừa và tranh luận qua nhiều thế hệ.'}</p><p className="atlas-detail-secondary">{event.editorial?.consequences.en ?? 'Its changes continued to be inherited and debated across generations.'}</p></div></section>
      {event.editorial && <section className="atlas-detail-context"><div><div className="atlas-detail-label">DIỄN BIẾN / CHRONOLOGY</div><h3>Trình tự lịch sử</h3><p>{event.editorial.chronology.vi}</p><p>{event.editorial.chronology.en}</p></div><div><div className="atlas-detail-label">TRANH LUẬN / DEBATE</div><h3>Điều còn được nghiên cứu</h3><p>{event.editorial.debate.vi}</p><p>{event.editorial.debate.en}</p><p className="atlas-detail-confidence">Độ chắc chắn / Confidence: {event.editorial.confidence}</p></div></section>}
      <section className="atlas-detail-source"><div className="atlas-detail-label">PHƯƠNG PHÁP / SOURCES</div><p>Atlas trình bày nội dung giáo dục ở dạng cô đọng. Bản phát hành chính thức nên được đối chiếu với tài liệu học thuật, bảo tàng, thư viện và các nguồn sơ cấp phù hợp với từng khu vực.</p><p>Atlas presents an educational overview. A full release should cross-check this article against scholarship, museums, libraries and relevant primary sources.</p><div className="atlas-source-list">{event.sources?.map(source => <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>{source.label}</a>)}<span>Educational overview</span></div></section>
      <div className="atlas-detail-facts"><div><CalendarDays size={17} /><span><small>NĂM / YEAR</small><strong>{event.year}</strong></span></div><div><Globe2 size={17} /><span><small>KHU VỰC / REGION</small><strong>{event.region.vi} / {event.region.en}</strong></span></div><div><BookOpen size={17} /><span><small>CHỦ ĐỀ / TOPIC</small><strong>{event.category.vi} / {event.category.en}</strong></span></div></div>
      <section className="atlas-related"><div className="atlas-detail-label">ĐỌC TIẾP / CONTINUE READING</div><div className="atlas-related-grid">{related.map(item => <Link href={`/events/${item.id}`} className="atlas-related-card" key={item.id}><span>{item.year}</span><h3>{item.title.vi}</h3><small>{item.title.en}</small><ArrowRight size={15} /></Link>)}</div></section>
    </article>
    <footer className="atlas-detail-footer"><span>ATLAS / LỊCH SỬ THẾ GIỚI</span><span>NỘI DUNG GIÁO DỤC / EDUCATIONAL CONTENT</span><Link href="/">VỀ TRANG CHỦ <ArrowRight size={14} /></Link></footer>
  </main>;
}
