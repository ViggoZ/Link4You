import { DomainGrid } from "@/components/DomainGrid"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-2">
        <div className="py-4 text-center">
          <h1 className="text-2xl font-bold mb-2">
            双音节域名组合查询工具
          </h1>
          <p className="text-muted-foreground mb-4">
            快速发现和查询由两个双字母音节组合而成的四字母域名（如 BAKA、KUMA 等）的注册状态。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto mb-4">
            {/* 基本功能说明 */}
            <div>
              <p className="text-base font-semibold mb-2">📝 基本功能</p>
              <ul className="bg-muted/50 rounded-lg p-3 space-y-1.5 text-sm text-left">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                  目前支持查询 .ai 域名后缀（其他后缀正在开发中）
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                  点击任意域名组合即可查询其注册状态
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                  可以使用字母导航栏快速跳转到指定字母开头的域名区域
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                  查询结果会保持在页面上，刷新后需要重新查询
                </li>
              </ul>
            </div>

            {/* 状态说明 */}
            <div>
              <p className="text-base font-semibold mb-2">🔍 查询状态</p>
              <ul className="bg-muted/50 rounded-lg p-3 space-y-1.5 text-sm text-left">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  绿色表示域名可注册
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">❌</span>
                  红色表示域名已被注册
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                  灰色表示尚未查询或查询中
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
                  点击已查询的域名可重新检查状态
                </li>
              </ul>
            </div>
          </div>
        </div>
        <DomainGrid />
      </div>
    </main>
  )
}
