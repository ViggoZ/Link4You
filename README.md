# 双音节域名组合查询工具 PRD

## 1. 产品概述
一个帮助用户发现和查询由两个双字母音节组合而成的四字母域名注册状态的网络工具。
- **A**: 无
<!-- - **B**: Ba, Be, Bi, Bo, Bu -->
- **C**: Ca, Ce, Ci, Co, Cu
- **D**: Da, De, Di, Do, Du
- **E**: 无
- **F**: Fa, Fe, Fi, Fo, Fu
- **G**: Ga, Ge, Gi, Go, Gu
- **H**: Ha, He, Hi, Ho, Hu
- **I**: 无
- **J**: Ja, Je, Ji, Jo, Ju
- **K**: Ka, Ke, Ki, Ko, Ku
- **L**: La, Le, Li, Lo, Lu
- **M**: Ma, Me, Mi, Mo, Mu
- **N**: Na, Ne, Ni, No, Nu
- **O**: 无
- **P**: Pa, Pe, Pi, Po, Pu
- **Q**: Qu
- **R**: Ra, Re, Ri, Ro, Ru
- **S**: Sa, Se, Si, So, Su
- **T**: Ta, Te, Ti, To, Tu
- **U**: 无
- **V**: Va, Ve, Vi, Vo, Vu
- **W**: Wa, We, Wi, Wo, Wu
- **X**: Xa, Xe, Xi, Xo, Xu
- **Y**: Ya, Ye, Yi, Yo, Yu
- **Z**: Za, Ze, Zi, Zo, Zu

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

## 2. 核心功能需求

### 2.1 音节组合生成器
- 基于91个有效双字母音节进行排列组合
- 自动生成8281(91x91)个四字母组合
- 支持按字母顺序浏览所有组合结果
- 提供组合结果的分页展示

### 2.2 域名可注册性查询
- 批量检查域名注册状态
- 支持常见顶级域名后缀查询（如.com/.net/.org等）
- 显示域名的可注册状态
- 提供域名注册商跳转链接

#### 2.2.1 域名注册状态可视化
- 支持一键查询指定后缀（如.ai）下所有组合的注册状态
- 查询结果以表格形式展示：
  * 绿色标记 ✅：表示域名可注册
  * 红色标记 ❌：表示域名已被注册
- 实时显示查询进度条
- 支持查询结果导出

#### 2.2.2 技术实现要点
- 使用域名注册商的 WHOIS API 或第三方域名查询服务
- 采用异步批量查询机制，避免请求超时
- 实现查询结果缓存，有效期24小时
- 限制查询频率，避免被 API 服务商封禁
- 使用任务队列处理大批量请求

### 2.3 筛选与排序功能
- 按首字母筛选
- 按音节组合筛选
- 按域名可注册状态筛选
- 按域名长度筛选（预留未来扩展）
- 支持多个筛选条件组合

### 2.4 用户功能
- 收藏感兴趣的域名组合
- 导出查询结果
- 查询历史记录
- 域名注册价格比较

## 3. 技术要求
- 域名查询API集成
- 查询频率限制机制
- 查询结果缓存
- 防爬虫措施

## 4. 性能要求
- 批量查询响应时间
- 结果展示分页性能
- 数据更新频率

## 5. 安全要求
- 用户数据保护
- 查询频率限制
- API访问控制

## 6. 未来扩展
- 支持更多音节组合规则
- 添加域名价值评估
- 集成更多域名注册商API
- 提供域名交易平台对接
