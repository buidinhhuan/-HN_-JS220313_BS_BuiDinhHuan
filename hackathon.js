// 1. Danh sách học viên được lưu trong localStorage với tên students
// 2. Nhập đầy đủ thông tin các trường trong form “Thông tin học viên” khi nhấn
// [10 điểm]
//  lưu lại sẽ thêm thông tin học viên vào students và được hiển thị thông tin tất cả học viên trên
// “Danh sách học viên” [25 điểm] 2. Khi nhấn delete sẽ xoá học viên trong students và hiển thị thông tin các học viên còn lại
// trên “Danh sách học viên” [10 điểm]
// 3. Khi nhấn edit, dữ liệu học viên cập nhật được hiển thị trên form “Thông tin học viên”,
//nhấn lưu lại, thực hiện cập nhật thông tin học viên trong students và hiển thị lại thông tin các học viên trên
//“Danh sách học viên” [15 điểm]
// 4. Khi nhấn vào nút sắp xếp (anpha b),
// sắp xếp học viên và hiển thị danh sách học viên đã được sắp xếp theo anpha b trên bảng “Danh sách học viên” [15 điểm]
// 5. Ở ô tìm kiếm có thế tìm kiếm học viên theo tên học viên và hiển thị kết quả ở bảng “Danh sách học viên” [15 điểm]
// 6. Thực hiện validate dữ liệu đầu vào trong các chức năng: [10 điểm]
// • Họ và tên: không được để trống
// • Email: phải nhập đúng định dạng email
// • Số điện thoại: phải nhập đúng định dạng số điện thoại di động ở Việt Nam
// • Quê quán: không được để trống
// • Giới tính: default là Nam
let students = [
  {
    id: 1,
    UseName: "rikkei",
    Email: "rikkei@gmail.com",
    telephone: "0823868888",
    Address: "hà nôi",
    gender: "nam",
  },
  {
    id: 2,
    UseName: "academy",
    Email: "academy@gmail.com",
    telephone: "0823868888",
    Address: "hà nôi",
    gender: "nữ",
  },
];

let form = document.getElementById("main-form");

function renderstudents() {
  tbody.innerHTML = "";
  for (let i = 0; i < students.length; i++) {
    tbody.innerHTML =
      tbody.innerHTML +
      `
        <tr id=${students[i].id}>
                    <th>${i + 1}</th>
                    <td>${students[i].UseName}</td>
                    <td>${students[i].Email}</td>
                    <td>${students[i].telephone}</td>
                    <td>${students[i].Address}</td>
                    <td>${students[i].gender}</td>
                    <td>
                    <button class="btn-edit" >edit</button>
                    <button  class="btn-delete">delete</button>
                    </td>
                    <td rowspan="1"></td>
         </tr>  `;
  }
}
renderstudents();
form.onsubmit = function (e) {
  e.preventDefault();
  if (
    form.UseName.value == "" ||
    form.Email.value == "" ||
    form.telephone.value == "" ||
    form.Address.value == "" ||
    form.gender.value == "gender"
  ) {
    alert("nhập chưa đủ đâu");
  } else {
    let student = {
      id: Math.floor(Math.random() * 100000000000),
      UseName: form.UseName.value,
      Email: form.Email.value,
      telephone: form.telephone.value,
      Address: form.Address.value,
      gender: form.gender.value,
    };
    students.push(student);
    alert("ban đã nhập thành công ");
    renderstudents();
  }
};

tbody.onclick = function (e) {
  if (e.target.classList.contains("btn-delete")) {
    let deleteElement = e.target.parentElement.parentElement;
    alert("nếu xoá dữ liệu sẽ bị mất vĩnh viễn");
    deleteElement.remove();
  }
}

   