module.exports = {
  apps: [
    {
      name: 'cosette', // 应用名称
      script: 'server.js', // Next.js Standalone 入口文件路径
      cwd: './', // 应用根目录
      instances: 'max', // 根据服务器 CPU 核心数启动多个实例
      exec_mode: 'cluster', // 使用 cluster 模式
      instances: 1, // 设置实例数，1 表示单个实例，或可以设置为 'max' 来根据 CPU 数量自动调整
      autorestart: true, // 启用自动重启
      watch: false, // 不启用文件监视（通常在生产环境下关闭）
      max_memory_restart: '1G', // 设置内存使用限制，超过 1GB 会重启应用
      env: {
        NODE_ENV: 'production', // 生产环境
        PORT: 5173, // 启动端口
      },
      env_development: {
        NODE_ENV: 'development', // 生产环境
        PORT: 5173, // 启动端口
      },
    },
  ],
};
