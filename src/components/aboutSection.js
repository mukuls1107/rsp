function loadAboutInfo(){
    // Create main div
  

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('restaurant-about-section');

    // Create and append the h1 element
    const heading = document.createElement('h1');
    heading.textContent = 'About Our Restaurant';
    mainDiv.appendChild(heading);

    // Create and append the first paragraph element
    const firstParagraph = document.createElement('p');
    firstParagraph.textContent = 'Welcome to Gourmet Delights, where we serve the finest culinary experiences with a touch of elegance and tradition. Our restaurant has been a cornerstone of fine dining since 1998.';
    mainDiv.appendChild(firstParagraph);

    // Create and append the second paragraph element
    const secondParagraph = document.createElement('p');
    secondParagraph.textContent = 'Our chefs are masters of their craft, blending fresh ingredients with creativity to bring you dishes that are both delightful and memorable. We believe in providing not just a meal, but a dining experience that lingers in your memory.';
    mainDiv.appendChild(secondParagraph);

    // Create and append the unordered list element
    const ul = document.createElement('ul');
    ul.classList.add('restaurant-features-list');

    // Define the features
    const features = [
        'Exquisite ambiance with a modern touch',
        'Farm-to-table ingredients',
        'Award-winning chefs',
        'Exclusive wine selection',
        'Private dining and event hosting'
    ];

    // Create and append the list items
    features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        ul.appendChild(li);
    });

    mainDiv.appendChild(ul);
    

    // Append the main div to the body
   return mainDiv;
}


export default loadAboutInfo;