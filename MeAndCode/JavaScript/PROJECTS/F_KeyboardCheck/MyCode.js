const insert = document.getElementById('insert')

// fires whenever a key is pressed down
window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div class='color'>
            <table>
                <tr>
                    <th>Key</th>
                    <th>KeyCode</th>
                    <th>Code</th>
                </tr>
                <tr>

                    <!-- Display the key pressed -->
                    <!-- If the key is a space, display 'Space', otherwise display the key itself -->
                    <th>${e.key === ' ' ? 'Space' : e.key}</th>
                    <th>${e.keyCode}</th>
                    <th>${e.code}</th>
                </tr>
            </table>
        </div>  
    `;
});