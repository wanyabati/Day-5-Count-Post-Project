function getData() {
    event.preventDefault()
    console.log("berhasil submit");
    // Document Object Model // 
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    if (name == ''){
        alert('Input your name');
        return
    }
    
    if (email == '') {
        alert('Input your email');
        return
    }

    if (phone == '') {
        alert('Input your number phone');
        return
    }

    if (subject == '') {
        alert('Input your subject');
        return
    }

    if (message == '') {
        alert('Input your message');
        return
    }

    console.log('Semua form telah diisi');

    // Display Mail Software


    if (name) {
        console.log(name);
    } else {
        console.log("name kosong");
    }


    let emailReceiver= "wanyabatii@gmail.com";

    let a = document.createElement("a");
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello, my name is ${name}, ${message}, and this is my phone number${phone}, thank you!`;
    console.log(a);
    a.click();
}

