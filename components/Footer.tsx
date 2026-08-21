export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">關於本站</h3>
            <p className="text-gray-400">
              專注於都市更新與社區整合的個人部落格，分享相關知識與經驗。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">快速連結</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition">首頁</a></li>
              <li><a href="/blog" className="hover:text-white transition">部落格</a></li>
              <li><a href="/about" className="hover:text-white transition">關於</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">聯絡方式</h3>
            <p className="text-gray-400 mb-2">Email: haochi0520@gmail.com</p>
            <p className="text-gray-400">GitHub: haochi0520-alt</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Rebuilding New Home. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
