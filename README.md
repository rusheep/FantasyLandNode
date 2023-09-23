# FanstayPark

<aside>
💡 由於是使用 Render 免費方案 ， 然後開啟時間比較久，網站每15分鐘會斷線一次

</aside>

### API連結：[https://fanstypark.onrender.com/](https://fanstypark.onrender.com/)

### Postman :在檔案裡的 public 資料夾 有個 postman.json 可以匯入 Postman

Postman Environment 設定：

```
Variable:URL
Initail value : https://fanstypark.onrender.com/api/v1
Current value：https://fanstypark.onrender.com/api/v1
```

如果想在本機使用需要新增.env檔案

.env

```json
# local 資料庫：
MONGO_URL=mongodb://admin:admin@127.0.0.1:27017
JWT_SECRET=<設定自己的參數>
JWT_LIFETIME=30d
```

### 權限：admin(所有權限) / user（一般）

```jsx
// admin 帳號密碼：
email:asher@gmail.com
password:password
```# FantasyLandNode
