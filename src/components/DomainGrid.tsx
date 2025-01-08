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
//   { letter: "B", combinations: ["Ba", "Be", "Bi", "Bo", "Bu"] },
  { letter: "C", combinations: ["Ce", "Ca", "Ci", "Co", "Cu"] },
//   { letter: "C", combinations: ["Ca", "Ce", "Ci", "Co", "Cu"] },
//   { letter: "D", combinations: ["Da", "De", "Di", "Do", "Du"] },
//   { letter: "F", combinations: ["Fa", "Fe", "Fi", "Fo", "Fu"] },
  { letter: "G", combinations: ["Gi", "Ge", "Ga", "Go", "Gu"] },
//   { letter: "G", combinations: ["Ga", "Ge", "Gi", "Go", "Gu"] },
//   { letter: "H", combinations: ["Ha", "He", "Hi", "Ho", "Hu"] },
//   { letter: "J", combinations: ["Ja", "Je", "Ji", "Jo", "Ju"] },
//   { letter: "K", combinations: ["Ka", "Ke", "Ki", "Ko", "Ku"] },
//   { letter: "L", combinations: ["La", "Le", "Li", "Lo", "Lu"] },
//   { letter: "M", combinations: ["Ma", "Me", "Mi", "Mo", "Mu"] },
//   { letter: "N", combinations: ["Na", "Ne", "Ni", "No", "Nu"] },
//   { letter: "P", combinations: ["Pa", "Pe", "Pi", "Po", "Pu"] },
//   { letter: "Q", combinations: ["Qu"] },
//   { letter: "R", combinations: ["Ra", "Re", "Ri", "Ro", "Ru"] },
//   { letter: "S", combinations: ["Sa", "Se", "Si", "So", "Su"] },
//   { letter: "T", combinations: ["Ta", "Te", "Ti", "To", "Tu"] },
//   { letter: "V", combinations: ["Va", "Ve", "Vi", "Vo", "Vu"] },
//   { letter: "W", combinations: ["Wa", "We", "Wi", "Wo", "Wu"] },
//   { letter: "X", combinations: ["Xa", "Xe", "Xi", "Xo", "Xu"] },
//   { letter: "Y", combinations: ["Ya", "Ye", "Yi", "Yo", "Yu"] },
//   { letter: "Z", combinations: ["Za", "Ze", "Zi", "Zo", "Zu"] }
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
    
    for (const firstSyl of allSyllables) {
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

        // 添加延迟以避免 API 限制
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
    
    setIsChecking(false);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-full overflow-auto">
      <div className="sticky top-0 z-30 bg-background p-4 border-b">
        <Button 
          onClick={checkAllDomains} 
          disabled={isChecking}
        >
          {isChecking ? "检查中..." : "检查.ai域名可用性"}
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="sticky left-0 top-0 bg-background z-20">＼</TableHead>
              {allSyllables.map((syl, index) => (
                <TableHead 
                  key={index} 
                  className="text-center min-w-[60px] sticky top-0 bg-background z-10"
                >
                  {syl}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {allSyllables.map((firstSyl, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium sticky left-0 bg-background z-10">
                  {firstSyl}
                </TableCell>
                {allSyllables.map((secondSyl, j) => {
                  const domain = firstSyl + secondSyl;
                  const status = domainStatuses[domain];
                  
                  return (
                    <TableCell 
                      key={j} 
                      className={`text-center ${
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
    </div>
  );
} 