# Training-ReactJS

Các bài tập liên quan đến ReactJS

1. Installation
  - Khi setup môi trường làm việc thì việc đầu tiên là chọn và cái đặt hệ điều hành thì mình chọn Ubuntu là môi trường phổ thông nhất cho mọi người, bất kì ai cũng có thể tiếp cận được. Rất dễ cài các thư viện, các phần mềm hỗ trợ việc coding, sử hữu terminal mạnh mẽ. Còn về window 1 số cái chưa được hỗ trợ, Power Shell thì không thể nào bằng được Terminal. Nếu có tài chính dư rả thì mọi ng có thể đầu tư Macbook để được sử dụng MacOS - Đây là sự lựa chọn đối với mình là hoàn hảo nhất vì nó có thể coi là sự dung hoà của hai hệ điều hành nêu ở trên.
  - Tiếp theo là đến các package bắt buộc để có thể thực hiện việc coding:
    + NodeJS: Về NodeJs mọi người nên chú ý version của nó vì có thể mỗi dự án sẽ ưu cầu 1 version NodeJs. Vậy nên nếu được thì hãy sẽ dụng NPM để cài đặt, quản lý các version của NodeJS. Hiện tại thì suggest mọi người dùng v14.19.3
    + NPM: Đây là công cụ quản lý cũng như cài đặt các thư viện Javascript (Ngoài ra còn có yarn, tuỳ project và sở thích mỗi người để lựa chọn), Để cài đặt chạy command dưới đây:
    + npm install npm@latest -g
  - IDE/Editor: Hiện tại đang có 2 IDE nổi bất nhất hiện nay dành cho các Frontend Dev là Visual Studio Code vá Webstorm. Mình đã dùng qua cả 2 và vẫn trung thành với Vscode vì gọn nhẹ, dễ customize, có nhiều extension hay ho, dễ nhìn, dễ dùng dễ tiếp cận với người mới bắt đầu. Còn Webstorm từ hệ sinh thái JetBrain thì quá tuyệt với rồi, gợi ý code rất nhanh =)), có hiển thị label cho các biến,các function, nhưng hơi khó tiệp cận với người mới vì mất tiền bản quyền cũng như giao diện phức tạp hơn. Nếu được thì mình nghĩ kết hợp cả 2 sẽ là một phương án tối ưu nhất hehe (Còn lý do tại sao thì mình nghĩ các bạn nên trải nghiệm thử rồi sẽ biết tại sao và tư đưa ra được solution cho bản thân mình).
  - Extension (Dành cho vscode):
    + Atom One Dark Theme, Material Icon Theme: đây là 2 theme mình dùng cho tương ứng cho IDE và icon của IDE. Mình thấy 2 cái theme này khá là nổi tiếng nhiều ông youtuber cũng dùng 2 cái này, ngoài ra các bọn có thể chỉnh font family và font size cho IDE để nhìn xịn sò hơn.
    + Bracket Pair Colorizer 2, indent-rainbow, TodoHighlight, Indenticator: Những extensions này giúp mình "make color" cho Vscode của mình.
    + AutoCloseTag, AutoCompleteTag, AutoRenameTag: Bộ 3 này giúp mình code các thẻ html nhanh hơn 1 cách đáng kể, 3 cái tên đều nói lên cách 3 extensions này hoạt động thế nào.
    + ESLint, Prettier: đây là bộ đôi không thể thiếu để mình có thể format theo các chuẩn code đã được đặt ra từ đầu mỗi dự án. (Nếu ai có sử dụng Typescpirt thì có thể sử dụng thêm cả TSLint).
    + Visual Studio IntelliCode, Path Intellisense, SCSS IntelliSense, Tabnine: các extension này sẽ đưa ra các gợi ý về syntax code, đường dẫn file. Đặc biệt Tabnine còn sử dụng AI để đưa ra cho mình những đoạn code phù hợp nữa. Qua việc sử dụng các extensions này thì mình cải thiện được hiệu quả công việc đến 30%.
    + Code Spell Checker: đây là một extension khá hay giúp mình soát chính tả những từ tiếng Anh đã viết. Lúc chưa sử dụng extension này mình có dính 1 case là đặt tên biến chỗ là question, chỗ khác là qyestion (do tay nhanh hơn não=)))) rồi 1 thời gian sau phát sinh ra bug , rồi kiểm tra đi kiểm tra lại thì k thấy bussiness logic sai ở đâu cả. Ngồi cả buổi toét mắt ra thì mới thấy hoá ra mình viết sai chính tả.
    + Css Peek: cũng tương tự Vue Peek thì extension này giúp mình có thể di chuyển đến file chứa class đấy 1 cách nhanh chóng hơn.
    + GitLens: đối với mình gitLens là 1 extension k thể thiếu khi sử dụng git, ngoài ra các bạn có thể sử dụng các phần mềm ở ngoài như kiểu Smart Git.
2. AutoComplete
Đây là bài tập này sẽ giúp các bạn có thể nắm bắt được cách tạo Component thế nào để có tính "reuse" cao và 1 vài kĩ thuật trong ReactJS.
<img width="1109" alt="auto complete" src="https://user-images.githubusercontent.com/47785607/190891847-5a0a198d-f86e-4d8d-9384-ef0f3b3b8c8c.png">

  - Link Design: https://www.figma.com/file/kzDfkvmAMDCXG1U3SW7KoG/AutoComplete?node-id=0%3A1
  - Thực hiện:
    + Khởi tạo UI/UX giống với link figma.
    + Tạo ra được Dropdown có thể chọn từng option.
    + Dùng API https://provinces.open-api.vn/ để có thể lấy về list thành phố.
    + Thêm chức năng search (Gọi API khi nhập text) để có thể lọc list thành phố.
3. DropZone
Mọi người sẽ phải tạo 1 component có thể upload file lên 1 hệ thống có sẵn. Qua đó sẽ giúp mọi người làm quen với những task liên quan đến file một cách dễ dàng hơn khi vào dự án thực tế.
<img width="967" alt="dropzone" src="https://user-images.githubusercontent.com/47785607/190893845-c365c9ee-7e8a-405d-bb75-24b4e82f0481.png">

  - Link Design: https://www.figma.com/file/CTbv7TfE5YiDYgJXSPrelQ/Untitled?node-id=1%3A501
  - Thực hiện:
    +  Khởi tạo UI/UX giống với link figma.
    +  Tìm hiểu service Storage của Firebase (Hoặc 1 Service tương đương).
    +  Ứng dụng vào Component để có thể upload file lên Storage.
    +  Cải tiến để có thể Validate với MAX_SIZE = 10MB, chỉ cho upload file các loại file chỉ định ( Khi lỗi cần show message lỗi).
    +  Cải tiến để có thể upload tối đa hoặc tối thiểu n file.
4. MultiForm
Trong bài này các bạn sẽ nắm bắt được cách kết hợp các component với nhau để có thể xây dựng thành một app hoàn chỉnh. Ngoài ra sẽ nắm được 1 vài concept cơ bản như Dynamic Component, Step Component.
![Step1](https://user-images.githubusercontent.com/47785607/190894629-0238488c-bbb5-41e2-b660-6dbaceafd28a.png)
![Step2](https://user-images.githubusercontent.com/47785607/190894644-3035d41e-7844-4499-aa5c-aa0292674e0b.png)
![Step3](https://user-images.githubusercontent.com/47785607/190894658-f76ce242-d593-4c45-9d7a-568afd9aae68.png)
  - Link Design: https://www.figma.com/file/6N23vLtmdvL19jHlyyMwXl/MultiForm?node-id=0%3A1
  - Thực hiện:
    + Khởi tạo UI/UX giống với link figma.
    + Có bắt validate theo từng step (Ưu cầu validate bằng tay - Không dùng thư viện).
    + Validate:
      Step 1:
        Họ tên: Required, maxLength =< 100.
        Ngày sinh: Không cho chọn quá thời gian hiện tại.
        Mô tả bản thân: maxLength =< 1000.
      Step 2:
        Tối thiểu 1 công ty. Trong 1 công ty:
        Vị trí từng làm: Required, maxLength =< 100.
        Thời gian làm việc : startDate =< endDate , Thời gian KHÔNG ĐƯỢC TRÙNG với thời gian làm ở công ty khác.
        Mô tả công việc: maxLength =< 5000.
      Step 3:
        Lý do muốn ứng tuyển vào công ty : maxLength =< 1000, required.
        Mức lương mong muốn : Phải là số, tối đa được 10 chữ số.
    + Datepicker có thể dùng thư viện hoặc sẽ tự tạo 1 component (Có thể dùng thư viện cho nhanh).
    + Có thể render form theo state hoặc JSON cho trước.
    + Build component dynamic input (Option).
    + Khi nhấn hoàn thành thì log ra đoạn body request để có thể gửi lên api.
5. Recursive component
Bài tập giúp các bạn làm quen với đệ quy, thực hiện đệ quy component, single file component.
![recursiveComponent](https://user-images.githubusercontent.com/47785607/190895017-f133941e-fd93-4189-856e-2bcbfd85cac1.png)
  - Link Design: https://www.figma.com/file/50HH6rGamqunPOLniC37PK/DragAndDrop?node-id=0%3A1
  - Thực hiện:
    + Khởi tạo UI/UX giống với link figma.
    + Thực hiện đệ quy theo sơ đồ cây.
    + Thực hiện thêm checkbox, collapse/expand.
    + Thực hiện thêm/sửa/xóa component bằng cách nhấn chuột phải, vị trí dropdown tại vị trí click chuột.
6. Redux
Bài tập này sẽ áp dụng redux cho việc quản lý global state cùng với bài tập Recursive component. 
