import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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
  { letter: "Q", combinations: ["Qu"] },
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

export function DomainGrid() {
  return (
    <div className="w-full h-full overflow-auto">
      <div className="text-center py-4">
        <h2 className="text-xl font-bold mb-2">音节组合矩阵</h2>
        <p className="text-gray-600">总共 {allSyllables.length} × {allSyllables.length} = {allSyllables.length * allSyllables.length} 种组合</p>
      </div>
      
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="sticky left-0 bg-white z-10">＼</TableHead>
              {allSyllables.map((syl, index) => (
                <TableHead key={index} className="text-center min-w-[60px]">
                  {syl}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {allSyllables.map((firstSyl, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium sticky left-0 bg-white z-10">
                  {firstSyl}
                </TableCell>
                {allSyllables.map((secondSyl, j) => (
                  <TableCell key={j} className="text-center">
                    {firstSyl + secondSyl}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
} 