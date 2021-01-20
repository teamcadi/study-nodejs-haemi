const{getConn}=require('../database/pool')
const {} = 

module.exports = {
    getTodo: async (req,res,next)=>{
        let conn;
        try{
            conn = await getConn();
            const [rows] = await conn.query('select * from todo');
            res.status(200).json(rows);
            conn.release();
        }catch(getTodoErr){
            if(conn) conn.release;
            next(getTodoErr);
        }
    },
    addTodo: async (req,res,next)=>{
        let conn;
        try{
             const {title} = req.body;
             const id = todos[todos.length-1].id+1;
             const todo={ id, title, date: new Date().getDate(),
             completed:false, };
        } catch(getTodoErr){
            if(conn) conn.release;
            next(getTodoErr);
        }
    },
    removeTodo: async (req,res,next)=>{
        let conn;
        const { id} = req.params;
        try{
            conn = await getConn();
            await conn.exectue("delete from todo where id = ?", [id]);
            res.status(200).json({ success : true});
            conn.release();
          }
        catch(error){
            if(conn) conn.release;
            next(getTodoErr);
        }
    },
    modifyTodo: async (req,res,next)=>{
        let conn;
        try{
            res.status(200).json(rows);
            conn.release();
        }catch(getTodoErr){
            if(conn) conn.release;
            next(getTodoErr);
        }
    },
    isCompleted: async (req,res,next)=>{
        let conn;
        try{
            res.status(200).json(rows);
            conn.release();
        }catch(getTodoErr){
            if(conn) conn.release;
            next(getTodoErr);
        }
    },

};