let projects = []; 

function addProject(event) {
  event.preventDefault();
  
  let title = document.getElementById('input-project-title').value;
  let content = document.getElementById('input-project-content').value;
  let image = document.getElementById('input-project-image').files[0];

  image = URL.createObjectURL(image);

  let project = {
    title: title,
    content: content,
    image: image,
    author: 'Wanya Batirillian',
    postAt : new Date()
  }
  
  projects.push(project)

  renderProject()
}

function renderProject() {

  let projectWrapper = document.getElementById('contents');

  projectWrapper.innerHTML = ''
  
  for (let i = 0; i < projects.length; i++) {

    projectWrapper.innerHTML += `
    <div class="project-list-item">
            <div class="project-image">
              <img src="${projects[i].image}" alt="" />
            </div>
            <div class="project-content">
              <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
              </div>
              <h1>
                <a href="projects-detail.html" target="_blank"
                  >${projects[i].title}</a>
              </h1>
              <div class="detail-project-content"> ${getFullTime(projects[i].postAt)} | ${projects[i].author}
              </div>
              <p>${projects[i].content}</p>
              <div style="text-align: right; color: grey; font-size: 15px">
                ${getDistanceTime(projects[i].postAt)}
              </div>
            </div>`
                  
  }
}


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

  let date = time.getDate()
  let monthIndex = time.getMonth()
  let year = time.getFullYear()
  let hour = time.getHours()
  let minute = time.getMinutes()

  let result = `${date} ${month[monthIndex]} ${year} ${hour}:${minute} WIB`

  return result;
}


function getDistanceTime(time) {
  let blogPostAt = new Date(time);
  let currentTime = new Date()

  let distance = currentTime - blogPostAt;

  let dayDistance = Math.floor(distance / (1000 * 60 * 60 * 24))

  if(dayDistance > 0) {
    return `${dayDistance} day ago`;
  } else {
    let hourDistance = Math.floor(distance / (1000 * 60 * 60))

    if (hourDistance > 0) {
      return `${hourDistance} hours ago`;
    } else {
      let minuteDistance = Math.floor(distance / (1000 *60))

      if (minuteDistance > 0) {
        return `${minuteDistance} minute ago`;
      } else {
        let secondDistance = Math.floor(distance / (1000))
        
        return `${secondDistance} second ago`;
      }
    }
  }
}


setInterval(function() {
  renderProject()
}, 1000)

// function getFullTime(time) {
//   const date = time.getDate();
//   const monthIndex = time.getMonth();
//   const year = time.getFullYear();
//   const hours = time.getHours();
//   const minutes = time.getMinutes();

//   return `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`;
// }