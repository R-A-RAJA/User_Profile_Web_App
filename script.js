const apiUrl = 'https://randomuser.me/api?results=5';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const profiles = data.results;
        displayProfiles(profiles);
    })
    .catch(error => console.error('Error fetching data:', error));

function displayProfiles(profiles) {
    const profilesContainer = document.getElementById('profiles');
    profilesContainer.innerHTML = profiles.map((user, index) => `
        <div class="profile-card" onclick="viewProfile(${index})">
            <img src="${user.picture.large}" alt="Profile Picture">
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>${user.email}</p>
        </div>
    `).join('');
    
    sessionStorage.setItem('profiles', JSON.stringify(profiles));
}

function viewProfile(index) {
    sessionStorage.setItem('selectedProfile', index);
    window.location.href = 'profile.html';
}
