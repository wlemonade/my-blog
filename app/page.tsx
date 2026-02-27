import Link from "next/link";

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

const posts: Post[] = [
  {
    id: "1",
    title: "开始使用 Next.js 构建现代网站",
    excerpt: "Next.js 是一个强大的 React 框架，提供了服务端渲染、静态生成等多种功能，让构建现代网站变得更加简单...",
    date: "2024-03-15",
    category: "技术",
    readTime: "5 分钟",
  },
  {
    id: "2",
    title: "Tailwind CSS 最佳实践",
    excerpt: "Tailwind CSS 是一个实用优先的 CSS 框架，通过原子类的方式让样式编写更加高效。本文分享一些使用技巧...",
    date: "2024-03-10",
    category: "技术",
    readTime: "8 分钟",
  },
  {
    id: "3",
    title: "我的 2024 年度总结",
    excerpt: "回顾过去的一年，有收获也有遗憾。这篇文章记录了我的成长历程和对未来的展望...",
    date: "2024-02-28",
    category: "生活",
    readTime: "10 分钟",
  },
  {
    id: "4",
    title: "如何保持高效的学习状态",
    excerpt: "在信息爆炸的时代，保持高效学习变得越来越重要。分享一些我常用的学习方法和工具...",
    date: "2024-02-20",
    category: "思考",
    readTime: "6 分钟",
  },
  {
    id: "5",
    title: "TypeScript 进阶指南",
    excerpt: "TypeScript 为 JavaScript 提供了类型系统，让代码更加健壮。本文介绍一些进阶用法...",
    date: "2024-02-15",
    category: "技术",
    readTime: "12 分钟",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* 头部导航 */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              我的博客
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                首页
              </Link>
              <Link href="/posts" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                文章
              </Link>
              <Link href="/about" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                关于
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 欢迎区域 */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            欢迎来到我的博客
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            这里记录着我的技术学习、生活感悟和思考。希望我的文章能给你带来一些启发。
          </p>
        </section>

        {/* 文章列表 */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">最新文章</h2>
            <Link 
              href="/posts" 
              className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              查看全部 →
            </Link>
          </div>

          <div className="space-y-6">
            {posts.map((post) => (
              <article 
                key={post.id}
                className="group bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:shadow-lg"
              >
                <Link href={`/posts/${post.id}`}>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                      {post.date}
                    </span>
                    <span className="text-sm text-zinc-400 dark:text-zinc-500">
                      · {post.readTime}阅读
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* 订阅区域 */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">订阅更新</h2>
          <p className="text-blue-100 mb-6 max-w-md mx-auto">
            订阅我的博客，第一时间获取最新文章推送
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="输入你的邮箱"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
              订阅
            </button>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © 2024 我的博客. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
