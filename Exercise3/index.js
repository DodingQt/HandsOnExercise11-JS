let numbers = [];

        function insertNumber() {
            let input = document.getElementById("numberInput");
            let value = parseInt(input.value);

            if (!isNaN(value)) {
                numbers.push(value);
                updateList();
                updateStats();
            }
            input.value = "";
        }

        function clearNumbers() {
            numbers = [];
            updateList();
            updateStats();
        }

        function updateList() {
            let list = document.getElementById("numberList");
            list.innerHTML = "";
            numbers.forEach(num => {
                let li = document.createElement("li");
                li.textContent = num;
                list.appendChild(li);
            });
        }

        function updateStats() {
            let sum = numbers.reduce((a, b) => a + b, 0);
            let highest = numbers.length ? Math.max(...numbers) : "-";
            let lowest = numbers.length ? Math.min(...numbers) : "-";

            document.getElementById("sum").textContent = sum;
            document.getElementById("highest").textContent = highest;
            document.getElementById("lowest").textContent = lowest;
        }