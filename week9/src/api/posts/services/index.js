

const postService = {
    selectList : async () => {
        let conn;
        let result;
        try{
            conn = await getConn();
            await conn.query('SELECT * FROM post')
            result = {success: true, list: rows};
        }
        catch(e){
            console.error(e);
            result = e;

        }
        finally{
            if(conn) conn.release();
            return result;

        }
    },

    selectPost: async ({id}) => {
        let conn;
        let result;
        try{
            conn = await getConn();
            await conn.query('SELECT * FROM post WHERE id = ?', [id])
            result = {success: true, list: rows[0]};
        }
        catch(e){
            console.error(e);
            result = e;

        }
        finally{
            if(conn) conn.release();
            return result;

        }

    },


    insertPost: async ({title, content }) => {
        let conn;
        let result;
        try{
            conn = await getConn();
            const [rows] = await conn.execute('INSERT INTO post(title, content) VALUES(?,?)', [title, content]);
            result = {success: true};
        }
        catch(e){
            console.error(e);
            result = e;
        }
        finally{
            if(conn) conn.release();
            return result;
        }
    },

    updatePost: async ({title, content }) => {
        let conn;
        let result;
        try{
            conn = await getConn();
            const [rows] = await conn.execute('INSERT INTO post(title, content) VALUES(?,?)', [title, content]);
            result = {success: true};
        }
        catch(e){
            console.error(e);
            result = e;
        }
        finally{
            if(conn) conn.release();
            return result;
        }
    },

    deletePost: async ({title, content }) => {
        let conn;
        let result;
        try{
            conn = await getConn();
            const [rows] = await conn.execute('INSERT INTO post(title, content) VALUES(?,?)', [title, content]);
            result = {success: true};
        }
        catch(e){
            console.error(e);
            result = e;
        }
        finally{
            if(conn) conn.release();
            return result;
        }
    },


    liked: async ({title, content }) => {
        let conn;
        let result;
        try{
            conn = await getConn();
            const [rows] = await conn.execute('INSERT INTO post(title, content) VALUES(?,?)', [title, content]);
            result = {success: true};
        }
        catch(e){
            console.error(e);
            result = e;
        }
        finally{
            if(conn) conn.release();
            return result;
        }
    },
};

module.exports = postService;