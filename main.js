const getElements = document.getElementById("characterList");
async function fetchRaM() {
    // [2] Handling Error 
    try {
        // [1] Fetch API
        const res = await fetch("https://rickandmortyapi.com/api/character");
        // if (!res.ok) {
        //     console.log('there are error')
        // }
        const req = await res.json();
        const data = req;
        // [3] filter
        const filteredData = data.results.filter(char => char.status === "Alive");
        // [4] only first 50
        const slicedData = filteredData.slice(0, 50);
        // [5] create li and Display Elements
        slicedData.forEach(ele => {
            const { name, image, location, species, gender } = ele;
            const li = document.createElement("li");
            const n = document.createElement('p');
            n.textContent = `Name : ${name}`;
            const i = document.createElement('img');
            i.setAttribute("src", image)
            const l = document.createElement('p');
            l.textContent = `From : ${location.name}`;
            const s = document.createElement('p');
            s.textContent = `species : ${species}`;
            const g = document.createElement('p');
            g.textContent = `Gender : ${gender}`;
            li.appendChild(i)
            li.appendChild(n)
            li.appendChild(l)
            li.appendChild(s)
            li.appendChild(g)

            // [6] Display elements in webpage
            getElements.appendChild(li)
        });
    } catch (err) {
        const handlingError = document.createElement('span');
        handlingError.textContent = `${err} , this is Error IDK why!! :)`
        getElements.appendChild(handlingError);
    }
}
fetchRaM();
