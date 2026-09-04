export type Milestone = {
  id: number;
  year: number;
  title: { vi: string; en: string };
  description: { vi: string; en: string };
  period: { vi: string; en: string };
};

export const MAJOR_MILESTONES: Milestone[] = [
  { id: 1, year: -10000, title: { vi: 'Nông nghiệp định cư', en: 'Settled agriculture' }, description: { vi: 'Con người bắt đầu canh tác và xây dựng cộng đồng lâu dài.', en: 'People began farming and building permanent communities.' }, period: { vi: 'Tiền sử', en: 'Prehistory' } },
  { id: 2, year: -3500, title: { vi: 'Sự ra đời của đô thị', en: 'The rise of cities' }, description: { vi: 'Các thành phố đầu tiên xuất hiện dọc những dòng sông lớn.', en: 'The first cities emerged along major rivers.' }, period: { vi: 'Cổ đại', en: 'Antiquity' } },
  { id: 3, year: -3200, title: { vi: 'Chữ viết', en: 'Writing' }, description: { vi: 'Chữ viết giúp lưu giữ luật pháp, giao dịch và ký ức xã hội.', en: 'Writing preserved law, trade and social memory.' }, period: { vi: 'Cổ đại', en: 'Antiquity' } },
  { id: 4, year: -2560, title: { vi: 'Kim tự tháp Giza', en: 'Great Pyramid of Giza' }, description: { vi: 'Một biểu tượng kiến trúc của nhà nước Ai Cập cổ đại.', en: 'An architectural symbol of ancient Egyptian state power.' }, period: { vi: 'Cổ đại', en: 'Antiquity' } },
  { id: 5, year: -1750, title: { vi: 'Bộ luật Hammurabi', en: 'Code of Hammurabi' }, description: { vi: 'Một trong những bộ luật thành văn nổi tiếng nhất của Babylon.', en: 'One of Babylon’s best-known written legal codes.' }, period: { vi: 'Cổ đại', en: 'Antiquity' } },
  { id: 6, year: -776, title: { vi: 'Olympic cổ đại', en: 'Ancient Olympics' }, description: { vi: 'Các cuộc thi thể thao trở thành nghi lễ lớn tại Olympia.', en: 'Athletic contests became a major ritual at Olympia.' }, period: { vi: 'Cổ điển', en: 'Classical age' } },
  { id: 7, year: -500, title: { vi: 'Kỷ nguyên tư tưởng', en: 'The age of ideas' }, description: { vi: 'Triết học, dân chủ và các tôn giáo lớn phát triển mạnh.', en: 'Philosophy, democracy and major religions flourished.' }, period: { vi: 'Cổ điển', en: 'Classical age' } },
  { id: 8, year: -27, title: { vi: 'Đế chế La Mã', en: 'Roman Empire' }, description: { vi: 'La Mã trở thành thế lực lớn quanh Địa Trung Hải.', en: 'Rome became a major power around the Mediterranean.' }, period: { vi: 'Cổ điển', en: 'Classical age' } },
  { id: 9, year: 622, title: { vi: 'Kỷ nguyên Hồi giáo', en: 'The Islamic age' }, description: { vi: 'Một nền văn minh mới phát triển nhanh tại Arabia và Tây Á.', en: 'A new civilization grew rapidly in Arabia and West Asia.' }, period: { vi: 'Trung đại', en: 'Medieval' } },
  { id: 10, year: 800, title: { vi: 'Mạng lưới tri thức', en: 'Networks of knowledge' }, description: { vi: 'Các trung tâm học thuật nối liền nhiều truyền thống tri thức.', en: 'Scholarly centers connected many intellectual traditions.' }, period: { vi: 'Trung đại', en: 'Medieval' } },
  { id: 11, year: 1206, title: { vi: 'Đế chế Mông Cổ', en: 'Mongol Empire' }, description: { vi: 'Các tuyến đường Á - Âu được kết nối trong quy mô chưa từng có.', en: 'Eurasian routes connected on an unprecedented scale.' }, period: { vi: 'Trung đại', en: 'Medieval' } },
  { id: 12, year: 1450, title: { vi: 'Kỷ nguyên in ấn', en: 'The age of print' }, description: { vi: 'Sách và ý tưởng lan truyền nhanh hơn qua kỹ thuật in.', en: 'Books and ideas spread faster through printing.' }, period: { vi: 'Cận đại', en: 'Early modern' } },
  { id: 13, year: 1492, title: { vi: 'Trao đổi xuyên Đại Tây Dương', en: 'The Columbian exchange' }, description: { vi: 'Các châu lục bị kết nối trong một quá trình đầy biến động.', en: 'Continents became connected through a turbulent exchange.' }, period: { vi: 'Cận đại', en: 'Early modern' } },
  { id: 14, year: 1517, title: { vi: 'Cải cách tôn giáo', en: 'The Reformation' }, description: { vi: 'Tranh luận tôn giáo làm thay đổi chính trị và xã hội châu Âu.', en: 'Religious debate transformed European politics and society.' }, period: { vi: 'Cận đại', en: 'Early modern' } },
  { id: 15, year: 1687, title: { vi: 'Khoa học hiện đại', en: 'Modern science' }, description: { vi: 'Toán học và thực nghiệm định hình cách hiểu mới về tự nhiên.', en: 'Mathematics and experiment reshaped the study of nature.' }, period: { vi: 'Cận đại', en: 'Early modern' } },
  { id: 16, year: 1789, title: { vi: 'Cách mạng Pháp', en: 'French Revolution' }, description: { vi: 'Tư tưởng quyền công dân và chủ quyền nhân dân lan rộng.', en: 'Ideas of citizenship and popular sovereignty spread.' }, period: { vi: 'Cận đại', en: 'Modern era' } },
  { id: 17, year: 1760, title: { vi: 'Cách mạng công nghiệp', en: 'Industrial Revolution' }, description: { vi: 'Máy móc, nhà máy và đô thị hóa thay đổi lao động toàn cầu.', en: 'Machines, factories and cities transformed global labor.' }, period: { vi: 'Cận đại', en: 'Modern era' } },
  { id: 18, year: 1914, title: { vi: 'Chiến tranh thế giới', en: 'World wars' }, description: { vi: 'Chiến tranh công nghiệp làm thay đổi trật tự quốc tế.', en: 'Industrial war transformed the international order.' }, period: { vi: 'Thế kỷ 20', en: '20th century' } },
  { id: 19, year: 1945, title: { vi: 'Trật tự quốc tế mới', en: 'A new international order' }, description: { vi: 'Các thể chế toàn cầu được xây dựng để thúc đẩy hợp tác và hòa bình.', en: 'Global institutions formed to pursue cooperation and peace.' }, period: { vi: 'Thế kỷ 20', en: '20th century' } },
  { id: 20, year: 1989, title: { vi: 'Kỷ nguyên kết nối số', en: 'The digital age' }, description: { vi: 'Internet và công nghệ số làm thay đổi cách con người kết nối.', en: 'The internet and digital technology changed human connection.' }, period: { vi: 'Hiện đại', en: 'Contemporary' } },
];
