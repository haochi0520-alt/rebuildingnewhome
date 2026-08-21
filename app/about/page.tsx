export const metadata = {
  title: '關於 - 都市更新整合',
  description: '了解本站作者與網站背景',
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">關於本站</h1>

      <article className="prose prose-lg max-w-none">
        <h2>網站介紹</h2>
        <p>
          歡迎來到「都市更新整合」部落格。本站專注於探討城市永續發展、社區改造與都市更新的相關議題。
        </p>

        <h2>主要內容</h2>
        <ul>
          <li>都市更新理論與實踐</li>
          <li>社區整合與參與</li>
          <li>永續城市發展</li>
          <li>相關案例研究與分析</li>
          <li>政策與法律框架</li>
        </ul>

        <h2>關於作者</h2>
        <p>
          本站由對都市更新與社區發展充滿熱情的作者創立。通過分享知識與經驗，希望能促進更多人對都市永續發展的了解與重視。
        </p>

        <h2>聯絡方式</h2>
        <p>
          如有任何建議或合作機會，歡迎透過以下方式聯絡：
        </p>
        <ul>
          <li>Email: haochi0520@gmail.com</li>
          <li>GitHub: <a href="https://github.com/haochi0520-alt">haochi0520-alt</a></li>
        </ul>
      </article>
    </div>
  );
}
