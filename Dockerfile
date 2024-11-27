# 使用 Node.js 官方镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 设置npm镜像源
RUN npm config set registry https://registry.npmmirror.com/

# 复制依赖文件并安装
COPY package*.json ./
RUN npm install

# 复制项目文件到容器
COPY . .

# 构建 Next.js 应用
RUN npm run build

# 全局安装 PM2
RUN npm install pm2 -g

# 暴露端口
EXPOSE 3000

# 使用 PM2 启动 Next.js
CMD ["pm2-runtime", "ecosystem.config.js"]




