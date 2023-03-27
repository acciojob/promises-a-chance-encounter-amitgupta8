const promises = Array.from({length: 5}, (_, i) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.5) {
              resolve(Math.floor(Math.random() * 10) + 1);
            } else {
              reject(`Promise ${i+1} rejected with error`);
            }
          }, Math.random() * 2000);
        });
      });
      
      Promise.all(promises)
        .then(results => {
          const outputDiv = document.getElementById("output");
          results.forEach((result, i) => {
            const p = document.createElement("p");
            p.textContent = `${i+1}: ${result}`;
            outputDiv.appendChild(p);
          });
        })
        .catch(errors => {
          const outputDiv = document.getElementById("output");
          errors.forEach((error, i) => {
            const p = document.createElement("p");
            p.textContent = error;
            outputDiv.appendChild(p);
          });
        });