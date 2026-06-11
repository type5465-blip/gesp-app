    {
        id: '2025-06',
        title: '2025年6月 GESP Python 一级真题',
        date: '2025年6月',
        icon: '📄',
        source: 'CCF GESP 2025年6月认证',
        questions: [
            // 单选题 1-15
            { type:'single', q:"2025年4⽉19⽇在北京举⾏了⼀场颇为瞩⽬的⼈形机器⼈半程马拉松赛。⽐赛期间，跑动着的机器⼈会利⽤ ⾝上安装的多个传感器所反馈的数据来调整姿态、保持平衡等，那么这类传感器类似于计算机的( )。", options:["处理器", "存储器", "输⼊设备", "输出设备"], answer:2, explain:"正确答案：C" },
            { type:'single', q:"⼩杨购置的计算机使⽤⼀年后觉得内存不够⽤了，想购置⼀个容量更⼤的内存条，这时其需要的内存条是（ ）。", options:["RAM", "ROM", "CACHE", "EPROM"], answer:0, explain:"正确答案：A" },
            { type:'single', q:"下列Python代码执⾏后，其结果是( )。", options:["输出10", "输出{First}", "输出\"{First}\"", "报错，因为{First}中的First应该是first"], answer:3, explain:"正确答案：D" },
            { type:'single', q:"Python表达式14 - 3 * 3 ** 2的值是( )。", options:["99", "25", "-13first = 10 print(f\"{First}\")1 2", "-67"], answer:2, explain:"正确答案：C" },
            { type:'single', q:"下⾯的 Python 代码执⾏后，其输出是 ( )。", options:["10 20", "20 10", "10 10", "20 20"], answer:1, explain:"正确答案：B" },
            { type:'single', q:"下⾯ Python 代码执⾏后的输出是 ( )。", options:["a=3 b=4 c=5,a^2+b^2=25,c^2=25", "3=3 4=4 5=5,9+16=25,25=25", "a={a} b={b} c={c},a^2+b^2={a**2+b**2},c^2={c**2}", "a=3 b=4 c=5,1+6=25,7=25"], answer:0, explain:"正确答案：A" },
            { type:'single', q:"阅读下⾯的 Python 代码，横线上应填⼊的代码是（ ）。", options:["{2025-int(YearOld)}", "{2025-YearOld}", "{2025}-{int(YearOld)}", "{2025}-{YearOld}"], answer:0, explain:"正确答案：A" },
            { type:'single', q:"下⾯ Python 代码执⾏后的输出是（ ）。", options:["a+b= 7 a+b={a+b}", "a+b=7 a+b=7", "a+b=7a+b={a+b}", "a+b=7a+b=7x = 10 y = 20 x = x + y y = x - y x = x - y print(x, y)1 2 3 4 5 6 a, "], answer:0, explain:"正确答案：A" },
            { type:'single', q:"下⾯的 Python 代码⽤于求 M 天后是星期⼏，横线处应填⼊的代码是（ ）。", options:["", "", "", ""], answer:1, explain:"正确答案：B" },
            { type:'single', q:"下⾯ Python 代码执⾏后输出是（ ）。", options:["END", "1#", "1#4#END", "1#4#7#10#END"], answer:0, explain:"正确答案：A" },
            { type:'single', q:"下⾯的 Python 代码⽤于求 N 的所有因数，如输⼊ 12 则将输出12,6,4,3,2,1,。（ ）。N = int(input(\"当前星期几？ \")) #星期日是 0 M = int(input(\"求多少天后？ \")) #输入正整数 D = __________________ if ______________: print(f\"{M}后是星期日 \") else: print(f\"{M}后是星期{D}\")1 2 3 4 5 6 7 8 (N + M) // 7 D == 01 2 (N", options:["i <= 1", "i == 1", "i > 1", "i >= 1"], answer:2, explain:"正确答案：C" },
            { type:'single', q:"下⾯ Python 代码执⾏后输出的是（ ）。", options:["55", "15", "9", "4"], answer:3, explain:"正确答案：D" },
            { type:'single', q:"turtle.forward(100) 是（ ）。", options:["让海⻳向右转 100 度", "让海⻳向上移动 100 像素", "让海⻳向前移动 100 像素", "让海⻳向前移动 100 单位"], answer:2, explain:"正确答案：C" },
            { type:'single', q:"为在 Python Turtle 中输出如下图形，代码横线处应填⼊（ ）。", options:["11", "1, 12Sum = 0 for i in range(10): if i % 2 == 0: continue if i % 5 == 0: break Su", "1, 13", "14"], answer:2, explain:"正确答案：C" },
            { type:'single', q:"为在 Python Turtle 中输出如下图形，代码横线处应填⼊（ ）。", options:["30", "60", "90", "120 2"], answer:3, explain:"正确答案：D" },
            // 判断题 16-25
            { type:'bool', q:"现在，⼈们参加各种闭卷考试时通常都不允许将智能⼿机、平板电脑等带⼊考场，因为智能⼿表通常都有嵌 ⼊操作系统及通信等功能，所以也不允许携带⼊考场。（ ）", answer:0, explain:'请参考真题PDF核对答案' },
            { type:'bool', q:"如果 Python 表达式int(N ** 0.5) ** 2 == N的值为 True ，则 N 是完全平⽅数，如 4 、 9 等。 ( )", answer:1, explain:'请参考真题PDF核对答案' },
            { type:'bool', q:"在下⾯ Python 代码中，删除break语句对程序执⾏结果没有影响。 ( )", answer:0, explain:'请参考真题PDF核对答案' },
            { type:'bool', q:"删除下⾯ Python 代码中的continue后其输出是0#2#4#6#8#。（ ）import turtle for i in range(9): turtle.forward(100) turtle.left(120) if i % 3 == 2: turtle.right(____________)1 2 3 4 5 6 for i in range(10): continue print(i, end = \"#\") break else: print(\"END\")1 2 3 4 5 6", answer:1, explain:'请参考真题PDF核对答案' },
            { type:'bool', q:"将下⾯ Python 代码中的range(100)修改为range(1,100)，其输出与当前代码输出相同。（ ）", answer:0, explain:'请参考真题PDF核对答案' },
            { type:'bool', q:"交换下⾯ Python 代码中的i += 2和cnt += 1，其输出相同。（ ）", answer:1, explain:'请参考真题PDF核对答案' },
            { type:'bool', q:"下⾯的 Python 代码执⾏后将输出 45 。（ ）", answer:0, explain:'请参考真题PDF核对答案' },
            { type:'bool', q:"执⾏ Python 代码print(12 + 12.12)将报错，因为 12 是 int 类型，⽽ 12.12 是 float 类型，不同类型不能直接运 算。（ ）", answer:1, explain:'请参考真题PDF核对答案' },
            { type:'bool', q:"下⾯的 Python 代码执⾏后，海⻳指向不会发⽣变化。（ ）", answer:0, explain:'请参考真题PDF核对答案' },
            { type:'bool', q:"下⾯的 Python 代码被执⾏后将绘制出正六边形。（ ） 3", answer:1, explain:'请参考真题PDF核对答案' },
            // 编程题 26-27
            { type:'code', title:'编程题1', desc:'请参考原题PDF', inputFormat:'见原题', outputFormat:'见原题', samples:[], referenceCode:'# 参考答案见原题PDF', explain:'本卷编程题详见真题PDF文件' },
            { type:'code', title:'编程题2', desc:'请参考原题PDF', inputFormat:'见原题', outputFormat:'见原题', samples:[], referenceCode:'# 参考答案见原题PDF', explain:'本卷编程题详见真题PDF文件' }
        ]
    },
    {
        id: '2025-09',
        title: '2025年9月 GESP Python 一级真题',
        date: '2025年9月',
        icon: '📄',
        source: 'CCF GESP 2025年9月认证',
        questions: [
            // 单选题 1-15
            { type:'single', q:"⼈⼯智能现在⾮常⽕，⼩杨就想多了解⼀下，其中就经常听⼈提到 “ ⼤模型 ” 。那么请问这⾥说的 “ ⼤模型 ” 最 贴切是指 ( ) 。", options:["⼤电脑模型", "⼤规模智能", "智能的单位", "⼤语⾔模型"], answer:3, explain:"正确答案：D" },
            { type:'single', q:"⼩杨这学期刚开学就选修了⼀门编程课，然后就想编写程序来计算 1 到 10001 之间的所有偶数的和。他希望程 序采⽤简单累加整数的⽅法，同时希望源程序尽可能清晰、简洁，则下⾯关于实现累加时采⽤的主要控制结构的哪 个说法最不合适（ ）。", options:["使⽤循环结构", "使⽤循环和分⽀的组合", "仅使⽤顺序结构", "不使⽤分⽀结构"], answer:2, explain:"正确答案：C" },
            { type:'single', q:"下⾯的 Python 代码⽤于输⼊姓名，然后输出姓名，正确的说法是 ( )。", options:["XingMing 是汉语拼⾳，不能作为变量名称", "可以将 XingMing 改为 Xing Ming", "可以将 XingMing 改为 xingming", "可以将 XingMing 改为 Xing-Ming"], answer:2, explain:"正确答案：C" },
            { type:'single', q:"下列 Python 代码执⾏后，其输出是 ( )。", options:["(选项见原题)", "(选项见原题)", "(选项见原题)", "(选项见原题)"], answer:0, explain:"正确答案：A" },
            // 判断题 16-25
            { type:'bool', q:"在集成开发环境⾥调试程序时，要注意不能修改源程序，因为如果修改，就要终⽌调试、关闭该⽂件并重新 打开，才能再次开始调试。（ ）", answer:0, explain:'请参考真题PDF核对答案' },
            { type:'bool', q:"执⾏ Python 表达式10 ** 0.5将报错，因为 0.5 所在位置只能是正整数。 ( )", answer:1, explain:'请参考真题PDF核对答案' },
            { type:'bool', q:"下⾯ Python 代码执⾏后将输出 9。 ( )", answer:0, explain:'请参考真题PDF核对答案' },
            { type:'bool', q:"下⾯ Python 代码执⾏后将输出 55。（ ）import turtle for i in range(4): turtle.circle(100, steps = ______) turtle.right(90)1 2 3 4 for i in range(10): break print(i)1 2 3", answer:1, explain:'请参考真题PDF核对答案' },
            { type:'bool', q:"将下⾯ Python 代码中的 range(100) 修改为 range(1,100)，其输出与当前代码输出相同。（ ）", answer:0, explain:'请参考真题PDF核对答案' },
            { type:'bool', q:"将下⾯ Python 代码中的i < 10修改为i <= 10，其执⾏后输出相同。（ ）", answer:1, explain:'请参考真题PDF核对答案' },
            { type:'bool', q:"下⾯的 Python 代码执⾏后将输出 45。（ ）", answer:0, explain:'请参考真题PDF核对答案' },
            { type:'bool', q:"执⾏下⾯的 Python 代码后，将输出 30。（ ）", answer:1, explain:'请参考真题PDF核对答案' },
            { type:'bool', q:"下⾯的 Python 代码执⾏后，海⻳指向不会发⽣变化。（ ）", answer:0, explain:'请参考真题PDF核对答案' },
            { type:'bool', q:"下⾯的 Python 代码执⾏后将能绘制出⼤于 3 的正多边形。（ ） 3", answer:1, explain:'请参考真题PDF核对答案' },
            // 编程题 26-27
            { type:'code', title:'编程题1', desc:'请参考原题PDF', inputFormat:'见原题', outputFormat:'见原题', samples:[], referenceCode:'# 参考答案见原题PDF', explain:'本卷编程题详见真题PDF文件' },
            { type:'code', title:'编程题2', desc:'请参考原题PDF', inputFormat:'见原题', outputFormat:'见原题', samples:[], referenceCode:'# 参考答案见原题PDF', explain:'本卷编程题详见真题PDF文件' }
        ]
    },
    {
        id: '2026-03',
        title: '2026年3月 GESP Python 一级真题',
        date: '2026年3月',
        icon: '📄',
        source: 'CCF GESP 2026年3月认证',
        questions: [
            // 单选题 1-15
            { type:'single', q:"2026年春节联欢晚会上⼀个武术表演节⽬《武 BOT 》。节⽬中多个⼈形机器⼈会表演空翻，它们落地可能会 有微微踉跄，但都会迅速调整姿态站稳，并适当移动来和前后左右的其他机器⼈保持原来队列。如果将机器⼈视作 ⼀个计算机系统，那么在该计算机系统中下⾯哪⼀项不能作为输⼊设备 ( ) 。", options:["⽤于检测重⼼的重⼒传感器", "预装的 AI 算法程序", "接收动作指令的遥控器", "拍摄其他机器⼈的摄像头"], answer:1, explain:"正确答案：B" },
            { type:'single', q:"⼩明学习编程有⼀段时间了，他想在图形环境下把当前⽬录（或⽂件夹）下的⽂本⽂件20260314.txt的名 字改⼀下。他⽤⿏标左键点击选中该⽂件后，⽴即完成下⾯哪个操作后将处于输⼊新⽂件名的状态 ( ) 。", options:["单击右键并选择弹出菜单中的 “ 重命名 ”", "双击左键", "按功能键 F1", "按回车键"], answer:0, explain:"正确答案：A" },
            { type:'single', q:"有关下⾯ Python 的说法，正确的是 ( )。", options:["为了⽅便初学者，print(PI)和print(pi)效果相同，即变量的⼤⼩写不敏感", "print(PI)修改为print(Pi)能正常执⾏", "不能⽤ PI 做变量名，因为要保存圆周率这个常量", "将程序中 PI 全部改写为 Pai，将能正常执⾏，不会报错"], answer:3, explain:"正确答案：D" },
            { type:'single', q:"Python 表达式3 * 3 ** 2的值为 ( )。", options:["81", "27", "24", "18PI = 3.1415926 print(PI)1 2 第 1 页 / 共 9 页"], answer:1, explain:"正确答案：B" },
            { type:'single', q:"下⾯的 Python 代码执⾏后，其输出是 ( )。", options:["", "", "", ""], answer:0, explain:"正确答案：A" },
            { type:'single', q:"下⾯ Python 代码的相关说法，正确的是 ( )。", options:["执⾏时如输⼊ 10 ，则将输出 10", "执⾏时如输⼊ 3.14 ，则将输出 3.14", "执⾏时如输⼊ ABC ，则将输出 0", "执⾏时如输⼊ -10 ，则将输出 10"], answer:0, explain:"正确答案：A" },
            { type:'single', q:"下⾯ Python 代码执⾏时，其说法正确的是（ ）。", options:["不管输⼊是正数负数还是 0 ，其输出结果肯定是⼤于等于 0", "不管是负整数、正整数亦或 0 ，其结果肯定是⼤于等于 0", "如果 N和 M 是相等的整数，将不会有输出", "如果 N和 M 输⼊带有⼩数点的数，将按整数部分计算"], answer:1, explain:"正确答案：B" },
            { type:'single', q:"下⾯ Python 代码执⾏后的输出是（ ）。a, b = 3, 4 print(a + 2, b - 2) print(a, b)1 2 3 5 2 3 41 2 5 2 5 21 2 52 341 2 52 521 2 N = int(input()) print(N)1 2 N = int(input()) M = int(input()) if N > M: print(N - M) else: print(M - N)1 2 3 4 5 6 7 tnt = 1 for i in ran", options:["24 5", "10 5", "24 4", "0 4"], answer:3, explain:"正确答案：D" },
            { type:'single', q:"Python编程求数列-1+2+3-4+5+6-7+8+9-10+11+12-13+......之值。如输⼊ 4 ，则计算 1 到 4 包含 1 和 4 之间 的值，规律如数列所⽰。下⾯说法，正确的是（）。", options:["range(1, N + 1)应该修为range(1, N)才会符合预期", "i % 3 == 1应修改为i % 3 == 0才会符合预期", "i % 3 == 1修改为i % 3与当前程序效果相同", "当前代码能达到题⽬所描述⽬标"], answer:3, explain:"正确答案：D" },
            { type:'single', q:"下⾯ Python 代码的相关说法，正确的是（ ）。", options:["上述代码执⾏后，其输出是1#3#5#7#9#9END", "删除else:后的执⾏效果与当前代码相同", "删除else:且print(i, end = \"#\")与if对齐，则执⾏效果与当前代码相同", "将print(i,\"END\")与if对齐，其执⾏效果与当前代码相同"], answer:2, explain:"正确答案：C" },
            { type:'single', q:"下⾯的 Python 代码⽤于求正整数各位数之和（即数位和），约定⾼位不为 0 ，如 123 则各位数之和为1+2+3 结果为 6。为实现该⽬标，横线处应该填写的代码是（ ）。", options:["N = int(input(\"请输入正整数： \")) tnt = 0 for i in range(1, N + 1): if i % 3 == 1: tnt ", "", "", ""], answer:1, explain:"正确答案：B" },
            { type:'single', q:"某个功能需要知道⼀个输⼊的正整数的各位数字中有多少个奇数，下⾯的 Python 代码是其实现，横线处应 该填⼊的代码是（ ）。", options:["N % 10 % 2 == 0", "N % 10 % 2 == 1", "N // 10 // 2 == 1", "N // 2 // 10 == 0"], answer:1, explain:"正确答案：B" },
            { type:'single', q:"下⾯的 Python 执⾏后如果输⼊ 8，希望输出如下图形。相关说法，正确的是（ ）。 tnt += N % 10 N //= 101 2 tnt += N % 10 N /= 101 2 tnt = tnt + N % 10 N /= 101 2 N = int(input()) odd_count = 0 #记录奇数的个数 old_number = N #保存原数 while N != 0: if _________________: odd_count += 1 N = (N - N % ", options:["Angle = 360 / N应该修为Angle = 360 // N才能实现输出效果", "range(N)修改为range(1, N + 1)效果相同，都能实现输出效果", "range(N)修改为range(1, N)效果相同，都能实现输出效果", "turtle.right(Angle)应该修正为turtle.right(i * Angle)才能达到预期效果"], answer:1, explain:"正确答案：B" },
            { type:'single', q:"有关下⾯ Python 代码的说法，正确的是（ ）。", options:["代码执⾏后，将输出等腰直角三角形", "代码执⾏后，将输出等长的两条边，其夹角为 90 度，因为没有画出斜边，因此不是三角形", "代码执⾏后， 90 度夹角位于原点", "因为没有执⾏turtle.pendown()，所以不会画出图形"], answer:0, explain:"正确答案：A" },
            { type:'single', q:"在Python 中，turtle.write()⽤于在当前坐标处输出⽂字。下⾯说法，错误的是（ ）。", options:["1+1=2输出在坐标原点，即(0,0)", "1+1=2的起点与2+2=4的起点间隔 40 个像素", "最后输出是10+10=20", "1+1=2等输出⽂字的下⾯将有⼀条直线 2"], answer:2, explain:"正确答案：C" },
            // 判断题 16-25
            { type:'bool', q:"⼩明的妈妈最近刚刚给他买了⼀块电话⼿表，除了可以看时间，⼩明也可以⽤它和妈妈打电话、收发信息， 那么可以推测这块⼿表中装有⼀款特定操作系统。（ ）", answer:0, explain:'请参考真题PDF核对答案' },
            { type:'bool', q:"Python表达式4 ** 2和2 * 2 ** 2的结果相同。 ( )", answer:1, explain:'请参考真题PDF核对答案' },
            { type:'bool', q:"下⾯ Python 代码执⾏后将输出 0 。 ( )", answer:0, explain:'请参考真题PDF核对答案' },
            { type:'bool', q:"下⾯ Python 代码⽤于求 1 到 N 之和， N 为正整数。因为 中为，因此是 1 到 N 且包含 N 之和。（ ）", answer:1, explain:'请参考真题PDF核对答案' },
            { type:'bool', q:"执⾏下⾯的 Python 代码，其语句 print(N) 将被执⾏ 0 次或⽆数次（即死循环）。（ ）", answer:0, explain:'请参考真题PDF核对答案' },
            { type:'bool', q:"下⾯的 Python 代码能实现判断输⼊的正整数是否为对称数。所谓对称数是指从左到右和从右到左读该数，其 值相同，如 121 或 414 等是对称数，⽽ 123 不是对称数。（ ）", answer:1, explain:'请参考真题PDF核对答案' },
            { type:'bool', q:"执⾏下⾯的 Python 代码，如果输⼊为⼤于 0 的整数，则输出⼀定为 。（ ）", answer:0, explain:'请参考真题PDF核对答案' },
            { type:'bool', q:"执⾏ Python 语句print(int(", answer:1, explain:'请参考真题PDF核对答案' },
            // 编程题 26-27
            { type:'code', title:'编程题1', desc:'请参考原题PDF', inputFormat:'见原题', outputFormat:'见原题', samples:[], referenceCode:'# 参考答案见原题PDF', explain:'本卷编程题详见真题PDF文件' },
            { type:'code', title:'编程题2', desc:'请参考原题PDF', inputFormat:'见原题', outputFormat:'见原题', samples:[], referenceCode:'# 参考答案见原题PDF', explain:'本卷编程题详见真题PDF文件' }
        ]
    }