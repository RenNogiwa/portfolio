export const SECTIONS = {
  HERO: {
    id: 'hero',
    title: 'REN NOGIWA',
    subtitle: 'Data Analyst | BI Developer'
  },
  ABOUT: {
    id: 'about',
    title: '自己紹介',
    content: 'ニューヨークを拠点とするデータアナリスト・BIデベロッパーとして、複雑なデータを実用的な洞察に変換することを専門としています。データ分析とビジュアライゼーションの分野で5年以上の経験を持ち、明確で効果的なダッシュボードを通じて、企業がデータに基づいた意思決定を行えるようサポートしています。'
  },
  PROJECTS: {
    id: 'projects',
    title: 'プロジェクト',
    subtitle: 'データ分析とビジュアライゼーションの実績'
  }
} as const;

export type SectionId = typeof SECTIONS[keyof typeof SECTIONS]['id'];

export const SECTION_ORDER = [
  SECTIONS.HERO.id,
  SECTIONS.ABOUT.id,
  SECTIONS.PROJECTS.id
] as const; 