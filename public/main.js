const price = document.getElementById('price');
const Pname = document.getElementById('name');
const categ = document.getElementById('category');

const electronic = document.getElementById('Electronic');
const food = document.getElementById('Food');
const skincare = document.getElementById('Skincare');

const form = document.getElementById('form');
form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const obj = {
        price: price.value,
        name: Pname.value,
        category: categ.value
    }
    try {
        const response = await axios.post('/index', obj);
        console.log('Data saved!', response.data);
        form.reset();
    } catch (error) {
        console.log('Error while sending data to backend', error);
    }

});

document.addEventListener('DOMContentLoaded', async () => {
    const response = await axios.get('/index');
    data = response.data;

    data.forEach(element => {
        const li = document.createElement('li');
        li.classList.add('my-5');
        li.innerHTML = `
        ${element.price} - ${element.name} - ${element.category} <button data-id="${element.id}" class="delete btn btn-danger ml-5">Delete order</button> 
        `;
        if(element.category === "Electronic"){
            electronic.appendChild(li);
        }else if(element.category === "Food"){
            food.appendChild(li);
        }else{
            skincare.appendChild(li);
        }
    });
});

const list = document.getElementById('list');
list.addEventListener('click', async(e) => {
    if (e.target.classList.contains('delete')) {
        const id = e.target.getAttribute('data-id');
        try {
            const response = await axios.delete(`/index?id=${id}`);
            console.log('Item deleted:', response.data);

            e.target.parentElement.remove();
        } catch (error) {
            console.error('Error while deleting item:', error);
        }
    }
});