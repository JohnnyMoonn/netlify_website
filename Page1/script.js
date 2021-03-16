// create my variables
var list = document.querySelector('.json-display')
// fetch the data
fetch('shopinv.json')

// display an error if the data can't be found
.then(function(response) {
    if (!response.ok) {
    throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
})
// DO STUFF
.then( shopinv => {
    shopinv.Shop.forEach( product => {
        list.insertAdjacentHTML("beforeend", `
            <section>
                <p class="product">Item: ${product.Name}</p> 
                <p class= "product"> Cost: ${product.Price} gp</p>
                <p class= "product">Skill: ${product.Skill}</p>
            </section>            
        
        `)
    })
})
.then(() => {
    var listItem = document.querySelectorAll('.product');
        listItem.forEach( item => {
        var info = item.querySelector('.info');
        item.onClick = function() {
            info.classList.add('show');
        }
    })
})

// always good to have feedback if there's something wrong with my code
.catch(function(error) {
    var p = document.createElement('p');
    p.appendChild(
        document.createTextNode('Error: ' + error.message)
    );
    document.body.insertBefore(p, list);
});