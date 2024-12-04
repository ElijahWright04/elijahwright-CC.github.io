// Array containing the adventure information
const adventures = [
    {
        adventurename: "The Gunks",
        adventuredate: "September 14, 2024",
        adventurephoto: "gunks.png",
        customername: "Frank",
        customerquote: "Whoa",
        excurstionstmt: "Epic trip",
        descriptionfile: "Finest climbing in southern New York. Enjoy the New Paltz area - history and local shops."
    },
    {
        adventurename: "New River Gorge",
        adventuredate: "August 14, 2024",
        adventurephoto: "newriver.png",
        customername: "Jon",
        customerquote: "Righteous",
        excurstionstmt: "Wild and Wonderful",
        descriptionfile: "Southern West Virginia haven for white water rafters and climbers. Wide array of bolted sport climbs."
    },
    {
        adventurename: "Red River Gorge",
        adventuredate: "June 14, 2024",
        adventurephoto: "rrg.png",
        customername: "Marie",
        customerquote: "Fantastic",
        excurstionstmt: "Beautiful trip",
        descriptionfile: "Premier sport climbing area in eastern Kentucky."
    },
    {
        adventurename: "Seneca Rocks",
        adventuredate: "July 14, 2024",
        adventurephoto: "seneca.png",
        customername: "Denver",
        customerquote: "Amazing",
        excurstionstmt: "Very cool",
        descriptionfile: "Seneca Rocks provides climbers a wide array of sport and traditional climbs."
    }
];

// Get the container where the images will be displayed
const container = document.getElementById("adventure-images-container");

// Loop through the adventures array and dynamically create image elements with adventure info
adventures.forEach(adventure => {
    const col = document.createElement("div");
    col.classList.add("col-md-3", "mb-4");

    const teamMember = document.createElement("div");
    teamMember.classList.add("team-member");

    const img = document.createElement("img");
    img.src = adventure.adventurephoto;
    img.alt = adventure.adventurename;
    img.classList.add("img-fluid", "rounded-circle");

    const h4 = document.createElement("h4");
    h4.textContent = adventure.adventurename;

    const date = document.createElement("p");
    date.textContent = `Date: ${adventure.adventuredate}`;

    const customer = document.createElement("p");
    customer.textContent = `Customer: ${adventure.customername}`;

    const quote = document.createElement("blockquote");
    quote.textContent = `"${adventure.customerquote}"`;

    const description = document.createElement("p");
    description.textContent = adventure.descriptionfile;

    // Append all elements to the container
    teamMember.appendChild(img);
    teamMember.appendChild(h4);
    teamMember.appendChild(date);
    teamMember.appendChild(customer);
    teamMember.appendChild(quote);
    teamMember.appendChild(description);
    col.appendChild(teamMember);
    container.appendChild(col);
});

