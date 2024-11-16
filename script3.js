let currentOperation = '';

        function showTable(operation) {
            currentOperation = operation;

            // Update the operation name in the table
            const operationNames = {
                factorial: "Factorial (While Loop)",
                sum: "Sum (Do-While Loop)",
                average: "Average (For Loop)"
            };
            document.getElementById('operationName').innerText = operationNames[operation];

            // Show the table
            document.getElementById('operationTable').classList.remove('hidden');
        }

        function performOperation() {
            const n = parseInt(document.getElementById('inputN').value);
            if (isNaN(n) || n <= 0) {
                document.getElementById('result').innerText = "Please enter a valid positive number.";
                return;
            }

            let result;
            if (currentOperation === 'factorial') {
                // Factorial using a while loop
                result = 1;
                let i = 1;
                while (i <= n) {
                    result *= i;
                    i++;
                }
            } else if (currentOperation === 'sum') {
                // Sum using a do-while loop
                result = 0;
                let j = 1;
                do {
                    result += j;
                    j++;
                } while (j <= n);
            } else if (currentOperation === 'average') {
                // Average using a for loop
                let sum = 0;
                for (let k = 1; k <= n; k++) {
                    sum += k;
                }
                result = sum / n;
            }

            // Display the result
            document.getElementById('result').innerText = result;
        }