# 🌟 Campus Management System

## ✨ Project Name

**Campus Management System**

---

## 📋 Requirements

- 🚀 **Backend Framework**: Spring Boot
- 🛢️ **Database**: MySQL
- 🛠️ **ORM**: Hibernate
- 📦 **Build Tool**: Maven
- ✅ **Validation**: JSR 380 (Java Bean Validation)

---

## 👥 Contributors

- **[Mayur Dehade](mailto:mayurdehade@example.com)**

---

## ⚙️ Setup

1. 📥 **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/campus-management-system.git
   ```
2. 🛠️ **Configure the database** in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/campus_db
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
   ```
3. ▶️ **Build and run the project** using your IDE or Maven:
   ```bash
   mvn spring-boot:run
   ```
4. 🧪 **Test the APIs** using Postman or any REST client.

---

## 📂 Project Structure

```
src/
├── main/
│   ├── java/
│   │   ├── com.campus/
│   │   │   ├── controller/
│   │   │   │   └── UserController.java
│   │   │   ├── entity/
│   │   │   │   └── User.java
│   │   │   ├── enums/
│   │   │   │   └── UserRoles.java
│   │   │   ├── repository/
│   │   │   │   └── UserRepository.java
│   │   │   └── services/
│   │   │       └── UserService.java
│   └── resources/
│       └── application.properties
└── test/
```

---

## 🛠️ Technologies Used

- 💻 **Backend Framework**: Spring Boot
- 🛢️ **Database**: MySQL
- 🛠️ **ORM**: Hibernate
- 📦 **Build Tool**: Maven
- ✅ **Validation**: JSR 380 (Java Bean Validation)
