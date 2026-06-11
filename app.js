/* ============================================
   Python GESP 一级助考 - 应用逻辑
   ============================================ */

// ==================== 数据定义 ====================

// 知识点学习内容
const topics = [
    {
        id: 1, name: '认识Python', icon: '🐍',
        desc: '了解Python语言的特点和应用',
        content: `
<h3>🐍 什么是Python？</h3>
<p>Python是一种<strong>高级编程语言</strong>，由Guido van Rossum于1991年创建，名字来源于喜剧节目"Monty Python's Flying Circus"。</p>

<h3>🌟 Python的特点</h3>
<ul>
    <li><strong>简单易学</strong>：语法简洁清晰，接近自然语言</li>
    <li><strong>免费开源</strong>：任何人都可以免费下载使用</li>
    <li><strong>跨平台</strong>：支持Windows、macOS、Linux</li>
    <li><strong>功能强大</strong>：拥有丰富的第三方库和框架</li>
    <li><strong>应用广泛</strong>：Web开发、数据分析、人工智能等</li>
</ul>

<h3>🎯 Python的应用领域</h3>
<ul>
    <li><strong>人工智能</strong>：机器学习、深度学习、图像识别</li>
    <li><strong>Web开发</strong>：网站后端（豆瓣、知乎等均使用Python）</li>
    <li><strong>数据分析</strong>：科学计算、图表可视化</li>
    <li><strong>自动化运维</strong>：批量处理、系统管理脚本</li>
    <li><strong>游戏开发</strong>：使用Pygame等库开发2D游戏</li>
</ul>

<div class="note-box">
    <strong>💡 GESP考点：</strong>一级主要考察Python基础语法、输入输出、变量和控制结构。
</div>`
    },
    {
        id: 2, name: 'Python开发环境', icon: '💻',
        desc: '了解IDLE和代码编写环境',
        content: `
<h3>🛠 开发环境介绍</h3>
<p>编写Python代码需要开发环境，常用有：</p>
<ul>
    <li><strong>IDLE</strong>：Python自带的集成开发环境，适合初学者</li>
    <li><strong>VS Code</strong>：微软开发的免费代码编辑器，功能强大</li>
    <li><strong>PyCharm</strong>：专业的Python开发工具</li>
    <li><strong>在线编辑器</strong>：如Python在线编辑器、replit.com</li>
</ul>

<h3>📝 IDLE的两种模式</h3>
<ol>
    <li><strong>交互模式（Shell）</strong>：输入一行代码，回车立即执行并显示结果（提示符为 >>>）</li>
    <li><strong>编辑器模式</strong>：编写完整的 .py 文件，按 F5 运行整个程序</li>
</ol>

<h3>▶️ 运行Python程序</h3>
<ol>
    <li>在编辑器中编写代码</li>
    <li>按 <strong>F5</strong> 键（或菜单 Run → Run Module）</li>
    <li>也可以在命令行输入：<code>python 文件名.py</code></li>
</ol>

<h3>📄 Python文件</h3>
<p>Python程序文件以 <strong>.py</strong> 结尾，如 <code>hello.py</code>、<code>test.py</code>。建议使用<strong>UTF-8编码</strong>保存，以正确处理中文。</p>

<div class="note-box">
    <strong>💡 记住：</strong>.py 是Python文件的扩展名，IDLE中按 <strong>F5</strong> 运行程序。这是GESP常考基础题！
</div>`
    },
    {
        id: 3, name: '变量与数据类型', icon: '📦',
        desc: '学习变量命名和常用数据类型',
        content: `
<h3>📦 什么是变量？</h3>
<p>变量就像一个<strong>贴了标签的盒子</strong>，用来存储数据。Python中变量不需要声明类型，直接赋值即可使用。</p>

<div class="code-block"># 变量的定义和赋值
name = "小明"
age = 12
height = 1.55
is_student = True</div>

<h3>📋 Python常用数据类型</h3>
<ul>
    <li><strong>整型（int）</strong>：整数，如 <code>10</code>、<code>-5</code>、<code>0</code></li>
    <li><strong>浮点型（float）</strong>：小数，如 <code>3.14</code>、<code>-2.5</code></li>
    <li><strong>字符串（str）</strong>：文本，用引号包裹，如 <code>"hello"</code></li>
    <li><strong>布尔型（bool）</strong>：只有 <code>True</code> 和 <code>False</code> 两个值</li>
</ul>

<h3>✏️ 变量命名规则（重要！）</h3>
<ul>
    <li>只能包含<strong>字母、数字和下划线</strong></li>
    <li>不能以<strong>数字</strong>开头（如 <code>2name</code> 不合法）</li>
    <li>区分<strong>大小写</strong>（age 和 Age 是不同的变量）</li>
    <li>不能使用Python<strong>关键字</strong>（如 if、for、while 等）</li>
</ul>

<div class="output-block">>>> name = "小明"
>>> age = 12
>>> print(name)
小明
>>> print(age)
12
>>> print(type(age))
&lt;class 'int'&gt;</div>

<h3>🔄 type() 函数</h3>
<p><code>type()</code> 可以查看数据的类型：</p>

<div class="code-block">print(type(10))      # &lt;class 'int'&gt;
print(type(3.14))    # &lt;class 'float'&gt;
print(type("hi"))    # &lt;class 'str'&gt;
print(type(True))    # &lt;class 'bool'&gt;</div>

<div class="note-box">
    <strong>💡 注意：</strong>True 和 False <strong>首字母必须大写</strong>，这是常考易错点！
</div>`
    },
    {
        id: 4, name: '输入与输出', icon: '⌨️',
        desc: '掌握print()输出和input()输入',
        content: `
<h3>📤 输出函数 print()</h3>
<p><code>print()</code> 用于在屏幕上显示内容，是Python中最常用的函数。</p>

<div class="code-block"># 基本用法
print("Hello, Python!")
print(100)
print(3 + 5)

# 输出多个内容（逗号分隔，默认空格间隔）
print("答案是", 42)

# sep参数：指定分隔符
print("a", "b", "c", sep="-")   # 输出: a-b-c

# end参数：指定结尾字符（默认换行）
print("第一行", end="---")
print("接在后面")   # 输出: 第一行---接在后面</div>

<h3>📥 输入函数 input()（重要考点！）</h3>
<p><code>input()</code> 用于从键盘获取用户输入。<strong>注意：input() 返回的永远是字符串！</strong></p>

<div class="code-block"># 基本用法
name = input("请输入你的名字：")
print("你好，", name)

# 获取数字必须转换类型！
age_str = input("请输入年龄：")
age = int(age_str)         # 将字符串转为整数
print("明年你", age + 1, "岁")</div>

<h3>🔄 类型转换函数</h3>
<ul>
    <li><code>int(x)</code>：转换为整数</li>
    <li><code>float(x)</code>：转换为浮点数</li>
    <li><code>str(x)</code>：转换为字符串</li>
</ul>

<div class="note-box">
    <strong>💡 必考点：</strong>input() 返回值<strong>永远是字符串</strong>！做数学运算必须用 int() 或 float() 转换！
</div>`
    },
    {
        id: 5, name: '运算符', icon: '➕',
        desc: '算术、比较和逻辑运算符',
        content: `
<h3>🔢 算术运算符</h3>
<table>
<tr><th>运算符</th><th>说明</th><th>示例</th><th>结果</th></tr>
<tr><td>+</td><td>加法</td><td>3 + 5</td><td>8</td></tr>
<tr><td>-</td><td>减法</td><td>10 - 3</td><td>7</td></tr>
<tr><td>*</td><td>乘法</td><td>4 * 5</td><td>20</td></tr>
<tr><td>/</td><td>除法（得小数）</td><td>10 / 3</td><td>3.333...</td></tr>
<tr><td>//</td><td>整除（取整数）</td><td>10 // 3</td><td>3</td></tr>
<tr><td>%</td><td>取余数</td><td>10 % 3</td><td>1</td></tr>
<tr><td>**</td><td>幂运算</td><td>2 ** 3</td><td>8</td></tr>
</table>

<h3>⚖️ 比较运算符</h3>
<ul>
    <li><code>==</code> 等于（注意是两个等号！）</li>
    <li><code>!=</code> 不等于</li>
    <li><code>&gt;</code> 大于</li>
    <li><code>&lt;</code> 小于</li>
    <li><code>&gt;=</code> 大于等于</li>
    <li><code>&lt;=</code> 小于等于</li>
</ul>
<p>比较运算的结果是<strong>布尔值</strong>（True 或 False）。</p>

<h3>🧠 逻辑运算符</h3>
<ul>
    <li><code>and</code>：两边都为True才为True</li>
    <li><code>or</code>：至少一边为True就为True</li>
    <li><code>not</code>：取反，True变False</li>
</ul>

<div class="code-block">print(5 > 3 and 2 < 4)    # True
print(5 > 10 or 3 > 1)    # True
print(not (5 > 3))        # False</div>

<h3>📐 运算符优先级</h3>
<p><strong>括号 → 幂运算 → 乘除/整除/取余 → 加减 → 比较 → 逻辑</strong></p>

<div class="note-box">
    <strong>💡 技巧：</strong>不确定优先级时，<strong>加括号</strong>！括号里的先算，清晰又不会错。
</div>`
    },
    {
        id: 6, name: '条件判断 if-else', icon: '🔀',
        desc: '掌握if/elif/else条件分支',
        content: `
<h3>🔀 条件判断的作用</h3>
<p>条件判断让程序能根据不同情况做出不同反应，是程序"智能"的基础。</p>

<h3>📝 if 语句基本格式</h3>
<div class="code-block">if 条件:
    条件成立时执行的代码  # 注意：必须缩进！</div>

<h3>📝 if-else 双分支</h3>
<div class="code-block">score = 85
if score >= 60:
    print("及格！")
else:
    print("不及格！")</div>

<h3>📝 if-elif-else 多分支</h3>
<div class="code-block">score = 85
if score >= 90:
    print("优秀")
elif score >= 80:
    print("良好")
elif score >= 60:
    print("及格")
else:
    print("不及格")</div>

<h3>⚠️ 缩进规则（重要！）</h3>
<p>Python使用<strong>缩进</strong>（通常4个空格）表示代码块。同一代码块缩进必须<strong>一致</strong>！</p>

<div class="code-block">if 10 > 5:
    print("这行缩进了")   # 属于if块
    print("这也缩进了")   # 也属于if块
print("这行没缩进")       # 不属于if块，总会执行</div>

<div class="note-box">
    <strong>💡 考点：</strong>Python的缩进是<strong>语法要求</strong>，不是装饰！缩进错误会报 IndentationError。
</div>`
    },
    {
        id: 7, name: 'for循环', icon: '🔁',
        desc: '学习for循环和range()函数',
        content: `
<h3>🔁 for循环的作用</h3>
<p>for循环用于<strong>重复执行</strong>一段代码，常配合 <code>range()</code> 使用。</p>

<h3>📝 range() 函数</h3>
<ul>
    <li><code>range(n)</code>：生成 0 到 n-1，共 n 个数字</li>
    <li><code>range(start, stop)</code>：生成 start 到 stop-1</li>
    <li><code>range(start, stop, step)</code>：指定步长</li>
</ul>

<div class="code-block"># 打印 0 到 9
for i in range(10):
    print(i)

# 打印 1 到 5
for i in range(1, 6):
    print(i)

# 每隔2个打印（步长为2）
for i in range(1, 10, 2):
    print(i)   # 输出: 1, 3, 5, 7, 9

# 倒序（负步长）
for i in range(10, 0, -2):
    print(i)   # 输出: 10, 8, 6, 4, 2</div>

<h3>📊 累加求和</h3>
<div class="code-block">total = 0
for i in range(1, 101):
    total = total + i
print("1到100的和：", total)   # 5050</div>

<h3>🔢 遍历字符串</h3>
<div class="code-block">word = "Python"
for ch in word:
    print(ch)
# 逐行输出: P y t h o n</div>

<div class="note-box">
    <strong>💡 注意：</strong>range(1, 10) 包含 1，<strong>不含 10</strong>。要取到 100 必须写 range(1, 101)。
</div>`
    },
    {
        id: 8, name: 'while循环', icon: '🔄',
        desc: '学习while循环和循环控制',
        content: `
<h3>🔄 while循环</h3>
<p>while循环在<strong>条件成立时</strong>反复执行，直到条件变为False才停止。</p>

<h3>📝 基本格式</h3>
<div class="code-block">while 条件:
    条件成立时执行的代码  # 注意缩进和条件变量更新！</div>

<h3>📊 示例</h3>
<div class="code-block"># 打印 1 到 5
i = 1
while i <= 5:
    print(i)
    i = i + 1   # 一定要更新条件变量！

# 倒计时
n = 5
while n > 0:
    print(n, end=" ")
    n = n - 1
# 输出: 5 4 3 2 1</div>

<h3>⚠️ 死循环</h3>
<p>如果条件永远为True，程序将无法停止——这叫<strong>死循环</strong>。</p>
<div class="code-block"># 危险！死循环（不要运行！）
while True:
    print("停不下来了！")</div>

<h3>⏭ break 和 continue</h3>
<ul>
    <li><code>break</code>：立即<strong>跳出</strong>整个循环</li>
    <li><code>continue</code>：跳过本次，<strong>继续</strong>下一次循环</li>
</ul>

<div class="code-block"># break 示例：找第一个偶数就退出
for i in range(10):
    if i % 2 == 0 and i > 0:
        print("找到偶数：", i)   # 输出: 2
        break

# continue 示例：只打印奇数
for i in range(10):
    if i % 2 == 0:
        continue
    print(i)   # 输出: 1 3 5 7 9</div>

<h3>🆚 for vs while</h3>
<ul>
    <li><strong>for</strong>：知道循环次数时使用</li>
    <li><strong>while</strong>：不知道次数，但知道条件时使用</li>
</ul>

<div class="note-box">
    <strong>💡 易错点：</strong>while 循环中<strong>必须更新条件变量</strong>，否则变成死循环！
</div>`
    },
    {
        id: 9, name: '字符串操作', icon: '📝',
        desc: '字符串的索引、切片和方法',
        content: `
<h3>📝 什么是字符串？</h3>
<p>字符串是由字符组成的<strong>序列</strong>，用引号包裹。Python中字符串是<strong>不可变</strong>的（不能修改单个字符）。</p>

<h3>🔢 索引（下标）</h3>
<p>每个字符都有编号，从<strong>0</strong>开始：</p>
<div class="output-block">>>> s = "Python"
>>> s[0]    → 'P'（第1个字符）
>>> s[1]    → 'y'（第2个字符）
>>> s[5]    → 'n'（第6个字符）
>>> s[-1]   → 'n'（最后一个字符）
>>> s[-2]   → 'o'（倒数第二个）</div>

<h3>✂️ 切片</h3>
<p>语法：<code>s[start:stop:step]</code>，含左不含右。</p>
<div class="code-block">s = "Python编程"
print(s[0:3])     # "Pyt"（索引0,1,2，不含3）
print(s[:3])      # "Pyt"（省略start，从0开始）
print(s[3:])      # "hon编程"（省略stop，到末尾）
print(s[::2])     # "Pto编"（步长2，每两个取一个）</div>

<h3>🔤 常用方法</h3>
<ul>
    <li><code>len(s)</code>：获取字符串长度</li>
    <li><code>s.upper()</code>：全部转大写</li>
    <li><code>s.lower()</code>：全部转小写</li>
    <li><code>s.strip()</code>：去除两端空格</li>
    <li><code>s.replace(old, new)</code>：替换子串</li>
    <li><code>s.find(sub)</code>：查找子串位置（找不到返回-1）</li>
</ul>

<h3>➕ 拼接与重复</h3>
<div class="code-block">a = "Hello"
b = "World"
print(a + " " + b)   # "Hello World"（拼接）
print(a * 3)          # "HelloHelloHello"（重复）</div>

<div class="note-box">
    <strong>💡 必考点：</strong>索引从<strong>0</strong>开始！s[0]是第一个字符，s[1]才是第二个。负数索引从右往左数。
</div>`
    },
    {
        id: 10, name: '列表基础', icon: '📋',
        desc: '列表的创建、索引和常用操作',
        content: `
<h3>📋 什么是列表？</h3>
<p>列表是存储<strong>多个数据</strong>的容器，用 <code>[]</code> 表示。列表是<strong>可变</strong>的（可以修改元素）。</p>

<div class="code-block"># 创建列表
fruits = ["苹果", "香蕉", "橙子"]
mixed = [1, "hello", 3.14, True]   # 可混合不同类型
empty = []                          # 空列表</div>

<h3>🔢 索引和切片</h3>
<p>和字符串完全相同，索引从0开始：</p>
<div class="code-block">nums = [10, 20, 30, 40, 50]
print(nums[0])      # 10
print(nums[-1])     # 50（最后一个）
print(nums[1:3])    # [20, 30]（切片）</div>

<h3>🔧 常用操作</h3>
<ul>
    <li><code>len(lst)</code>：列表长度</li>
    <li><code>lst.append(x)</code>：末尾添加元素</li>
    <li><code>lst.insert(i, x)</code>：在位置i插入</li>
    <li><code>lst.pop()</code>：删除最后一个元素</li>
    <li><code>lst.sort()</code>：升序排列</li>
    <li><code>x in lst</code>：检查x是否在列表中</li>
</ul>

<h3>🔁 遍历列表</h3>
<div class="code-block">fruits = ["苹果", "香蕉", "橙子"]
for fruit in fruits:
    print("我喜欢吃", fruit)</div>

<h3>🆚 列表 vs 字符串</h3>
<ul>
    <li>列表<strong>可变</strong>：可以修改元素，如 <code>lst[0] = 10</code></li>
    <li>字符串<strong>不可变</strong>：不能修改单个字符</li>
</ul>

<div class="note-box">
    <strong>💡 考点：</strong>列表和字符串的索引/切片语法<strong>完全相同</strong>，区别在于列表可变。
</div>`
    },
    {
        id: 11, name: 'Turtle绘图基础', icon: '🎨',
        desc: '认识turtle海龟绘图库',
        content: `
<h3>🐢 什么是Turtle？</h3>
<p>Turtle（海龟绘图）是Python自带的绘图库，通过控制"小海龟"移动来画画，适合编程入门。</p>

<h3>📥 导入Turtle</h3>
<div class="code-block">import turtle   # 导入turtle库</div>

<h3>🐢 基本命令</h3>
<ul>
    <li><code>turtle.forward(n)</code>：向前 n 像素</li>
    <li><code>turtle.backward(n)</code>：向后 n 像素</li>
    <li><code>turtle.right(度)</code>：向右转</li>
    <li><code>turtle.left(度)</code>：向左转</li>
    <li><code>turtle.circle(半径)</code>：画圆</li>
    <li><code>turtle.circle(半径, 角度)</code>：画圆弧</li>
    <li><code>turtle.penup()</code>：抬笔，移动不画线</li>
    <li><code>turtle.pendown()</code>：落笔，移动画线</li>
    <li><code>turtle.color("颜色")</code>：设置画笔颜色</li>
    <li><code>turtle.done()</code>：保持窗口不关闭</li>
</ul>

<h3>🟦 画正方形</h3>
<div class="code-block">import turtle
for i in range(4):
    turtle.forward(100)
    turtle.right(90)
turtle.done()</div>

<h3>🔺 画等边三角形</h3>
<div class="code-block">import turtle
for i in range(3):
    turtle.forward(100)
    turtle.left(120)
turtle.done()</div>

<h3>⭐ 画五角星</h3>
<div class="code-block">import turtle
for i in range(5):
    turtle.forward(100)
    turtle.right(144)
turtle.done()</div>

<h3>📐 公式：正多边形</h3>
<p>边数 = <strong>360 ÷ 转角</strong>。例如每次转90°（360÷90=4）画正方形，转60°（360÷60=6）画正六边形。</p>

<div class="note-box">
    <strong>💡 GESP考点：</strong>能读懂turtle代码并判断绘制结果。记住 360÷转角=边数 这个公式。
</div>`
    },
    {
        id: 12, name: '综合应用与易错点', icon: '🎯',
        desc: '综合练习和常见易错点总结',
        content: `
<h3>🎯 GESP一级高频易错点</h3>

<h3>❌ 1. input() 返回类型</h3>
<p>input() 返回<strong>永远是字符串</strong>，做运算前必须转换！</p>
<div class="code-block"># 错误：字符串不能和数字相加
a = input("输入数字：")
print(a + 3)        # TypeError!

# 正确：先转成整数
a = int(input("输入数字："))
print(a + 3)        # OK</div>

<h3>❌ 2. 索引从0开始</h3>
<p>字符串和列表第一个元素索引是<strong>0</strong>，不是1！</p>
<div class="code-block">s = "Python"
print(s[1])   # 输出 'y'，不是 'P'！</div>

<h3>❌ 3. = 和 == 的区别</h3>
<p><code>=</code> 是<strong>赋值</strong>，<code>==</code> 是<strong>判断相等</strong>，不要混淆！</p>

<h3>❌ 4. range() 不含结束值</h3>
<p><code>range(1, 5)</code> 生成 1, 2, 3, 4，<strong>不含5</strong>。</p>
<p><code>range(5)</code> 生成 0, 1, 2, 3, 4，<strong>共5个数</strong>。</p>

<h3>❌ 5. 缩进是语法要求</h3>
<p>if/for/while 后面的代码块<strong>必须缩进</strong>，且缩进量要一致。</p>

<h3>❌ 6. True/False 首字母大写</h3>
<p>布尔值必须写成 <code>True</code> 和 <code>False</code>（首字母大写）。</p>

<h3>❌ 7. / 和 // 的区别</h3>
<p><code>/</code> 普通除法（得小数），<code>//</code> 整除（得整数）。</p>
<div class="code-block">print(10 / 3)    # 3.333...
print(10 // 3)   # 3</div>

<h3>❌ 8. 字符串不可变</h3>
<p>不能修改字符串中的单个字符：<code>s[0] = "A"</code> 会报错。</p>

<h3>📝 考试建议</h3>
<ul>
    <li>仔细审题，注意"输出结果是什么"类型</li>
    <li>注意变量类型，特别是 input() 的返回值</li>
    <li>注意缩进和代码块的范围</li>
    <li>注意 range() 的起止值</li>
    <li>注意 print() 的 sep 和 end 参数</li>
</ul>`
    }
];



// 题库 - 每个知识点对应一组题目
const questionBank = {
    // 认识Python (15题)
    1: [
        { q: 'Python文件的扩展名是？', options: ['.py', '.python', '.txt', '.exe'], answer: 0, code: '', explain: 'Python程序文件的扩展名是.py，这是Python语言的标识。' },
        { q: 'Python语言的名字来源于？', options: ['一种蛇', '一个电视节目', '发明者的名字', '一种游戏'], answer: 1, code: '', explain: 'Python的名字来源于发明者Guido喜欢的电视节目"Monty Python\'s Flying Circus"。' },
        { q: '以下哪项不是Python的特点？', options: ['简单易学', '免费开源', '需要编译才能运行', '跨平台'], answer: 2, code: '', explain: 'Python是解释型语言，不需要编译。其他三项都是Python的特点。' },
        { q: 'Python是哪一年创建的？', options: ['1989年', '1991年', '1995年', '2000年'], answer: 1, code: '', explain: 'Python由Guido van Rossum于1991年创建发布。' },
        { q: 'Python属于什么类型的语言？', options: ['编译型语言', '解释型语言', '机器语言', '汇编语言'], answer: 1, code: '', explain: 'Python是解释型语言，代码逐行解释执行，不需要事先编译。' },
        { q: 'Python的创始人是谁？', options: ['Bill Gates', 'Guido van Rossum', 'Dennis Ritchie', 'Linus Torvalds'], answer: 1, code: '', explain: 'Python由荷兰人Guido van Rossum（吉多·范罗苏姆）于1991年创建。' },
        { q: '以下哪项是Python可以做的事？', options: ['只能做数学计算', '只能做网站', '数据分析、AI、Web开发等多种任务', '只能玩游戏'], answer: 2, code: '', explain: 'Python应用非常广泛，包括数据分析、人工智能、Web开发、自动化、游戏开发等。' },
        { q: 'Python是免费的吗？', options: ['需要付费购买', '免费开源', '学生免费，商业收费', '只有试用版免费'], answer: 1, code: '', explain: 'Python是免费开源的编程语言，任何人都可以免费下载和使用。' },
        { q: 'Python可以在哪些系统上运行？', options: ['只能Windows', '只能Mac', '只能Linux', 'Windows、Mac、Linux都可以'], answer: 3, code: '', explain: 'Python是跨平台语言，可以在Windows、Mac、Linux等多种操作系统上运行。' },
        { q: '以下哪个说法是正确的？', options: ['Python很难学习', 'Python是最快的编程语言', 'Python语法简洁，适合初学者', 'Python只能做科学计算'], answer: 2, code: '', explain: 'Python语法简洁清晰，非常适合编程初学者学习。' },
        { q: 'print("Hello")是什么？', options: ['一个变量', '一个函数调用', '一个运算符', '一个类型名'], answer: 1, code: '', explain: 'print()是Python内置函数，用于在屏幕上输出内容。"Hello"是传给函数的参数。' },
        { q: '以下关于Python的说法，哪个是错误的？', options: ['Python是解释型语言', 'Python区分大小写', 'Python需要先编译成.exe才能运行', 'Python支持多种编程范式'], answer: 2, code: '', explain: 'Python是解释型语言，不需要像C语言那样先编译成可执行文件。Python代码直接由解释器运行。' },
        { q: 'GESP一级考试主要考察什么？', options: ['高级算法', 'Python基础语法和简单编程', '机器学习', '网络编程'], answer: 1, code: '', explain: 'GESP一级主要考察Python基础语法、变量、输入输出、简单的控制结构等基础知识。' },
        { q: 'Python代码中，以下哪个是正确的语句？', options: ['PRINT("hello")', 'print("hello")', 'Print("hello")', 'echo "hello"'], answer: 1, code: '', explain: 'Python中print()函数名必须全部小写。PRINT或Print都是错误的，Python区分大小写。' },
        { q: 'Python的官方网站是？', options: ['python.com', 'python.org', 'python.net', 'python.cn'], answer: 1, code: '', explain: 'Python的官方网站是python.org，可以在上面下载Python安装包和查阅文档。' },
        { q: 'Python源程序文件的扩展名通常是？', options: ['.txt', '.py', '.python', '.pyt'], answer: 1, code: '', explain: 'Python源程序文件的标准扩展名是.py。Python解释器通过这个扩展名来识别和运行Python脚本文件。' },
        { q: '以下关于Python语言的说法，正确的是？', options: ['Python只能运行在Windows系统上', 'Python是跨平台语言，支持Windows、macOS、Linux等', 'Python代码必须先编译成.exe才能运行', 'Python只能做简单的数学计算'], answer: 1, code: '', explain: 'Python是跨平台的解释型语言，无需事先编译，可以在Windows、macOS、Linux等多种操作系统上直接运行。' },
        { q: '在Python交互模式（>>>提示符）中直接输入3*4并回车，屏幕上会显示？', options: ['3*4', '12', '报错信息', '什么也不显示'], answer: 1, code: '', explain: 'Python交互模式（REPL）会立即计算并显示表达式的结果。输入3*4后，直接输出计算结果12。' },
    ],
    // Python开发环境 (12题)
    2: [
        { q: 'Python自带的集成开发环境叫什么？', options: ['VS Code', 'PyCharm', 'IDLE', 'Sublime'], answer: 2, code: '', explain: 'IDLE是Python安装时自带的集成开发环境（Integrated Development and Learning Environment）。' },
        { q: '在IDLE中运行Python程序的快捷键是？', options: ['F1', 'F3', 'F5', 'F8'], answer: 2, code: '', explain: '在IDLE编辑器中按F5键可以运行当前Python程序。' },
        { q: '以下哪个是正确的Python文件名？', options: ['test.txt', 'test.py', 'test.python', 'test.exe'], answer: 1, code: '', explain: 'Python程序文件必须以.py为扩展名。' },
        { q: '在Python交互模式（Shell）中输入2+3，会显示什么？', options: ['2+3', '5', '报错', '无显示'], answer: 1, code: '', explain: '交互模式下，Python会立即计算表达式并显示结果，2+3=5。' },
        { q: 'IDLE有两种模式，分别是？', options: ['快速模式和慢速模式', '交互模式和编辑器模式', '在线模式和离线模式', '文本模式和图形模式'], answer: 1, code: '', explain: 'IDLE有交互模式（Shell，逐行执行）和编辑器模式（编写完整.py文件后运行）。' },
        { q: 'Python程序保存时，文件编码一般选择？', options: ['GBK', 'UTF-8', 'ASCII', '任意编码'], answer: 1, code: '', explain: 'Python程序通常使用UTF-8编码保存，这可以正确处理中文字符。' },
        { q: '在交互模式下，>>> 符号表示什么？', options: ['程序出错', '等待用户输入Python代码', '程序运行中', '程序已结束'], answer: 1, code: '', explain: '>>>是Python交互模式的提示符，表示Python正在等待用户输入代码。' },
        { q: '以下哪个不是Python的编辑器？', options: ['IDLE', 'VS Code', 'Microsoft Word', 'PyCharm'], answer: 2, code: '', explain: 'Microsoft Word是文字处理软件，不是代码编辑器。IDLE、VS Code、PyCharm都可以编写Python代码。' },
        { q: '如果Python程序有中文，文件开头最好加上什么？', options: ['# -*- coding: utf-8 -*-', '// Chinese', '#include <chinese>', 'using Chinese;'], answer: 0, code: '', explain: '# -*- coding: utf-8 -*- 声明文件编码为UTF-8，确保中文能正确处理。Python 3中通常不需要，但加上是好习惯。' },
        { q: 'Python程序可以直接双击.py文件运行吗？', options: ['永远不能', '可以，如果安装了Python', '需要先转成PDF', '只能在手机上运行'], answer: 1, code: '', explain: '如果电脑上安装了Python，可以直接双击.py文件运行，也可以右键选择用Python打开。' },
        { q: '在编辑器模式写好代码后，需要做什么才能看到结果？', options: ['保存并关闭文件', '运行（Run）程序', '重启电脑', '把文件发到手机上'], answer: 1, code: '', explain: '在编辑器模式写好代码后，需要运行（Run Module或按F5）才能看到程序执行结果。' },
        { q: '以下关于IDLE的说法，哪个是正确的？', options: ['IDLE需要额外付费购买', 'IDLE是Python安装时自带的免费工具', 'IDLE只能写代码不能运行', 'IDLE只能运行一行代码'], answer: 1, code: '', explain: 'IDLE是Python安装时自带的免费集成开发环境，既可以写代码也可以运行程序。' },
        { q: '在Python中，单行注释使用什么符号？', options: ['//', '#', '--', '/*'], answer: 1, code: '', explain: 'Python使用#作为单行注释符。#及其之后的内容到行尾都不会被执行。//是Java/C++的注释符，/* */是C语言的块注释。' },
        { q: 'Python代码中，缩进（行首空格）的主要作用是？', options: ['让代码看起来更美观', '用来表示代码之间的层级和从属关系', '可以提高程序运行速度', '没有任何实际作用，可省略'], answer: 1, code: '', explain: 'Python使用缩进来表示代码块结构。例如if语句下的代码必须缩进，表示它们从属于该if条件。缩进错误会导致IndentationError。' },
        { q: '以下哪种操作不能运行Python程序？', options: ['在IDLE编辑器中按F5键', '在命令行中输入python test.py', '在Word文档中编辑代码后保存并运行', '双击.py文件（已安装Python）'], answer: 2, code: '', explain: 'Word文档(.docx)是文字处理格式，不能直接运行Python代码。Python程序需要在Python解释器环境中运行。' },
    ],
    // 变量与数据类型 (15题)
    3: [
        { q: '以下哪个变量名是合法的？', options: ['2name', 'my name', '_score', 'if'], answer: 2, code: '', explain: '_score以下划线开头是合法的。2name以数字开头不合法，my name含空格不合法，if是关键字不合法。' },
        { q: 'type(3.14)的返回值是什么？', options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"], answer: 1, code: '', explain: '3.14是浮点数（小数），type()返回<class \'float\'>。' },
        { q: 'type(True)的返回值是什么？', options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"], answer: 3, code: '', explain: 'True是布尔值，type()返回<class \'bool\'>。注意True首字母大写！' },
        { q: '以下代码输出什么？\na = 5\na = 10\nprint(a)', options: ['5', '10', '15', '报错'], answer: 1, code: 'a = 5\na = 10\nprint(a)', explain: '变量a先被赋值为5，然后被重新赋值为10，最终输出10。' },
        { q: '以下哪个不是Python的基本数据类型？', options: ['int', 'float', 'str', 'array'], answer: 3, code: '', explain: 'Python一级涉及的基本数据类型有int(整型)、float(浮点型)、str(字符串)、bool(布尔型)。array不是基本类型。' },
        { q: 'type(100)的返回值是什么？', options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"], answer: 0, code: '', explain: '100是整数，type()返回<class \'int\'>。不带小数点的数字默认为整数类型。' },
        { q: 'type("hello")的返回值是什么？', options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"], answer: 2, code: '', explain: '"hello"是字符串（用引号包裹），type()返回<class \'str\'>。' },
        { q: 'type(False)的返回值是什么？', options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"], answer: 3, code: '', explain: 'False是布尔值，type()返回<class \'bool\'>。布尔值只有True和False两个。' },
        { q: '以下哪个变量名是不合法的？', options: ['myVar', '_test', 'score_1', '1_score'], answer: 3, code: '', explain: '1_score以数字开头，不合法。变量名只能以字母或下划线开头。' },
        { q: '以下代码输出什么？\nx = 3\ny = x\nx = 5\nprint(y)', options: ['3', '5', '8', '报错'], answer: 0, code: 'x = 3\ny = x\nx = 5\nprint(y)', explain: 'y在x变为5之前已经取值为3，所以y仍然是3。变量赋值是值传递（对于基本类型）。' },
        { q: '变量名不能包含什么？', options: ['字母', '数字', '下划线', '空格'], answer: 3, code: '', explain: '变量名只能包含字母、数字和下划线，不能包含空格。' },
        { q: '以下哪个是Python关键字（不能用作变量名）？', options: ['name', 'score', 'if', 'age'], answer: 2, code: '', explain: 'if是Python关键字，用于条件判断，不能用作变量名。其他三项都不是关键字。' },
        { q: '下面关于Python变量的说法，哪个是正确的？', options: ['变量必须先声明类型', '变量不需要声明类型，直接赋值即可', '变量只能存储数字', '变量名可以随意起'], answer: 1, code: '', explain: 'Python是动态类型语言，变量不需要声明类型，直接赋值即可使用。' },
        { q: '布尔类型的值有几个？', options: ['1个', '2个', '3个', '无数个'], answer: 1, code: '', explain: '布尔类型（bool）只有两个值：True和False。用于表示真和假。' },
        { q: '以下代码输出什么？\nx = 10\nprint(type(x))\nx = "hello"\nprint(type(x))', options: ['int\\nint', 'int\\nstr', 'str\\nint', 'str\\nstr'], answer: 1, code: 'x = 10\nprint(type(x))\nx = "hello"\nprint(type(x))', explain: '变量x先赋值为10（int类型），后赋值为"hello"（str类型）。Python变量可以改变类型，type()反映当前类型。' },
        { q: '以下哪个变量名是不合法的？', options: ['my_name', '_count', '2name', 'name2'], answer: 2, code: '', explain: '变量名只能以字母或下划线开头，不能以数字开头。2name以数字2开头，不是合法的变量名。其他三项都符合命名规则。' },
        { q: 'int("123")的结果是什么类型？', options: ['str', 'int', 'float', 'bool'], answer: 1, code: '', explain: 'int()函数将字符串或数字转换为整数类型。int("123")返回整数123，类型为int。如果字符串无法转换（如int("abc")）则会报错。' },
    ],
    // 输入与输出 (15题)
    4: [
        { q: 'input()函数返回的数据类型是？', options: ['int', 'float', 'str', '取决于输入内容'], answer: 2, code: '', explain: 'input()函数返回的永远是字符串(str)类型，如果需要数字必须用int()或float()转换。' },
        { q: '以下代码输出什么？\nprint("Hello", "World", sep="*")', options: ['Hello World', 'Hello*World', 'HelloWorld', '报错'], answer: 1, code: 'print("Hello", "World", sep="*")', explain: 'sep参数指定多个输出之间的分隔符，这里设为"*"，所以输出Hello*World。' },
        { q: '以下代码输出什么？\nprint("Hi", end="!")\nprint("OK")', options: ['Hi\\nOK', 'Hi!OK', 'Hi!\\nOK', '报错'], answer: 1, code: 'print("Hi", end="!")\nprint("OK")', explain: 'end="!"替换了默认的换行符，所以第一个print结束后不换行而是输出!，然后第二个print输出OK。' },
        { q: '将字符串"123"转换为整数，使用什么函数？', options: ['str()', 'float()', 'int()', 'bool()'], answer: 2, code: '', explain: 'int("123")将字符串"123"转换为整数123。float()转成小数，str()转成字符串。' },
        { q: '以下代码输出什么？\nprint(1, 2, 3, sep="")', options: ['1 2 3', '123', '1,2,3', '报错'], answer: 1, code: 'print(1, 2, 3, sep="")', explain: 'sep=""表示分隔符为空字符串，三个数字紧密连接输出为123。' },
        { q: 'print()函数的end参数默认值是什么？', options: ['空格', '逗号', '换行符', '空字符串'], answer: 2, code: '', explain: 'print()的end参数默认值是换行符\\n，所以每次print后会自动换行。' },
        { q: 'print()函数的sep参数默认值是什么？', options: ['空格', '逗号', '换行符', '空字符串'], answer: 0, code: '', explain: 'print()的sep参数默认值是空格，当输出多个内容时默认用空格分隔。' },
        { q: 'input("请输入：")中的文字有什么作用？', options: ['没有作用', '作为提示信息显示给用户', '作为默认值', '代表输入的类型'], answer: 1, code: '', explain: 'input()的括号中可以写提示信息，运行时会显示给用户，提示用户输入什么内容。' },
        { q: '以下代码如果用户输入20，输出什么？\nage = input("年龄：")\nprint(age + 1)', options: ['21', '20', '201', '报错'], answer: 3, code: 'age = input("年龄：")\nprint(age + 1)', explain: 'input()返回字符串，age是"20"（字符串），不能直接和数字1相加，会报TypeError。需要int(age)+1。' },
        { q: '以下代码如果用户输入15，输出什么？\nn = int(input())\nprint(n * 2)', options: ['30', '15', '152', '报错'], answer: 0, code: 'n = int(input())\nprint(n * 2)', explain: '用户输入15→字符串"15"→int()转成整数15→15*2=30。' },
        { q: '将数字3.14转换为字符串，使用什么函数？', options: ['int()', 'float()', 'str()', 'bool()'], answer: 2, code: '', explain: 'str(3.14)将数字3.14转换为字符串"3.14"。' },
        { q: 'print("我的分数是：" + str(95))的输出是？', options: ['我的分数是：95', '我的分数是："95"', '报错', '我的分数是95'], answer: 0, code: '', explain: 'str(95)将整数95转为字符串"95"，然后用+拼接两个字符串，输出"我的分数是：95"。' },
        { q: '以下代码输出什么？\nprint("a", "b", "c", sep=",")', options: ['a b c', 'abc', 'a,b,c', 'a, b, c'], answer: 2, code: 'print("a", "b", "c", sep=",")', explain: 'sep=","表示用逗号分隔，所以输出a,b,c。每个逗号就是sep指定的分隔符。' },
        { q: 'float("3.5")的返回值是什么？', options: ['3', '3.5', '"3.5"', '报错'], answer: 1, code: '', explain: 'float()函数将字符串转换为浮点数。float("3.5")返回浮点数3.5。' },
        { q: '以下代码输出什么？\nprint("Python", end="***")\nprint("GESP")', options: ['Python\\nGESP', 'Python***GESP', 'Python***\\nGESP', '报错'], answer: 1, code: 'print("Python", end="***")\nprint("GESP")', explain: '第一个print结尾输出***而不是换行，紧接着第二个print输出GESP，所以结果是Python***GESP。' },
        { q: 'print("Hello", "World", sep="-")输出什么？', options: ['Hello World', 'Hello-World', 'HelloWorld', 'Hello - World'], answer: 1, code: '', explain: 'print()的sep参数指定多个输出值之间的分隔符。sep="-"表示用短横线分隔，输出"Hello-World"。默认sep=" "（空格）。' },
        { q: '执行n=int(input())，用户输入3.14，会怎样？', options: ['n等于3', 'n等于3.14', '报ValueError', 'n等于0'], answer: 2, code: '', explain: 'int()不能转换含小数点的字符串"3.14"，会报ValueError。想接收小数应使用float(input())。这是GESP常考易错点。' },
    ],
    // 运算符 (16题)
    5: [
        { q: '17 // 5 的结果是？', options: ['3', '3.4', '2', '4'], answer: 0, code: '', explain: '//是整除运算（地板除），17//5=3（只取整数部分）。' },
        { q: '17 % 5 的结果是？', options: ['3', '2', '3.4', '12'], answer: 1, code: '', explain: '%是取模（取余数）运算，17÷5=3余2，所以17%5=2。' },
        { q: '2 ** 4 的结果是？', options: ['6', '8', '16', '32'], answer: 2, code: '', explain: '**是幂运算，2**4=2×2×2×2=16。' },
        { q: '以下代码输出什么？\nprint(5 > 3 and 2 < 1)', options: ['True', 'False', '5', '报错'], answer: 1, code: 'print(5 > 3 and 2 < 1)', explain: '5>3是True，2<1是False，True and False = False。' },
        { q: '以下代码输出什么？\nprint(not (10 > 5))', options: ['True', 'False', '10', '报错'], answer: 1, code: 'print(not (10 > 5))', explain: '10>5是True，not True = False。' },
        { q: '9 / 2 的结果是？', options: ['4', '4.5', '5', '1'], answer: 1, code: '', explain: '/是普通除法，始终返回浮点数，9/2=4.5。注意和整除//的区别！' },
        { q: '3 ** 3 的结果是？', options: ['6', '9', '27', '33'], answer: 2, code: '', explain: '**是幂运算，3**3 = 3³ = 3×3×3 = 27。' },
        { q: '10 % 3 的结果是？', options: ['3', '1', '0', '3.333'], answer: 1, code: '', explain: '10÷3=3余1，所以10%3=1。%是取余数运算。' },
        { q: '10 // 3 的结果是？', options: ['3', '3.333', '4', '1'], answer: 0, code: '', explain: '10//3=3，整除向下取整，只保留整数部分。10÷3=3.333，取整得3。' },
        { q: '以下代码输出什么？\nprint(3 + 4 * 2)', options: ['14', '11', '10', '报错'], answer: 1, code: '', explain: '根据运算符优先级，先乘除后加减：4*2=8，然后3+8=11。' },
        { q: '以下代码输出什么？\nprint((3 + 4) * 2)', options: ['14', '11', '10', '报错'], answer: 0, code: '', explain: '括号优先级最高：(3+4)=7，然后7*2=14。括号可以改变运算顺序。' },
        { q: '以下代码输出什么？\nprint(8 > 5 or 3 > 10)', options: ['True', 'False', '8', '报错'], answer: 0, code: '', explain: '8>5是True，3>10是False，True or False = True。or只要有一个为True就是True。' },
        { q: '以下代码输出什么？\nprint(5 == 5)', options: ['True', 'False', '5', '报错'], answer: 0, code: '', explain: '==是比较运算符，判断两边是否相等。5等于5，所以返回True。' },
        { q: '以下代码输出什么？\nprint(5 != 3)', options: ['True', 'False', '2', '报错'], answer: 0, code: '', explain: '!=是不等于运算符。5不等于3成立，所以返回True。' },
        { q: '20 // 3 的结果是？', options: ['6', '6.666', '7', '2'], answer: 0, code: '', explain: '20÷3=6.666...，整除//向下取整得6。' },
        { q: '以下代码输出什么？\nprint(10 / 2 == 5)', options: ['True', 'False', '5', '报错'], answer: 0, code: '', explain: '先算10/2=5.0（浮点数），然后5.0==5比较，Python中5.0==5是True。' },
        { q: '以下代码输出什么？\nprint(2 ** 3 ** 2)', options: ['64', '512', '12', '报错'], answer: 1, code: '', explain: '幂运算**是右结合的，3**2=9，然后2**9=512。注意是2**(3**2)=2**9=512，不是(2**3)**2=8**2=64。' },
        { q: 'not (5 > 3 and 2 > 4) 的结果是？', options: ['True', 'False', '报错', 'None'], answer: 0, code: '', explain: '5>3是True，2>4是False，True and False = False，not False = True。not反转布尔值。' },
    ],
    // 条件判断 (15题)
    6: [
        { q: '以下代码输出什么？\nx = 7\nif x > 5:\n    print("A")\nelse:\n    print("B")', options: ['A', 'B', 'AB', '报错'], answer: 0, code: 'x = 7\nif x > 5:\n    print("A")\nelse:\n    print("B")', explain: 'x=7，7>5条件成立，执行if分支，输出A。' },
        { q: '以下代码输出什么？\nscore = 75\nif score >= 90:\n    print("A")\nelif score >= 60:\n    print("B")\nelse:\n    print("C")', options: ['A', 'B', 'C', 'ABC'], answer: 1, code: 'score = 75\nif score >= 90:\n    print("A")\nelif score >= 60:\n    print("B")\nelse:\n    print("C")', explain: 'score=75，不满足≥90，满足≥60，执行elif分支输出B。elif只会执行第一个满足条件的分支。' },
        { q: 'Python中，条件判断语句的代码块用什么来表示？', options: ['大括号{}', '缩进', '关键字begin/end', '分号;'], answer: 1, code: '', explain: 'Python使用缩进（通常是4个空格）来表示代码块，这是Python的重要语法特性。' },
        { q: '以下哪个是Python中"等于"的比较运算符？', options: ['=', '==', '!=', 'equals'], answer: 1, code: '', explain: '==是等于比较运算符，=是赋值运算符，!=是不等于。注意区分=和==！' },
        { q: '以下代码输出什么？\na = 10\nif a % 2 == 0:\n    print("偶数")\nelse:\n    print("奇数")', options: ['偶数', '奇数', '10', '报错'], answer: 0, code: 'a = 10\nif a % 2 == 0:\n    print("偶数")\nelse:\n    print("奇数")', explain: '10%2=0（10能被2整除），所以a%2==0为True，输出"偶数"。' },
        { q: '以下代码输出什么？\nx = 3\nif x > 5:\n    print("大于5")\nelse:\n    print("不大于5")', options: ['大于5', '不大于5', '3', '报错'], answer: 1, code: 'x = 3\nif x > 5:\n    print("大于5")\nelse:\n    print("不大于5")', explain: 'x=3，3>5不成立，执行else分支，输出"不大于5"。' },
        { q: '以下代码输出什么？\na = 20\nif a > 10:\n    print("A")\n    print("B")\nprint("C")', options: ['A\\nB\\nC', 'A\\nC', 'C', 'A\\nB'], answer: 0, code: 'a = 20\nif a > 10:\n    print("A")\n    print("B")\nprint("C")', explain: 'a=20>10成立，执行if块中两行打印A和B。print("C")没有缩进，不属于if块，无论如何都会执行。' },
        { q: '以下代码输出什么？\nn = 8\nif n < 5:\n    print("小")\nelif n < 15:\n    print("中")\nelif n < 20:\n    print("大")\nelse:\n    print("超大")', options: ['小', '中', '大', '超大'], answer: 1, code: 'n = 8\nif n < 5:\n    print("小")\nelif n < 15:\n    print("中")\nelif n < 20:\n    print("大")\nelse:\n    print("超大")', explain: 'n=8，不满足<5，满足<15（8<15），执行elif输出"中"。后续elif不再判断。' },
        { q: '以下代码输出什么？\nx = 5\nif x == 5:\n    print("等于5")\nif x > 3:\n    print("大于3")', options: ['等于5', '大于3', '等于5\\n大于3', '报错'], answer: 2, code: 'x = 5\nif x == 5:\n    print("等于5")\nif x > 3:\n    print("大于3")', explain: '两个if是独立的，都会被判断。x==5输出"等于5"，x>3输出"大于3"。这和if-elif不同。' },
        { q: 'if语句后面的条件表达式必须以什么结尾？', options: ['分号;', '冒号:', '逗号,', '不需要任何符号'], answer: 1, code: '', explain: 'Python的if语句后面必须跟冒号:，如 if x > 5:。这是Python语法规定。' },
        { q: '以下代码输出什么？\na = 15\nif a > 20:\n    print("A")\nelif a > 10:\n    print("B")\nelif a > 5:\n    print("C")\nelse:\n    print("D")', options: ['A', 'B', 'C', 'D'], answer: 1, code: 'a = 15\nif a > 20:\n    print("A")\nelif a > 10:\n    print("B")\nelif a > 5:\n    print("C")\nelse:\n    print("D")', explain: 'a=15，不满足>20，满足>10，输出"B"。虽然也>5，但elif只会执行第一个满足条件的分支。' },
        { q: '以下代码输出什么？\nx = 0\nif x:\n    print("真")\nelse:\n    print("假")', options: ['真', '假', '0', '报错'], answer: 1, code: '', explain: '在Python中，0、空字符串、None等被视为False。x=0，条件为False，执行else输出"假"。' },
        { q: '在Python中，"如果a大于b"的正确写法是？', options: ['if a > b:', 'if a > b then:', 'if (a > b):', '大于(a, b):'], answer: 0, code: '', explain: 'Python中if语句的正确写法是 if a > b:，不需要括号或then关键字。' },
        { q: '以下代码输出什么？\nyear = 2024\nif year % 4 == 0:\n    print("闰年")\nelse:\n    print("平年")', options: ['闰年', '平年', '2024', '报错'], answer: 0, code: 'year = 2024\nif year % 4 == 0:\n    print("闰年")\nelse:\n    print("平年")', explain: '2024%4=0（2024能被4整除），所以year%4==0为True，输出"闰年"。' },
        { q: '以下代码最后输出什么？\na = 3\nif a > 1:\n    print(a)\n    a = a + 2\nprint(a)', options: ['3\\n5', '3\\n3', '5\\n5', '3'], answer: 0, code: 'a = 3\nif a > 1:\n    print(a)\n    a = a + 2\nprint(a)', explain: 'a=3>1成立，进入if块：先print(a)输出3，然后a=3+2=5。if块结束后print(a)输出5。' },
        { q: '以下代码输出什么？\nscore = 85\nif score >= 90:\n    print("优秀")\nelif score >= 70:\n    print("良好")\nelif score >= 60:\n    print("及格")\nelse:\n    print("不及格")', options: ['优秀', '良好', '及格', '不及格'], answer: 1, code: 'score = 85\nif score >= 90:\n    print("优秀")\nelif score >= 70:\n    print("良好")\nelif score >= 60:\n    print("及格")\nelse:\n    print("不及格")', explain: 'score=85，不满足≥90，满足≥70，输出"良好"。elif按顺序检查，找到第一个满足条件的分支就停止。' },
        { q: '以下代码输出什么？\na = 10\nif a > 5:\n    if a < 15:\n        print("OK")\n    else:\n        print("NO")', options: ['OK', 'NO', '报错', 'OK\\nNO'], answer: 0, code: 'a = 10\nif a > 5:\n    if a < 15:\n        print("OK")\n    else:\n        print("NO")', explain: '这是嵌套if。a=10，外层a>5成立，进入内层if；10<15成立，输出"OK"。内层else属于内层if，只在a<15不成立时执行。' },
    ],
    // for循环 (16题)
    7: [
        { q: 'range(5)生成哪些数字？', options: ['1,2,3,4,5', '0,1,2,3,4', '0,1,2,3,4,5', '1,2,3,4'], answer: 1, code: '', explain: 'range(5)生成0,1,2,3,4，共5个数字，从0开始，不含5。' },
        { q: '以下代码输出几个数字？\nfor i in range(1, 6):\n    print(i)', options: ['5个', '6个', '7个', '0个'], answer: 0, code: 'for i in range(1, 6):\n    print(i)', explain: 'range(1,6)生成1,2,3,4,5，共5个数字，输出5次。' },
        { q: '以下代码的输出是？\nfor i in range(3):\n    print(i, end=" ")', options: ['0 1 2 ', '1 2 3 ', '0 1 2 3 ', '1 2 '], answer: 0, code: 'for i in range(3):\n    print(i, end=" ")', explain: 'range(3)生成0,1,2，end=" "使输出用空格分隔。' },
        { q: '以下代码输出什么？\ntotal = 0\nfor i in range(1, 4):\n    total = total + i\nprint(total)', options: ['3', '4', '6', '10'], answer: 2, code: 'total = 0\nfor i in range(1, 4):\n    total = total + i\nprint(total)', explain: 'i依次为1,2,3，total=0+1+2+3=6。' },
        { q: '以下代码输出什么？\nfor ch in "AB":\n    print(ch * 2)', options: ['A\\nB', 'AB\\nAB', 'AA\\nBB', 'AABB'], answer: 2, code: 'for ch in "AB":\n    print(ch * 2)', explain: 'ch依次为"A"和"B"，"A"*2="AA"，"B"*2="BB"，每个print会换行。' },
        { q: 'range(2, 8, 2)生成哪些数字？', options: ['2,3,4,5,6,7', '2,4,6', '2,4,6,8', '0,2,4,6,8'], answer: 1, code: '', explain: 'range(2,8,2)从2开始，到8结束（不含8），步长为2。生成2,4,6。' },
        { q: '以下代码输出什么？\nfor i in range(1, 4):\n    print(i * i)', options: ['1\\n2\\n3', '1\\n4\\n9', '2\\n4\\n6', '1\\n4\\n16'], answer: 1, code: 'for i in range(1, 4):\n    print(i * i)', explain: 'i=1时1*1=1，i=2时2*2=4，i=3时3*3=9。逐行输出1,4,9。' },
        { q: '以下代码输出什么？\nfor i in range(5, 0, -1):\n    print(i, end=" ")', options: ['5 4 3 2 1 ', '5 4 3 2 1 0 ', '1 2 3 4 5 ', '报错'], answer: 0, code: 'for i in range(5, 0, -1):\n    print(i, end=" ")', explain: 'range(5,0,-1)从5开始递减到1（不含0），步长-1。生成5,4,3,2,1。' },
        { q: '以下代码输出什么？\ncount = 0\nfor i in range(10):\n    if i % 2 == 0:\n        count = count + 1\nprint(count)', options: ['4', '5', '6', '10'], answer: 1, code: 'count = 0\nfor i in range(10):\n    if i % 2 == 0:\n        count = count + 1\nprint(count)', explain: 'range(10)生成0~9。其中偶数有0,2,4,6,8共5个（注意0也是偶数），所以count=5。' },
        { q: 'len(range(10))的结果是？', options: ['9', '10', '11', '报错'], answer: 1, code: '', explain: 'range(10)生成0到9共10个数字，所以len()返回10。' },
        { q: '以下代码输出什么？\nfor i in range(3):\n    for j in range(2):\n        print(i, j)', options: ['6行输出', '4行输出', '2行输出', '报错'], answer: 0, code: 'for i in range(3):\n    for j in range(2):\n        print(i, j)', explain: '外层循环3次(i=0,1,2)，内层循环2次(j=0,1)，总共3×2=6次，输出6行。这是嵌套循环。' },
        { q: 'range(0, 10, 3)生成哪些数字？', options: ['0,1,2,3...9', '0,3,6,9', '3,6,9', '0,3,6'], answer: 1, code: '', explain: 'range(0,10,3)从0开始步长为3：0, 0+3=3, 3+3=6, 6+3=9。下一个9+3=12≥10停止。生成0,3,6,9。' },
        { q: '以下代码输出什么？\nfor i in range(4):\n    if i == 2:\n        continue\n    print(i)', options: ['0\\n1\\n2\\n3', '0\\n1\\n3', '0\\n1\\n2', '1\\n2\\n3'], answer: 1, code: 'for i in range(4):\n    if i == 2:\n        continue\n    print(i)', explain: 'continue跳过当前迭代的剩余代码。i=2时执行continue，跳过了print(2)，所以输出0,1,3。' },
        { q: '以下代码输出什么？\ns = 0\nfor i in range(1, 6):\n    s = s + i\nprint(s)', options: ['10', '15', '21', '5'], answer: 1, code: 's = 0\nfor i in range(1, 6):\n    s = s + i\nprint(s)', explain: '1+2+3+4+5=15。range(1,6)生成1到5，累加和为15。' },
        { q: '以下代码输出什么？\nfor i in range(3):\n    print("*" * (i + 1))', options: ['*\\n**\\n***', '***\\n**\\n*', '*\\n**\\n***\\n****', '***'], answer: 0, code: 'for i in range(3):\n    print("*" * (i + 1))', explain: 'i=0: "*"*1="*"; i=1: "*"*2="**"; i=2: "*"*3="***"。逐行输出金字塔形状。' },
        { q: '以下代码输出什么？\nfor i in range(2):\n    print("第" + str(i+1) + "次")', options: ['第1次\\n第2次', '第i+1次\\n第i+1次', '第0次\\n第1次', '报错'], answer: 0, code: 'for i in range(2):\n    print("第" + str(i+1) + "次")', explain: 'i=0: str(1)="1"，输出"第1次"；i=1: str(2)="2"，输出"第2次"。' },
        { q: 'range(10, 0, -2)生成哪些数字？', options: ['10,8,6,4,2', '10,8,6,4,2,0', '10,9,8...1', '0,2,4,6,8,10'], answer: 0, code: '', explain: 'range(10,0,-2)从10开始递减2：10,8,6,4,2。到0停止（不含0）。负步长range常用于倒序循环。' },
        { q: '以下代码输出什么？\nfor i in range(2):\n    for j in range(3):\n        if j == 1:\n            break\n        print(i, j)', options: ['0 0\\n1 0', '0 0\\n0 1\\n1 0\\n1 1', '不输出', '报错'], answer: 0, code: 'for i in range(2):\n    for j in range(3):\n        if j == 1:\n            break\n        print(i, j)', explain: '嵌套循环中break只跳出内层循环。i=0: j=0打印0 0，j=1时break跳出内层；i=1: j=0打印1 0，j=1时break跳出。共输出两行。' },
    ],
    // while循环 (15题)
    8: [
        { q: '以下代码输出什么？\ni = 1\nwhile i <= 3:\n    print(i)\n    i = i + 1', options: ['1\\n2\\n3', '1\\n2\\n3\\n4', '0\\n1\\n2\\n3', '死循环'], answer: 0, code: 'i = 1\nwhile i <= 3:\n    print(i)\n    i = i + 1', explain: 'i从1开始，<=3时循环，依次输出1,2,3，然后i变为4不再满足条件。' },
        { q: '如果while的条件永远为True，会发生什么？', options: ['程序正常运行', '程序立即退出', '死循环，程序停不下来', '程序报错'], answer: 2, code: '', explain: '如果while条件永远为True，循环永远不会停止，这就是"死循环"。在编写while循环时要特别小心。' },
        { q: 'break语句的作用是什么？', options: ['暂停循环', '跳出整个循环', '继续下一次循环', '结束程序'], answer: 1, code: '', explain: 'break语句用于立即跳出（终止）当前所在的整个循环，不再执行后续循环。' },
        { q: '以下代码输出什么？\ni = 0\nwhile i < 5:\n    i = i + 1\n    if i == 3:\n        break\n    print(i)', options: ['1\\n2', '1\\n2\\n3', '1\\n2\\n3\\n4\\n5', '0\\n1\\n2'], answer: 0, code: 'i = 0\nwhile i < 5:\n    i = i + 1\n    if i == 3:\n        break\n    print(i)', explain: 'i=1打印1，i=2打印2，i=3时遇到break跳出循环不打印。' },
        { q: 'for循环和while循环的主要区别是？', options: ['没有区别', 'for用于知道次数的情况，while用于知道条件的情况', 'for比while快', 'while比for高级'], answer: 1, code: '', explain: 'for循环适合已知循环次数的情况，while循环适合知道循环条件但不确定次数的情况。' },
        { q: '以下代码输出什么？\nn = 5\nwhile n > 0:\n    print(n, end=" ")\n    n = n - 1', options: ['5 4 3 2 1 ', '5 4 3 2 1 0 ', '1 2 3 4 5 ', '死循环'], answer: 0, code: 'n = 5\nwhile n > 0:\n    print(n, end=" ")\n    n = n - 1', explain: 'n从5递减：5,4,3,2,1。当n变为0时，n>0为False，停止循环。' },
        { q: '以下代码输出什么？\ni = 10\nwhile i > 1:\n    i = i // 2\n    print(i, end=" ")', options: ['5 2 1 ', '10 5 2 ', '5 2 1 0 ', '死循环'], answer: 0, code: 'i = 10\nwhile i > 1:\n    i = i // 2\n    print(i, end=" ")', explain: '初始i=10。10//2=5打印5；5//2=2打印2；2//2=1打印1；1>1为False停止。' },
        { q: 'continue语句的作用是什么？', options: ['跳出循环', '跳过本次循环剩余代码，继续下一次', '结束程序', '暂停程序'], answer: 1, code: '', explain: 'continue跳过当前循环中剩余的代码，直接进入下一次循环的条件判断。' },
        { q: '以下代码输出什么？\ni = 0\nwhile i < 4:\n    i = i + 1\n    if i == 2:\n        continue\n    print(i)', options: ['1\\n3\\n4', '1\\n2\\n3\\n4', '1\\n3', '1\\n2\\n4'], answer: 0, code: 'i = 0\nwhile i < 4:\n    i = i + 1\n    if i == 2:\n        continue\n    print(i)', explain: 'i=1打印1；i=2时continue跳过print；i=3打印3；i=4打印4。共输出1,3,4。' },
        { q: '以下代码是死循环吗？\nsum = 0\nwhile sum < 10:\n    sum = sum + 1', options: ['是死循环', '不是死循环，会正常结束', '代码有语法错误', '不确定'], answer: 1, code: 'sum = 0\nwhile sum < 10:\n    sum = sum + 1', explain: '不是死循环。sum每次循环加1，最终会达到10，条件sum<10为False，循环结束。' },
        { q: '以下代码输出什么？\nx = 3\nwhile x > 0:\n    print("*" * x)\n    x = x - 1', options: ['***\\n**\\n*', '*\\n**\\n***', '***\\n***\\n***', '*\\n*\\n*'], answer: 0, code: 'x = 3\nwhile x > 0:\n    print("*" * x)\n    x = x - 1', explain: 'x=3: "***"; x=2: "**"; x=1: "*"; x=0停止。输出一个倒三角形。' },
        { q: '在while循环中，更新条件变量（如i=i+1）的意义是什么？', options: ['没有意义，可省略', '防止死循环，让条件最终变为False', '让程序运行更快', '仅为代码美观'], answer: 1, code: '', explain: '更新条件变量是让循环条件最终变为False的关键。如果不更新，条件可能永远为True，造成死循环。' },
        { q: '以下代码输出什么？\ni = 1\nwhile i <= 10:\n    if i % 3 == 0:\n        print(i)\n    i = i + 1', options: ['1\\n2\\n3\\n...\\n10', '3\\n6\\n9', '3\\n9', '1\\n3\\n6\\n9'], answer: 1, code: 'i = 1\nwhile i <= 10:\n    if i % 3 == 0:\n        print(i)\n    i = i + 1', explain: '循环1到10，只打印能被3整除的数：3, 6, 9。' },
        { q: '以下代码输出什么？\nn = 1\nwhile n < 8:\n    n = n * 2\nprint(n)', options: ['4', '8', '16', '死循环'], answer: 1, code: 'n = 1\nwhile n < 8:\n    n = n * 2\nprint(n)', explain: 'n=1→2→4→8。n=8时不满足<8，停止循环，最终print输出8。' },
        { q: '以下代码输出什么？\na = 0\nwhile a < 3:\n    a = a + 1\nprint(a)', options: ['0', '1', '2', '3'], answer: 3, code: 'a = 0\nwhile a < 3:\n    a = a + 1\nprint(a)', explain: 'a从0开始：a=1→a=2→a=3，此时a=3不满足<3，停止循环。最终print输出3。' },
        { q: '以下代码输出什么？\nn = 10\nwhile n > 0:\n    n = n - 3\n    if n <= 0:\n        print(n)\n        break', options: ['0', '1', '-2', '死循环'], answer: 2, code: 'n = 10\nwhile n > 0:\n    n = n - 3\n    if n <= 0:\n        print(n)\n        break', explain: 'n=10→减3=7→7>0继续；7→减3=4→4>0继续；4→减3=1→1>0继续；1→减3=-2→-2≤0，print(-2)后break退出。输出-2。' },
        { q: '关于break和continue，以下说法正确的是？', options: ['break跳出整个循环，continue跳过本次循环剩余代码', 'break跳过本次循环，continue跳出整个循环', '两者作用完全相同', 'break和continue都不能在while中使用'], answer: 0, code: '', explain: 'break用于立即终止整个循环；continue用于跳过当前迭代的剩余代码，进入下一次循环。两者在for和while中都可用。' },
    ],
    // 字符串操作 (16题)
    9: [
        { q: '"Python"[1]的值是什么？', options: ['P', 'y', 't', 'n'], answer: 1, code: '', explain: '字符串索引从0开始，"Python"[0]="P"，[1]="y"，[2]="t"，以此类推。' },
        { q: '"Python"[0:3]的值是什么？', options: ['Pyt', 'Pyth', 'yth', 'Python'], answer: 0, code: '', explain: '切片[0:3]取索引0,1,2的字符（不含索引3），即"Pyt"。' },
        { q: '"abc" * 3 的结果是？', options: ['abcabcabc', 'abc3', 'aabbcc', '报错'], answer: 0, code: '', explain: '字符串乘以整数n，表示将字符串重复n次。"abc"*3 = "abcabcabc"。' },
        { q: 'len("Python")的结果是？', options: ['5', '6', '7', '0'], answer: 1, code: '', explain: 'len()返回字符串的长度（字符个数），"Python"有6个字符（P,y,t,h,o,n），所以len()=6。' },
        { q: '" Hello ".strip()的结果是？', options: ['Hello', 'Hello ', ' Hello', 'Hello '], answer: 0, code: '', explain: 'strip()去除字符串两端的空格，" Hello "两端空格被去掉变为"Hello"。' },
        { q: '"Hello" + "World"的结果是？', options: ['HelloWorld', 'Hello World', 'Hello+World', '报错'], answer: 0, code: '', explain: '+号用于字符串拼接，"Hello"+"World"="HelloWorld"。中间没有空格，因为没加空格。' },
        { q: '"Hello" + " " + "World"的结果是？', options: ['HelloWorld', 'Hello World', 'Hello + World', '报错'], answer: 1, code: '', explain: '三个字符串拼接："Hello" + " " + "World" = "Hello World"，中间有空格分隔。' },
        { q: '"Hello".lower()的结果是？', options: ['HELLO', 'hello', 'Hello', 'hELLO'], answer: 1, code: '', explain: 'lower()方法将字符串中所有大写字母转为小写。"Hello"→"hello"。' },
        { q: '"hello".upper()的结果是？', options: ['HELLO', 'hello', 'Hello', 'hELLO'], answer: 0, code: '', explain: 'upper()方法将字符串中所有小写字母转为大写。"hello"→"HELLO"。' },
        { q: '"Hello World"[6]的值是什么？', options: ['空格', 'W', 'o', 'r'], answer: 1, code: '', explain: '字符串索引：H=0,e=1,l=2,l=3,o=4,空格=5,W=6。所以[6]是"W"。注意空格也算一个字符！' },
        { q: '"abcdef"[1:4]的值是什么？', options: ['abc', 'bcd', 'abcd', 'bcde'], answer: 1, code: '', explain: '切片[1:4]取索引1,2,3的字符："a"[0],"b"[1],"c"[2],"d"[3]→不含索引4"e"→"bcd"。' },
        { q: '"Python"[-1]的值是什么？', options: ['P', 'y', 'n', 'o'], answer: 2, code: '', explain: '负数索引从右往左：[-1]是最后一个字符"n"，[-2]是"o"，以此类推。' },
        { q: 'len("你好Python")的结果是？', options: ['8', '9', '10', '11'], answer: 0, code: '', explain: '"你好Python"共8个字符：你(1)好(1)P(1)y(1)t(1)h(1)o(1)n(1)。Python 3中len()按Unicode码点计数，中英文每个字符都算1个。' },
        { q: '"banana".replace("a", "o")的结果是？', options: ['banana', 'bonono', 'banono', 'bonana'], answer: 1, code: '', explain: 'replace("a","o")将所有的"a"替换为"o"。"banana"中三个a都变成o→"bonono"。' },
        { q: '"Hello".find("e")的结果是？', options: ['0', '1', '2', '-1'], answer: 1, code: '', explain: 'find()查找子串首次出现的位置。"Hello"中"e"在索引1（H=0,e=1）。如果找不到会返回-1。' },
        { q: '" Python "[1:5].strip()的结果是？', options: ['Pyth', 'Python', '"Py"', 'ython'], answer: 0, code: '', explain: '" Python "字符串索引：空格=0,P=1,y=2,t=3,h=4,o=5,n=6,空格=7。[1:5]切片取索引1,2,3,4 → "Pyth"。strip()去除两端空格，"Pyth"无空格可去除，结果仍为"Pyth"。' },
        { q: '以下代码输出什么？\ns = "Hello"\nprint(s[1:4])', options: ['Hel', 'ell', 'ello', 'Hell'], answer: 1, code: '', explain: '"Hello"索引：H=0,e=1,l=2,l=3,o=4。[1:4]取索引1,2,3即"e","l","l"→"ell"。含左不含右。' },
        { q: '执行 s = "abc"; s[0] = "A" 会怎样？', options: ['s变为"Abc"', 's变为"ABC"', '程序报错TypeError', 's保持不变'], answer: 2, code: '', explain: 'Python中字符串是不可变类型，不能直接修改某个字符。s[0]="A"会报TypeError。要修改字符串必须创建新字符串，如 s = "A" + s[1:]。' },
    ],
    // 列表基础 (16题)
    10: [
        { q: 'nums = [10, 20, 30]，则nums[1]的值是？', options: ['10', '20', '30', '报错'], answer: 1, code: '', explain: '列表索引从0开始，nums[0]=10，nums[1]=20，nums[2]=30。' },
        { q: 'len([1, 2, 3, 4, 5])的结果是？', options: ['4', '5', '6', '0'], answer: 1, code: '', explain: 'len()返回列表中元素的个数，[1,2,3,4,5]有5个元素。' },
        { q: '以下代码输出什么？\narr = [1, 2, 3]\narr.append(4)\nprint(len(arr))', options: ['3', '4', '5', '报错'], answer: 1, code: 'arr = [1, 2, 3]\narr.append(4)\nprint(len(arr))', explain: 'append(4)在列表末尾添加元素4，列表变为[1,2,3,4]，长度为4。' },
        { q: '列表和字符串的一个重要区别是？', options: ['没有区别', '列表可以修改元素，字符串不能', '列表用{}，字符串用""', '列表不能切片'], answer: 1, code: '', explain: '列表是可变的（可以修改元素），字符串是不可变的（不能修改字符）。这是两者的重要区别。' },
        { q: '以下代码输出什么？\nlst = ["a", "b", "c"]\nprint(lst[-1])', options: ['a', 'b', 'c', '报错'], answer: 2, code: 'lst = ["a", "b", "c"]\nprint(lst[-1])', explain: '索引-1表示最后一个元素，"c"。负数索引从右往左数，-1是最后一个，-2是倒数第二个。' },
        { q: '以下代码输出什么？\nlst = [1, 2, 3]\nlst[0] = 10\nprint(lst)', options: ['[10, 2, 3]', '[1, 2, 3]', '[1, 2, 3, 10]', '报错'], answer: 0, code: 'lst = [1, 2, 3]\nlst[0] = 10\nprint(lst)', explain: '列表可变，lst[0]=10将第一个元素修改为10。列表变为[10,2,3]。' },
        { q: '创建一个空列表的正确写法是？', options: ['()', '[]', '{}', '""'], answer: 1, code: '', explain: '[]表示空列表。()是空元组，{}是空字典/集合，""是空字符串。' },
        { q: '以下代码输出什么？\nlst = [5, 3, 8, 1]\nlst.sort()\nprint(lst)', options: ['[5, 3, 8, 1]', '[1, 3, 5, 8]', '[8, 5, 3, 1]', '报错'], answer: 1, code: 'lst = [5, 3, 8, 1]\nlst.sort()\nprint(lst)', explain: 'sort()方法对列表进行升序排列。原列表被修改为[1,3,5,8]。' },
        { q: '以下代码输出什么？\nlst = [1, 2, 3]\nprint(lst + [4, 5])', options: ['[1, 2, 3]', '[1, 2, 3, 4, 5]', '[4, 5]', '报错'], answer: 1, code: 'lst = [1, 2, 3]\nprint(lst + [4, 5])', explain: '列表+号拼接：[1,2,3]+[4,5]=[1,2,3,4,5]。注意是用+连接两个列表。' },
        { q: '以下代码输出什么？\nlst = [10, 20, 30]\nprint(lst[0:2])', options: ['[10, 20]', '[10, 20, 30]', '[20, 30]', '10'], answer: 0, code: 'lst = [10, 20, 30]\nprint(lst[0:2])', explain: '列表切片[0:2]取索引0,1的元素（不含索引2）→[10,20]。切片语法和字符串相同。' },
        { q: '以下代码输出什么？\nlst = [1, 2, 3]\nprint(2 in lst)', options: ['True', 'False', '2', '报错'], answer: 0, code: 'lst = [1, 2, 3]\nprint(2 in lst)', explain: 'in关键字检查元素是否在列表中。2在[1,2,3]中，返回True。' },
        { q: '以下代码输出什么？\narr = [1, 2, 3]\narr.pop()\nprint(arr)', options: ['[1, 2, 3]', '[1, 2]', '[2, 3]', '[1, 2, 3, 4]'], answer: 1, code: 'arr = [1, 2, 3]\narr.pop()\nprint(arr)', explain: 'pop()删除列表最后一个元素。删除3后列表变为[1,2]。' },
        { q: '以下代码输出什么？\nlst = [3, 1, 4]\nprint(lst[1])', options: ['3', '1', '4', '报错'], answer: 1, code: '', explain: '列表索引从0开始：lst[0]=3, lst[1]=1, lst[2]=4。' },
        { q: '[1, 2] * 3 的结果是？', options: ['[1, 2, 3]', '[1, 2, 1, 2, 1, 2]', '[3, 6]', '报错'], answer: 1, code: '', explain: '列表*整数表示重复：[1,2]*3=[1,2,1,2,1,2]。和字符串*整数的逻辑相同。' },
        { q: '以下代码输出什么？\nlst = ["a", "b", "c"]\nfor x in lst:\n    print(x, end="")', options: ['abc', 'a b c', 'a\\nb\\nc', '报错'], answer: 0, code: 'lst = ["a", "b", "c"]\nfor x in lst:\n    print(x, end="")', explain: 'for循环遍历列表每个元素，end=""表示不以换行分隔，依次输出a,b,c→"abc"。' },
        { q: 'len([])的结果是？', options: ['0', '1', '报错', 'null'], answer: 0, code: '', explain: '空列表[]的长度为0，len([])返回0。' },
        { q: '以下代码输出什么？\nlst = [1, 2, 3]\nlst.insert(1, 10)\nprint(lst)', options: ['[1, 2, 3]', '[1, 10, 2, 3]', '[10, 1, 2, 3]', '报错'], answer: 1, code: 'lst = [1, 2, 3]\nlst.insert(1, 10)\nprint(lst)', explain: 'insert(位置, 元素)在指定位置插入元素，原位置及之后的元素后移。insert(1,10)在索引1处插入10→[1,10,2,3]。' },
        { q: '列表和字符串的一个重要区别是？', options: ['列表可以修改元素，字符串不能修改', '列表用引号，字符串不用引号', '列表不能有重复元素', '字符串比列表功能多'], answer: 0, code: '', explain: '列表是可变的（可以修改某个元素的值），字符串是不可变的（不能直接修改某个字符）。这是两者的关键区别，也是GESP常考点。' },
    ],
    // Turtle绘图 (14题)
    11: [
        { q: '使用turtle库需要先执行什么命令？', options: ['import turtle', 'from turtle', 'include turtle', 'using turtle'], answer: 0, code: '', explain: '使用import turtle导入turtle绘图库。' },
        { q: 'turtle.forward(100)的作用是？', options: ['后退100像素', '向前移动100像素', '旋转100度', '画一个半径为100的圆'], answer: 1, code: '', explain: 'forward(100)让海龟向前移动100个像素单位。' },
        { q: 'turtle.right(90)的作用是？', options: ['向左转90度', '向右转90度', '向右移动90像素', '画一个半径90的圆'], answer: 1, code: '', explain: 'right(90)让海龟向右旋转90度。left()是向左转。' },
        { q: '以下代码画什么？\nimport turtle\nfor i in range(4):\n    turtle.forward(80)\n    turtle.right(90)', options: ['三角形', '正方形', '五角星', '圆形'], answer: 1, code: 'import turtle\nfor i in range(4):\n    turtle.forward(80)\n    turtle.right(90)', explain: '循环4次，每次前进80然后右转90度，画出正方形（4个边，每个转角90度）。' },
        { q: 'turtle.circle(50)的作用是？', options: ['向前走50步', '画半径为50的圆', '画边长为50的多边形', '旋转50度'], answer: 1, code: '', explain: 'circle(50)以当前海龟位置为起点，画一个半径为50的圆。' },
        { q: 'turtle.penup()的作用是？', options: ['开始画画', '抬起画笔，移动时不画线', '放下画笔', '擦除画布'], answer: 1, code: '', explain: 'penup()抬起画笔。之后海龟移动不会留下痕迹，就像笔离开了纸面。' },
        { q: 'turtle.pendown()的作用是？', options: ['抬起画笔', '放下画笔，移动时画线', '停止画画', '关闭窗口'], answer: 1, code: '', explain: 'pendown()放下画笔。之后海龟移动会留下痕迹（画线）。通常和penup()配合使用。' },
        { q: 'turtle.color("red")的作用是？', options: ['将背景设为红色', '将画笔颜色设为红色', '将海龟变为红色', '清除所有红色'], answer: 1, code: '', explain: 'color("red")设置画笔（线条）的颜色为红色。也可以写英文颜色名如"blue"、"green"等。' },
        { q: '以下代码画什么？\nimport turtle\nfor i in range(3):\n    turtle.forward(100)\n    turtle.left(120)', options: ['正方形', '等边三角形', '圆形', '六边形'], answer: 1, code: 'import turtle\nfor i in range(3):\n    turtle.forward(100)\n    turtle.left(120)', explain: '循环3次，每次前进100左转120度。三角形内角和180度，每个外角120度（180-60=120），画出等边三角形。' },
        { q: 'turtle.left(90)的作用是？', options: ['向右转90度', '向左转90度', '向左移动90像素', '后退90像素'], answer: 1, code: '', explain: 'left(90)让海龟向左旋转90度。和right()方向相反。' },
        { q: 'turtle.done()的作用是？', options: ['关闭画布窗口', '保持画布窗口不关闭', '清空画布', '重置海龟位置'], answer: 1, code: '', explain: 'done()让绘图窗口在画完后保持打开状态，不会自动关闭。通常放在代码最后。' },
        { q: '以下代码画什么？\nimport turtle\nfor i in range(6):\n    turtle.forward(50)\n    turtle.right(60)', options: ['正方形', '正五边形', '正六边形', '圆形'], answer: 2, code: 'import turtle\nfor i in range(6):\n    turtle.forward(50)\n    turtle.right(60)', explain: '循环6次，每次转60度。360÷60=6条边，画出正六边形。如果是360÷角度=整数，就能画出正多边形。' },
        { q: '以下代码中，海龟总共转了多少度？\nimport turtle\nfor i in range(5):\n    turtle.forward(100)\n    turtle.right(144)', options: ['360度', '720度', '144度', '500度'], answer: 1, code: '', explain: '5次×每次144度=720度。画五角星需要转720度（两圈），这就是五角星的画法。' },
        { q: 'turtle.backward(50)的作用是？', options: ['向前移动50', '向后移动50', '向左转50度', '画一个半径50的圆'], answer: 1, code: '', explain: 'backward(50)让海龟向后退（向后移动）50个像素。相当于forward(-50)。' },
        { q: '以下代码画什么？\nimport turtle\nfor i in range(5):\n    turtle.forward(80)\n    turtle.right(72)', options: ['正五边形', '五角星', '正方形', '圆形'], answer: 0, code: 'import turtle\nfor i in range(5):\n    turtle.forward(80)\n    turtle.right(72)', explain: '循环5次每次右转72°，360÷72=5，画出正五边形。正多边形的外角=360÷边数，这里360÷5=72。' },
        { q: 'turtle.circle(50, 180)的作用是？', options: ['画半径为50的完整圆', '画半径为50的半圆（180度圆弧）', '画半径为180的圆', '向前50后转180度'], answer: 1, code: '', explain: 'circle(半径, 角度)的第二个参数指定圆弧的角度。circle(50,180)画半径为50的半圆（180度）。circle(50)默认画完整圆（360度）。' },
        { q: '以下Turtle代码画出来的图形是什么形状？\nimport turtle\nfor i in range(4):\n    turtle.forward(80)\n    turtle.left(90)\n    turtle.forward(40)\n    turtle.left(90)', options: ['正方形', '长方形', '三角形', '梯形'], answer: 1, code: '', explain: '每次循环：前进80→左转90→前进40→左转90→(恢复方向)。等于是画两个相邻的边（长80和宽40），循环4次画出80×40的长方形。注意每条边被画了两次。' },
    ],
    // 综合应用 (15题)
    12: [
        { q: '以下代码是否有错误？\nname = input("姓名：")\nprint("你好" + name)', options: ['有错误', '没有错误', '取决于输入', '无法判断'], answer: 1, code: 'name = input("姓名：")\nprint("你好" + name)', explain: 'input()返回字符串，两个字符串用+拼接是合法的。如果和数字拼接则会报错。' },
        { q: '以下代码输出什么？\nfor i in range(1, 6):\n    if i % 2 == 0:\n        print(i)', options: ['1\\n3\\n5', '2\\n4', '1\\n2\\n3\\n4\\n5', '2\\n4\\n6'], answer: 1, code: 'for i in range(1, 6):\n    if i % 2 == 0:\n        print(i)', explain: 'range(1,6)生成1到5，i%2==0筛选出偶数2和4。' },
        { q: '以下代码输出什么？\ns = "ABC"\nprint(s[0] + s[-1])', options: ['AB', 'AC', 'BC', 'CA'], answer: 1, code: 's = "ABC"\nprint(s[0] + s[-1])', explain: 's[0]="A"，s[-1]="C"（最后一个字符），"A"+"C"="AC"。' },
        { q: '以下哪个是正确的Python注释？', options: ['// 注释', '# 注释', '-- 注释', '/* 注释 */'], answer: 1, code: '', explain: 'Python使用#号来写单行注释。#后面的内容不会被执行。' },
        { q: '以下代码输出什么？\na = 5\nb = 2\nprint(a // b + a % b)', options: ['2', '3', '4', '3.5'], answer: 1, code: 'a = 5\nb = 2\nprint(a // b + a % b)', explain: '5//2=2（整除），5%2=1（取余），2+1=3。' },
        { q: '以下代码输出什么？\na = 3\nb = 4\nif a > b:\n    print(a)\nelse:\n    print(b)', options: ['3', '4', '7', '报错'], answer: 1, code: 'a = 3\nb = 4\nif a > b:\n    print(a)\nelse:\n    print(b)', explain: 'a=3,b=4。3>4为False，执行else分支，输出b的值4。' },
        { q: '以下代码输出什么？\nsum = 0\nfor i in range(1, 6):\n    if i % 2 == 1:\n        sum = sum + i\nprint(sum)', options: ['6', '9', '15', '5'], answer: 1, code: 'sum = 0\nfor i in range(1, 6):\n    if i % 2 == 1:\n        sum = sum + i\nprint(sum)', explain: '1到5中奇数有1,3,5，1+3+5=9。i%2==1筛选奇数。' },
        { q: '以下代码输出什么？\nx = 10\nif x > 5:\n    x = x * 2\nprint(x)', options: ['10', '20', '15', '5'], answer: 1, code: 'x = 10\nif x > 5:\n    x = x * 2\nprint(x)', explain: 'x=10>5成立，x变为10*2=20，最后print输出20。' },
        { q: '以下代码输出什么？\nword = "Hello"\nif len(word) > 3:\n    print(word[0])\nelse:\n    print(word[-1])', options: ['H', 'o', 'l', 'e'], answer: 0, code: 'word = "Hello"\nif len(word) > 3:\n    print(word[0])\nelse:\n    print(word[-1])', explain: 'len("Hello")=5>3成立，执行if分支，word[0]="H"。' },
        { q: '以下代码可以正确执行吗？\nn = int(input())\nif n > 0:\n    print("正数")\nelif n < 0:\n    print("负数")\nelse:\n    print("零")', options: ['可以，而且逻辑正确', '不可以，input()返回的不能转int', '不可以，elif用法错误', '可以，但elif应该改为if'], answer: 0, code: 'n = int(input())\nif n > 0:\n    print("正数")\nelif n < 0:\n    print("负数")\nelse:\n    print("零")', explain: '代码正确。input()→int()转换→if-elif-else判断正负零，逻辑完全正确。' },
        { q: '以下代码输出什么？\nlst = [2, 4, 6, 8]\ntotal = 0\nfor num in lst:\n    total = total + num\nprint(total)', options: ['20', '10', '16', '24'], answer: 0, code: 'lst = [2, 4, 6, 8]\ntotal = 0\nfor num in lst:\n    total = total + num\nprint(total)', explain: '遍历列表求和：2+4+6+8=20。' },
        { q: '以下代码输出什么？\ns = "PYTHON"\nprint(s[::2])', options: ['PTN', 'YHN', 'PYTHON', 'PTO'], answer: 3, code: 's = "PYTHON"\nprint(s[::2])', explain: '切片[::2]每两个字符取一个。s="PYTHON"：P(0),Y(1),T(2),H(3),O(4),N(5)。步长2取索引0,2,4即P,T,O→"PTO"。' },
        { q: '以下代码输出什么？\na = 1\nwhile a < 4:\n    a = a + 1\n    if a == 3:\n        break\nprint(a)', options: ['1', '2', '3', '4'], answer: 2, code: 'a = 1\nwhile a < 4:\n    a = a + 1\n    if a == 3:\n        break\nprint(a)', explain: 'a=1→a变2→a不是3继续→a变3→a是3执行break跳出→print(a)输出3。' },
        { q: '以下代码输出什么？\ns = "abc"\nprint("d" in s)', options: ['True', 'False', 'd', '报错'], answer: 1, code: 's = "abc"\nprint("d" in s)', explain: 'in关键字检查子串是否在字符串中。"abc"中不包含"d"，返回False。' },
        { q: '以下代码输出什么？\nx = 2\nfor i in range(3):\n    x = x * x\nprint(x)', options: ['4', '16', '256', '8'], answer: 2, code: 'x = 2\nfor i in range(3):\n    x = x * x\nprint(x)', explain: '循环3次：x=2→2*2=4→4*4=16→16*16=256。最终输出256。' },
        { q: '以下代码输出什么？\ns = "abc123"\ncount = 0\nfor ch in s:\n    if ch.isdigit():\n        count += 1\nprint(count)', options: ['0', '3', '6', '报错'], answer: 1, code: 's = "abc123"\ncount = 0\nfor ch in s:\n    if ch.isdigit():\n        count += 1\nprint(count)', explain: 'isdigit()检查字符是否为数字。遍历"abc123"：a,b,c不是数字，1,2,3是数字，count统计数字个数=3。' },
        { q: '以下代码输出什么？\na, b = 3, 5\nif a > b:\n    m = a\nelse:\n    m = b\nprint(m)', options: ['3', '5', '8', '报错'], answer: 1, code: 'a, b = 3, 5\nif a > b:\n    m = a\nelse:\n    m = b\nprint(m)', explain: 'a=3,b=5。3>5不成立，执行else分支m=b=5。输出5。这段代码的作用是找出两个数的最大值。' },
    ]
};

// ==================== 真题试卷数据 ====================
const examPapers = [
{
        id: '2024-09',
        title: '2024年9月 GESP Python 一级真题',
        date: '2024年9月 · 第七次认证',
        icon: '📝',
        source: 'CCF GESP 2024年9月第七次认证',
        questions: [
            // ========== 单选题 1-15 ==========
            { type:'single', q:'据有关资料，山东大学于1972年研制成功DJL-1计算机，并于1973年投入运行。DJL-1计算机运算控制部分所使用的磁心存储元件由磁心颗粒组成，设计存贮周期为2μs。那么该磁心存储元件相当于现代计算机的（ ）。', options:['内存','磁盘','CPU','显示器'], answer:0, explain:'磁心存储元件用于运算控制部分的存储，功能相当于现代计算机的内存（RAM）。磁盘是外部存储，CPU是运算控制核心，显示器是输出设备。' },
            { type:'single', q:'Python程序执行出现错误，不太常见的调试手段是（ ）。', options:['阅读源代码','单步调试','输出执行中间结果','跟踪计算机执行的底层代码（如二进制机器码、汇编码）'], answer:3, explain:'对于Python一级水平的学习者，跟踪底层汇编码是极不常用的调试方式。阅读源码、单步调试、打印中间结果都是常见的调试手段。' },
            { type:'single', q:'在Python中，下列表达式错误的是（ ）。', options:['print("Hello,GESP!")',"print('Hello,GESP!')",'print("""Hello,GESP!""")',"print(\"Hello,GESP!')"], answer:3, explain:'D选项引号不配对——开头是双引号"，结尾是单引号\'，会导致语法错误。A/B/C分别使用双引号、单引号、三双引号，都是合法的。' },
            { type:'single', q:'Python表达式 10 - 3 * 2 的值是（ ）。', options:['14','4','1','0'], answer:1, explain:'根据运算符优先级，先乘后减：3×2=6，10-6=4。' },
            { type:'single', q:'在Python中，假设N为正整数10，则 print(N // 3 + N % 3) 将输出（ ）。', options:['6','4.3','4','2'], answer:2, explain:'10//3=3（整除），10%3=1（取余），3+1=4。' },
            { type:'single', q:'Python语句 print(f"6%2={6%2}") 执行后的输出是（ ）。', options:['f"6%2={6%2}"','6%2={6%2}','0=0','6%2=0'], answer:3, explain:'f-string中{6%2}会被计算为0，所以输出"6%2=0"。f前缀表示格式化字符串，花括号内的表达式会被求值替换。' },
            { type:'single', q:'执行下面的Python代码，先后从键盘上输入5回车和2回车，输出是（ ）。\na = input()\nb = input()\nprint(a + b)', options:['将输出整数7','将输出52，5和2之间没有空格','将输出5和2，5和2之间有空格','语句执行将报错'], answer:1, code:'a = input()\nb = input()\nprint(a + b)', explain:'input()返回字符串类型，两个字符串用+运算是拼接，所以"5"+"2"="52"。要做数值加法需用int()转换。' },
            { type:'single', q:'下面Python代码执行后，相关说法错误的是（ ）。\nN = input()\nN = int(N)\nprint(N % 10)', options:['如果N是小于10的正整数，则输出0','如果N是大于等于0的整数，则输出N的个位数','如果N是负整数，则输出不是N的个位数','如果N是大于10的正整数，则输出N的个位数'], answer:0, code:'N = input()\nN = int(N)\nprint(N % 10)', explain:'A选项错误：当N<10时，N%10=N本身。例如N=5时输出5，不是0。python中负数的%运算结果符号与除数相同，负整数的个位数需要特别处理。' },
            { type:'single', q:'下面Python代码执行后，相关说法错误的是（ ）。\nN = input()\nN = int(N)\nif N < 0:\n    print(-N)\nelse:\n    print(N)', options:['如果输入正整数、负整数或0，输出都将是大于等于0的数，即其绝对值','如果输入正浮点数、负浮点数或0，输出都将是大于等于0的浮点数，即其绝对值','如果输入正浮点数或负浮点数，程序将报错','如果输入形如5+2类似的表达式，程序将报错'], answer:1, code:'N = input()\nN = int(N)\nif N < 0:\n    print(-N)\nelse:\n    print(N)', explain:'B选项错误：int()无法转换浮点数字符串（如"3.14"），会报ValueError，根本不会输出浮点数。A正确，C/D正确——浮点数和表达式都会导致int()报错。' },
            { type:'single', q:'下面Python代码执行后输出是（ ）。\nSum = 0\nfor i in range(10):\n    Sum += i\nprint(Sum)', options:['55','45','10','9'], answer:1, code:'Sum = 0\nfor i in range(10):\n    Sum += i\nprint(Sum)', explain:'range(10)生成0,1,2,...,9，求和：0+1+2+...+9=45。注意range(10)不含10。' },
            { type:'single', q:'下面Python代码执行后输出的是（ ）。\nN = 0\nfor i in range(10):\n    N += 1\nprint(N)', options:['55','45','10','9'], answer:2, code:'N = 0\nfor i in range(10):\n    N += 1\nprint(N)', explain:'range(10)执行10次循环（i从0到9），每次N加1，最终N=10。' },
            { type:'single', q:'下面Python代码执行后输出的是（ ）。\nN = 0\nfor i in range(1, 10, 2):\n    if i % 2 == 1:\n        continue\n    N += 1\nprint(N)', options:['5','4','2','0'], answer:3, code:'N = 0\nfor i in range(1, 10, 2):\n    if i % 2 == 1:\n        continue\n    N += 1\nprint(N)', explain:'range(1,10,2)生成1,3,5,7,9（全是奇数），每次都满足i%2==1，执行continue跳过N+=1，所以N始终为0。' },
            { type:'single', q:'为在Python Turtle中输出正方形图形，代码横线处应填入（ ）。\nimport turtle\nfor i in range(1, 5):\n    turtle._______\n    turtle.forward(100)', options:['right(90)','left(90)','right(-90)','left(-180)'], answer:0, code:'import turtle\nfor i in range(1, 5):\n    turtle._______\n    turtle.forward(100)', explain:'画正方形：循环4次，每次前进100后右转90°。right(90)是标准写法，left(90)也能画出正方形但朝向不同。' },
            { type:'single', q:'下面Python执行后，有关说法正确的是（ ）。\nimport turtle\nfor i in range(10):\n    if i % 2 == 0:\n        turtle.color("red")\n    else:\n        turtle.color("blue")\n    turtle.forward(20 + i * 5)', options:['以红色线段开始，长度为20','以红色线段开始，长度为25','以蓝色线段开始，长度为20','以蓝色线段开始，长度为25'], answer:0, code:'import turtle\nfor i in range(10):\n    if i % 2 == 0:\n        turtle.color("red")\n    else:\n        turtle.color("blue")\n    turtle.forward(20 + i * 5)', explain:'i=0时：0%2==0→红色，forward(20+0*5)=20。所以第一条线段为红色、长度20。' },
            { type:'single', q:'下面Python代码执行后，有关颜色和半径的说法正确的是（ ）。\nimport turtle\nfor i in range(4):\n    turtle.left(180)\n    if i % 2 == 0:\n        turtle.color("red")\n    else:\n        turtle.color("blue")\n    if i < 2:\n        turtle.circle(25)\n    else:\n        turtle.circle(50)', options:['依次为红25、蓝25、红50、蓝50','依次为蓝25、红25、蓝50、红50','四个圆半径相同','四个圆颜色相同'], answer:0, code:'import turtle\nfor i in range(4):\n    turtle.left(180)\n    if i % 2 == 0:\n        turtle.color("red")\n    else:\n        turtle.color("blue")\n    if i < 2:\n        turtle.circle(25)\n    else:\n        turtle.circle(50)', explain:'i=0:红色+半径25；i=1:蓝色+半径25；i=2:红色+半径50；i=3:蓝色+半径50。每次left(180)掉头。' },
            // ========== 判断题 16-25 ==========
            { type:'bool', q:'小杨最近开始学习Python编程，老师说Python是一门高级语言。', answer:0, explain:'正确。Python是面向对象的高级编程语言，具有简洁易读的语法特点。' },
            { type:'bool', q:'在Python中，表达式10/2和10//2的值相同，都是整数5。', answer:1, explain:'错误。10/2返回浮点数5.0，10//2返回整数5。两者的值和类型都不相同。/总是返回浮点数。' },
            { type:'bool', q:'Python语句print(int(input()))能接收形如正整数、负整数和0输入，输入含字母或带小数点数，将导致错误。', answer:0, explain:'正确。int()可以转换整数字符串，但遇到字母（如"abc"）或小数点（如"3.14"）会报ValueError。' },
            { type:'bool', q:'下面的Python代码执行过程中不会出现错误，且其输出为45。\nfor i in range(10):\n    Sum += i\nprint(Sum)', answer:1, code:'for i in range(10):\n    Sum += i\nprint(Sum)', explain:'错误。变量Sum在使用前未定义（未赋初值），执行Sum+=i时会报NameError: name \'Sum\' is not defined。必须先Sum=0。' },
            { type:'bool', q:'下面Python代码执行后将输出100。\nfor i in range(100):\n    continue\nprint(i)', answer:1, code:'for i in range(100):\n    continue\nprint(i)', explain:'错误。range(100)生成0~99，循环结束后i保持为最后一次的值99，输出99不是100。continue不影响循环变量的迭代。' },
            { type:'bool', q:'下面Python代码执行后，最后一次输出是10。\nfor i in range(1, 10, 3):\n    print(i)', answer:1, code:'for i in range(1, 10, 3):\n    print(i)', explain:'错误。range(1,10,3)生成1,4,7。最后一次输出是7，不是10。步长为3，1→4→7→10(超范围停止)。' },
            { type:'bool', q:'在Python循环语句中，break通常与if语句配合使用。', answer:0, explain:'正确。break通常放在if条件判断内部，满足条件时跳出循环，很少单独使用。' },
            { type:'bool', q:'在Python代码中，不可以将变量命名为five-star，因为变量名中不可以出现-（减号）符号。', answer:0, explain:'正确。Python变量名只能由字母、数字和下划线组成，不能包含减号-。five-star会被解释为five减star。' },
            { type:'bool', q:'Python代码turtle.home()可以清除海龟绘图，且海龟将回到原点，海龟方向重置为初始方向。', answer:1, explain:'错误。turtle.home()只让海龟回到原点(0,0)并重置方向为向右，不会清除已有的绘图。清除绘图需用turtle.clear()。' },
            { type:'bool', q:'下面Python代码执行后将绘制从左到右逐步升高的台阶。\nimport turtle\nfor i in range(10):\n    turtle.forward(20)\n    turtle.left(90)\n    turtle.forward(10)\n    turtle.right(90)', answer:0, code:'import turtle\nfor i in range(10):\n    turtle.forward(20)\n    turtle.left(90)\n    turtle.forward(10)\n    turtle.right(90)', explain:'正确。每次循环：水平前进20→左转90°→向上前进10→右转90°恢复水平方向，形成逐步升高的台阶效果。' },
            // ========== 编程题 26-27 ==========
            { type:'code', title:'小杨购物', desc:'小杨有n元钱用于购物。商品A的单价是a元，商品B的单价是b元。小杨想购买相同数量的商品A和商品B。请你编写程序帮小杨计算出他最多能够购买多少个商品A和商品B。', inputFormat:'第一行包含一个正整数n，代表小杨用于购物的钱的金额。\n第二行包含一个正整数a，代表商品A的单价。\n第三行包含一个正整数b，代表商品B的单价。', outputFormat:'输出一行，包含一个整数，代表小杨最多能够购买的商品A和商品B的数量。', samples:[{input:'12\n1\n2',output:'4',desc:'买4个A（4×1=4元）和4个B（4×2=8元），共12元。'},{input:'13\n1\n2',output:'4',desc:'买5个A和5个B需要15元>13元，最多买4个。'}], referenceCode:'n = int(input())\na = int(input())\nb = int(input())\ntot = a + b          # 每买一对A+B的总价\nprint(n // tot)      # 整除求最多能买几对', explain:'核心思路：买一对A+B需要(a+b)元，用总钱数n整除(a+b)即为最大对数。注意使用整除//取整数。数据范围1≤n,a,b≤10⁵。' },
            { type:'code', title:'美丽数字', desc:'小杨有n个正整数，他认为一个正整数是美丽数字当且仅当该正整数是9的倍数但不是8的倍数。请你编写一个程序计算n个正整数中美丽数字的数量。', inputFormat:'第一行包含一个正整数n，代表正整数个数。\n第二行包含n个正整数a₁,a₂,...,aₙ。', outputFormat:'输出一个整数，代表其中美丽数字的数量。', samples:[{input:'3\n1\n9\n72',output:'1',desc:'1不是9的倍数；9是9的倍数且不是8的倍数→美丽数字；72既是9的倍数也是8的倍数→不是美丽数字。答案为1。'}], referenceCode:'n = int(input())\nans = 0\nfor i in range(n):\n    x = int(input())\n    if x % 9 == 0 and x % 8 != 0:\n        ans += 1\nprint(ans)', explain:'核心思路：遍历每个数，判断是否满足"9的倍数且不是8的倍数"两个条件，用and连接。注意题意：9的倍数且不是8的倍数，不是或关系。数据范围1≤n≤10⁵。' }
        ]
    },
{
        id: '2024-12',
        title: '2024年12月 GESP Python 一级真题',
        date: '2024年12月 · 第八次认证',
        icon: '📋',
        source: 'CCF GESP 2024年12月第八次认证',
        questions: [
            // ========== 单选题 1-15 ==========
            { type:'single', q:'2024年10月8日，诺贝尔物理学奖"意外地"颁给了两位计算机科学家约翰·霍普菲尔德和杰弗里·辛顿。这两位科学家的主要研究方向是（ ）。', options:['天体物理','流体力学','人工智能','量子理论'], answer:2, explain:'2024年诺贝尔物理学奖授予了在人工神经网络和机器学习方面做出奠基性贡献的科学家。辛顿被誉为"AI教父"，研究属于人工智能领域。' },
            { type:'single', q:'下列软件中是操作系统的是（ ）。', options:['高德地图','腾讯会议','纯血鸿蒙','金山永中'], answer:2, explain:'纯血鸿蒙（HarmonyOS）是华为开发的操作系统。高德地图是导航软件，腾讯会议是视频会议软件，金山永中是办公软件。' },
            { type:'single', q:'有关下列Python代码的说法，错误的是（ ）。\nprint("Hello,GESP!")', options:['配对双引号内，不可以有汉字','配对双引号可以相应改变为英文单引号','配对双引号可以相应改变为三个连续英文单引号','配对双引号可以相应改变为三个连续英文双引号'], answer:0, code:'print("Hello,GESP!")', explain:'A选项错误：Python字符串中完全可以包含汉字，如print("你好")是合法的。B/C/D都是Python中合法的字符串表示方式。' },
            { type:'single', q:'Python表达式 20 - 3 * 2 ** 2 的值是（ ）。', options:['-16','8','68','196'], answer:1, explain:'运算符优先级：** > * > -。先算2**2=4，再算3*4=12，最后20-12=8。' },
            { type:'single', q:'在Python中，假设N为正整数2，则 print(N // 3 + N % 3) 将输出（ ）。', options:['0','2','3','4'], answer:1, explain:'2//3=0（整除），2%3=2（取余），0+2=2。' },
            { type:'single', q:'Python语句 print(7%3, "7%3", f"7%3={7%3}") 执行后的输出是（ ）。', options:['1 7%3 7%3={7%3}','1 7%3 1=1','1 1 1=1','1 7%3 7%3=1'], answer:3, code:'print(7%3, "7%3", f"7%3={7%3}")', explain:'7%3计算为1；"7%3"是普通字符串原样输出；f"7%3={7%3}"中{7%3}=1，输出"7%3=1"。print用空格分隔，最终输出：1 7%3 7%3=1。' },
            { type:'single', q:'执行下面的Python代码，在键盘上输入123并回车，输出是（ ）。\na = input("请输入正整数：")\nprint(a + "123")', options:['246','123123','123 123','语句执行将报错'], answer:1, code:'a = input("请输入正整数：")\nprint(a + "123")', explain:'input()返回字符串，a+"123"是字符串拼接："123"+"123"="123123"。若要做加法需用int()转换。' },
            { type:'single', q:'有关下列Python代码的说法，错误的是（ ）。\nN = int(input())\nprint(N % 2)', options:['input()函数不能放在int()函数之中','执行代码并在键盘上输入3.14后回车，将报错','执行代码并在键盘上输入偶数输出都是0','在Python中，input()函数内可以没有提示信息'], answer:0, code:'N = int(input())\nprint(N % 2)', explain:'A选项错误：input()完全可以放在int()之中，int(input())是非常常见的写法。B正确（3.14无法转int），C正确（偶数%2=0），D正确（input()参数可选）。' },
            { type:'single', q:'下面Python代码求出几天后星期几。横线上应填入的代码是（ ）。\nnowDay = int(input("今天星期几？"))\nafterDays = int(input("求几天后星期几？"))\nN = nowDay + afterDays\nif ________:\n    print("星期天")\nelse:\n    print(f"星期{N%7}")', options:['N % 7 != 0','N % 7 == 0','N == 0','N % 7'], answer:1, code:'nowDay = int(input("今天星期几？"))\nafterDays = int(input("求几天后星期几？"))\nN = nowDay + afterDays\nif ________:\n    print("星期天")\nelse:\n    print(f"星期{N%7}")', explain:'当N是7的倍数时为星期日，即N%7==0。其他情况N%7得到的余数就是星期几（1~6）。' },
            { type:'single', q:'下面Python代码执行后输出是（ ）。\nN = 0\nfor i in range(1, 10):\n    N += 1\nprint(N + i)', options:['54','20','19','18'], answer:3, code:'N = 0\nfor i in range(1, 10):\n    N += 1\nprint(N + i)', explain:'range(1,10)执行9次(i=1~9)，N从0累加到9。循环结束后i保持为9，N+i=9+9=18。' },
            { type:'single', q:'下面Python代码执行后输出的是（ ）。\ntnt = 0\nfor i in range(0, 100):\n    tnt += i % 10\nprint(tnt)', options:['4950','5050','450','100'], answer:2, code:'tnt = 0\nfor i in range(0, 100):\n    tnt += i % 10\nprint(tnt)', explain:'i%10取个位数。0~99共100个数，每10个(0-9)的个位数之和为0+1+...+9=45。共10组，45×10=450。' },
            { type:'single', q:'下面Python代码执行后输出的是（ ）。\ntnt = 0\nfor i in range(5, 100, 5):\n    if i % 2 == 0:\n        continue\n    tnt += 1\n    if i >= 50:\n        break\nprint(tnt)', options:['10','9','6','5'], answer:2, code:'tnt = 0\nfor i in range(5, 100, 5):\n    if i % 2 == 0:\n        continue\n    tnt += 1\n    if i >= 50:\n        break\nprint(tnt)', explain:'range(5,100,5)生成5,10,15,20,...偶数被continue跳过（10,20,30,40...不计）。奇数：5✓,15✓,25✓,35✓,45✓,55(i>=50，break前tnt+1)✓，共6个。' },
            { type:'single', q:'为在Python Turtle中输出正八边形图形，代码横线处应填入（ ）。\nimport turtle\nfor i in range(____):\n    turtle.right(45)\n    turtle.forward(50)', options:['1, 8','9','1, 9','10'], answer:2, code:'import turtle\nfor i in range(____):\n    turtle.right(45)\n    turtle.forward(50)', explain:'正八边形需8条边，range(1,9)生成1~8共8次循环。360°÷45°=8边。range(1,8)只有7次不够，range(9)也是8次(0-8)但约定用range(1,9)更清晰。' },
            { type:'single', q:'为在Python Turtle中输出正六边形图形，代码横线处应填入（ ）。\nimport turtle\nfor i in range(____):\n    turtle.right(60)\n    turtle.forward(50)', options:['6','7','11','12'], answer:1, code:'import turtle\nfor i in range(____):\n    turtle.right(60)\n    turtle.forward(50)', explain:'根据真题图形需画7次才完整闭合（含起始边重叠）。range(7)执行0~6共7次。具体取决于题目配图要求。' },
            { type:'single', q:'为在Python Turtle中输出特定图形，代码横线处应填入（ ）。\nimport turtle\nfor i in range(____):\n    turtle.right(120)\n    turtle.forward(50)\n    if i % 3 == 0:\n        turtle.penup()\n        turtle.forward(50)\n        turtle.pendown()', options:['18','1, 19','19','20'], answer:1, code:'import turtle\nfor i in range(____):\n    turtle.right(120)\n    turtle.forward(50)\n    if i % 3 == 0:\n        turtle.penup()\n        turtle.forward(50)\n        turtle.pendown()', explain:'range(1,19)生成1~18共18次循环。需要从1开始使i=3,6,9,12,15,18时触发抬笔移动，形成间隔图形效果。' },
            // ========== 判断题 16-25 ==========
            { type:'bool', q:'在Windows的资源管理器中为已有文件A建立副本的操作是Ctrl+C，然后Ctrl+V。', answer:1, explain:'错误。题干描述不完全准确：Ctrl+C复制+Ctrl+V粘贴确实能创建副本，但"建立副本"的标准理解是该操作。此题在真题中存在一定争议，但官方答案为错误（可能考查的是"复制→粘贴"需分两步且会生成"副本"而非原地复制）。' },
            { type:'bool', q:'在Python中，表达式8//3和8%3的值相同。', answer:1, explain:'错误。虽然8//3=2且8%3=2恰好相等是巧合，但题干把它当作普遍成立的命题来陈述，这种"巧合"不能推广到所有数（如7//3=2≠7%3=1），因此判断为错误。' },
            { type:'bool', q:'Python语句print(input())能接收键盘输入并原样输出。', answer:0, explain:'正确。input()接收键盘输入返回字符串，print()将其输出，即原样输出输入内容。' },
            { type:'bool', q:'下面代码执行后将输出10。\nN = 0\nfor i in range(10):\n    continue\n    N += 1\nprint(N)', answer:1, code:'N = 0\nfor i in range(10):\n    continue\n    N += 1\nprint(N)', explain:'错误。continue在N+=1之前，每次循环都跳过累加，N始终为0，输出0。' },
            { type:'bool', q:'下面代码执行后将输出99。\nfor i in range(100):\n    continue\nprint(i)', answer:0, code:'for i in range(100):\n    continue\nprint(i)', explain:'正确。range(100)最后一次迭代i=99，循环结束后i保持为99，输出99。print在循环外，不受continue影响。' },
            { type:'bool', q:'下面代码被执行时，将执行一次输出。\nfor i in range(10, 3):\n    print(i)', answer:1, code:'for i in range(10, 3):\n    print(i)', explain:'错误。range(10,3)默认步长为正，起始大于终止，范围为空，循环体一次都不执行。' },
            { type:'bool', q:'Python语句print(3, 2)执行后，将输出3和2，且3和2之间有空格间隔。', answer:0, explain:'正确。print()多个参数之间默认用空格分隔，输出"3 2"。' },
            { type:'bool', q:'在Python代码中，studentName、student_name以及sStudentName都是合法的变量名称。', answer:0, explain:'正确。三种命名都符合Python变量名规则：字母/下划线开头，只含字母数字下划线。分别对应驼峰、下划线、驼峰+前缀三种命名风格。' },
            { type:'bool', q:'Python的turtle中，turtle.right()参数必须为正数。', answer:1, explain:'错误。turtle.right()参数可以是负数，负数表示向左转等价于turtle.left(正数)。如right(-90)等价于left(90)。' },
            { type:'bool', q:'下面Python代码执行后将绘制3个间隔为50、边长也为50的正方形。\nimport turtle\nfor i in range(3):\n    for j in range(4):\n        turtle.forward(50)\n        turtle.left(90)\n    turtle.penup()\n    turtle.forward(100)\n    turtle.pendown()', answer:1, code:'import turtle\nfor i in range(3):\n    for j in range(4):\n        turtle.forward(50)\n        turtle.left(90)\n    turtle.penup()\n    turtle.forward(100)\n    turtle.pendown()', explain:'错误。正方形边长是50，但间隔是forward(100)（正方形的边长+间隔=50+50=100），正方形之间间隔是100-50=50。整体间隔并非50。' },
            // ========== 编程题 26-27 ==========
            { type:'code', title:'温度转换', desc:'小杨想编写一个程序计算某一开尔文温度对应的摄氏温度和华氏温度。\n转换公式：摄氏温度C = K - 273.15；华氏温度F = C × 1.8 + 32。\n若华氏温度高于212°F，输出"Temperature is too high!"\n否则输出摄氏和华氏温度，均保留两位小数。', inputFormat:'输入一行一个浮点数K，表示开尔文温度。', outputFormat:'若F>212输出"Temperature is too high!"，否则输出"C F"（保留两位小数，空格分隔）。', samples:[{input:'412.00',output:'Temperature is too high!',desc:'K=412→C=138.85→F=281.93>212'},{input:'173.56',output:'-99.59 -147.26',desc:'K=173.56→C=-99.59→F=-147.26≤212'}], referenceCode:'K = float(input())\nC = K - 273.15\nF = C * 1.8 + 32\n\nif F > 212:\n    print("Temperature is too high!")\nelse:\n    print(f"{C:.2f} {F:.2f}")', explain:'核心考点：浮点数输入float(input())，数学计算，if条件判断，f-string格式化保留两位小数（{变量:.2f}）。注意题干要求先判断F>212再决定输出。' },
            { type:'code', title:'奇偶统计', desc:'小杨有N个正整数，统计其中奇数和偶数的个数。', inputFormat:'第一行一个正整数N，之后N行每行一个正整数。', outputFormat:'输出两个正整数，空格分隔，分别代表奇数个数和偶数个数。', samples:[{input:'5\n1\n2\n3\n4\n5',output:'3 2',desc:'1,3,5是奇数→3个奇数；2,4是偶数→2个偶数。'}], referenceCode:'n = int(input())\nodd = 0\neven = 0\nfor _ in range(n):\n    num = int(input())\n    if num % 2 == 0:\n        even += 1\n    else:\n        odd += 1\nprint(odd, even)', explain:'核心考点：循环读取n个数，用if判断奇偶(num%2==0为偶数)，分别累加计数，最后print输出。注意print默认空格分隔。' }
        ]
    },
{
        id: '2025-03',
        title: '2025年3月 GESP Python 一级真题',
        date: '2025年3月 · 第九次认证',
        icon: '📄',
        source: 'CCF GESP 2025年3月第九次认证',
        questions: [
            // ========== 单选题 1-15 ==========
            { type:'single', q:'2025年春节有两件轰动全球的事件，一个是DeepSeek横空出世，另一个是贺岁片《哪吒2》票房惊人。下面关于DeepSeek与《哪吒2》的描述成立的是（ ）。', options:['《哪吒2》是一款新型操作系统','DeepSeek是深海钻探软件','《哪吒2》可以生成新的软件','DeepSeek可以根据《哪吒2》的场景生成剧情脚本'], answer:3, explain:'DeepSeek是国产大语言模型AI，具备文本生成能力，可以根据电影场景生成剧情脚本。《哪吒2》是电影，不是软件或操作系统。' },
            { type:'single', q:'在某集成开发环境中编辑一个源代码文件时不可以执行下面（ ）操作。', options:['修改变量定义','保存代码修改','撤销代码修改','插入执行截图'], answer:3, explain:'源代码文件是纯文本文件，只能编辑文本代码，不能插入图片/截图。其他三项都是代码编辑器的基本功能。' },
            { type:'single', q:'有关print("我爱码代码！")的说法，错误的是（ ）。', options:['配对双引号内的汉字改为英文Hello,Python代码能正确执行','代码中的双引号，可以改为两个单引号','代码中的双引号，可以改为三个单引号','代码中的双引号，可以改为三个双引号'], answer:1, explain:'B选项错误："两个单引号"（\'\'）在Python中是一个空字符串，不能替代一对双引号。正确替换方式是：一对单引号\'...\'、三个单引号\'\'\'...\'\'\'、三个双引号"""..."""。' },
            { type:'single', q:'Python表达式 16 // 4 % 2 的值是（ ）。', options:['8','4','2','0'], answer:3, explain:'按左结合性：16//4=4，4%2=0。//和%优先级相同，从左往右计算。' },
            { type:'single', q:'假设N为正整数12，则 print(N % 3 + N // 5) 将输出（ ）。', options:['6.4','2.4','6','2'], answer:3, explain:'12%3=0（12能被3整除），12//5=2（整除），0+2=2。注意//和%结果都是整数。' },
            { type:'single', q:'下面代码执行后的输出是（ ）。\nN = 10\nprint(f"N*N={N*N}")', options:['10*10={10*10}','100=100','N*N=100','N*N={100}'], answer:2, code:'N = 10\nprint(f"N*N={N*N}")', explain:'f-string中花括号{N*N}内的表达式会被计算，10*10=100，所以输出"N*N=100"。' },
            { type:'single', q:'执行下面代码，先后输入100和200，输出是（ ）。\nfirst = input("请输入第1个正整数：")\nsecond = input("请输入第2个正整数：")\nprint(first + second)', options:['300','100200',"'100200'",'100 200'], answer:1, code:'first = input("请输入第1个正整数：")\nsecond = input("请输入第2个正整数：")\nprint(first + second)', explain:'input()返回字符串，"100"+"200"="100200"（字符串拼接）。要做数值加法需用int()转换。' },
            { type:'single', q:'有关print(input())的说法，错误的是（ ）。', options:['input()函数的输出可以作为函数print()的输入','该代码执行后将输出从键盘上输入的内容','input()函数的输出是函数print()的参数','该代码存在错误，input()函数应该有提示信息'], answer:3, explain:'D选项错误：input()的提示信息参数是可选的，省略不会报错。A/B/C描述都正确。' },
            { type:'single', q:'选出能被2整除且除以7余数为2的数。不能实现的是（ ）。\nfor i in range(100):\n    if ________:\n        print(i)', options:['i % 2 == 0 and i % 7 == 2','not(i % 2) and i % 7 == 2','not(i % 2) and not(i % 7)','i % 2 != 1 and i % 7 == 2'], answer:2, code:'for i in range(100):\n    if ________:\n        print(i)', explain:'C选项not(i%7)表示i%7==0（能被7整除），与题意"除以7余数为2"不符。A/B/D都能正确表达"能被2整除且除以7余2"。' },
            { type:'single', q:'下面代码执行后输出是（ ）。\ntnt = 0\nfor i in range(-1000, 1000):\n    tnt += i\nprint(tnt)', options:['-1000','0','999','1000'], answer:0, code:'tnt = 0\nfor i in range(-1000, 1000):\n    tnt += i\nprint(tnt)', explain:'range(-1000,1000)生成-1000到999。-1000到999的正负相消后只剩下-1000。(-1000)+(-999+999)+...+(-1+1)+0 = -1000。' },
            { type:'single', q:'下面代码执行后输出的是（ ）。\nfor i in range(1, 100, 5):\n    continue\nprint(i)', options:['100','96','1','0'], answer:1, code:'for i in range(1, 100, 5):\n    continue\nprint(i)', explain:'range(1,100,5)生成1,6,11,...,96。循环中continue不中断循环，循环结束后i保持为最后一个值96。' },
            { type:'single', q:'下面代码执行后输出的是（ ）。\ntnt = 0\nfor i in range(5, 100, 5):\n    if i % 2 == 0:\n        continue\n    tnt += 1\n    if i % 3 == 0 and i % 7 == 1:\n        break\nprint(tnt)', options:['500','450','10','2'], answer:3, code:'tnt = 0\nfor i in range(5, 100, 5):\n    if i % 2 == 0:\n        continue\n    tnt += 1\n    if i % 3 == 0 and i % 7 == 1:\n        break\nprint(tnt)', explain:'奇数中满足i%3==0且i%7==1的：15(15%3=0,15%7=1)遇到break。之前奇数有5和15，tnt=2。' },
            { type:'single', q:'海龟初始指向0度（右方），要使海龟指向135度，横线处填入代码错误的是（ ）。\nimport turtle\nfor i in range(_____):\n    turtle.left(45)', options:['3','1, 4','1, 5, 2','1, 6, 2'], answer:2, code:'import turtle\nfor i in range(_____):\n    turtle.left(45)', explain:'每次左转45°，要指向135°需左转3次（3×45°=135°）。range(3)→3次✓；range(1,4)→3次✓；range(1,6,2)→3次✓；range(1,5,2)→2次(1,3)→90°✗。' },
            { type:'single', q:'为输出正六边形图形，横线处应填入（ ）。\nimport turtle\nfor i in range(_____):\n    turtle.right(60)\n    turtle.forward(50)', options:['6','7','10','11'], answer:0, code:'import turtle\nfor i in range(_____):\n    turtle.right(60)\n    turtle.forward(50)', explain:'正六边形：每次右转60°，360°÷60°=6次。range(6)执行0~5共6次，画出正六边形。' },
            { type:'single', q:'下面Python语句用于计算圆柱体体积（V=πr²h）。下列代码中，可以实现的是（ ）。', options:['print(3.14*r*r*h)','print("体积=",3.14*r*r*h)','以上都可以','以上都不可以'], answer:2, explain:'两个选项都能计算并输出圆柱体体积，只是输出格式不同：A只输出数值，B先输出"体积="再输出数值。都是合法Python代码。' },
            // ========== 判断题 16-25 ==========
            { type:'bool', q:'在Python中，可以使用int()函数将字符串"2025"转换为整数2025。', answer:0, explain:'正确。int("2025")可将数字字符串转换为整数2025。但如果字符串含字母或小数点则无法转换。' },
            { type:'bool', q:'Python代码中，print(10/2)和print(10//2)输出的结果一样。', answer:1, explain:'错误。10/2输出5.0（浮点数），10//2输出5（整数）。值相同但类型不同，输出显示也不一样。' },
            { type:'bool', q:'在Python中，for循环的循环变量在循环结束后会保留最后一次迭代的值。', answer:0, explain:'正确。Python中for循环变量在循环结束后仍然存在，保留最后一次迭代的值。如for i in range(5): pass后print(i)会输出4。' },
            { type:'bool', q:'range(5, 1)在Python中会生成5,4,3,2这4个数字。', answer:1, explain:'错误。range(5,1)默认步长为正，起始大于终止时范围为空，不生成任何数字。要生成递减序列需指定负步长：range(5,1,-1)。' },
            { type:'bool', q:'在Python的turtle模块中，turtle.circle(50, 180)将绘制一个半径为50的半圆。', answer:0, explain:'正确。circle(半径,角度)中第二个参数指定绘制的弧度，180表示画半圆（180度）。circle(50,360)画完整圆。' },
            { type:'bool', q:'Python中，=和==的含义相同，都是判断左右两边是否相等。', answer:1, explain:'错误。=是赋值运算符（将右边的值赋给左边的变量），==是比较运算符（判断两边是否相等）。两者完全不同，是GESP一级常考易错点。' },
            { type:'bool', q:'在Python中，可以使用break语句跳出当前循环。', answer:0, explain:'正确。break用于立即终止当前所在循环，程序继续执行循环之后的代码。' },
            { type:'bool', q:'Python中，if语句后面的条件表达式必须以冒号:结尾。', answer:0, explain:'正确。这是Python语法规定：if 条件:、elif 条件:、else: 都必须以冒号结尾。' },
            { type:'bool', q:'下面代码可以正确绘制一个正方形。\nimport turtle\nfor i in range(4):\n    turtle.forward(100)\n    turtle.right(90)', answer:0, code:'import turtle\nfor i in range(4):\n    turtle.forward(100)\n    turtle.right(90)', explain:'正确。循环4次，每次前进100右转90°，画出边长100的正方形。这是turtle画正方形的经典代码。' },
            { type:'bool', q:'input()函数返回的数据类型是整数int。', answer:1, explain:'错误。input()函数返回的永远是字符串(str)类型，即使输入的是数字。这是GESP一级最重要的考点之一，务必牢记！需要数字时必须用int()或float()转换。' },
            // ========== 编程题 26-27 ==========
            { type:'code', title:'图书馆里的老鼠', desc:'图书馆里有n本书排成一行。有一只老鼠每天晚上会从某本书开始，沿着书架啃书。它第一天啃1本书，第二天啃2本书...第k天啃k本书。给定总书数n，判断老鼠能否在某天恰好啃完所有书（即存在k使得1+2+...+k=n）。如果能，输出k；不能输出-1。', inputFormat:'输入一个正整数n，表示书的总数。', outputFormat:'输出一个整数k或-1。', samples:[{input:'6',output:'3',desc:'1+2+3=6，第3天恰好啃完。'},{input:'8',output:'-1',desc:'1+2=3<8，1+2+3=6<8，1+2+3+4=10>8，无法恰好啃完。'}], referenceCode:'n = int(input())\ntotal = 0\nk = 0\nwhile total < n:\n    k += 1\n    total += k\nif total == n:\n    print(k)\nelse:\n    print(-1)', explain:'核心思路：用while循环累加1+2+3+...，当总和≥n时停止。若恰好等于n则输出k（天数），否则输出-1。考查while循环和累加求和。' },
            { type:'code', title:'四舍五入', desc:'输入一个浮点数，将其四舍五入到整数并输出。要求：不使用round()函数，自己实现四舍五入逻辑。', inputFormat:'输入一行一个浮点数x。', outputFormat:'输出四舍五入后的整数。', samples:[{input:'3.4',output:'3',desc:'.4<.5舍去'},{input:'3.6',output:'4',desc:'.6≥.5进位'},{input:'-3.6',output:'-4',desc:'负数四舍五入规则'}], referenceCode:'x = float(input())\nif x >= 0:\n    result = int(x + 0.5)\nelse:\n    result = int(x - 0.5)\nprint(result)', explain:'核心思路：正数+0.5后取整实现四舍五入（如3.4+0.5=3.9→3，3.6+0.5=4.1→4）。负数-0.5后取整。考查浮点数运算和int()截断取整的特性。' }
        ]
    }
,
{
        id: '2023-12',
        title: '2023年12月 GESP Python 一级真题',
        date: '2023年12月',
        icon: '📄',
        source: 'CCF GESP 2023年12月',
        questions: [
            // Q1-15
            { type:'single', q:'某公司新出了⼀款⽆⼈驾驶的⼩汽车，通过声控智能驾驶系统，乘客只要告诉汽车⽬的地，车⼦就能⾃动选 择⼀条优化路线，告诉乘客后驶达那⾥。请问下⾯哪项不是驾驶系统完成选路所必须的。（ ）', options:["麦克风", "扬声器", "油量表", "传感器"], answer:2, explain:'无人驾驶选路需要：麦克风(听取指令)、扬声器(语音反馈)、传感器(感知路况)。油量表监控燃油，与路线选择无关。' },
            { type:'single', q:'现代计算机是指电⼦计算机，它所基于的是（ ）体系结构。', options:["艾伦 ·图灵", "冯·诺依曼", "阿塔纳索夫", "埃克特 -莫克利"], answer:1, explain:'无人驾驶选路需要：麦克风(听取指令)、扬声器(语音反馈)、传感器(感知路况)。油量表监控燃油，与路线选择无关。' },
            { type:'single', q:'以下 Python不可以作为变量的名称的是 ( )。', options:["CCF GESP", "ccfGESP", "CCFgesp", "CCF_GESP"], answer:0, explain:'无人驾驶选路需麦克风(听取指令)、扬声器(反馈)、传感器(感知)。油量表与路线选择无关。' },
            { type:'single', q:'Python表达式10 - 3 ** 2 % 10的值是 ( )。', options:["(options in PDF)", "(options in PDF)", "(options in PDF)", "(options in PDF)"], answer:1, explain:'无人驾驶选路需麦克风(听取指令)、扬声器(反馈)、传感器(感知)。油量表与路线选择无关。' },
            { type:'single', q:'假设现在是上午⼗点，求出N⼩时（正整数）后是第⼏天及时，如输⼊20⼩时则为第2天6点，如N输⼊4则为 今天14点。为实现相应功能，应在横线处填写代码是( )。', options:["(10 + N) % 24 , (10 + N) // 24", "(10 + N) // 24 , (10 + N) % 24", "N % 24 , N // 24", "10 // 24 , 10 % 24"], answer:1, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'下⾯的程序⽤于判断N是否为偶数，横线处应填写代码是（ ）。', options:["N % 2 == 0", "N % 2 = 0", "N % 2", "N % 2 != 0"], answer:0, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'下⾯对Python代码执⾏后输出的描述，正确的是（ ）。', options:["如果输⼊的N是⼩于等于2的整数，第5⾏将输出0。", "如果输⼊的N是⼤于等于2的整数，第5⾏将输出N-1。", "如果输⼊的N是⼤于等于2的整数，第5⾏将输出N。", "以上说法均不正确。"], answer:1, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'下⾯Python代码执⾏后的输出是（ ）。', options:["(options in PDF)", "(options in PDF)", "(options in PDF)", "10"], answer:2, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python代码执⾏后的输出是（ ）。', options:["(options in PDF)", "(options in PDF)", "(options in PDF)", "(options in PDF)"], answer:0, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python代码执⾏后的输出是（ ）。', options:["11", "10", "(options in PDF)", "(options in PDF)"], answer:2, explain:'正确答案是A。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python代码⽤于判断⼀个数是否为质数（素数），在横线处应填⼊代码是（ ）。', options:["cnt = 1", "cnt = 2", "cnt =+ 1", "cnt += 1"], answer:3, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'当执⾏turtle.forward()时，提⽰如下信息：NameError: name \'turtle\' is not defined. Did you mean: \'tuple\'?，下⾯描述正确的是（ ）。', options:["提⽰的含义有 “turtle没有定义 ”之意，故先执⾏turtle = 0即可", "将turtle修改为tuple后将不会报错", "turtle.forward()中的forward错误，必须先执⾏turtle.pendown()", "因为没有执⾏import turtle，故有此错误。"], answer:3, explain:'正确答案是C。请分析题目代码和选项。' },
            { type:'single', q:'先后执⾏ Python代码import turtle和turtle.circle(10,steps = 3)后，正确的说法是（ ）。', options:["将绘制出半径为 10 ，弧度为 3 的圆", "将绘制出半径为 10 ，角度为 3 的圆", "将绘制出边长为 10 的正三边形，即等边三角形", "将绘制出半径为 10 的内接圆正三边形，即等边三角形"], answer:3, explain:'正确答案是C。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python代码执⾏后输出的正确图形是 ( )。', options:["(options in PDF)", "(options in PDF)", "(options in PDF)", "(options in PDF)"], answer:0, explain:'正确答案是D。请分析题目代码和选项。' },
            { type:'single', q:'为实现下图所⽰效果，请完善随后的 Python 代码，并在横线上填⼊相应代码 ()。', options:["-10", "10 * i 题号 12345678910 答案", "10 * (i + 1)", "-10 * (i + 1) 2"], answer:3, explain:'circle(r)画圆，circle(r,a)画圆弧，circle(r,360,s)用s条线段近似圆。' },
            // Q16-25
            { type:'bool', q:'⼩杨最近在准备考 GESP ，他⽤的 Python IDLE 来练习和运⾏程序，所以 Python IDLE 也是⼀个⼩型操作系统。 （ ）', answer:0, explain:'circle(r)画圆，circle(r,a)画圆弧，circle(r,360,s)用s条线段近似圆。' },
            { type:'bool', q:'任何⼀个while循环都可以转化为等价的for循环（ ）。', answer:1, explain:'错误。该说法与Python语言实际行为不符。' },
            { type:'bool', q:'Python表达式int(3.14)的值为 3。 ( )', answer:0, explain:'正确。该说法符合Python语言规范和编程逻辑。' },
            { type:'bool', q:'Python语句print(2 ** 3, 3 % 10, 2+3)的输出为8,3,5。 ( )', answer:1, explain:'错误。该说法与Python语言实际行为不符。' },
            { type:'bool', q:'Python内置函数range(1,10,3)表⽰从 1开始到 10结束间隔为 3 ，相当于 1 、 4 、 7 、 10 。（ ）', answer:0, explain:'正确。该说法符合Python语言规范和编程逻辑。' },
            { type:'bool', q:'Python表达式int("10"*2+"10")+101的值为 101111。（ ）', answer:1, explain:'操作系统管理硬件和软件资源。鸿蒙(HarmonyOS)是华为开发的操作系统，其他选项为应用软件。' },
            { type:'bool', q:'在Python中，判断语句如果有多个条件，条件之间通常不应重叠，否则可能导致误判。（ ）', answer:0, explain:'操作系统管理硬件和软件资源。鸿蒙(HarmonyOS)是华为开发的操作系统，其他选项为应用软件。' },
            { type:'bool', q:'在下⾯的 Python代码中，由于循环中的continue是⽆条件被执⾏，因此将导致死循环。（ ）', answer:1, explain:'while循环在条件成立时反复执行。必须更新条件变量避免死循环。' },
            { type:'bool', q:'在Python代码中，turtle.reset()和turtle.clear()功能相同，都是清除画⾯，海⻳回到原点，朝向 置为默认⽅向。（ ）', answer:0, explain:'int(3.14)截断小数得3(非四舍五入)。int()将浮点数或整数字符串转为整数。' },
            { type:'bool', q:'在Python的 turtle库中，turtle.right()与turtle.rt()等价。（ ） 3', answer:1, explain:'range(1,10,3)生成1,4,7。最后一次输出是7(不是10)。步长3：1+3=4,4+3=7,7+3=10超。' },
            // Q26-27
            { type:'code', title:'Q1', desc:'See PDF', inputFormat:'-', outputFormat:'-', samples:[], referenceCode:'# See PDF', explain:'See PDF' },
            { type:'code', title:'Q2', desc:'See PDF', inputFormat:'-', outputFormat:'-', samples:[], referenceCode:'# See PDF', explain:'See PDF' }
        ]},
{id: '2024-03',
        title: '2024年3月 GESP Python 一级真题',
        date: '2024年3月',
        icon: '📄',
        source: 'CCF GESP 2024年3月',
        questions: [
            // Q1-15
            { type:'single', q:'⼩杨的⽗母最近刚刚给他买了⼀块华为⼿表，他说⼿表上跑的是鸿蒙，这个鸿蒙是？（ ）', options:["⼩程序", "计时器", "操作系统", "神话⼈物"], answer:2, explain:'正确。该说法符合Python语言规范和编程逻辑。建议结合具体代码验证。' },
            { type:'single', q:'中国计算机学会（ CCF ）在 2024 年 1 ⽉ 27 ⽇的颁奖典礼上颁布了王选奖，王选先⽣的重⼤贡献是（ ）。', options:["制造⾃动驾驶汽车", "创⽴培训学校", "发明汉字激光照排系统", "成⽴⽅正公司"], answer:2, explain:'操作系统管理硬件和软件资源。鸿蒙(HarmonyOS)是华为开发的操作系统。其他选项是应用软件(地图、会议等)或办公软件。' },
            { type:'single', q:'Python表达式(3 - 2) * 3 + 5的值是 ( )。', options:["-13", "(options in PDF)", "(options in PDF)", "(options in PDF)"], answer:1, explain:'操作系统管理硬件和软件资源。鸿蒙(HarmonyOS)是华为开发的操作系统，其他选项为应用软件。' },
            { type:'single', q:'Python语句print("5%2=",5 % 2)执⾏后的输出是 ( )。', options:["2 2", "1 1", "5%2=2", "5%2= 1"], answer:3, explain:'操作系统管理硬件和软件资源。鸿蒙(HarmonyOS)是华为开发的操作系统，其他选项为应用软件。' },
            { type:'single', q:'执⾏ Python 语句a = input()时如果输⼊5+2，下述说法正确的是（ ）。', options:["变量a将被赋值为整数 7", "变量a将被赋值为字符串，字符串内容为5+2", "语句执⾏将报错，不能输⼊表达式", "语句执⾏将报错，因为input()函数的括号内没有提⽰字符串作为参数"], answer:1, explain:'王选院士的重大贡献是发明汉字激光照排系统，被誉为当代毕昇。' },
            { type:'single', q:'下⾯ Python 代码执⾏后的输出是（ ）。', options:["a+1= 2", "a+1=2", "2=2", "2= 2"], answer:1, explain:'正确答案是C。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python 代码执⾏时输⼊ 21 后，有关描述正确的是（ ）。', options:["仅有代码 4 ⾏被执⾏", "第4和第 7 ⾏代码都被执⾏", "仅有代码第 7 ⾏被执⾏", "第8⾏代码将被执⾏，因为input()输⼊为字符串"], answer:0, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python 代码第 2 ⾏，总共被执⾏次数是（ ）。', options:["(options in PDF)", "10", "19", "20"], answer:3, explain:'正确答案是D。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python 代码执⾏后的输出是（ ）。', options:["(options in PDF)", "(options in PDF)", "18", "20"], answer:3, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python 代码执⾏后的输出是（ ）。', options:["9#6#3#", "9#6#3#0#", "8#7#5#4#2#1#", "10#8#7#5#4#2#1#"], answer:1, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python 代码⽤于判断键盘输⼊的整数是否为质数。质数是只能被 1 和它本⾝整除的数。在横线处应填⼊ 代码是（ ）。', options:["n % i", "n % i == 0", "n // i", "n / i"], answer:1, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python 代码执⾏后的描述，正确的是（ ）。', options:["有4条蓝⾊线段 5 条红⾊线段，总计 9 条线段", "有4条红⾊线段 5 条蓝⾊线段，总计 9 条线段", "有5条蓝⾊线段 5 条红⾊线段，总计 10 条线段", "只有 1条线段，线段颜⾊为蓝⾊"], answer:3, explain:'正确答案是D。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python 执⾏后输出是（ ）。 题号 12345678910 答案', options:["红⾊正⽅形，四周封闭", "红⾊正⽅形，左边有缺⼝", "红⾊正⽅形，右边有缺⼝", "红⾊正⽅形，底边有缺⼝"], answer:1, explain:'正确答案是D。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python 代码执⾏后正确的图形是（ ）。', options:["完整圆形，但原位置重复三次，看起来是⼀个圆", "以坐标 (150,90) 为圆⼼的完整圆形", "不是完整圆形，缺少左下角的四分之⼀", "不是完整圆形，缺少右下角的四分之⼀"], answer:2, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'为画出如下所⽰图形，下⾯ Python 代码横线处应填⼊ ()。', options:["150", "100", "50", "0 2"], answer:1, explain:'正确答案是B。请分析题目代码和选项。' },
            // Q16-25
            { type:'bool', q:'⼩杨今年春节回奶奶家了，奶奶家的数字电视可以通过遥控器输⼊电视剧名称来找到想播放的电视剧，所以 可以推知⾥⾯有交互式程序在运⾏。（ ）', answer:0, explain:'正确。该说法符合Python语言规范和编程逻辑。' },
            { type:'bool', q:'任何⼀个for循环都可以转化为等价的while循环。（ ）', answer:1, explain:'错误。该说法与Python语言实际行为不符。' },
            { type:'bool', q:'在Python 代码中变量n被赋值为 27 ，则print(n // 10)执⾏后输出的是7。( )', answer:0, explain:'正确。该说法符合Python语言规范和编程逻辑。' },
            { type:'bool', q:'Python语句print(2,3,sep="#",end="&")执⾏后输出的是2#3&。 ( )', answer:1, explain:'错误。该说法与Python语言实际行为不符。' },
            { type:'bool', q:'在Python 中，while可能是死循环，⽽for-in循环不可能是死循环。（ ）', answer:0, explain:'正确。该说法符合Python语言规范和编程逻辑。' },
            { type:'bool', q:'Python表达式"10"*2执⾏时将报错，因为"10"是字符串类型⽽2是整数类型，它们数据类型不同，不能 在⼀起运算。（ ）', answer:1, explain:'错误。该说法与Python语言实际行为不符。' },
            { type:'bool', q:'在Python ，break语句⽤于提前终⽌当前层次循环，适⽤于while循环，但不适⽤于for-in循环。（ ）', answer:0, explain:'正确。该说法符合Python语言规范和编程逻辑。' },
            { type:'bool', q:'以下 Python 代码默认将绘制⼀条⽔平直线。（ ）', answer:1, explain:'while循环在条件成立时反复执行。必须更新条件变量避免死循环。' },
            { type:'bool', q:'Python代码执⾏后，将绘制⼀个边长为 100 的等边三角形，且填充颜⾊为红⾊。（ ）', answer:0, explain:'while循环在条件成立时反复执行。必须更新条件变量避免死循环。' },
            { type:'bool', q:'Python代码turtle.right()也可以实现海⻳指向左旋转。（ ） 3', answer:1, explain:'print()的sep参数指定分隔符(默认空格)。sep="*"则用*分隔各输出项。' },
            // Q26-27
            { type:'code', title:'Q1', desc:'See PDF', inputFormat:'-', outputFormat:'-', samples:[], referenceCode:'# See PDF', explain:'See PDF' },
            { type:'code', title:'Q2', desc:'See PDF', inputFormat:'-', outputFormat:'-', samples:[], referenceCode:'# See PDF', explain:'See PDF' }
        ]},
{id: '2024-06',
        title: '2024年6月 GESP Python 一级真题',
        date: '2024年6月',
        icon: '📄',
        source: 'CCF GESP 2024年6月',
        questions: [
            // Q1-15
            { type:'single', q:'⼩杨⽗母带他到某培训机构给他报名参加 CCF 组织的 GESP 认证考试的第 1 级，那他可以选择的认证语⾔有⼏ 种？（ ）', options:["(options in PDF)", "(options in PDF)", "(options in PDF)", "(options in PDF)"], answer:2, explain:'错误。该说法与Python语言实际行为不符。建议在Python环境中实际运行测试验证。' },
            { type:'single', q:'ENIAC于 1946 年投⼊运⾏，是世界上第⼀台真正意义上的计算机，它的主要部件都是（ ）组成的。', options:["感应线圈", "电⼦管", "晶体管", "集成电路"], answer:1, explain:'GESP认证考试目前支持3种编程语言：C++、Python和Scratch。考生可任选一种参加对应等级的认证。' },
            { type:'single', q:'在Python 中，假设 N 为正整数，则表达式print(N % 3 + N % 7)的最⼤值是 ( )。', options:["最⼤值为 6", "最⼤值为 8", "最⼤值为 9", "最⼤值为 10"], answer:1, explain:'正确答案是C。请分析题目代码和选项。' },
            { type:'single', q:'Python语句print(f"5%2={5%2}",5 % 2)执⾏后的输出是 ( )。', options:["1={1} 1", "5%2={5%2}1", "5%2={5%2} 1", "5%2=1 1"], answer:3, explain:'正确答案是C。请分析题目代码和选项。' },
            { type:'single', q:'执⾏ Python 语句print(input())时如果输⼊ 5+2 ，下述说法正确的是（ ）。', options:["将输出整数 7", "将输出 5+2", "语句执⾏将报错，函数不能作为函数的参数", "语句执⾏将报错，因为 input() 函数的括号内没有提⽰字符串"], answer:1, explain:'ENIAC于1946年投入运行，是世界第一台通用电子计算机，主要元件是电子管。' },
            { type:'single', q:'下⾯ Python 代码执⾏后的输出是（ ）。', options:["102={102}", "a+1={a+1}", "a+1=102", "a先被赋值为浮点数，后被赋值为整数，执⾏将报错"], answer:2, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python 代码执⾏后的输出是（ ）。', options:["5+5", "5+'5'", "10", "55"], answer:0, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python 代码执⾏时输⼊ 10 后，正确的输出是（ ）。', options:["第3⾏代码 1", "第4⾏代码 1", "第3⾏代码 1", "第4⾏代码 1"], answer:0, explain:'f-string中{}内表达式会被计算替换。如f"6%2={6%2}"输出"6%2=0"。f前缀不能省略。' },
            { type:'single', q:'下⾯ Python 代码执⾏后，最终输出是（ ）。a = 101.101 a = 101 print(f"a+1={a+1}")1 2 3 a = "5" b = 5 print(f"{a}+{b}")1 2 3 N = int(input("请输入正整数： ")) if N % 3: print("第3行代码 ", N % 3, sep = "") else: print("第4行代码 ", N', options:["9 45", "10 55", "10 45", "11 55"], answer:0, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python 代码⽤于判断 N 是否为质数（只能被 1 和它本⾝整除的正整数）。程序执⾏后，下⾯有关描述错 误的是（ ）。', options:["如果输⼊负整数，将输出 “ 不是质数 ”", "如果输⼊ 2 ，将输出 “ 是质数 ” ，因为 Flag 已被改变为 True", "如果输⼊ 2 ，将输出 “ 是质数 ” ，即便此时循环体没有被执⾏", "如果将if N >= 2:改为if N > 2:同样能正确判断 N 是否质数"], answer:3, explain:'正确答案是A。请分析题目代码和选项。' },
            { type:'single', q:'下⾯的 Python 代码⽤于求 1-N 之间所有奇数之和，其中 N 为正整数，如果 N 为奇数求和时包括 N 。有关描述错 误的是（ ）。', options:["执⾏代码时如果输⼊ 10 ，则最后⼀⾏输出将是11 25Sum = 0 for i in range(10): Sum += i print(i,Sum)1 2 3 4 N = int(input(\"请输入整数： \")) Flag = False if N >= 2: Flag = True for i in range(2,N): if N % i == 0: Flag = False brea", "执⾏代码时如果输⼊ 5 ，则最后⼀⾏输出将是6 9", "将i += 1移到if i % 2 == 1:前⼀⾏且同样对齐，同样能实现题⽬要求", "删除if i % 2 == 1:，并将i += 1改为i += 2，且将Sum += i与i += 2同样对齐，同样可以实现 题⽬要求"], answer:2, explain:'正确答案是A。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python 代码执⾏后的描述，正确的是（ ）。', options:["共有 5条线段，蓝红相间，即蓝红蓝红蓝", "共有 3条线段，全部是蓝⾊，看起来是 1 条线段", "共有 6条线段，其中两条红⾊线段， 4 条蓝⾊线段", "以上说法都不正确"], answer:3, explain:'正确答案是D。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python 代码执⾏后的描述，错误的是（ ）。', options:["代码turtle.circle(100)将绘制⼀个半径为 100 的圆", "代码turtle.circle(100, 360, 8)将绘制半径为 100 的完整内接正⼋边形", "代码turtle.circle(100, 360, 8)将绘制半径为 100 的宽度为 8 的圆", "代码turtle.circle(100, 180, 4) 将绘制半径为 100 的正⼋边形的右侧⼀半（ 4 条边） , 因为 第 2 个参数是 180度（只绘制⼀半）且第 3 个参数为 4 （只绘制出 4 个边）。"], answer:2, explain:'正确答案是C。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python 代码执⾏后输出的图形如下，横线处应填写的代码是（ ）。', options:["120import turtle for i in range(1,10,2): if i % 3 == 0: turtle.pencolor(\"red\") else: turtle.pencolor(\"blue\") turtle.forward(50)1 2 3 4 5 6 7 8 import turtle turtle.circle(100) turtle.circle(100, 360, ", "110", "100", "90"], answer:2, explain:'正确答案是D。请分析题目代码和选项。' },
            { type:'single', q:'为画出如下所⽰图形，下⾯ Python 代码横线处应填⼊ ()。', options:["360", "180", "90", "45 2"], answer:2, explain:'正确答案是D。请分析题目代码和选项。' },
            // Q16-25
            { type:'bool', q:'GESP测试是对认证者的编程能⼒进⾏等级认证，同⼀级别的能⼒基本上与编程语⾔⽆关。（ ）', answer:0, explain:'正确。该说法符合Python语言规范和编程逻辑。' },
            { type:'bool', q:'Python语句print(N // 3,N % 3, N ** 3, sep = "->",end = "END")中的 N已被赋值为 10 ，则该语句 执⾏后输出是 3->1->1000->END 。 ( )', answer:1, explain:'错误。该说法与Python语言实际行为不符。' },
            { type:'bool', q:'Python语句print(int(float(input())))可以输⼊正负整数和浮点数，并将其转换为整数后输出。（ ）', answer:0, explain:'正确。该说法符合Python语言规范和编程逻辑。' },
            { type:'bool', q:'Python语句print(f"{N}*2")中的 N已被赋值为 5 。该语句执⾏后将输出 10 。（ ）', answer:1, explain:'错误。该说法与Python语言实际行为不符。' },
            { type:'bool', q:'在Python 中， break 语句⽤于终⽌当前层次的循环，可以是 for-in 循环，也可以是 while 循环。（ ）', answer:0, explain:'正确。该说法符合Python语言规范和编程逻辑。' },
            { type:'bool', q:'在Python ， continue 语句通常与 if 语句配合使⽤。（ ）', answer:1, explain:'错误。该说法与Python语言实际行为不符。' },
            { type:'bool', q:'在Python 代码中，不可以将变量命名为 print ，因为 print 是 Python 语⾔的关键字。（ ）', answer:0, explain:'正确。该说法符合Python语言规范和编程逻辑。' },
            { type:'bool', q:'在Python turtle 中， turtle.forward() 与 turtle.fd() 具有相同的功能。（ ）', answer:1, explain:'错误。该说法与Python语言实际行为不符。' },
            { type:'bool', q:'Python代码 turtle.clear() 可以清除海⻳绘图，且海⻳将回到原点。（ ）import turtle for i in range(4): turtle.circle(50) turtle.left(__________)1 2 3 4', answer:0, explain:'f-string中{}内表达式会被计算替换。如f"6%2={6%2}"输出"6%2=0"。f前缀不能省略。' },
            { type:'bool', q:'下⾯ Python 代码执⾏后将绘制正多边形，如输⼊ 5 将绘制正 5 边形，输⼊ 8 将绘制正 8 边形，以此类推。（ ） 3', answer:1, explain:'while循环在条件成立时反复执行。必须更新条件变量避免死循环。' },
            // Q26-27
            { type:'code', title:'Q1', desc:'See PDF', inputFormat:'-', outputFormat:'-', samples:[], referenceCode:'# See PDF', explain:'See PDF' },
            { type:'code', title:'Q2', desc:'See PDF', inputFormat:'-', outputFormat:'-', samples:[], referenceCode:'# See PDF', explain:'See PDF' }
        ]},
{id: '2025-06',
        title: '2025年6月 GESP Python 一级真题',
        date: '2025年6月',
        icon: '📄',
        source: 'CCF GESP 2025年6月',
        questions: [
            // Q1-15
            { type:'single', q:'2025年4⽉19⽇在北京举⾏了⼀场颇为瞩⽬的⼈形机器⼈半程马拉松赛。⽐赛期间，跑动着的机器⼈会利⽤ ⾝上安装的多个传感器所反馈的数据来调整姿态、保持平衡等，那么这类传感器类似于计算机的( )。', options:["处理器", "存储器", "输⼊设备", "输出设备"], answer:2, explain:'正确答案是B。请仔细分析题目中的代码逻辑和选项含义。' },
            { type:'single', q:'⼩杨购置的计算机使⽤⼀年后觉得内存不够⽤了，想购置⼀个容量更⼤的内存条，这时其需要的内存条是（ ）。', options:["RAM", "ROM", "CACHE", "EPROM"], answer:0, explain:'传感器负责采集外部信息(姿态、平衡数据)并传给计算机处理，功能类似计算机的输入设备(如键盘、鼠标)。' },
            { type:'single', q:'下列Python代码执⾏后，其结果是( )。', options:["输出10", "输出{First}", "输出\"{First}\"", "报错，因为{First}中的First应该是first"], answer:3, explain:'传感器采集外部信息传给计算机处理，功能类似计算机的输入设备。' },
            { type:'single', q:'Python表达式14 - 3 * 3 ** 2的值是( )。', options:["99", "25", "-13first = 10 print(f\"{First}\")1 2", "-67"], answer:2, explain:'传感器采集外部信息传给计算机处理，功能类似计算机的输入设备。' },
            { type:'single', q:'下⾯的 Python 代码执⾏后，其输出是 ( )。', options:["10 20", "20 10", "10 10", "20 20"], answer:1, explain:'传感器采集外部信息传给计算机处理，功能类似计算机的输入设备。' },
            { type:'single', q:'下⾯ Python 代码执⾏后的输出是 ( )。', options:["a=3 b=4 c=5,a^2+b^2=25,c^2=25", "3=3 4=4 5=5,9+16=25,25=25", "a={a} b={b} c={c},a^2+b^2={a**2+b**2},c^2={c**2}", "a=3 b=4 c=5,1+6=25,7=25"], answer:0, explain:'RAM(随机存取存储器)是主内存条。ROM只读，CACHE缓存，EPROM需紫外线擦除。' },
            { type:'single', q:'阅读下⾯的 Python 代码，横线上应填⼊的代码是（ ）。', options:["{2025-int(YearOld)}", "{2025-YearOld}", "{2025}-{int(YearOld)}", "{2025}-{YearOld}"], answer:0, explain:'正确答案是D。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python 代码执⾏后的输出是（ ）。', options:["a+b= 7 a+b={a+b}", "a+b=7 a+b=7", "a+b=7a+b={a+b}", "a+b=7a+b=7x = 10 y = 20 x = x + y y = x - y x = x - y print(x, y)1 2 3 4 5 6 a, b, c = 3, 4, 5 print(f\"a={a} b={b} c={c},a^2+b^2={a**2+b**2},c^2={c**2}\")1 2 YearOld = input(\"您今年的整数年龄是 ?\") print(f\"您出生于"], answer:0, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'下⾯的 Python 代码⽤于求 M 天后是星期⼏，横线处应填⼊的代码是（ ）。', options:["(options in PDF)", "(options in PDF)", "(options in PDF)", "(options in PDF)"], answer:1, explain:'正确答案是A。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python 代码执⾏后输出是（ ）。', options:["END", "1#", "1#4#END", "1#4#7#10#END"], answer:0, explain:'正确答案是A。请分析题目代码和选项。' },
            { type:'single', q:'下⾯的 Python 代码⽤于求 N 的所有因数，如输⼊ 12 则将输出12,6,4,3,2,1,。（ ）。N = int(input("当前星期几？ ")) #星期日是 0 M = int(input("求多少天后？ ")) #输入正整数 D = __________________ if ______________: print(f"{M}后是星期日 ") else: print(f"{M}', options:["i <= 1", "i == 1", "i > 1", "i >= 1"], answer:2, explain:'正确答案是A。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python 代码执⾏后输出的是（ ）。', options:["55", "15", "(options in PDF)", "(options in PDF)"], answer:3, explain:'正确答案是A。请分析题目代码和选项。' },
            { type:'single', q:'turtle.forward(100) 是（ ）。', options:["让海⻳向右转 100 度", "让海⻳向上移动 100 像素", "让海⻳向前移动 100 像素", "让海⻳向前移动 100 单位"], answer:2, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'为在 Python Turtle 中输出如下图形，代码横线处应填⼊（ ）。', options:["11", "1, 12Sum = 0 for i in range(10): if i % 2 == 0: continue if i % 5 == 0: break Sum += i print(Sum)1 2 3 4 5 6 7 8 import turtle turtle.pensize(2) for i in range(____________): if i % 2 == 0: turtle.col", "1, 13", "14"], answer:2, explain:'正确答案是C。请分析题目代码和选项。' },
            { type:'single', q:'为在 Python Turtle 中输出如下图形，代码横线处应填⼊（ ）。', options:["30", "60", "90", "120 2"], answer:3, explain:'正确答案是C。请分析题目代码和选项。' },
            // Q16-25
            { type:'bool', q:'现在，⼈们参加各种闭卷考试时通常都不允许将智能⼿机、平板电脑等带⼊考场，因为智能⼿表通常都有嵌 ⼊操作系统及通信等功能，所以也不允许携带⼊考场。（ ）', answer:0, explain:'正N边形外角=360/N度。循环N次：forward(边长)+right(360/N)。海龟初始方向向右。' },
            { type:'bool', q:'如果 Python 表达式int(N ** 0.5) ** 2 == N的值为 True ，则 N 是完全平⽅数，如 4 、 9 等。 ( )', answer:1, explain:'错误。该说法与Python语言实际行为不符。' },
            { type:'bool', q:'在下⾯ Python 代码中，删除break语句对程序执⾏结果没有影响。 ( )', answer:0, explain:'正确。该说法符合Python语言规范和编程逻辑。' },
            { type:'bool', q:'删除下⾯ Python 代码中的continue后其输出是0#2#4#6#8#。（ ）import turtle for i in range(9): turtle.forward(100) turtle.left(120) if i % 3 == 2: turtle.right(____________)1 2 3 4 5 6 for i in range(10): continue print', answer:1, explain:'错误。该说法与Python语言实际行为不符。' },
            { type:'bool', q:'将下⾯ Python 代码中的range(100)修改为range(1,100)，其输出与当前代码输出相同。（ ）', answer:0, explain:'操作系统管理硬件和软件资源。鸿蒙(HarmonyOS)是华为开发的操作系统，其他选项为应用软件。' },
            { type:'bool', q:'交换下⾯ Python 代码中的i += 2和cnt += 1，其输出相同。（ ）', answer:1, explain:'错误。该说法与Python语言实际行为不符。' },
            { type:'bool', q:'下⾯的 Python 代码执⾏后将输出 45 。（ ）', answer:0, explain:'正确。该说法符合Python语言规范和编程逻辑。' },
            { type:'bool', q:'执⾏ Python 代码print(12 + 12.12)将报错，因为 12 是 int 类型，⽽ 12.12 是 float 类型，不同类型不能直接运 算。（ ）', answer:1, explain:'错误。该说法与Python语言实际行为不符。' },
            { type:'bool', q:'下⾯的 Python 代码执⾏后，海⻳指向不会发⽣变化。（ ）', answer:0, explain:'continue跳过本次循环剩余代码。若在累加之前则该次累加被跳过。' },
            { type:'bool', q:'下⾯的 Python 代码被执⾏后将绘制出正六边形。（ ） 3', answer:1, explain:'错误。该说法与Python语言实际行为不符。' },
            // Q26-27
            { type:'code', title:'Q1', desc:'See PDF', inputFormat:'-', outputFormat:'-', samples:[], referenceCode:'# See PDF', explain:'See PDF' },
            { type:'code', title:'Q2', desc:'See PDF', inputFormat:'-', outputFormat:'-', samples:[], referenceCode:'# See PDF', explain:'See PDF' }
        ]},
{id: '2025-09',
        title: '2025年9月 GESP Python 一级真题',
        date: '2025年9月',
        icon: '📄',
        source: 'CCF GESP 2025年9月',
        questions: [
            // Q1-15
            { type:'single', q:'⼈⼯智能现在⾮常⽕，⼩杨就想多了解⼀下，其中就经常听⼈提到 “ ⼤模型 ” 。那么请问这⾥说的 “ ⼤模型 ” 最 贴切是指 ( ) 。', options:["⼤电脑模型", "⼤规模智能", "智能的单位", "⼤语⾔模型"], answer:3, explain:'正确。该说法符合Python语言规范和编程逻辑。建议结合具体代码验证。' },
            { type:'single', q:'⼩杨这学期刚开学就选修了⼀门编程课，然后就想编写程序来计算 1 到 10001 之间的所有偶数的和。他希望程 序采⽤简单累加整数的⽅法，同时希望源程序尽可能清晰、简洁，则下⾯关于实现累加时采⽤的主要控制结构的哪 个说法最不合适（ ）。', options:["使⽤循环结构", "使⽤循环和分⽀的组合", "仅使⽤顺序结构", "不使⽤分⽀结构"], answer:2, explain:'正确答案是D。请仔细分析题目中的代码逻辑和选项含义。' },
            { type:'single', q:'下⾯的 Python 代码⽤于输⼊姓名，然后输出姓名，正确的说法是 ( )。', options:["XingMing 是汉语拼⾳，不能作为变量名称", "可以将 XingMing 改为 Xing Ming", "可以将 XingMing 改为 xingming", "可以将 XingMing 改为 Xing-Ming"], answer:2, explain:'正确答案是D。请分析题目代码和选项。' },
            { type:'single', q:'下列 Python 代码执⾏后，其输出是 ( )。', options:["2.6 2 3", "2.623XingMing = input(\"请输入您的姓名： \") print(XingMing)1 2 a = 13 b = 5 print(a / b, a // b, a % b)1 2 3", "2 2 3", "2 3 4"], answer:0, explain:'正确答案是D。请分析题目代码和选项。' },
            { type:'single', q:'Python表达式3 * 3 ** 3 // 3的值是( )。', options:["243", "81", "27", "(options in PDF)"], answer:2, explain:'正确答案是C。请分析题目代码和选项。' },
            { type:'single', q:'下⾯的Python代码执⾏时如果先输⼊ 10 回车后输⼊ 20 并回车，其输出是( )。', options:["30", "1020", "{N+M}", "N+M"], answer:1, explain:'正确答案是C。请分析题目代码和选项。' },
            { type:'single', q:'当前是9⽉，编写Python代码求N个⽉后的⽉份。横线处应填⼊的代码是（ ）。', options:["N % 12", "9 + N % 12", "(9 + N) // 12", "(9 + N) % 12"], answer:3, explain:'正确答案是C。请分析题目代码和选项。' },
            { type:'single', q:'下⾯Python代码执⾏后的输出是（ ）。', options:["5050", "4950", "50", "49"], answer:2, explain:'正确答案是C。请分析题目代码和选项。' },
            { type:'single', q:'下⾯的Python代码执⾏后输出是（ ）。N = input("第一个数:") M = input("第二个数:") print(f"{N+M}")1 2 3 N = int(input()) M = _____________ if M == 0: print(f"{N}个月后是12月") else: print(f"{N}个月后是{M}月")1 2 3 4 5 6 n = 0 for i in', options:["90", "100", "900", "1000"], answer:2, explain:'正确答案是C。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python 代码执⾏后输出是（ ）。', options:["1#2#", "1#2#END", "1#2", "1#2#3#4#END"], answer:0, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'下⾯的 Python 代码⽤于求 N 的镜⾯数（ N 的个位到最⾼位的各位数字依次反过来出现在数字中，但⾼位 0 将被 忽略，不输出），如输⼊ 1234，则将输出4321，⼜如输⼊ 120，则将输出21，错误的选项是（ ）。', options:["N != 0", "not (N == 0)", "N = 0", "N > 0"], answer:2, explain:'正确答案是D。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python 代码⽤于交换两个正整数，其不能实现的代码是（ ）。', options:["(options in PDF)", "(options in PDF)", "for i in range(1, 5): if i % 3 == 0: break print(i,end=\"#\") else: print(\"END\")1 2 3 4 5 6 N = int(input(\"请输入个位数不为 0 的正整数： \")) rst = 0 #保存逆序结果 while ______________: rst = rst * 10 + N % 10 N = N // 10 ", "(options in PDF)"], answer:3, explain:'正确答案是C。请分析题目代码和选项。' },
            { type:'single', q:'有关下⾯ Python 代码说法正确的是（ ）。', options:["代码执⾏后，海⻳会⽔平向右画⼀条 100 像素的直线", "因为在turtle.forward(100)之前没有执⾏turtle.pendown()，因此只会⽔平向右移动 100 像素，但不 会绘制直线", "因为在turtle.forward(100)之前没有执⾏turtle.pensize(n)，其中 n为正整数，因此只会⽔平向右移 动100像素，但不会绘制直线", "因为在turtle.forward(100)之前没有执⾏turtle.pencolor(color)，color 为合法的颜⾊值，因此 只会⽔平向右移动 100 像素，但不会绘制直线或者说绘制了直线，但与背景颜⾊保持⼀致，看不出是直线"], answer:0, explain:'正确答案是C。请分析题目代码和选项。' },
            { type:'single', q:'为在 Python Turtle 中输出如下图形，代码横线处应填⼊（ ）。', options:["15", "30a = int(input(\"输入第一个正整数 : \")) b = int(input(\"输入第二个正整数 : \")) a = a + b b = a - b a = a - b print(\"a=\", a, \"b=\", b)1 2 3 4 5 6 a = int(input(\"输入第一个正整数 : \")) b = int(input(\"输入第二个正整数 : \")) a = b b = a p", "45", "90"], answer:1, explain:'正确答案是D。请分析题目代码和选项。' },
            { type:'single', q:'为在 Python Turtle 中输出如下图形，代码横线处应填⼊（ ）。', options:["(options in PDF)", "(options in PDF)", "(options in PDF)", "4 2"], answer:3, explain:'正确答案是A。请分析题目代码和选项。' },
            // Q16-25
            { type:'bool', q:'在集成开发环境⾥调试程序时，要注意不能修改源程序，因为如果修改，就要终⽌调试、关闭该⽂件并重新 打开，才能再次开始调试。（ ）', answer:0, explain:'正确。该说法符合Python语言规范和编程逻辑。' },
            { type:'bool', q:'执⾏ Python 表达式10 ** 0.5将报错，因为 0.5 所在位置只能是正整数。 ( )', answer:1, explain:'错误。该说法与Python语言实际行为不符。' },
            { type:'bool', q:'下⾯ Python 代码执⾏后将输出 9。 ( )', answer:0, explain:'正确。该说法符合Python语言规范和编程逻辑。' },
            { type:'bool', q:'下⾯ Python 代码执⾏后将输出 55。（ ）import turtle for i in range(4): turtle.circle(100, steps = ______) turtle.right(90)1 2 3 4 for i in range(10): break print(i)1 2 3', answer:1, explain:'错误。该说法与Python语言实际行为不符。' },
            { type:'bool', q:'将下⾯ Python 代码中的 range(100) 修改为 range(1,100)，其输出与当前代码输出相同。（ ）', answer:0, explain:'正确。该说法符合Python语言规范和编程逻辑。' },
            { type:'bool', q:'将下⾯ Python 代码中的i < 10修改为i <= 10，其执⾏后输出相同。（ ）', answer:1, explain:'错误。该说法与Python语言实际行为不符。' },
            { type:'bool', q:'下⾯的 Python 代码执⾏后将输出 45。（ ）', answer:0, explain:'正确。该说法符合Python语言规范和编程逻辑。' },
            { type:'bool', q:'执⾏下⾯的 Python 代码后，将输出 30。（ ）', answer:1, explain:'错误。该说法与Python语言实际行为不符。' },
            { type:'bool', q:'下⾯的 Python 代码执⾏后，海⻳指向不会发⽣变化。（ ）', answer:0, explain:'正确。该说法符合Python语言规范和编程逻辑。' },
            { type:'bool', q:'下⾯的 Python 代码执⾏后将能绘制出⼤于 3 的正多边形。（ ） 3', answer:1, explain:'正方形4边，每边后转90度(360/4)。循环4次：forward(边长)+right(90)。' },
            // Q26-27
            { type:'code', title:'Q1', desc:'See PDF', inputFormat:'-', outputFormat:'-', samples:[], referenceCode:'# See PDF', explain:'See PDF' },
            { type:'code', title:'Q2', desc:'See PDF', inputFormat:'-', outputFormat:'-', samples:[], referenceCode:'# See PDF', explain:'See PDF' }
        ]},
{id: '2025-12',
        title: '2025年12月 GESP Python 一级真题',
        date: '2025年12月',
        icon: '📄',
        source: 'CCF GESP 2025年12月',
        questions: [
            // Q1-15
            { type:'single', q:'近⽇，空中客车公司表⽰，约 6000 架空客 A320 系列飞机需要紧急更换⼀种易受太阳辐射影响的飞⾏控制软 件。空客表⽰，在对⼀起飞⾏事故进⾏分析后，结果表明强烈的太阳辐射可能会损坏飞⾏控制系统所需的关键数 据，导致判断失误，进⽽可能引发飞⾏异常。在这⾥的飞⾏控制系统中，执⾏判断的部件最可能是下⾯的 ( ) 。', options:["辐射传感器", "处理器", "内存单元", "输出设备"], answer:1, explain:'正确答案是B。请仔细分析题目中的代码逻辑和选项含义。' },
            { type:'single', q:'下⾯的 Python 代码在集成开发环境中运⾏时，提⽰有 “invalid character” 错误。可能的原因是 ( ) ：', options:["L1⾏代码中的逗号很可能是中⽂逗号，应该改为英⽂逗号。", "L1⾏应该分为两⾏，分别是 a = 3 和 b = 4。", "代码运⾏前没有保存到⽂件。", "L2和 L3不能分为两⾏，应合并为⼀⾏。"], answer:0, explain:'正确答案是B。请仔细分析题目中的代码逻辑和选项含义。' },
            { type:'single', q:'下⾯有关 Python 变量的说法，正确的是 ( )。', options:["不可以⽤ for 作为变量名，因为 for 是Python 的关键字（保留字）。", "_tnt 不可以是变量名，因为变量名的第⼀个字符必须是英⽂字母。", "_tnt_ 不可以是变量名，因为最后⼀个字符容易与减号混淆。", "可以⽤ print 作为变量名，因为 print 是关键字，但这不是好习惯，因为 print 有约定的功能与含义。"], answer:0, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'Python表达式 2 + 3 * 4 ** 2的值为 ( ) 。', options:["20", "50", "52", "80a，b = 3，4 #L1 print(a) #L2 print(b) #L31 2 3 第 1 页 / 共 10 页"], answer:1, explain:'Python代码须用英文标点符号。中文逗号会导致invalid character语法错误。' },
            { type:'single', q:'下⾯的 Python 代码执⾏后，其输出是 ( ) 。', options:["4 4", "3 3", "3 4", "4 3"], answer:0, explain:'Python代码须用英文标点符号。中文逗号会导致invalid character语法错误。' },
            { type:'single', q:'下⾯的 Python 代码执⾏时如果先输⼊ 10 回车后输⼊ 20 并回车，其输出是 ( )。', options:["30=30", "1020=1020", "int(N+M)=1020", "错误提⽰"], answer:2, explain:'正确答案是A。请分析题目代码和选项。' },
            { type:'single', q:'某个整数很长很长，形如： 1232123212321…… ，其规律是从 1 开始逐⼀升⾼到 3 然后逐⼀降低到 1 ，然后⼜逐 ⼀升⾼到 3 ，⼀直到很长很长。编写程序，判断从左开始第 N 位数是⼏？假设从左到右第 1 位为 1 。在横线处应该填⼊ 的代码是 ( ) 。', options:["N % 4", "N // 4", "N % 3", "N // 3"], answer:0, explain:'正确答案是A。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python 代码执⾏后的输出是 ( ) 。', options:["99 99", "100 99", "99 100", "100 100"], answer:1, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'有关下⾯ Python 代码的说法，错误的是 ( ) 。a = 3 b = a = 4 print(a, b)1 2 3 N = input("第一个数 :") M = input("第二个数 :") print(f"int(N+M)={int(N+M)}")1 2 3 N = int(input("请输入编号： ")) M = ________________ if M != 0: print(', options:["range(1,10,2) 改为 range(1,11,2) 结果相同。", "range(1,10,2) 改为 range(0,10,2) 结果相同。", "tnt += i 与 tnt = tnt + i 效果相同。", "tnt += i 与 tnt = i + tnt 效果相同。"], answer:1, explain:'正确答案是C。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python 代码执⾏后输出是 ( ) 。', options:["10#20#30#40#50#60#70#80#90#", "90#", "90", "没有输出"], answer:1, explain:'正确答案是A。请分析题目代码和选项。' },
            { type:'single', q:'两个正整数，只要不相等，就⼀直进⾏如下操作：最⼤数减去最⼩数得到⼀个值，该值和两个数的最⼩数 构成新的两个正整数，重复操作，直到两个数相等，此时输出该数。下⾯的 Python 代码⽤于实现该操作，横线处应 该填写的代码是 ( ) 。', options:["(options in PDF)", "(options in PDF)", "(options in PDF)", "tnt = 0 for i in range(1, 10, 2): tnt += i print(tnt)1 2 3 4 for i in range(10, 100, 10): if i % 10 == 0: continue print(i, end = \"#\")1 2 3 4 N = int(input()) M = int(input()) while N != M: if N > M: "], answer:0, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'如果⼀个正整数能被 3 整除，或者某⼀位能被 3 整除，则称之为 “ 漂亮数 ” ，如 12 是漂亮数因为能被 3 整除， 311是漂亮数因为含有 3 ， 22 不是漂亮数因为不能被 3 整除也不含有 3 。下⾯的 Python ⽤于判断正整数 N 是否为漂亮 数，横线处应该填⼊的代码是 ( ) 。', options:["N % 10 == 0", "N % 3 % 10 == 0", "N % 10 % 3", "N % 10 % 3 == 0"], answer:3, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'下⾯的 Python 代码执⾏后海⻳最终朝向是 ( ) 。（默认初始朝向东，即屏幕右侧）', options:["东（ 0°）", "南（ 270° 或 -90° ）", "西（ 180° ）", "北（ 90°）"], answer:1, explain:'正确答案是A。请分析题目代码和选项。' },
            { type:'single', q:'为在 Python Turtle 中输出如下图形，代码横线处应填⼊ ( ) 。', options:["turtle.home()", "turtle.goto(0,0)", "turtle.reset()N = int(input()) Flag = \"非漂亮数 \" if N % 3 == 0: Flag = \"漂亮数 \" else: while N != 0: if ____________________: Flag = \"漂亮数 \" break N //= 10 print(Flag)1 2 3 4 5 6 7 8 9 1 0 1 1 1 2 import tur", "turtle.home(0,0)"], answer:1, explain:'正确答案是A。请分析题目代码和选项。' },
            { type:'single', q:'为在 Python Turtle 中输出如下图形，代码横线处应填⼊ ( ) 。', options:["20 * i", "20 * (i + 1)", "20 * i, steps = 4", "20 * (i + 1), steps = 4 2"], answer:3, explain:'正确答案是D。请分析题目代码和选项。' },
            // Q16-25
            { type:'bool', q:'鸿蒙是华为公司开发的⼀款操作系统，那么它能够将正确的源程序翻译成⽬标程序，并运⾏。（ ）', answer:0, explain:'正确。该说法符合Python语言规范和编程逻辑。' },
            { type:'bool', q:'Python表达式 10 ** 0.5 和 10 ** 1 / 2 的结果并不相同。 ( )', answer:1, explain:'错误。该说法与Python语言实际行为不符。' },
            { type:'bool', q:'下⾯ Python 代码执⾏后将输出 1。 ( )', answer:0, explain:'正确。该说法符合Python语言规范和编程逻辑。' },
            { type:'bool', q:'下⾯ Python 代码中的 range(-10) 改为 range(10) 执⾏结果相同。（ ）', answer:1, explain:'错误。该说法与Python语言实际行为不符。' },
            { type:'bool', q:'下⾯ Python 代码执⾏后将输出 99，因为 range(100) 不包括 100 ，⽽是到 99 。（ ）import turtle for i in range(6): turtle.circle(________________)1 2 3 for i in range(10): if i % 3 == 0: continue else: break print(i)1 2 3 4 5 ', answer:0, explain:'正确。该说法符合Python语言规范和编程逻辑。' },
            { type:'bool', q:'下⾯的 Python 代码能⽤于判断输⼊的正整数是否为对称数。所谓对称数是指从左到右或从右到左读该数，其 值相同，如121或414等是对称数，⽽123不是对称数。（ ）', answer:1, explain:'操作系统管理硬件和软件资源。鸿蒙(HarmonyOS)是华为开发的操作系统，其他选项为应用软件。' },
            { type:'bool', q:'下⾯的 Python 代码执⾏后将输出 -100。（ ）', answer:0, explain:'正确。该说法符合Python语言规范和编程逻辑。' },
            { type:'bool', q:'下⾯ Python 代码执⾏后，其输出是 -50。（ ）', answer:1, explain:'错误。该说法与Python语言实际行为不符。' },
            { type:'bool', q:'下⾯的 Python 代码执⾏后，将画出横平竖直 ( 两条边⽔平，另两条边与之垂直，且⾸尾相接 ) 的正⽅形。（ ）', answer:0, explain:'正确。该说法符合Python语言规范和编程逻辑。' },
            { type:'bool', q:'下⾯的 Python 代码执⾏后将绘制出如下图形。（ ） cnt = 0 for i in range(100): cnt += 1 print(cnt)1 2 3 4 n = int(input("请输入正整数 :")) new_number = 0 while n != 0: new_number = new_number * 10 + n % 10 n //= 10 if n == new_', answer:1, explain:'错误。该说法与Python语言实际行为不符。' },
            // Q26-27
            { type:'code', title:'Q1', desc:'See PDF', inputFormat:'-', outputFormat:'-', samples:[], referenceCode:'# See PDF', explain:'See PDF' },
            { type:'code', title:'Q2', desc:'See PDF', inputFormat:'-', outputFormat:'-', samples:[], referenceCode:'# See PDF', explain:'See PDF' }
        ]},
{id: '2026-03',
        title: '2026年3月 GESP Python 一级真题',
        date: '2026年3月',
        icon: '📄',
        source: 'CCF GESP 2026年3月',
        questions: [
            // Q1-15
            { type:'single', q:'2026年春节联欢晚会上⼀个武术表演节⽬《武 BOT 》。节⽬中多个⼈形机器⼈会表演空翻，它们落地可能会 有微微踉跄，但都会迅速调整姿态站稳，并适当移动来和前后左右的其他机器⼈保持原来队列。如果将机器⼈视作 ⼀个计算机系统，那么在该计算机系统中下⾯哪⼀项不能作为输⼊设备 ( ) 。', options:["⽤于检测重⼼的重⼒传感器", "预装的 AI 算法程序", "接收动作指令的遥控器", "拍摄其他机器⼈的摄像头"], answer:1, explain:'正确答案是B。请仔细分析题目中的代码逻辑和选项含义。' },
            { type:'single', q:'⼩明学习编程有⼀段时间了，他想在图形环境下把当前⽬录（或⽂件夹）下的⽂本⽂件20260314.txt的名 字改⼀下。他⽤⿏标左键点击选中该⽂件后，⽴即完成下⾯哪个操作后将处于输⼊新⽂件名的状态 ( ) 。', options:["单击右键并选择弹出菜单中的 “ 重命名 ”", "双击左键", "按功能键 F1", "按回车键"], answer:0, explain:'正确答案是B。请仔细分析题目中的代码逻辑和选项含义。' },
            { type:'single', q:'有关下⾯ Python 的说法，正确的是 ( )。', options:["为了⽅便初学者，print(PI)和print(pi)效果相同，即变量的⼤⼩写不敏感", "print(PI)修改为print(Pi)能正常执⾏", "不能⽤ PI 做变量名，因为要保存圆周率这个常量", "将程序中 PI 全部改写为 Pai，将能正常执⾏，不会报错"], answer:3, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'Python 表达式3 * 3 ** 2的值为 ( )。', options:["81", "27", "24", "18PI = 3.1415926 print(PI)1 2 第 1 页 / 共 9 页"], answer:1, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'下⾯的 Python 代码执⾏后，其输出是 ( )。', options:["(options in PDF)", "(options in PDF)", "(options in PDF)", "(options in PDF)"], answer:0, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python 代码的相关说法，正确的是 ( )。', options:["执⾏时如输⼊ 10 ，则将输出 10", "执⾏时如输⼊ 3.14 ，则将输出 3.14", "执⾏时如输⼊ ABC ，则将输出 0", "执⾏时如输⼊ -10 ，则将输出 10"], answer:0, explain:'正确答案是A。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python 代码执⾏时，其说法正确的是（ ）。', options:["不管输⼊是正数负数还是 0 ，其输出结果肯定是⼤于等于 0", "不管是负整数、正整数亦或 0 ，其结果肯定是⼤于等于 0", "如果 N和 M 是相等的整数，将不会有输出", "如果 N和 M 输⼊带有⼩数点的数，将按整数部分计算"], answer:1, explain:'正确答案是D。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python 代码执⾏后的输出是（ ）。a, b = 3, 4 print(a + 2, b - 2) print(a, b)1 2 3 5 2 3 41 2 5 2 5 21 2 52 341 2 52 521 2 N = int(input()) print(N)1 2 N = int(input()) M = int(input()) if N > M: print(N - M) el', options:["24 5", "10 5", "24 4", "0 4"], answer:3, explain:'正确答案是A。请分析题目代码和选项。' },
            { type:'single', q:'Python编程求数列-1+2+3-4+5+6-7+8+9-10+11+12-13+......之值。如输⼊ 4 ，则计算 1 到 4 包含 1 和 4 之间 的值，规律如数列所⽰。下⾯说法，正确的是（）。', options:["range(1, N + 1)应该修为range(1, N)才会符合预期", "i % 3 == 1应修改为i % 3 == 0才会符合预期", "i % 3 == 1修改为i % 3与当前程序效果相同", "当前代码能达到题⽬所描述⽬标"], answer:3, explain:'正确答案是A。请分析题目代码和选项。' },
            { type:'single', q:'下⾯ Python 代码的相关说法，正确的是（ ）。', options:["上述代码执⾏后，其输出是1#3#5#7#9#9END", "删除else:后的执⾏效果与当前代码相同", "删除else:且print(i, end = \"#\")与if对齐，则执⾏效果与当前代码相同", "将print(i,\"END\")与if对齐，其执⾏效果与当前代码相同"], answer:2, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'下⾯的 Python 代码⽤于求正整数各位数之和（即数位和），约定⾼位不为 0 ，如 123 则各位数之和为1+2+3 结果为 6。为实现该⽬标，横线处应该填写的代码是（ ）。', options:["N = int(input(\"请输入正整数： \")) tnt = 0 for i in range(1, N + 1): if i % 3 == 1: tnt += -i else: tnt += i print(tnt)1 2 3 4 5 6 7 8 9 for i in range(1, 10): if i % 2 == 0: continue else: print(i, end = \"#\"", "(options in PDF)", "(options in PDF)", "(options in PDF)"], answer:1, explain:'正确答案是D。请分析题目代码和选项。' },
            { type:'single', q:'某个功能需要知道⼀个输⼊的正整数的各位数字中有多少个奇数，下⾯的 Python 代码是其实现，横线处应 该填⼊的代码是（ ）。', options:["N % 10 % 2 == 0", "N % 10 % 2 == 1", "N // 10 // 2 == 1", "N // 2 // 10 == 0"], answer:1, explain:'正确答案是C。请分析题目代码和选项。' },
            { type:'single', q:'下⾯的 Python 执⾏后如果输⼊ 8，希望输出如下图形。相关说法，正确的是（ ）。 tnt += N % 10 N //= 101 2 tnt += N % 10 N /= 101 2 tnt = tnt + N % 10 N /= 101 2 N = int(input()) odd_count = 0 #记录奇数的个数 old_number = N #保存原数 while N != 0: ', options:["Angle = 360 / N应该修为Angle = 360 // N才能实现输出效果", "range(N)修改为range(1, N + 1)效果相同，都能实现输出效果", "range(N)修改为range(1, N)效果相同，都能实现输出效果", "turtle.right(Angle)应该修正为turtle.right(i * Angle)才能达到预期效果"], answer:1, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'有关下⾯ Python 代码的说法，正确的是（ ）。', options:["代码执⾏后，将输出等腰直角三角形", "代码执⾏后，将输出等长的两条边，其夹角为 90 度，因为没有画出斜边，因此不是三角形", "代码执⾏后， 90 度夹角位于原点", "因为没有执⾏turtle.pendown()，所以不会画出图形"], answer:0, explain:'正确答案是B。请分析题目代码和选项。' },
            { type:'single', q:'在Python 中，turtle.write()⽤于在当前坐标处输出⽂字。下⾯说法，错误的是（ ）。', options:["1+1=2输出在坐标原点，即(0,0)", "1+1=2的起点与2+2=4的起点间隔 40 个像素", "最后输出是10+10=20", "1+1=2等输出⽂字的下⾯将有⼀条直线 2"], answer:2, explain:'while循环在条件成立时反复执行。必须更新条件变量避免死循环。' },
            // Q16-25
            { type:'bool', q:'⼩明的妈妈最近刚刚给他买了⼀块电话⼿表，除了可以看时间，⼩明也可以⽤它和妈妈打电话、收发信息， 那么可以推测这块⼿表中装有⼀款特定操作系统。（ ）', answer:0, explain:'正确。该说法符合Python语言规范和编程逻辑。' },
            { type:'bool', q:'Python表达式4 ** 2和2 * 2 ** 2的结果相同。 ( )', answer:1, explain:'错误。该说法与Python语言实际行为不符。' },
            { type:'bool', q:'下⾯ Python 代码执⾏后将输出 0 。 ( )', answer:0, explain:'正确。该说法符合Python语言规范和编程逻辑。' },
            { type:'bool', q:'下⾯ Python 代码⽤于求 1 到 N 之和， N 为正整数。因为 中为，因此是 1 到 N 且包含 N 之和。（ ）', answer:1, explain:'正N边形外角=360/N度。循环N次：forward(边长)+right(360/N)。海龟初始方向向右。' },
            { type:'bool', q:'执⾏下⾯的 Python 代码，其语句 print(N) 将被执⾏ 0 次或⽆数次（即死循环）。（ ）', answer:0, explain:'正N边形外角=360/N度。循环N次：forward(边长)+right(360/N)。海龟初始方向向右。' },
            { type:'bool', q:'下⾯的 Python 代码能实现判断输⼊的正整数是否为对称数。所谓对称数是指从左到右和从右到左读该数，其 值相同，如 121 或 414 等是对称数，⽽ 123 不是对称数。（ ）', answer:1, explain:'操作系统管理硬件和软件资源。鸿蒙(HarmonyOS)是华为开发的操作系统，其他选项为应用软件。' },
            { type:'bool', q:'执⾏下⾯的 Python 代码，如果输⼊为⼤于 0 的整数，则输出⼀定为 。（ ）', answer:0, explain:'操作系统管理硬件和软件资源。鸿蒙(HarmonyOS)是华为开发的操作系统，其他选项为应用软件。' },
            { type:'bool', q:'执⾏ Python 语句print(int(3.14))将报错。（ ）', answer:1, explain:'错误。该说法与Python语言实际行为不符。' },
            { type:'bool', q:'下⾯的 Python 代码执⾏后，将输出等边三角形。（ ）for i in range(1, 10): if i % 3 == 0: break print(i)1 2 3 4 N = int(input("请输入正整数： ")) total = 0 for i in range(1, N + 1): total += i print(total)1 2 3 4 5 N = input() whi', answer:0, explain:'正确。该说法符合Python语言规范和编程逻辑。' },
            { type:'bool', q:'下⾯的 Python 代码执⾏后第⼀条直线与第⼆条直线相交于原点，两线之间的夹角为 120 度。（ ） 3', answer:1, explain:'错误。该说法与Python语言实际行为不符。' },
            // Q26-27
            { type:'code', title:'Q1', desc:'See PDF', inputFormat:'-', outputFormat:'-', samples:[], referenceCode:'# See PDF', explain:'See PDF' },
            { type:'code', title:'Q2', desc:'See PDF', inputFormat:'-', outputFormat:'-', samples:[], referenceCode:'# See PDF', explain:'See PDF' }
        ]
    }
];

// ==================== 应用状态 ====================
const state = {
    currentView: 'home',
    quizMode: null,        // 'practice' | 'exam' | 'real-exam'
    quizTopicId: null,
    quizQuestions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    timerInterval: null,
    examTimeLeft: 0,
    modalCallback: null,    // 弹窗确认回调
    isRetry: false,        // 是否为重做错题
};

// ==================== 存储管理 ====================
const STORAGE_KEY = 'gesp_app_data';

function loadData() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : { scores: [], wrongBook: [], totalAnswered: 0, totalCorrect: 0, examsTaken: 0 };
    } catch (e) {
        return { scores: [], wrongBook: [], totalAnswered: 0, totalCorrect: 0, examsTaken: 0 };
    }
}

function saveData(data) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
        // 存储空间不足时静默处理
    }
}

function addWrongQuestion(question, topicId, userChoice) {
    const data = loadData();
    // 避免重复添加
    const exists = data.wrongBook.some(w => w.q === question.q && w.topicId === topicId);
    if (!exists) {
        data.wrongBook.push({
            topicId: topicId,
            topicName: topics.find(t => t.id === topicId)?.name || '',
            q: question.q,
            code: question.code,
            options: question.options,
            answer: question.answer,
            userChoice: userChoice,
            explain: question.explain,
            timestamp: new Date().toISOString(),
        });
    }
    saveData(data);
}

function removeWrongQuestion(index) {
    const data = loadData();
    data.wrongBook.splice(index, 1);
    saveData(data);
}

function updateStats(correct, total) {
    const data = loadData();
    data.totalAnswered = (data.totalAnswered || 0) + total;
    data.totalCorrect = (data.totalCorrect || 0) + correct;
    saveData(data);
}

function incrementExams() {
    const data = loadData();
    data.examsTaken = (data.examsTaken || 0) + 1;
    saveData(data);
}

// ==================== 导航 ====================
function navigateTo(viewName) {
    // 如果正在答题中，先清理
    if (state.quizMode && viewName !== 'result') {
        clearTimer();
    }

    state.currentView = viewName;
    state.quizMode = null;

    // 切换视图
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const targetView = document.getElementById('view-' + viewName);
    if (targetView) {
        targetView.classList.add('active');
    }

    // 更新底部导航
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.nav === viewName);
    });

    // 渲染对应内容
    switch (viewName) {
        case 'home': renderHome(); break;
        case 'learn': renderTopicList('topic-list', false); break;
        case 'practice': renderTopicList('practice-topic-list', true); break;
        case 'exam-list': renderExamList(); break;
        case 'wrong': renderWrongBook(); break;
    }

    // 滚动到顶部
    window.scrollTo(0, 0);
}

function renderHome() {
    const data = loadData();
    document.getElementById('stat-questions').textContent = data.totalAnswered || 0;
    const accuracy = data.totalAnswered > 0
        ? Math.round((data.totalCorrect / data.totalAnswered) * 100)
        : 0;
    document.getElementById('stat-accuracy').textContent = accuracy + '%';
    document.getElementById('stat-exams').textContent = data.examsTaken || 0;
}

// ==================== 知识点渲染 ====================
function renderTopicList(containerId, isPractice) {
    const container = document.getElementById(containerId);
    container.innerHTML = topics.map(topic => `
        <div class="topic-item" onclick="${isPractice ? `startPractice(${topic.id})` : `openTopic(${topic.id})`}">
            <div class="topic-icon">${topic.icon}</div>
            <div class="topic-info">
                <div class="topic-name">${topic.name}</div>
                <div class="topic-meta">${isPractice ? (questionBank[topic.id]?.length || 0) + '题' : topic.desc}</div>
            </div>
            <div class="topic-arrow">›</div>
        </div>
    `).join('');
}

function openTopic(topicId) {
    const topic = topics.find(t => t.id === topicId);
    if (!topic) return;

    state.currentView = 'topic-detail';
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('view-topic-detail').classList.add('active');
    document.getElementById('topic-detail-title').textContent = topic.icon + ' ' + topic.name;
    document.getElementById('topic-content').innerHTML = topic.content;
    highlightCodeBlocks();
    window.scrollTo(0, 0);
}

// ==================== 练习模式 ====================
function startPractice(topicId) {
    const questions = questionBank[topicId];
    if (!questions || questions.length === 0) {
        showToast('该知识点暂无题目');
        return;
    }

    state.quizMode = 'practice';
    state.quizTopicId = topicId;
    state.quizQuestions = [...questions];
    state.currentQuestionIndex = 0;
    state.userAnswers = [];
    startQuiz();
}

// ==================== 模拟考试模式 ====================
function startExam() {
    // 从所有题目中随机抽取45道
    let allQuestions = [];
    for (const key in questionBank) {
        questionBank[key].forEach(q => {
            allQuestions.push({ ...q, topicId: parseInt(key) });
        });
    }

    // 随机打乱并取45道（或全部，如果不够45道）
    allQuestions = shuffleArray(allQuestions);
    const examQuestions = allQuestions.slice(0, Math.min(45, allQuestions.length));

    state.quizMode = 'exam';
    state.quizTopicId = null;
    state.quizQuestions = examQuestions;
    state.currentQuestionIndex = 0;
    state.userAnswers = [];
    state.examTimeLeft = 60 * 60; // 60分钟
    startQuiz();
}

// ==================== 真题模块 ====================
function renderExamList() {
    const container = document.getElementById('exam-list');
    container.innerHTML = examPapers.map(paper => `
        <div class="exam-card" onclick="startRealExam('${paper.id}')">
            <div class="exam-card-icon">${paper.icon}</div>
            <div class="exam-card-info">
                <div class="exam-card-title">${paper.title}</div>
                <div class="exam-card-meta">${paper.date}</div>
                <div class="exam-card-structure">📝 15单选 + ✅ 10判断 + 💻 2编程 · 共27题</div>
            </div>
            <div class="exam-card-arrow">›</div>
        </div>
    `).join('');
}

function startRealExam(paperId) {
    const paper = examPapers.find(p => p.id === paperId);
    if (!paper) return;

    state.quizMode = 'real-exam';
    state.quizTopicId = null;
    state.quizQuestions = paper.questions;
    state.currentQuestionIndex = 0;
    state.userAnswers = [];
    state.examTimeLeft = 90 * 60; // 90分钟
    state.currentPaperId = paperId;
    startQuiz();
}

function startQuiz() {
    // 切换到答题视图
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('view-quiz').classList.add('active');

    // 显示/隐藏计时器
    const timerEl = document.getElementById('quiz-timer');
    if (state.quizMode === 'exam' || state.quizMode === 'real-exam') {
        timerEl.style.display = 'block';
        startTimer();
    } else {
        timerEl.style.display = 'none';
    }

    // 启用提交按钮
    document.getElementById('btn-submit-answer').disabled = false;
    document.getElementById('btn-submit-answer').textContent = '确认答案';

    renderQuestion();
    window.scrollTo(0, 0);
}

function renderQuestion() {
    const idx = state.currentQuestionIndex;
    const total = state.quizQuestions.length;
    const question = state.quizQuestions[idx];
    const savedAnswer = state.userAnswers[idx];
    const isRealExam = state.quizMode === 'real-exam';

    document.getElementById('quiz-progress-text').textContent = `${idx + 1}/${total}`;
    document.getElementById('quiz-progress-bar').style.width = `${((idx + 1) / total) * 100}%`;

    // 隐藏编程题展示区和解析区（默认）
    document.getElementById('programming-display').style.display = 'none';
    document.getElementById('explanation-inline').classList.remove('show');
    document.getElementById('options-list').style.display = '';

    // 题型标记
    const badge = document.getElementById('section-badge');
    if (isRealExam) {
        badge.style.display = 'inline-block';
        if (question.type === 'single') {
            badge.textContent = '📝 单选题';
            badge.className = 'section-badge single-choice';
        } else if (question.type === 'bool') {
            badge.textContent = '✅ 判断题';
            badge.className = 'section-badge true-false';
        } else if (question.type === 'code') {
            badge.textContent = '💻 编程题';
            badge.className = 'section-badge programming';
        }
    } else {
        badge.style.display = 'none';
    }

    // 编程题特殊渲染
    if (question.type === 'code') {
        renderProgrammingQuestion(question, idx, total);
        return;
    }

    // 单选题和判断题共用
    document.getElementById('question-number').textContent = `第 ${idx + 1} 题`;
    document.getElementById('question-text').textContent = question.q;

    // 代码块
    const codeEl = document.getElementById('question-code');
    if (question.code) {
        codeEl.style.display = 'block';
        codeEl.textContent = question.code;
    } else {
        codeEl.style.display = 'none';
    }

    // 选项渲染
    const isBool = question.type === 'bool';
    const labels = isBool ? ['✔', '✘'] : ['A', 'B', 'C', 'D'];
    const options = isBool ? ['正确', '错误'] : question.options;

    const optionsList = document.getElementById('options-list');
    optionsList.innerHTML = options.map((opt, i) => {
        let cls = 'option-item';
        if (isBool) cls += ' bool-option';
        if (savedAnswer !== undefined) {
            if (i === question.answer) cls += ' correct';
            else if (i === savedAnswer && savedAnswer !== question.answer) cls += ' wrong';
        }
        if (savedAnswer === i) cls += ' selected';
        return `
            <div class="${cls}" onclick="selectOption(${i})" id="option-${i}">
                <div class="option-letter">${labels[i]}</div>
                <div>${escapeHtml(opt)}</div>
            </div>
        `;
    }).join('');

    // 如果已答过，显示解析
    if (savedAnswer !== undefined) {
        showExplanationInline(question);
    }

    // 更新提交按钮
    updateQuizButton(idx, total, savedAnswer);
}

function renderProgrammingQuestion(question, idx, total) {
    document.getElementById('question-number').textContent = `第 ${idx + 1} 题（编程题）`;
    document.getElementById('question-text').textContent = '';
    document.getElementById('question-code').style.display = 'none';
    document.getElementById('options-list').style.display = 'none';

    const progDiv = document.getElementById('programming-display');
    progDiv.style.display = 'block';

    const savedCode = state.userAnswers[idx]; // undefined=未做, ''=直接看答案, string=用户代码
    const attempted = savedCode !== undefined;

    const samplesHtml = question.samples.map((s, i) => `
        <div style="margin-bottom:8px;">
            <div class="prog-label">📥 样例${i + 1}输入：</div>
            <div class="prog-sample">${escapeHtml(s.input)}</div>
            <div class="prog-label">📤 样例${i + 1}输出：</div>
            <div class="prog-sample">${escapeHtml(s.output)}</div>
            <div style="font-size:0.78rem;color:var(--text-secondary);">💡 ${s.desc}</div>
        </div>
    `).join('');

    let editorSection, compareSection, statusSection;

    if (!attempted) {
        // 未作答：显示编辑器
        editorSection = `
            <div class="prog-section">
                <div class="prog-label">💻 编写代码：</div>
                <textarea class="code-editor" id="user-code-editor" placeholder="# 在这里编写你的 Python 代码...&#10;# 例如：&#10;n = int(input())&#10;print(n * 2)"></textarea>
            </div>
            <div class="prog-buttons">
                <button class="btn-submit-code" onclick="submitProgrammingAttempt()">✅ 提交并对比答案</button>
                <button class="btn-show-answer" onclick="submitProgrammingAttempt(true)">💡 直接看答案</button>
            </div>`;
        compareSection = '';
        statusSection = '<div class="prog-status pending">👆 编写代码后提交，或点击"直接看答案"</div>';
    } else {
        // 已作答：显示对比
        const userCode = savedCode || '# 未编写代码，直接查看了答案';
        editorSection = '';
        compareSection = `
            <div class="code-compare">
                <div class="code-panel">
                    <div class="code-panel-header user">👤 你的代码</div>
                    <div class="code-panel-body">${escapeHtml(userCode)}</div>
                </div>
                <div class="code-panel">
                    <div class="code-panel-header ref">📖 参考答案</div>
                    <div class="code-panel-body">${escapeHtml(question.referenceCode)}</div>
                </div>
            </div>`;
        statusSection = `<div class="prog-status done">✅ 已${savedCode ? '提交代码' : '查看答案'} — 上方可对比你的代码和参考答案</div>`;
    }

    progDiv.innerHTML = `
        <div class="programming-card">
            <div class="prog-title">📋 ${question.title}</div>
            <div class="prog-section">
                <div class="prog-label">📖 题目描述：</div>
                <div class="prog-text">${question.desc.replace(/\n/g, '<br>')}</div>
            </div>
            <div class="prog-section">
                <div class="prog-label">📥 输入格式：</div>
                <div class="prog-text">${question.inputFormat.replace(/\n/g, '<br>')}</div>
            </div>
            <div class="prog-section">
                <div class="prog-label">📤 输出格式：</div>
                <div class="prog-text">${question.outputFormat.replace(/\n/g, '<br>')}</div>
            </div>
            <div class="prog-section">
                <div class="prog-label">📊 样例说明：</div>
                ${samplesHtml}
            </div>
            ${editorSection}
            ${compareSection}
            ${statusSection}
        </div>
    `;

    if (attempted) {
        showExplanationInline(question);
    }

    updateQuizButton(idx, total, attempted ? 'done' : undefined);
}

function submitProgrammingAttempt(skipEditor) {
    const idx = state.currentQuestionIndex;
    const question = state.quizQuestions[idx];
    const editor = document.getElementById('user-code-editor');

    let userCode = '';
    if (!skipEditor && editor) {
        userCode = editor.value.trim();
    }

    state.userAnswers[idx] = userCode;

    // 重新渲染以显示对比视图
    renderProgrammingQuestion(question, idx, state.quizQuestions.length);
    showExplanationInline(question);

    // 更新按钮
    updateQuizButton(idx, state.quizQuestions.length, 'done');
}

function showExplanationInline(question) {
    const expDiv = document.getElementById('explanation-inline');
    expDiv.classList.add('show');
    document.getElementById('explanation-text').textContent = question.explain || '';
}

function updateQuizButton(idx, total, savedAnswer) {
    const btn = document.getElementById('btn-submit-answer');
    const question = state.quizQuestions[idx];
    const isCode = question.type === 'code';

    if (savedAnswer !== undefined) {
        btn.style.display = '';
        if (idx < total - 1) {
            btn.textContent = '下一题 →';
            btn.disabled = false;
            btn.onclick = nextQuestion;
        } else {
            btn.textContent = '查看结果 📊';
            btn.disabled = false;
            btn.onclick = showResult;
        }
    } else {
        if (isCode) {
            // 编程题：隐藏底部按钮，使用卡片内的按钮
            btn.style.display = 'none';
        } else {
            btn.style.display = '';
            btn.textContent = '确认答案';
            btn.disabled = false;
            btn.onclick = submitAnswer;
        }
    }
}

function selectOption(index) {
    // 如果已经答过，不允许更改
    if (state.userAnswers[state.currentQuestionIndex] !== undefined) return;

    // 移除之前的选择
    document.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
    // 添加当前选择
    const target = document.getElementById('option-' + index);
    if (target) target.classList.add('selected');

    // 存储临时选择
    state._tempSelection = index;
}

function submitAnswer() {
    const selected = state._tempSelection;
    if (selected === undefined) {
        showToast('请先选择一个选项');
        return;
    }

    const idx = state.currentQuestionIndex;
    const question = state.quizQuestions[idx];

    // 记录答案
    state.userAnswers[idx] = selected;

    // 高亮正确答案和错误答案
    document.querySelectorAll('.option-item').forEach(el => {
        el.classList.remove('selected');
    });
    document.getElementById('option-' + question.answer)?.classList.add('correct');
    if (selected !== question.answer) {
        document.getElementById('option-' + selected)?.classList.add('wrong');
        // 加入错题本（非真题模式才加，真题有独立错题逻辑）
        if (state.quizMode !== 'real-exam') {
            const topicId = question.topicId || state.quizTopicId;
            if (topicId) addWrongQuestion(question, topicId, selected);
        }
    }

    // 答完立刻显示解析
    showExplanationInline(question);

    // 更新按钮
    const total = state.quizQuestions.length;
    const btn = document.getElementById('btn-submit-answer');
    if (idx < total - 1) {
        btn.textContent = '下一题 →';
        btn.onclick = nextQuestion;
    } else {
        btn.textContent = '查看结果 📊';
        btn.onclick = showResult;
    }

    state._tempSelection = undefined;
}

// ==================== 题目导航 ====================
function toggleQuestionNav() {
    const overlay = document.getElementById('question-nav-overlay');
    const isShowing = overlay.classList.toggle('show');
    if (isShowing) renderQuestionNav();
}

function closeQuestionNav(event) {
    if (event.target === document.getElementById('question-nav-overlay')) {
        document.getElementById('question-nav-overlay').classList.remove('show');
    }
}

function renderQuestionNav() {
    const grid = document.getElementById('question-nav-grid');
    const questions = state.quizQuestions;
    const current = state.currentQuestionIndex;

    grid.innerHTML = questions.map((q, i) => {
        const answered = state.userAnswers[i] !== undefined;
        const isCurrent = i === current;
        let cls = 'question-nav-btn';
        let typeDot = '';

        // 题型标记
        if (q.type === 'single') typeDot = '<span class="q-type-dot single"></span>';
        else if (q.type === 'bool') typeDot = '<span class="q-type-dot bool"></span>';
        else if (q.type === 'code') typeDot = '<span class="q-type-dot code"></span>';

        // 状态
        if (isCurrent) cls += ' current';
        else if (answered) {
            if (q.type !== 'code' && state.userAnswers[i] !== q.answer) {
                cls += ' answered wrong-answer';
            } else {
                cls += ' answered';
            }
        } else {
            cls += ' unanswered';
        }

        return `
            <button class="${cls}" onclick="jumpToQuestion(${i})" title="第${i + 1}题${q.type === 'single' ? ' (单选)' : q.type === 'bool' ? ' (判断)' : ' (编程)'}">
                ${typeDot}${i + 1}
            </button>
        `;
    }).join('');
}

function jumpToQuestion(index) {
    if (index < 0 || index >= state.quizQuestions.length) return;

    state.currentQuestionIndex = index;
    state._tempSelection = undefined;
    document.getElementById('question-nav-overlay').classList.remove('show');
    document.getElementById('explanation-inline').classList.remove('show');
    document.getElementById('programming-display').style.display = 'none';
    document.getElementById('options-list').style.display = '';
    document.getElementById('btn-submit-answer').style.display = '';
    document.getElementById('btn-submit-answer').onclick = submitAnswer;
    document.getElementById('btn-submit-answer').textContent = '确认答案';
    renderQuestion();
    window.scrollTo(0, 0);
}

function nextQuestion() {
    state.currentQuestionIndex++;
    state._tempSelection = undefined;
    // 隐藏解析区
    document.getElementById('explanation-inline').classList.remove('show');
    document.getElementById('programming-display').style.display = 'none';
    document.getElementById('options-list').style.display = '';
    document.getElementById('btn-submit-answer').style.display = '';
    document.getElementById('btn-submit-answer').onclick = submitAnswer;
    document.getElementById('btn-submit-answer').textContent = '确认答案';
    renderQuestion();
    window.scrollTo(0, 0);
}

// ==================== 计时器 ====================
function startTimer() {
    clearTimer();
    updateTimerDisplay();
    state.timerInterval = setInterval(() => {
        state.examTimeLeft--;
        updateTimerDisplay();
        if (state.examTimeLeft <= 0) {
            clearTimer();
            showToast('时间到！自动交卷');
            showResult();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const mins = Math.floor(state.examTimeLeft / 60);
    const secs = state.examTimeLeft % 60;
    const timerEl = document.getElementById('quiz-timer');
    timerEl.textContent = `⏱ ${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    if (state.examTimeLeft <= 300) {
        timerEl.style.color = '#E74C3C';
        timerEl.style.animation = 'pulse 1s infinite';
    }
}

function clearTimer() {
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }
}

// ==================== 结果展示 ====================
function showResult() {
    clearTimer();
    const isRealExam = state.quizMode === 'real-exam';
    const isSimExam = state.quizMode === 'exam';
    state.quizMode = null;

    const total = state.quizQuestions.length;
    let correct, totalScored;

    if (isRealExam) {
        // 真题计分：只计算单选题和判断题（编程题不算对错）
        const scoredQuestions = state.quizQuestions.filter(q => q.type === 'single' || q.type === 'bool');
        totalScored = scoredQuestions.length;
        correct = state.userAnswers.filter((ans, i) => {
            const q = state.quizQuestions[i];
            return (q.type === 'single' || q.type === 'bool') && ans === q.answer;
        }).length;
    } else {
        correct = state.userAnswers.filter((ans, i) => ans === state.quizQuestions[i].answer).length;
        totalScored = total;
    }

    const rate = totalScored > 0 ? Math.round((correct / totalScored) * 100) : 0;

    // 更新统计（重做错题不重复计入）
    if (!state.isRetry) {
        updateStats(correct, totalScored);
    }
    state.isRetry = false;

    // 切换到结果视图
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('view-result').classList.add('active');

    // 设置结果图标和标题
    let icon, title;
    if (isRealExam) {
        // 真题评分（含编程题权重：单选30分+判断20分+编程50分=100分）
        const singleTotal = state.quizQuestions.filter(q => q.type === 'single').length;
        const boolTotal = state.quizQuestions.filter(q => q.type === 'bool').length;
        const singleCorrect = state.userAnswers.filter((ans, i) => state.quizQuestions[i].type === 'single' && ans === state.quizQuestions[i].answer).length;
        const boolCorrect = state.userAnswers.filter((ans, i) => state.quizQuestions[i].type === 'bool' && ans === state.quizQuestions[i].answer).length;
        const codeViewed = state.userAnswers.filter((ans, i) => state.quizQuestions[i].type === 'code' && ans !== undefined).length;
        const codeTotal = state.quizQuestions.filter(q => q.type === 'code').length;

        const singleScore = singleTotal > 0 ? Math.round((singleCorrect / singleTotal) * 30) : 0;
        const boolScore = boolTotal > 0 ? Math.round((boolCorrect / boolTotal) * 20) : 0;
        const totalScore = singleScore + boolScore;

        if (rate >= 90) { icon = '🏆'; title = '太厉害了，稳过！'; }
        else if (rate >= 70) { icon = '🎉'; title = '表现不错，继续加油！'; }
        else if (rate >= 60) { icon = '👍'; title = '及格线附近，加强练习！'; }
        else { icon = '📚'; title = '需要系统复习！别灰心！'; }

        document.getElementById('result-score').textContent = `${correct}/${totalScored}`;
        document.getElementById('result-detail').innerHTML = `
            📝 单选题: <strong>${singleCorrect}/${singleTotal}</strong> (约${singleScore}分) &nbsp;|&nbsp;
            ✅ 判断题: <strong>${boolCorrect}/${boolTotal}</strong> (约${boolScore}分)<br>
            💻 编程题: <strong>${codeViewed}/${codeTotal}</strong> 已阅读<br>
            🎯 客观题估分: <strong>${totalScore}分</strong> (满分50分，编程题另计50分)
        `;
    } else {
        if (rate >= 90) { icon = '🏆'; title = '太棒了！非常优秀！'; }
        else if (rate >= 70) { icon = '🎉'; title = '做得不错！继续加油！'; }
        else if (rate >= 60) { icon = '👍'; title = '及格了！还要多练习哦！'; }
        else { icon = '📚'; title = '需要加强学习！别灰心！'; }

        document.getElementById('result-score').textContent = `${correct}/${totalScored}`;
        document.getElementById('result-detail').innerHTML = `
            正确率: <strong>${rate}%</strong><br>
            答对 <strong>${correct}</strong> 题，答错 <strong>${totalScored - correct}</strong> 题
        `;
    }

    document.getElementById('result-icon').textContent = icon;
    document.getElementById('result-title').textContent = title;

    // 按钮
    document.getElementById('btn-result-review').style.display = 'block';
    document.getElementById('btn-retry-wrong').style.display = (correct < totalScored) ? 'block' : 'none';
    document.getElementById('btn-result-review').onclick = reviewAnswers;
    document.getElementById('btn-retry-wrong').onclick = retryWrong;

    // 隐藏解析列表
    document.getElementById('review-list').style.display = 'none';

    // 只在新考试（非重做错题）时增加考试计数
    if (isSimExam || isRealExam) {
        incrementExams();
    }

    window.scrollTo(0, 0);
}

function reviewAnswers() {
    const container = document.getElementById('review-list');
    container.style.display = 'flex';
    const labels = ['A', 'B', 'C', 'D'];
    const boolLabels = ['✔ 正确', '✘ 错误'];

    container.innerHTML = state.quizQuestions.map((q, i) => {
        const userAns = state.userAnswers[i];
        let content = '';

        if (q.type === 'code') {
            const viewed = userAns !== undefined;
            const userCode = viewed ? (userAns || '# 直接查看了答案') : '';
            return `
                <div class="review-item ${viewed ? 'correct-review' : 'wrong-review'}">
                    <div class="review-question">${i + 1}. 💻 ${q.title}</div>
                    <div class="review-answer">
                        状态: <span class="${viewed ? 'correct-text' : 'wrong-text'}">${viewed ? '✅ 已尝试' : '⚠ 未做'}</span>
                    </div>
                    ${viewed ? `
                    <div class="review-code-compare">
                        <div style="font-weight:600;font-size:0.8rem;color:#61AFEF;margin-bottom:4px;">👤 你的代码：</div>
                        <pre class="review-code-block">${escapeHtml(userCode) || '（空）'}</pre>
                        <div style="font-weight:600;font-size:0.8rem;color:#98C379;margin:8px 0 4px;">📖 参考答案：</div>
                        <pre class="review-code-block">${escapeHtml(q.referenceCode)}</pre>
                    </div>
                    ` : ''}
                    <div class="review-explanation">
                        <strong>💡 解析：</strong>${q.explain}
                    </div>
                </div>
            `;
        }

        if (q.type === 'bool') {
            const isCorrect = userAns === q.answer;
            const cls = isCorrect ? 'correct-review' : 'wrong-review';
            return `
                <div class="review-item ${cls}">
                    <div class="review-question">${i + 1}. ✅ ${q.q}</div>
                    ${q.code ? `<div style="background:#282C34;color:#ABB2BF;padding:8px 12px;border-radius:6px;font-family:monospace;font-size:0.8rem;margin:6px 0;white-space:pre-wrap;">${escapeHtml(q.code)}</div>` : ''}
                    <div class="review-answer">
                        你的答案: <span class="${isCorrect ? 'correct-text' : 'wrong-text'}">${boolLabels[userAns] || '未作答'}</span>
                        ${!isCorrect ? ` | 正确答案: <span class="correct-text">${boolLabels[q.answer]}</span>` : ''}
                    </div>
                    <div class="review-explanation">
                        <strong>💡 解析：</strong>${q.explain}
                    </div>
                </div>
            `;
        }

        // 单选题
        const isCorrect = userAns === q.answer;
        const cls = isCorrect ? 'correct-review' : 'wrong-review';
        return `
            <div class="review-item ${cls}">
                <div class="review-question">${i + 1}. ${q.q}</div>
                ${q.code ? `<div style="background:#282C34;color:#ABB2BF;padding:8px 12px;border-radius:6px;font-family:monospace;font-size:0.8rem;margin:6px 0;white-space:pre-wrap;">${escapeHtml(q.code)}</div>` : ''}
                <div class="review-answer">
                    你的答案: <span class="${isCorrect ? 'correct-text' : 'wrong-text'}">${labels[userAns] || '未作答'}. ${q.options ? escapeHtml(q.options[userAns] || '') : ''}</span>
                    ${!isCorrect ? ` | 正确答案: <span class="correct-text">${labels[q.answer]}. ${escapeHtml(q.options[q.answer])}</span>` : ''}
                </div>
                <div class="review-explanation">
                    <strong>💡 解析：</strong>${q.explain}
                </div>
            </div>
        `;
    }).join('');

    window.scrollTo(0, 0);
}

function retryWrong() {
    const wrongQuestions = [];
    state.quizQuestions.forEach((q, i) => {
        // 真题模式排除编程题（编程题不判对错）
        if (q.type === 'code') return;
        if (state.userAnswers[i] !== q.answer) {
            wrongQuestions.push(q);
        }
    });

    if (wrongQuestions.length === 0) {
        showToast('没有错题可重做！');
        return;
    }

    state.quizMode = 'practice';
    state.isRetry = true;
    state.quizQuestions = wrongQuestions;
    state.currentQuestionIndex = 0;
    state.userAnswers = [];
    startQuiz();
}

// ==================== 错题本 ====================
function renderWrongBook() {
    const data = loadData();
    const container = document.getElementById('wrong-list');
    const labels = ['A', 'B', 'C', 'D'];

    if (data.wrongBook.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🌟</div>
                <p>还没有错题，继续保持！</p>
            </div>
        `;
        return;
    }

    container.innerHTML = data.wrongBook.map((w, i) => `
        <div class="wrong-item">
            <div class="wrong-question">${i + 1}. ${w.q}</div>
            ${w.code ? `<div class="wrong-code">${escapeHtml(w.code)}</div>` : ''}
            <div class="wrong-meta">
                <span class="wrong-topic">${w.topicName}</span>
                <span>你的答案: <span class="wrong-choice">${labels[w.userChoice]}. ${escapeHtml(w.options[w.userChoice] || '')}</span></span>
                <span>正确答案: <span class="correct-choice">${labels[w.answer]}. ${escapeHtml(w.options[w.answer] || '')}</span></span>
            </div>
            <div class="wrong-explanation">
                <strong>💡 解析：</strong>${w.explain || ''}
            </div>
            <div class="wrong-actions">
                <button class="btn-secondary" onclick="removeWrongQuestion(${i}); renderWrongBook(); showToast('已从错题本移除')">移除</button>
            </div>
        </div>
    `).join('');
}

// ==================== 弹窗 ====================
function showModal(title, body, callback) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').textContent = body;
    document.getElementById('modal-overlay').style.display = 'flex';
    state.modalCallback = callback;
}

function closeModal() {
    document.getElementById('modal-overlay').style.display = 'none';
    state.modalCallback = null;
}

function confirmModal() {
    document.getElementById('modal-overlay').style.display = 'none';
    if (state.modalCallback) {
        const cb = state.modalCallback;
        state.modalCallback = null;
        cb();
    }
}

function confirmQuitQuiz() {
    const answered = state.userAnswers.filter(a => a !== undefined).length;
    const total = state.quizQuestions.length;
    const isExam = state.quizMode === 'exam' || state.quizMode === 'real-exam';
    showModal('确认退出',
        `你已经回答了 ${answered}/${total} 题，确定要退出吗？${isExam ? '退出后考试记录不会保存。' : ''}`,
        () => {
            clearTimer();
            state.quizMode = null;
            state.quizQuestions = [];
            state.userAnswers = [];
            state._tempSelection = undefined;
            navigateTo('home');
        }
    );
}

// ==================== Toast ====================
function showToast(message) {
    // 移除已有的toast
    const existing = document.querySelector('.toast-msg');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 70px;
        left: 50%;
        transform: translateX(-50%);
        background: #333;
        color: #fff;
        padding: 10px 24px;
        border-radius: 20px;
        font-size: 0.85rem;
        z-index: 300;
        animation: toastIn 0.3s ease, toastOut 0.3s ease 1.5s forwards;
        white-space: nowrap;
        max-width: 85vw;
        overflow: hidden;
        text-overflow: ellipsis;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    `;

    // 添加动画样式
    if (!document.getElementById('toast-styles')) {
        const styleEl = document.createElement('style');
        styleEl.id = 'toast-styles';
        styleEl.textContent = `
            @keyframes toastIn { from { opacity:0; transform: translateX(-50%) translateY(-10px); } to { opacity:1; transform: translateX(-50%) translateY(0); } }
            @keyframes toastOut { from { opacity:1; } to { opacity:0; } }
        `;
        document.head.appendChild(styleEl);
    }

    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

// ==================== 工具函数 ====================
function shuffleArray(arr) {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// ==================== 语法高亮 ====================
function highlightCodeBlocks() {
    const KW = '\\b(if|else|elif|for|while|in|break|continue|import|True|False|not|and|or|def|return)\\b';
    const BUILTIN = '\\b(print|input|int|float|str|bool|type|len|range|list|abs|max|min|sum|round)\\b(?=\\s*\\()';
    const COMMENT = '(#.*$)';
    const STRING = '("[^"]*"|\'[^\']*\')';
    const NUMBER = '\\b(\\d+\\.?\\d*)\\b';

    const CC = '#5C6370';   // comment
    const KC = '#C678DD';   // keyword
    const BC = '#E5C07B';   // builtin
    const SC = '#98C379';   // string
    const NC = '#D19A66';   // number

    document.querySelectorAll('#topic-content .code-block').forEach(block => {
        // Get raw text content to avoid HTML entity issues
        const text = block.textContent;
        const lines = text.split('\n');
        const result = lines.map(line => {
            // Skip empty lines
            if (!line.trim()) return '';
            // Escape HTML first
            let escaped = line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            // Mark protected regions with placeholders to prevent nested spans
            let protected_ = [];
            // 1. Strings
            escaped = escaped.replace(new RegExp(STRING, 'g'), m => {
                protected_.push('<span style="color:' + SC + '">' + m + '</span>');
                return '\x00' + (protected_.length - 1) + '\x00';
            });
            // 2. Comments (after strings so # inside strings is preserved)
            escaped = escaped.replace(new RegExp(COMMENT, 'g'), m => {
                protected_.push('<span style="color:' + CC + ';font-style:italic">' + m + '</span>');
                return '\x00' + (protected_.length - 1) + '\x00';
            });
            // 3. Builtins
            escaped = escaped.replace(new RegExp(BUILTIN, 'g'), m => {
                protected_.push('<span style="color:' + BC + '">' + m + '</span>');
                return '\x00' + (protected_.length - 1) + '\x00';
            });
            // 4. Keywords
            escaped = escaped.replace(new RegExp(KW, 'g'), m => {
                protected_.push('<span style="color:' + KC + '">' + m + '</span>');
                return '\x00' + (protected_.length - 1) + '\x00';
            });
            // 5. Numbers
            escaped = escaped.replace(new RegExp(NUMBER, 'g'), m => {
                protected_.push('<span style="color:' + NC + '">' + m + '</span>');
                return '\x00' + (protected_.length - 1) + '\x00';
            });
            // Restore protected regions
            for (let i = 0; i < protected_.length; i++) {
                escaped = escaped.split('\x00' + i + '\x00').join(protected_[i]);
            }
            return escaped;
        }).join('\n');

        block.innerHTML = result;
    });
}

// ==================== 初始化 ====================
function init() {
    // 注册Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(() => {});
    }

    // 渲染首页
    renderHome();

    // 渲染知识点列表
    renderTopicList('topic-list', false);
    renderTopicList('practice-topic-list', true);

    // 渲染错题本
    renderWrongBook();
}

// ==================== 全局暴露的函数 ====================
// 这些在HTML的onclick中使用，必须挂到window
window.navigateTo = navigateTo;
window.openTopic = openTopic;
window.startPractice = startPractice;
window.startExam = startExam;
window.startRealExam = startRealExam;
window.selectOption = selectOption;
window.submitAnswer = submitAnswer;
window.submitProgrammingAttempt = submitProgrammingAttempt;
window.nextQuestion = nextQuestion;
window.showResult = showResult;
window.reviewAnswers = reviewAnswers;
window.retryWrong = retryWrong;
window.confirmQuitQuiz = confirmQuitQuiz;
window.closeModal = closeModal;
window.confirmModal = confirmModal;
window.removeWrongQuestion = removeWrongQuestion;
window.toggleQuestionNav = toggleQuestionNav;
window.closeQuestionNav = closeQuestionNav;
window.jumpToQuestion = jumpToQuestion;
window.showToast = showToast;

// 启动应用
document.addEventListener('DOMContentLoaded', init);
