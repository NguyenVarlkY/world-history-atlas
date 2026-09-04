'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { geoNaturalEarth1, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import worldData from 'world-atlas/countries-110m.json';
import { HISTORY_EVENTS } from '@/data/history';

type MapEra = { year: string; color: string; places: { name: string; note: string; x: number; y: number; size: string }[] };
type Props = { era: MapEra };

const LOCATIONS: Record<string, [number, number]> = {
  'Lưỡi liềm màu mỡ': [43, 34], 'Hoàng Hà': [113, 35], 'Thung lũng Indus': [70, 30],
  'Ai Cập': [31, 27], 'Lưỡng Hà': [44, 33], Indus: [70, 30], 'Hy Lạp': [23, 38],
  'Ba Tư': [54, 32], 'Ấn Độ': [78, 22], 'Trung Hoa': [105, 35], Mali: [-4, 17],
  Baghdad: [44, 33], 'Mông Cổ': [103, 47], Angkor: [104, 13], London: [-.1, 51.5],
  'New York': [-74, 40.7], Mumbai: [72.9, 19], Tokyo: [139.7, 35.7],
  'San Francisco': [-122.4, 37.8], 'São Paulo': [-46.6, -23.5], Lagos: [3.4, 6.5],
  Singapore: [103.8, 1.3], Seoul: [126.9, 37.6],
};

type WorldTopology = { objects: { countries: { type: string; geometries: unknown[] } } };

export default function RealWorldMap({ era }: Props) {
  const router = useRouter();
  const [scale, setScale] = useState(1);
  const topology = worldData as unknown as WorldTopology;
  const countries = useMemo(() => feature(topology as never, topology.objects.countries as never) as unknown as { features: { id?: string; properties?: { name?: string }; geometry: unknown }[] }, [topology]);
  const projection = useMemo(() => geoNaturalEarth1().fitSize([1000, 500], countries as never), [countries]);
  const path = useMemo(() => geoPath(projection), [projection]);

  return <div className="real-map" style={{ '--era-color': era.color } as React.CSSProperties}><div className="real-map-toolbar"><span>GEOGRAPHIC DATA / NATURAL EARTH</span><div><button type="button" onClick={() => setScale(value => Math.min(value + .2, 2.2))} aria-label="Phóng to bản đồ">+</button><button type="button" onClick={() => setScale(value => Math.max(value - .2, .8))} aria-label="Thu nhỏ bản đồ">−</button><button type="button" onClick={() => setScale(1)} aria-label="Đặt lại bản đồ">RESET</button></div></div><svg viewBox="0 0 1000 500" role="img" aria-label={`Bản đồ thế giới năm ${era.year}`}><g transform={`translate(${500 - scale * 500} ${250 - scale * 250}) scale(${scale})`}>{countries.features.map((country, index) => <path className="real-country" d={path(country as never) ?? undefined} key={country.id ?? index} aria-label={country.properties?.name ?? 'Country'} onClick={() => country.properties?.name && router.push(`/countries/${encodeURIComponent(country.properties.name)}`)} />)}{era.places.map(place => { const coordinates = LOCATIONS[place.name]; if (!coordinates) return null; const point = projection(coordinates); if (!point) return null; const linkedEvent = HISTORY_EVENTS.find(event => event.title.vi.toLowerCase().includes(place.name.toLowerCase()) || event.region.vi.toLowerCase().includes(place.name.toLowerCase())); const openEvent = () => linkedEvent && router.push(`/events/${linkedEvent.id}`); return <g className={`real-marker ${linkedEvent ? 'clickable' : ''}`} key={place.name} transform={`translate(${point[0]} ${point[1]})`} role={linkedEvent ? 'button' : undefined} tabIndex={linkedEvent ? 0 : undefined} aria-label={`${place.name}: ${place.note}`} onClick={openEvent} onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openEvent(); } }}><circle r={place.size === 'large' ? 6 : 4} /><text x="10" y="3">{place.name}</text><title>{place.name}: {place.note}{linkedEvent ? ' - Xem bài viết' : ''}</title></g>; })}</g></svg><div className="real-map-legend"><span><i /> BIÊN GIỚI QUỐC GIA</span><span><b /> ĐIỂM LỊCH SỬ</span><span>{scale.toFixed(1)}x</span></div></div>;
}
