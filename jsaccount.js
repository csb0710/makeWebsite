var list = [];

function get_inform() {
    var obj = {};
    obj.id = $('#user_ID').val();
    obj.password = $('#user_PW1').val();
    obj.name = $('#user_name').val();
    var target = document.getElementById("year");
    obj.year = target.options[target.selectedIndex].value;
    target = document.getElementById("month");
    obj.month = target.options[target.selectedIndex].value;
    target = document.getElementById("day");
    obj.day = target.options[target.selectedIndex].value;
    // e =  document.getElementsByName('month');
    // obj.month = e.options[e.selectedIndex].value;
    // e =  document.getElementsByName('day');
    // obj.day = e.options[e.selectedIndex].value;
    obj.gender = $('input[name=gender]:checked').val();
    obj.email = document.getElementsByName('user_email').value;
    obj.phonenum = document.getElementsByName('user_phone').value;

    str = JSON.stringify(obj);
    alert(str);
    var temp = "회원가입 정보\n\n" + "ID : " + obj.id + "\npassword : " + obj.password + "\n이름 : " + obj.name;
    alert(temp);
    list.push(str);

}


