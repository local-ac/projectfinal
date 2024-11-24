# ใช้ Node.js เป็น base image
FROM node:18 AS build

# ติดตั้ง bun และคัดลอกไฟล์โปรเจกต์
WORKDIR /app
RUN npm install -g bun
COPY . .

# ติดตั้ง dependencies และ build โปรเจกต์
RUN bun install
RUN bun run build

# ใช้ Stage สำหรับโปรเจกต์ที่ build เสร็จแล้ว
FROM node:18-alpine
WORKDIR /app

# คัดลอกผลลัพธ์ที่ build แล้วมาใน Stage นี้
COPY --from=build /app /app
EXPOSE 3001

# รันเซิร์ฟเวอร์ที่พอร์ต 3001
CMD ["bun", "run", "src/server.ts"]
