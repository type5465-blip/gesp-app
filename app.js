/* ============================================
   Python GESP 一级助考 - 应用逻辑
   ============================================ */

// ==================== 数据定义 ====================

// 知识点学习内容
const topics = [
    {
        id: 1,
        name: '认识Python',
        icon: '🐍',
        desc: '了解Python语言的特点和应用',
        content: `
<h3>🐍 什么是Python？</h3>
<p>Python是一种<strong>高级编程语言</strong>，由荷兰人Guido van Rossum于1991年创建。Python这个名字来源于他喜欢的电视节目"Monty Python's Flying Circus"。</p>

<h3>🌟 Python的特点</h3>
<ul>
    <li><strong>简单易学</strong>：语法简洁清晰，像读英语一样</li>
    <li><strong>免费开源</strong>：任何人都可以免费使用</li>
    <li><strong>跨平台</strong>：可以在Windows、Mac、Linux上运行</li>
    <li><strong>功能强大</strong>：有丰富的库和框架</li>
    <li><strong>应用广泛</strong>：网站开发、数据分析、人工智能、游戏开发等</li>
</ul>

<h3>🎯 Python的应用领域</h3>
<ul>
    <li><strong>人工智能与机器学习</strong>：深度学习、图像识别</li>
    <li><strong>Web开发</strong>：网站后端开发（如豆瓣、知乎）</li>
    <li><strong>数据分析</strong>：科学计算、数据可视化</li>
    <li><strong>自动化运维</strong>：服务器管理、自动脚本</li>
    <li><strong>游戏开发</strong>：使用Pygame等库制作游戏</li>
</ul>

<div class="note-box">
    <strong>💡 GESP考试提示：</strong>一级考试主要考察Python基础语法、简单的输入输出、变量使用和基本控制结构。
</div>
        `
    },
    {
        id: 2,
        name: 'Python开发环境',
        icon: '💻',
        desc: '了解IDLE和代码编写环境',
        content: `
<h3>🛠 Python开发环境</h3>
<p>编写Python代码需要开发环境，常用的有：</p>
<ul>
    <li><strong>IDLE</strong>：Python自带的集成开发环境，适合初学者</li>
    <li><strong>VS Code</strong>：微软开发的免费代码编辑器</li>
    <li><strong>PyCharm</strong>：专业的Python开发工具</li>
    <li><strong>在线编辑器</strong>：如replit.com、Python在线编辑器</li>
</ul>

<h3>📝 使用IDLE编写Python程序</h3>
<p>IDLE有两种模式：</p>
<ol>
    <li><strong>交互模式（Shell）</strong>：输入一行代码，立即执行并显示结果</li>
    <li><strong>编辑器模式</strong>：编写完整的.py文件，然后运行</li>
</ol>

<h3>▶️ 运行Python程序</h3>
<p>在IDLE编辑器中：</p>
<ol>
    <li>编写代码</li>
    <li>按 <strong>F5</strong> 键运行</li>
    <li>或者在菜单选择 Run → Run Module</li>
</ol>

<h3>📄 Python文件的扩展名</h3>
<p>Python程序文件以 <strong>.py</strong> 结尾，例如：<code>hello.py</code>、<code>test.py</code></p>

<div class="note-box">
    <strong>💡 记住：</strong>Python文件的扩展名是<strong>.py</strong>，这是GESP一级常考知识点！
</div>
        `
    },
    {
        id: 3,
        name: '变量与数据类型',
        icon: '📦',
        desc: '学习变量命名和常用数据类型',
        content: `
<h3>📦 什么是变量？</h3>
<p>变量就像一个<strong>贴了标签的盒子</strong>，用来存储数据。在Python中，不需要声明变量类型，直接赋值即可。</p>

<div class="code-block">
<span class="comment"># 变量的定义和赋值</span>
<span class="func">name</span> = <span class="string">"小明"</span>
<span class="func">age</span> = <span class="number">12</span>
<span class="func">height</span> = <span class="number">1.55</span>
<span class="func">is_student</span> = <span class="keyword">True</span>
</div>

<h3>📋 Python常见数据类型</h3>
<ul>
    <li><strong>整型（int）</strong>：整数，如 <code>10</code>、<code>-5</code>、<code>0</code></li>
    <li><strong>浮点型（float）</strong>：小数，如 <code>3.14</code>、<code>-2.5</code></li>
    <li><strong>字符串（str）</strong>：文本，用引号包裹，如 <code>"hello"</code></li>
    <li><strong>布尔型（bool）</strong>：只有 <code>True</code> 和 <code>False</code> 两个值</li>
</ul>

<h3>✏️ 变量命名规则</h3>
<ul>
    <li>只能包含<strong>字母、数字和下划线</strong></li>
    <li>不能以<strong>数字</strong>开头</li>
    <li>区分<strong>大小写</strong>（age和Age是不同的变量）</li>
    <li>不能使用Python的<strong>关键字</strong>（如if、for、while等）</li>
</ul>

<div class="output-block">
>>> name = "小明"
>>> age = 12
>>> print(name)
小明
>>> print(age)
12
>>> print(type(age))
&lt;class 'int'&gt;
</div>

<h3>🔄 使用type()查看类型</h3>
<p><code>type()</code>函数可以查看数据的类型：</p>

<div class="code-block">
<span class="builtin">print</span>(<span class="builtin">type</span>(<span class="number">10</span>))      <span class="comment"># 输出: &lt;class 'int'&gt;</span>
<span class="builtin">print</span>(<span class="builtin">type</span>(<span class="number">3.14</span>))    <span class="comment"># 输出: &lt;class 'float'&gt;</span>
<span class="builtin">print</span>(<span class="builtin">type</span>(<span class="string">"hi"</span>))    <span class="comment"># 输出: &lt;class 'str'&gt;</span>
<span class="builtin">print</span>(<span class="builtin">type</span>(<span class="keyword">True</span>))   <span class="comment"># 输出: &lt;class 'bool'&gt;</span>
</div>

<div class="note-box">
    <strong>💡 注意：</strong>Python中True和False<strong>首字母必须大写</strong>，这是常考易错点！
</div>
        `
    },
    {
        id: 4,
        name: '输入与输出',
        icon: '⌨️',
        desc: '掌握print()输出和input()输入',
        content: `
<h3>📤 输出函数 print()</h3>
<p><code>print()</code>是最常用的输出函数，用于在屏幕上显示内容。</p>

<div class="code-block">
<span class="comment"># 基本用法</span>
<span class="builtin">print</span>(<span class="string">"Hello, Python!"</span>)
<span class="builtin">print</span>(<span class="number">100</span>)
<span class="builtin">print</span>(<span class="number">3</span> + <span class="number">5</span>)

<span class="comment"># 输出多个内容，用逗号分隔</span>
<span class="builtin">print</span>(<span class="string">"答案是"</span>, <span class="number">42</span>)

<span class="comment"># sep参数：指定分隔符（默认空格）</span>
<span class="builtin">print</span>(<span class="string">"a"</span>, <span class="string">"b"</span>, <span class="string">"c"</span>, sep=<span class="string">"-"</span>)  <span class="comment"># 输出: a-b-c</span>

<span class="comment"># end参数：指定结尾字符（默认换行）</span>
<span class="builtin">print</span>(<span class="string">"第一行"</span>, end=<span class="string">"---"</span>)
<span class="builtin">print</span>(<span class="string">"接在后面"</span>)  <span class="comment"># 输出: 第一行---接在后面</span>
</div>

<h3>📥 输入函数 input()</h3>
<p><code>input()</code>用于从键盘获取用户输入。<strong>注意：input()获取的内容永远是字符串类型！</strong></p>

<div class="code-block">
<span class="comment"># 基本用法</span>
<span class="func">name</span> = <span class="builtin">input</span>(<span class="string">"请输入你的名字："</span>)
<span class="builtin">print</span>(<span class="string">"你好，"</span>, name)

<span class="comment"># 获取数字需要类型转换</span>
<span class="func">age_str</span> = <span class="builtin">input</span>(<span class="string">"请输入年龄："</span>)
<span class="func">age</span> = <span class="builtin">int</span>(age_str)  <span class="comment"># 将字符串转为整数</span>
<span class="builtin">print</span>(<span class="string">"明年你"</span>, age + <span class="number">1</span>, <span class="string">"岁"</span>)
</div>

<h3>🔄 类型转换函数</h3>
<ul>
    <li><code>int(x)</code>：将x转换为整数</li>
    <li><code>float(x)</code>：将x转换为浮点数</li>
    <li><code>str(x)</code>：将x转换为字符串</li>
    <li><code>bool(x)</code>：将x转换为布尔值</li>
</ul>

<div class="note-box">
    <strong>💡 重要考点：</strong>input()的返回值<strong>永远是字符串</strong>！如果需要做数学运算，必须用int()或float()转换！
</div>
        `
    },
    {
        id: 5,
        name: '运算符',
        icon: '➕',
        desc: '算术、比较和逻辑运算符',
        content: `
<h3>🔢 算术运算符</h3>
<table style="width:100%;border-collapse:collapse;margin:8px 0;">
    <tr style="background:#f0f4f8;"><td style="padding:8px;border:1px solid #ddd;"><strong>运算符</strong></td><td style="padding:8px;border:1px solid #ddd;"><strong>说明</strong></td><td style="padding:8px;border:1px solid #ddd;"><strong>示例</strong></td><td style="padding:8px;border:1px solid #ddd;"><strong>结果</strong></td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd;">+</td><td style="padding:8px;border:1px solid #ddd;">加法</td><td style="padding:8px;border:1px solid #ddd;">3 + 5</td><td style="padding:8px;border:1px solid #ddd;">8</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd;">-</td><td style="padding:8px;border:1px solid #ddd;">减法</td><td style="padding:8px;border:1px solid #ddd;">10 - 3</td><td style="padding:8px;border:1px solid #ddd;">7</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd;">*</td><td style="padding:8px;border:1px solid #ddd;">乘法</td><td style="padding:8px;border:1px solid #ddd;">4 * 5</td><td style="padding:8px;border:1px solid #ddd;">20</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd;">/</td><td style="padding:8px;border:1px solid #ddd;">除法</td><td style="padding:8px;border:1px solid #ddd;">10 / 3</td><td style="padding:8px;border:1px solid #ddd;">3.333...</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd;">//</td><td style="padding:8px;border:1px solid #ddd;">整除</td><td style="padding:8px;border:1px solid #ddd;">10 // 3</td><td style="padding:8px;border:1px solid #ddd;">3</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd;">%</td><td style="padding:8px;border:1px solid #ddd;">取余</td><td style="padding:8px;border:1px solid #ddd;">10 % 3</td><td style="padding:8px;border:1px solid #ddd;">1</td></tr>
    <tr><td style="padding:8px;border:1px solid #ddd;">**</td><td style="padding:8px;border:1px solid #ddd;">幂运算</td><td style="padding:8px;border:1px solid #ddd;">2 ** 3</td><td style="padding:8px;border:1px solid #ddd;">8</td></tr>
</table>

<h3>⚖️ 比较运算符</h3>
<ul>
    <li><code>==</code> 等于</li>
    <li><code>!=</code> 不等于</li>
    <li><code>&gt;</code> 大于</li>
    <li><code>&lt;</code> 小于</li>
    <li><code>&gt;=</code> 大于等于</li>
    <li><code>&lt;=</code> 小于等于</li>
</ul>
<p>比较运算的结果是<strong>布尔值</strong>（True或False）。</p>

<h3>🧠 逻辑运算符</h3>
<ul>
    <li><code>and</code>：两个条件都成立才为True</li>
    <li><code>or</code>：至少一个条件成立就为True</li>
    <li><code>not</code>：取反</li>
</ul>

<div class="code-block">
<span class="builtin">print</span>(<span class="number">5</span> &gt; <span class="number">3</span> <span class="keyword">and</span> <span class="number">2</span> &lt; <span class="number">4</span>)   <span class="comment"># True</span>
<span class="builtin">print</span>(<span class="number">5</span> &gt; <span class="number">10</span> <span class="keyword">or</span> <span class="number">3</span> &gt; <span class="number">1</span>)  <span class="comment"># True</span>
<span class="builtin">print</span>(<span class="keyword">not</span> (<span class="number">5</span> &gt; <span class="number">3</span>))          <span class="comment"># False</span>
</div>

<h3>📐 运算符优先级</h3>
<p><strong>括号 → 幂运算 → 乘除/整除/取余 → 加减 → 比较 → 逻辑</strong></p>
<div class="note-box">
    <strong>💡 记忆技巧：</strong>不确定优先级时，<strong>加括号</strong>！括号里的先算。
</div>
        `
    },
    {
        id: 6,
        name: '条件判断 if-else',
        icon: '🔀',
        desc: '掌握if/elif/else条件分支',
        content: `
<h3>🔀 条件判断的作用</h3>
<p>条件判断让程序能根据不同情况做出不同反应，是程序"智能"的基础。</p>

<h3>📝 if 语句基本格式</h3>
<div class="code-block">
<span class="keyword">if</span> 条件:
    条件成立时执行的代码  <span class="comment"># 注意缩进！</span>
</div>

<h3>📝 if-else 语句</h3>
<div class="code-block">
<span class="func">score</span> = <span class="number">85</span>
<span class="keyword">if</span> score &gt;= <span class="number">60</span>:
    <span class="builtin">print</span>(<span class="string">"及格！"</span>)
<span class="keyword">else</span>:
    <span class="builtin">print</span>(<span class="string">"不及格！"</span>)
</div>

<h3>📝 if-elif-else 多分支</h3>
<div class="code-block">
<span class="func">score</span> = <span class="number">85</span>
<span class="keyword">if</span> score &gt;= <span class="number">90</span>:
    <span class="builtin">print</span>(<span class="string">"优秀"</span>)
<span class="keyword">elif</span> score &gt;= <span class="number">80</span>:
    <span class="builtin">print</span>(<span class="string">"良好"</span>)
<span class="keyword">elif</span> score &gt;= <span class="number">60</span>:
    <span class="builtin">print</span>(<span class="string">"及格"</span>)
<span class="keyword">else</span>:
    <span class="builtin">print</span>(<span class="string">"不及格"</span>)
</div>

<h3>⚠️ Python缩进规则</h3>
<p>Python使用<strong>缩进</strong>（通常是4个空格或1个Tab）来表示代码块。同一个代码块的缩进必须<strong>一致</strong>！</p>

<div class="code-block">
<span class="keyword">if</span> <span class="number">10</span> &gt; <span class="number">5</span>:
    <span class="builtin">print</span>(<span class="string">"这行缩进了"</span>)  <span class="comment"># 属于if块</span>
    <span class="builtin">print</span>(<span class="string">"这行也缩进了"</span>)  <span class="comment"># 也属于if块</span>
<span class="builtin">print</span>(<span class="string">"这行没有缩进"</span>)      <span class="comment"># 不属于if块，总会执行</span>
</div>

<div class="note-box">
    <strong>💡 考试重点：</strong>Python的缩进不是装饰，是<strong>语法要求</strong>！缩进错误会导致IndentationError。
</div>
        `
    },
    {
        id: 7,
        name: 'for循环',
        icon: '🔁',
        desc: '学习for循环和range()函数',
        content: `
<h3>🔁 for循环的作用</h3>
<p>for循环用于<strong>重复执行</strong>一段代码，通常配合 <code>range()</code> 函数使用。</p>

<h3>📝 range() 函数</h3>
<p><code>range()</code> 生成一系列数字：</p>
<ul>
    <li><code>range(n)</code>：生成 0 到 n-1，共n个数字</li>
    <li><code>range(start, stop)</code>：生成 start 到 stop-1</li>
    <li><code>range(start, stop, step)</code>：指定步长</li>
</ul>

<div class="code-block">
<span class="comment"># 打印0到9</span>
<span class="keyword">for</span> i <span class="keyword">in</span> <span class="builtin">range</span>(<span class="number">10</span>):
    <span class="builtin">print</span>(i)

<span class="comment"># 打印1到5</span>
<span class="keyword">for</span> i <span class="keyword">in</span> <span class="builtin">range</span>(<span class="number">1</span>, <span class="number">6</span>):
    <span class="builtin">print</span>(i)

<span class="comment"># 每隔2个打印</span>
<span class="keyword">for</span> i <span class="keyword">in</span> <span class="builtin">range</span>(<span class="number">1</span>, <span class="number">10</span>, <span class="number">2</span>):
    <span class="builtin">print</span>(i)  <span class="comment"># 输出: 1, 3, 5, 7, 9</span>
</div>

<h3>📊 for循环累加求和</h3>
<div class="code-block">
<span class="comment"># 求1+2+3+...+100的和</span>
<span class="func">total</span> = <span class="number">0</span>
<span class="keyword">for</span> i <span class="keyword">in</span> <span class="builtin">range</span>(<span class="number">1</span>, <span class="number">101</span>):
    total = total + i
<span class="builtin">print</span>(<span class="string">"1到100的和是："</span>, total)
</div>

<h3>🔢 for循环遍历字符串</h3>
<div class="code-block">
<span class="func">word</span> = <span class="string">"Python"</span>
<span class="keyword">for</span> ch <span class="keyword">in</span> word:
    <span class="builtin">print</span>(ch)
<span class="comment"># 输出: P y t h o n (每行一个字母)</span>
</div>

<div class="note-box">
    <strong>💡 注意：</strong>range(1, 10)包含1，<strong>不包含10</strong>。range(1, 101)才能取到100。
</div>
        `
    },
    {
        id: 8,
        name: 'while循环',
        icon: '🔄',
        desc: '学习while循环和循环控制',
        content: `
<h3>🔄 while循环的作用</h3>
<p>while循环在<strong>条件成立时</strong>反复执行代码块，直到条件变为False才停止。</p>

<h3>📝 while循环基本格式</h3>
<div class="code-block">
<span class="keyword">while</span> 条件:
    条件成立时执行的代码  <span class="comment"># 注意缩进！</span>
</div>

<h3>📊 while循环示例</h3>
<div class="code-block">
<span class="comment"># 打印1到5</span>
<span class="func">i</span> = <span class="number">1</span>
<span class="keyword">while</span> i &lt;= <span class="number">5</span>:
    <span class="builtin">print</span>(i)
    i = i + <span class="number">1</span>  <span class="comment"># 一定要更新条件变量！</span>
</div>

<h3>⚠️ 死循环</h3>
<p>如果条件永远为True，程序将无法停止——这叫<strong>死循环</strong>。考试中要特别注意避免！</p>
<div class="code-block">
<span class="comment"># 危险！死循环示例（不要运行）</span>
<span class="keyword">while</span> <span class="keyword">True</span>:
    <span class="builtin">print</span>(<span class="string">"停不下来了！"</span>)
</div>

<h3>🆚 for vs while</h3>
<ul>
    <li><strong>for循环</strong>：知道循环次数时使用（如"循环10次"）</li>
    <li><strong>while循环</strong>：不知道具体次数，但知道条件时使用（如"直到用户输入quit"）</li>
</ul>

<h3>⏭ break 和 continue</h3>
<ul>
    <li><code>break</code>：立即<strong>跳出</strong>整个循环</li>
    <li><code>continue</code>：跳过本次循环，<strong>继续</strong>下一次</li>
</ul>

<div class="code-block">
<span class="comment"># break示例：找到第一个偶数就停止</span>
<span class="keyword">for</span> i <span class="keyword">in</span> <span class="builtin">range</span>(<span class="number">10</span>):
    <span class="keyword">if</span> i % <span class="number">2</span> == <span class="number">0</span> <span class="keyword">and</span> i &gt; <span class="number">0</span>:
        <span class="builtin">print</span>(<span class="string">"找到偶数："</span>, i)
        <span class="keyword">break</span>
</div>

<div class="note-box">
    <strong>💡 考试易错点：</strong>while循环中<strong>必须更新条件变量</strong>（如i = i + 1），否则会变成死循环！
</div>
        `
    },
    {
        id: 9,
        name: '字符串操作',
        icon: '📝',
        desc: '字符串的索引、切片和方法',
        content: `
<h3>📝 什么是字符串？</h3>
<p>字符串是由字符组成的<strong>序列</strong>，用单引号或双引号包裹。Python中字符串是<strong>不可变</strong>的。</p>

<h3>🔢 字符串索引（下标）</h3>
<p>每个字符都有一个编号，从<strong>0</strong>开始：</p>
<div class="output-block">
>>> s = "Python"
>>> s[0]
'P'
>>> s[1]
'y'
>>> s[5]
'n'
>>> s[-1]   # 负数索引从右边开始
'n'
</div>

<h3>✂️ 字符串切片</h3>
<p>语法：<code>s[start:stop:step]</code></p>
<div class="code-block">
<span class="func">s</span> = <span class="string">"Python编程"</span>
<span class="builtin">print</span>(s[<span class="number">0</span>:<span class="number">3</span>])    <span class="comment"># "Pyt" (不含索引3)</span>
<span class="builtin">print</span>(s[:<span class="number">3</span>])      <span class="comment"># "Pyt" (省略start，从0开始)</span>
<span class="builtin">print</span>(s[<span class="number">3</span>:])      <span class="comment"># "hon编程" (省略stop，到末尾)</span>
<span class="builtin">print</span>(s[::<span class="number">2</span>])     <span class="comment"># "Pto编" (每两个取一个)</span>
</div>

<h3>🔤 常用字符串方法</h3>
<ul>
    <li><code>len(s)</code>：获取字符串长度</li>
    <li><code>s.upper()</code>：转为大写</li>
    <li><code>s.lower()</code>：转为小写</li>
    <li><code>s.strip()</code>：去除两端空格</li>
    <li><code>s.replace(old, new)</code>：替换</li>
    <li><code>s.find(sub)</code>：查找子串位置</li>
</ul>

<h3>➕ 字符串拼接</h3>
<div class="code-block">
<span class="func">a</span> = <span class="string">"Hello"</span>
<span class="func">b</span> = <span class="string">"World"</span>
<span class="builtin">print</span>(a + <span class="string">" "</span> + b)  <span class="comment"># "Hello World"</span>
<span class="builtin">print</span>(a * <span class="number">3</span>)         <span class="comment"># "HelloHelloHello"</span>
</div>

<div class="note-box">
    <strong>💡 记住：</strong>字符串索引从<strong>0</strong>开始！第一个字符是s[0]，不是s[1]。这是考试最常出错的地方！
</div>
        `
    },
    {
        id: 10,
        name: '列表基础',
        icon: '📋',
        desc: '列表的创建、索引和常用操作',
        content: `
<h3>📋 什么是列表？</h3>
<p>列表是Python中存储<strong>多个数据</strong>的容器，用方括号<code>[]</code>表示，元素用逗号分隔。列表是<strong>可变</strong>的。</p>

<div class="code-block">
<span class="comment"># 创建列表</span>
<span class="func">fruits</span> = [<span class="string">"苹果"</span>, <span class="string">"香蕉"</span>, <span class="string">"橙子"</span>]
<span class="func">mixed</span> = [<span class="number">1</span>, <span class="string">"hello"</span>, <span class="number">3.14</span>, <span class="keyword">True</span>]
<span class="func">empty</span> = []  <span class="comment"># 空列表</span>
</div>

<h3>🔢 列表索引和切片</h3>
<p>和字符串类似，列表也支持索引和切片：</p>
<div class="code-block">
<span class="func">nums</span> = [<span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>, <span class="number">40</span>, <span class="number">50</span>]
<span class="builtin">print</span>(nums[<span class="number">0</span>])      <span class="comment"># 10</span>
<span class="builtin">print</span>(nums[-<span class="number">1</span>])     <span class="comment"># 50</span>
<span class="builtin">print</span>(nums[<span class="number">1</span>:<span class="number">3</span>])    <span class="comment"># [20, 30]</span>
</div>

<h3>🔧 列表常用操作</h3>
<ul>
    <li><code>len(lst)</code>：获取列表长度</li>
    <li><code>lst.append(x)</code>：在末尾添加元素</li>
    <li><code>lst.insert(i, x)</code>：在位置i插入元素</li>
    <li><code>lst.remove(x)</code>：删除第一个值为x的元素</li>
    <li><code>lst.pop()</code>：删除最后一个元素</li>
    <li><code>lst.sort()</code>：排序</li>
</ul>

<h3>🔁 遍历列表</h3>
<div class="code-block">
<span class="func">fruits</span> = [<span class="string">"苹果"</span>, <span class="string">"香蕉"</span>, <span class="string">"橙子"</span>]
<span class="keyword">for</span> fruit <span class="keyword">in</span> fruits:
    <span class="builtin">print</span>(<span class="string">"我喜欢吃"</span>, fruit)
</div>

<h3>🆚 列表 vs 字符串</h3>
<ul>
    <li>列表是<strong>可变</strong>的，可以修改元素</li>
    <li>字符串是<strong>不可变</strong>的，不能修改字符</li>
</ul>

<div class="note-box">
    <strong>💡 考点提示：</strong>列表索引也是从<strong>0</strong>开始。列表和字符串的切片语法完全相同。
</div>
        `
    },
    {
        id: 11,
        name: 'Turtle绘图基础',
        icon: '🎨',
        desc: '认识turtle海龟绘图库',
        content: `
<h3>🐢 什么是Turtle？</h3>
<p>Turtle（海龟绘图）是Python自带的绘图库，通过控制"小海龟"在屏幕上移动来画图，非常适合编程入门。</p>

<h3>📥 导入Turtle</h3>
<div class="code-block">
<span class="keyword">import</span> turtle          <span class="comment"># 导入turtle库</span>
</div>

<h3>🐢 基本绘图命令</h3>
<ul>
    <li><code>turtle.forward(n)</code>：向前移动n个像素</li>
    <li><code>turtle.backward(n)</code>：向后移动n个像素</li>
    <li><code>turtle.right(angle)</code>：向右转angle度</li>
    <li><code>turtle.left(angle)</code>：向左转angle度</li>
    <li><code>turtle.circle(r)</code>：画半径为r的圆</li>
    <li><code>turtle.penup()</code>：抬起画笔（移动不画线）</li>
    <li><code>turtle.pendown()</code>：落下画笔（移动画线）</li>
    <li><code>turtle.color(c)</code>：设置画笔颜色</li>
    <li><code>turtle.done()</code>：保持窗口不关闭</li>
</ul>

<h3>🟦 画正方形</h3>
<div class="code-block">
<span class="keyword">import</span> turtle
<span class="keyword">for</span> i <span class="keyword">in</span> <span class="builtin">range</span>(<span class="number">4</span>):
    turtle.forward(<span class="number">100</span>)
    turtle.right(<span class="number">90</span>)
turtle.done()
</div>

<h3>⭐ 画五角星</h3>
<div class="code-block">
<span class="keyword">import</span> turtle
<span class="keyword">for</span> i <span class="keyword">in</span> <span class="builtin">range</span>(<span class="number">5</span>):
    turtle.forward(<span class="number">100</span>)
    turtle.right(<span class="number">144</span>)
turtle.done()
</div>

<div class="note-box">
    <strong>💡 GESP一级要求：</strong>需要认识基本的turtle命令，能读懂简单的turtle绘图代码，并判断绘制结果。
</div>
        `
    },
    {
        id: 12,
        name: '综合应用与易错点',
        icon: '🎯',
        desc: '综合练习和常见易错点总结',
        content: `
<h3>🎯 GESP一级常考易错点</h3>

<h3>❌ 易错点1：input()返回类型</h3>
<p>input()返回的<strong>永远是字符串</strong>，做运算前必须转换！</p>
<div class="code-block">
<span class="comment"># 错误写法</span>
<span class="func">a</span> = <span class="builtin">input</span>(<span class="string">"输入数字："</span>)  <span class="comment"># a是字符串"5"，不是数字5</span>
<span class="builtin">print</span>(a + <span class="number">3</span>)              <span class="comment"># 报错！字符串不能加数字</span>

<span class="comment"># 正确写法</span>
<span class="func">a</span> = <span class="builtin">int</span>(<span class="builtin">input</span>(<span class="string">"输入数字："</span>))
<span class="builtin">print</span>(a + <span class="number">3</span>)  <span class="comment"># 正确</span>
</div>

<h3>❌ 易错点2：索引从0开始</h3>
<p>字符串和列表的第一个元素索引是<strong>0</strong>，不是1！</p>
<div class="code-block">
s = <span class="string">"Python"</span>
<span class="builtin">print</span>(s[<span class="number">1</span>])  <span class="comment"># 输出'y'，不是'P'！</span>
</div>

<h3>❌ 易错点3：缩进错误</h3>
<p>Python靠缩进识别代码块，缩进不一致会报错。</p>

<h3>❌ 易错点4：range()不含结束值</h3>
<p>range(1, 5)生成的是1, 2, 3, 4，<strong>不包含5</strong>。</p>

<h3>❌ 易错点5：比较用==而不是=</h3>
<p><code>=</code>是赋值，<code>==</code>才是判断相等。</p>

<h3>❌ 易错点6：True/False首字母大写</h3>
<p>Python中布尔值必须写成<code>True</code>和<code>False</code>，首字母大写。</p>

<h3>❌ 易错点7：整除和除法混淆</h3>
<p><code>/</code> 是普通除法（得小数），<code>//</code> 才是整除（得整数）。</p>

<h3>📝 考试建议</h3>
<ul>
    <li>仔细读题，注意"输出结果是什么"类型的题目</li>
    <li>注意变量类型，特别是input()的返回值</li>
    <li>注意缩进和代码块的范围</li>
    <li>注意range()的起始和结束值</li>
    <li>注意print()的sep和end参数</li>
</ul>
        `
    }
];

// 题库 - 每个知识点对应一组题目
const questionBank = {
    // 认识Python
    1: [
        { q: 'Python文件的扩展名是？', options: ['.py', '.python', '.txt', '.exe'], answer: 0, code: '', explain: 'Python程序文件的扩展名是.py，这是Python语言的标识。' },
        { q: 'Python语言的名字来源于？', options: ['一种蛇', '一个电视节目', '发明者的名字', '一种游戏'], answer: 1, code: '', explain: 'Python的名字来源于发明者Guido喜欢的电视节目"Monty Python\'s Flying Circus"。' },
        { q: '以下哪项不是Python的特点？', options: ['简单易学', '免费开源', '需要编译才能运行', '跨平台'], answer: 2, code: '', explain: 'Python是解释型语言，不需要编译。其他三项都是Python的特点。' },
        { q: 'Python是哪一年创建的？', options: ['1989年', '1991年', '1995年', '2000年'], answer: 1, code: '', explain: 'Python由Guido van Rossum于1991年创建发布。' },
        { q: 'Python属于什么类型的语言？', options: ['编译型语言', '解释型语言', '机器语言', '汇编语言'], answer: 1, code: '', explain: 'Python是解释型语言，代码逐行解释执行，不需要事先编译。' },
    ],
    // Python开发环境
    2: [
        { q: 'Python自带的集成开发环境叫什么？', options: ['VS Code', 'PyCharm', 'IDLE', 'Sublime'], answer: 2, code: '', explain: 'IDLE是Python安装时自带的集成开发环境（Integrated Development and Learning Environment）。' },
        { q: '在IDLE中运行Python程序的快捷键是？', options: ['F1', 'F3', 'F5', 'F8'], answer: 2, code: '', explain: '在IDLE编辑器中按F5键可以运行当前Python程序。' },
        { q: '以下哪个是正确的Python文件名？', options: ['test.txt', 'test.py', 'test.python', 'test.exe'], answer: 1, code: '', explain: 'Python程序文件必须以.py为扩展名。' },
        { q: '在Python交互模式（Shell）中输入2+3，会显示什么？', options: ['2+3', '5', '报错', '无显示'], answer: 1, code: '', explain: '交互模式下，Python会立即计算表达式并显示结果，2+3=5。' },
    ],
    // 变量与数据类型
    3: [
        { q: '以下哪个变量名是合法的？', options: ['2name', 'my name', '_score', 'if'], answer: 2, code: '', explain: '_score以下划线开头是合法的。2name以数字开头不合法，my name含空格不合法，if是关键字不合法。' },
        { q: 'type(3.14)的返回值是什么？', options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"], answer: 1, code: '', explain: '3.14是浮点数（小数），type()返回<class \'float\'>。' },
        { q: 'type(True)的返回值是什么？', options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"], answer: 3, code: '', explain: 'True是布尔值，type()返回<class \'bool\'>。注意True首字母大写！' },
        { q: '以下代码输出什么？\na = 5\na = 10\nprint(a)', options: ['5', '10', '15', '报错'], answer: 1, code: 'a = 5\na = 10\nprint(a)', explain: '变量a先被赋值为5，然后被重新赋值为10，最终输出10。' },
        { q: '以下哪个不是Python的基本数据类型？', options: ['int', 'float', 'str', 'array'], answer: 3, code: '', explain: 'Python一级涉及的基本数据类型有int(整型)、float(浮点型)、str(字符串)、bool(布尔型)。array不是基本类型。' },
    ],
    // 输入与输出
    4: [
        { q: 'input()函数返回的数据类型是？', options: ['int', 'float', 'str', '取决于输入内容'], answer: 2, code: '', explain: 'input()函数返回的永远是字符串(str)类型，如果需要数字必须用int()或float()转换。' },
        { q: '以下代码输出什么？\nprint("Hello", "World", sep="*")', options: ['Hello World', 'Hello*World', 'HelloWorld', '报错'], answer: 1, code: 'print("Hello", "World", sep="*")', explain: 'sep参数指定多个输出之间的分隔符，这里设为"*"，所以输出Hello*World。' },
        { q: '以下代码输出什么？\nprint("Hi", end="!")\nprint("OK")', options: ['Hi\\nOK', 'Hi!OK', 'Hi!\\nOK', '报错'], answer: 1, code: 'print("Hi", end="!")\nprint("OK")', explain: 'end="!"替换了默认的换行符，所以第一个print结束后不换行而是输出!，然后第二个print输出OK。' },
        { q: '将字符串"123"转换为整数，使用什么函数？', options: ['str()', 'float()', 'int()', 'bool()'], answer: 2, code: '', explain: 'int("123")将字符串"123"转换为整数123。float()转成小数，str()转成字符串。' },
        { q: '以下代码输出什么？\nprint(1, 2, 3, sep="")', options: ['1 2 3', '123', '1,2,3', '报错'], answer: 1, code: 'print(1, 2, 3, sep="")', explain: 'sep=""表示分隔符为空字符串，三个数字紧密连接输出为123。' },
    ],
    // 运算符
    5: [
        { q: '17 // 5 的结果是？', options: ['3', '3.4', '2', '4'], answer: 0, code: '', explain: '//是整除运算（地板除），17//5=3（只取整数部分）。' },
        { q: '17 % 5 的结果是？', options: ['3', '2', '3.4', '12'], answer: 1, code: '', explain: '%是取模（取余数）运算，17÷5=3余2，所以17%5=2。' },
        { q: '2 ** 4 的结果是？', options: ['6', '8', '16', '32'], answer: 2, code: '', explain: '**是幂运算，2**4=2×2×2×2=16。' },
        { q: '以下代码输出什么？\nprint(5 > 3 and 2 < 1)', options: ['True', 'False', '5', '报错'], answer: 1, code: 'print(5 > 3 and 2 < 1)', explain: '5>3是True，2<1是False，True and False = False。' },
        { q: '以下代码输出什么？\nprint(not (10 > 5))', options: ['True', 'False', '10', '报错'], answer: 1, code: 'print(not (10 > 5))', explain: '10>5是True，not True = False。' },
        { q: '9 / 2 的结果是？', options: ['4', '4.5', '5', '1'], answer: 1, code: '', explain: '/是普通除法，始终返回浮点数，9/2=4.5。注意和整除//的区别！' },
    ],
    // 条件判断
    6: [
        { q: '以下代码输出什么？\nx = 7\nif x > 5:\n    print("A")\nelse:\n    print("B")', options: ['A', 'B', 'AB', '报错'], answer: 0, code: 'x = 7\nif x > 5:\n    print("A")\nelse:\n    print("B")', explain: 'x=7，7>5条件成立，执行if分支，输出A。' },
        { q: '以下代码输出什么？\nscore = 75\nif score >= 90:\n    print("A")\nelif score >= 60:\n    print("B")\nelse:\n    print("C")', options: ['A', 'B', 'C', 'ABC'], answer: 1, code: 'score = 75\nif score >= 90:\n    print("A")\nelif score >= 60:\n    print("B")\nelse:\n    print("C")', explain: 'score=75，不满足≥90，满足≥60，执行elif分支输出B。elif只会执行第一个满足条件的分支。' },
        { q: 'Python中，条件判断语句的代码块用什么来表示？', options: ['大括号{}', '缩进', '关键字begin/end', '分号;'], answer: 1, code: '', explain: 'Python使用缩进（通常是4个空格）来表示代码块，这是Python的重要语法特性。' },
        { q: '以下哪个是Python中"等于"的比较运算符？', options: ['=', '==', '!=', 'equals'], answer: 1, code: '', explain: '==是等于比较运算符，=是赋值运算符，!=是不等于。注意区分=和==！' },
        { q: '以下代码输出什么？\na = 10\nif a % 2 == 0:\n    print("偶数")\nelse:\n    print("奇数")', options: ['偶数', '奇数', '10', '报错'], answer: 0, code: 'a = 10\nif a % 2 == 0:\n    print("偶数")\nelse:\n    print("奇数")', explain: '10%2=0（10能被2整除），所以a%2==0为True，输出"偶数"。' },
    ],
    // for循环
    7: [
        { q: 'range(5)生成哪些数字？', options: ['1,2,3,4,5', '0,1,2,3,4', '0,1,2,3,4,5', '1,2,3,4'], answer: 1, code: '', explain: 'range(5)生成0,1,2,3,4，共5个数字，从0开始，不含5。' },
        { q: '以下代码输出几个数字？\nfor i in range(1, 6):\n    print(i)', options: ['5个', '6个', '7个', '0个'], answer: 0, code: 'for i in range(1, 6):\n    print(i)', explain: 'range(1,6)生成1,2,3,4,5，共5个数字，输出5次。' },
        { q: '以下代码的输出是？\nfor i in range(3):\n    print(i, end=" ")', options: ['0 1 2 ', '1 2 3 ', '0 1 2 3 ', '1 2 '], answer: 0, code: 'for i in range(3):\n    print(i, end=" ")', explain: 'range(3)生成0,1,2，end=" "使输出用空格分隔。' },
        { q: '以下代码输出什么？\ntotal = 0\nfor i in range(1, 4):\n    total = total + i\nprint(total)', options: ['3', '4', '6', '10'], answer: 2, code: 'total = 0\nfor i in range(1, 4):\n    total = total + i\nprint(total)', explain: 'i依次为1,2,3，total=0+1+2+3=6。' },
        { q: '以下代码输出什么？\nfor ch in "AB":\n    print(ch * 2)', options: ['A\\nB', 'AB\\nAB', 'AA\\nBB', 'AABB'], answer: 2, code: 'for ch in "AB":\n    print(ch * 2)', explain: 'ch依次为"A"和"B"，"A"*2="AA"，"B"*2="BB"，每个print会换行。' },
    ],
    // while循环
    8: [
        { q: '以下代码输出什么？\ni = 1\nwhile i <= 3:\n    print(i)\n    i = i + 1', options: ['1\\n2\\n3', '1\\n2\\n3\\n4', '0\\n1\\n2\\n3', '死循环'], answer: 0, code: 'i = 1\nwhile i <= 3:\n    print(i)\n    i = i + 1', explain: 'i从1开始，<=3时循环，依次输出1,2,3，然后i变为4不再满足条件。' },
        { q: '如果while的条件永远为True，会发生什么？', options: ['程序正常运行', '程序立即退出', '死循环，程序停不下来', '程序报错'], answer: 2, code: '', explain: '如果while条件永远为True，循环永远不会停止，这就是"死循环"。在编写while循环时要特别小心。' },
        { q: 'break语句的作用是什么？', options: ['暂停循环', '跳出整个循环', '继续下一次循环', '结束程序'], answer: 1, code: '', explain: 'break语句用于立即跳出（终止）当前所在的整个循环，不再执行后续循环。' },
        { q: '以下代码输出什么？\ni = 0\nwhile i < 5:\n    i = i + 1\n    if i == 3:\n        break\n    print(i)', options: ['1\\n2', '1\\n2\\n3', '1\\n2\\n3\\n4\\n5', '0\\n1\\n2'], answer: 0, code: 'i = 0\nwhile i < 5:\n    i = i + 1\n    if i == 3:\n        break\n    print(i)', explain: 'i=1打印1，i=2打印2，i=3时遇到break跳出循环不打印。' },
        { q: 'for循环和while循环的主要区别是？', options: ['没有区别', 'for用于知道次数的情况，while用于知道条件的情况', 'for比while快', 'while比for高级'], answer: 1, code: '', explain: 'for循环适合已知循环次数的情况（如循环10次），while循环适合知道循环条件但不确定次数的情况。' },
    ],
    // 字符串操作
    9: [
        { q: '"Python"[1]的值是什么？', options: ['P', 'y', 't', 'n'], answer: 1, code: '', explain: '字符串索引从0开始，"Python"[0]="P"，[1]="y"，[2]="t"，以此类推。' },
        { q: '"Python"[0:3]的值是什么？', options: ['Pyt', 'Pyth', 'yth', 'Python'], answer: 0, code: '', explain: '切片[0:3]取索引0,1,2的字符（不含索引3），即"Pyt"。' },
        { q: '"abc" * 3 的结果是？', options: ['abcabcabc', 'abc3', 'aabbcc', '报错'], answer: 0, code: '', explain: '字符串乘以整数n，表示将字符串重复n次。"abc"*3 = "abcabcabc"。' },
        { q: 'len("Python")的结果是？', options: ['5', '6', '7', '0'], answer: 1, code: '', explain: 'len()返回字符串的长度（字符个数），"Python"有6个字符（P,y,t,h,o,n），所以len()=6。' },
        { q: '" Hello ".strip()的结果是？', options: ['Hello', 'Hello ', ' Hello', 'Hello '], answer: 0, code: '', explain: 'strip()去除字符串两端的空格，" Hello "两端空格被去掉变为"Hello"。' },
    ],
    // 列表基础
    10: [
        { q: 'nums = [10, 20, 30]，则nums[1]的值是？', options: ['10', '20', '30', '报错'], answer: 1, code: '', explain: '列表索引从0开始，nums[0]=10，nums[1]=20，nums[2]=30。' },
        { q: 'len([1, 2, 3, 4, 5])的结果是？', options: ['4', '5', '6', '0'], answer: 1, code: '', explain: 'len()返回列表中元素的个数，[1,2,3,4,5]有5个元素。' },
        { q: '以下代码输出什么？\narr = [1, 2, 3]\narr.append(4)\nprint(len(arr))', options: ['3', '4', '5', '报错'], answer: 1, code: 'arr = [1, 2, 3]\narr.append(4)\nprint(len(arr))', explain: 'append(4)在列表末尾添加元素4，列表变为[1,2,3,4]，长度为4。' },
        { q: '列表和字符串的一个重要区别是？', options: ['没有区别', '列表可以修改元素，字符串不能', '列表用{}，字符串用""', '列表不能切片'], answer: 1, code: '', explain: '列表是可变的（可以修改元素），字符串是不可变的（不能修改字符）。这是两者的重要区别。' },
        { q: '以下代码输出什么？\nlst = ["a", "b", "c"]\nprint(lst[-1])', options: ['a', 'b', 'c', '报错'], answer: 2, code: 'lst = ["a", "b", "c"]\nprint(lst[-1])', explain: '索引-1表示最后一个元素，"c"。负数索引从右往左数，-1是最后一个，-2是倒数第二个。' },
    ],
    // Turtle绘图
    11: [
        { q: '使用turtle库需要先执行什么命令？', options: ['import turtle', 'from turtle', 'include turtle', 'using turtle'], answer: 0, code: '', explain: '使用import turtle导入turtle绘图库。' },
        { q: 'turtle.forward(100)的作用是？', options: ['后退100像素', '向前移动100像素', '旋转100度', '画一个半径为100的圆'], answer: 1, code: '', explain: 'forward(100)让海龟向前移动100个像素单位。' },
        { q: 'turtle.right(90)的作用是？', options: ['向左转90度', '向右转90度', '向右移动90像素', '画一个半径90的圆'], answer: 1, code: '', explain: 'right(90)让海龟向右旋转90度。left()是向左转。' },
        { q: '以下代码画什么？\nimport turtle\nfor i in range(4):\n    turtle.forward(80)\n    turtle.right(90)', options: ['三角形', '正方形', '五角星', '圆形'], answer: 1, code: 'import turtle\nfor i in range(4):\n    turtle.forward(80)\n    turtle.right(90)', explain: '循环4次，每次前进80然后右转90度，画出正方形（4个边，每个转角90度）。' },
        { q: 'turtle.circle(50)的作用是？', options: ['向前走50步', '画半径为50的圆', '画边长为50的多边形', '旋转50度'], answer: 1, code: '', explain: 'circle(50)以当前海龟位置为起点，画一个半径为50的圆。' },
    ],
    // 综合应用
    12: [
        { q: '以下代码是否有错误？\nname = input("姓名：")\nprint("你好" + name)', options: ['有错误', '没有错误', '取决于输入', '无法判断'], answer: 1, code: 'name = input("姓名：")\nprint("你好" + name)', explain: 'input()返回字符串，两个字符串用+拼接是合法的。如果和数字拼接则会报错。' },
        { q: '以下代码输出什么？\nfor i in range(1, 6):\n    if i % 2 == 0:\n        print(i)', options: ['1\\n3\\n5', '2\\n4', '1\\n2\\n3\\n4\\n5', '2\\n4\\n6'], answer: 1, code: 'for i in range(1, 6):\n    if i % 2 == 0:\n        print(i)', explain: 'range(1,6)生成1到5，i%2==0筛选出偶数2和4。' },
        { q: '以下代码输出什么？\ns = "ABC"\nprint(s[0] + s[-1])', options: ['AB', 'AC', 'BC', 'CA'], answer: 1, code: 's = "ABC"\nprint(s[0] + s[-1])', explain: 's[0]="A"，s[-1]="C"（最后一个字符），"A"+"C"="AC"。' },
        { q: '以下哪个是正确的Python注释？', options: ['// 注释', '# 注释', '-- 注释', '/* 注释 */'], answer: 1, code: '', explain: 'Python使用#号来写单行注释。#后面的内容不会被执行。' },
        { q: '以下代码输出什么？\na = 5\nb = 2\nprint(a // b + a % b)', options: ['2', '3', '4', '3.5'], answer: 1, code: 'a = 5\nb = 2\nprint(a // b + a % b)', explain: '5//2=2（整除），5%2=1（取余），2+1=3。' },
    ]
};

// ==================== 应用状态 ====================
const state = {
    currentView: 'home',
    quizMode: null,        // 'practice' | 'exam'
    quizTopicId: null,
    quizQuestions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    timerInterval: null,
    examTimeLeft: 0,
    modalCallback: null,    // 弹窗确认回调
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

function startQuiz() {
    // 切换到答题视图
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('view-quiz').classList.add('active');

    // 显示/隐藏计时器
    const timerEl = document.getElementById('quiz-timer');
    if (state.quizMode === 'exam') {
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

    document.getElementById('quiz-progress-text').textContent = `${idx + 1}/${total}`;
    document.getElementById('quiz-progress-bar').style.width = `${((idx + 1) / total) * 100}%`;
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

    // 选项
    const labels = ['A', 'B', 'C', 'D'];
    const optionsList = document.getElementById('options-list');
    optionsList.innerHTML = question.options.map((opt, i) => {
        let cls = 'option-item';
        if (savedAnswer !== undefined) {
            if (i === question.answer) cls += ' correct';
            else if (i === savedAnswer && savedAnswer !== question.answer) cls += ' wrong';
        }
        if (savedAnswer === i) cls += ' selected';
        return `
            <div class="${cls}" onclick="selectOption(${i})" id="option-${i}">
                <div class="option-letter">${labels[i]}</div>
                <div>${opt}</div>
            </div>
        `;
    }).join('');

    // 更新提交按钮
    const btn = document.getElementById('btn-submit-answer');
    if (savedAnswer !== undefined) {
        // 已经答过
        if (idx < state.quizQuestions.length - 1) {
            btn.textContent = '下一题 →';
            btn.disabled = false;
            btn.onclick = nextQuestion;
        } else {
            btn.textContent = '查看结果 📊';
            btn.disabled = false;
            btn.onclick = showResult;
        }
    } else {
        btn.textContent = '确认答案';
        btn.disabled = false;
        btn.onclick = submitAnswer;
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
        // 加入错题本
        const topicId = question.topicId || state.quizTopicId;
        if (topicId) addWrongQuestion(question, topicId, selected);
    }

    // 更新按钮
    const btn = document.getElementById('btn-submit-answer');
    if (idx < state.quizQuestions.length - 1) {
        btn.textContent = '下一题 →';
        btn.onclick = nextQuestion;
    } else {
        btn.textContent = '查看结果 📊';
        btn.onclick = showResult;
    }

    state._tempSelection = undefined;
}

function nextQuestion() {
    state.currentQuestionIndex++;
    state._tempSelection = undefined;
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
    state.quizMode = null;

    const total = state.quizQuestions.length;
    const correct = state.userAnswers.filter((ans, i) => ans === state.quizQuestions[i].answer).length;
    const rate = Math.round((correct / total) * 100);

    // 更新统计
    if (state.quizMode === null && state.quizTopicId === null) {
        // 模拟考试
    }
    updateStats(correct, total);

    // 切换到结果视图
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('view-result').classList.add('active');

    // 设置结果图标和标题
    let icon, title;
    if (rate >= 90) { icon = '🏆'; title = '太棒了！非常优秀！'; }
    else if (rate >= 70) { icon = '🎉'; title = '做得不错！继续加油！'; }
    else if (rate >= 60) { icon = '👍'; title = '及格了！还要多练习哦！'; }
    else { icon = '📚'; title = '需要加强学习！别灰心！'; }

    document.getElementById('result-icon').textContent = icon;
    document.getElementById('result-title').textContent = title;
    document.getElementById('result-score').textContent = `${correct}/${total}`;
    document.getElementById('result-detail').innerHTML = `
        正确率: <strong>${rate}%</strong><br>
        答对 <strong>${correct}</strong> 题，答错 <strong>${total - correct}</strong> 题
    `;

    // 按钮
    document.getElementById('btn-result-review').style.display = 'block';
    document.getElementById('btn-retry-wrong').style.display = (correct < total) ? 'block' : 'none';
    document.getElementById('btn-result-review').onclick = reviewAnswers;
    document.getElementById('btn-retry-wrong').onclick = retryWrong;

    // 隐藏解析列表
    document.getElementById('review-list').style.display = 'none';

    // 如果是模拟考试，增加统计
    if (!state.quizTopicId) {
        incrementExams();
    }

    window.scrollTo(0, 0);
}

function reviewAnswers() {
    const container = document.getElementById('review-list');
    container.style.display = 'flex';
    const labels = ['A', 'B', 'C', 'D'];

    container.innerHTML = state.quizQuestions.map((q, i) => {
        const userAns = state.userAnswers[i];
        const isCorrect = userAns === q.answer;
        const cls = isCorrect ? 'correct-review' : 'wrong-review';

        return `
            <div class="review-item ${cls}">
                <div class="review-question">${i + 1}. ${q.q}</div>
                ${q.code ? `<div style="background:#282C34;color:#ABB2BF;padding:8px 12px;border-radius:6px;font-family:monospace;font-size:0.8rem;margin:6px 0;white-space:pre-wrap;">${escapeHtml(q.code)}</div>` : ''}
                <div class="review-answer">
                    你的答案: <span class="${isCorrect ? 'correct-text' : 'wrong-text'}">${labels[userAns] || '未作答'}. ${q.options[userAns] || ''}</span>
                    ${!isCorrect ? ` | 正确答案: <span class="correct-text">${labels[q.answer]}. ${q.options[q.answer]}</span>` : ''}
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
        if (state.userAnswers[i] !== q.answer) {
            wrongQuestions.push(q);
        }
    });

    if (wrongQuestions.length === 0) {
        showToast('没有错题可重做！');
        return;
    }

    state.quizMode = 'practice';
    state.quizTopicId = state.quizTopicId;
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
            <div class="wrong-meta">
                <span class="wrong-topic">${w.topicName}</span>
                <span>你的答案: ${labels[w.userChoice]} → 正确答案: ${labels[w.answer]}</span>
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
    showModal('确认退出',
        `你已经回答了 ${answered}/${total} 题，确定要退出吗？${state.quizMode === 'exam' ? '退出后考试记录不会保存。' : ''}`,
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
window.selectOption = selectOption;
window.submitAnswer = submitAnswer;
window.nextQuestion = nextQuestion;
window.showResult = showResult;
window.reviewAnswers = reviewAnswers;
window.retryWrong = retryWrong;
window.confirmQuitQuiz = confirmQuitQuiz;
window.closeModal = closeModal;
window.confirmModal = confirmModal;
window.removeWrongQuestion = removeWrongQuestion;
window.showToast = showToast;

// 启动应用
document.addEventListener('DOMContentLoaded', init);
