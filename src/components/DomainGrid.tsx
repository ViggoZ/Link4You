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

  useEffect(() => {
    setMounted(true);
  }, []);

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
      <div className="w-full h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          {syllables.map((syllable) => (
            <div key={syllable.letter} className="border rounded-lg overflow-x-auto">
              <h2 className="px-2 py-1 font-bold text-sm border-b bg-muted">
                {syllable.letter} 开头的组合
              </h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="bg-background z-20 p-1">＼</TableHead>
                    {syllable.combinations.map((firstSyl, index) => (
                      <TableHead 
                        key={index} 
                        className="text-center min-w-[50px] bg-background z-10 p-1 text-sm"
                      >
                        {firstSyl}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allSyllables.map((secondSyl, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium bg-background p-1 text-sm">
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
                              "text-center p-1 text-xs cursor-pointer transition-colors",
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
          ))}
        </div>
      </div>
    </div>
  );
} 