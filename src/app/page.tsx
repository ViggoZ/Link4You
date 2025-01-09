import { DomainGrid } from "@/components/DomainGrid"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-2">
        <div className="flex min-h-[120px] flex-col items-center justify-center gap-0 py-6 md:py-10">
          <div className="relative w-full">
            <div className="mx-auto flex w-full flex-col items-center gap-5">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">双音节域名组合查询工具</h1>
                <p className="text-muted-foreground">
                  快速发现和查询由两个双字母音节组合而成的四字母域名（如 BAKA、KUMA 等）的注册状态。
                </p>
              </div>
              <div className="grid w-full max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
                {/* 基本功能说明 */}
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="font-semibold leading-none tracking-tight flex items-center gap-2">
                      📝 基本功能
                    </h3>
                  </div>
                  <div className="p-6 pt-0 text-sm text-muted-foreground">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-primary"></span>
                        目前支持查询 .ai 域名后缀（其他后缀正在开发中）
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-primary"></span>
                        可以使用字母导航栏快速跳转到指定字母开头的域名区域
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-primary"></span>
                        查询结果会保持在页面上，刷新后需要重新查询
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 状态说明 */}
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="font-semibold leading-none tracking-tight flex items-center gap-2">
                      🔍 查询状态
                    </h3>
                  </div>
                  <div className="p-6 pt-0 text-sm text-muted-foreground">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-green-500">✅</span>
                        绿色表示域名可注册
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-red-500">❌</span>
                        红色表示域名已被注册
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-primary"></span>
                        灰色表示尚未查询或查询中
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-primary"></span>
                        点击已查询的域名可重新检查状态
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 添加操作提示 */}
              <div className="mt-4 text-center">
                <span className="inline-block px-4 py-2 bg-muted/50 rounded-lg font-medium text-primary">
                  👇🏻 点击下方列表中任意域名组合即可查询其注册状态
                </span>
              </div>
            </div>
          </div>
        </div>
        <DomainGrid />
      </div>
    </main>
  )
}
