import { Header } from "@/components/Header";
import { DomainGrid } from "@/components/DomainGrid";
import { Footer } from "@/components/Footer";

export default function FourLetterPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <div className="container mx-auto px-2">
          <div className="flex min-h-[120px] flex-col items-center justify-center gap-0 py-6 md:py-10">
            <div className="relative w-full">
              <div className="mx-auto flex w-full flex-col items-center gap-5">
                <div className="space-y-2 text-center">
                  <h1 className="text-3xl font-bold">4 Letter Domain Name Checker</h1>
                  <p className="text-muted-foreground">
                    Find available 4 letter domain names with CVCV pattern (like BAKA, KUMA). Quick bulk domain search for unregistered domains.
                  </p>
                </div>
                <div className="grid w-full max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
                  {/* Basic Features */}
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="font-semibold leading-none tracking-tight flex items-center gap-2">
                        📝 Features
                      </h3>
                    </div>
                    <div className="p-6 pt-0 text-sm text-muted-foreground">
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-primary"></span>
                          Currently supports .ai domains (more TLDs coming soon)
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-primary"></span>
                          Quick navigation with alphabet filter bar
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-primary"></span>
                          Results persist until page refresh
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Status Guide */}
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="font-semibold leading-none tracking-tight flex items-center gap-2">
                        🔍 Domain Status
                      </h3>
                    </div>
                    <div className="p-6 pt-0 text-sm text-muted-foreground">
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <span className="text-green-500">✅</span>
                          Green: Domain available for registration
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-red-500">❌</span>
                          Red: Domain already registered
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-primary"></span>
                          Gray: Not checked or checking in progress
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-primary"></span>
                          Click any checked domain to refresh status
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Action Hint */}
                <div className="mt-4 text-center">
                  <span className="inline-block px-4 py-2 bg-muted/50 rounded-lg font-medium text-primary">
                    👇🏻 Click any domain below to check its availability
                  </span>
                </div>
              </div>
            </div>
          </div>
          <DomainGrid />
        </div>
      </main>
      <Footer />
    </>
  );
} 