import { DomainGrid } from "@/components/DomainGrid"

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <h1 className="text-2xl font-bold text-center mb-8">
        双音节域名组合查询工具
      </h1>
      <DomainGrid />
    </main>
  )
}
