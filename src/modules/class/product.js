class product{
    constructor(name,year,price){
        this.name = name;
        this.year = year;
        this.price = price;
    }
    getproductdata(){
        return[
            this.name,
            this.year,
            this.price
        ]
    }
    displayproduct(productdata){
        for(let product of productdata)
        document.querySelector('form').addEventListener('submit',(e)=>{
            e.preventDefault();
                const name = document.querySelector("input").value;
                const price = document.querySelector("input").value;
                const year = document.querySelector("input").value;
                const ul = document.createElement('ul')
                const li = document.createElement('li')
                document.querySelector('.result').appendChild(ul);
                document.querySelector('ul').appendChild(li);
                li.textContent = `${name}`;
                li.textContent = `${price}`;
                li.textContent = `${year}`;
                
            })
    }

}

