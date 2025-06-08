import type { Project } from '../types/Project';

export const projects: Project[] = [
  {
    title: 'ポートフォリオウェブサイト',
    description: 'Reactとモダンなテクノロジーを使用した個人ポートフォリオサイト',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'GitHub Pages'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
    details: {
      overview: 'モダンなWeb技術を活用し、レスポンシブで高パフォーマンスな個人ポートフォリオサイトを開発しました。ReactとTypeScriptを使用することで、型安全性と保守性を確保し、Tailwind CSSによる効率的なスタイリングを実現しました。',
      features: [
        'レスポンシブデザイン',
        'ダークモード対応',
        'アニメーションエフェクト',
        'コンタクトフォーム機能',
        'プロジェクトギャラリー',
        'スクロールアニメーション',
        'SEO最適化',
        'パフォーマンス最適化',
        'アクセシビリティ対応',
        'クロスブラウザ対応'
      ],
      impact: 'ウェブサイトのパフォーマンススコアが95%を達成し、モバイルでの使用性を大幅に向上させました。また、アクセシビリティの改善により、より多くのユーザーが快適にサイトを利用できるようになりました。',
      link: 'https://github.com/RenNogiwa/portfolio'
    }
  },
  {
    title: 'ECサイトプラットフォーム',
    description: 'リアルタイム在庫管理機能を備えたECサイト',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.IO', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
    details: {
      overview: '小規模ビジネス向けのカスタマイズ可能なECプラットフォームを開発しました。リアルタイムの在庫管理と注文処理システムを実装し、効率的な運営を可能にしました。また、セキュアな決済システムの統合により、安全な取引を実現しています。',
      features: [
        'リアルタイム在庫管理',
        '決済システム統合',
        '注文管理ダッシュボード',
        'カスタマーサポート機能',
        '商品カテゴリ管理',
        '在庫アラートシステム',
        '売上分析レポート',
        '顧客管理システム',
        '配送管理機能',
        'レビュー・評価システム'
      ],
      impact: '導入企業の売上が平均30%増加し、運営コストを20%削減することに成功しました。また、在庫管理の効率化により、在庫切れによる機会損失を大幅に削減しました。',
      link: 'https://github.com/RenNogiwa/ec-platform'
    }
  },
  {
    title: 'レスポンシブウェブサイト',
    description: '地域ビジネス向けのモバイルファーストウェブサイト',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Google Analytics'],
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&auto=format&fit=crop&q=60',
    details: {
      overview: '地域の小規模ビジネス向けに、モバイルファーストアプローチでウェブサイトを開発しました。ユーザーの利便性を重視し、直感的なナビゲーションと高速な読み込みを実現しました。また、地域特性を考慮したコンテンツ構成により、ターゲットユーザーへの効果的な情報発信を可能にしています。',
      features: [
        'モバイルファーストデザイン',
        'SEO最適化',
        'パフォーマンス最適化',
        'SNS統合',
        'お問い合わせフォーム',
        '店舗情報マップ',
        '営業時間表示',
        'ニュース・お知らせ機能',
        'ギャラリー機能',
        '予約システム連携'
      ],
      impact: 'モバイルからのアクセスが50%増加し、コンバージョン率が25%向上しました。また、検索エンジンでの表示順位が改善され、新規顧客の獲得が大幅に増加しました。',
      link: 'https://github.com/RenNogiwa/responsive-website'
    }
  },
  {
    title: 'データ可視化ダッシュボード',
    description: 'インタラクティブなデータ可視化を提供するダッシュボード',
    technologies: ['Python', 'Plotly', 'Dash', 'Pandas', 'Docker'],
    image: 'https://images.unsplash.com/photo-1581093588401-22a48243388d?w=800&auto=format&fit=crop&q=60',
    details: {
      overview: '大量データを視覚的に分析できるダッシュボードを構築しました。PlotlyとDashを用いてリアルタイムデータ更新や複数データソースの統合を実装しました。',
      features: [
        'インタラクティブグラフ',
        'リアルタイムデータ更新',
        'フィルター機能',
        'データのエクスポート',
        'ダッシュボード共有',
        'カスタムテーマ',
        'レスポンシブレイアウト',
        'ユーザー権限管理',
        'ログ分析',
        'マルチデータソース'
      ],
      impact: 'データ分析のスピードが向上し、ビジネスの意思決定を迅速化しました。ユーザーからのフィードバックで操作性が高く評価されました。',
      link: 'https://github.com/RenNogiwa/data-dashboard'
    }
  },
  {
    title: '機械学習モデルデプロイ',
    description: 'FlaskとDockerを使用した機械学習モデルのデプロイメント',
    technologies: ['Python', 'Flask', 'scikit-learn', 'Docker', 'AWS'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60',
    details: {
      overview: '機械学習モデルをWebサービスとして提供するため、FlaskでREST APIを構築しDockerでコンテナ化しました。AWS上にデプロイし、継続的デリバリーを実現しています。',
      features: [
        'REST API',
        'Dockerコンテナ化',
        'モデル自動リロード',
        'API認証',
        'ロギング',
        'パフォーマンス監視',
        'CI/CDパイプライン',
        'スケーラブルな構成',
        'テスト自動化',
        'クラウドデプロイ'
      ],
      impact: '予測サービスのダウンタイムを削減し、リリースサイクルを短縮しました。新モデルのデプロイが迅速に行えるようになりました。',
      link: 'https://github.com/RenNogiwa/ml-deploy'
    }
  }
];
