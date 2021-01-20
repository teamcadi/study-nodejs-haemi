const router = require("express").Router();
const { getTodos, addTodo, removeTodo, toggleTodo } = require("../controllers/todo.controller");

//---------router 미들웨어--------------------------
router.use((req, res, next) => {
  console.log("todo 라우터 접근");
  next();
});
//--------------------------------------------------

/**
 * @description 일정 모두 조회
 * @route GET /todo/
 *
 */
router.get("/", getTodos);

/**
 * @description todo 생성
 * @route POST /todo/
 * @request @body {title, completed, date}
 */
router.post("/", addTodo);

/**
 * @description todo 삭제
 * @route DELETE /todo/:id
 */
router.delete("/:id", removeTodo);

/**
 * @description todo finish (토글동작)
 * @route PATCH /todo/ :id
 */
router.patch("/", toggleTodo);

module.exports = router;
