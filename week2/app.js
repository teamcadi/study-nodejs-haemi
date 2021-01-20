const express = require("express");
const app = express();
const path = require("path");

//정적 파일을 제공하는 api
// 애플리케이션 레벨에서 미들웨어 등록 메서드
//프로필 사진 제공, 베너 이미지 제공시 사용

//상대경로 나타냄
// app.use("/public", express.static("public"));

//1
app.use(express.json()); // -> (req,res,next)=>{//로직; next();}
//2
app.use(express.urlencoded({ extended: true }));
//3
app.use("/public", express.static(path.join(__dirname, "public")));
//4
app.post("/", (req, res) => {
  const data = req.body;
  console.log(data.name);
});

app.listen(9000, () => {
  console.log("서버 실행 중");
});
