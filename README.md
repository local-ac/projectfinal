# Web Application Pokem’on
________________________________________________________________________________________________________________________________________
![image](https://github.com/user-attachments/assets/37be20bf-07b6-4751-83da-95934d73e1e7)

---

## React ,Bun ,PostgreSQL
---
### หลักการพัฒนา
   Frontend (React)


   ReactDOM  DOM (Document Object Model)

   - ReactDOM คือ ชุดของ API ที่ใช้สำหรับการทำงานร่วมกับ DOM (Document Object Model) ในเว็บเบราว์เซอร์ โดยเฉพาะใน React ซึ่งเป็น JavaScript library สำหรับการสร้าง user interfaces (UI) การใช้ ReactDOM จะช่วยให้สามารถแสดงผลของ React components ไปยัง DOM ของเว็บเพจ

        - ReactDOM.render(): ฟังก์ชันนี้ถูกใช้สำหรับเรนเดอร์ (render) หรือแสดงผลของ React component ไปยัง DOM ที่กำหนด ตัวอย่างเช่น:
     

              ReactDOM.render(<App />, document.getElementById('root'));

        - App คือ React component ที่ต้องการแสดงผล และ document.getElementById('root') คือ element ที่จะเป็น container สำหรับ component ที่เรนเดอร์

        - ReactDOM.hydrate(): ใช้สำหรับการเรนเดอร์ React components ในเว็บเพจที่มีการ render หน้าไว้แล้วจากฝั่งเซิร์ฟเวอร์ (Server-Side Rendering หรือ SSR) เพื่อให้ React เข้ามาจัดการกับ UI แบบ client-side

        - ReactDOM.createRoot(): ฟังก์ชันนี้ใช้เพื่อสร้าง "root" สำหรับการทำงานในโหมด concurrent (การทำงานหลายอย่างพร้อมกัน) ซึ่งทำให้การ render เป็นไปอย่างมีประสิทธิภาพ:


              const root = ReactDOM.createRoot(document.getElementById('root'));
              root.render(<App />);


Express

   - web application framework สำหรับ Node.js ที่ใช้ในการสร้างแอปพลิเคชันบนเว็บ โดยมีจุดมุ่งหมายในการทำให้การพัฒนาเว็บแอปพลิเคชันและ API ง่ายขึ้น ด้วยการให้เครื่องมือและฟังก์ชันที่ช่วยในการจัดการ routing, middleware, และการจัดการคำขอ (requests) และการตอบกลับ (responses) ในเว็บแอปพลิเคชัน
     
        - Routing: Express ช่วยให้สามารถจัดการกับเส้นทาง (routes) ของ HTTP requests เช่น GET, POST, PUT, DELETE ได้อย่างง่ายดาย
          
                app.get('/', (req, res) => {
                    res.send('Hello, World!');
                 });
          
     - Middleware: Express ใช้ middleware ในการประมวลผลคำขอก่อนหรือหลังที่คำขอจะถึง route handler ช่วยให้สามารถทำงานต่างๆ เช่น การตรวจสอบสิทธิ์, การแปลงข้อมูล, หรือการจัดการ error 
          
                app.use((req, res, next) => {
                   console.log('Request received!');
                   next(); // ให้ request ไปยัง middleware หรือ route ถัดไป
                });
       
       - Handling HTTP Requests and Responses: Express ทำให้การรับและตอบคำขอในรูปแบบต่างๆ เช่น JSON, HTML, หรือไฟล์ต่างๆ 
          
                app.get('/json', (req, res) => {
                   res.json({ message: 'Hello, World!' });
                });
         
      - Static Files: Express สามารถให้บริการไฟล์ static เช่น รูปภาพ, CSS, หรือ JavaScript 

              app.use(express.static('public'));
   - React ทำหน้าที่เป็น frontend ของโปรเจกต์ ทำให้ผู้ใช้สามารถโต้ตอบกับระบบผ่านอินเตอร์เฟซผู้ใช้ เช่น หน้า Signup, Login, และหน้าแสดงข้อมูลต่าง ๆ เช่น รายชื่อผู้ใช้หรือตารางข้อมูลจากฐานข้อมูลReact จะส่ง request ผ่าน API ที่ตั้งอยู่ใน Bun เพื่อรับ-ส่งข้อมูลระหว่าง frontend และ backend
               
   
   Backend (Bun)
   
   -  Bun ทำหน้าที่เป็น API server ที่รับ request จาก React และเชื่อมต่อกับฐานข้อมูล PostgreSQL API ที่สร้างขึ้นใน Bun จะมี endpoint ที่หลากหลาย เช่น /signup, /login, /getUsers หรือ /updateUser ซึ่งมีหน้าที่รับข้อมูลจาก React, ประมวลผลข้อมูล และส่งคำสั่งไปยังฐานข้อมูล Bun ทำงานคล้ายกับ Express.js ใน Node.js แต่ทำงานได้เร็วกว่าและเหมาะกับงานที่ต้องการประสิทธิภาพสูง

   
   Database (PostgreSQL with Docker)

   
   - PostgreSQL เป็นฐานข้อมูลที่จัดเก็บข้อมูลในโปรเจกต์ เช่น ข้อมูลผู้ใช้ ข้อมูลสินค้า หรือข้อมูลอื่น ๆ ที่เกี่ยวข้อง Docker จะช่วยในการรัน PostgreSQL บน container ทำให้สะดวกในการจัดการ, ตั้งค่า, และย้ายโปรเจกต์ไปยังสภาพแวดล้อมต่าง ๆ ได้ง่าย




   Real-Time Data Updates:

   - ดึงและแสดงข้อมูลโปเกมอน โดยการใช้ useEffect ใน React ในการเรียก API


   



---


## Database


![image](https://github.com/user-attachments/assets/a3252f96-c66f-4e19-8a0b-ad06c16e45a6)

________________________________________________________________________________________________________________________________________

## API ที่สำคัญ
________________________________________________________________________________________________________________________________________

1. PokemonAPI

   - เป็น OpenAPIสำหรับข้อมูลเกี่ยวกับ Pokémon ซึ่งให้ข้อมูลที่ครอบคลุมเกี่ยวกับตัวละครใน Pokémon เช่น ชื่อ, ประเภท, ความสามารถ, สถิติ, และข้อมูลอื่นๆ โดยใช้ข้อมูลจากเกมต้นฉบับ API นี้ไม่มีข้อจำกัดเรื่อง API key ทำให้สามารถนำไปใช้งานได้ฟรี

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


   - การใช้ Pokémon API:

      - การเรียก API: เมื่อเรียก API จาก URL เช่น https://pokeapi.co/api/v2/pokemon/1/, คุณจะได้รับข้อมูลในรูปแบบ JSON เกี่ยวกับ Pokémon ตัวนั้น ตัวอย่างของข้อมูลที่ได้รับ:

            {
              "id": 1,
              "name": "bulbasaur",
              "height": 7,
              "weight": 69,
              "types": [
             {
               "type": {
              "name": "grass"
            }
             },
             {
               "type": {
               "name": "poison"
            }
             }
              ],
                 "abilities": [
                {
                  "ability": {
                 "name": "overgrow"
               }
             }
            ]
            }

     - การดึงข้อมูล: คุณสามารถดึงข้อมูลเกี่ยวกับ Pokémon ทั้งหมดหรือบางส่วนตามที่คุณต้องการ เช่น การดึงข้อมูลของ Pokémon ตามชนิด หรือการดึงข้อมูลของท่าโจมตี
    
     - การใช้งาน: สามารถนำข้อมูลจาก API นี้ไปใช้ในโปรเจกต์ต่างๆ เช่น เกม, เว็บแอป, แอปพลิเคชันมือถือ หรือโปรเจกต์อื่นๆ ที่ต้องการข้อมูลเกี่ยวกับ Pokémon

   - การใช้ Pokémon API ใน JavaScript:

            fetch('https://pokeapi.co/api/v2/pokemon/1/')
              .then(response => response.json())
              .then(data => {
                   console.log(data);
                   // แสดงข้อมูลของ Bulbasaur
              })
              .catch(error => console.log('Error:', error));



###  Local Postgresql via Docker Authentication and Authorization


   Login User

      -  post('/api/login')

      -  ใช้สำหรับผู้ใช้เข้าสู่ระบบ

      app.post('/api/login', async (req, res) => {
        const { username, password } = req.body;
        try {
             const authResult = await authenticateUser(username, password);
               if (authResult.authenticated) {
         res.json({ success: true, user: authResult.user });
       } else {
         res.status(401).json({ success: false, message: 'Invalid credentials' });
       }
     } catch (error) {
       res.status(500).json({ error: 'Error authenticating user' });
     }
    });

    เส้นทาง API:

   -   กำหนดไว้ที่ /api/login และเป็น HTTP POST methodใช้สำหรับรับข้อมูลล็อกอิน (username และ password) จากผู้ใช้ผ่าน req.body
   -   การดึงข้อมูล:ดึงค่า username และ password จากคำขอ (request)
   -   การตรวจสอบข้อมูล: ใช้ฟังก์ชัน authenticateUser เพื่อตรวจสอบข้อมูลผู้ใช้และรหัสผ่านฟังก์ชันนี้ส่งคืนผลลัพธ์ในรูปแบบของอ็อบเจ็กต์ที่มีสถานะ authenticated และข้อมูลผู้ใช้ (user)
   -   การตอบกลับ (Response): ถ้าการตรวจสอบสำเร็จ (authResult.authenticated เป็น true) จะตอบกลับด้วย JSON ที่มี success: true และส่งข้อมูลผู้ใช้กลับไป ถ้าการตรวจสอบล้มเหลว (authResult.authenticated เป็น false) จะตอบกลับด้วยสถานะ HTTP 401 และข้อความว่า Invalid credentials ถ้าเกิดข้อผิดพลาดในกระบวนการ จะส่งกลับด้วยสถานะ HTTP 500 และข้อความว่า Error authenticating user

   -   กรณีการตรวจสอบข้อมูลสำเร็จ

     { 
        "success": true,
        "user": { 
          "id": 1,
          "username": "user123", 
          "email": "user123@example.com"
        }
      }

   -   กรณีการตรวจสอบข้อมูลล้มเหลว

      { 
        "success": false,
        "message": "Invalid credentials" 
      }



  
   Login Admin

      -  post('/api/adminLogin')

      -  ใช้สำหรับผู้ดูแลระบบเข้าสู่ระบบ

      app.post('/api/adminLogin', async (req, res) => {
        const { username, password } = req.body;
        try {
          const authResult = await authenticateAdmin(username, password);
          if (authResult.authenticated) {
         res.json({ success: true, user: authResult.user });
       } else {
         res.status(401).json({ success: false, message: 'Invalid credentials' });
       }
        } catch (error) {
       res.status(500).json({ error: 'Error authenticating admin' });
        }
      });

   -   รับคำขอ POST ที่ /api/adminLogin, ระบบจะดึงข้อมูล username และ password จาก req.body. จากนั้นจะเรียกใช้ฟังก์ชัน authenticateAdmin เพื่อทำการตรวจสอบชื่อผู้ใช้และรหัสผ่าน.
   -   ถ้าการตรวจสอบสำเร็จ (authResult.authenticated เป็น true), ระบบจะส่งผลลัพธ์กลับมาพร้อมข้อมูลผู้ใช้ (user).
   -   ถ้าการตรวจสอบล้มเหลว, ระบบจะส่งสถานะ 401 (Unauthorized) พร้อมข้อความว่า "Invalid credentials".
   -   ถ้ามีข้อผิดพลาดเกิดขึ้นระหว่างการตรวจสอบ (เช่นการเชื่อมต่อกับฐานข้อมูลล้มเหลว), ระบบจะส่งสถานะ 500 (Internal Server Error) พร้อมข้อความว่า "Error authenticating admin".

   -   กรณีการตรวจสอบข้อมูลสำเร็จ
     
     { 
        "success": true,
         "user": { 
          "id": 1,
          "username": "admin", 
          "email": "admin@example.com"
        }
      }
      
   -   กรณีการตรวจสอบข้อมูลล้มเหลว


      { 
        "success": false,
        "message": "Invalid credentials" 
      }

________________________________________________________________________________________________________________________________________

### Local Postgresql via Docker User Management

  
  Register User

      -  post('/api/signup')

      -  ใช้สำหรับลงทะเบียนผู้ใช้ใหม่
      
        app.post('/api/signup', async (req, res) => {
         const { username, password, email, phone} = req.body;
        try {
          const newUser = await registerUser(username, password, email, phone);
          res.status(201).json({ success: true, user: newUser });
        } catch (error) {
          res.status(500).json({ error: 'Error registering user' });
        }
         });


   -   รับคำขอ POST ที่ /api/signup, ระบบจะดึงข้อมูล username, password, email, และ phone จาก req.body.
   -   จากนั้นจะเรียกใช้ฟังก์ชัน registerUser เพื่อทำการลงทะเบียนผู้ใช้ใหม่ในระบบ.
   -   ถ้าการลงทะเบียนสำเร็จ, ระบบจะส่งผลลัพธ์พร้อมสถานะ 201 (Created) และข้อมูลของผู้ใช้ (newUser).
   -   ถ้ามีข้อผิดพลาดเกิดขึ้นระหว่างการลงทะเบียน (เช่นการเชื่อมต่อกับฐานข้อมูลล้มเหลว), ระบบจะส่งสถานะ 500 (Internal Server Error) พร้อมข้อความว่า "Error registering user".


   -   กรณีการลงทะเบียนผู้ใช้ใหม่สำเร็จ

     { 
        "success": true,
        "user": { 
          "id": 1,
          "username": "newUser123", 
          "email": "newuser123@example.com",
          "phone": "1234567890"
      }
      }

   -   กรณีเกิดข้อผิดพลาดในการลงทะเบียน

      { 
        "error": "Error registering user" 
      }   

  Get User 

      -  get('/api/users')

      -  ใช้สำหรับดึงข้อมูลโปรไฟล์ของผู้ใช้ (สำหรับผู้ดูแลระบบเพื่อใช้ในการตรวจสอบ ,แก้ไข และลบ)

        app.get('/api/users', async (req, res) => {
           try {
          const users = await getUsers();
          res.json(users);
           } catch (error) {
             res.status(500).send('Error fetching users');
           }

   -   รับคำขอ GET ที่ /api/users, ระบบจะเรียกใช้ฟังก์ชัน getUsers เพื่อดึงข้อมูลผู้ใช้จากฐานข้อมูลหรือแหล่งข้อมูลที่เกี่ยวข้อง.
   -   ถ้าการดึงข้อมูลสำเร็จ, ระบบจะส่งผลลัพธ์ข้อมูลผู้ใช้ทั้งหมดในรูปแบบ JSON กลับไปยังผู้ขอ.
   -   ถ้ามีข้อผิดพลาดเกิดขึ้นระหว่างการดึงข้อมูล (เช่นฐานข้อมูลไม่ตอบสนอง), ระบบจะส่งสถานะ 500 (Internal Server Error) พร้อมข้อความว่า "Error fetching users".

  
  
   -    กรณีการดึงข้อมูลผู้ใช้สำเร็จ

      [
        {
          "id": 1,
          "username": "user1",
          "email": "user1@example.com",
          "phone": "1234567890"
        },
     {
          "id": 2,
          "username": "user2",
          "email": "user2@example.com",
          "phone": "0987654321"
      }
      ]

   -   กรณีเกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้

     "Error fetching users"


  
  Delete User  

      -  delete('/api/users/:id')

      -  ใช้สำหรับลบผู้ใช้งาน (สำหรับผู้ดูแลระบบเท่านั้น)

         app.put('/api/users/:id', async (req, res) => {
           try {
          const userId = parseInt(req.params.id, 10);
          const { username, password, email, phone} = req.body;
          await updateUser(userId, username, password, email, phone);
          res.json({ success: true });
           } catch (error) {
          res.status(500).json({ error: 'Error updating user' });
        }
      });

     

   -   กำหนดไว้ที่ /api/users/:id และใช้ HTTP PUT method
   -   รองรับการระบุ id ของผู้ใช้ใน URL (ผ่าน req.params.id) เพื่อเจาะจงผู้ใช้งานที่จะอัปเดต
   -   การดึงข้อมูล:ดึง id ของผู้ใช้จาก URL และแปลงเป็นจำนวนเต็ม (parseInt) ดึงข้อมูลใหม่ เช่น username, password, email, และ phone จากคำขอ (req.body)
   -   การอัปเดตข้อมูล:  เรียกฟังก์ชัน updateUser พร้อมส่ง userId และข้อมูลใหม่เพื่ออัปเดตผู้ใช้ในฐานข้อมูล
   -   การตอบกลับ (Response):หากการอัปเดตสำเร็จ จะส่ง JSON ที่มี success: true กลับไป หากเกิดข้อผิดพลาด จะตอบกลับด้วยสถานะ HTTP 500 และข้อความว่า Error updating user

   -   กรณีอัปเดตสำเร็จ

      {
           "success": true
      }

   -   กรณีเกิดข้อผิดพลาด

     {
           "error": "Error updating user"
     }

  
  Update User Data

      -  put('/api/users/:id')

      -  ใช้สำหรับอัปเดทข้อมูลของผู้ใช้งาน

      app.delete('/api/users/:id', async (req, res) => {
         try {
          const userId = parseInt(req.params.id, 10);
          await deleteUser(userId);
          res.json({ success: true });
        } catch (error) {
          res.status(500).json({ error: 'Error deleting user' });
        }
      });

   -   รับคำขอ DELETE ที่ /api/users/:id, ระบบจะดึง id ของผู้ใช้จาก req.params.id และแปลงเป็นจำนวนเต็ม (ใช้ parseInt).
   -   จากนั้นจะเรียกใช้ฟังก์ชัน deleteUser เพื่อลบผู้ใช้ที่มี id ดังกล่าว.
   -   ถ้าการลบผู้ใช้สำเร็จ, ระบบจะส่งผลลัพธ์ JSON ที่มี success: true กลับไป.
   -   ถ้ามีข้อผิดพลาดเกิดขึ้นระหว่างการลบ (เช่นฐานข้อมูลไม่ตอบสนอง), ระบบจะส่งสถานะ 500 (Internal Server Error) พร้อมข้อความว่า "Error deleting user".

   -   กรณีลบผู้ใช้สำเร็จ

            { "success": true }

   -   กรณีเกิดข้อผิดพลาด

           { "error": "Error deleting user" }
     

---
      


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

