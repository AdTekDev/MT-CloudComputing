

* Khai báo lại Git Heroku - app
  heroku git:remote appmt20220428go

* Push - fast-forwards:
  git push heroku  master -ff
  

******** Code sử dụng thư viện 
"io/ioutil"

STEPs:
1. Tạo thư mục views
2. Tạo tập tin home.html
3. Trong mainweb.go, thay đổi trong Hàm homeHandle  
    content, err := ioutil.ReadFile("./views/home.html")
    if err != nil {
        log.Println(err)
    }
    w.Write(content)
5. Add, Commit, Push lại lên Git và Heroku
6. Thêm about.html, contact.html
7. Push, Lauch lại App 
