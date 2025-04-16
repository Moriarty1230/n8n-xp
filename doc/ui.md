 # 手机产品官网UI设计方案

## 1. 设计规范

### 1.1 色彩系统
- 主色：#1890FF (Ant Design蓝)
- 辅助色：#52C41A (成功)、#FAAD14 (警告)、#FF4D4F (错误)
- 中性色：#262626 (标题)、#595959 (正文)、#8C8C8C (次要文字)
- 背景色：#FFFFFF (主背景)、#F5F5F5 (次要背景)

### 1.2 字体规范
- 主标题：24px, 加粗
- 次级标题：20px, 加粗
- 正文：14px, 常规
- 辅助文字：12px, 常规

### 1.3 间距规范
- 大间距：24px
- 中间距：16px
- 小间距：8px

## 2. 页面设计

### 2.1 公共导航

@顶部导航.svg
<svg viewBox="0 0 1200 80">
  <rect width="1200" height="80" fill="#FFFFFF"/>
  <rect x="40" y="20" width="120" height="40" fill="#1890FF"/>
  <text x="480" y="45" fill="#262626" font-size="16">产品</text>
  <text x="580" y="45" fill="#262626" font-size="16">门店</text>
  <text x="680" y="45" fill="#262626" font-size="16">服务</text>
  <text x="780" y="45" fill="#262626" font-size="16">新闻</text>
  <rect x="1000" y="25" width="80" height="30" rx="15" fill="#1890FF"/>
  <text x="1020" y="45" fill="#FFFFFF" font-size="14">购买</text>
</svg>
@顶部导航.svg

### 2.2 首页设计

#### 2.2.1 Banner区域

@首页Banner设计.svg
<svg viewBox="0 0 1200 600">
  <rect width="1200" height="600" fill="#F5F5F5"/>
  <rect x="100" y="50" width="1000" height="500" fill="#FFFFFF"/>
  <rect x="150" y="100" width="900" height="400" fill="#1890FF"/>
  <text x="200" y="300" fill="#FFFFFF" font-size="48">全新旗舰手机</text>
  <rect x="200" y="350" width="160" height="48" rx="24" fill="#FFFFFF"/>
  <text x="240" y="380" fill="#1890FF" font-size="16">立即了解</text>
  <circle cx="550" cy="520" r="8" fill="#1890FF"/>
  <circle cx="590" cy="520" r="8" fill="#D9D9D9"/>
  <circle cx="630" cy="520" r="8" fill="#D9D9D9"/>
</svg>
@首页Banner设计.svg

#### 2.2.2 产品展示区

@产品展示区设计.svg
<svg viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="#FFFFFF"/>
  <text x="100" y="80" fill="#262626" font-size="32">热门产品</text>
  <rect x="100" y="120" width="300" height="400" fill="#F5F5F5"/>
  <rect x="450" y="120" width="300" height="400" fill="#F5F5F5"/>
  <rect x="800" y="120" width="300" height="400" fill="#F5F5F5"/>
  <text x="200" y="600" fill="#262626" font-size="24">PRO MAX</text>
  <text x="550" y="600" fill="#262626" font-size="24">PRO</text>
  <text x="900" y="600" fill="#262626" font-size="24">LITE</text>
</svg>
@产品展示区设计.svg

### 2.3 产品详情页

#### 2.3.1 产品信息展示

@产品详情设计.svg
<svg viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="#FFFFFF"/>
  <rect x="100" y="50" width="500" height="500" fill="#F5F5F5"/>
  <rect x="650" y="50" width="450" height="500" fill="#FFFFFF"/>
  <text x="650" y="100" fill="#262626" font-size="32">产品名称</text>
  <text x="650" y="150" fill="#595959" font-size="16">产品描述内容</text>
  <rect x="650" y="200" width="450" height="1" fill="#E8E8E8"/>
  <text x="650" y="250" fill="#262626" font-size="24">¥ 5999</text>
  <rect x="650" y="300" width="120" height="40" rx="20" fill="#1890FF"/>
  <rect x="790" y="300" width="120" height="40" rx="20" fill="#FFFFFF" stroke="#1890FF"/>
</svg>
@产品详情设计.svg

### 2.4 门店查询页

@门店查询设计.svg
<svg viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="#F5F5F5"/>
  <rect x="100" y="50" width="800" height="700" fill="#FFFFFF"/>
  <rect x="950" y="50" width="150" height="700" fill="#FFFFFF"/>
  <circle cx="500" cy="400" r="10" fill="#1890FF"/>
  <rect x="970" y="80" width="110" height="60" fill="#F5F5F5"/>
  <text x="990" y="120" fill="#262626" font-size="14">门店列表</text>
</svg>
@门店查询设计.svg

### 2.5 售后服务页

@售后服务设计.svg
<svg viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="#FFFFFF"/>
  <text x="100" y="80" fill="#262626" font-size="32">售后服务</text>
  <rect x="100" y="120" width="280" height="200" fill="#F5F5F5"/>
  <rect x="400" y="120" width="280" height="200" fill="#F5F5F5"/>
  <rect x="700" y="120" width="280" height="200" fill="#F5F5F5"/>
  <text x="180" y="200" fill="#262626" font-size="20">维修服务</text>
  <text x="480" y="200" fill="#262626" font-size="20">换新服务</text>
  <text x="780" y="200" fill="#262626" font-size="20">保修政策</text>
</svg>
@售后服务设计.svg

### 2.6 新闻资讯页

@新闻列表设计.svg
<svg viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="#FFFFFF"/>
  <rect x="100" y="50" width="1000" height="120" fill="#F5F5F5"/>
  <rect x="100" y="190" width="1000" height="120" fill="#F5F5F5"/>
  <rect x="100" y="330" width="1000" height="120" fill="#F5F5F5"/>
  <text x="140" y="100" fill="#262626" font-size="24">新闻标题</text>
  <text x="140" y="240" fill="#262626" font-size="24">新闻标题</text>
  <text x="140" y="380" fill="#262626" font-size="24">新闻标题</text>
</svg>
@新闻列表设计.svg

## 3. 响应式设计

### 3.1 断点设定
- 移动端：<768px
- 平板：768px-1024px
- 桌面端：>1024px

### 3.2 布局适配
- 移动端采用单列布局
- 平板采用双列布局
- 桌面端采用多列布局

## 4. 交互设计

### 4.1 全局交互
- 悬停反馈：透明度变化
- 点击反馈：缩放效果
- 加载状态：进度指示
- 过渡动画：平滑切换

### 4.2 特殊交互
- 产品360°旋转展示
- 图片画廊放大预览
- 表单实时验证
- 地图交互操作

## 5. 设计资源

### 5.1 组件库
使用Ant Design组件库，包含：
- Button 按钮
- Input 输入框
- Select 选择器
- Table 表格
- Modal 对话框
- Form 表单

### 5.2 图标系统
采用Ant Design Icons图标库

## 6. 无障碍设计

### 6.1 颜色对比度
确保文本与背景色对比度符合WCAG 2.0标准

### 6.2 键盘访问
支持键盘导航和焦点管理

### 6.3 替代文本
为图片和图标提供alt文本