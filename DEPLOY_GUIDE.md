# 部署指南 - GitHub + Cloudflare Pages

## 🚀 快速部署步骤

### 步骤 1: 创建 GitHub 仓库

```bash
# 初始化 git
cd /tmp/guangxi-marketing
git init
git add .
git commit -m "Initial commit: 广西旅游营销引流页"
git branch -M main

# 创建 GitHub 仓库（先在 GitHub 网页创建）
git remote add origin https://github.com/yourusername/guangxi-marketing.git
git push -u origin main
```

### 步骤 2: 配置 Cloudflare Pages

1. **登录 Cloudflare Dashboard**
   - 访问 https://dash.cloudflare.com
   - 选择你的账户

2. **创建 Pages 项目**
   - 左侧菜单 → Pages → Create a project
   - 选择 "Connect to Git"

3. **连接 GitHub 仓库**
   - 授权 Cloudflare 访问 GitHub
   - 选择你的仓库: `yourusername/guangxi-marketing`

4. **配置构建设置**
   - **Project name**: `guangxi-marketing`
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (默认)

5. **环境变量（可选）**
   - 可以添加自定义环境变量

6. **点击 "Save and Deploy"**

### 步骤 3: 获取免费域名

部署完成后，你会获得一个免费的 Cloudflare Pages 域名：
```
https://guangxi-marketing.pages.dev
```

### 步骤 4: 配置自定义域名（可选）

1. 在 Pages 项目设置 → Custom domains
2. 添加你的自定义域名
3. 在域名注册商处配置 DNS 记录

## 🔧 技术配置详情

### GitHub Actions 配置
项目已包含 `.github/workflows/deploy.yml`，自动：
- 监听 `main` 分支的 push 事件
- 使用 Node.js 20
- 安装依赖并构建
- 部署到 Cloudflare Pages

### 需要的 GitHub Secrets
在 GitHub 仓库设置 → Secrets and variables → Actions 中添加：

| Secret 名称 | 描述 | 如何获取 |
|------------|------|----------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API Token | Cloudflare Dashboard → My Profile → API Tokens → Create Token → Edit Cloudflare Workers 模板 |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Account ID | Cloudflare Dashboard → 右下角 Account ID |

### Cloudflare Pages 设置
- **框架预设**: Astro
- **构建命令**: `npm run build`
- **输出目录**: `dist`
- **Node.js 版本**: 20

## 📊 监控与维护

### 自动部署
- 每次推送到 `main` 分支都会自动部署
- 支持预览部署（Pull Request）

### 性能监控
- Cloudflare Pages 提供内置分析
- 页面加载速度监控
- 访问统计

### 内容更新
1. 编辑 `src/pages/` 下的页面文件
2. 提交并推送到 GitHub
3. 自动部署到 Cloudflare Pages

## 🚨 故障排除

### 构建失败
1. 检查 Node.js 版本（需要 18+）
2. 检查依赖安装：`npm ci`
3. 查看构建日志中的具体错误

### 部署失败
1. 检查 GitHub Secrets 配置
2. 检查 Cloudflare API Token 权限
3. 检查账户余额（免费计划足够）

### 页面无法访问
1. 检查域名配置
2. 检查 DNS 记录
3. 检查 Cloudflare 防火墙规则

## 📞 支持
- Cloudflare 文档: https://developers.cloudflare.com/pages/
- Astro 文档: https://docs.astro.build/
- GitHub Actions 文档: https://docs.github.com/en/actions

## 🔄 持续集成
项目配置了完整的 CI/CD 流程：
1. **开发** → 本地修改
2. **测试** → 本地预览
3. **提交** → 推送到 GitHub
4. **构建** → GitHub Actions 自动构建
5. **部署** → 自动部署到 Cloudflare Pages
6. **监控** → Cloudflare 分析