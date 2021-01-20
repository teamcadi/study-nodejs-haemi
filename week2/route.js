const { countReset } = require("console");

const router = require("express").Router();

//더미데이터,가상 DB
const user = { id: "1", name: "해미", password: "1234", nickname: "ham" };

const users = [
  { id: "1", name: "해미", password: "1234", nickname: "ham" },
  { id: "2", name: "채은", password: "1234", nickname: "ham" },
  { id: "3", name: "태호", password: "1234", nickname: "ham" },
  { id: "4", name: "태영", password: "1234", nickname: "ham" },
  { id: "5", name: "태우", password: "1234", nickname: "ham" },
];
/**
 * @description 유저조회
 * @route GET/
 */
router.get("/", (req, res, next) => {
  const members = users;
  res.status(200).json(members);
});

/**
 * @description 유저가입
 * @route POST/
 * @request @body {name,password, nickname}
 */
router.post("/", function (req, res, next) {
  const { name, password, nickname } = req.body;
  const lastId = users[users.length - 1].id;
  const userId = Number(lastId) + 1;
  const user = { id: userId.toString(), name, password, nickname };
  users.push(user);
  res.status(201).json({ success: true, message: "가입성공" });
});

// router.delete("/:id", function (req, res, next) {});

module.exports = router;
