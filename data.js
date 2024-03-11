const dataInfo = `
[
    {
        "class": "news-container",
        "url": "https://loremflickr.com/100/100",
        "width": 500,
        "height": 334,
        "heading": "Lorem ipsum dolor sit amet.",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, cumque. Iusto a fugit sint eveniet repellat nam in voluptatum, perferendis laboriosam ducimus unde molestias id temporibus est numquam libero tenetur."
    },
    {
        "class": "news-container",
        "url": "https://loremflickr.com/100/100",
        "width": 500,
        "height": 334,
        "heading": "Lorem ipsum dolor sit amet.",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, cumque. Iusto a fugit sint eveniet repellat nam in voluptatum, perferendis laboriosam ducimus unde molestias id temporibus est numquam libero tenetur."
    },
    {
        "class": "news-container",
        "url": "https://loremflickr.com/100/100",
        "width": 500,
        "height": 334,
        "heading": "Lorem ipsum dolor sit amet.",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, cumque. Iusto a fugit sint eveniet repellat nam in voluptatum, perferendis laboriosam ducimus unde molestias id temporibus est numquam libero tenetur."
    }
]`;

let dataApi = [];

fetch('https://api.spacexdata.com/v3/capsules')
    .then(response => response.json())
    .then(data => {
        dataApi = data;
        console.log(dataApi);
        displayData(dataApi);
    })
    .catch(error => console.error(error));