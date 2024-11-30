# Web Application Pokem’on
________________________________________________________________________________________________________________________________________


## React ,Bun ,PostgreSQL
---
### หลักการพัฒนา
   Frontend (React)
   
   - React ทำหน้าที่เป็น frontend ของโปรเจกต์ ทำให้ผู้ใช้สามารถโต้ตอบกับระบบผ่านอินเตอร์เฟซผู้ใช้ เช่น หน้า Signup, Login, และหน้าแสดงข้อมูลต่าง ๆ เช่น รายชื่อผู้ใช้หรือตารางข้อมูลจากฐานข้อมูลReact จะส่ง request ผ่าน API ที่ตั้งอยู่ใน Bun เพื่อรับ-ส่งข้อมูลระหว่าง frontend และ backend
               
   
   Backend (Bun)
   
   -  Bun ทำหน้าที่เป็น API server ที่รับ request จาก React และเชื่อมต่อกับฐานข้อมูล PostgreSQL API ที่สร้างขึ้นใน Bun จะมี endpoint ที่หลากหลาย เช่น /signup, /login, /getUsers หรือ /updateUser ซึ่งมีหน้าที่รับข้อมูลจาก React, ประมวลผลข้อมูล และส่งคำสั่งไปยังฐานข้อมูล Bun ทำงานคล้ายกับ Express.js ใน Node.js แต่ทำงานได้เร็วกว่าและเหมาะกับงานที่ต้องการประสิทธิภาพสูง

   
   Database (PostgreSQL with Docker)

   
   - PostgreSQL เป็นฐานข้อมูลที่จัดเก็บข้อมูลในโปรเจกต์ เช่น ข้อมูลผู้ใช้ ข้อมูลสินค้า หรือข้อมูลอื่น ๆ ที่เกี่ยวข้อง Docker จะช่วยในการรัน PostgreSQL บน container ทำให้สะดวกในการจัดการ, ตั้งค่า, และย้ายโปรเจกต์ไปยังสภาพแวดล้อมต่าง ๆ ได้ง่าย



     Real-Time Data Updates:

   -   ดึงและแสดงข้อมูลโปเกมอน โดยการใช้ useEffect ใน React ในการเรียก API

---

![image](https://github.com/user-attachments/assets/37be20bf-07b6-4751-83da-95934d73e1e7)

---
## Database


![image](https://github.com/user-attachments/assets/a3252f96-c66f-4e19-8a0b-ad06c16e45a6)

________________________________________________________________________________________________________________________________________

## API ที่สำคัญ
________________________________________________________________________________________________________________________________________
### Authentication and Authorization


   Login User

      -  post('/api/login')

      -  ใช้สำหรับผู้ใช้เข้าสู่ระบบ
      

  
   Login Admin

      -  post('/api/adminLogin')

      -  ใช้สำหรับผู้ดูแลระบบเข้าสู่ระบบ

________________________________________________________________________________________________________________________________________

### User Management

  
  Register User

      -  post('/api/signup')

      -  ใช้สำหรับลงทะเบียนผู้ใช้ใหม่
  

  
  Get User 

      -  get('/api/users')

      -  ใช้สำหรับดึงข้อมูลโปรไฟล์ของผู้ใช้ (สำหรับผู้ดูแลระบบเพื่อใช้ในการตรวจสอบ ,แก้ไข และลบ)

  
  
  Delete User  

      -  delete('/api/users/:id')

      -  ใช้สำหรับลบผู้ใช้งาน (สำหรับผู้ดูแลระบบเท่านั้น)


  
  Update User Data

      -  put('/api/users/:id')

      -  ใช้สำหรับอัปเดทข้อมูลของผู้ใช้งาน


  
  Detail Pokemon
    
      -  get('/api/pokemon')
    
      -  ใช้สำหรับดึงข้อมูลโปรเกมอน

---
      
PokeAPI เป็น OpenAPIสำหรับข้อมูลเกี่ยวกับ Pokémon ซึ่งให้ข้อมูลที่ครอบคลุมเกี่ยวกับตัวละครใน Pokémon เช่น ชื่อ, ประเภท, ความสามารถ, สถิติ, และข้อมูลอื่นๆ โดยใช้ข้อมูลจากเกมต้นฉบับ API นี้ไม่มีข้อจำกัดเรื่อง API key ทำให้สามารถนำไปใช้งานได้ฟรี

ตัวอย่างข้อมูลที่สามารถเข้าถึงได้ผ่าน PokeAPI:

   -   ข้อมูลพื้นฐานของ Pokémon แต่ละตัว: สามารถดึงข้อมูลพื้นฐานของ Pokémon เช่น ชื่อ, ID, และภาพ ได้จาก endpoint /pokemon/{id หรือชื่อ} เช่น /pokemon/pikachu เพื่อดึงข้อมูล Pikachu

   -   ประเภทของ Pokémon: ผ่าน endpoint /type/{id หรือชื่อ} จะได้ข้อมูลประเภทของ Pokémon เช่น ประเภทไฟ (Fire), น้ำ (Water), และหญ้า (Grass)

   -   ความสามารถ (Abilities): ใช้ endpoint /ability/{id หรือชื่อ} เพื่อดึงข้อมูลเกี่ยวกับความสามารถเฉพาะตัวของ Pokémon แต่ละตัว เช่น ความสามารถในการเพิ่มพลังหรือป้องกันการโจมตี

   -   การเคลื่อนไหว (Moves): ใช้ endpoint /move/{id หรือชื่อ} เพื่อนำข้อมูลเกี่ยวกับการเคลื่อนไหวต่าง ๆ เช่น ชื่อการเคลื่อนไหว, ประเภทการโจมตี, ความรุนแรง และการป้องกันของการเคลื่อนไหว

   -    การวิวัฒนาการ: ใช้ endpoint /evolution-chain/{id} เพื่อดึงข้อมูลลำดับวิวัฒนาการของ Pokémon จากตัวเริ่มต้นไปจนถึงขั้นสุดท้าย

   -   ข้อมูลสถิติ (Stats): Pokémon แต่ละตัวมีค่าสถิติพื้นฐาน เช่น ค่าพลังชีวิต (HP), พลังโจมตี (Attack), และความเร็ว (Speed) ข้อมูลนี้สามารถดึงได้จาก endpoint /pokemon/{id หรือชื่อ}

ตัวอย่าง

      GET https://pokeapi.co/api/v2/pokemon/pikachu
      GET https://pokeapi.co/api/v2/pokemon/bulbasaur
      GET https://pokeapi.co/api/v2/pokemon/lvysaur

### Directory ของโครงสร้างAPI
---

![image](https://github.com/user-attachments/assets/d13d346e-2be3-43a3-a349-bdd7f290301a)

---
### Directory ของโครงสร้าง Frontend
---

![image](https://github.com/user-attachments/assets/b51a1309-8804-452a-be5d-bb83c2cd9ecf)

________________________________________________________________________________________________________________________________________
## Database
   users
   
      -   id   SERIAL PRIMARY KEY,
      -   username   VARCHAR(255) UNIQUE NOT NULL,
      -   password   VARCHAR(255) NOT NULL,
      -   email      VARCHAR(255) NOT NULL,

   admin
   
      -   admin_id   SERIAL PRIMARY KEY,
      -   username   VARCHAR(255) UNIQUE NOT NULL,
      -   password   VARCHAR(255) NOT NULL,
      -   email      VARCHAR(255) NOT NULL,


   ส่วน Pokemon จะใช้ API จากภายนอก
   
---

## User Interface

   -    Home

   หน้า Home สามารถค้นหาโปรเกมอนที่ต้องการ หรือหากไม่ทราบชื่อโปรเกมอนสามารถ Search ชื่อและจะมีชื่อที่ใกล้เคียงขึ้นมา
   ซึ่งการช่วยในการค้นหาโปรเกมอนที่ต้องการ
   

  ![image](https://github.com/user-attachments/assets/daf658b4-d775-4a26-9b03-f7bf9273e866)

  

  - User Login


   หน้า Login สำหรับผู้ใช้งาน หากยังไม่มีชื่อผู้ใช้ และรหัสผ่านในการใช้งานให้ผู้ใช้งานทำการสมัคร หรือ Sign Up ก่อนเพื่อทำการเข้าสู่ระบบ
 

  ![image](https://github.com/user-attachments/assets/d596c25c-1887-4db9-98a1-dc75e8234ad3)


  - Sign Up
  
   หน้า Sign Up หรือหน้าสำหรับสมัครสมาชิกในการเข้าใช้งาน ใช้สำหรับสมัครสมาชิกในการเข้างาน
   
  ![image](https://github.com/user-attachments/assets/2da2f4a1-08ad-4ebc-8a4b-9155bac0fe10)
  

  - Admin Login
  
   หน้า Admin Login ใช้สำหรับเพื่อให้ผู้ดูแลระบบเข้าสู่ระบบ เพื่อจัดการกับผู้ใช้งาน management โดยที่ Admin สามารถลบ ,แก้ไขข้อมูล ของผู้ใช้งาน
   
  ![image](https://github.com/user-attachments/assets/b2d0de47-9dd9-459e-8a24-bae81b376f5d)


  - Admin Dashboard
  
    หน้า Admin Dashboard ใช้สำหรับบริหารจัดการผู้ใช้งาน management โดยที่ Admin สามารถแก้ไขข้อมูล ,ลบของผู้ใช้งาน
    
 ![image](https://github.com/user-attachments/assets/aa2e8b2d-5af0-40d8-a29b-e6a1fed5bfaf)


  - Home (Progress Bar)
  
   หน้า Home จะแสดงรายละเอียดโปรเกมอนที่ต้องการในรูปแบบ Progress Bar
   
![image](https://github.com/user-attachments/assets/daf658b4-d775-4a26-9b03-f7bf9273e866)


   - Home (Radial Chart)

   หน้า Home จะแสดงรายละเอียดโปรเกมอนที่ต้องการในรูปแบบ Radial Chart

![image](https://github.com/user-attachments/assets/6a9e6d2c-61dd-4572-b3b2-7e69d71b13f3)


   - About

   แสดงข้อมูลเกี่ยวกับชื่อวิชา รหัสนักศึกษา และอาจารย์ที่ปรึกษา

   ![image](https://github.com/user-attachments/assets/59c0e973-c688-455d-952f-0fd866854f7e)

  

  - Article

   แสดงข้อมลเกี่ยวกับ Article
  

  ![image](https://github.com/user-attachments/assets/e1627732-bf88-4edc-abef-cbdc20d64c03)
  

  - Top_Pokemon

   แสดงข้อมูล TOP จำนวน 12รายการของโปเกมอน

  ![image](https://github.com/user-attachments/assets/9f0d1acd-2337-4460-a9b9-f17a6b2593c6)



________________________________________________________________________________________________________________________________________


วิธีการ Deploy โปรเจกต์

ติดตั้ง Docker และ Docker Compose

    ดาวน์โหลดและติดตั้ง Docker:


    สำหรับ Windows: ดาวน์โหลด Docker Desktop 

    สำหรับ macOS: ดาวน์โหลด Docker Desktop 

    สำหรับ Linux: ติดตั้ง Docker ด้วยคำสั่ง:

    sudo apt-get update

    sudo apt-get install docker-ce docker-ce-cli containerd.io

    ตรวจสอบว่า Docker และ Docker Compose ถูกติดตั้งสำเร็จ:


    docker --version

    docker-compose --version



  
1.Docker Compose Configuration

    ตรวจสอบว่าโค้ดไฟล์ docker-compose.yml 

    - ตรวจสอบให้ตรงกับฐานข้อมูลที่ติดตั้ง

  ![image](https://github.com/user-attachments/assets/5644f530-8377-4233-ada3-73753b6cd45f)



2. รัน Docker Compose
รันคำสั่งต่อไปนี้ใน root directory ของโปรเจกต์:

        docker-compose up --build
  
        หรือ


        docker-compose up --build -d


3. ทดสอบระบบ
   
       เปิด Frontend ที่ http://18.139.222.122:5173/ เพื่อดู UI

        ทดสอบ API ผ่าน http://18.139.222.122:3001/api/ เช่น:

        ตรวจสอบ API:
        เชื่อมต่อฐานข้อมูล PostgreSQL ผ่านเครื่องมือ เช่น pgAdmin หรือ DBeaver:


        Host: localhost (IP Host ที่ใช้รัน)

        Port: 5432 (Port ที่ใช้)

        Username: postgres (ชื่อผู้ใช้)

        Password: ____  (รหัสผ่าน)

        Database: mydatabase (ชื่อฐานข้อมูล)



4. จัดการฐานข้อมูล

       เข้าไปสร้างชื่อฐานข้อมูลในคอนเทนเนอร์ที่มีการรัน Database 
        ใช้คำสั่งตามลำดับ

        sudo docker exec -it <ชื่อcontainer> psql -U postgres

        CREATE DATABASE admin;

        \q


5. สั่งหยุดการทำงาน
   
        หากต้องการหยุดบริการทั้งหมด:

        docker-compose down

