document.addEventListener("DOMContentLoaded", function () {
    // Load JSON data
    fetch('/json/data.json') // Replace 'your_data_file.json' with the actual path to your JSON file
        .then(response => response.json())
        .then(data => {
            // Get today's day
            days=['Sunday', 'Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday']
            
            // -------------------------------------today-------------------------------
            const d = new Date();
            const today = days[d.getDay()];
            
            // Display tasks for today
            const dailyTasksElement = document.getElementById('dailyTasks');
            if (data[today]) {
                const tasks = data[today];
                const current_day = document.createElement('h3');
                current_day.textContent=`- ${today}`
                current_day.classList.add('current_day')
                const tasksList = document.createElement('ul');
                tasksList.classList.add('turns')
                for (const task in tasks) {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${task}: ${tasks[task]}`;
                    tasksList.appendChild(listItem);
                    listItem.classList.add('task')
                }

                dailyTasksElement.appendChild(current_day);
                dailyTasksElement.appendChild(tasksList);
                
            } else {
                dailyTasksElement.textContent = 'No tasks scheduled for today.';
            }
            // ---------------------------schedule----------------------------------------------------
            let schedule=document.getElementById('schedule')
            let table=document.createElement('table')
            let header=document.createElement('tr')
            let first_cell=document.createElement('th')
            first_cell.textContent=""
            schedule.appendChild(table)
            table.appendChild(header)
            header.appendChild(first_cell)
            for (tasks in data[today]){
                let heading=document.createElement('th')
                heading.innerHTML=tasks
                header.appendChild(heading)
            }
            for (let day in data){
                let row=document.createElement('tr')
                table.appendChild(row)
                let row_day = document.createElement('td')
                row_day.textContent=day
                row.appendChild(row_day)
                for (let task in data[day]) {
                    let row_data=document.createElement('td')
                    row_data.textContent=data[day][task]
                    row.appendChild(row_data)
                    if (data[day][task]== 'Pratiush'){
                        row_data.classList.add('me')
                    }
                  }
            }
            
        })
        .catch(error => {
            // Handle any errors here
            console.error(error);
          });
});
