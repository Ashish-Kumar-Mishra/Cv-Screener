console.log('this is index.js');
// Data is an array of objects which contains information about the candidate

const data = [
    {
        name: 'Ashish',
        age: 20,
        city: "Odisha",
        language: "C++",
        frameWork: 'Node.js',
        image: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
        name: 'Nirmal',
        age: 21,
        city: "Bombay",
        language: "C#",
        frameWork: 'jquery',
        image: "https://randomuser.me/api/portraits/men/66.jpg"
    },
    {
        name: 'Monu',
        age: 22,
        city: "Punjab",
        language: "Java",
        frameWork: 'SQl',
        image: "https://randomuser.me/api/portraits/men/65.jpg"
    },
    {
        name: 'Ajay',
        age: 21,
        city: "Delhi",
        language: "C",
        frameWork: 'Php',
        image: "https://randomuser.me/api/portraits/men/64.jpg"
    },
    {
        name: 'Anmol',
        age: 20,
        city: "Lucknow",
        language: "Python",
        frameWork: 'Dijango',
        image: "https://randomuser.me/api/portraits/men/63.jpg"
    }
]

//  cv iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
            { value: profiles[nextIndex++], done: false } :
            { done: true }
        }
    };
}

const candidates = cvIterator(data);
nextCV();

// button listener  for next button
const next = document.getElementById('next')
next.addEventListener('click', nextCV);


function nextCV() {
    const currentCandidate = candidates.next().value;


    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if(currentCandidate != undefined){

    image.innerHTML = `<img src="${currentCandidate.image}">
    <ul class="list-group">
  <li class="list-group-item">Name: ${currentCandidate.name}</li>
  <li class="list-group-item">Age:${currentCandidate.age}</li>
  <li class="list-group-item">Lives in ${currentCandidate.city}</li>
  <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
  <li class="list-group-item"> Works with ${currentCandidate.frameWork} framwork</li>
  </ul>`;
    }
    else{
        alert('End of application');
        window.location.reload();  // to reload window
    }

} 