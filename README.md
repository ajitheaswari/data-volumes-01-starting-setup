# 🐳 Data Volumes - Docker + Node.js Starter

This repository contains a simple Node.js application to demonstrate how to work with Docker volumes. It is designed to help you understand how data persistence works in containerized environments.

## 📁 Project Structure

data-volumes-01-starting-setup/
├── Dockerfile  
├── docker-compose.yml  
├── node_modules/ (created after `npm install`)  
├── package.json  
├── package-lock.json  
├── server.js  
└── data/ (created by Docker volume mount)

## 🚀 Features

- Express-based Node.js server  
- Reads and writes text data to a volume-mounted directory  
- Demonstrates how to persist data using Docker volumes  
- Teaches core Docker concepts like bind mounts and named volumes
- Volumes, Environment, Arguments configuration.

## 🛠️ Getting Started

### Clone the repository
```bash
git clone https://github.com/ajitheaswari/data-volumes-01-starting-setup.git
cd data-volumes-01-starting-setup/data-volumes-01-starting-setup
