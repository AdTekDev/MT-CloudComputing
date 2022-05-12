/// Thư viện
var express = require('express');
var path = require('path');
const ServerApiVersion = require('mongodb').ServerApiVersion;
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbuser01:i4x1LRZ8rDb0a0CJ@cluster0.t8lbf.mongodb.net/TruongHoc?retryWrites=true&w=majority";
const client =  new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// -- khoi dong app
var chay_app = express();

// Cấu hình: PORT
const PORT = process.env.PORT || 80;

// Biến
var solan = 0;

/// Engine EJS
chay_app.set('views', path.join( __dirname, 'view'));
chay_app.set('view engine', 'ejs');

/// Khai báo Thư mục chứa các file thấy được, cho FrontEnd
chay_app.use(express.static('public'));

// --- Tới HOME
chay_app.get("/" , xulyhome);
function xulyhome (req, res) {
    return res.send('Web HOME cua NNTu');
}

// --- Tới LOGIN
chay_app.get("/login" , xulylogin);
function xulylogin (req, res) {
    return res.send('Web LOGIN cua NNTu');
}

// --- Tới LOGIN
chay_app.get("/data" , xulydata);
async function  xulydata(req, res) {
	
	
    client.connect( async (err,db) => { 
        if (err) {
            return res.send("Error Connection !!!"); 
        }
        

        results = "NO DATA";
        try {
            const collection = client.db("TruongHoc").collection("SinhVien");
            results = await collection.find({}).toArray();
            console.log(results);
        } catch (err) {
            console.log(err);
        } finally {
            client.close();
        }

	    return res.send(results);
    });
}


// Khởi tạo ứng dụng
chay_app.listen( PORT ,
    () => {
        console.log(" OK roi !");
    }
);