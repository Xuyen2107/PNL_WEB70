const employeesInfo = [
   { name: "David", workingTime: 98, salary: 10 },
   { name: "Luiz", workingTime: 78, salary: 20 },
   { name: "Silva", workingTime: 165, salary: 25 },
   { name: "Santos", workingTime: 215, salary: 30 },
   { name: "Alex", workingTime: 143, salary: 28 },
];

// Câu a: Viết hàm tính tổng lương công ty phải trả trong 1 tháng

function getTotalSalaryOfCompany() {
   let sum = 0;
   employeesInfo.map((item) => {
      sum += item.workingTime * item.salary;
   });
   return sum;
}

console.log(`Total: $${getTotalSalaryOfCompany()}`);

//Cau b: Viet ham tinh luong cua 1 nhan vien bat ki trong danh sach employeesInfo

function getBonus(bonus) {
   if (bonus >= 150) {
      return 200;
   } else if (bonus >= 100 && bonus < 150) {
      return 150;
   } else if (bonus >= 50 && bonus < 100) {
      return 100;
   } else if (bonus < 50) {
      return 50;
   }
}

function getTotalSalaryOfEmployee(name) {
   const staff = employeesInfo.find((x) => x.name === name);
   if (staff) {
      const salary = staff.workingTime * staff.salary + getBonus(staff.workingTime);
      console.log(`${staff.name} salary $${salary}`);
   } else {
      console.log("Nhân viên không tồn tại");
   }
}

getTotalSalaryOfEmployee("Lenin");
getTotalSalaryOfEmployee("Alex");
getTotalSalaryOfEmployee("Luiz");
