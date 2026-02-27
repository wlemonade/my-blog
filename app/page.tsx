import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";
import { Github, Twitter, Mail, Calendar, Clock, ArrowRight } from "lucide-react";

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

const categoryColors: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  技术: "default",
  生活: "secondary",
  思考: "outline",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* 头部导航 */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                我的博客
              </span>
            </Link>
            <nav className="flex items-center gap-6">
              <Link 
                href="/" 
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                首页
              </Link>
              <Link 
                href="/posts" 
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                文章
              </Link>
              <Link 
                href="/about" 
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                关于
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 欢迎区域 */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            欢迎来到我的博客
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            这里记录着我的技术学习、生活感悟和思考。希望我的文章能给你带来一些启发。
          </p>
        </section>

        {/* 文章列表 */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight">最新文章</h2>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/posts" className="gap-1">
                查看全部
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4">
            {posts.map((post) => (
              <Card key={post.id} className="group hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant={categoryColors[post.category] || "default"}>
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors cursor-pointer">
                    <Link href={`/posts/${post.id}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 订阅区域 */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0">
            <CardContent className="p-8 text-center">
              <div className="max-w-md mx-auto">
                <Mail className="h-10 w-10 text-white/80 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-3">订阅更新</h2>
                <p className="text-white/80 mb-6">
                  订阅我的博客，第一时间获取最新文章推送
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="输入你的邮箱"
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/50"
                  />
                  <Button variant="secondary" className="bg-white text-blue-600 hover:bg-white/90">
                    订阅
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 我的博客. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
