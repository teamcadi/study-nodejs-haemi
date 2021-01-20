const express = require("express");
const app = express();
// const morgan = require("morgan");
//
//1
app.use(express.json()); // -> (req,res,next)=>{//로직; next();}
//2
app.use(express.urlencoded({ extended: true }));
//로거 만들기
//클라이언트에서 요청이 왔을 때 응답을 어떻게 했는지 로그를 남겨서 수집함
/*  app.use((req, res, next) => {
  next();
  const date = new Date();
  const method = req.method;
  const uri = req.originalUrl;
  const ip = req.ip;
  console.log(`${method} ${uri} ${ip} ${date}`);
});
*/
// app.use(morgan("dev"));

//api 구현
app.get("/", (req, res, next) => {
  console.log("api");
  res.send("비밀데이터");
});

// 라우터 등록
app.use("/user", require("./route"));

app.listen(9001, () => {
  console.log("9001 실행중");
});
