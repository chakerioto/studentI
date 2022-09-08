const studentData = [
    {
        name: 'ĐÀO TRỌNG HIỆP',
        birthDay: '16/10/1995',
        school: 'Trường ĐH Nha Trang',
        studyTime: '2013-2017',
        rank: 'Trung bình',
        identifier: '1557638',
        studentKey: '00014682',
        bookNumber: '50182',
        class: '16KTH09',
        point: [
            {
                subjectId: '1',
                subjectName: 'Tin học cơ sở',
                subjectDVHT: '2',
                subjectGrade: '6.0'
            },
            {
                subjectId: '2',
                subjectName: 'Tiếng Anh A1',
                subjectDVHT: '3',
                subjectGrade: '5.0'
            },
            {
                subjectId: '3',
                subjectName: 'Tiếng Anh A2',
                subjectDVHT: '2',
                subjectGrade: '6.0'
            },
            {
                subjectId: '4',
                subjectName: 'Đường lối CM của Đảng Cộng Sản Việt Nam',
                subjectDVHT: '2',
                subjectGrade: '7.0'
            },
            {
                subjectId: '5',
                subjectName: 'Giáo dục quốc phòng an ninh',
                subjectDVHT: '3',
                subjectGrade: '6.0'
            },
            {
                subjectId: '6',
                subjectName: 'Giáo dục thể chất',
                subjectDVHT: '2',
                subjectGrade: '6.0'
            },
            {
                subjectId: '7',
                subjectName: 'Kỹ năng mềm',
                subjectDVHT: '2',
                subjectGrade: '6.0'
            },
            {
                subjectId: '8',
                subjectName: 'Đại số tuyến tính và hình giải tích',
                subjectDVHT: '4',
                subjectGrade: '6.0'
            },
            {
                subjectId: '9',
                subjectName: 'Giải tích 1',
                subjectDVHT: '2',
                subjectGrade: '6.0'
            },
            {
                subjectId: '10',
                subjectName: 'Giải tích 2',
                subjectDVHT: '2',
                subjectGrade: '5.0'
            },
            {
                subjectId: '11',
                subjectName: 'Cơ Nhiệt',
                subjectDVHT: '3',
                subjectGrade: '5.0'
            },
            {
                subjectId: '12',
                subjectName: 'Khí lực học',
                subjectDVHT: '2',
                subjectGrade: '6.0'
            },
            {
                subjectId: '13',
                subjectName: 'Điện Quang',
                subjectDVHT: '2',
                subjectGrade: '6.0'
            },
            {
                subjectId: '14',
                subjectName: 'Thực hành vật lí đại cương',
                subjectDVHT: '2',
                subjectGrade: '5.0'
            },
            {
                subjectId: '15',
                subjectName: 'Cơ điện tử cao',
                subjectDVHT: '2',
                subjectGrade: '7.0'
            },
            {
                subjectId: '16',
                subjectName: 'Cơ điện tử cao 2',
                subjectDVHT: '2',
                subjectGrade: '6.0'
            },
            {
                subjectId: '17',
                subjectName: 'Hóa học hợp chất cao phân tử',
                subjectDVHT: '2',
                subjectGrade: '6.0'
            },
            {
                subjectId: '18',
                subjectName: 'Các phương pháp phân tích hiện đại',
                subjectDVHT: '3',
                subjectGrade: '7.0'
            },
            {
                subjectId: '19',
                subjectName: 'Cơ sở hóa sinh',
                subjectDVHT: '2',
                subjectGrade: '7.0'
            },
            {
                subjectId: '20',
                subjectName: 'Hóa kỹ thuật',
                subjectDVHT: '2',
                subjectGrade: '6.0'
            },
            {
                subjectId: '21',
                subjectName: 'Cơ sở học vật liệu',
                subjectDVHT: '2',
                subjectGrade: '8.0'
            },
            {
                subjectId: '22',
                subjectName: 'Tách chất và truyền nhiệt chuyển khối',
                subjectDVHT: '3',
                subjectGrade: '5.8'
            },
            {
                subjectId: '23',
                subjectName: 'Tư tưởng Hồ Chí Minh',
                subjectDVHT: '2',
                subjectGrade: '6.0'
            },
            {
                subjectId: '24',
                subjectName: 'Những NLCB  của chủ nghĩa Mác-Lênin',
                subjectDVHT: '2',
                subjectGrade: '5.5'
            },
            {
                subjectId: '25',
                subjectName: 'Các phương pháp phân tích công cụ',
                subjectDVHT: '2',
                subjectGrade: '6.0'
            },
            {
                subjectId: '26',
                subjectName: 'Hóa học đại cương',
                subjectDVHT: '2',
                subjectGrade: '6.0'
            },
            {
                subjectId: '27',
                subjectName: 'Điện-Quang',
                subjectDVHT: '2',
                subjectGrade: '6.0'
            },
            {
                subjectId: '28',
                subjectName: 'Xử lí khí thải',
                subjectDVHT: '2',
                subjectGrade: '5.0'
            },
            {
                subjectId: '29',
                subjectName: 'Quản lí và xử lí chất thải rắn',
                subjectDVHT: '2',
                subjectGrade: '8.0'
            },
            {
                subjectId: '30',
                subjectName: 'Hóa học hữu cơ 1',
                subjectDVHT: '2',
                subjectGrade: '6.0'
            },
            {
                subjectId: '31',
                subjectName: 'Hóa học hữu cơ 2',
                subjectDVHT: '2',
                subjectGrade: '6.5'
            },
            {
                subjectId: '32',
                subjectName: 'Hóa học phân tích',
                subjectDVHT: '3',
                subjectGrade: '7.0'
            },
            {
                subjectId: '33',
                subjectName: 'Đại số hàm nhiều biến',
                subjectDVHT: '2',
                subjectGrade: '5.3'
            },
            {
                subjectId: '34',
                subjectName: 'Vật lí lượng tử',
                subjectDVHT: '2',
                subjectGrade: '5.3'
            },
            {
                subjectId: '35',
                subjectName: 'Hóa học vô cơ 1',
                subjectDVHT: '2',
                subjectGrade: '6.0'
            },
            {
                subjectId: '36',
                subjectName: 'Hóa học vô cơ 2',
                subjectDVHT: '2',
                subjectGrade: '6.0'
            },
            {
                subjectId: '37',
                subjectName: 'Thực tập hóa học phân tích',
                subjectDVHT: '2',
                subjectGrade: '5.0'
            },
            {
                subjectId: '38',
                subjectName: 'Hóa lý 1',
                subjectDVHT: '2',
                subjectGrade: '6.0'
            },
            {
                subjectId: '39',
                subjectName: 'Hóa lý 2',
                subjectDVHT: '2',
                subjectGrade: '5.5'
            },
            {
                subjectId: '40',
                subjectName: 'Thực tập hóa học hữu cơ 1',
                subjectDVHT: '2',
                subjectGrade: '6.0'
            },
            {
                subjectId: '41',
                subjectName: 'Thực tập hóa học hữu cơ 2',
                subjectDVHT: '2',
                subjectGrade: '5.3'
            },
            {
                subjectId: '42',
                subjectName: 'Thực tập hóa lí 1',
                subjectDVHT: '2',
                subjectGrade: '5.6'
            },
            {
                subjectId: '43',
                subjectName: 'Thực tập hóa lí 2',
                subjectDVHT: '2',
                subjectGrade: '5.4'
            },
            {
                subjectId: '44',
                subjectName: 'Toán kỹ thuật',
                subjectDVHT: '2',
                subjectGrade: '6.0'
            },
            {
                subjectId: '45',
                subjectName: 'Công nghệ xử lí ô nhiễm môi trường',
                subjectDVHT: '3',
                subjectGrade: '7.0'
            },
            {
                subjectId: '46',
                subjectName: 'Thực tập hóa kỹ thuật',
                subjectDVHT: '2',
                subjectGrade: '7.0'
            },
            {
                subjectId: '47',
                subjectName: 'Thủy khí và kỹ thuật phản ứng hóa học',
                subjectDVHT: '2',
                subjectGrade: '6.0'
            },
            {
                subjectId: '48',
                subjectName: 'Thực tập hóa môi trường',
                subjectDVHT: '2',
                subjectGrade: '6.0'
            },
            {
                subjectId: '49',
                subjectName: 'Các phương pháp phân tích điện hóa',
                subjectDVHT: '3',
                subjectGrade: '6.0'
            },
            {
                subjectId: '50',
                subjectName: 'Các phương pháp phân tích quang học',
                subjectDVHT: '3',
                subjectGrade: '7.0'
            },
            {
                subjectId: '51',
                subjectName: 'Thực tập tốt nghiệp',
                subjectDVHT: '2',
                subjectGrade: '5.5'
            },
            {
                subjectId: '52',
                subjectName: 'Khóa luận tốt nghiệp',
                subjectDVHT: '5',
                subjectGrade: '6.0'
            },
        ]
    }
]


var form = document.getElementById("myForm");
console.log(form, 'form')
form.onsubmit = function (e) {
    e.preventDefault();
    var studentId = document.getElementById("lname").value;
    console.log(studentId, 'studentId');
    var pwd = document.getElementById("pwd").value;
    console.log(pwd, 'pwd');
    var results = document.getElementById('hidden-div');
    var studenInfo = document.getElementById('studenInfo');
    var myTable = document.getElementById("myTable");


    if (results.style.display == '' || results.style.display == 'none') {
        results.style.display = 'block';
    }

    let studentToFind = studentData.find(el => el.identifier === studentId && el.studentKey === pwd)
    if (studentToFind) {
        if (myTable.style.display == '' || myTable.style.display == 'none') {
            myTable.style.display = 'table';
        }

        document.getElementById('studentName').innerHTML = `Họ và tên: ${studentToFind.name}`
        document.getElementById('birthDay').innerHTML = `Ngày sinh: ${studentToFind.birthDay}`
        document.getElementById('school').innerHTML = `Tên trường: ${studentToFind.school}`
        document.getElementById('studyTime').innerHTML = `Khóa học: ${studentToFind.studyTime}`
        document.getElementById('rank').innerHTML = `Xếp loại: ${studentToFind.rank}`
        document.getElementById('identifier').innerHTML = ` Số hiệu bằng: ${studentToFind.identifier}`
        document.getElementById('bookNumber').innerHTML = `Số vào sổ: ${studentToFind.bookNumber}`
        document.getElementById('class').innerHTML = `Lớp: ${studentToFind.class}`
        studenInfo.innerHTML = ""
        myTable.innerHTML = "";
        //Add the header row.
        var rowTH = myTable.insertRow(-1);
        var headerCell1 = document.createElement("TH");
        var headerCell2 = document.createElement("TH");
        var headerCell3 = document.createElement("TH");
        headerCell1.innerHTML = `Tên học phần`;
        headerCell2.innerHTML = `DVHT`;
        headerCell3.innerHTML = `Điểm`;
        rowTH.appendChild(headerCell1);
        rowTH.appendChild(headerCell2);
        rowTH.appendChild(headerCell3);

        studentToFind.point.forEach((el) => {
            console.log(myTable)
            var row = myTable.insertRow(-1)
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = `${el.subjectName}`;
            cell2.innerHTML = `${el.subjectDVHT}`;
            cell3.innerHTML = `${el.subjectGrade}`;
        })

    } else {
        studenInfo.innerHTML = "Không tìm thấy sinh viên với số văn bằng hoặc mã sinh viên trên "
        document.getElementById('studentName').innerHTML = ``
        document.getElementById('birthDay').innerHTML = ``
        document.getElementById('school').innerHTML = ``
        document.getElementById('studyTime').innerHTML = ``
        document.getElementById('rank').innerHTML = ``
        document.getElementById('identifier').innerHTML = ``
        document.getElementById('bookNumber').innerHTML = ``
        document.getElementById('class').innerHTML = ``
        if (myTable.style.display == '' || myTable.style.display == 'table') {
            myTable.style.display = 'none';
        }
        myTable.innerHTML = "";
    }

}