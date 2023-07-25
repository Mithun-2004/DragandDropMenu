let lists = document.querySelectorAll('.list');
let leftBox = document.querySelector('#left');
let rightBox = document.querySelector('#right');

lists.forEach(list => {
    list.addEventListener('dragstart', function(e){
        let selected = e.target;

        rightBox.addEventListener('dragover', function(e){
            e.preventDefault();
        })
        rightBox.addEventListener('drop', function(){
            rightBox.appendChild(selected);
            selected = null;
        })

        leftBox.addEventListener('dragover', function(e){
            e.preventDefault();
        })
        leftBox.addEventListener('drop', function(){
            leftBox.appendChild(selected);
            selected = null;
        })
    })
})