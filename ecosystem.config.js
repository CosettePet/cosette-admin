module.exports = {
  apps: [
    {
      name: 'next-app',                // 应用名称
      script: '.next/standalone/server.js', // 启动脚本
      instances: 1,                    // 设置实例数，1 表示单个实例，或可以设置为 'max' 来根据 CPU 数量自动调整
      autorestart: true,               // 启用自动重启
      watch: false,                    // 不启用文件监视（通常在生产环境下关闭）
      max_memory_restart: '1G',        // 设置内存使用限制，超过 1GB 会重启应用
      env: {
        NODE_ENV: 'production',        // 设置环境变量
      },
    },
  ],
};
