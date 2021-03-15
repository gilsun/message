const {hash} = window.location;

const message = decodeURIComponent(
  atob(hash.replace('#', ''))
);

if (message) {
  document
    .querySelector('#message-form')
    .classList.add('hide');

  document
    .querySelector('#message-show')
    .classList.remove('hide');

  document.querySelector(
    'h1'
  ).innerHTML = message;
}

document
  .querySelector('form')
  .addEventListener('submit', (event) => {
    event.preventDefault();

    document
      .querySelector('#message-form')
      .classList.add('hide');

    document
      .querySelector('#link-form')
      .classList.remove('hide');

    const input = document.querySelector(
      '#message-input'
    );
    const encrypted = btoa(
      encodeURIComponent(input.value)
    );
    const linkInput = document.querySelector(
      '#link-input'
    );
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select(); // 자동으로 link가 선택됨.
  });
