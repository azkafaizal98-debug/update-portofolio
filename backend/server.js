const express = require("express");
const supabase = require("@supabase/supabase-js");
const path = require("path");

const app = express();
app.use(express.json())

const cors = require("cors")
app.use(cors())

// Serve static files
app.use('/src', express.static(path.join(__dirname, '../src')));
app.use('/items', express.static(path.join(__dirname, '../items')));


const PORT = process.env.PORT || 4000

const SUPABASE_URL = "https://haisqjwphwzaehqgpkjp.supabase.co"
const SUPABASE_SERVICE_ROLE = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhaXNxandwaHd6YWVocWdwa2pwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjUyNDAzOCwiZXhwIjoyMDc4MTAwMDM4fQ.JNWG2klBMJ2hJbSX34UB1u4tMBtryf3irmX5EX77N_U"

const db = supabase.createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE)

app.get("/", async(req , res)=>{
    // Check if request accepts HTML (browser request)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, "../src/html/index.html"));
    } else {
        const getComment = await db.from("comment").select()
        res.json({
            getComment
        })
    }
})

app.post("/", async(req, res)=>{
    const {gmail,nama,comment} = req.body
    const postComment = await db.from("comment").insert({gmail,nama,comment}).select()
    console.log("Post comment : ", postComment);

    res.json({
        postComment
    })

})

app.listen(PORT, ()=>{
    console.log("server berjalan di", PORT);
})