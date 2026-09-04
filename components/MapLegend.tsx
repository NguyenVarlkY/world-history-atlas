import { Map, MousePointer2 } from 'lucide-react';

export default function MapLegend() {
  return <div className="map-legend-panel" aria-label="Chú giải bản đồ"><div><Map size={15} /><span>Biên giới quốc gia</span></div><div><i className="map-legend-dot" /><span>Điểm lịch sử</span></div><div><MousePointer2 size={14} /><span>Bấm để xem chi tiết</span></div></div>;
}
