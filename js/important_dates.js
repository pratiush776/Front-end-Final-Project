document.addEventListener("DOMContentLoaded", function () {
    fetch('/json/important_dates.json') // Replace 'your_data_file.json' with the actual path to your JSON file
            .then(response => response.json())
            .then(data => {
                let important_dates=document.getElementById('important_dates')
                for (let item in data) {
                    let section=document.createElement('div')
                    important_dates.appendChild(section)
                    let title=document.createElement('h3')
                    title.textContent=`${item} :`
                    section.appendChild(title)
                    for (element in data[item]){
                        let itm = document.createElement('h4')
                        itm.innerText=`${element} : ${data[item][element]}`
                        section.appendChild(itm)
                        itm.style.paddingLeft="2em"
                    }
                }
            })
            .catch(error => {
                // Handle any errors here
                console.error(error);
            });
});
