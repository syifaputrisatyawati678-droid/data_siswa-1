const students = [{

  }];

const tbody = document.getElementById("data-siswa");

students.forEach((student, index) => {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${index + 1}</td>
    <td>${student.nis}</td>
    <td>${student.name}</td>
    <td>${student.class_id}</td>
  `;

  tbody.appendChild(row);
});

