"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { ArrowUp } from "lucide-react"

// 定义音节类型
type Syllable = {
  letter: string;
  combinations: string[];
}

// 所有音节数据
const syllables: Syllable[] = [
    { letter: "B", combinations: ["Ba", "Be", "Bi", "Bo", "Bu"] },
    { letter: "C", combinations: ["Ca", "Ce", "Ci", "Co", "Cu"] },
    { letter: "D", combinations: ["Da", "De", "Di", "Do", "Du"] },
    { letter: "F", combinations: ["Fa", "Fe", "Fi", "Fo", "Fu"] },
    { letter: "G", combinations: ["Ga", "Ge", "Gi", "Go", "Gu"] },
    { letter: "H", combinations: ["Ha", "He", "Hi", "Ho", "Hu"] },
    { letter: "J", combinations: ["Ja", "Je", "Ji", "Jo", "Ju"] },
    { letter: "K", combinations: ["Ka", "Ke", "Ki", "Ko", "Ku"] },
    { letter: "L", combinations: ["La", "Le", "Li", "Lo", "Lu"] },
    { letter: "M", combinations: ["Ma", "Me", "Mi", "Mo", "Mu"] },
    { letter: "N", combinations: ["Na", "Ne", "Ni", "No", "Nu"] },
    { letter: "P", combinations: ["Pa", "Pe", "Pi", "Po", "Pu"] },
    { letter: "R", combinations: ["Ra", "Re", "Ri", "Ro", "Ru"] },
    { letter: "S", combinations: ["Sa", "Se", "Si", "So", "Su"] },
    { letter: "T", combinations: ["Ta", "Te", "Ti", "To", "Tu"] },
    { letter: "V", combinations: ["Va", "Ve", "Vi", "Vo", "Vu"] },
    { letter: "W", combinations: ["Wa", "We", "Wi", "Wo", "Wu"] },
    { letter: "X", combinations: ["Xa", "Xe", "Xi", "Xo", "Xu"] },
    { letter: "Y", combinations: ["Ya", "Ye", "Yi", "Yo", "Yu"] },
    { letter: "Z", combinations: ["Za", "Ze", "Zi", "Zo", "Zu"] }
  ];

// 获取所有音节
const allSyllables = syllables.flatMap(s => s.combinations);

type DomainStatus = {
  name: string;
  available: boolean | null;
  loading?: boolean;
}

export function DomainGrid() {
  const [mounted, setMounted] = useState(false);
  const [domainStatuses, setDomainStatuses] = useState<Record<string, DomainStatus>>({});
  const [showBackToTop, setShowBackToTop] = useState(false);

  // 修改滚动到指定字母区域的函数
  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`section-${letter}`);
    if (element) {
      const offset = 55; // 可以根据实际导航栏高度调整这个值
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // 获取所有可用的字母
  const availableLetters = syllables.map(s => s.letter);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 添加滚动监听
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300); // 滚动超过300px时显示按钮
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 添加回到顶部函数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // 检查单个域名
  const checkDomain = async (domain: string) => {
    try {
      setDomainStatuses(prev => ({
        ...prev,
        [domain]: { name: domain, available: null, loading: true }
      }));

      const response = await fetch(`/api/check-domain?domain=${domain}.ai`);
      const data = await response.json();
      console.log('Domain check response:', data);

      // 检查是否有错误响应
      if (data.raw?.code === 'ACCESS_DENIED' || data.error) {
        console.error('API access error:', data.raw?.message || data.error);
        setDomainStatuses(prev => ({
          ...prev,
          [domain]: { name: domain, available: null, loading: false }
        }));
        return;
      }

      setDomainStatuses(prev => ({
        ...prev,
        [domain]: { name: domain, available: data.available, loading: false }
      }));
    } catch (error) {
      console.error(`Error checking domain ${domain}:`, error);
      setDomainStatuses(prev => ({
        ...prev,
        [domain]: { name: domain, available: null, loading: false }
      }));
    }
  };

  // 处理单元格点击
  const handleCellClick = (domain: string) => {
    if (!domainStatuses[domain]?.loading) {
      checkDomain(domain);
    }
  };

  if (!mounted) return null;

  return (
    <div className="container mx-auto py-2">
      {/* 导航栏改为可横向滚动 */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b mb-4 overflow-x-auto">
        <div className="flex justify-start md:justify-center gap-2 py-2 px-4 min-w-full">
          {availableLetters.map((letter) => (
            <button
              key={letter}
              onClick={() => scrollToLetter(letter)}
              className="px-3 py-1.5 text-sm rounded hover:bg-accent hover:text-accent-foreground transition-colors flex-shrink-0"
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-2">
          {syllables.map((syllable) => (
            <div 
              key={syllable.letter} 
              id={`section-${syllable.letter}`}
              className="border rounded-lg overflow-hidden" // 移除 overflow-x-auto
            >
              <h2 className="px-4 py-2 font-bold text-sm border-b bg-muted">
                {syllable.letter} 开头的组合
              </h2>
              <div className="overflow-x-auto"> {/* 添加滚动容器 */}
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="bg-background z-20 p-2 text-center sticky left-0">＼</TableHead>
                      {syllable.combinations.map((firstSyl, index) => (
                        <TableHead 
                          key={index} 
                          className="text-center min-w-[60px] bg-background z-10 p-2 text-sm whitespace-nowrap"
                        >
                          {firstSyl}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {allSyllables.map((secondSyl, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium bg-background p-2 text-sm sticky left-0 text-center whitespace-nowrap">
                          {secondSyl}
                        </TableCell>
                        {syllable.combinations.map((firstSyl, j) => {
                          const domain = firstSyl + secondSyl;
                          const status = domainStatuses[domain];
                          
                          return (
                            <TableCell 
                              key={j}
                              onClick={() => handleCellClick(domain)}
                              className={cn(
                                "text-center p-2 text-sm cursor-pointer transition-colors whitespace-nowrap",
                                status?.loading && "animate-pulse bg-muted",
                                status?.available === true && "bg-green-100 hover:bg-green-200 text-green-800",
                                status?.available === false && "bg-red-100 hover:bg-red-200 text-red-800",
                                !status && "hover:bg-muted"
                              )}
                            >
                              {domain}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 修改回到顶部按钮，添加动画类 */}
      <div className={cn(
        "fixed bottom-8 right-8 transition-all duration-300",
        showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"
      )}>
        <button
          onClick={scrollToTop}
          className="p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300"
          aria-label="回到顶部"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
} 