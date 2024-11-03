const profiles = JSON.parse(sessionStorage.getItem('profiles'));
const profileIndex = sessionStorage.getItem('selectedProfile');
const profile = profiles[profileIndex];

document.getElementById('profile-details').innerHTML = `
    <img src="${profile.picture.large}" alt="Profile Picture">
    <h3>${profile.name.first} ${profile.name.last}</h3>
    <p>Email: ${profile.email}</p>
    <p>Phone: ${profile.phone}</p>
    <p>Location: ${profile.location.city}, ${profile.location.state}, ${profile.location.country}</p>
`;
