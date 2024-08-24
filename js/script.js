

document.querySelector('#loginButton').addEventListener('click', function() {
    document.querySelector('#loginPopup').classList.add('active');
});

document.querySelector('#closePopup').addEventListener('click', function() {
    document.querySelector('#loginPopup').classList.remove('active');
});
