document.getElementById('fetchButton').addEventListener('click', function() {
    const url = document.getElementById('urlInput').value;
    if (url) {
        const imageDiv = document.getElementById('imageDiv');
        imageDiv.innerHTML = `<img src="${url}" alt="Image">`;

        fetch('https://hube0vaq04k4ko-8000.proxy.runpod.net/camera_health', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "environment": "Outdoor",
                    "camera": "thermal",
                    "time":"Night",
                    "image": url,
                    "auto_select_camera": true
                }
            )
        })
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('resultDiv');
            resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => {
            const resultDiv = document.getElementById('resultDiv');
            resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
        });
    } else {
        alert('Please enter a URL.');
    }
});
