React ,Bun ,PostgreSQL

หลักการพัฒนา

Frontend (React) React ทำหน้าที่เป็น frontend ของโปรเจกต์ ทำให้ผู้ใช้สามารถโต้ตอบกับระบบผ่านอินเตอร์เฟซผู้ใช้ เช่น หน้า Signup, Login, และหน้าแสดงข้อมูลต่าง ๆ เช่น รายชื่อผู้ใช้หรือตารางข้อมูลจากฐานข้อมูล React จะส่ง request ผ่าน API ที่ตั้งอยู่ใน Bun เพื่อรับ-ส่งข้อมูลระหว่าง frontend และ backend
Backend (Bun) Bun ทำหน้าที่เป็น API server ที่รับ request จาก React และเชื่อมต่อกับฐานข้อมูล PostgreSQL API ที่สร้างขึ้นใน Bun จะมี endpoint ที่หลากหลาย เช่น /signup, /login, /getUsers หรือ /updateUser ซึ่งมีหน้าที่รับข้อมูลจาก React, ประมวลผลข้อมูล และส่งคำสั่งไปยังฐานข้อมูล Bun ทำงานคล้ายกับ Express.js ใน Node.js แต่ทำงานได้เร็วกว่าและเหมาะกับงานที่ต้องการประสิทธิภาพสูง
Database (PostgreSQL with Docker) PostgreSQL เป็นฐานข้อมูลที่จัดเก็บข้อมูลในโปรเจกต์ เช่น ข้อมูลผู้ใช้ ข้อมูลสินค้า หรือข้อมูลอื่น ๆ ที่เกี่ยวข้อง Docker จะช่วยในการรัน PostgreSQL บน container ทำให้สะดวกในการจัดการ, ตั้งค่า, และย้ายโปรเจกต์ไปยังสภาพแวดล้อมต่าง ๆ ได้ง่าย
![384654203-b588f9a1-0e9a-493f-9622-27d8dd7aca5c](https://github.com/user-attachments/assets/585b07d0-e5e9-4a0a-a652-8fc9b0b01006)
