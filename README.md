# 广西旅游营销引流页

基于 Astro + Cloudflare Pages 的静态营销引流页，专注于广西地区的房产金融服务。

## 🎯 核心业务

1. **公积金贷款** - 最高额度，最低利率，快速审批
2. **公积金法拍房** - 法拍房公积金贷款专项服务
3. **公积金提现** - 合规提取，流程透明，快速到账
4. **房产抵押** - 房屋抵押贷款，资金周转无忧
5. **房屋全款收购** - 快速全款收购，现金交易安全
6. **房屋托管** - 专业托管服务，租金收益稳定
7. **房屋出租** - 精品房源出租，租客精准匹配
8. **海景民宿** - 涠洲岛/防城港海景民宿运营
9. **学习资料** - 定期更新的房产金融知识库
10. **虚拟资料** - 合同模板、计算器等实用工具

## 🚀 技术栈

- **框架**: Astro 4.x (静态站点生成)
- **样式**: Tailwind CSS
- **托管**: Cloudflare Pages
- **部署**: GitHub Actions
- **域名**: Cloudflare Pages 免费域名

## 📁 项目结构

```
/
├── src/
│   ├── pages/          # 页面文件
│   │   ├── index.astro              # 首页
│   │   ├── gjj-daikuan/            # 公积金贷款
│   │   ├── gjj-fapfang/           # 公积金法拍房
│   │   ├── gjj-tixian/            # 公积金提现
│   │   ├── fang-chan-diya/        # 房产抵押
│   │   ├── fang-quankuan/         # 房屋全款收购
│   │   ├── fang-tuoguan/          # 房屋托管
│   │   ├── fang-chuzu/            # 房屋出租
│   │   ├── haijing-minsu/         # 海景民宿
│   │   ├── ziyuan/                # 学习资料
│   │   └── downloads/             # 虚拟资料下载
│   ├── layouts/        # 布局组件
│   ├── components/     # 可复用组件
│   └── styles/         # 全局样式
├── public/             # 静态资源
├── .github/workflows/  # GitHub Actions
└── package.json        # 项目配置
```

## 🚀 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## ☁️ 部署到 Cloudflare Pages

### 步骤 1: 创建 GitHub 仓库
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/guangxi-marketing.git
git push -u origin main
```

### 步骤 2: 配置 Cloudflare Pages
1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 进入 Pages → Create a project → Connect to Git
3. 选择你的 GitHub 仓库
4. 配置构建设置：
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. 添加环境变量（可选）

### 步骤 3: 配置 GitHub Secrets
在 GitHub 仓库设置中添加：
- `CLOUDFLARE_API_TOKEN`: Cloudflare API Token
- `CLOUDFLARE_ACCOUNT_ID`: Cloudflare Account ID

## 🎨 设计规范

- **主色**: `#1E3A5F` (深海蓝)
- **辅色**: `#F4A261` (暖橙色)
- **强调色**: `#2A9D8F` (青绿色)
- **字体**: 思源黑体 / Noto Sans SC

## 📊 SEO 优化

- 每个页面都有完整的 Meta 标签
- 语义化 HTML 结构
- 结构化数据标记
- 页面加载速度 < 3秒

## 🔄 内容更新

学习资料和虚拟资料定期更新：
1. 编辑 `/src/pages/ziyuan/index.astro` 更新资料列表
2. 上传新的 PDF 文件到 `/public/downloads/`
3. 提交并推送到 GitHub
4. Cloudflare Pages 自动部署

## 📞 联系方式

- 电话: 138-8888-8888
- 邮箱: contact@guangxi-finance.com
- 地址: 广西南宁市青秀区

## 📄 许可证

MIT License