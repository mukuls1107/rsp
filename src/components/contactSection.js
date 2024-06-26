function loadContactPage() {
    // Create container div
    const container = document.createElement('div');
    container.classList.add('contact-container');

    // Create and append the h1 element
    const heading = document.createElement('h1');
    heading.textContent = 'Contact Me';
    container.appendChild(heading);

    // Create and append the paragraph element
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Feel free to reach out to me through the following platforms:';
    container.appendChild(paragraph);

    // Create and append the unordered list element
    const ul = document.createElement('ul');
    ul.id = 'contact-links';

    // Define the contact links
    const links = [
        { name: 'Twitter', url: 'https://twitter.com/mukulownsyou' },
        { name: 'GitHub', url: 'https://github.com/mukul1107' }
    ];

    // Create and append the list items
    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.name;
        a.classList.add('contact-link');
        a.target = '_blank'; // Open link in a new tab
        li.appendChild(a);
        ul.appendChild(li);
    });

    container.appendChild(ul);

    // Append the container to the body
    document.body.appendChild(container);
}

export default loadContactPage;
