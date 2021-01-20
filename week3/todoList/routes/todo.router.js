const { getTodo, addTodo, removeTodo, modifyTodo, isCompleted } = require('../controllers/todo.controller');

const router = require('express').Router();

/**
 * @description 모두조회
 * @route GET/todo
 */
router.get('/', getTodo);

/**
 * @description todo 생성
 * @route POST/todo
 * @request @body {title, date}
 */
router.post('/', addTodo);

/**
 * @description todo 삭제
 * @route DELETE/todo/:id
 * @request @body {title, date}
 */
router.delete('/:id', removeTodo);

/**
 * @description todo title or date 수정
 * @route POST/todo/:id
 * @request @body {title, date}
 */
router.patch('/:id', modifyTodo);

/**
 * @description todo 완료
 * @route POST/todo/completed/:id
 * @request @body {title, date}
 */
router.patch('/completed/:id', isCompleted);

module.exports=router;