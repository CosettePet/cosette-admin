module.exports = {
  apps: [
    {
      name: "nextjs-app",           // 应用名称
      script: "node_modules/next/dist/bin/next", // 启动命令
      args: "start",                // Next.js 启动参数
      instances: "max",             // 根据 CPU 核心数启动实例
      exec_mode: "cluster",         // 开启集群模式
      env: {
        NODE_ENV: "production",     // 环境变量
        PORT: 3000,                 // 运行端口
      },
    },
  ],
};
