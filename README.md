# 🧾 Employee Frontend (React + Ant Design)

## 🚀 Overview

This is a React-based frontend application built with [Ant Design (antd)](https://ant.design/) and packaged using Docker for easy deployment.

---

## ✅ Prerequisites

Make sure the following tools are installed on your system:

- [Node.js](https://nodejs.org/) (LTS)
- [VSC](https://code.visualstudio.com/)
- [Docker](https://www.docker.com/products/docker-desktop/)

---

## ⚙️ Running Locally (without Docker)

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

App will be available at: http://localhost:3000

---

## 🐳 Docker Setup

1. **Build Docker Image**
   ```bash
   docker build -t employee-fe .
   ```
2. **Run Docker Container**
   ```bash
   docker run -d -p 3000:80 employee-fe
   ```

## 🛠️ Build for Production (without Docker)

```bash
npm run build
```
