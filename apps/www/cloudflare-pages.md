# Cloudflare Pages 部署配置

本文档描述了如何将 shadcn-vue 文档站点部署到 Cloudflare Pages。

## 部署设置

### 基本配置

- **项目名称**: `shadcn-vue-www`
- **生产分支**: `main` 或 `dev`
- **构建命令**: `pnpm build` 或 `./build.sh`
- **构建输出目录**: `.vitepress/dist`
- **根目录**: `apps/www`
- **Node.js 版本**: `18` 或 `20`

### 环境变量

在 Cloudflare Pages 控制台中设置以下环境变量：

#### 生产环境
```
NODE_ENV=production
VITE_APP_ENV=production
VITE_SITE_URL=https://www.shadcn-vue.com
VITE_GITHUB_REPO=unovue/shadcn-vue
VITE_GITHUB_BRANCH=dev
```

#### 预览环境
```
NODE_ENV=development
VITE_APP_ENV=preview
VITE_SITE_URL=$CF_PAGES_URL
VITE_GITHUB_REPO=unovue/shadcn-vue
VITE_GITHUB_BRANCH=$CF_PAGES_BRANCH
```

### 构建配置

#### 方式一：使用 pnpm 直接构建
```bash
# 构建命令
pnpm install && pnpm build

# 或者分步骤
pnpm install --frozen-lockfile
pnpm run build:registry
pnpm run build
```

#### 方式二：使用构建脚本
```bash
# 使用提供的构建脚本
./build.sh
```

### 自定义域名

1. 在 Cloudflare Pages 控制台中添加自定义域名
2. 配置 DNS 记录指向 Cloudflare Pages
3. 启用 HTTPS 和 HTTP/2

### 性能优化

- 启用 Brotli 压缩
- 配置缓存策略（通过 `_headers` 文件）
- 启用 HTTP/3
- 配置 CDN 缓存

### 监控和分析

- 启用 Cloudflare Analytics
- 配置 Web Vitals 监控
- 设置错误追踪

## 部署流程

1. **连接 GitHub 仓库**
   - 在 Cloudflare Pages 控制台中连接 GitHub 仓库
   - 选择 `unovue/shadcn-vue` 仓库

2. **配置构建设置**
   - 设置构建命令和输出目录
   - 配置环境变量
   - 选择 Node.js 版本

3. **部署**
   - 推送代码到指定分支触发自动部署
   - 或在控制台手动触发部署

4. **验证部署**
   - 检查构建日志
   - 访问部署的站点
   - 测试功能是否正常

## 故障排除

### 常见问题

1. **构建失败**
   - 检查 Node.js 版本
   - 确认依赖安装成功
   - 查看构建日志中的错误信息

2. **路径解析问题**
   - 确认别名配置正确
   - 检查相对路径引用
   - 验证符号链接是否正确

3. **静态资源加载失败**
   - 检查 `_headers` 配置
   - 确认资源路径正确
   - 验证缓存策略

### 调试技巧

- 使用 `CF_PAGES=1` 环境变量检测 Cloudflare Pages 环境
- 在构建脚本中添加调试输出
- 使用 Cloudflare Pages 的预览功能测试

## 相关文件

- `wrangler.toml` - Cloudflare 配置文件
- `_headers` - HTTP 头部配置
- `_redirects` - 重定向规则
- `build.sh` - 构建脚本
- `.env.example` - 环境变量示例
