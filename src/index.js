import { fromEvent } from 'rxjs';
import './styles.scss';

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

document.getElementById('app').innerHTML = `
  <div class="cu__wrapper">
    <div class="cu__boxes">
      <div class="cu__boxes__unclear"></div>
      <div class="cu__boxes__clear"></div>
    </div>
  </div>
`;

fromEvent(document, 'change').subscribe(() => {
  console.log('Ready!');
});
