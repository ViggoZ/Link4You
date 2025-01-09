"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

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
  available: boolean;
  loading?: boolean;
}

export function DomainGrid() {
  const [mounted, setMounted] = useState(false);
  const [domainStatuses, setDomainStatuses] = useState<Record<string, DomainStatus>>({});
  const [isChecking, setIsChecking] = useState(false);

  // 检查单个域名
  const checkDomain = async (domain: string) => {
    try {
      // 这里需要替换成实际的 API 调用
      const response = await fetch(`/api/check-domain?domain=${domain}.ai`);
      const data = await response.json();
      return data.available;
    } catch (error) {
      console.error(`Error checking domain ${domain}:`, error);
      return null;
    }
  };

  // 批量检查域名
  const checkAllDomains = async () => {
    setIsChecking(true);
    
    for (const syllable of syllables) {
      for (const firstSyl of syllable.combinations) {
        for (const secondSyl of allSyllables) {
          const domain = firstSyl + secondSyl;
          setDomainStatuses(prev => ({
            ...prev,
            [domain]: { name: domain, available: false, loading: true }
          }));

          const available = await checkDomain(domain);
          
          setDomainStatuses(prev => ({
            ...prev,
            [domain]: { name: domain, available: !!available, loading: false }
          }));

          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }
    }
    
    setIsChecking(false);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="container mx-auto py-2">
      <div className="w-full h-full">
        <div className="sticky top-0 z-30 bg-background p-2 border-b">
          <Button 
            onClick={checkAllDomains} 
            disabled={isChecking}
            size="sm"
          >
            {isChecking ? "检查中..." : "检查所有域名"}
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mt-2">
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
                            className={`text-center p-1 text-xs ${
                              status?.loading ? 'animate-pulse' :
                              status?.available ? 'bg-green-100 text-green-800' :
                              status ? 'bg-red-100 text-red-800' : ''
                            }`}
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