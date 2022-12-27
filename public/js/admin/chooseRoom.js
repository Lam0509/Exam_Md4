const chooseRoom = value => {
    axios.get('/admin/employees/search/room', {
        params: {
            roomId: value
        }
    }).then(res => {
        let data = res.data;
        let html = '';
        data.forEach((employee, index) => {
            html += `<tr>`;
            html += `<td>${index+1}</td>`;
            html += `<td>${employee.code}</td>`;
            html += `<td>${employee.name}</td>`;
            html += `<td>${employee.age}</td>`;
            html += `<td>${employee.name}</td>`;
            html += `<td>${employee.room.name}</td>`;
            html += `<td>
                          <a onclick="return confirm('Do you want to delete?')"
                                               href="/admin/employees/delete/${employee._id}" class="btn btn-danger">Delete</a>
                          <a href="/admin/employees/update/${employee._id}"
                                               class="btn btn-primary">Update</a>
                     </td>`;
        })
        document.getElementById('list-employees').innerHTML = html;
    })
}