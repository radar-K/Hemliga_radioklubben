function fetchData() {
    fetch("https://api.sr.se/api/v2/channels/?format=json")
        .then(response => response.json())                    
        .then(data => {                                       
            data.channels.forEach((channel) => {
                const channelDiv = document.createElement("div");
                channelDiv.className = "channel";                                  
                channelDiv.style.backgroundColor = "#" + channel.color; 
  
                // Skapar en container för innehållet
                const contentDiv = document.createElement("div");
                contentDiv.className = "channel-content";
  
                // Skapar en div för ljudspelaren
                const audioDiv = document.createElement("div");
                audioDiv.className = "audio-container";
  
                // Lägger till HTML-innehåll till innehållsdelen (bild, namn och tagline)
                contentDiv.innerHTML = `
                    <img src="${channel.image}" alt="${channel.name}">
                    <h2>${channel.name}</h2>
                    <p>${channel.tagline}</p>
                `;
  
                // Lägger till audio-elementet i audioDiv
                audioDiv.innerHTML = `
                    <audio controls>
                        <source src="${channel.liveaudio.url}" type="audio/mpeg" />
                    </audio>
                `;
  
                // Lägger till innehållsdiven och ljuddiven i kanaldiven
                channelDiv.appendChild(contentDiv);
                channelDiv.appendChild(audioDiv);
  
                // Lägg till kanalen på sidan
                document.getElementById("channels").appendChild(channelDiv);           
            });
        })
        .catch(error => console.error('Fel vid hämtning av data:', error));  
  }
  
  // Kör funktionen
  fetchData();
  