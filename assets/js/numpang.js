let blogs = [] // Variable Global

function addBlog() {
    // Get data form
    let title = document.getElementById('input-blog-title').value;
    let content = document.getElementById('input-blog-content').value;
    let image = document.getElementById('input-blog-image').files[0];

    image = URL.createObjectURL(image)

    // Validation value
    // ....

    // Grouping by Object
    let blog = {
        title: title,
        content: content,
        image: image,
        author: 'Jody Septiawan',
        postAt: new Date()
    }

    // Store to Array
    blogs.push(blog)

    renderBlog()
}

function renderBlog() {

    let blogWrapper = document.getElementById('contents');

    blogWrapper.innerHTML = ''


    for (let i = 0; i < blogs.length; i++) {

        blogWrapper.innerHTML += ` 
        <div class="blog-list-item">
            <div class="blog-image">
            <img src="${blogs[i].image}" alt="" />
            </div>
            <div class="blog-content">
            <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
            </div>
            <h1>
                <a href="blog-detail.html" target="_blank"
                >${blogs[i].title}</a
                >
            </h1>
            <div class="detail-blog-content">
            ${getFullTime(blogs[i].postAt)} | ${blogs[i].author}
            </div>
            <p>${blogs[i].content}</p>
            <div style="text-align: right; color: grey; font-size: 15px">
                ${getDistanceTime(blogs[i].postAt)}
            </div>
            </div>
        </div>`
    }
}

// 1. Convert Format Time ✅
// 2. Count Duration


function getFullTime(time) {

    let month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    // tanggal => getDate()
    // bulan => getMonth()
    // tahun => getFullYear()
    // jam => getHours()
    // menit => getMinutes()

    let date = time.getDate()
    let monthIndex = time.getMonth()
    let year = time.getFullYear()
    let hour = time.getHours()
    let minute = time.getMinutes()

    let result = `${date} ${month[monthIndex]} ${year} ${hour}:${minute} WIB`

    // console.log(time);
    // console.log(result);

    return result;
}

// 1. Hari = milisecondInSecond * secondsInMinute * minuteInHour * hoursInDay
// 2. jam = milisecondInSecond * secondsInMinute * minuteInHour
// 3. menit = milisecondInSecond * secondsInMinute
// 4. detik = milisecondInSecond

function getDistanceTime(time) {
    let blogPostAt = new Date(time); // Waktu Blog di post
    let currentTime = new Date() // Waktu saat ini

    let distance = currentTime - blogPostAt; // milisecond

    // Convert to Day
    let dayDistance = Math.floor(distance / (1000 * 60 * 60 * 24))

    if(dayDistance > 0) {
        return `${dayDistance} day ago`;
    } else {
        // Convert to Hour
        let hourDistance = Math.floor(distance / (1000 * 60 * 60))

        if(hourDistance > 0) {
            return `${hourDistance} hours ago`;
        } else {
            // Convert to Minute
            let minuteDistance = Math.floor(distance / (1000 * 60))

            if (minuteDistance > 0) {
                return `${minuteDistance} minute ago`;
            } else {
                // Convert to Second
                let secondDistance = Math.floor(distance / (1000))

                return `${secondDistance} second ago`;
            }
        }

    }
}

// Eksekusi code selama interval (second,minute,etc) yang ditentukan
// #1

setInterval(function() {
    renderBlog()
}, 1000)

// #2
// setInterval(intervalFunction, 1000)

// function intervalFunction() {
//     renderBlog()
// }

// Numpang anjay
// const distance = new Date() - new Date(time);

//   // Convert to day
//   const miliseconds = 1000;
//   const secondsInMinute = 3600; //Second in 1 minute
//   const hoursInDay = 23;
//   const dayDistance = distance / (miliseconds * secondsInMinute * hoursInDay);

//   if (dayDistance >= 1) {
//     return Math.floor(dayDistance) + ' day ago';
//   } else {
//     // Convert to hour
//     const hourDistance = Math.floor(distance / (1000 * 60 * 60));
//     if (hourDistance > 0) {
//       return hourDistance + ' hour ago';
//     } else {
//       // Convert to minute
//       const minuteDistance = Math.floor(distance / (1000 * 60));
//       return minuteDistance + ' minute ago';
//     }
//   }