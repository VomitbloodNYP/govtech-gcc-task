# GovTech GCC Task

## Hosted Website

The website is self hosted, behind Nginx and Cloudflare.  
[gcc.mikoshi.foo](https://gcc.mikoshi.foo/)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/VomitbloodNYP/govtech-gcc-task.git
```

### 2. Install the dependencies for the backend

```bash
cd govtech-gcc-task/govtech-gcc-task-backend
npm install
```

### 3. Start the backend server

```bash
npm start
```

> The backend server will be running on port 5001

### 4. Install the dependencies for the frontend

```bash
cd ../govtech-gcc-task-frontend
npm install
```

### 5. Build the frontend server

```bash
npm run build
```

### 6. Start the frontend server

```bash
npm start
```

> The frontend server will be running on port 5000
